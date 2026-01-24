import { Suspense, useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* visual constants */
const ACCENT_COLOR = "#06b6d4"; // cyan/teal
const BG_COLOR = "#0b1220"; // dark slate
const FOG_NEAR = 2;
const FOG_FAR = 14;

/* ------------------ 3D COMPONENTS ------------------ */

function TurbineBlade({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: {
  position?: [number, number, number];
  rotation?: [number, number, number];
}) {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    // fast hub rotation
    ref.current.rotation.y = clock.getElapsedTime() * 1.6;
  });

  return (
    <group ref={ref} position={position} rotation={rotation}>
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 32]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
      </mesh>

      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.5, 0, Math.sin(angle) * 0.5]}
            rotation={[0, -angle, Math.PI / 6]}
          >
            <boxGeometry args={[0.08, 0.4, 0.35]} />
            <meshStandardMaterial
              color={ACCENT_COLOR}
              metalness={0.97}
              roughness={0.04}
              emissive={ACCENT_COLOR}
              emissiveIntensity={0.02}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function ScanningGrid() {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    // smooth vertical scanning motion
    ref.current.position.y = -1.8 + ((Math.sin(t * 0.6) + 1) / 2) * 3.2;
    ref.current.material.opacity = 0.18 + Math.abs(Math.sin(t * 2)) * 0.28;
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6, 20, 20]} />
      <meshBasicMaterial
        color={ACCENT_COLOR}
        wireframe
        transparent
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function TechnicalFrame() {
  return (
    <group>
      {[
        [-3, 2, 0],
        [3, 2, 0],
        [-3, -2, 0],
        [3, -2, 0],
      ].map((pos, i) => (
        <mesh key={i} position={pos as any}>
          <boxGeometry args={[0.4, 0.4, 0.02]} />
          <meshStandardMaterial color={ACCENT_COLOR} metalness={0.8} />
        </mesh>
      ))}

      {[
        [-2.8, 0, 0, 4],
        [2.8, 0, 0, 4],
        [0, 1.8, 0, 6],
        [0, -1.8, 0, 6],
      ].map(([x, y, z, length], i) => (
        <mesh
          key={i}
          position={[x, y, z]}
          rotation={i < 2 ? [0, 0, Math.PI / 2] : [0, 0, 0]}
        >
          <boxGeometry args={[0.015, length, 0.015]} />
          <meshStandardMaterial
            color={ACCENT_COLOR}
            emissive={ACCENT_COLOR}
            emissiveIntensity={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

function PrecisionGear({
  position = [0, 0, 0],
  size = 0.8,
  speed = 1,
}: {
  position?: [number, number, number];
  size?: number;
  speed?: number;
}) {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.getElapsedTime() * speed;
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <cylinderGeometry args={[size, size, 0.15, 6]} />
        <meshStandardMaterial
          color="#1f2937"
          metalness={0.95}
          roughness={0.18}
        />
      </mesh>
      <mesh>
        <cylinderGeometry args={[size * 0.4, size * 0.4, 0.2, 32]} />
        <meshStandardMaterial
          color={ACCENT_COLOR}
          metalness={0.98}
          roughness={0.04}
          emissive={ACCENT_COLOR}
          emissiveIntensity={0.02}
        />
      </mesh>
    </group>
  );
}

function Sparkles({ count = 120 }) {
  const pointsRef = useRef<any>(null);
  const geom = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = Math.random() * 4 - 1;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.material.opacity =
      0.25 + Math.abs(Math.sin(clock.getElapsedTime() * 1.6)) * 0.45;
  });

  return (
    <points ref={pointsRef} geometry={geom}>
      <pointsMaterial
        size={0.03}
        color={ACCENT_COLOR}
        transparent
        depthWrite={false}
        opacity={0.45}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ------------------ SCENE ------------------ */

function TechnicalScene() {
  return (
    <>
      <color attach="background" args={[BG_COLOR]} />
      <fog attach="fog" args={[BG_COLOR, FOG_NEAR, FOG_FAR]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 6, 4]} intensity={1.2} />
      <pointLight position={[0, 3, 3]} intensity={0.55} color={ACCENT_COLOR} />

      <TurbineBlade position={[0, 0.6, 0]} />
      <PrecisionGear position={[-1.6, -0.6, 0]} size={0.6} speed={-0.8} />
      <PrecisionGear position={[1.6, -0.6, 0]} size={0.6} speed={1} />

      <ScanningGrid />
      <TechnicalFrame />
      <Sparkles />
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
        camera={{ position: [0, 1.2, 6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <TechnicalScene />
        </Suspense>
      </Canvas>

      {/* subtle darkening for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
    </div>
  );
}
