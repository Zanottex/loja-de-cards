import { accessoryProducts, featuredProducts } from '../dtos/product'

export const productService = {
  listListings() {
    return { featuredProducts, accessoryProducts }
  },
}
