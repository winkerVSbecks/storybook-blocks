import React from 'react';
import * as THREE from 'three';
import { StoryStage } from '../../.storybook/StoryStage';
import { useTurntable } from '../../.storybook/useTurntable';
import { ComponentDriven } from './ComponentDriven';
import { SIDE } from '../constants';
import { useCDDState } from './useCDDState';

export default {
  title: 'CDD-Scene/ComponentDriven',
  component: ComponentDriven,
  decorators: [
    (storyFn) => {
      return (
        <StoryStage
          cameraPosition={new THREE.Vector3(-30, 30, 30)}
          lightPosition={[-10 * SIDE, 0, 2.5 * SIDE]}
        >
          {storyFn()}
        </StoryStage>
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
