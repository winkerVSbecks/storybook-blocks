import React from 'react';
import * as THREE from 'three';
import { Setup } from '../stories/Setup';
import { Data } from './Data';

export default {
  title: 'Meshes/Data',
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

const DataScene = () => {
  return <Data />;
};

export const Default = () => <DataScene />;
Default.storyName = 'Data';
