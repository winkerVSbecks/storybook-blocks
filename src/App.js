import { Plane, softShadows } from '@react-three/drei';
import { Label } from './Label';
import { Scene } from './Scene';
import { SIDE } from './constants';
import { ComponentDriven } from './ComponentDriven';
import { useCDDState } from './useCDDState';

softShadows();

export default function App() {
  const cddStep = useCDDState();

  return (
    <>
      <Scene>
        <ComponentDriven step={cddStep} />
        {/* <Plane
          args={[100, 100]}
          position={[0, -SIDE / 2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <shadowMaterial opacity={0.05} />
        </Plane> */}
      </Scene>
      <Label step={cddStep} />
    </>
  );
}
