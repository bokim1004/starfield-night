precision mediump float;

uniform float uTime;
varying float vScale;

void main() {
  vec2 coord = gl_PointCoord - vec2(0.5);
  float dist = length(coord);

  if (dist > 0.5) {
    discard;
  }

  // 빛 퍼짐 효과 (중심 밝음 → 바깥 어두움)
float glow = smoothstep(0.4, 0.0, dist);  // 중심일수록 1, 테두리일수록 0
  float flicker = sin(uTime * 2.0 + vScale * 10.0) * 0.5 + 0.5;

  // 💙 별 기본 색상: 밝은 푸른빛
  vec3 starColor = vec3(0.7, 0.8, 1.0); // 밝은 푸른색 (R,G,B)
vec3 color = starColor * flicker * glow;

  gl_FragColor = vec4(color, glow); // glow를 알파로도 사용
}
