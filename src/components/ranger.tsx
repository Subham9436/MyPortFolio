import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import RangerModel from "./Ncr_veteran_ranger_bobblehead";
import { HeroLights } from "./herolights";

export function Ranger() {
  const isTablet = false;
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
      <HeroLights/>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group
        scale={isTablet ? 0.7 : 0.8}
        position={[0, -0.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <RangerModel />
      </group>
    </Canvas>
  );
}
