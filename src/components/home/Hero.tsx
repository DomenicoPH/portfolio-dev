import { useEffect, useRef } from "react";
import Image from "next/image"
import gsap from "@/utils/gsapSetup";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero(){

    //GSAP
    const heroRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (heroRef.current) {
        gsap.from(heroRef.current,
          {
            opacity:0,
            y: 1000,
            duration: 1
          }
        );

        gsap.fromTo(
          heroRef.current,
          { opacity: 1, y: 0 },
          {
            opacity: 0,
            y: 0,
            duration: 1.5,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "center center",
              end: "bottom 20%",
              scrub: true,
              markers: false,
            },
          }
        );
      }

      if(logoRef.current){
        gsap.to(
          logoRef.current,
          {
            x: 1000,
            rotate: 300,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "bottom bottom",
              end: "bottom top",
              scrub: true,
              markers: false,
            },
          }
        );
        gsap.to(
          textRef.current,
          {
            x: -1000,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "bottom bottom",
              end: "bottom top",
              scrub: true,
              markers: false,
            },
          }
        );
      }
    }, []);
    //GSAP

    return(
        <div className="bg-gray-900 bg-gradient-to-t from-black to-gray-900">
            <div ref={heroRef} className="flex flex-col gap-5 md:flex-row justify-center items-center h-screen">
                <Image
                    ref={logoRef}
                    className='bg-gradient-to-br from-sky-500 to-fuchsia-500 rounded-full aspect-square p-2 w-sm md:w-xs 2xl:w-md'
                    src='/gnomono.svg' alt="logo" width={500} height={500}
                ></Image>
                <div ref={textRef} className="flex flex-col">
                    <h1 className="roboto uppercase font-bold text-6xl text-center lg:text-8xl lg:text-start text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-sky-500">Domenico</h1>
                    <h1 className="roboto uppercase font-bold text-6xl text-center lg:text-8xl lg:text-start text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-sky-500">Pagano H.</h1>
                    <div className="bg-gradient-to-r from-fuchsia-500 to-sky-500 w-full h-auto mt-2">
                        <p className="roboto uppercase text-gray-900 font-bold text-center text-xl lg:text-start lg:text-4xl p-2">Desarrollador Frontend</p>
                    </div>
                </div>
            </div>
        </div>
    )
}