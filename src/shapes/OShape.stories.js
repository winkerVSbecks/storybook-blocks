import React from 'react';
import * as THREE from 'three';
import { Setup } from '../stories/Setup';
import { useTurntable } from '../stories/useTurntable';
import { OShape } from './OShape';

export default {
  title: 'Shapes/OShape',
  component: OShape,
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

const OShapeScene = () => {
  const ref = useTurntable();
  return <OShape ref={ref} />;
};

export const Default = () => <OShapeScene />;
Default.storyName = 'OShape';
