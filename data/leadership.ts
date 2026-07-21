export type LeadershipItem = {
  title: string
  organization: string
  period?: string
  impact: string
  focus: string[]
  metric?: string
}

export const leadership: LeadershipItem[] = [
  {
    title: "Student Placement Coordinator",
    organization: "Manipal University Jaipur",
    impact: "Supported student, placement, and stakeholder coordination across opportunity workflows.",
    focus: ["Student support", "Communication", "Stakeholder coordination"],
    metric: "Placement interface",
  },
  {
    title: "Convenor",
    organization: "International Innovation Challenge 2.0",
    period: "2025",
    impact:
      "Coordinated a large student innovation program with registration scale, operations planning, and organising-team execution.",
    focus: ["Event execution", "Sponsorship", "Operations", "Team leadership"],
    metric: "1,200+ registrations",
  },
  {
    title: "General Secretary",
    organization: "IEEE WIE MUJ",
    period: "2025 - 2026",
    impact: "Led IEEE WIE MUJ community initiatives across programs, communication, and technical engagement.",
    focus: ["Community leadership", "Workshops", "Partnerships", "Technical events"],
    metric: "2025-2026",
  },
]
