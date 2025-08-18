import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";

type SkillModelProps = {
  model: string;
  scale?: number | Vector3;
  rotation: [number,number,number]
};

export function SkillModel({ model, scale, rotation }: SkillModelProps) {
  const scene = useGLTF(model);
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.2} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false}/>
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
          <group scale={scale} rotation={rotation}>
            <primitive object={scene.scene} />
          </group>
        </Float>
      </Canvas>
    </div>
  );
}
