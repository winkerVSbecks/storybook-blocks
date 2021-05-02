import * as React from 'react';
import * as THREE from 'three';
import { Extrude } from '@react-three/drei';

export const LShapeGeometry = () => {
  const shape = React.useMemo(() => {
    const _shape = new THREE.Shape();

    const width = 8,
      length = 12;

    _shape.moveTo(0, 0);
    _shape.lineTo(0, width);
    _shape.lineTo(length, width);
    _shape.lineTo(length, 0);
    _shape.lineTo(0, 0);

    return _shape;
  }, []);

  const extrudeSettings = React.useMemo(
    () => ({
      steps: 2,
      depth: 16,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 1,
    }),
    []
  );

  const ref = useTurntable();

  return (
    <>
      <Extrude ref={ref} args={[shape, extrudeSettings]}>
        <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
      </Extrude>
    </>
  );
};
