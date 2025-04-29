precision mediump float;
uniform float uTime;
varying float vScale;

void main() {
  // 점의 중심에서의 거리 계산 (0.0 ~ 1.0)
  vec2 coord = gl_PointCoord - vec2(0.5);
  float dist = length(coord);

  // 원형 마스크 적용 (거리가 0.5보다 크면 투명 처리)
  if (dist > 0.5) {
    discard;
  }

  float flicker = sin(uTime * 2.0 + vScale * 10.0) * 0.5 + 0.5;
  vec3 color = vec3(1.0) * flicker;

  gl_FragColor = vec4(color, 1.0);
}