"use client";
import * as motion from "framer-motion/client";
import * as THREE from 'three'

import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  OrthographicCamera,
  ScrollControls,
  Text3D,
  useScroll,
} from "@react-three/drei";
import { useControls } from "leva";

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
  const scroll = useScroll();
  const radius = 5; 

  const angleIncrement = (2 * Math.PI) / textArray.length;

  const groupRefs = Array.from({ length: textArray.length }, () => React.createRef());

  useFrame(() => {
    const offset = scroll.offset * 2 * Math.PI; 

    groupRefs.forEach((ref, index) => {
      const angle = index * angleIncrement + offset;
      const x = radius * Math.cos(angle) + 5;
      const y = radius * Math.sin(angle) - .5;
      
      ref.current.position.set(x, y, 0);
    });
  });

  return (
    <>
      {textArray.map((text, index) => (
        <group key={index} ref={groupRefs[index]}>
          <Text3D
            font="/Satoshi Medium_Regular.json"
            height={0}
          >
            {text}
            <meshMatcapMaterial color="#292929" />
          </Text3D>
        </group>
      ))}
    </>
  );
}

export default function Landing() {
  const config = ({
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
    attenuationColor: '#ffffff',
    color: '#ffffff',
    bg: '#ffffff'
  })

  return (
    <section className="landing w-full h-screen">
      <Canvas className="bg-[#E1E1E1]">
        <OrthographicCamera position={[0, 0, 0]} />
        <ScrollControls pages={2.95} damping={0.2} infinite>
          <ScrollText />
        </ScrollControls>

        <mesh  position={[4, 3.5, 0]}>
          <planeGeometry args={[20,2]}/>
          <meshPhysicalMaterial {...config} /> : <MeshTransmissionMaterial background={new THREE.Color(config.bg)} {...config} />}
          </mesh>


        <mesh  position={[4, -3.5, 0]}>
          <planeGeometry args={[20,2]}/>
           <meshPhysicalMaterial {...config} /> : <MeshTransmissionMaterial background={new THREE.Color(config.bg)} {...config} />}
          </mesh>
      </Canvas>
    </section>
  );
}
