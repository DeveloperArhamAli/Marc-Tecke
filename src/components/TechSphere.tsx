import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

import { 
    ReactIcon,
    LaravelIcon,
    PHPIcon,
    CSSIcon,
    HTMLIcon,
    ShopifyIcon,
    WordPressIcon,
    AdobeXDIcon,
    AIIcon,
    PhotoshopIcon,
    jQueryIcon,
    MagentoIcon,
    MySQLIcon
} from "@/assets/images";

interface IconData {
  img: string;
  color: string;
}

const icons: IconData[] = [
  { img: ReactIcon, color: "#B3E5FC" },
  { img: LaravelIcon, color: "#F8BBD0" },
  { img: PHPIcon, color: "#D1C4E9" },
  { img: MySQLIcon, color: "#C8E6C9" },
  { img: CSSIcon, color: "#FFECB3" },
  { img: HTMLIcon, color: "#FFE0B2" },
  { img: ShopifyIcon, color: "#DCEDC8" },
  { img: WordPressIcon, color: "#BBDEFB" },
  { img: AdobeXDIcon, color: "#F3E5F5" },
  { img: AIIcon, color: "#FFF3E0" },
  { img: PhotoshopIcon, color: "#E3F2FD" },
  { img: jQueryIcon, color: "#E1F5FE" },
  { img: MagentoIcon, color: "#FFCCBC" },
];

interface FloatingIconProps {
  img: string;
  color: string;
  position: [number, number, number];
}

function FloatingIcon({ img, color, position }: FloatingIconProps) {
  return (
    <mesh position={position}>
      <Html center>
        <div
          style={{
            background: color,
            borderRadius: "50%",
            padding: "10px",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <img src={img} className="h-10 w-10 object-contain" />
        </div>
      </Html>
    </mesh>
  );
}

function RotatingSphere() {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (group.current) group.current.rotation.y += 0.003;
  });

  const radius = 3;

  const positions = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const N = icons.length;
    const offset = 2 / N;
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < N; i++) {
      const y = (i * offset - 1) + offset / 2;
      const r = Math.sqrt(1 - y * y);

      const phi = i * increment;

      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;

      pts.push(new THREE.Vector3(x * radius, y * radius, z * radius));
    }

    return pts;
  }, []);

  const lines = useMemo(() => {
    const points: number[] = [];
    const maxConnections = 5;

    positions.forEach((p1, i) => {
      const neighbors = positions
        .map((p2, j) => ({ j, dist: p1.distanceTo(p2) }))
        .filter(n => n.j !== i)
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
      {/* Connecting lines */}
      <lineSegments geometry={lines}>
        <lineBasicMaterial 
          color="#cccccc" 
          opacity={0.35} 
          transparent 
        />
      </lineSegments>

      {/* Icons */}
      {icons.map((icon, i) => (
        <FloatingIcon
          key={i}
          img={icon.img}
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
        <ambientLight intensity={1} />
        <RotatingSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}