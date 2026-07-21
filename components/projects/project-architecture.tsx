import type { Project } from "@/data/portfolio"

export function ProjectArchitecture({ project }: { project: Project }) {
  return (
    <section className="case-architecture" aria-labelledby="case-architecture-title">
      <h2 id="case-architecture-title">Architecture and data flow</h2>
      <div className="case-flow">
        <div>
          <span>01</span>
          <strong>Interface</strong>
          <p>{project.personalBuild}</p>
        </div>
        <div>
          <span>02</span>
          <strong>Architecture</strong>
          <p>{project.architecture}</p>
        </div>
        <div>
          <span>03</span>
          <strong>Data flow</strong>
          <p>{project.dataFlow}</p>
        </div>
        <div>
          <span>04</span>
          <strong>Security</strong>
          <p>{project.security}</p>
        </div>
      </div>
    </section>
  )
}
