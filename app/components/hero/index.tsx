'use client';

import { Text } from "@react-three/drei";

import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import CloudContainer from "../models/Cloud";
import StarsContainer from "../models/Stars";
import WindowModel from "../models/WindowModel";
import TextWindow from "./TextWindow";

const Hero = () => {
  const titleRef = useRef<THREE.Group>(null);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100 && titleRef.current) {
      gsap.fromTo(titleRef.current.position, {
        y: -10,
        duration: 1,
        // delay: 1.5,
      }, {
        y: 0,
        duration: 3
      });
    }
  }, [progress]);

  const fontProps = {
    font: "./soria-font.ttf",
  };

  return (
    <>
      <group ref={titleRef} position={[0, 0, -10]}>
        <Text {...fontProps} fontSize={1.8} anchorX="center" anchorY="middle" position={[0, 0.6, 0]}>VASTRA</Text>
        <Text {...fontProps} fontSize={0.6} anchorX="center" anchorY="middle" position={[0, -0.6, 0]}>Owner- Sagar Bansu</Text>
      </group>
      <StarsContainer />
      <CloudContainer/>
      <group position={[0, -25, 5.69]}>
        <pointLight
          castShadow
          position={[1, 1, -2.5]}
          intensity={60}
          distance={10}
          shadow-mapSize-width={256}
          shadow-mapSize-height={256}
          shadow-bias={-0.0001}
        />
        <WindowModel receiveShadow/>
        <TextWindow/>
      </group>
    </>
  );
};

export default Hero;
