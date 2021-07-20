import * as React from 'react';
import * as THREE from 'three';
import { SIDE } from './constants';
import { IShape } from './shapes/IShape';
import { LShape } from './shapes/LShape';
import { OShape } from './shapes/OShape';
import { TShape } from './shapes/TShape';
import { ZShape } from './shapes/ZShape';

export const ComponentDriven = () => {
  return (
    <group
      position={[-2 * SIDE, -SIDE / 2, -SIDE]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <IShape position={[0, 0, 0]} />
      <LShape position={[0, -3 * SIDE, 0]} />
      <ZShape position={[2 * SIDE, -3 * SIDE, 0]} />
      <TShape position={[3 * SIDE, -2 * SIDE, 0]} />
      <OShape position={[3 * SIDE, -3 * SIDE, 0]} />
    </group>
  );
};
