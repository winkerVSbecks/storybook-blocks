import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import glsl from 'babel-plugin-glsl/macro';

const GridMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.2, 0.0, 0.1),
    u_resolution: { type: 'v2', value: new THREE.Vector2() },
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

    varying vec2 vUv;

    #define bg vec3(0.067,0.063,0.2)

    #define yellow vec3(1.,0.843,0.)
    #define orange vec3(1.,0.451,0.)

    #define pink vec3(1.,0.278,0.522)
    #define purple vec3(0.435,0.173,0.675)

    #define blue vec3(0.,1.,1.)
    #define green vec3(0.812,1.,0.349)

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
