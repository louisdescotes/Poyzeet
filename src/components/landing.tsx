"use client";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useOpenMenu } from "@/store";
import {
  OrbitControls,
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
  const model = useLoader(GLTFLoader, "/3D/untitled.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);
  });

  console.log(model)

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

    vinylRef.current.rotation.set(angle, 0, - Math.PI /2);

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
      <directionalLight intensity={1} position={[10,-5,15]}/>
      <group  rotation={[0, -Math.PI / 2, 0]} scale={1}>
        <primitive ref={vinylRef}  object={model.nodes.Disque} position={[.3, -.4, 3.5]} />
        <primitive object={model.scene} position={[.3, -2, 2.5]}/>
      </group>
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
    <section className="fixed top-0 left-0 w-full h-screen">
      <Header/>
      {/* {isOpen && ( */}
        <Canvas className="bg-[#E1E1E1] h-screen w-screen">
        <OrthographicCamera position={[0, 0, 0]} />
        {/* <OrbitControls /> */}
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
      {/* )} */}
    </section>
  );
}
