export type EducationItem = {
  title: string
  focus?: string
  institution?: string
  period: string
  result?: string
  detail?: string
}

export const education: EducationItem[] = [
  {
    title: "B.Tech in Computer Science and Engineering",
    focus: "IoT and Intelligent Systems",
    institution: "Manipal University Jaipur",
    period: "2023 - Present",
    result: "CGPA: 9.69/10",
    detail: "Dean's List across 6 consecutive semesters",
  },
  {
    title: "Diploma in Product Management with Generative and Agentic AI",
    period: "2026 - Present",
    detail: "Product management learning track focused on AI-enabled product thinking.",
  },
  {
    title: "Senior Secondary, CBSE",
    institution: "K.M. Public School",
    period: "Completed",
    result: "91.4%",
  },
  {
    title: "Secondary, CBSE",
    institution: "K.M. Public School",
    period: "Completed",
    result: "96%",
  },
]
