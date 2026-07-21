import type { PriorityFeature } from "@/data/portfolio"

const columns: PriorityFeature["category"][] = ["Must", "Should", "Could"]

export function PriorityBoard({ features }: { features: PriorityFeature[] }) {
  return (
    <div className="priority-board" aria-label="Product prioritisation board">
      {columns.map((column) => (
        <section key={column} aria-labelledby={`priority-${column.toLowerCase()}`}>
          <h3 id={`priority-${column.toLowerCase()}`}>{column}</h3>
          {features
            .filter((feature) => feature.category === column)
            .map((feature) => (
              <article key={feature.title}>
                <strong>{feature.title}</strong>
                <p>{feature.reason}</p>
              </article>
            ))}
        </section>
      ))}
    </div>
  )
}
