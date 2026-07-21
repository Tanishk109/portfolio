import { professionalExperience } from "@/data/portfolio"

export function Experience() {
  const [experience] = professionalExperience

  return (
    <section id="experience" className="experience-section section-shell" aria-labelledby="experience-title">
      <div className="experience-shell">
        <div className="section-intro">
          <p className="eyebrow">Professional experience</p>
          <h2 id="experience-title">{experience.title} · {experience.organization}</h2>
          <p>{experience.period}</p>
        </div>
        <p className="experience-summary">{experience.summary}</p>
        <div className="delivery-path" aria-label="Internship delivery stages">
          {experience.stages.map((stage, index) => (
            <article key={stage.title} className="delivery-step">
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{stage.title}</strong>
                <p>{stage.detail}</p>
              </div>
              <small>{stage.signal}</small>
            </article>
          ))}
        </div>
        <div className="stack-row experience-stack">
          {experience.stack.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
