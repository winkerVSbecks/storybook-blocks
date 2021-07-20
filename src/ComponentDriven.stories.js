import * as React from 'react';
import * as THREE from 'three';
import { Setup } from './stories/Setup';
import { useTurntable } from './stories/useTurntable';
import { colors } from './colors';
import { ComponentDriven } from './ComponentDriven';

export default {
  title: 'ComponentDriven',
  component: ComponentDriven,
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

const ComponentDrivenScene = () => {
  const ref = useTurntable();

  return (
    <ComponentDriven ref={ref} scale={[0.25, 0.25, 0.25]}>
      <meshStandardMaterial attach="material" color={colors.purple} />
    </ComponentDriven>
  );
};

export const Default = () => <ComponentDrivenScene />;
Default.storyName = 'ComponentDriven';
