import React from 'react';
import * as THREE from 'three';
import { Setup } from '../stories/Setup';
import { useTurntable } from '../stories/useTurntable';
import { Shape } from './Shape';

export default {
  title: 'Meshes/Shapes',
  component: Shape,
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

const ShapeScene = ({ type }) => {
  const ref = useTurntable();
  return <Shape ref={ref} type={type} color="#4D089A" />;
};

export const I = () => <ShapeScene type="I" />;
export const L = () => <ShapeScene type="L" />;
export const O = () => <ShapeScene type="O" />;
export const T = () => <ShapeScene type="T" />;
export const Z = () => <ShapeScene type="Z" />;
