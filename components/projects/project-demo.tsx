"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import type { Project } from "@/data/portfolio"

const demoCallouts: Record<string, string[]> = {
  intellmeet: ["Product entry", "Demo account", "AI meeting promise"],
  "research-portal": ["Public discovery", "Faculty project card", "Student entry point"],
  "rehabilitation-portal": ["Operational screen", "Role workflow", "Live deployment"],
}

export function ProjectDemo({ project, priority = false }: { project: Project; priority?: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(Boolean(entry?.isIntersecting))
      },
      { threshold: 0.28 },
    )

    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`project-demo ${active ? "is-active" : ""}`} ref={rootRef}>
      <div className="browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <small>{project.liveUrl?.replace("https://", "")}</small>
      </div>
      <div className="demo-stage">
        <Image
          src={project.preview.src}
          alt={project.preview.alt}
          width={project.preview.width}
          height={project.preview.height}
          sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1180px) 56vw, 690px"
          className="demo-image"
          priority={priority}
        />
        <span className="demo-cursor" aria-hidden="true" />
        <div className="demo-callouts" aria-label={`${project.title} visual highlights`}>
          {(demoCallouts[project.slug] ?? ["Live screen", "Product flow", "Deployed app"]).map((callout) => (
            <span key={callout}>{callout}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
