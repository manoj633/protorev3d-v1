import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

/* ==============================
   CONFIG (EASY TO CONTROL)
================================ */
const ENABLE_ANIMATION = true;
const ACCENT_COLOR = "#4da3ff"; // steel-blue
const BG_COLOR = "#0e0e0e";

/* ==============================
   WIREFRAME ASSEMBLY (CAD FEEL)
================================ */
function WireframeAssembly() {
  const group = useRef<THREE.Group>(null);

  const geometries = useMemo(() => {
    return new Array(6).fill(0).map((_, i) => {
      const size = 2 + i * 0.6;
      return new THREE.BoxGeometry(size, size * 0.4, size * 0.6);
    });
  }, []);

  useFrame((state) => {
    if (!ENABLE_ANIMATION || !group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.04;
    group.current.rotation.x = t * 0.015;
  });

  return (
    <group ref={group}>
      {geometries.map((geo, i) => (
        <lineSegments
          key={i}
          geometry={new THREE.WireframeGeometry(geo)}
          position={[0, i * 0.15, 0]}
        >
          <lineBasicMaterial
            color={ACCENT_COLOR}
            transparent
            opacity={0.12 - i * 0.012}
          />
        </lineSegments>
      ))}
    </group>
  );
}

/* ==============================
   POINT CLOUD (SCAN / REVERSE ENG)
================================ */
function PointCloudShell() {
  const geometry = useMemo(() => {
    const count = 1200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color={ACCENT_COLOR}
        transparent
        opacity={0.35}
        depthWrite={false}
      />
    </points>
  );
}

/* ==============================
   INSPECTION / GD&T RINGS
================================ */
function InspectionRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ENABLE_ANIMATION || !group.current) return;
    group.current.rotation.z = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <group ref={group}>
      {[1.8, 2.4, 3.0].map((radius, i) => {
        const segments = 64;
        const positions = new Float32Array(segments * 3);

        for (let j = 0; j < segments; j++) {
          const a = (j / segments) * Math.PI * 2;
          positions[j * 3] = Math.cos(a) * radius;
          positions[j * 3 + 1] = 0;
          positions[j * 3 + 2] = Math.sin(a) * radius;
        }

        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                array={positions}
                count={segments}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={ACCENT_COLOR}
              transparent
              opacity={0.15}
            />
          </line>
        );
      })}
    </group>
  );
}

/* ==============================
   CALM CAMERA DRIFT
================================ */
function SlowCameraDrift() {
  const { camera } = useThree();

  useFrame((state) => {
    if (!ENABLE_ANIMATION) return;
    const t = state.clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.05) * 0.6;
    camera.position.y = 2.5 + Math.sin(t * 0.03) * 0.3;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ==============================
   TAB VISIBILITY PAUSE
================================ */
function VisibilityPause() {
  useEffect(() => {
    const originalGetDelta = THREE.Clock.prototype.getDelta;

    const onVisibility = () => {
      if (document.hidden) {
        THREE.Clock.prototype.getDelta = () => 0;
      } else {
        THREE.Clock.prototype.getDelta = originalGetDelta;
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      THREE.Clock.prototype.getDelta = originalGetDelta;
    };
  }, []);

  return null;
}

/* ==============================
   MECHANICAL HERO ANIMATION
================================ */
function Gear({
  radius = 1,
  thickness = 0.3,
  teeth = 12,
  speed = 0.6,
  color = ACCENT_COLOR,
  position = [0, 0, 0],
  invert = false,
}: {
  radius?: number;
  thickness?: number;
  teeth?: number;
  speed?: number;
  color?: string;
  position?: [number, number, number];
  invert?: boolean;
}) {
  const group = useRef<THREE.Group>(null);

  const bodyGeom = useMemo(() => {
    return new THREE.TorusGeometry(radius, thickness * 0.42, 16, 64);
  }, [radius, thickness]);

  const toothGeom = useMemo(() => {
    return new THREE.BoxGeometry(
      thickness * 0.35,
      thickness * 0.9,
      thickness * 0.6,
    );
  }, [thickness]);

  useFrame((state) => {
    if (!ENABLE_ANIMATION || !group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.z = (invert ? -1 : 1) * t * speed;
  });

  return (
    <group ref={group} position={position as any}>
      <mesh geometry={bodyGeom}>
        <meshStandardMaterial color={color} metalness={0.75} roughness={0.22} />
      </mesh>

      {new Array(teeth).fill(0).map((_, i) => {
        const a = (i / teeth) * Math.PI * 2;
        const x = Math.cos(a) * (radius + thickness * 0.5);
        const y = Math.sin(a) * (radius + thickness * 0.5);
        return (
          <mesh
            key={i}
            geometry={toothGeom}
            position={[x, y, 0]}
            rotation={[0, 0, a]}
          >
            <meshStandardMaterial
              color={color}
              metalness={0.6}
              roughness={0.28}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function MechanicalAnimation() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ENABLE_ANIMATION || !group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.12) * 0.08;
    group.current.rotation.x = Math.sin(t * 0.06) * 0.04;
  });

  return (
    <group ref={group} position={[0, 0.6, 0]}>
      <Gear
        radius={1.6}
        thickness={0.28}
        teeth={20}
        speed={0.9}
        position={[-1.8, 0.2, 0]}
      />
      <Gear
        radius={1.0}
        thickness={0.22}
        teeth={14}
        speed={-1.2}
        position={[0, 0.2, 0]}
      />
      <Gear
        radius={0.62}
        thickness={0.18}
        teeth={10}
        speed={0.7}
        position={[1.35, 0.2, 0]}
      />

      <mesh position={[0, -0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 3.6, 12]} />
        <meshStandardMaterial
          color={ACCENT_COLOR}
          emissive={ACCENT_COLOR}
          emissiveIntensity={0.04}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

/* ==============================
   EXPORT — DO NOT RENAME
================================ */
export function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 bg-[#0e0e0e] pointer-events-none">
      {/* Readability overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10" />

      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "low-power" }}
        camera={{ position: [6, 3, 6], fov: 45 }}
      >
        <color attach="background" args={[BG_COLOR]} />
        <ambientLight intensity={0.35} />

        <directionalLight intensity={0.6} position={[5, 6, 2]} />
        <MechanicalAnimation />

        <SlowCameraDrift />
        <VisibilityPause />
      </Canvas>
    </div>
  );
}
