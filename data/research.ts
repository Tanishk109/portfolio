export type ResearchItem = {
  title: string
  type: string
  description: string
  topics: string[]
  status: string
}

export const researchItems: ResearchItem[] = [
  {
    title: "Digital image processing and steganography",
    type: "Academic work",
    description:
      "Explores image transformations, information hiding, and security-oriented applications through academic implementation work.",
    topics: ["Image processing", "Security", "Encoding"],
    status: "Academic exploration",
  },
  {
    title: "AI and intelligent systems",
    type: "Research interest",
    description:
      "Applied interest in medical image segmentation, geospatial intelligence, and decision-support systems.",
    topics: ["AI", "Computer vision", "Decision support"],
    status: "Research direction",
  },
  {
    title: "Research collaboration platforms",
    type: "Product research",
    description:
      "Workflow mapping for making institutional research discovery and student-faculty collaboration easier to navigate.",
    topics: ["Research discovery", "Role workflows", "Institutional systems"],
    status: "Product research",
  },
]

export const certifications = [
  { title: "Prompt Design in Vertex AI", issuer: "Google", date: "Jan 2026" },
  { title: "Foundations of Data Science", issuer: "Google", date: "Jan 2026" },
  { title: "Design Algorithm and Analysis", issuer: "NPTEL", date: "Oct 2025" },
  { title: "Programming in Java", issuer: "NPTEL", date: "Nov 2024" },
  { title: "CCNA: Introduction to Networks", issuer: "Cisco", date: "Nov 2024" },
] as const
