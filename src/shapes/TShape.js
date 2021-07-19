import * as React from 'react';
import * as THREE from 'three';
import { Extrude } from '@react-three/drei';

export const TShape = React.forwardRef((props, ref) => {
  const shape = React.useMemo(() => {
    const _shape = new THREE.Shape();

    const side = 27;

    _shape.moveTo(0, 0);
    _shape.lineTo(side, 0);
    _shape.lineTo(side, side * 3);
    _shape.lineTo(0, side * 3);
    _shape.lineTo(0, side * 2);
    _shape.lineTo(-side, side * 2);
    _shape.lineTo(-side, side);
    _shape.lineTo(0, side);

    // _shape.lineTo(0, side * 3);
    // _shape.lineTo(-side, side * 3);
    // _shape.lineTo(-side, side);
    // _shape.lineTo(0, side);

    return _shape;
  }, []);

  const extrudeSettings = React.useMemo(
    () => ({
      steps: 2,
      depth: 16,
      bevelEnabled: false,
    }),
    []
  );

  return <Extrude args={[shape, extrudeSettings]} ref={ref} {...props} />;
});
