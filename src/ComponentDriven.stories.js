import * as React from 'react';
import * as THREE from 'three';
import { Setup } from './stories/Setup';
import { useTurntable } from './stories/useTurntable';
import { ComponentDriven } from './ComponentDriven';
import { SIDE } from './constants';

export default {
  title: 'ComponentDriven',
  component: ComponentDriven,
  decorators: [
    (storyFn) => {
      return (
        <Setup
          cameraPosition={new THREE.Vector3(-30, 30, 30)}
          lightPosition={[-8 * SIDE, 0, 2.5 * SIDE]}
        >
          {storyFn()}
        </Setup>
      );
    },
  ],
};

const ComponentDrivenScene = () => {
  const ref = useTurntable();
  return (
    <>
      <axesHelper args={[SIDE * 2]} />
      <ComponentDriven ref={ref} />
    </>
  );
};

export const Default = () => <ComponentDrivenScene />;
Default.storyName = 'ComponentDriven';
