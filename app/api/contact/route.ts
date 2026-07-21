import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(120),
  subject: z.string().trim().min(3).max(120),
  message: z.string().trim().min(10).max(2000),
  website: z.string().trim().max(0).optional(),
})

export async function POST(request: Request) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(payload)

  if (!parsed.success) {
    return NextResponse.json({ message: "Please complete every field with valid contact details." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL ?? "tanishkmittal183@gmail.com"
  const from = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !from) {
    return NextResponse.json(
      { message: "Couldn't send the message. Please email me directly." },
      { status: 503 },
    )
  }

  const resend = new Resend(apiKey)
  const { name, email, subject, message } = parsed.data
  const submittedAt = new Date().toISOString()

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nSubmitted: ${submittedAt}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    })

    return NextResponse.json({ message: "Message sent. I'll get back to you soon." })
  } catch {
    return NextResponse.json({ message: "Couldn't send the message. Please email me directly." }, { status: 502 })
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}
