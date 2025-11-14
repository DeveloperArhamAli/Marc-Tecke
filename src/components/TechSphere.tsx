import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

interface IconData {
  label: string;
  color: string;
}

const icons: IconData[] = [
  { label: "React", color: "#61DBFB" },
  { label: "Laravel", color: "#FF2D20" },
  { label: "PHP", color: "#8892BF" },
  { label: "SQL", color: "#00618A" },
  { label: "CSS3", color: "#264de4" },
  { label: "HTML5", color: "#e34c26" },
  { label: "Shopify", color: "#96BF48" },
  { label: "WordPress", color: "#21759b" },
  { label: "XD", color: "#FF61F6" },
  { label: "AI", color: "#FF9A00" },
  { label: "PS", color: "#31A8FF" },
  { label: "jQuery", color: "#0769AD" },
  { label: "Magento", color: "#F26322" },
];

interface FloatingIconProps {
  label: string;
  color: string;
  position: [number, number, number];
}

function FloatingIcon({ label, color, position }: FloatingIconProps) {
  const ref = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={ref} position={position}>
      <Html center>
        <div
          style={{
            background: "rgba(255,255,255,0.9)",
            borderRadius: "50%",
            padding: "10px 14px",
            fontSize: "14px",
            color,
            fontWeight: "bold",
            boxShadow: "0 0 10px rgba(0,0,0,0.15)",
            userSelect: "none",
          }}
        >
          {label}
        </div>
      </Html>
    </mesh>
  );
}

function RotatingSphere() {
  const group = useRef<THREE.Group>(null);
  useFrame(() => {
    if (group.current) group.current.rotation.y += 0.002;
  });

  const radius = 3;

  const positions = useMemo(() => {
    return icons.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / icons.length);
      const theta = Math.sqrt(icons.length * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    });
  }, []);

  const lines = useMemo(() => {
    const points: number[] = [];
    const maxConnections = 5;

    positions.forEach((p1, i) => {
      const neighbors = positions
        .map((p2, j) => ({ j, dist: p1.distanceTo(p2) }))
        .filter((n) => n.j !== i)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, maxConnections);

      neighbors.forEach(({ j }) => {
        const p2 = positions[j];
        points.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
      });
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3)
    );
    return geometry;
  }, [positions]);

  return (
    <group ref={group}>
      {/* Lines connecting nearby icons */}
      <lineSegments geometry={lines}>
        <lineBasicMaterial
          attach="material"
          color="#cccccc"
          opacity={0.35}
          transparent
        />
      </lineSegments>

      {/* Icons */}
      {icons.map((icon, i) => (
        <FloatingIcon
          key={icon.label}
          label={icon.label}
          color={icon.color}
          position={[positions[i].x, positions[i].y, positions[i].z]}
        />
      ))}
    </group>
  );
}

export default function TechSphere() {
  return (
    <div className="w-[500px] h-[500px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight />
        <RotatingSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
