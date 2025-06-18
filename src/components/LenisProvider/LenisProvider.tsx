"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      wheelMultiplier: 4.0,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
