import { ProductProcess } from "@/components/product/product-process"

export function ProductThinking() {
  return (
    <section id="product" className="product-thinking section-shell" aria-labelledby="product-title">
      <div className="section-intro split">
        <div>
          <p className="eyebrow">Product thinking</p>
          <h2 id="product-title">From user problem to shipped product.</h2>
        </div>
        <p>
          The MUJ Research Portal is used here as a product example: a workflow problem became personas,
          prioritised features, authenticated flows, data models and evaluation metrics.
        </p>
      </div>
      <ProductProcess />
    </section>
  )
}
