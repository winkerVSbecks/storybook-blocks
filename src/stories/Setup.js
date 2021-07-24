import React from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  OrthographicCamera,
  useHelper,
} from '@react-three/drei';

const Lights = ({ position }) => {
  const light = React.useRef();
  // useHelper(light, THREE.PointLightHelper, 1, 'red');
  useHelper(light, THREE.SpotLightHelper, 'red');

  return (
    <>
      <ambientLight intensity={0.8} />
      {/* <pointLight ref={light} intensity={3} position={position} /> */}
      <spotLight
        ref={light}
        castShadow
        intensity={5}
        position={position}
        angle={Math.PI / 7}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  );
};

export function Setup({
  children,
  cameraFov = 75,
  cameraPosition = new THREE.Vector3(-5, 5, 5),
  controls = true,
  lights = true,
  lightPosition = [-10, -35, 5],
  ...restProps
}) {
  return (
    <Canvas
      shadows
      camera={{ position: cameraPosition, fov: cameraFov }}
      dpr={window.devicePixelRatio}
      {...restProps}
    >
      <OrthographicCamera makeDefault position={cameraPosition} zoom={10} />
      {children}
      {lights && <Lights position={lightPosition} />}
      {controls && <OrbitControls />}
    </Canvas>
  );
}
