import React from 'react';
import * as THREE from 'three';
import { Setup } from '../stories/Setup';
import { State } from './State';

export default {
  title: 'Meshes/State',
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

const StateScene = () => {
  return <State />;
};

export const Default = () => <StateScene />;
Default.storyName = 'State';
