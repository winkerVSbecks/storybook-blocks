import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { animated } from '@react-spring/three';
import '../materials/NoiseMaterial';
import { SIDE } from '../constants';

export const Data = ({ opacity, ...props }) => {
  const material = useRef();

  useFrame(({ clock }) => {
    material.current.uniforms.time.value = Math.sin(
      (2 * Math.PI * clock.getElapsedTime()) / 10
    );
  });

  return (
    <animated.mesh {...props}>
      <planeGeometry args={[4 * SIDE, 4 * SIDE, 1, 1]} />
      <noiseMaterial
        ref={material}
        side={THREE.DoubleSide}
        scale={1.5}
        size={0.15}
        density={4.0}
      />
    </animated.mesh>
  );
};
