import * as React from 'react';
import * as THREE from 'three';
import { Setup } from '../stories/Setup';
import { useTurntable } from '../stories/useTurntable';
import { LShape } from './LShape';

export default {
  title: 'Shapes',
  component: LShape,
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

const LShapeScene = () => {
  const ref = useTurntable();
  return <LShape ref={ref} />;
};

export const Default = () => <LShapeScene />;
Default.storyName = 'LShape';
