import React from 'react';
import * as THREE from 'three';
import { StoryStage } from '../../.storybook/StoryStage';
import { State } from './State';

export default {
  title: 'Meshes/State',
  decorators: [
    (storyFn) => {
      return (
        <StoryStage cameraPosition={new THREE.Vector3(-30, 30, 30)} zoom={6}>
          {storyFn()}
        </StoryStage>
      );
    },
  ],
};

const StateScene = () => {
  return <State rotation={[-Math.PI / 2, 0, 0]} />;
};

export const Default = () => <StateScene />;
Default.storyName = 'State';
