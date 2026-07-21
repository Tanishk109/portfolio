"use client"

import { Github, Linkedin, Mail, Send } from "lucide-react"
import { type FormEvent, useState } from "react"

import { profile } from "@/data/portfolio"

type FormState = "idle" | "submitting" | "success" | "error"

export function Contact() {
  const [state, setState] = useState<FormState>("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setState("submitting")
    setMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
      const result = (await response.json()) as { message?: string }

      if (!response.ok) {
        setState("error")
        setMessage(result.message ?? "Couldn't send the message. Please email me directly.")
        return
      }

      form.reset()
      setState("success")
      setMessage(result.message ?? "Message sent. I'll get back to you soon.")
    } catch {
      setState("error")
      setMessage("Couldn't send the message. Please email me directly.")
    }
  }

  return (
    <section id="contact" className="contact-section section-shell" aria-labelledby="contact-title">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let's talk.</h2>
          <p>
            Have an internship opportunity, product idea, software project or research collaboration? Send me the details.
          </p>
          <div className="contact-links">
            <a href={profile.links.email}>
              <Mail size={18} aria-hidden="true" />
              {profile.email}
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-pair">
            <label>
              <span>Name</span>
              <input name="name" type="text" autoComplete="name" required maxLength={80} />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required maxLength={120} />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input name="subject" type="text" autoComplete="off" required maxLength={120} />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={6} required maxLength={2000} />
          </label>
          <label className="hidden-field" aria-hidden="true">
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <button className="button-primary" type="submit" disabled={state === "submitting"}>
            <Send size={16} aria-hidden="true" />
            {state === "submitting" ? "Sending..." : "Send message"}
          </button>
          <p className={`form-status ${state}`} role="status" aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </section>
  )
}
