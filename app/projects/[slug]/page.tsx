import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { SiteHeader } from "@/components/layout/site-header"
import { ProjectCaseStudyLayout } from "@/components/projects/project-case-study-layout"
import { getProjectBySlug, projects, siteConfig } from "@/data/portfolio"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `${siteConfig.productionUrl}/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      url: `${siteConfig.productionUrl}/projects/${project.slug}`,
      images: [
        {
          url: project.preview.src,
          width: project.preview.width,
          height: project.preview.height,
          alt: project.preview.alt,
        },
      ],
    },
  }
}

export default async function ProjectDetailRoute({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="site-root route-page">
      <div className="site-background" aria-hidden="true" />
      <SiteHeader />
      <section className="section-shell">
        <ProjectCaseStudyLayout project={project} />
      </section>
    </main>
  )
}
