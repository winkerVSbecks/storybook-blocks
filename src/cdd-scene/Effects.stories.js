import React from 'react';
import * as THREE from 'three';
import { Globals } from '@react-spring/shared';
import { StoryStage } from '../../.storybook/StoryStage';
import { useTurntable } from '../../.storybook/useTurntable';
import { Effects } from './Effects';
import { SIDE } from '../constants';

Globals.assign({
  frameLoop: 'always',
});

export default {
  title: 'CDD-Scene/Effects',
  component: Effects,
  decorators: [
    (storyFn) => {
      return (
        <StoryStage
          cameraPosition={new THREE.Vector3(-30, 30, 30)}
          lightPosition={[-10 * SIDE, 0, 2.5 * SIDE]}
          debugLights
        >
          {storyFn()}
        </StoryStage>
      );
    },
  ],
};

const EffectsScene = () => {
  const ref = useTurntable();
  return (
    <>
      <mesh ref={ref}>
        <boxGeometry args={[25, 25, 25]} />
        <meshStandardMaterial color="darkviolet" />
      </mesh>
      <Effects />
    </>
  );
};

export const Default = () => <EffectsScene />;
Default.storyName = 'Effects';
