"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingShapes() {
  const group = useRef<THREE.Group>(null);

  const shapes = useMemo(() => {
    const items: { position: [number, number, number]; color: string; scale: number; geometry: string }[] = [];
    const colors = ["#4f46e5", "#7c3aed", "#06b6d4", "#6366f1", "#a855f7"];
    for (let i = 0; i < 8; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6 - 4,
        ],
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: Math.random() * 0.4 + 0.15,
        geometry: ["icosahedron", "octahedron", "torus", "dodecahedron"][
          Math.floor(Math.random() * 4)
        ],
      });
    }
    return items;
  }, []);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.05;
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.02) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {shapes.map((shape, i) => (
        <Float key={i} speed={0.3 + Math.random() * 0.3} rotationIntensity={0.1} floatIntensity={0.3}>
          <mesh position={shape.position} scale={shape.scale}>
            {shape.geometry === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
            {shape.geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
            {shape.geometry === "torus" && <torusGeometry args={[1, 0.4, 16, 32]} />}
            {shape.geometry === "dodecahedron" && <dodecahedronGeometry args={[1, 0]} />}
            <MeshDistortMaterial
              color={shape.color}
              transparent
              opacity={0.08 + Math.random() * 0.08}
              wireframe
              distort={0.05 + Math.random() * 0.1}
              speed={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function Particles() {
  const count = 100;

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 25;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.008;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.015} color="#4f46e5" transparent opacity={0.15} sizeAttenuation />
    </points>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60 dark:opacity-100 transition-opacity duration-700">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <FloatingShapes />
        <Particles />
      </Canvas>
    </div>
  );
}
