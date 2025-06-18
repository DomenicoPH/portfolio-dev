"use client"
import { useEffect, useRef } from "react";
import Link from "next/link"
import gsap from "@/utils/gsapSetup"

export default function Header(){

    //GSAP
    const logoRef = useRef<HTMLAnchorElement>(null);
    const navRef = useRef<HTMLAnchorElement>(null);
    useEffect(()=>{
        if(logoRef.current && navRef.current){
            gsap.fromTo(
                logoRef.current,
                {x: -100, opacity: 0},
                {x: 0, opacity: 1, duration: 1.5, ease: "power2.out"}
            )

            gsap.fromTo(
                navRef.current,
                {x: 200, opacity: 0},
                {x: 0, opacity: 1, duration: 1.5, ease: "power2.out"}
            )
        }
    },[])
    //GSAP


    return(
        <div className="flex justify-between px-20 py-4 bg-black/20 w-screen montserrat fixed z-20">
            <Link ref={logoRef} className="hover:text-fuchsia-500" href="/"><h2>GnomonoDEV</h2></Link>
            <nav ref={navRef}>
                <ul className="flex gap-2">
                    <Link className="hover:text-fuchsia-500" href="/proyectos"><li>Proyectos</li></Link>
                    <Link className="hover:text-fuchsia-500" href="/about"><li>Sobre mi</li></Link>
                    <Link className="hover:text-fuchsia-500" href="/fontdemo"><li>Font Demo</li></Link>
                </ul>
            </nav>
        </div>
    )
}