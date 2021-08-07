import React from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { StoryStage } from '../../.storybook/StoryStage';
import './NoiseMaterial';

export default {
  title: 'Materials/Noise',
  component: 'Noise',
  decorators: [
    (storyFn) => {
      return (
        <StoryStage cameraPosition={new THREE.Vector3(0, 0, 30)}>
          {storyFn()}
        </StoryStage>
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
