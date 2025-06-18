import { useEffect, useRef } from "react";
import Image from "next/image"
import gsap from "@/utils/gsapSetup";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero(){

    //GSAP
    const heroRef = useRef<HTMLDivElement>(null);
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
          { opacity: 1, y: 50 },
          {
            opacity: 0,
            y: 0,
            duration: 1.5,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          }
        );
      }
    }, []);
    //GSAP

    return(
        <div className="bg-gray-900">
            <div ref={heroRef} className="flex flex-col gap-5 md:flex-row justify-center items-center h-screen">
                <Image
                    className='bg-gradient-to-br from-sky-500 to-fuchsia-500 rounded-full p-2'
                    src='/gnomono.svg' alt="logo" width={500} height={500}
                ></Image>
                <div className="flex flex-col">
                    <h1 className="roboto uppercase font-bold text-8xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-sky-500">Domenico</h1>
                    <h1 className="roboto uppercase font-bold text-8xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-sky-500">Pagano H.</h1>
                    <div className="bg-gradient-to-r from-fuchsia-500 to-sky-500 w-full h-auto mt-2">
                        <p className="roboto uppercase text-gray-900 font-bold text-4xl p-2">Desarrollador Frontend</p>
                    </div>
                </div>
            </div>
        </div>
    )
}