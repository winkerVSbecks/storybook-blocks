import React from 'react';
import * as THREE from 'three';
import { StoryStage } from '../../.storybook/StoryStage';
import './GridMaterial';

export default {
  title: 'Materials/Grid',
  component: 'Grid',
  decorators: [
    (storyFn) => {
      return (
        <StoryStage cameraPosition={new THREE.Vector3(0, 0, 30)}>
          {storyFn()}
        </StoryStage>
      );
    },
  ],
};

const GridMaterialScene = () => {
  return (
    <mesh>
      <planeGeometry args={[50, 50, 1, 1]} />
      <gridMaterial side={THREE.DoubleSide} />
    </mesh>
  );
};

export const Default = () => <GridMaterialScene />;
Default.storyName = 'Grid';
