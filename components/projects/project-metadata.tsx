import type { Project } from "@/data/portfolio"

export function ProjectMetadata({ project }: { project: Project }) {
  return (
    <dl className="case-meta">
      <div>
        <dt>Status</dt>
        <dd>{project.status}</dd>
      </div>
      <div>
        <dt>Maturity</dt>
        <dd>{project.maturity}</dd>
      </div>
      <div>
        <dt>Role</dt>
        <dd>{project.role}</dd>
      </div>
      <div>
        <dt>Users</dt>
        <dd>{project.users}</dd>
      </div>
    </dl>
  )
}
