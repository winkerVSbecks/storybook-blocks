import React from 'react';
import * as THREE from 'three';
import { StoryStage } from '../../.storybook/StoryStage';
import { Data } from './Data';

export default {
  title: 'Meshes/Data',
  decorators: [
    (storyFn) => {
      return (
        <StoryStage cameraPosition={new THREE.Vector3(-30, 30, 30)}>
          {storyFn()}
        </StoryStage>
      );
    },
  ],
};

const DataScene = () => {
  return <Data rotation={[-Math.PI / 2, 0, 0]} />;
};

export const Default = () => <DataScene />;
Default.storyName = 'Data';
