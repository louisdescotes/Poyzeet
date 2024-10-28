"use client";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Text3D, useScroll } from "@react-three/drei";
import type * as THREE from "three";

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

export default function ScrollText() {
  const model = useLoader(GLTFLoader, "/3D/untitled.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);
  });

  const vinylRef = useRef<THREE.Mesh | null>(null);

  const groupRefs = useRef<(React.RefObject<THREE.Group>)[]>(
    Array.from({ length: textArray.length }, () => React.createRef<THREE.Group>())
  ).current;

  const scroll = useScroll();

  const radius = 5;
  const angleIncrement = (2 * Math.PI) / textArray.length;

  useFrame(() => {
    const offset = scroll.offset * 2 * Math.PI;
    const angle = angleIncrement + offset;

    if (vinylRef.current) {
      vinylRef.current.rotation.set(angle, 0, -Math.PI / 2);
    }

    groupRefs.forEach((ref, index) => {
      const angle = index * angleIncrement + offset;
      const x = radius * Math.cos(angle) + 5;
      const y = radius * Math.sin(angle) - 0.5;

      if (ref.current) {
        ref.current.position.set(x, y, -2);
      }
    });
  });

  return (
    <>
      {textArray.map((text, index) => (
        <group key={text} ref={groupRefs[index]}>
          <Text3D font="/Satoshi Medium_Regular.json" height={0}>
            {text}
            <meshMatcapMaterial color="#292929" />
          </Text3D>
        </group>
      ))}
      <directionalLight intensity={1} position={[10, -5, 15]} />
      <group rotation={[0, -Math.PI / 2, 0]} scale={1}>
        {model.nodes.Disque && (
          <primitive ref={vinylRef} object={model.nodes.Disque} position={[0.3, -0.4, 3.5]} />
        )}
        <primitive object={model.scene} position={[0.3, -2, 2.5]} />
      </group>
    </>
  );
}
