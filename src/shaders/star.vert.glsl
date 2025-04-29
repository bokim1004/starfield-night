precision mediump float;

uniform float uTime;
attribute float aScale;
varying float vScale;

void main() {
  vScale = aScale;

  // X축으로 살짝 흐르게 만들기
  vec3 pos = position;
  pos.x += uTime * 0.01;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
  gl_PointSize = aScale * (1.0 / -viewPosition.z) * 100.0;
}
