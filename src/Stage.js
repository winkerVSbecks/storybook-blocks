import React from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { SIDE } from './constants';

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <spotLight
        intensity={5}
        position={[-10 * SIDE, 0, 2.5 * SIDE]}
        angle={Math.PI / 7}
      />
    </>
  );
};

export const Stage = ({
  children,
  controls = true,
  lights = true,
  lightPosition = [-10, -35, 5],
  ...props
}) => {
  return (
    <Canvas
      shadows
      dpr={window.devicePixelRatio}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('#06092c'));
      }}
      {...props}
    >
      <OrthographicCamera
        makeDefault
        position={new THREE.Vector3(-30, 30, 30)}
        zoom={10}
      />
      {children}
      <Lights />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
};
