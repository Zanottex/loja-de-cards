import type { Product } from '../dtos/product'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product">
      <figure className={`card-image card-frame${product.image ? ' has-image' : ''}`}>
        {product.image ? (
          <img className="card-photo" src={product.image} alt={product.name} />
        ) : (
          <>
            <span className="card-cloud" aria-hidden="true" />
            <span className="card-hill" aria-hidden="true" />
          </>
        )}
      </figure>
      <div className="product-info">
        <p>
          {product.category === 'acessorios'
            ? 'Informações do acessório:'
            : 'Informações da carta:'}
        </p>
        <ul>
          <li>{product.name}</li>
          <li>$ {product.price}</li>
          {product.category !== 'acessorios' && product.condition && (
            <li>Estado da carta: {product.condition}</li>
          )}
        </ul>
      </div>
    </article>
  )
}
