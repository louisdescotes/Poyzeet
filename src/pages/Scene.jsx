import { Canvas, useFrame, useLoader} from "@react-three/fiber";
import { Html, RandomizedLight, Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import Interface from "./Interface";
import { Leva, useControls } from "leva";
import { TextureLoader } from "three";
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
  
  const mappedY = normalizedY * (6.5 - 4.5) + 2.5;  
  const clampedY = Math.max(4.5, Math.min(6.5, mappedY)); 

  const mappedX2 = normalizedX * (5 - -35) + -35; 
  const clampedX2 = Math.max(-35, Math.min(5, mappedX2));
  
  const mappedY2 = normalizedY * (100 - 150) + 150;  
  const clampedY2 = Math.max(100, Math.min(150, mappedY2));  
  
  const { positionX } = useControls("Model Position", {
    positionX: {
      value: 0,
      min: -150,
      max: 150,
      step: 0.1,
    },
  });
  const { positionY } = useControls("Model Position", {
    positionY: {
      value: 0,
      min: -150,
      max: 150,
      step: 0.1,
    },
  });
  const { positionZ } = useControls("Model Position", {
    positionZ: {
      value: 0,
      min: -150,
      max: 150,
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
  };

  function ModelWithTextureChange() {
    const gltf = useGLTF("/scene/scene.glb", true);
    
    // const newTexture = useLoader(TextureLoader, "/textures/texture1.jpg");
  
    // const [texture, setTexture] = useState(newTexture);
  
    if (gltf.materials) {
      Object.values(gltf.materials).forEach((material) => {
        // material.map = texture;
        material.needsUpdate = true;
      });
    }
  
    return <primitive position={[-0.5, scrollPosition, 4.8]} object={gltf.scene} />;
  }

  return (
    <>
      <Leva  collapsed={false} /> 

      <Canvas>
        <ScrollControls pages={6} damping={.1}>
          <Model/>
          <ModelWithTextureChange />
          <Scroll>
            <directionalLight position={[clampedX, -clampedY, 10.0]} intensity={0.8} color={"#BDBDBD"} />
            <directionalLight position={[clampedX2, clampedY2, 150]} intensity={.9} color={"#BDBDBD"}/>
            <directionalLight position={[21.4, 33.3, 30.8]} intensity={.5} color={"#BDBDBD"} /> 
            
            <directionalLight position={[9.8, -11.6, 1.0]} intensity={1.0} />
            <directionalLight position={[80, -40.0, -9.7]} intensity={.6} />
            <directionalLight position={[-20.0, 80.8, -65.7]} intensity={.5} />
            {/* <directionalLight position={[positionX, positionY, positionZ]} intensity={intensity} color={"#BDBDBD"} />  */}
          </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
          {/* <ScrollWatcher /> */}
        </ScrollControls>
      </Canvas>
    </>
  );
}
