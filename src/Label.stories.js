import React from 'react';
import { Label } from './Label';
import { Globals } from '@react-spring/shared';
import { useCDDState } from './useCDDState';

Globals.assign({
  frameLoop: 'always',
});

export default {
  title: 'Compositions/Label',
  component: Label,
};

export const Default = () => {
  const cddStep = useCDDState();
  return <Label step={cddStep} />;
};
Default.storyName = 'Label';
