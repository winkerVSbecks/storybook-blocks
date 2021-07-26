import React from 'react';
import * as THREE from 'three';
import { Extrude } from '@react-three/drei';
import { animated } from '@react-spring/three';
import { SIDE, EXTRUDE_SETTINGS } from '../constants';

const AnimatedExtrude = animated(Extrude);

export const TShape = React.forwardRef(({ color, ...props }, ref) => {
  const shape = React.useMemo(() => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE, 0);
    _shape.lineTo(SIDE, SIDE * 3);
    _shape.lineTo(0, SIDE * 3);
    _shape.lineTo(0, SIDE * 2);
    _shape.lineTo(-SIDE, SIDE * 2);
    _shape.lineTo(-SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  }, []);

  return (
    <AnimatedExtrude args={[shape, EXTRUDE_SETTINGS]} ref={ref} {...props}>
      <animated.meshStandardMaterial flatShading color={color} />
    </AnimatedExtrude>
  );
});
