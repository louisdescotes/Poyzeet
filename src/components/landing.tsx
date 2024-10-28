"use client";

import { Canvas } from "@react-three/fiber";
import { useOpenMenu } from "@/store";
import {
  OrthographicCamera,
  ScrollControls,
} from "@react-three/drei";
import { TextureLoader } from "three";
import Header from "./nav/Header";
import ScrollText from "./nav/ScrollText";

export default function Landing() {
  const texture = new TextureLoader().load("/gradientTexture.png");
  const { isOpen } = useOpenMenu();

  return (
    <section className="fixed top-0 left-0 w-full h-screen">
      <Header/>
      
      {/** Menu */}
      {isOpen && (
        <Canvas className="bg-[#E1E1E1] h-screen w-screen">
        <OrthographicCamera position={[0, 0, 0]} />
        <ScrollControls pages={2.95} damping={0.2} infinite>
          <ScrollText />
        </ScrollControls>

        {/** Hider */}
        <mesh position={[4, 3.5, 0]} rotation={[0, 0, Math.PI]}>
          <planeGeometry args={[20, 5]}  />
          <meshStandardMaterial
            attach="material"
            map={texture}
            transparent={true}
          />
        </mesh>

        <mesh position={[4, -3.5, 0]}>
          <planeGeometry args={[20, 5]} />
          <meshStandardMaterial
            attach="material"
            map={texture}
            transparent={true}
          />
        </mesh>

        {/** Light */}
        <ambientLight intensity={10} />
      </Canvas>
      )}
    </section>
  );
}
