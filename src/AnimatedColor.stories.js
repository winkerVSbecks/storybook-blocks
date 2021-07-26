import React from 'react';
import * as THREE from 'three';
import { Setup } from './stories/Setup';
import { useSpring, animated } from '@react-spring/three';
import { SIDE } from './constants';
import { useCDDState } from './useCDDState';

export default {
  title: 'AnimatedColor',
  decorators: [
    (storyFn) => {
      return (
        <Setup
          cameraPosition={new THREE.Vector3(-30, 30, 30)}
          lightPosition={[-10 * SIDE, 0, 2.5 * SIDE]}
        >
          {storyFn()}
        </Setup>
      );
    },
  ],
};

const colors = ['#ff0', '#f0f', '#f00', '#00f', '#0ff'];

const AnimatedColorScene = () => {
  const state = useCDDState();

  const { color } = useSpring({
    color: colors[state],
  });

  return (
    <mesh>
      <boxGeometry args={[25, 25, 25]} />
      <animated.meshStandardMaterial color={color} />
    </mesh>
  );
};

export const Default = () => <AnimatedColorScene />;
Default.storyName = 'AnimatedColor';
