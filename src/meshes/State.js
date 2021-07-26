import * as THREE from 'three';
import '../materials/GridMaterial';

export const State = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50, 1, 1]} />
      <gridMaterial side={THREE.DoubleSide} />
    </mesh>
  );
};
