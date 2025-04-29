import * as THREE from "three";
import starVertexShader from "../shaders/star.vert.glsl?raw";
import starFragmentShader from "../shaders/start.frag.glsl?raw";

export const createStars = (count = 2000) => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const scales = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

    scales[i] = Math.random() * 0.6 + 0.2;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

  const material = new THREE.ShaderMaterial({
    vertexShader: starVertexShader,
    fragmentShader: starFragmentShader,
    uniforms: {
      uTime: { value: 0 },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  return new THREE.Points(geometry, material);
};
