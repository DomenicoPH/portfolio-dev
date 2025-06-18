"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "@/utils/gsapSetup"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const logoRef = useRef<HTMLAnchorElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // logo anim. Entrada
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
      )
    }

    // nav anim. Entrada
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
      )
    }

    // Efecto de ocultar header al hacer scroll hacia abajo
    if (headerRef.current) {
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (self.direction === 1) {
            // Scroll hacia abajo
            gsap.to(headerRef.current, {
              y: -100,
              duration: 0.4,
              ease: "power2.out",
            })
          } else {
            // Scroll hacia arriba
            gsap.to(headerRef.current, {
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            })
          }
        },
      })
    }
  }, [])

  return (
    <div
      ref={headerRef}
      className="flex justify-between px-5 lg:px-20 py-4 bg-transparent w-screen montserrat fixed z-20 top-0 left-0"
    >
      <Link ref={logoRef} className="hover:text-fuchsia-500" href="/">
        <h2>GnomonoDEV</h2>
      </Link>
      <nav ref={navRef}>
        <ul className="flex gap-2">
          <Link className="hover:text-fuchsia-500" href="/proyectos">
            <li>Proyectos</li>
          </Link>
          <Link className="hover:text-fuchsia-500" href="/about">
            <li>Sobre mi</li>
          </Link>
          <Link className="hover:text-fuchsia-500" href="/fontdemo">
            <li>Font Demo</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
