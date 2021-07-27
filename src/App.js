import { Stage } from './Stage';
import { useCDDState } from './cdd-scene/useCDDState';
import { Label } from './cdd-scene/Label';
import { ComponentDriven } from './cdd-scene/ComponentDriven';
import { Effects } from './cdd-scene/Effects';

export default function App() {
  const cddStep = useCDDState();

  return (
    <>
      <Stage>
        <ComponentDriven step={cddStep} />
        <Effects />
      </Stage>
      <Label step={cddStep} />
    </>
  );
}
