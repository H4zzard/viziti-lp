import * as THREE from 'three';

const SPHERE_RADIUS = 500;

// Altura da câmera sobre o chão (metros) — usada para assentar os discos de
// navegação no chão do waypoint destino.
export const EYE_HEIGHT = 1.4;

// Escala metros -> unidades da cena. Mantém os discos bem dentro da esfera
// (2.5m ≈ 62 unidades de 500) para a perspectiva dar "perto = maior".
export const METERS_TO_UNITS = 25;

const MAX_HOTSPOT_RADIUS = SPHERE_RADIUS * 0.8;

// Posição na cena do ponto no chão do waypoint destino, a partir do delta em
// metros (destino - origem). Clamp radial preserva a direção de links longos.
export function deltaToScenePosition(delta: { x: number; y: number; z: number }) {
  const position = new THREE.Vector3(delta.x, delta.y - EYE_HEIGHT, delta.z).multiplyScalar(
    METERS_TO_UNITS,
  );
  if (position.length() > MAX_HOTSPOT_RADIUS) {
    position.setLength(MAX_HOTSPOT_RADIUS);
  }
  return position;
}

// Yaw/pitch de câmera que centralizam `position` na tela. Não é o mesmo yaw
// da posição (a câmera olha para -z): derivar via lookAt evita erro de
// convenção — girar até atan2(x, z) joga o alvo para fora da tela.
const lookCamera = new THREE.PerspectiveCamera();
export function lookAnglesAt(position: THREE.Vector3) {
  lookCamera.position.set(0, 0, 0);
  lookCamera.lookAt(position);
  lookCamera.rotation.reorder('YXZ');
  return {
    yaw: -THREE.MathUtils.radToDeg(lookCamera.rotation.y),
    pitch: THREE.MathUtils.radToDeg(lookCamera.rotation.x),
  };
}

export function yawPitchToPosition(yawDeg: number, pitchDeg: number, radius = SPHERE_RADIUS) {
  const yaw = THREE.MathUtils.degToRad(yawDeg);
  const pitch = THREE.MathUtils.degToRad(pitchDeg);
  const cosPitch = Math.cos(pitch);

  return new THREE.Vector3(
    cosPitch * Math.sin(yaw),
    Math.sin(pitch),
    cosPitch * Math.cos(yaw),
  ).multiplyScalar(radius);
}

export function positionToYawPitch(position: THREE.Vector3) {
  const dir = position.clone().normalize();
  const yaw = THREE.MathUtils.radToDeg(Math.atan2(dir.x, dir.z));
  const pitch = THREE.MathUtils.radToDeg(Math.asin(THREE.MathUtils.clamp(dir.y, -1, 1)));
  return { yaw, pitch };
}

export function applyCameraView(camera: THREE.PerspectiveCamera, yawDeg: number, pitchDeg: number) {
  camera.rotation.order = 'YXZ';
  camera.rotation.y = THREE.MathUtils.degToRad(-yawDeg);
  camera.rotation.x = THREE.MathUtils.degToRad(pitchDeg);
  camera.rotation.z = 0;
}

export function raycastPanorama(
  camera: THREE.PerspectiveCamera,
  pointerX: number,
  pointerY: number,
  width: number,
  height: number,
  radius = SPHERE_RADIUS,
) {
  const ndcX = (pointerX / width) * 2 - 1;
  const ndcY = -(pointerY / height) * 2 + 1;
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera);

  const sphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), radius);
  const hit = new THREE.Vector3();
  if (!raycaster.ray.intersectSphere(sphere, hit)) {
    return null;
  }

  return positionToYawPitch(hit);
}

export function normalizeYaw(yaw: number) {
  let value = yaw;
  while (value > 180) value -= 360;
  while (value < -180) value += 360;
  return value;
}

export function shortestYawDelta(from: number, to: number) {
  let delta = to - from;
  while (delta > 180) delta -= 360;
  while (delta < -180) delta += 360;
  return delta;
}

export { SPHERE_RADIUS };
