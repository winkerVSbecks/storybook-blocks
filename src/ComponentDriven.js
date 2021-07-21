import * as React from 'react';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';
import { SIDE } from './constants';
import { IShape } from './shapes/IShape';
import { LShape } from './shapes/LShape';
import { OShape } from './shapes/OShape';
import { TShape } from './shapes/TShape';
import { ZShape } from './shapes/ZShape';

const AnimatedLShape = animated(LShape);
const AnimatedIShape = animated(IShape);
const AnimatedZShape = animated(ZShape);
const AnimatedTShape = animated(TShape);
const AnimatedOShape = animated(OShape);

export const ComponentDriven = () => {
  const springs = useSpring({
    from: { position: [0, -3 * SIDE, 10 * SIDE] },
    to: { position: [0, -3 * SIDE, 0] },
  });

  return (
    <group
      position={[-2 * SIDE, -SIDE / 2, -SIDE]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <AnimatedIShape castShadow receiveShadow position={[0, 0, 0]} />
      <AnimatedLShape castShadow receiveShadow position={springs.position} />
      <AnimatedZShape
        castShadow
        receiveShadow
        position={[2 * SIDE, -3 * SIDE, 0]}
      />
      <AnimatedTShape
        castShadow
        receiveShadow
        position={[3 * SIDE, -2 * SIDE, 0]}
      />
      <AnimatedOShape
        castShadow
        receiveShadow
        position={[3 * SIDE, -3 * SIDE, 0]}
      />
    </group>
  );
};
