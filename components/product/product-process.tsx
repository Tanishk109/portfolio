"use client"

import { motion } from "framer-motion"
import { useState } from "react"

import { MetricsBoard } from "@/components/product/metrics-board"
import { PersonaCard } from "@/components/product/persona-card"
import { PriorityBoard } from "@/components/product/priority-board"
import {
  engineeringChecks,
  engineeringProcess,
  engineeringStackMap,
  priorityFeatures,
  productMetrics,
  productProcess,
  researchPortalPersonas,
} from "@/data/portfolio"

const engineeringSignals = ["Architecture", "APIs", "Authentication", "Databases", "Deployment"]
const productSignals = ["Users", "Problems", "Prioritisation", "Journeys", "Metrics"]

export function ProductProcess() {
  const [mode, setMode] = useState<"engineering" | "product">("product")
  const signals = mode === "product" ? productSignals : engineeringSignals

  return (
    <div className="product-process" data-mode={mode}>
      <div className="mode-switch" aria-label="Perspective switch">
        <button
          type="button"
          className={mode === "engineering" ? "active" : ""}
          onClick={() => setMode("engineering")}
        >
          Engineering view
        </button>
        <button type="button" className={mode === "product" ? "active" : ""} onClick={() => setMode("product")}>
          Product view
        </button>
      </div>

      <div className="signal-strip" aria-label={`${mode} highlights`}>
        {signals.map((signal) => (
          <motion.span layout key={signal}>
            {signal}
          </motion.span>
        ))}
      </div>

      {mode === "engineering" ? <EngineeringCanvas /> : <ProductCanvas />}
    </div>
  )
}

function EngineeringCanvas() {
  return (
    <div className="process-canvas engineering-canvas">
      <div className="process-rail">
        {engineeringProcess.map((stage, index) => (
          <ProcessStageCard key={stage.id} index={index} stage={stage} />
        ))}
      </div>

      <div className="engineering-side-panel">
        <section aria-labelledby="engineering-stack-title">
          <p className="eyebrow">Build</p>
          <h3 id="engineering-stack-title">Technical implementation layers.</h3>
          <div className="stack-map">
            {engineeringStackMap.map((group) => (
              <article key={group.layer}>
                <strong>{group.layer}</strong>
                <div>
                  {group.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="engineering-checks-title">
          <p className="eyebrow">Verify</p>
          <h3 id="engineering-checks-title">Engineering checks behind the product.</h3>
          <ul className="engineering-check-list">
            {engineeringChecks.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

function ProductCanvas() {
  return (
    <div className="process-canvas product-canvas">
      <div className="process-rail">
        {productProcess.map((stage, index) => (
          <ProcessStageCard key={stage.id} index={index} stage={stage} />
        ))}
      </div>

      <div className="product-side-panel">
        <section aria-labelledby="personas-title">
          <p className="eyebrow">Define</p>
          <h3 id="personas-title">Three users, three needs.</h3>
          <div className="persona-grid">
            {researchPortalPersonas.map((persona) => (
              <PersonaCard key={persona.role} persona={persona} />
            ))}
          </div>
        </section>
        <section aria-labelledby="priority-title">
          <p className="eyebrow">Prioritise</p>
          <h3 id="priority-title">Approach, not claimed business impact.</h3>
          <PriorityBoard features={priorityFeatures} />
        </section>
        <MetricsBoard metrics={productMetrics} />
      </div>
    </div>
  )
}

function ProcessStageCard({
  index,
  stage,
}: {
  index: number
  stage: {
    label: string
    summary: string
    items: string[]
  }
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.04, duration: 0.42 }}
    >
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{stage.label}</h3>
      <p>{stage.summary}</p>
      <ul>
        {stage.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.article>
  )
}
