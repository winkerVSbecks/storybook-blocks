import React from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { SIDE } from './constants';

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      {/* <spotLight
        castShadow
        intensity={0.5}
        position={[0, 8 * SIDE, 0]}
        angle={Math.PI / 6}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      /> */}
      <spotLight
        intensity={5}
        position={[-10 * SIDE, 0, 2.5 * SIDE]}
        angle={Math.PI / 7}
      />
    </>
  );
};

export const Scene = ({
  children,
  cameraFov = 75,
  cameraPosition = new THREE.Vector3(-5, 5, 5),
  controls = true,
  lights = true,
  lightPosition = [-10, -35, 5],
  ...restProps
}) => {
  return (
    <Canvas
      shadows
      camera={{ position: cameraPosition, fov: cameraFov }}
      dpr={window.devicePixelRatio}
      alpha
      color="#161336"
      {...restProps}
    >
      <OrthographicCamera
        makeDefault
        position={new THREE.Vector3(-30, 30, 30)}
        zoom={10}
      />
      {children}
      <Lights />
      <OrbitControls />
    </Canvas>
  );
};
