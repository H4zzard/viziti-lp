import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

import {
  METERS_TO_UNITS,
  SPHERE_RADIUS,
  applyCameraView,
  deltaToScenePosition,
  lookAnglesAt,
  normalizeYaw,
  raycastPanorama,
  shortestYawDelta,
} from './coords';
import { createBasicPanoramaMaterial } from './materials';
import type { TourLink, TourNode, Vec3 } from './tour-graph';

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function animate(duration: number, onFrame: (eased: number, progress: number) => void) {
  return new Promise<void>((resolve) => {
    const start = performance.now();

    function frame(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      onFrame(easeInOutCubic(progress), progress);
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(frame);
  });
}

// Discos de navegação no chão (estilo Matterport). Medidas em metros vezes a
// escala da cena — a perspectiva faz "perto = maior" sozinha.
const DISC_RADIUS = 0.32 * METERS_TO_UNITS;
const HIT_RADIUS = DISC_RADIUS * 1.7;
const PULSE_PERIOD = 2.2; // segundos
// Links mais distantes que isso não viram disco (continuam no menu Ambientes).
const HOTSPOT_MAX_DISTANCE = 14; // metros
const HOTSPOT_FADE_MS = 200;

interface HotspotUserData {
  link: TourLink;
  baseOpacity: number;
  ring: THREE.Mesh;
  disc: THREE.Mesh;
  pulse: THREE.Mesh;
  label: CSS2DObject;
  hovered: boolean;
}

export interface PanoramaViewerOptions {
  mode?: 'viewer' | 'editor';
  defaultFov?: number;
  defaultPitch?: number;
  onPanoramaClick?: ((yaw: number, pitch: number) => void) | null;
  onNodeChange?: ((nodeId: string) => void) | null;
  /** Hover num disco de navegação: id do nó destino, ou null ao sair. */
  onHotspotHover?: ((nodeId: string | null) => void) | null;
}

export class PanoramaViewer {
  container: HTMLElement;
  mode: 'viewer' | 'editor';
  defaultFov: number;
  defaultPitch: number;
  onPanoramaClick: ((yaw: number, pitch: number) => void) | null;
  onNodeChange: ((nodeId: string) => void) | null;
  onHotspotHover: ((nodeId: string | null) => void) | null;

  nodes: Map<string, TourNode>;
  textures: Map<string, THREE.Texture>;
  currentNodeId: string | null;
  transitioning: boolean;
  viewYaw: number;
  viewPitch: number;
  viewFov: number;

  private dragging = false;
  private dragPointerId: number | null = null;
  private dragLastX = 0;
  private dragLastY = 0;
  private dragStartX = 0;
  private dragStartY = 0;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private labelRenderer: CSS2DRenderer;
  private sphere: THREE.Mesh;
  private sphereB: THREE.Mesh;
  private textureLoader: THREE.TextureLoader;
  private raf = 0;

  private hotspotGroup: THREE.Group;
  private hotspotHits: THREE.Mesh[] = [];
  private hotspotsOpacity = 1;
  private hoveredHotspot: THREE.Group | null = null;
  private raycaster = new THREE.Raycaster();
  private pointerNdc = new THREE.Vector2();
  private clock = new THREE.Clock();

  private ringGeometry: THREE.RingGeometry;
  private discGeometry: THREE.CircleGeometry;
  private pulseGeometry: THREE.RingGeometry;
  private hitGeometry: THREE.SphereGeometry;
  private hitMaterial: THREE.MeshBasicMaterial;

  private onResize: () => void;
  private onPointerDown: (event: PointerEvent) => void;
  private onPointerMove: (event: PointerEvent) => void;
  private onPointerUp: (event: PointerEvent) => void;

  constructor(container: HTMLElement, options: PanoramaViewerOptions = {}) {
    this.container = container;
    this.mode = options.mode ?? 'viewer';
    this.defaultFov = options.defaultFov ?? 100;
    this.defaultPitch = options.defaultPitch ?? -8;
    this.onPanoramaClick = options.onPanoramaClick ?? null;
    this.onNodeChange = options.onNodeChange ?? null;
    this.onHotspotHover = options.onHotspotHover ?? null;

    this.nodes = new Map();
    this.textures = new Map();
    this.currentNodeId = null;
    this.transitioning = false;
    this.viewYaw = 0;
    this.viewPitch = this.defaultPitch;
    this.viewFov = this.defaultFov;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(this.defaultFov, 1, 1, 1100);
    this.camera.position.set(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.touchAction = 'none';
    this.renderer.domElement.style.cursor = 'grab';

    this.labelRenderer = new CSS2DRenderer();
    this.labelRenderer.domElement.style.position = 'absolute';
    this.labelRenderer.domElement.style.inset = '0';
    this.labelRenderer.domElement.style.pointerEvents = 'none';

    this.container.innerHTML = '';
    this.container.style.position = 'relative';
    this.container.style.overflow = 'hidden';
    this.container.appendChild(this.renderer.domElement);
    this.container.appendChild(this.labelRenderer.domElement);

    const geometry = new THREE.SphereGeometry(SPHERE_RADIUS, 64, 48);
    this.sphere = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide }));
    this.sphere.renderOrder = 0;
    this.scene.add(this.sphere);

    // Segunda esfera para transições: recebe o panorama destino e faz fade-in
    // por opacidade sobre a esfera principal. Raio menor + depthTest off
    // garantem que desenha por cima sem z-fighting.
    this.sphereB = new THREE.Mesh(
      new THREE.SphereGeometry(SPHERE_RADIUS - 2, 64, 48),
      new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide }),
    );
    this.sphereB.renderOrder = 1;
    this.sphereB.visible = false;
    this.scene.add(this.sphereB);

    this.hotspotGroup = new THREE.Group();
    this.scene.add(this.hotspotGroup);

    this.ringGeometry = new THREE.RingGeometry(DISC_RADIUS * 0.78, DISC_RADIUS, 48);
    this.discGeometry = new THREE.CircleGeometry(DISC_RADIUS * 0.66, 48);
    this.pulseGeometry = new THREE.RingGeometry(DISC_RADIUS * 0.9, DISC_RADIUS, 48);
    // Volume de clique esférico: um círculo chato visto de lado (destino em
    // escada/mezanino) teria área de clique de poucos pixels.
    this.hitGeometry = new THREE.SphereGeometry(HIT_RADIUS, 16, 12);
    this.hitMaterial = new THREE.MeshBasicMaterial({ visible: false });

    this.textureLoader = new THREE.TextureLoader();
    this.textureLoader.setCrossOrigin('anonymous');

    this.onResize = () => this.resize();
    this.onPointerDown = (event) => this.handlePointerDown(event);
    this.onPointerMove = (event) => this.handlePointerMove(event);
    this.onPointerUp = (event) => this.handlePointerUp(event);

    this.bindEvents();
    this.resize();
    this.tick();
  }

  setNodes(nodes: TourNode[]) {
    this.nodes = new Map(nodes.map((node) => [node.id, node]));
  }

  async preload(onProgress?: (loaded: number, total: number) => void) {
    const entries = [...this.nodes.values()];
    let loaded = 0;

    await Promise.all(
      entries.map(
        (node) =>
          new Promise<void>((resolve, reject) => {
            if (this.textures.has(node.id)) {
              loaded += 1;
              onProgress?.(loaded, entries.length);
              resolve();
              return;
            }

            this.textureLoader.load(
              node.panorama,
              (texture) => {
                texture.colorSpace = THREE.SRGBColorSpace;
                this.textures.set(node.id, texture);
                loaded += 1;
                onProgress?.(loaded, entries.length);
                resolve();
              },
              undefined,
              reject,
            );
          }),
      ),
    );
  }

  async loadNode(nodeId: string, { yaw, pitch, fov }: { yaw?: number; pitch?: number; fov?: number } = {}) {
    const node = this.nodes.get(nodeId);
    if (!node) return;

    const texture = this.textures.get(nodeId);
    if (!texture) {
      throw new Error(`Textura não carregada: ${nodeId}`);
    }

    this.camera.position.set(0, 0, 0);
    this.sphereB.visible = false;
    this.setSphereMaterial(createBasicPanoramaMaterial(texture));
    this.currentNodeId = nodeId;
    this.viewYaw = yaw ?? this.viewYaw;
    this.viewPitch = pitch ?? this.defaultPitch;
    this.viewFov = fov ?? this.defaultFov;
    this.applyView();
    this.hotspotsOpacity = 1;
    this.setHotspots(node.links ?? []);
    this.onNodeChange?.(nodeId);
  }

  setHotspots(links: TourLink[]) {
    this.clearHotspots();
    links.forEach((link) => {
      if (link.distance > HOTSPOT_MAX_DISTANCE) return;
      this.hotspotGroup.add(this.buildHotspot(link));
    });
  }

  getYaw() {
    return normalizeYaw(this.viewYaw);
  }

  getPitch() {
    return this.viewPitch;
  }

  getFov() {
    return this.viewFov;
  }

  setView(yaw: number, pitch: number, fov = this.viewFov) {
    this.viewYaw = normalizeYaw(yaw);
    this.viewPitch = pitch;
    this.viewFov = fov;
    this.applyView();
  }

  async pushToNode(
    nodeId: string,
    options: { yaw?: number; pitch?: number; fromHotspot?: boolean } = {},
  ) {
    if (this.transitioning || !this.nodes.has(nodeId) || nodeId === this.currentNodeId) {
      return;
    }

    const texture = this.textures.get(nodeId);
    if (!texture) return;

    const current = this.currentNodeId ? this.nodes.get(this.currentNodeId) : null;
    const link = current?.links.find((candidate) => candidate.targetId === nodeId) ?? null;

    // Delta em metros até o destino: do grafo, ou sintetizado do yaw informado
    // (compatibilidade com chamadas antigas que só passavam ângulos).
    let delta: Vec3 | null = link?.delta ?? null;
    if (!delta && options.yaw != null) {
      const rad = THREE.MathUtils.degToRad(options.yaw);
      delta = { x: Math.sin(rad) * 2.5, y: 0, z: Math.cos(rad) * 2.5 };
    }
    const distance = link?.distance ?? 2.5;

    this.transitioning = true;
    this.setHovered(null);
    document.body.classList.add('is-transitioning', 'is-walking');

    try {
      if (!delta || Math.hypot(delta.x, delta.z) < 0.3) {
        // Sem direção horizontal utilizável (ex.: escada em caracol) — fade.
        await this.crossfadeToNode(nodeId, texture, 600);
      } else {
        await this.dollyToNode(nodeId, texture, delta, distance);
      }
      this.onNodeChange?.(nodeId);
    } finally {
      this.transitioning = false;
      document.body.classList.remove('is-transitioning', 'is-walking');
    }
  }

  async jumpToNode(nodeId: string) {
    if (this.transitioning || !this.nodes.has(nodeId) || nodeId === this.currentNodeId) {
      return;
    }

    const texture = this.textures.get(nodeId);
    if (!texture) return;

    this.transitioning = true;
    this.setHovered(null);
    document.body.classList.add('is-transitioning');

    try {
      await this.crossfadeToNode(nodeId, texture, 450);
      this.onNodeChange?.(nodeId);
    } finally {
      this.transitioning = false;
      document.body.classList.remove('is-transitioning');
    }
  }

  dispose() {
    cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.onResize);
    this.renderer.domElement.removeEventListener('pointerdown', this.onPointerDown);
    this.renderer.domElement.removeEventListener('pointermove', this.onPointerMove);
    this.renderer.domElement.removeEventListener('pointerup', this.onPointerUp);
    this.renderer.domElement.removeEventListener('pointercancel', this.onPointerUp);
    this.clearHotspots();
    this.textures.forEach((texture) => texture.dispose());
    this.sphere.geometry.dispose();
    (this.sphere.material as THREE.Material).dispose();
    this.sphereB.geometry.dispose();
    (this.sphereB.material as THREE.Material).dispose();
    this.ringGeometry.dispose();
    this.discGeometry.dispose();
    this.pulseGeometry.dispose();
    this.hitGeometry.dispose();
    this.hitMaterial.dispose();
    this.renderer.dispose();
    this.container.innerHTML = '';
  }

  // "Caminhar até lá": a câmera translada da origem até o destino dentro da
  // esfera atual (falso parallax de avanço) enquanto a esfera B — centrada no
  // destino — faz fade-in. Na chegada a câmera está no centro exato da esfera
  // B, então o swap de volta à origem é invisível (panoramas north-aligned).
  private async dollyToNode(nodeId: string, texture: THREE.Texture, delta: Vec3, distance: number) {
    const target = this.nodes.get(nodeId)!;

    // Amplitude curta: translações grandes dentro da esfera viram um "zoom"
    // borrado (magnificam a textura sem geometria real). O que vende o
    // "andar" é o movimento sutil + o fade adiantado, não a distância.
    const direction = new THREE.Vector3(delta.x, 0, delta.z).normalize();
    const travel = SPHERE_RADIUS * THREE.MathUtils.clamp(0.055 * distance, 0.1, 0.22);
    const destination = direction.multiplyScalar(travel);

    this.sphereB.position.copy(destination);
    this.setSphereBMaterial(createBasicPanoramaMaterial(texture, { transparent: true }));
    this.sphereB.visible = true;

    // Gira até "olhar para onde vai" só se o destino está longe do centro da
    // tela; o giro acontece nos primeiros 40% do trajeto, sobreposto ao
    // movimento — nada de girar depois de chegar.
    const look = lookAnglesAt(deltaToScenePosition(delta));
    const startYaw = this.viewYaw;
    const startPitch = this.viewPitch;
    const yawDelta = shortestYawDelta(startYaw, look.yaw);
    const turn = Math.abs(yawDelta) >= 25 ? yawDelta : 0;
    const arrivalPitch = THREE.MathUtils.clamp(startPitch, -20, 5);
    const duration = THREE.MathUtils.clamp(500 + distance * 70, 600, 1100);

    await animate(duration, (eased, progress) => {
      this.camera.position.copy(destination).multiplyScalar(eased);
      const material = this.sphereB.material as THREE.MeshBasicMaterial;
      // Fade adiantado: o destino domina a partir de ~65% do trajeto, para a
      // panorâmica atual nunca aparecer muito magnificada/borrada; o resto do
      // movimento acontece já "dentro" do destino (assentamento da chegada).
      material.opacity = THREE.MathUtils.smoothstep(progress, 0.1, 0.65);
      this.hotspotsOpacity = Math.max(0, 1 - (progress * duration) / HOTSPOT_FADE_MS);
      if (turn !== 0) {
        this.viewYaw = startYaw + turn * easeInOutCubic(Math.min(1, progress / 0.4));
      }
      this.viewPitch = startPitch + (arrivalPitch - startPitch) * eased;
      this.applyView();
    });

    this.finishArrival(nodeId, texture, target);
    await this.fadeHotspotsIn();
  }

  // Fade simples entre panoramas, sem deslocamento — usado pelo menu
  // "Ambientes" (destino pode estar do outro lado da planta) e por links
  // quase verticais. Orientação do mundo é preservada (north-aligned).
  private async crossfadeToNode(nodeId: string, texture: THREE.Texture, duration: number) {
    const target = this.nodes.get(nodeId)!;

    this.sphereB.position.set(0, 0, 0);
    this.setSphereBMaterial(createBasicPanoramaMaterial(texture, { transparent: true }));
    this.sphereB.visible = true;

    await animate(duration, (eased, progress) => {
      (this.sphereB.material as THREE.MeshBasicMaterial).opacity = eased;
      this.hotspotsOpacity = Math.max(0, 1 - (progress * duration) / HOTSPOT_FADE_MS);
    });

    this.finishArrival(nodeId, texture, target);
    await this.fadeHotspotsIn();
  }

  private finishArrival(nodeId: string, texture: THREE.Texture, target: TourNode) {
    this.camera.position.set(0, 0, 0);
    this.setSphereMaterial(createBasicPanoramaMaterial(texture));
    this.sphereB.visible = false;
    this.currentNodeId = nodeId;
    this.viewYaw = normalizeYaw(this.viewYaw);
    this.applyView();
    this.hotspotsOpacity = 0;
    this.setHotspots(target.links ?? []);
  }

  private async fadeHotspotsIn() {
    const from = this.hotspotsOpacity;
    await animate(250, (eased) => {
      this.hotspotsOpacity = from + (1 - from) * eased;
    });
  }

  private buildHotspot(link: TourLink): THREE.Group {
    // Links distantes ficam mais discretos para não poluir a cena.
    const baseOpacity = THREE.MathUtils.lerp(
      0.95,
      0.35,
      THREE.MathUtils.clamp((link.distance - 2) / 10, 0, 1),
    );

    const makeMaterial = (opacity: number) =>
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity,
        side: THREE.DoubleSide,
        depthTest: false,
        depthWrite: false,
      });

    const ring = new THREE.Mesh(this.ringGeometry, makeMaterial(baseOpacity * 0.9));
    const disc = new THREE.Mesh(this.discGeometry, makeMaterial(baseOpacity * 0.16));
    const pulse = new THREE.Mesh(this.pulseGeometry, makeMaterial(0));
    const hit = new THREE.Mesh(this.hitGeometry, this.hitMaterial);

    [ring, disc, pulse, hit].forEach((mesh, index) => {
      mesh.renderOrder = 2 + index;
    });

    const element = document.createElement('div');
    element.className = 'mp-spot__label';
    element.textContent = link.label;
    const label = new CSS2DObject(element);
    label.position.set(0, DISC_RADIUS * 1.6, 0);
    label.visible = false;

    const group = new THREE.Group();
    const position = deltaToScenePosition(link.delta);
    group.position.copy(position);

    // Anéis num subgrupo para poder orientá-los sem afetar hit/label.
    const plate = new THREE.Group();
    plate.add(ring, disc, pulse);

    // Disco no chão fica quase de perfil quando o destino está na altura dos
    // olhos ou acima (escada/mezanino) — nesses casos o anel vira um "alvo"
    // de frente para a câmera, estilo Matterport.
    const pitchDeg = THREE.MathUtils.radToDeg(
      Math.asin(THREE.MathUtils.clamp(position.y / position.length(), -1, 1)),
    );
    if (pitchDeg > -10) {
      plate.quaternion.setFromRotationMatrix(
        new THREE.Matrix4().lookAt(new THREE.Vector3(0, 0, 0), position, new THREE.Vector3(0, 1, 0)),
      );
    } else {
      plate.rotation.x = -Math.PI / 2; // deitado no chão
    }

    group.add(plate, hit, label);

    const userData: HotspotUserData = { link, baseOpacity, ring, disc, pulse, label, hovered: false };
    group.userData = userData;
    hit.userData.group = group;
    this.hotspotHits.push(hit);

    return group;
  }

  private clearHotspots() {
    this.setHovered(null);
    [...this.hotspotGroup.children].forEach((child) => {
      const { ring, disc, pulse, label } = child.userData as HotspotUserData;
      (ring.material as THREE.Material).dispose();
      (disc.material as THREE.Material).dispose();
      (pulse.material as THREE.Material).dispose();
      label.element?.remove();
      this.hotspotGroup.remove(child);
    });
    this.hotspotHits = [];
  }

  private updateHotspots() {
    this.hotspotGroup.visible = this.hotspotsOpacity > 0.001;
    if (!this.hotspotGroup.visible) return;

    const pulseT = (this.clock.getElapsedTime() % PULSE_PERIOD) / PULSE_PERIOD;
    this.hotspotGroup.children.forEach((child) => {
      const { baseOpacity, ring, disc, pulse, hovered } = child.userData as HotspotUserData;
      const opacity = baseOpacity * this.hotspotsOpacity;
      (ring.material as THREE.MeshBasicMaterial).opacity = opacity * (hovered ? 1 : 0.9);
      (disc.material as THREE.MeshBasicMaterial).opacity = opacity * (hovered ? 0.3 : 0.16);
      if (hovered) {
        (pulse.material as THREE.MeshBasicMaterial).opacity = 0;
      } else {
        pulse.scale.setScalar(1 + pulseT * 0.55);
        (pulse.material as THREE.MeshBasicMaterial).opacity = opacity * 0.5 * (1 - pulseT);
      }
      child.scale.setScalar(hovered ? 1.08 : 1);
    });
  }

  private pickHotspot(clientX: number, clientY: number): THREE.Group | null {
    if (this.mode !== 'viewer' || this.transitioning || this.hotspotHits.length === 0) {
      return null;
    }

    const rect = this.renderer.domElement.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    this.pointerNdc.set(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1,
    );
    this.raycaster.setFromCamera(this.pointerNdc, this.camera);
    const hits = this.raycaster.intersectObjects(this.hotspotHits, false);
    return (hits[0]?.object.userData.group as THREE.Group) ?? null;
  }

  private setHovered(group: THREE.Group | null) {
    if (this.hoveredHotspot === group) return;
    if (this.hoveredHotspot) {
      const previous = this.hoveredHotspot.userData as HotspotUserData;
      previous.hovered = false;
      previous.label.visible = false;
    }
    this.hoveredHotspot = group;
    if (group) {
      const data = group.userData as HotspotUserData;
      data.hovered = true;
      data.label.visible = true;
    }
    this.renderer.domElement.style.cursor = group ? 'pointer' : 'grab';
    this.onHotspotHover?.(group ? (group.userData as HotspotUserData).link.targetId : null);
  }

  private setSphereMaterial(material: THREE.Material) {
    const previous = this.sphere.material as THREE.Material;
    this.sphere.material = material;
    if (previous && previous !== material) {
      previous.dispose();
    }
  }

  private setSphereBMaterial(material: THREE.Material) {
    const previous = this.sphereB.material as THREE.Material;
    this.sphereB.material = material;
    if (previous && previous !== material) {
      previous.dispose();
    }
  }

  private applyView() {
    applyCameraView(this.camera, this.viewYaw, this.viewPitch);
    this.camera.fov = this.viewFov;
    this.camera.updateProjectionMatrix();
  }

  private bindEvents() {
    window.addEventListener('resize', this.onResize);
    this.renderer.domElement.addEventListener('pointerdown', this.onPointerDown);
    this.renderer.domElement.addEventListener('pointermove', this.onPointerMove);
    this.renderer.domElement.addEventListener('pointerup', this.onPointerUp);
    this.renderer.domElement.addEventListener('pointercancel', this.onPointerUp);
  }

  private handlePointerDown(event: PointerEvent) {
    if (event.button !== 0) return;

    this.dragging = true;
    this.dragPointerId = event.pointerId;
    this.dragLastX = event.clientX;
    this.dragLastY = event.clientY;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.renderer.domElement.setPointerCapture(event.pointerId);
  }

  private handlePointerMove(event: PointerEvent) {
    if (this.dragging && event.pointerId === this.dragPointerId) {
      if (this.transitioning) return;

      const deltaX = event.clientX - this.dragLastX;
      const deltaY = event.clientY - this.dragLastY;
      this.dragLastX = event.clientX;
      this.dragLastY = event.clientY;

      this.viewYaw = normalizeYaw(this.viewYaw - deltaX * 0.12);
      this.viewPitch = THREE.MathUtils.clamp(this.viewPitch - deltaY * 0.12, -85, 85);
      this.applyView();
      this.setHovered(null);
      return;
    }

    this.setHovered(this.pickHotspot(event.clientX, event.clientY));
  }

  private handlePointerUp(event: PointerEvent) {
    if (event.pointerId !== this.dragPointerId) return;

    const moved =
      Math.abs(event.clientX - this.dragStartX) > 5 || Math.abs(event.clientY - this.dragStartY) > 5;

    if (!moved) {
      const hotspot = this.pickHotspot(event.clientX, event.clientY);
      if (hotspot) {
        const { link } = hotspot.userData as HotspotUserData;
        this.pushToNode(link.targetId, { yaw: link.yaw, pitch: link.pitch, fromHotspot: true });
      } else if (this.onPanoramaClick && this.mode === 'editor') {
        const rect = this.renderer.domElement.getBoundingClientRect();
        const coords = raycastPanorama(
          this.camera,
          event.clientX - rect.left,
          event.clientY - rect.top,
          rect.width,
          rect.height,
        );
        if (coords) {
          this.onPanoramaClick(coords.yaw, coords.pitch);
        }
      }
    }

    this.dragging = false;
    this.dragPointerId = null;
    if (this.renderer.domElement.hasPointerCapture(event.pointerId)) {
      this.renderer.domElement.releasePointerCapture(event.pointerId);
    }
  }

  private resize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (!width || !height) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
    this.labelRenderer.setSize(width, height);
  }

  private tick() {
    this.updateHotspots();
    this.renderer.render(this.scene, this.camera);
    this.labelRenderer.render(this.scene, this.camera);
    this.raf = requestAnimationFrame(() => this.tick());
  }
}
