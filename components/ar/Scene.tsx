"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function Robot() {
  const { scene } = useGLTF("/models/robot.glb");

  return (
  <primitive
  object={scene}
  scale={0.8}
  position={[0, -1.4, 0]}
  rotation={[0, Math.PI, 0]}
/>
  );
}

export default function Scene() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <Canvas
  camera={{
    position: [0, 1.5, 8],
    fov: 40,
  }}
>


        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={4}
        />

        <Environment preset="city" />

        <Robot />

<OrbitControls
    enablePan={false}
    minDistance={6}
    maxDistance={10}
    autoRotate
    autoRotateSpeed={1.5}
/>
      </Canvas>
    </div>
  );
}