import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import RangerModel from "./Ncr_veteran_ranger_bobblehead";

export function Ranger() {
  const isTablet=false
    return (
    <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <RangerModel/>
    </Canvas>
  );
}
