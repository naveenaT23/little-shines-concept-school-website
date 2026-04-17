"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

function Book({ position, color, rotation }: { position: any; color: string; rotation: any }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position} rotation={rotation} castShadow>
        <boxGeometry args={[0.6, 0.8, 0.15]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
      </mesh>
    </Float>
  );
}

function Pencil({ position, color, rotation }: { position: any; color: string; rotation: any }) {
  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
      <group position={position} rotation={rotation}>
        <mesh castShadow>
          <cylinderGeometry args={[0.05, 0.05, 1, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position={[0, 0.55, 0]} castShadow>
          <coneGeometry args={[0.05, 0.1, 32]} />
          <meshStandardMaterial color="#fcd34d" />
        </mesh>
      </group>
    </Float>
  );
}

function BackgroundElements() {
  const count = 15;
  const elements = useMemo(() => {
    const temp = [];
    const colors = ["#6366f1", "#f43f5e", "#fbbf24", "#22c55e", "#0ea5e9"];
    for (let i = 0; i < count; i++) {
      const type = Math.random() > 0.5 ? "book" : "pencil";
      temp.push({
        id: i,
        type,
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 5,
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return temp;
  }, []);

  return (
    <>
      {elements.map((el) => (
        el.type === "book" ? (
          <Book key={el.id} position={el.position} color={el.color} rotation={el.rotation} />
        ) : (
          <Pencil key={el.id} position={el.position} color={el.color} rotation={el.rotation} />
        )
      ))}
    </>
  );
}

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas 
        shadows 
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance",
          stencil: false
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
        
        <BackgroundElements />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
