import Image from "next/image"

import { education, profile } from "@/data/portfolio"

export function AboutEducation() {
  return (
    <section id="about" className="about-education section-shell" aria-labelledby="about-title">
      <div className="section-intro split">
        <div>
          <p className="eyebrow">About and education</p>
          <h2 id="about-title">Engineering depth. Product perspective.</h2>
        </div>
        <p>
          I am a Computer Science student at Manipal University Jaipur working across software engineering,
          product development, intelligent systems and organisational execution. My work combines technical
          implementation with user research, workflow design and prioritisation.
        </p>
      </div>
      <div className="education-layout">
        <div className="about-card">
          <figure className="profile-photo-frame">
            <Image
              src="/tanishk-profile.jpg"
              alt="Tanishk Mittal standing by the sea"
              width={900}
              height={1600}
              sizes="(max-width: 900px) calc(100vw - 32px), 360px"
              className="profile-photo"
            />
          </figure>
          <strong>{profile.secondaryPositioning}</strong>
          <p>{profile.extendedPositioning}</p>
        </div>
        <div className="education-timeline">
          {education.map((item, index) => (
            <article key={`${item.title}-${item.period}`} className="education-item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                {item.focus ? <p>{item.focus}</p> : null}
                {item.institution ? <strong>{item.institution}</strong> : null}
                <small>{item.period}</small>
              </div>
              <div className="education-result">
                {item.result ? <strong>{item.result}</strong> : null}
                {item.detail ? <p>{item.detail}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
