import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { AboutEducation } from "@/components/sections/about-education"
import { Capabilities } from "@/components/sections/capabilities"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Leadership } from "@/components/sections/leadership"
import { LiveProjects } from "@/components/sections/live-projects"
import { ProductThinking } from "@/components/sections/product-thinking"
import { SecondaryWork } from "@/components/sections/secondary-work"

export function HomePage() {
  return (
    <main id="top" className="site-root">
      <div className="site-background" aria-hidden="true" />
      <SiteHeader />
      <Hero />
      <LiveProjects />
      <AboutEducation />
      <ProductThinking />
      <Capabilities />
      <Experience />
      <Leadership />
      <SecondaryWork />
      <Contact />
      <SiteFooter />
    </main>
  )
}
