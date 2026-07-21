import { BrainCircuit, Compass, Gauge, Layers3, ServerCog } from "lucide-react"

const capabilityAreas = [
  {
    title: "Product discovery",
    icon: Compass,
    skills: ["User research", "Persona mapping", "User journeys", "Market research", "Problem definition"],
  },
  {
    title: "Product strategy",
    icon: Gauge,
    skills: ["Feature prioritisation", "RICE", "MoSCoW", "Funnel analysis", "Engagement KPIs", "A/B testing frameworks"],
  },
  {
    title: "Frontend engineering",
    icon: Layers3,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend and systems",
    icon: ServerCog,
    skills: ["Node.js", "Express", "REST APIs", "Authentication", "RBAC", "MongoDB", "SQL"],
  },
  {
    title: "Intelligent and real-time products",
    icon: BrainCircuit,
    skills: ["Socket.IO", "WebRTC", "OpenAI integrations", "Python", "PyTorch", "OpenCV"],
  },
] as const

export function Capabilities() {
  return (
    <section id="capabilities" className="capabilities-section section-shell" aria-labelledby="capabilities-title">
      <div className="section-intro compact">
        <p className="eyebrow">Engineering capabilities</p>
        <h2 id="capabilities-title">The path from product question to working system.</h2>
      </div>
      <div className="capability-flow">
        {capabilityAreas.map(({ title, skills, icon: Icon }, index) => (
          <article key={title} className="capability-node">
            <span className="capability-index">{String(index + 1).padStart(2, "0")}</span>
            <Icon size={25} aria-hidden="true" />
            <h3>{title}</h3>
            <div>
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
