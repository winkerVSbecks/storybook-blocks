import React from 'react';
import * as THREE from 'three';
import { Setup } from '../stories/Setup';
import { useTurntable } from '../stories/useTurntable';
import { ComponentDriven } from './ComponentDriven';
import { SIDE } from '../constants';
import { useCDDState } from './useCDDState';

export default {
  title: 'CDD-Scene/ComponentDriven',
  component: ComponentDriven,
  decorators: [
    (storyFn) => {
      return (
        <Setup
          cameraPosition={new THREE.Vector3(-30, 30, 30)}
          lightPosition={[-10 * SIDE, 0, 2.5 * SIDE]}
        >
          {storyFn()}
        </Setup>
      );
    },
  ],
};

const ComponentDrivenScene = () => {
  const ref = useTurntable();
  const cddStep = useCDDState();

  return (
    <>
      <axesHelper args={[SIDE * 2]} />
      <ComponentDriven ref={ref} step={cddStep} />
    </>
  );
};

export const Default = () => <ComponentDrivenScene />;
Default.storyName = 'ComponentDriven';
