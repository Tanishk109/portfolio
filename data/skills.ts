export type SkillGroup = {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Authentication", "RBAC"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQL", "Schema design"],
  },
  {
    title: "Real-time systems",
    skills: ["Socket.io", "WebRTC", "Event-driven UI", "Live collaboration"],
  },
  {
    title: "AI/ML",
    skills: ["PyTorch", "OpenCV", "DeepLabV3", "Image segmentation", "AI workflows"],
  },
  {
    title: "DevOps and cloud",
    skills: ["Git", "GitHub", "Vercel", "Render", "Deployment debugging"],
  },
  {
    title: "Computer science",
    skills: ["DSA", "Operating systems", "Networks", "IoT systems"],
  },
]
