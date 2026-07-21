import { ImageResponse } from "next/og"

import { profile, siteConfig } from "@/data/portfolio"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #05070f 0%, #0b1730 48%, #11102a 100%)",
          color: "#f6f8ff",
          padding: 72,
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#6de6ff",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <span>Full-stack developer with product thinking</span>
          <span>TM</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 94,
              lineHeight: 0.95,
              letterSpacing: 0,
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            style={{
              maxWidth: 930,
              margin: 0,
              color: "#c9d6ee",
              fontSize: 38,
              lineHeight: 1.22,
            }}
          >
            {profile.headline}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            color: "#f6f8ff",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          {["Product Thinking", "Full Stack", "AI Collaboration", "Research Platforms", "Leadership"].map((item) => (
            <span
              key={item}
              style={{
                border: "1px solid rgba(109, 230, 255, 0.34)",
                borderRadius: 999,
                background: "rgba(255, 255, 255, 0.08)",
                padding: "12px 20px",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
