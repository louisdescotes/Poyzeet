import { Canvas, useFrame} from "@react-three/fiber";
import { Html, Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import Interface from "./Interface";
import { Leva, useControls } from "leva";
import { useState } from "react";

export default function Scene() {
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
      console.log("Scroll offset:", data.offset);
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
            <directionalLight position={[-5.5, 10.0, -0.2]} intensity={2} />
            <directionalLight position={[positionX, positionY, positionZ]} intensity={intensity}/>
          </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
        <ScrollWatcher />
        </ScrollControls>
            <directionalLight position={[-4.0, -6.2, 9.3]} intensity={2.4} />
        <directionalLight position={[0, 5.7, 10.0]} intensity={0.8} />


      </Canvas>
    </>
  );
}
