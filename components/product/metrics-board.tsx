export function MetricsBoard({ metrics }: { metrics: readonly string[] }) {
  return (
    <div className="metrics-board" aria-label="Metrics designed for product evaluation">
      <p>Metrics designed for product evaluation</p>
      <ul>
        {metrics.map((metric) => (
          <li key={metric}>{metric}</li>
        ))}
      </ul>
    </div>
  )
}
