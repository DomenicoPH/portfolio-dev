import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaSass } from "react-icons/fa6";
import { SiTypescript, SiJavascript, SiExpress, SiPostgresql } from "react-icons/si";

import Image from "next/image"
import { RiNextjsFill } from "react-icons/ri";
import { useEffect, useRef } from "react";

import gsap from "@/utils/gsapSetup";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutView() {

  //GSAP
  const aboutRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
  if (techRef.current) {
    const icons = gsap.utils.toArray<HTMLDivElement>(
      techRef.current.querySelectorAll("div")
    );

    gsap.fromTo(
      icons,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 20%",
          end: "top top",
          scrub: true,
          markers: false,
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      {
        x: -1000,
        rotate: -10,
      },
      {
        x: 0,
        rotate: 0,
        ease: "circ.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top center",
          end: "top top",
          scrub: true,
          markers: false,
        }
      }
    )

    gsap.fromTo(
      imageRef.current,
      {
        x: -1000,
        rotate: -180,
      },
      {
        x: 0,
        rotate: 2,
        ease: "circ.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top center",
          end: "top top",
          scrub: true,
          markers: false,
        }
      }
    )
  }
}, []);

  //GSAP

  return (
    <div ref={aboutRef} className="flex flex-col justify-center gap-10 h-screen mx-auto bg-gradient-to-t from-fuchsia-500 to-black">

      <div className="flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-25">

        <div ref={textRef} className="w-[500px]">
          <h1 className="roboto font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-fuchsia-500 py-2 mx-10 lg:mx-0">
            Sobre mí...
          </h1>

          <p className="quicksand text-lg lg:text-2xl text-justify leading-loose text-white mx-10 lg:mx-0">
            Desarrollador Full Stack enfocado en Frontend. Experiencia en el desarrollo de aplicaciones web con HTML, CSS, JavaScript, TypeScript, React y Next.js. Conocimientos en backend con Node.js, Express y bases de datos PostgreSQL.
          </p>

        </div>


        <div ref={imageRef} className="w-[400px] sm:w-[400px] aspect-square shadow-black/50 shadow-lg overflow-hidden">
          <div className="w-full h-full aspect-square bg-white flex justify-center items-center">
            <Image
              className="object-cover scale-[2.2] ml-12 lg:ml-18"
              src="/gnomonopic.jpg"
              alt="logo"
              width={2000}
              height={2000}
            />
          </div>
        </div>

      </div>

      <div ref={techRef} className="flex flex-wrap justify-center gap-2 lg:gap-6 xl:mt-10 max-w-1/2 lg:max-w-screen mx-auto text-5xl xl:text-7xl text-white">
        <div className=""><FaHtml5 /></div>
        <div className=""><FaCss3 /></div>
        <div className=""><FaSass /></div>
        <div className=""><SiJavascript /></div>
        <div className=""><SiTypescript /></div>
        <div className=""><FaReact /></div>
        <div className=""><RiNextjsFill /></div>
        <div className=""><FaNodeJs /></div>
        <div className=""><SiExpress /></div>
        <div className=""><SiPostgresql /></div>
      </div>

    </div>
  )
}
