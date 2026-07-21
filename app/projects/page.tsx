import type { Metadata } from "next"
import Link from "next/link"

import { SiteHeader } from "@/components/layout/site-header"
import { projects, siteConfig } from "@/data/portfolio"

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software, research, and academic projects by Tanishk Mittal.",
  alternates: {
    canonical: `${siteConfig.productionUrl}/projects`,
  },
}

export default function ProjectsRoute() {
  return (
    <main className="site-root route-page">
      <div className="site-background" aria-hidden="true" />
      <SiteHeader />
      <section className="section-shell route-hero case-index-hero" aria-labelledby="projects-route-title">
        <p className="eyebrow">Work Index</p>
        <h1 id="projects-route-title">Projects</h1>
        <p>
          Software, research, and academic work with deployment status separated from implementation maturity.
        </p>
      </section>
      <section className="section-shell project-index" aria-label="Project list">
        {projects.map((project, index) => (
          <Link className="project-index-row" href={`/projects/${project.slug}`} key={project.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{project.title}</strong>
            <small>{project.status}</small>
            <p>{project.problem}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}
