import * as React from 'react';
import * as THREE from 'three';

import { Setup } from '../stories/Setup';
import { useTurntable } from '../stories/useTurntable';

import { ZShape } from './ZShape';

export default {
  title: 'Shapes/ZShape',
  component: ZShape,
  decorators: [
    (storyFn) => {
      return (
        <Setup cameraPosition={new THREE.Vector3(-30, 30, 30)}>
          {storyFn()}
        </Setup>
      );
    },
  ],
};

const ZShapeScene = () => {
  const ref = useTurntable();

  return (
    <ZShape ref={ref} scale={[0.25, 0.25, 0.25]}>
      <meshStandardMaterial attach="material" color="#FF4785" />
    </ZShape>
  );
};

export const Default = () => <ZShapeScene />;
