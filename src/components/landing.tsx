"use client";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useOpenMenu } from "@/store";
import {
  OrthographicCamera,
  ScrollControls,
  Text3D,
  useScroll,
} from "@react-three/drei";
import { TextureLoader } from "three";
import Header from "./nav/Header";

const textArray = [
  "Index",
  "Explication",
  "Avantages",
  "Shop",
  "Contact",
  "Autres",
  "Index",
  "Explication",
  "Avantages",
  "Shop",
  "Contact",
  "Autres",
];

function ScrollText() {
  // const model = useLoader(GLTFLoader, "/test.glb", (loader) => {
  //   const dracoLoader = new DRACOLoader();
  //   dracoLoader.setDecoderPath("/draco/");
  //   loader.setDRACOLoader(dracoLoader);
  // });


  const scroll = useScroll();
  const radius = 5;

  const angleIncrement = (2 * Math.PI) / textArray.length;

  const groupRefs = Array.from({ length: textArray.length }, () =>
    React.createRef()
  );
  const vinylRef = useRef();

  useFrame(() => {
    const offset = scroll.offset * 2 * Math.PI;
    const angle = angleIncrement + offset;

    vinylRef.current.rotation.set(0, angle, 0);

    groupRefs.forEach((ref, index) => {
      const angle = index * angleIncrement + offset;
      const x = radius * Math.cos(angle) + 5;
      const y = radius * Math.sin(angle) - 0.5;

      ref.current.position.set(x, y, -2);
    });
  });

  return (
    <>
      {textArray.map((text, index) => (
        <group key={index} ref={groupRefs[index]}>
          <Text3D font="/Satoshi Medium_Regular.json" height={0}>
            {text}
            <meshMatcapMaterial color="#292929" />
          </Text3D>
        </group>
      ))}
      <mesh ref={vinylRef} position={[-3, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#9900FF" />
      </mesh>
    </>
  );
}

export default function Landing() {
  const config = {
    samples: 10,
    resolution: 256,
    transmission: 1,
    roughness: 0.2,
    thickness: 10,
    ior: 1.38,
    chromaticAberration: 0,
    anisotropy: 1,
    distortion: 0.4,
    distortionScale: 0.64,
    temporalDistortion: 0.26,
    clearcoat: 1,
    attenuationDistance: 10,
    attenuationColor: "#ffffff",
    color: "#ffffff",
    bg: "#ffffff",
  };

  const texture = new TextureLoader().load("/gradientTexture.png");
  const { isOpen } = useOpenMenu();

  return (
    <section className="landing w-full h-screen">
      <Header/>
      {isOpen && (
        <Canvas className="bg-[#E1E1E1]">
        <OrthographicCamera position={[0, 0, 0]} />
        <ScrollControls pages={2.95} damping={0.2} infinite>
          <ScrollText />
        </ScrollControls>

        <mesh position={[4, 3.5, 0]} rotation={[0, 0, Math.PI]}>
          <planeGeometry args={[20, 5]}  />
          <meshStandardMaterial
            attach="material"
            map={texture}
            transparent={true}
          />
        </mesh>
        <ambientLight intensity={10} />

        <mesh position={[4, -3.5, 0]}>
          <planeGeometry args={[20, 5]} />
          <meshStandardMaterial
            attach="material"
            map={texture}
            transparent={true}
          />
        </mesh>
      </Canvas>
      )}
      
    </section>
  );
}
