import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import BottomModel from "./bottom3dmodel";

export function BottomContact() {
  return (
    <Canvas camera={{ position: [0, 5, 12], fov: 45 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <BottomModel />
    </Canvas>
  );
}
