import * as THREE from "three";
import { camera } from "./core/camera";
import { renderer } from "./core/renderer";
import { scene } from "./core/scene";
import { createStars } from "./stars/createStars";

import "./style.css";
const clock = new THREE.Clock();
const stars = createStars();
scene.add(stars);

const target = { x: 0, y: 0 };
const mouse = { x: 0, y: 0 };

window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});
function animate() {
  requestAnimationFrame(animate);

  const elapsed = clock.getElapsedTime();
  (stars.material as THREE.ShaderMaterial).uniforms.uTime.value = elapsed;

  // target을 부드럽게 mouse 쪽으로 따라가게 (lerp)
  target.x += (mouse.x - target.x) * 0.05;
  target.y += (mouse.y - target.y) * 0.05;

  // 별 그룹 이동
  stars.rotation.x += (target.y - stars.rotation.x) * 0.02;
  stars.rotation.y += (target.x - stars.rotation.y) * 0.02;

  stars.position.x = target.x * 0.5;
  stars.position.y = target.y * 0.5;
  stars.position.z = target.y * 0.5;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
