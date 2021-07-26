import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import glsl from 'babel-plugin-glsl/macro';

const GridMaterial = shaderMaterial(
  {
    bg: new THREE.Color('#111033'),
    yellow: new THREE.Color('#ffd600'),
    orange: new THREE.Color('#ff7300'),
    pink: new THREE.Color('#ff4685'),
    purple: new THREE.Color('#6e2cac'),
    blue: new THREE.Color('#00ffff'),
    green: new THREE.Color('#cfff58'),
  },
  // vertex shader
  glsl/* glsl */ `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  glsl/* glsl */ `
    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform vec3 bg;
    uniform vec3 blue;
    uniform vec3 green;
    varying vec2 vUv;

    vec2 tile(vec2 st, float zoom){
      st *= zoom;
      return fract(st);
    }

    float box(vec2 st, vec2 w){
      // bottom-left
      vec2 bl = step(w, st);
      float pct = bl.x * bl.y;

      // top-right
      vec2 tr = step(w, 1.0 - st);
      pct *= tr.x * tr.y;

      return pct;
    }

    vec3 gradient(float c) {
      vec3 stroke = mix(blue, green, vUv.x + vUv.y);
      return mix(stroke, bg, c);
    }

    void main(void){
      vec2 st = tile(vUv, 10.0);

      float c = box(st, vec2(0.02));
      c *= box(vUv, vec2(0.005));

      vec3 color = gradient(c);

      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ GridMaterial });
