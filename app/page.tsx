import { HomePage } from "@/components/sections/home-page"
import { profile, siteConfig } from "@/data/portfolio"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: profile.name,
        jobTitle: "Full-stack developer",
        url: siteConfig.productionUrl,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: profile.university,
        },
        sameAs: [profile.links.github, profile.links.linkedin],
        knowsAbout: [
          "Full-stack development",
          "IoT",
          "Intelligent systems",
          "Artificial intelligence",
          "Digital image processing",
          "System design",
        ],
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.productionUrl,
        description: siteConfig.description,
        inLanguage: "en",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePage />
    </>
  )
}
