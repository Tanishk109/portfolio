import { leadership } from "@/data/portfolio"

export function Leadership() {
  return (
    <section id="leadership" className="leadership-section section-shell" aria-labelledby="leadership-title">
      <div className="section-intro split">
        <div>
          <p className="eyebrow">Leadership</p>
          <h2 id="leadership-title">Moving systems and people with the same discipline.</h2>
        </div>
        <p>
          Leadership is presented separately from professional software experience so recruiters can scan engineering work clearly.
        </p>
      </div>
      <div className="leadership-timeline">
        {leadership.map((item) => (
          <article key={`${item.title}-${item.organization}`} className="leadership-item">
            <div className="leadership-date">{item.period ?? "Ongoing"}</div>
            <div className="leadership-body">
              <h3>{item.title}</h3>
              <p className="leadership-org">{item.organization}</p>
              <p>{item.impact}</p>
              <div className="leadership-focus">
                {item.focus.map((focus) => (
                  <span key={focus}>{focus}</span>
                ))}
              </div>
            </div>
            {item.metric ? <strong className="leadership-metric">{item.metric}</strong> : null}
          </article>
        ))}
      </div>
    </section>
  )
}
