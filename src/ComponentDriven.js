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
      <IShape castShadow receiveShadow position={[0, 0, 0]} />
      <LShape castShadow receiveShadow position={[0, -3 * SIDE, 0]} />
      <ZShape castShadow receiveShadow position={[2 * SIDE, -3 * SIDE, 0]} />
      <TShape castShadow receiveShadow position={[3 * SIDE, -2 * SIDE, 0]} />
      <OShape castShadow receiveShadow position={[3 * SIDE, -3 * SIDE, 0]} />
    </group>
  );
};
