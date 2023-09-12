"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Box = () => {
  const meshRef = useRef(null);
  const [clicked, click] = useState(false);
  const [hovered, hover] = useState(false);

  useFrame(() => {
    // if(!meshRef.current){
    //   return;
    // }
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={meshRef}
      scale={clicked ? 4: 1}
      onPointerOver={(e) => (e.stopPropagation(), hover(true))}
      onPointerOut={(e) => hover(false)}
    >
      
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered? 'blue' : 'green'} roughness={1.5} />
    </mesh>
  );
};

export default function Three() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={4} />
        <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} />
        <pointLight position={[5, 5, 5]} />
        <Box position={[-1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </>
  );
}
