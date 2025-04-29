import { camera } from "./core/camera";
import { renderer } from "./core/renderer";
import { scene } from "./core/scene";
import { createStars } from "./stars/createStars";

import "./style.css";

const stars = createStars();
scene.add(stars);

function animate() {
  requestAnimationFrame(animate);

  stars.rotation.y += 0.0005; // 살짝 흐르는 느낌
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
