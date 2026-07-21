import type { Persona } from "@/data/portfolio"

export function PersonaCard({ persona }: { persona: Persona }) {
  return (
    <article className="persona-card">
      <strong>{persona.role}</strong>
      <p>{persona.need}</p>
      <span>{persona.friction}</span>
    </article>
  )
}
