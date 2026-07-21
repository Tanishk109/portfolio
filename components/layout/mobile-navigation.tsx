"use client"

import { FileText, Menu, X } from "lucide-react"
import { useState } from "react"

import { navItems, profile } from "@/data/portfolio"

export function MobileNavigation({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="mobile-navigation"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
      </button>
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${open ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`/#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Tanishk Mittal resume PDF in a new tab"
          onClick={() => setOpen(false)}
        >
          <FileText size={16} aria-hidden="true" />
          Resume
        </a>
      </nav>
    </>
  )
}
