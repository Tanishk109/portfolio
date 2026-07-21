export type ProjectStatus = "Live" | "Completed" | "In Development" | "Academic Project"

export type ProjectMaturity =
  | "Built and deployed"
  | "Built but not deployed"
  | "Designed as a prototype"
  | "Architecture concept"

export type ProjectAccent = "cyan" | "teal" | "violet" | "amber" | "rose" | "blue"

export type Project = {
  slug: string
  title: string
  shortTitle: string
  statement: string
  priority: "primary" | "secondary"
  problem: string
  serves: string
  role: string
  personalBuild: string
  keyDecision: string
  productDecisions: [string, string, string]
  contributions: [string, string, string]
  stack: string[]
  githubUrl: string
  liveUrl?: string
  backendHealthUrl?: string
  status: ProjectStatus
  maturity: ProjectMaturity
  summary: string
  users: string
  architecture: string
  dataFlow: string
  security: string
  challenges: string[]
  outcome: string
  limitations: string
  future: string
  preview: {
    src: string
    alt: string
    width: number
    height: number
  }
  accent: ProjectAccent
}

export const projects: Project[] = [
  {
    slug: "intellmeet",
    title: "IntellMeet",
    shortTitle: "IntellMeet",
    statement:
      "An AI-powered workspace that brings meetings, collaboration and post-meeting execution into one product.",
    priority: "primary",
    problem:
      "Remote meetings often scatter scheduling, live discussion, transcripts, summaries, tasks, and analytics across too many tools.",
    serves: "Students, small teams, and collaborators running structured online meetings.",
    role: "Full-stack developer",
    personalBuild:
      "Built the meeting workspace across authentication, scheduling, room interactions, real-time chat, captions, recordings, summaries, action items, task management, analytics, and deployment.",
    keyDecision:
      "Separated persistent meeting records from real-time room state so the collaboration layer could stay responsive while meeting artifacts remained queryable.",
    productDecisions: [
      "Bring scheduling, meeting rooms, chat, captions and follow-up work into one continuous workspace.",
      "Keep demo entry and sign-in flows visible so reviewers can quickly understand the product promise.",
      "Treat summaries, action items and tasks as execution surfaces rather than decorative AI features.",
    ],
    contributions: [
      "Implemented meeting scheduling, protected room flows, participant surfaces, chat, captions, recordings, and host controls.",
      "Connected live collaboration with Socket.IO, WebRTC-oriented room interactions, API state, and authenticated user sessions.",
      "Built post-meeting productivity features including AI-style summaries, action items, analytics, notifications, exports, and task boards.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "WebRTC",
      "JWT",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Tanishk109/intellmeet",
    liveUrl: "https://intellmeet-cqas.vercel.app",
    backendHealthUrl: "https://intellmeet-api-5lhs.onrender.com/api/health",
    status: "Live",
    maturity: "Built and deployed",
    summary:
      "A live AI-powered meeting and collaboration platform for scheduling, browser meetings, real-time chat, transcripts, summaries, action items, tasks, and analytics.",
    users: "Students, small teams, and collaborators who need structured online meetings and post-meeting follow-through.",
    architecture:
      "React and Vite frontend, Node.js and Express API, MongoDB persistence, Socket.IO event channels, JWT sessions, WebRTC-oriented meeting flows, Vercel frontend hosting, and Render backend hosting.",
    dataFlow:
      "Authenticated users create and join meetings through APIs; live room events move through Socket.IO; meeting artifacts are stored for summaries, actions, analytics, and follow-up tasks.",
    security:
      "Uses JWT-protected workflows and role-aware meeting controls; public claims are limited to the implemented app and verified live deployment.",
    challenges: [
      "Keeping real-time interaction responsive while saving meeting artifacts for later review.",
      "Presenting summaries, action items, analytics, and tasks without overwhelming the meeting workspace.",
      "Coordinating separate frontend and backend deployments with stable public routes.",
    ],
    outcome:
      "Live frontend and backend endpoints are available, with the project presented as a deployed portfolio product rather than a guaranteed production-scale service.",
    limitations:
      "Long-term uptime, enterprise-scale load, and independent security audits are not claimed.",
    future:
      "Add deeper collaboration testing, improve meeting reliability under load, and expand post-meeting intelligence workflows.",
    preview: {
      src: "/project-previews/intellmeet-live.png",
      alt: "Live IntellMeet deployment screenshot",
      width: 1440,
      height: 900,
    },
    accent: "cyan",
  },
  {
    slug: "research-portal",
    title: "MUJ Research Collaboration Portal",
    shortTitle: "Research Portal",
    statement:
      "A role-aware research discovery platform connecting faculty projects with students seeking research opportunities.",
    priority: "primary",
    problem:
      "Students need a clearer way to discover faculty-led research projects and apply through a structured academic workflow.",
    serves: "Students, faculty members, and research coordinators at Manipal University Jaipur.",
    role: "Full-stack developer",
    personalBuild:
      "Built student and faculty accounts, role dashboards, public discovery, faculty project publishing, student applications, resume and certificate uploads, review flows, email verification, and research/faculty directories.",
    keyDecision:
      "Made role and verification state central to the product model so discovery, applications, and faculty review flows stay aligned.",
    productDecisions: [
      "Lead with public project discovery before asking students or faculty to enter dashboard flows.",
      "Separate student, faculty and coordinator needs through role-aware navigation and protected routes.",
      "Prioritise application structure, document uploads and verification before advanced analytics.",
    ],
    contributions: [
      "Implemented role-based student and faculty dashboards with protected routes and discovery flows.",
      "Built project publishing, application review, document upload, email verification, and directory workflows.",
      "Structured MongoDB models, authentication, and deployment configuration for a live institutional-style product.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
      "jose",
      "Tailwind CSS",
      "shadcn/ui",
      "Resend",
    ],
    githubUrl: "https://github.com/Tanishk109/research-portal-2",
    liveUrl: "https://research-portal-2-tvgq.onrender.com",
    status: "Live",
    maturity: "Built and deployed",
    summary:
      "A live full-stack research collaboration platform connecting faculty-led projects with students seeking academic research opportunities.",
    users: "Students, faculty members, and research coordinators at Manipal University Jaipur.",
    architecture:
      "Next.js application with role-aware routes, MongoDB and Mongoose models, JWT-based authentication, password hashing, email verification, upload workflows, and Render deployment.",
    dataFlow:
      "Faculty publish projects, students discover opportunities and submit applications, and review state moves through authenticated dashboards backed by MongoDB records.",
    security:
      "Includes authenticated role workflows, password hashing, JWT session handling, and email verification; no formal institutional security audit is claimed.",
    challenges: [
      "Keeping student discovery simple while preserving faculty review and account-verification requirements.",
      "Separating public opportunity browsing from protected application and dashboard flows.",
      "Maintaining accurate public deployment claims without implying official university adoption.",
    ],
    outcome:
      "A live deployed research portal is available for portfolio review, with adoption claims limited to the verified implementation.",
    limitations:
      "Official institutional adoption, production traffic, and formal security review are not claimed.",
    future:
      "Add clearer analytics, moderation tools, notifications, and stronger workflow testing across student and faculty roles.",
    preview: {
      src: "/project-previews/research-portal-live.png",
      alt: "Live MUJ Research Collaboration Portal deployment screenshot",
      width: 1440,
      height: 900,
    },
    accent: "teal",
  },
  {
    slug: "rehabilitation-portal",
    title: "NRCMS - National Rehabilitation Centre Management System",
    shortTitle: "NRCMS",
    statement:
      "An operational management platform for rehabilitation-centre administration, patient workflows, orders and support.",
    priority: "primary",
    problem:
      "Rehabilitation-centre operations need role-aware tools for patient records, recovery tracking, orders, support queries, centre workflows, and administrative approvals.",
    serves: "Rehabilitation administrators, staff members, and operational coordinators.",
    role: "Full-stack developer",
    personalBuild:
      "Built a role-aware rehabilitation operations platform covering administrative approval flows, patient records, recovery progress, order handling, support queries, centre operations, and deployment.",
    keyDecision:
      "Presented NRCMS as a live working system without implying official nationwide production adoption or clinical validation.",
    productDecisions: [
      "Organise operational modules around roles so administrators and staff see relevant workflows.",
      "Keep patient, order, support and centre operations connected without exposing sensitive sample data.",
      "Frame the product as a working deployed system, not as an official healthcare deployment.",
    ],
    contributions: [
      "Implemented role-aware access patterns and protected operational dashboards for different rehabilitation workflows.",
      "Built patient, recovery, order, support, centre, and administrative approval surfaces around practical operations.",
      "Structured the Next.js, MongoDB, and Vercel deployment path for a live portfolio-grade product.",
    ],
    stack: ["Next.js", "React", "TypeScript", "MongoDB", "Radix UI", "Custom authentication", "RBAC", "Vercel"],
    githubUrl: "https://github.com/Tanishk109/rehabilitation-centre-tracking",
    liveUrl: "https://rehabilitation-centre-tracking.vercel.app",
    status: "Live",
    maturity: "Built and deployed",
    summary:
      "A live full-stack rehabilitation-centre operations system for role-aware administration, patient records, recovery tracking, support, orders, and approvals.",
    users: "Rehabilitation administrators, staff members, and operational coordinators.",
    architecture:
      "Next.js and React interface, MongoDB-backed operational data, custom authentication, RBAC-style access, Radix UI components, and Vercel deployment.",
    dataFlow:
      "Role-specific users move through patient, recovery, order, support, centre, and approval workflows with operational state persisted in the application backend.",
    security:
      "Role-aware authentication is part of the system; clinical compliance, production healthcare deployment, and official adoption are not claimed.",
    challenges: [
      "Representing sensitive healthcare-adjacent workflows without exposing personal data or making medical claims.",
      "Designing several operational modules without losing role clarity.",
      "Balancing live deployment visibility with careful limitations around adoption and validation.",
    ],
    outcome:
      "A live deployed management system is available for portfolio review, framed as a working software product rather than an official healthcare deployment.",
    limitations:
      "No official adoption, clinical validation, production patient data, or healthcare compliance certification is claimed.",
    future:
      "Add audit trails, stronger permissions testing, reporting, and stakeholder validation for real operational deployment.",
    preview: {
      src: "/project-previews/nrcms-live.png",
      alt: "Live NRCMS deployment screenshot",
      width: 1440,
      height: 900,
    },
    accent: "violet",
  },
  {
    slug: "skin-lesion-segmentation",
    title: "Skin Lesion Segmentation",
    shortTitle: "Skin Lesion Segmentation",
    statement: "An academic computer-vision workflow for lesion segmentation experiments.",
    priority: "secondary",
    problem:
      "Medical image research needs carefully framed segmentation experiments before any diagnosis-oriented use can be discussed.",
    serves: "Academic reviewers and machine-learning learners evaluating segmentation workflows.",
    role: "Machine-learning developer",
    personalBuild:
      "Built an academic computer-vision workflow around lesion segmentation, training, and validation analysis.",
    keyDecision:
      "Presented the project strictly as academic model-training work and avoided clinical deployment claims.",
    productDecisions: [
      "Frame the work as academic experimentation.",
      "Avoid clinical product claims.",
      "Show model workflow rather than diagnostic outcomes.",
    ],
    contributions: [
      "Built a segmentation workflow for lesion image experiments.",
      "Compared predicted masks with reference-mask style outputs in an academic evaluation flow.",
      "Documented the work as model experimentation rather than a diagnostic system.",
    ],
    stack: ["Python", "PyTorch", "OpenCV", "DeepLabV3", "Image segmentation"],
    githubUrl: "https://github.com/Tanishk109",
    status: "Academic Project",
    maturity: "Built but not deployed",
    summary: "Academic computer-vision work focused on skin-lesion segmentation and model evaluation.",
    users: "Academic reviewers and machine-learning learners evaluating segmentation workflows.",
    architecture:
      "Python training pipeline with dataset preparation, segmentation model training, mask comparison, and metric review.",
    dataFlow:
      "Images move through preprocessing, model inference, mask comparison, and metric review in a controlled academic workflow.",
    security: "No patient data or clinical production workflow is represented in the public portfolio.",
    challenges: [
      "Avoiding diagnostic claims from academic segmentation work.",
      "Explaining segmentation visually without inventing unsupported metrics.",
      "Keeping dataset and model limitations clear.",
    ],
    outcome: "Academic model-training work; no clinical deployment or diagnostic claim is implied.",
    limitations: "Clinical validation, dataset licensing review, and healthcare deployment are outside the verified scope.",
    future: "Add reproducible notebooks, verified metrics, and clearer dataset documentation when available.",
    preview: {
      src: "/project-previews/skin-lesion-segmentation.webp",
      alt: "Skin lesion segmentation academic preview",
      width: 1400,
      height: 900,
    },
    accent: "rose",
  },
  {
    slug: "image-steganography",
    title: "Image Steganography",
    shortTitle: "Image Steganography",
    statement: "An academic prototype exploring secure information hiding inside images.",
    priority: "secondary",
    problem:
      "Secure communication can use image-processing techniques to hide information inside visual media.",
    serves: "Academic reviewers and learners exploring security-focused image-processing techniques.",
    role: "Academic project contributor",
    personalBuild:
      "Built a prototype workflow for encoding, processing, and evaluating hidden data inside images.",
    keyDecision:
      "Framed the project as academic security exploration rather than a deployed privacy product.",
    productDecisions: [
      "Explain the encoding workflow clearly.",
      "Avoid production-grade privacy guarantees.",
      "Keep the prototype focused on image-processing concepts.",
    ],
    contributions: [
      "Explored image-based information hiding concepts.",
      "Connected digital image processing with privacy and security framing.",
      "Structured the work as an academic implementation and research topic.",
    ],
    stack: ["Python", "Digital image processing", "Security", "Research"],
    githubUrl: "https://github.com/Tanishk109",
    status: "Academic Project",
    maturity: "Designed as a prototype",
    summary:
      "Academic digital-image-processing work focused on steganography and secure information hiding.",
    users: "Academic reviewers and learners exploring security-focused image-processing techniques.",
    architecture:
      "Prototype workflow for encoding, processing, and evaluating hidden data inside image files.",
    dataFlow:
      "A message payload is encoded into image data, transformed, and decoded for verification in a controlled workflow.",
    security: "Security framing is academic; no production cryptographic guarantee is claimed.",
    challenges: [
      "Explaining privacy concepts without overstating security guarantees.",
      "Keeping the visual representation specific to steganography.",
      "Separating prototype design from production tool claims.",
    ],
    outcome: "Presented as academic exploration, not as a deployed security product.",
    limitations: "No public deployment, audit, or real-world threat-model validation is claimed.",
    future: "Add reproducible examples and compare multiple encoding approaches when verified artifacts are available.",
    preview: {
      src: "/project-previews/image-steganography.webp",
      alt: "Image steganography academic preview",
      width: 1400,
      height: 900,
    },
    accent: "amber",
  },
]

export const featuredProjects = projects.filter((project) => project.priority === "primary")
export const secondaryProjects = projects.filter((project) => project.priority === "secondary")

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
