import { softShadows } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { Label } from './Label';
import { Scene } from './Scene';
import { ComponentDriven } from './ComponentDriven';
import { useCDDState } from './useCDDState';
import { Effects } from './Effects';

softShadows();

extend({ UnrealBloomPass });

export default function App() {
  const cddStep = useCDDState();

  return (
    <>
      <Scene>
        <ComponentDriven step={cddStep} />
        <Effects />
      </Scene>
      <Label step={cddStep} />
    </>
  );
}
