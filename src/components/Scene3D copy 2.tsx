import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";

/* ------------------ 3D PRIMITIVES ------------------ */

function Cog({
  radius = 1,
  thickness = 0.2,
  teeth = 12,
  speed = 0.5,
  direction = 1,
  color = "#9CA3AF",
}) {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = direction * clock.getElapsedTime() * speed;
  });

  return (
    <group ref={ref}>
      <mesh>
        <torusGeometry args={[radius, thickness, 16, 100]} />
        <meshStandardMaterial metalness={0.8} roughness={0.35} color={color} />
      </mesh>

      {Array.from({ length: teeth }).map((_, i) => {
        const a = (i / teeth) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(a) * (radius + thickness * 0.8),
              Math.sin(a) * (radius + thickness * 0.8),
              0,
            ]}
            rotation={[0, 0, a]}
          >
            <boxGeometry
              args={[thickness * 0.7, thickness * 0.7, thickness * 2]}
            />
            <meshStandardMaterial
              metalness={0.85}
              roughness={0.25}
              color={color}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Piston({
  length = 1.6,
  width = 0.25,
  phase = 0,
  speed = 1.2,
  color = "#6B7280",
}) {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + phase;
    ref.current.position.y = Math.sin(t) * 0.25 - 0.25;
  });

  return (
    <group ref={ref}>
      <mesh position={[0, -length / 2 - 0.1, 0]}>
        <boxGeometry args={[width, length, width]} />
        <meshStandardMaterial metalness={0.9} roughness={0.25} color={color} />
      </mesh>
      <mesh position={[0, -length - 0.2, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.12, 16]} />
        <meshStandardMaterial metalness={0.95} roughness={0.15} color={color} />
      </mesh>
    </group>
  );
}

/* ------------------ SCENE ------------------ */

function MechanicalScene() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />

      <Float floatIntensity={0.6} rotationIntensity={0.3}>
        <group position={[-1.4, 0.2, 0]}>
          <Cog radius={1.1} teeth={20} speed={0.45} color="#CBD5E1" />
        </group>
        <group position={[1.2, 0.15, 0]}>
          <Cog radius={0.82} teeth={16} speed={-0.6} color="#94A3B8" />
        </group>
      </Float>

      <group position={[0, -0.1, -0.1]}>
        <Piston length={1.6} speed={1.1} phase={0} />
        <Piston length={1.3} speed={1.35} phase={1.2} color="#4B5563" />
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial metalness={0.1} roughness={0.9} color="#0F172A" />
      </mesh>

      <Sparkles count={20} size={0.08} speed={0.6} />
    </>
  );
}

/* ------------------ RESPONSIVE ------------------ */

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

/* ------------------ EXPORT ------------------ */

export function Scene3D() {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <MechanicalScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
