import React from 'react';
import * as THREE from 'three';
import { Setup } from '../stories/Setup';
import './GridMaterial';

export default {
  title: 'Materials/Grid',
  component: 'Grid',
  decorators: [
    (storyFn) => {
      return (
        <Setup cameraPosition={new THREE.Vector3(0, 0, 30)}>{storyFn()}</Setup>
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
