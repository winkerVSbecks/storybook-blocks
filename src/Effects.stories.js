import React from 'react';
import * as THREE from 'three';
import { Globals } from '@react-spring/shared';
import { Setup } from './stories/Setup';
import { Effects } from './Effects';
import { SIDE } from './constants';
import { useTurntable } from './stories/useTurntable';

Globals.assign({
  frameLoop: 'always',
});

export default {
  title: 'Scene/Effects',
  component: Effects,
  decorators: [
    (storyFn) => {
      return (
        <Setup
          cameraPosition={new THREE.Vector3(-30, 30, 30)}
          lightPosition={[-10 * SIDE, 0, 2.5 * SIDE]}
        >
          {storyFn()}
        </Setup>
      );
    },
  ],
};

const EffectsScene = () => {
  const ref = useTurntable();
  return (
    <>
      <mesh ref={ref}>
        <boxGeometry args={[25, 25, 25]} />
        <meshStandardMaterial color="darkviolet" />
      </mesh>
      <Effects />
    </>
  );
};

export const Default = () => <EffectsScene />;
Default.storyName = 'Effects';
