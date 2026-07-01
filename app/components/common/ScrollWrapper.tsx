'use client';

import { useEffect, useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { isMobile } from "react-device-detect";
import * as THREE from "three";

import { usePortalStore, useScrollStore } from "@stores";

const ScrollWrapper = (props: { children: React.ReactNode | React.ReactNode[]}) => {
  const { camera } = useThree();
  const data = useScroll();
  const isActive = usePortalStore((state) => !!state.activePortalId);
  const setScrollProgress = useScrollStore((state) => state.setScrollProgress);
  const lastActiveRef = useRef(false);

  useEffect(() => {
    if (data && data.el) {
      if (isActive) {
        const handleScroll = () => {
          data.el.scrollTop = (data.el.scrollHeight - data.el.clientHeight) * 0.85;
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
          (data as any).scroll.current = 0.85;
          data.offset = 0.85;
        };
        handleScroll();
        const timer = setTimeout(handleScroll, 100);
        return () => clearTimeout(timer);
      } else if (lastActiveRef.current) {
        data.el.scrollTop = (data.el.scrollHeight - data.el.clientHeight) * 0.85;
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        (data as any).scroll.current = 0.85;
        data.offset = 0.85;
      }
    }
    lastActiveRef.current = isActive;
  }, [isActive, data]);

  useFrame((state, delta) => {
    if (data) {
      const a = data.range(0, 0.3);
      const b = data.range(0.3, 0.5);
      const d = data.range(0.85, 0.18);

      if (!isActive) {
        camera.rotation.x = THREE.MathUtils.damp(camera.rotation.x, -0.5 * Math.PI * a, 5, delta);
        camera.position.y = THREE.MathUtils.damp(camera.position.y, -37 * b, 7, delta);
        camera.position.z = THREE.MathUtils.damp(camera.position.z, 5 + 10 * d, 7, delta);

        setScrollProgress(data.range(0, 1));
      }

      // Move camera slightly on mouse movement.
      if (!isMobile && !isActive) {
        camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, -(state.pointer.x * Math.PI) / 90, 0.05);
      }
    }
  });

  const children = Array.isArray(props.children) ? props.children : [props.children];

  return <>
    {children.map((child, index) => {
      return <group key={index}>
        {child}
      </group>
    })}
  </>
}

export default ScrollWrapper;