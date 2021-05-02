import { Canvas } from '@react-three/fiber';

export default function App() {
  return (
    <Canvas pixelRatio={Math.min(2, window.devicePixelRatio || 1)}>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry />
        <meshPhongMaterial />
      </mesh>
    </Canvas>
  );
}
