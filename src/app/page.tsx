"use client"; // Asegura que se ejecute solo en el cliente
import { useEffect, useRef } from "react";
import gsap from "@/utils/gsapSetup"; // Usa el archivo de configuración global
import AboutView from "@/views/AboutView";
import LandingView from "@/views/LandingView";

export default function Home() {
  const landingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (landingRef.current && aboutRef.current) {
      gsap.fromTo(
        landingRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: landingRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div ref={landingRef}>
        <LandingView />
      </div>
      <div ref={aboutRef}>
        <AboutView />
      </div>
    </>
  );
}