import * as THREE from 'three';
import { animated } from '@react-spring/three';
import '../materials/GridMaterial';
import { SIDE } from '../constants';

export const State = ({ opacity, ...props }) => {
  return (
    <animated.mesh {...props}>
      <planeGeometry args={[4 * SIDE, 4 * SIDE, 1, 1]} />
      <gridMaterial side={THREE.DoubleSide} />
    </animated.mesh>
  );
};
