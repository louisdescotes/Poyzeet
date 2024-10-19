"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Box,
  OrthographicCamera,
  Scroll,
  ScrollControls,
  Text3D,
  useScroll,
} from "@react-three/drei";
import { useRef } from "react";

const text = [
  "Avantages",
  "Explication",
  "Index",
  "Shop",
  "Contact",
  "Avantages",
];

function ScrollText() {
  const radius = 6;
  const angleIncrement = (Math.PI * 2) / text.length;
  const scroll = useScroll();

  const text3D = useRef()
  useFrame(() => {
    console.log(scroll.offset * 10); 
    text3D.current.position.x *= scroll.offset
  });

  return (
    <>
      <Scroll>
        {text.map((text, index) => {
          const angle = index * angleIncrement;
          const x = radius * Math.cos(angle);
          const y = -14.5 + index * 3;

          useFrame(() => {

          })
          return (
            <Text3D
            ref={text3D}
              key={index}
              position={[x, y, -40]}
              font="/Satoshi Medium_Regular.json"
              height={0}
            >
              {text}
              <meshMatcapMaterial color="#292929" />
            </Text3D>
          );
        })}
      </Scroll>
    </>
  );
}

export default function Landing() {
  return (
    <section className="landing w-full h-screen">
      <Canvas>
        <OrthographicCamera position={[0, 0, -40]} />
        <ScrollControls pages={2.95} damping={0.2} infinite>
          <ScrollText />
        </ScrollControls>

        <Box args={[20, 2]} position={[4, 3.5, 0]} />
        <Box args={[20, 2]} position={[4, -3.5, 0]} />
      </Canvas>
    </section>
  );
}
