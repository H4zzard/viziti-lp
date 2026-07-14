import * as THREE from 'three';

// O crossfade das transições é feito por opacidade de MeshBasicMaterial em
// duas esferas sobrepostas — o pipeline padrão do three cuida da conversão
// linear->sRGB na saída (um ShaderMaterial custom sem colorspace_fragment
// escurecia a imagem durante a transição).
export function createBasicPanoramaMaterial(
  texture: THREE.Texture,
  { transparent = false } = {},
) {
  return new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.BackSide,
    transparent,
    ...(transparent ? { opacity: 0, depthWrite: false, depthTest: false } : {}),
  });
}
