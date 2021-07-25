import React from 'react';
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

export const ComponentDriven = ({ step }) => {
  const springI = useSpring(STATES[step]['I']);
  const springL = useSpring(STATES[step]['L']);
  const springZ = useSpring(STATES[step]['Z']);
  const springT = useSpring(STATES[step]['T']);
  const springO = useSpring(STATES[step]['O']);

  return (
    <group
      position={[-2 * SIDE, -SIDE / 2, -SIDE]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <AnimatedIShape castShadow receiveShadow position={springI.position} />
      <AnimatedLShape castShadow receiveShadow position={springL.position} />
      <AnimatedZShape castShadow receiveShadow position={springZ.position} />
      <AnimatedTShape castShadow receiveShadow position={springT.position} />
      <AnimatedOShape castShadow receiveShadow position={springO.position} />
    </group>
  );
};

const STATES = [
  {
    I: { position: [0, 0, 10 * SIDE] },
    L: { position: [0, -3 * SIDE, SIDE] },
    Z: { position: [2 * SIDE, -3 * SIDE, 10 * SIDE] },
    T: { position: [3 * SIDE, -2 * SIDE, 10 * SIDE] },
    O: { position: [3 * SIDE, -3 * SIDE, 10 * SIDE] },
  },
  {
    I: { position: [0, 0, 10 * SIDE] },
    L: { position: [0, -3 * SIDE, 0] },
    Z: { position: [2 * SIDE, -3 * SIDE, 0] },
    T: { position: [3 * SIDE, -2 * SIDE, 10 * SIDE] },
    O: { position: [3 * SIDE, -3 * SIDE, 10 * SIDE] },
  },
  {
    I: { position: [0, 0, 0], delay: 100 },
    L: { position: [0, -3 * SIDE, 0] },
    Z: { position: [2 * SIDE, -3 * SIDE, 0] },
    T: { position: [3 * SIDE, -2 * SIDE, 0], delay: 50 },
    O: { position: [3 * SIDE, -3 * SIDE, 0], delay: 0 },
  },
  {
    I: { position: [0, 0, SIDE] },
    L: { position: [0, -3 * SIDE, SIDE] },
    Z: { position: [2 * SIDE, -3 * SIDE, SIDE] },
    T: { position: [3 * SIDE, -2 * SIDE, SIDE] },
    O: { position: [3 * SIDE, -3 * SIDE, SIDE] },
  },
];
