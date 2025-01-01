import { Canvas, useFrame, useLoader} from "@react-three/fiber";
import { Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import Interface from "./Interface";
import { Leva, useControls } from "leva";
import { TextureLoader } from "three";
import { useState } from "react";
import Lights from "../components/SceneComponents/Lights";
import useLevaControls from "../components/SceneComponents/LevaComponent";

export default function Scene() {
const controls = useControls("Model Position", {
    positionX: { value: 0, min: -150, max: 150, step: 0.1 },
    positionY: { value: 0, min: -150, max: 150, step: 0.1 },
    positionZ: { value: 0, min: -150, max: 150, step: 0.1 },
    intensity: { value: 1, min: 0, max: 20, step: 0.1 },
  });
  const [scrollPosition, setScrollPosition] = useState(controls.positionY);

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
        setScrollPosition(42.1);
      } else if (scroll.offset >= 0.5) {
        setScrollPosition(51.8);
      } else {
        setScrollPosition(-5.0);
      }
    });
  };

  function ModelWithTextureChange() {
    const gltf = useGLTF("/scene/scene2.glb", true);
    // console.log(gltf.nodes)
    // const newTexture = useLoader(TextureLoader, "/textures/texture1.jpg");
  
    // const [texture, setTexture] = useState(newTexture);
  
    if (gltf.materials) {
      Object.values(gltf.materials).forEach((material) => {
        // material.map = texture;
        material.needsUpdate = true;
      });
    }

    // useFrame(() => {
    //     gltf.nodes.Vinyl_disk002.rotation.y += 0.01;
    // });
  
    return <primitive position={[-0.5, scrollPosition, 4.8]} object={gltf.scene} />;
  }

  return (
    <>
      <Leva  /> 

      <Canvas className={scrollPosition === 42.1 ? "bg-950" : "bg-50"}>
      <ScrollControls pages={6} damping={.1}>
          <Model/>
          <ModelWithTextureChange />
          <Scroll>
            <Lights />
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
