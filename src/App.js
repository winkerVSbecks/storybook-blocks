import { Canvas } from '@react-three/fiber';
import { Label } from './Label';
import { useCDDState } from './useCDDState';

export default function App() {
  const cddStep = useCDDState();

  return (
    <>
      <Canvas pixelRatio={Math.min(2, window.devicePixelRatio || 1)}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshPhongMaterial />
        </mesh>
      </Canvas>
      <Label step={cddStep} />
    </>
  );
}
