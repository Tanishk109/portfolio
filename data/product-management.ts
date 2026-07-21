export type ProductProcessStage = {
  id: "discover" | "define" | "prioritise" | "build" | "measure"
  label: string
  summary: string
  items: string[]
}

export type Persona = {
  role: string
  need: string
  friction: string
}

export type PriorityFeature = {
  title: string
  category: "Must" | "Should" | "Could"
  reason: string
}

export const productProcess: ProductProcessStage[] = [
  {
    id: "discover",
    label: "Discover",
    summary: "Understand where the research workflow breaks before designing screens.",
    items: [
      "Students struggle to discover active research opportunities.",
      "Faculty receive applications through inconsistent channels.",
      "Opportunities are scattered across groups, spreadsheets, referrals and informal messages.",
    ],
  },
  {
    id: "define",
    label: "Define",
    summary: "Turn loose workflow pain into clear users, journeys and constraints.",
    items: [
      "Student journey: browse, evaluate fit, upload proof, apply.",
      "Faculty journey: publish project, review applicants, manage status.",
      "Coordinator journey: keep discovery, roles and participation organised.",
    ],
  },
  {
    id: "prioritise",
    label: "Prioritise",
    summary: "Choose the smallest coherent product that can make research discovery usable.",
    items: [
      "Project discovery and faculty publishing are core flow starters.",
      "Applications, uploads and dashboards create end-to-end value.",
      "Analytics are designed as product-evaluation signals rather than claimed impact.",
    ],
  },
  {
    id: "build",
    label: "Build",
    summary: "Translate product decisions into architecture, data models and responsive interfaces.",
    items: [
      "Information architecture separates public discovery from protected dashboards.",
      "Authentication and roles shape navigation, permissions and review flows.",
      "MongoDB entities connect projects, users, applications and uploaded documents.",
    ],
  },
  {
    id: "measure",
    label: "Measure",
    summary: "Define what would prove the product is reducing friction after launch.",
    items: [
      "Project discovery rate",
      "Project-page-to-application conversion",
      "Faculty review turnaround time",
    ],
  },
]

export const researchPortalPersonas: Persona[] = [
  {
    role: "Student",
    need: "Find relevant research projects and apply without chasing scattered links.",
    friction: "Opportunities can be difficult to compare across informal channels.",
  },
  {
    role: "Faculty member",
    need: "Publish projects and review student interest through one structured flow.",
    friction: "Applications arrive with inconsistent context, documents and status tracking.",
  },
  {
    role: "Research coordinator",
    need: "Keep project discovery, roles and participation organised.",
    friction: "Manual coordination makes visibility and follow-up harder to maintain.",
  },
]

export const priorityFeatures: PriorityFeature[] = [
  {
    title: "Project discovery",
    category: "Must",
    reason: "Starts the student value loop.",
  },
  {
    title: "Faculty project publishing",
    category: "Must",
    reason: "Creates supply for discovery.",
  },
  {
    title: "Student application flow",
    category: "Must",
    reason: "Completes the student-to-faculty connection.",
  },
  {
    title: "Role-aware dashboards",
    category: "Should",
    reason: "Keeps each user focused on the right tasks.",
  },
  {
    title: "Email verification",
    category: "Should",
    reason: "Improves account trust before collaboration.",
  },
  {
    title: "Resume and certificate uploads",
    category: "Should",
    reason: "Gives faculty more review context.",
  },
  {
    title: "Application analytics",
    category: "Could",
    reason: "Useful for evaluation after the core flow works.",
  },
]

export const productMetrics = [
  "Project discovery rate",
  "Project-page-to-application conversion",
  "Application completion rate",
  "Faculty review turnaround time",
  "Student-to-faculty connection rate",
  "Returning active users",
] as const
