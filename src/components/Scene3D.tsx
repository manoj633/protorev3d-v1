import { Suspense, useRef, useMemo, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";

const ACCENT_COLOR = "#06b6d4";
const BG_COLOR = "#030712";

function AerospaceTurbine({ bladeCount = 32, radius = 0.55 }) {
  const bladesRef = useRef<THREE.InstancedMesh>(null);
  const spinRef = useRef<THREE.Group>(null);

  const bladeGeo = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.quadraticCurveTo(0.04, 0.02, 0.08, 0.2);
    shape.quadraticCurveTo(0.1, 0.4, 0.05, 0.6);
    shape.quadraticCurveTo(0.01, 0.62, 0, 0.58);
    shape.quadraticCurveTo(-0.02, 0.3, 0, 0);

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.02,
      bevelEnabled: true,
      bevelThickness: 0.01,
      bevelSize: 0.01,
    });
    geo.center();
    return geo;
  }, []);

  const temp = useMemo(() => new THREE.Object3D(), []);

  useLayoutEffect(() => {
    if (!bladesRef.current) return;
    for (let i = 0; i < bladeCount; i++) {
      const angle = (i / bladeCount) * Math.PI * 2;
      temp.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      temp.rotation.set(0.1, -0.7, angle + Math.PI / 2);
      temp.scale.set(1.2, 1.2, 1.2);
      temp.updateMatrix();
      bladesRef.current.setMatrixAt(i, temp.matrix);
    }
    bladesRef.current.instanceMatrix.needsUpdate = true;
  }, [bladeCount, radius]);

  useFrame(({ clock }) => {
    if (!spinRef.current) return;
    spinRef.current.rotation.z = clock.getElapsedTime() * 2.5;
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={spinRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.22, 0.4, 48]} />
          <meshStandardMaterial color="#0f172a" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0, 0.22]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.15, 0.32, 48]} />
          <meshStandardMaterial
            color="#020617"
            metalness={1}
            roughness={0.05}
          />
        </mesh>
        <instancedMesh ref={bladesRef} args={[bladeGeo, undefined, bladeCount]}>
          <meshStandardMaterial
            color="#1e293b"
            metalness={1}
            roughness={0.1}
            emissive={ACCENT_COLOR}
            emissiveIntensity={0.05}
          />
        </instancedMesh>
        {/* Internal Engine Glow */}
        <pointLight
          intensity={1}
          distance={2}
          color={ACCENT_COLOR}
          position={[0, 0, 0.1]}
        />
      </group>
    </Float>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[1.5, 0, 4]} fov={45} />
        <color attach="background" args={[BG_COLOR]} />
        <Environment preset="city" />

        {/* Dynamic Lights for metallic highlights */}
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
        />
        <pointLight
          position={[-5, -2, -2]}
          color={ACCENT_COLOR}
          intensity={1}
        />

        <Suspense fallback={null}>
          <AerospaceTurbine />
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            color={ACCENT_COLOR}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
