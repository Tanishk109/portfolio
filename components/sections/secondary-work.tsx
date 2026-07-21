import Image from "next/image"
import Link from "next/link"

import { researchItems, secondaryProjects } from "@/data/portfolio"

export function SecondaryWork() {
  return (
    <section id="research" className="secondary-work section-shell" aria-labelledby="research-title">
      <div className="section-intro split">
        <div>
          <p className="eyebrow">Research and academic work</p>
          <h2 id="research-title">Smaller experiments, clearly framed.</h2>
        </div>
        <p>
          These items show research depth and academic exploration without implying deployment, clinical use, or production adoption.
        </p>
      </div>
      <div className="secondary-layout">
        <div className="secondary-projects">
          {secondaryProjects.map((project) => (
            <Link href={`/projects/${project.slug}`} className="secondary-row" key={project.slug}>
              <Image
                src={project.preview.src}
                alt={project.preview.alt}
                width={project.preview.width}
                height={project.preview.height}
                sizes="120px"
              />
              <div>
                <strong>{project.title}</strong>
                <p>{project.summary}</p>
              </div>
              <span>{project.status}</span>
            </Link>
          ))}
        </div>
        <div className="research-notes">
          {researchItems.map((item) => (
            <article key={item.title}>
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <small>{item.status}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
