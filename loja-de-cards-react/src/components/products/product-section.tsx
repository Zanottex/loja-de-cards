 import type { Product } from '../../cases/products/dtos/product'
import { ProductCard } from '../../cases/products/components/product-card'

type ProductSectionProps = {
  id: string
  title: string
  products: Product[]
  activeCategory: string
  showNextButton?: boolean
}

export function ProductSection({
  id,
  title,
  products,
  activeCategory,
  showNextButton = false,
}: ProductSectionProps) {
  const visibleProducts = products.filter(
    (product) => activeCategory === 'todos' || product.category === activeCategory,
  )

  if (visibleProducts.length === 0) {
    return null
  }

  return (
    <section className="featured" aria-labelledby={id}>
      <header className="section-heading">
        <h2 id={id}>{title}</h2>
        {showNextButton && (
          <button className="next-button" type="button" aria-label="Ver mais cartas">
            <span aria-hidden="true">➜</span>
          </button>
        )}
      </header>

      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
