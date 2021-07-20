import * as React from 'react';
import * as THREE from 'three';
import { Extrude } from '@react-three/drei';
import { SIDE, EXTRUDE_SETTINGS } from '../constants';
import { colors } from '../colors';

export const IShape = React.forwardRef((props, ref) => {
  const shape = React.useMemo(() => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(3 * SIDE, 0);
    _shape.lineTo(3 * SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  }, []);

  return (
    <Extrude args={[shape, EXTRUDE_SETTINGS]} ref={ref} {...props}>
      <meshStandardMaterial attach="material" color={colors.purple} />
    </Extrude>
  );
});
