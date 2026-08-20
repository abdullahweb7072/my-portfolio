"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Earth() {
  const ref = useRef();

  const texture = useLoader(
    THREE.TextureLoader,
    "/textures/earth1.jpg"
  );

  texture.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh ref={ref}>
      
      {/* 🌍 FULL SPHERE (correct Earth mapping) */}
      <sphereGeometry args={[2.0, 128, 128]} />

      <meshStandardMaterial
        map={texture}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

export default function EarthScene() {
  return (
    <div className="w-full h-[800px] bg-black">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        
        {/* 🌌 Stars background */}
        <Stars
          radius={300}
          depth={100}
          count={8000}
          factor={6}
          fade
        />

        {/* 🌍 Balanced lighting */}
        <hemisphereLight
          skyColor={"#ffffff"}
          groundColor={"#222222"}
          intensity={2}
        />

        <directionalLight position={[5, 3, 5]} intensity={1.5} />

        {/* 🌍 Earth */}
        <Earth />

        {/* 🖱️ Mouse control only */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}