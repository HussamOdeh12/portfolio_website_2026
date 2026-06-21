"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

const SKILL_LABELS = ["React", "Node.js", "MongoDB", "TypeScript", "Tailwind", "Next.js"];

function OrbitingTexts() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  const items = useMemo(
    () =>
      SKILL_LABELS.map((label, i) => {
        const angle = (i / SKILL_LABELS.length) * Math.PI * 2;
        const radius = 2.5;
        return {
          label,
          position: [Math.cos(angle) * radius, Math.sin(angle) * radius * 0.5, 0] as [number, number, number],
          color: ["#3b82f6", "#8b5cf6", "#06b6d4", "#6366f1", "#a855f7", "#22d3ee"][i],
        };
      }),
    []
  );

  return (
    <group ref={group}>
      {items.map((item, i) => (
        <Float key={i} speed={0.5} floatIntensity={0.3}>
            <Text
              position={item.position}
              fontSize={0.25}
              color={item.color}
              anchorX="center"
              anchorY="middle"
              fillOpacity={0.6}
            >
              {item.label}
            </Text>
        </Float>
      ))}
    </group>
  );
}

export function SkillOrbit3D() {
  return (
    <div className="w-full h-64 md:h-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <OrbitingTexts />
      </Canvas>
    </div>
  );
}
