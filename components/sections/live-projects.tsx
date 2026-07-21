import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"

import { ProjectDemo } from "@/components/projects/project-demo"
import { featuredProjects } from "@/data/portfolio"

export function LiveProjects() {
  return (
    <section id="work" className="live-projects section-shell" aria-labelledby="work-title">
      <div className="section-intro split">
        <div>
          <p className="eyebrow">Live product showcase</p>
          <h2 id="work-title">Deployed products, shown as product experiences.</h2>
        </div>
        <p>
          Each product is presented through the user problem, product choices, engineering contribution and a live visual preview captured from the deployed application.
        </p>
      </div>

      <div className="project-showcase-list">
        {featuredProjects.map((project, index) => (
          <article
            id={`project-${project.slug}`}
            className="project-showcase"
            data-accent={project.accent}
            key={project.slug}
          >
            <ProjectDemo project={project} priority={index === 0} />
            <div className="project-copy">
              <div className="project-kicker">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{project.status}</strong>
                <em>{project.maturity}</em>
              </div>
              <h3>{project.title}</h3>
              <p className="project-statement">{project.statement}</p>
              <dl className="project-facts">
                <div>
                  <dt>User problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Target users</dt>
                  <dd>{project.serves}</dd>
                </div>
              </dl>
              <div className="project-decision-panel">
                <strong>Product decisions</strong>
                <ul>
                  {project.productDecisions.map((decision) => (
                    <li key={decision}>{decision}</li>
                  ))}
                </ul>
              </div>
              <ul className="contribution-list">
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="stack-row" aria-label={`${project.title} technology stack`}>
                {project.stack.slice(0, 7).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live deployment`}>
                  Live demo
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} GitHub repository`}>
                  <Github size={16} aria-hidden="true" />
                  Code
                </a>
                <Link href={`/projects/${project.slug}`} aria-label={`Read ${project.title} case study`}>
                  Case study
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
