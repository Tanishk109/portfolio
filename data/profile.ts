export const siteConfig = {
  productionUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://tanishk.website"),
  name: "Tanishk Mittal",
  title: "Tanishk Mittal | Full-stack Developer with Product Thinking",
  description:
    "Portfolio of Tanishk Mittal, a full-stack developer with product thinking building AI-powered, real-time and institutional web products.",
  ogImage: "/opengraph-image",
  locale: "en_US",
  links: {
    github: "https://github.com/Tanishk109",
    linkedin: "https://www.linkedin.com/in/tanishk-mittal-10112004pm/",
  },
} as const

export const profile = {
  name: "Tanishk Mittal",
  headline: "Full-stack developer with product thinking.",
  positioning:
    "I research user problems, design practical workflows and build deployed products across AI collaboration, institutional research and operational management.",
  extendedPositioning:
    "I identify user problems, define practical product flows, and turn them into deployed web applications, from research and prioritisation to interfaces, APIs, databases, intelligent features and deployment.",
  secondaryPositioning: "Building AI-powered, real-time and institutional products.",
  role: "Full-stack developer and B.Tech CSE student",
  degree: "B.Tech CSE in IoT and Intelligent Systems",
  university: "Manipal University Jaipur",
  cgpa: "9.69/10",
  location: "Jaipur, Rajasthan, India",
  email: "support@tanishk.website",
  phone: undefined,
  availability: "Open to Software Engineering and Product Opportunities",
  currentFocus: "Discover -> Define -> Build -> Ship",
  resumeUrl: "/tanishk-mittal-resume.pdf",
  links: {
    github: siteConfig.links.github,
    linkedin: siteConfig.links.linkedin,
    email: "mailto:support@tanishk.website",
  },
} as const

export const navItems = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Product", id: "product" },
  { label: "Capabilities", id: "capabilities" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
] as const

export const achievements = [
  {
    value: "9.69/10",
    suffix: "",
    label: "CGPA",
    detail: "B.Tech CSE in IoT and Intelligent Systems",
  },
  {
    value: "6",
    suffix: "",
    label: "Dean's List semesters",
    detail: "Consecutive academic recognition",
  },
  {
    value: "3",
    suffix: " years",
    label: "Dr. TMA Pai Merit Scholarship",
    detail: "Consecutive academic years",
  },
  {
    value: "Academic",
    suffix: "",
    label: "Excellence awards",
    detail: "Merit-based academic recognition",
  },
  {
    value: "1,200",
    suffix: "+",
    label: "IIC 2.0 registrations",
    detail: "International Innovation Challenge 2.0",
  },
] as const
