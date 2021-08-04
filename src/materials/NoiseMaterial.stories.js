import React from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Setup } from '../stories/Setup';
import './NoiseMaterial';

export default {
  title: 'Materials/Noise',
  component: 'Noise',
  decorators: [
    (storyFn) => {
      return (
        <Setup cameraPosition={new THREE.Vector3(0, 0, 30)}>{storyFn()}</Setup>
      );
    },
  ],
};

const NoiseMaterialScene = () => {
  const material = React.useRef();

  useFrame(({ clock }) => {
    material.current.uniforms.time.value = Math.sin(
      (2 * Math.PI * clock.getElapsedTime()) / 10
    );
  });

  return (
    <>
      <mesh>
        <planeGeometry args={[50, 50, 1, 1]} />
        <noiseMaterial ref={material} scale={1.5} />
      </mesh>
    </>
  );
};

export const Default = () => <NoiseMaterialScene />;
Default.storyName = 'Noise';
