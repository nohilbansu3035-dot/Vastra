'use client';

import CanvasLoader from "../../components/common/CanvasLoader";
import CloudContainer from "../../components/models/Cloud";
import StarsContainer from "../../components/models/Stars";
import { Project } from "../../types";
import { Edges, Text, Scroll } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePortalStore } from "../../stores";
import { useEffect, useState } from "react";

interface ProjectSceneProps {
  project: Project;
}

export default function ProjectScene({ project }: ProjectSceneProps) {
  const router = useRouter();
  const setActivePortal = usePortalStore((state) => state.setActivePortal);
  const [mounted, setMounted] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const fontPropsSoria = {
    font: "/soria-font.ttf",
    color: "white"
  };

  const fontPropsVercetti = {
    font: "/Vercetti-Regular.woff",
    color: "white"
  };

  const handleBack = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const button = e.eventObject;
    gsap.to(button.position, { z: 0, duration: 0.1 })
      .then(() => gsap.to(button.position, { z: 0.1, duration: 0.3 }));
    setTimeout(() => {
      setActivePortal('projects');
      router.push('/');
    }, 200);
  };

  const handleViewLive = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (!project.url) return;
    const button = e.eventObject;
    gsap.to(button.position, { z: 0, duration: 0.1 })
      .then(() => gsap.to(button.position, { z: 0.1, duration: 0.3 }));
    setTimeout(() => {
      window.open(project.url, '_blank');
    }, 200);
  };

  // Calculate generous pages to prevent any cut off on mobile devices
  const pages = project.images ? Math.max(3, Math.ceil(project.images.length * 0.7)) : project.description ? 2.5 : project.folders?.length ? 1.8 : 1;

  return (
    <>
      <CanvasLoader pages={pages}>
        <StarsContainer />
        <CloudContainer />

        <group position={[0, 0, -5]}>
          <Text position={[0, 2, 0]} fontSize={1.2} {...fontPropsSoria}>
            {project.title}
          </Text>
          <Text position={[0, 0.5, 0]} fontSize={0.3} {...fontPropsVercetti}>
            {project.date.toUpperCase()}
          </Text>
          <Text position={[0, -0.5, 0]} fontSize={0.4} maxWidth={8} textAlign="center" {...fontPropsVercetti}>
            {project.subtext}
          </Text>

          <group position={[0, -2, 0]}>
            <group
              position={[-1.5, 0, 0.1]}
              onClick={handleBack}
              onPointerOver={() => document.body.style.cursor = 'pointer'}
              onPointerOut={() => document.body.style.cursor = 'auto'}
            >
              <mesh>
                <boxGeometry args={[2, 0.6, 0.2]} />
                <meshBasicMaterial color="#222" />
                <Edges color="white" lineWidth={1} />
              </mesh>
              <Text {...fontPropsVercetti} position={[0, 0, 0.11]} fontSize={0.25}>
                ← BACK TO HOME
              </Text>
            </group>

            {project.url && (
              <group
                position={[1.5, 0, 0.1]}
                onClick={handleViewLive}
                onPointerOver={() => document.body.style.cursor = 'pointer'}
                onPointerOut={() => document.body.style.cursor = 'auto'}
              >
                <mesh>
                  <boxGeometry args={[2, 0.6, 0.2]} />
                  <meshBasicMaterial color="#222" />
                  <Edges color="white" lineWidth={1} />
                </mesh>
                <Text {...fontPropsVercetti} position={[0, 0, 0.11]} fontSize={0.25}>
                  VIEW LIVE ↗
                </Text>
              </group>
            )}
          </group>
        </group>



        {(project.description || (project.images && project.images.length > 0) || (project.folders && project.folders.length > 0)) && (
          <Scroll html style={{ width: "100%", pointerEvents: "none" }}>
            <div className="w-full flex flex-col items-center pt-[75vh] pb-32 pointer-events-auto">

              {project.description && (
                <div className="max-w-4xl mx-auto px-6 w-full mb-16">
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                    {project.description.split('\n\n').map((paragraph, i) => (
                      <p key={i} className={`last:mb-0 text-left ${i === 0 ? 'text-2xl md:text-3xl font-serif leading-relaxed text-white/95 mb-10' : 'text-xl md:text-2xl font-serif leading-relaxed text-white/90 mb-10'}`}>
                        {paragraph.split('\n').map((line, j) => (
                          <span key={j}>
                            {line}
                            {j !== paragraph.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10 max-w-7xl mx-auto w-full">
                  {project.images.map((src, i) => (
                    <div
                      key={i}
                      className="relative bg-black/30 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 transition-transform hover:scale-105 duration-300 cursor-pointer"
                      onClick={() => setZoomedImage(src)}
                    >
                      <Image
                        src={src}
                        alt={`${project.title} - ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        loading={i < 6 ? "eager" : "lazy"}
                        priority={i < 6}
                        quality={50}
                        onError={(e) => {
                          e.currentTarget.srcset = `https://picsum.photos/seed/${project.id}${i}/600/800`;
                          e.currentTarget.src = `https://picsum.photos/seed/${project.id}${i}/600/800`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {project.folders && project.folders.length > 0 && (
                <div className="flex flex-wrap justify-center gap-16 p-10 max-w-7xl mx-auto w-full mt-12">
                  {project.folders.map((folder, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center cursor-pointer transition-transform hover:scale-110 duration-300 group"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Bypass sandbox proxy completely using a form submission
                        const form = document.createElement('form');
                        form.method = 'GET';
                        form.action = folder.url;
                        form.target = '_blank';
                        form.rel = 'noopener noreferrer';
                        document.body.appendChild(form);
                        form.submit();
                        document.body.removeChild(form);
                      }}
                    >
                      <img
                        src="/macbook-folder.png"
                        alt={folder.title}
                        className="w-32 md:w-48 h-auto object-contain drop-shadow-2xl"
                      />
                      <span className="font-sans text-white text-base md:text-lg tracking-widest uppercase mt-6 opacity-80 group-hover:opacity-100 transition-opacity">
                        {folder.title}
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </Scroll>
        )}

        <pointLight castShadow position={[1, 1, -2.5]} intensity={60} distance={10} />
        <ambientLight intensity={0.5} />
      </CanvasLoader>

      {zoomedImage && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-md cursor-zoom-out transition-opacity duration-300"
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage}
            className="max-w-[95vw] max-h-[95vh] object-contain shadow-2xl"
            alt="Zoomed"
          />
          <button
            className="absolute top-6 right-6 text-white text-4xl p-4 leading-none font-sans font-light hover:text-red-400 transition-colors"
            onClick={() => setZoomedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
