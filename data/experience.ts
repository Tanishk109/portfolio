export type ExperienceItem = {
  title: string
  organization: string
  period: string
  summary: string
  stages: {
    title: string
    detail: string
    signal: string
  }[]
  stack: string[]
}

export const professionalExperience: ExperienceItem[] = [
  {
    title: "SDE Intern",
    organization: "Zidio Development",
    period: "May 2026 - July 2026",
    summary:
      "Primary professional software development experience, focused on delivering connected full-stack product capability through production-oriented engineering practices.",
    stages: [
      {
        title: "Product requirements",
        detail: "Translated meeting and collaboration needs into implementable product modules.",
        signal: "Scope",
      },
      {
        title: "Secure authentication and RBAC",
        detail: "Worked with account, session, and role-aware access patterns for protected workflows.",
        signal: "Access",
      },
      {
        title: "Real-time messaging",
        detail: "Connected live collaboration states with event-driven communication patterns.",
        signal: "Socket",
      },
      {
        title: "Browser-based video meetings",
        detail: "Supported meeting-room interactions and participant-state surfaces.",
        signal: "WebRTC",
      },
      {
        title: "AI meeting intelligence",
        detail: "Built post-meeting productivity surfaces for summaries, actions, and follow-through.",
        signal: "AI",
      },
      {
        title: "Deployment and DevOps",
        detail: "Strengthened release, debugging, and maintainability practices around deployable work.",
        signal: "Ship",
      },
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "WebRTC"],
  },
]
