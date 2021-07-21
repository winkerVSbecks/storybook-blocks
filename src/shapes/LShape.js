import * as React from 'react';
import * as THREE from 'three';
import { Extrude } from '@react-three/drei';
import { SIDE, EXTRUDE_SETTINGS } from '../constants';
import { colors } from '../colors';

export const LShape = React.forwardRef((props, ref) => {
  const shape = React.useMemo(() => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE * 2, 0);
    _shape.lineTo(SIDE * 2, SIDE);
    _shape.lineTo(SIDE, SIDE);
    _shape.lineTo(SIDE, SIDE * 3);
    _shape.lineTo(0, SIDE * 3);

    return _shape;
  }, []);

  return (
    <Extrude args={[shape, EXTRUDE_SETTINGS]} ref={ref} {...props}>
      <meshStandardMaterial
        attach="material"
        flatShading
        color={colors.ocean}
      />
    </Extrude>
  );
});
