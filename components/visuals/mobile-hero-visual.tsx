import Image from "next/image"

const mobileWindows = [
  {
    src: "/project-previews/intellmeet-live.png",
    alt: "IntellMeet live product preview",
  },
  {
    src: "/project-previews/research-portal-live.png",
    alt: "MUJ Research Portal live product preview",
  },
  {
    src: "/project-previews/nrcms-live.png",
    alt: "NRCMS live product preview",
  },
]

export function MobileHeroVisual() {
  return (
    <div className="mobile-hero-visual" aria-label="Live product previews">
      <div className="mobile-core">TM</div>
      {mobileWindows.map((window, index) => (
        <Image
          key={window.src}
          src={window.src}
          alt={window.alt}
          width={420}
          height={260}
          sizes="(max-width: 760px) 86vw, 320px"
          className={`mobile-product-shot shot-${index + 1}`}
        />
      ))}
    </div>
  )
}
