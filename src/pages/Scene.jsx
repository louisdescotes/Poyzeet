import { Canvas, useFrame, useLoader} from "@react-three/fiber";
import { Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import Interface from "./Interface";
import { Leva, useControls } from "leva";
import { TextureLoader } from "three";
import { useState } from "react";
import Lights from "../components/SceneComponents/Lights";
import useLevaControls from "../components/SceneComponents/LevaComponent";

export default function Scene() {
  const {positionX, positionY, positionZ, intensity} = useLevaControls
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
    console.log(gltf.nodes)
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
      <Leva  collapsed={false} /> 

      <Canvas>
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
