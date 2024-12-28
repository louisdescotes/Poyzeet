import { Canvas, useFrame} from "@react-three/fiber";
import { Html, Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import Interface from "./Interface";
import { Leva, useControls } from "leva";
import { useState } from "react";
import useMousePosition from "../utils/mousePosition";

export default function Scene() {
  const { x, y } = useMousePosition();
  const width = window.innerWidth; 
  const height = window.innerHeight;
  
  const normalizedX = x / width; 
  const normalizedY = y / height; 
  
  const mappedX = normalizedX * (-4.5 - -5.5) + -5.5; 
  const clampedX = Math.max(-5.5, Math.min(-4.5, mappedX));
  
  const mappedY = normalizedY * (6.5 - 4.5) + 4.5;  
  const clampedY = Math.max(4.5, Math.min(6.5, mappedY)); 

  const mappedX2 = normalizedX * (-4.0 - -6.0) + -6.0; 
  const clampedX2 = Math.max(-5.0, Math.min(-4.0, mappedX2));
  
  const mappedY2 = normalizedY * (-5.2 - -6.2) + -6.2;  
  const clampedY2 = Math.max(-6.2, Math.min(-5.2, mappedY2)); 
  
  console.log(clampedX, clampedY);

  const { positionY } = useControls("Model Position", {
    positionY: {
      value: 0,
      min: -20,
      max: 40,
      step: 0.1,
    },
  });
  const { positionX } = useControls("Model Position", {
    positionX: {
      value: 0,
      min: -20,
      max: 40,
      step: 0.1,
    },
  });
  const { positionZ } = useControls("Model Position", {
    positionZ: {
      value: 0,
      min: -20,
      max: 40,
      step: 0.1,
    },
  });
  const { intensity } = useControls("Model Position", {
    intensity: {
      value: 0,
      min: 0,
      max: 20,
      step: 0.1,
    },
  });
  const [scrollPosition, setScrollPosition] = useState(positionY);

  const ScrollWatcher = () => {
    const data = useScroll();
  
    useFrame(() => {
      // console.log("Scroll offset:", data.offset);
    });
  
    return null;
  };

  const Model = () => {
    const scroll = useScroll();

    useFrame(() => {
      if (scroll.offset >= 0.2 && scroll.offset < 0.5) {
        setScrollPosition(0.9);
      } else if (scroll.offset >= 0.5) {
        setScrollPosition(5.2);
      } else {
        setScrollPosition(-5);
      }
    });


    const { scene } = useGLTF("/scene/scene.glb", true);
    return <primitive position={[-0.5, scrollPosition, 4.8]} object={scene} />;
  };

  return (
    <>
      <Leva collapsed={false} /> 

      <Canvas>
        <ScrollControls pages={6} damping={.1}>
          <Model/>
          <Scroll>
          <directionalLight position={[clampedX2, -clampedY2, 9.3]} intensity={2.4} />
          <directionalLight position={[clampedX, -clampedY, 10.0]} intensity={0.8} />
          </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
        <ScrollWatcher />
        </ScrollControls>
      </Canvas>
    </>
  );
}
