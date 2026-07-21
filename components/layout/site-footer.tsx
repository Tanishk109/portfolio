import { ArrowUpRight } from "lucide-react"

import { profile } from "@/data/portfolio"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{profile.name}</strong>
        <p>{profile.degree}</p>
      </div>
      <a href="#top" aria-label="Back to top">
        Back to top
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </footer>
  )
}
