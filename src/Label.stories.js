import React from 'react';
import { Label } from './Label';
import { useCDDState } from './useCDDState';

export default {
  title: 'Label',
  component: Label,
};

export const Default = () => {
  const cddStep = useCDDState();
  return <Label step={cddStep} />;
};
Default.storyName = 'Label';
