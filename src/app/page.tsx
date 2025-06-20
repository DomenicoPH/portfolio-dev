"use client";
import { useEffect, useRef } from "react";
import gsap from "@/utils/gsapSetup";
import AboutView from "@/views/AboutView";
import Hero from "@/components/home/Hero";

export default function Home() {

  //GSAP
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {

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
            markers: false,
          },
        }
      );
    }
  }, []);  
  //GSAP

  return (
    <div className="overflow-hidden">
      <Hero />
      <div ref={aboutRef}>
        <AboutView />
      </div>
    </div>
  );
}