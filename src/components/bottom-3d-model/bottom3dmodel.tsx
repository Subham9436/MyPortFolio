import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group } from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: Record<string, any>;
  materials: Record<string, any>;
};

interface RangerModelProps {
  url?: string; // model URL, optional
  scale?: number;
  position?: [number, number, number];
}

export default function BottomModel({
  url = "assets/public/models/computer-optimized.glb", // <-- place your GLB in public/models
  scale = 0.03,
  position = [0, 0, 0],
}: RangerModelProps) {
  const group = useRef<Group>(null);

  const { scene, animations } = useGLTF(url) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  // Play first animation if available
  useEffect(() => {
    if (animations.length > 0) {
      const firstAction = actions[animations[0].name];
      if (firstAction) {
        firstAction.play();
      }
    }
  }, [actions, animations]);

  return (
    <group ref={group} scale={scale} position={position} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("assets/public/models/computer-optimized.glb");
