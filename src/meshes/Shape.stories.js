import React from 'react';
import * as THREE from 'three';
import { StoryStage } from '../../.storybook/StoryStage';
import { useTurntable } from '../../.storybook/useTurntable';
import { Shape } from './Shape';

export default {
  title: 'Meshes/Shapes',
  component: Shape,
  decorators: [
    (storyFn) => {
      return (
        <StoryStage cameraPosition={new THREE.Vector3(-30, 30, 30)} center>
          {storyFn()}
        </StoryStage>
      );
    },
  ],
  argTypes: {
    thickness: { control: { type: 'range', min: 0, max: 20 } },
    roughness: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    clearcoat: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    clearcoatRoughness: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    transmission: { control: { type: 'range', min: 0.9, max: 1, step: 0.01 } },
    ior: { control: { type: 'range', min: 1, max: 2.3, step: 0.05 } },
    attenuationTint: { control: 'color' },
    attenuationDistance: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
    },
  },
  args: {
    thickness: 5,
    roughness: 1,
    clearcoat: 1,
    clearcoatRoughness: 0,
    transmission: 1,
    ior: 1.25,
    attenuationTint: '#fff',
    attenuationDistance: 1,
  },
};

const ShapeScene = ({ type }) => {
  const ref = useTurntable();
  return (
    <>
      <Shape ref={ref} type={type} color="#1EA7FD" />
      <gridHelper args={[200, 40]} />
    </>
  );
};

export const I = () => <ShapeScene type="I" />;
export const L = () => <ShapeScene type="L" />;
export const O = () => <ShapeScene type="O" />;
export const T = () => <ShapeScene type="T" />;
export const Z = () => <ShapeScene type="Z" />;
