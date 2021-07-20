import * as React from 'react';
import * as THREE from 'three';
import { Setup } from '../stories/Setup';
import { useTurntable } from '../stories/useTurntable';
import { IShape } from './IShape';

export default {
  title: 'Shapes/IShape',
  component: IShape,
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

const IShapeScene = () => {
  const ref = useTurntable();
  return <IShape ref={ref} />;
};

export const Default = () => <IShapeScene />;
Default.storyName = 'IShape';
