"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

import { MobileHeroVisual } from "@/components/visuals/mobile-hero-visual"

const ProductUniverse = dynamic(
  () => import("@/components/visuals/product-universe").then((module) => module.ProductUniverse),
  {
    ssr: false,
    loading: () => <div className="hero-3d-fallback" aria-hidden="true" />,
  },
)

export function HeroStudio() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])

  return (
    <div className="hero-studio" aria-label="Interactive product universe using live project screenshots">
      <div className="hero-3d-shell">
        {reducedMotion ? <div className="hero-3d-fallback" aria-hidden="true" /> : <ProductUniverse />}
        <div className="hero-3d-monogram" aria-hidden="true">
          TM
        </div>
        <div className="hero-process-line" aria-hidden="true">
          <span>Discover</span>
          <span>Define</span>
          <span>Build</span>
          <span>Ship</span>
        </div>
      </div>
      <MobileHeroVisual />
    </div>
  )
}
