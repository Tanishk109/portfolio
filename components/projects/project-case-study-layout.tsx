import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { ProjectArchitecture } from "@/components/projects/project-architecture"
import { ProjectMetadata } from "@/components/projects/project-metadata"
import type { Project } from "@/data/portfolio"

export function ProjectCaseStudyLayout({ project }: { project: Project }) {
  return (
    <article className={`case-study case-${project.accent}`}>
      <Link className="back-link" href="/#work">
        <ArrowLeft size={16} aria-hidden="true" />
        Back to work
      </Link>

      <header className="case-hero">
        <div>
          <p className="eyebrow">{project.status}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="project-actions">
            <a className="icon-link labeled" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} GitHub repository`}>
              <Github size={17} aria-hidden="true" />
              Code
            </a>
            {project.liveUrl ? (
              <a className="icon-link labeled" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live deployment`}>
                <ExternalLink size={17} aria-hidden="true" />
                Live demo
              </a>
            ) : null}
            <Link className="details-link" href="/#contact">
              Discuss
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <Image
          src={project.preview.src}
          alt={project.preview.alt}
          width={project.preview.width}
          height={project.preview.height}
          sizes="(max-width: 900px) calc(100vw - 32px), 48vw"
          className="case-image"
          priority
        />
      </header>

      <ProjectMetadata project={project} />

      <div className="case-grid">
        <section aria-labelledby="case-problem">
          <h2 id="case-problem">Problem</h2>
          <p>{project.problem}</p>
        </section>
        <section aria-labelledby="case-scope">
          <h2 id="case-scope">Scope</h2>
          <p>{project.serves}</p>
        </section>
        <section aria-labelledby="case-contribution">
          <h2 id="case-contribution">My contribution</h2>
          <p>{project.personalBuild}</p>
          <ul>
            {project.contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="case-decision">
          <h2 id="case-decision">Technical decision</h2>
          <p>{project.keyDecision}</p>
        </section>
      </div>

      <ProjectArchitecture project={project} />

      <div className="case-grid compact">
        <section aria-labelledby="case-challenges">
          <h2 id="case-challenges">Technical challenges</h2>
          <ul>
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="case-outcome">
          <h2 id="case-outcome">Outcome</h2>
          <p>{project.outcome}</p>
        </section>
        <section aria-labelledby="case-limitations">
          <h2 id="case-limitations">Limitations</h2>
          <p>{project.limitations}</p>
        </section>
        <section aria-labelledby="case-future">
          <h2 id="case-future">Future improvements</h2>
          <p>{project.future}</p>
        </section>
      </div>

      <section className="case-stack" aria-labelledby="case-stack">
        <h2 id="case-stack">Verified technology stack</h2>
        <div className="tag-list">
          {project.stack.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </section>
    </article>
  )
}
