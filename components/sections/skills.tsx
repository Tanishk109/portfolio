import { skillGroups } from "@/data/portfolio"

export function Skills() {
  return (
    <section id="skills" className="skills-section section-shell" aria-labelledby="skills-title">
      <div className="section-intro compact">
        <p className="eyebrow">Skills</p>
        <h2 id="skills-title">A practical stack shaped by shipped projects.</h2>
      </div>
      <div className="skills-layout">
        <div className="skills-flow" aria-label="Typical project architecture">
          <span>React / Next.js</span>
          <span>Node.js / APIs</span>
          <span>MongoDB / SQL</span>
          <span>Realtime / AI</span>
          <span>Vercel / Render</span>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
