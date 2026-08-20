"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Jupiter() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />

      <meshStandardMaterial
        color="#d4a373"
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

export default function Planet() {
  return (
    <div className="w-full h-[700px]">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 3, 5]}
          intensity={2}
        />

        <Jupiter />

        <OrbitControls
          enableZoom={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}