import { Github, Linkedin, Mail } from "lucide-react"

import { HeroStudio } from "@/components/visuals/hero-studio"
import { profile } from "@/data/portfolio"

export function Hero() {
  return (
    <section id="hero" className="hero-section section-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="availability-badge">{profile.availability}</p>
        <h1 id="hero-title">
          <span>Tanishk</span>
          <span>Mittal</span>
        </h1>
        <h2>{profile.headline}</h2>
        <p className="hero-summary">{profile.positioning}</p>
        <p className="hero-degree">
          {profile.degree} · {profile.university}
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="/#work">
            Explore live projects
          </a>
          <a
            className="button-secondary"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Tanishk Mittal resume PDF in a new tab"
          >
            View resume
          </a>
          <a className="text-action" href="/#product">
            See how I approach products
          </a>
        </div>
        <div className="hero-links" aria-label="Profile links">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile">
            <Github size={19} aria-hidden="true" />
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile">
            <Linkedin size={19} aria-hidden="true" />
            LinkedIn
          </a>
          <a href={profile.links.email} aria-label="Email Tanishk Mittal">
            <Mail size={19} aria-hidden="true" />
            Email
          </a>
        </div>
        <p className="current-focus">{profile.secondaryPositioning}</p>
      </div>
      <HeroStudio />
    </section>
  )
}
