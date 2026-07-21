"use client"

import { FileText, Github } from "lucide-react"
import { useEffect, useState } from "react"

import { MobileNavigation } from "@/components/layout/mobile-navigation"
import { navItems, profile } from "@/data/portfolio"

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("about")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: "-34% 0px -54% 0px", threshold: [0.16, 0.32, 0.64] },
    )

    navItems.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let frame = 0
    const update = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - window.innerHeight
        setProgress(height > 0 ? Math.min(window.scrollY / height, 1) : 0)
        frame = 0
      })
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => {
      window.removeEventListener("scroll", update)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header className="site-header">
      <a className="brand-mark" href="/#top" aria-label="Tanishk Mittal portfolio top">
        <span>TM</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.id} href={`/#${item.id}`} className={activeSection === item.id ? "active" : ""}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a
          className="header-icon-link"
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile"
        >
          <Github size={17} aria-hidden="true" />
        </a>
        <a
          className="resume-chip"
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Tanishk Mittal resume PDF in a new tab"
        >
          <FileText size={16} aria-hidden="true" />
          Resume
        </a>
        <MobileNavigation activeSection={activeSection} />
      </div>

      <span className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  )
}
