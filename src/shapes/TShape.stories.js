import React from 'react';
import * as THREE from 'three';
import { Setup } from '../stories/Setup';
import { useTurntable } from '../stories/useTurntable';
import { TShape } from './TShape';

export default {
  title: 'Shapes/TShape',
  component: TShape,
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

const TShapeScene = () => {
  const ref = useTurntable();
  return <TShape ref={ref} />;
};

export const Default = () => <TShapeScene />;
Default.storyName = 'TShape';
