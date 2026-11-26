import { useEffect, useState } from 'react'
import type { Product } from '../dtos/product'
import { productService } from '../services/product-service'

export function useProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    productService
      .listFeaturedProducts(controller.signal)
      .then(setFeaturedProducts)
      .catch((cause: unknown) => {
        if (!controller.signal.aborted) {
          setError(
            cause instanceof Error
              ? cause.message
              : 'Ocorreu um erro ao carregar as cartas. Tente novamente.',
          )
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      })

    return () => controller.abort()
  }, [])

  return {
    featuredProducts,
    accessoryProducts: productService.listAccessoryProducts(),
    isLoading,
    error,
  }
}
