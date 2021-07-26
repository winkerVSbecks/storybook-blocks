import React from 'react';

const STEP_COUNT = 4;

export function useCDDState() {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(
      () => setStep((state) => (state + 1) % STEP_COUNT),
      3000
    );
    return () => clearTimeout(t);
  }, []);

  return step;
}
