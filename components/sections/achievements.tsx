import { achievements, profile } from "@/data/portfolio"

export function Achievements() {
  return (
    <section className="achievements-section section-shell" aria-labelledby="achievements-title">
      <div className="achievement-band">
        <div>
          <p className="eyebrow">Academic proof</p>
          <h2 id="achievements-title">{profile.degree}</h2>
          <p>{profile.university}</p>
        </div>
        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <article key={achievement.label}>
              <strong>
                <span>{achievement.value}</span>
                {achievement.suffix ? <small>{achievement.suffix}</small> : null}
              </strong>
              <span>{achievement.label}</span>
              <p>{achievement.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
