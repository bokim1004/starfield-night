uniform float uTime;
attribute float aScale;
varying float vScale;

void main() {
  vScale = aScale;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
  gl_PointSize = aScale * (1.0 / -viewPosition.z) * 100.0;
}