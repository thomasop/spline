import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import React, { Suspense, useRef, useState } from "react";
import CanvasLoader from "./Loader";

function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const test = useGLTF("./planet/macbook_pro_copy.gltf");

  return (
    <primitive object={test.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
}
const Contact = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 95,
      near: 0.1,
      far: 900,
      position: [-1, 0, 0],
    }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Box />

      <Preload all />
    </Suspense>
  </Canvas>
  );
};

export default Contact;
