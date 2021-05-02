import * as React from 'react';
import * as THREE from 'three';

import { Setup } from '../stories/Setup';
import { useTurntable } from '../stories/useTurntable';

import { LShape } from './LShape';

export default {
  title: 'Shapes/LShape',
  component: LShape,
  decorators: [
    (storyFn) => (
      <Setup cameraPosition={new THREE.Vector3(-30, 30, 30)}>{storyFn()}</Setup>
    ),
  ],
};

const LShapeScene = () => {
  const ref = useTurntable();

  return (
    <LShape ref={ref} scale={[0.25, 0.25, 0.25]}>
      <meshStandardMaterial attach="material" color="orange" />
    </LShape>
  );
};

export const Default = () => <LShapeScene />;
