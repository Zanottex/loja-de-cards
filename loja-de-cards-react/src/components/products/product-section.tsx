import type { Product } from '../../cases/products/dtos/product'
import { ProductCard } from '../../cases/products/components/product-card'

type ProductSectionProps = {
  id: string
  title: string
  products: Product[]
  activeCategory: string
  showNextButton?: boolean
  maxProducts?: number
  isLoading?: boolean
  error?: string | null
}

export function ProductSection({
  id,
  title,
  products,
  activeCategory,
  showNextButton = false,
  maxProducts,
  isLoading = false,
  error = null,
}: ProductSectionProps) {
  const categoryProducts = products.filter(
    (product) => activeCategory === 'todos' || product.category === activeCategory,
  )
  const visibleProducts =
    activeCategory === 'todos' && maxProducts !== undefined
      ? categoryProducts.slice(0, maxProducts)
      : categoryProducts

  if (visibleProducts.length === 0 && !isLoading && !error) {
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

      {isLoading ? (
        <p className="products-status products-loading" role="status">
          Carregando cartas...
        </p>
      ) : error ? (
        <p className="products-status products-error" role="alert">
          {error}
        </p>
      ) : (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
