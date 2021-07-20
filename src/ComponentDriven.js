import * as React from 'react';
import * as THREE from 'three';
import { colors } from './colors';
import { IShape } from './shapes/IShape';
import { LShape } from './shapes/LShape';
import { OShape } from './shapes/OShape';
import { TShape } from './shapes/TShape';
import { ZShape } from './shapes/ZShape';

export const ComponentDriven = () => {
  return (
    <group>
      <IShape scale={[0.25, 0.25, 0.25]}>
        <meshStandardMaterial attach="material" color={colors.purple} />
      </IShape>
      <LShape scale={[0.25, 0.25, 0.25]}>
        <meshStandardMaterial attach="material" color={colors.ocean} />
      </LShape>
      <OShape scale={[0.25, 0.25, 0.25]}>
        <meshStandardMaterial attach="material" color={colors.purple} />
      </OShape>
      <TShape scale={[0.25, 0.25, 0.25]}>
        <meshStandardMaterial attach="material" color={colors.purple} />
      </TShape>
      <ZShape scale={[0.25, 0.25, 0.25]}>
        <meshStandardMaterial attach="material" color={colors.purple} />
      </ZShape>
    </group>
  );
};
