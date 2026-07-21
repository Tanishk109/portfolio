import type { MetadataRoute } from "next"

import { projects, siteConfig } from "@/data/portfolio"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.productionUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: project.priority === "primary" ? 0.85 : 0.65,
  }))

  return [
    {
      url: siteConfig.productionUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.productionUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...projectRoutes,
  ]
}
