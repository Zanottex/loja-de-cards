import {
  accessoryProducts,
  productImages,
  type Product,
  type ProductCategory,
} from '../dtos/product'

const MOCKAROO_API_URL = 'https://my.api.mockaroo.com/card.json'

function isProductCategory(value: unknown): value is ProductCategory {
  return (
    value === 'pokemon' ||
    value === 'yugioh' ||
    value === 'magic' ||
    value === 'lorcana' ||
    value === 'acessorios'
  )
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function optionalString(value: unknown, field: string): string | undefined {
  if (value === undefined || value === null || value === '') {
    return undefined
  }

  if (typeof value !== 'string') {
    throw new Error(`O campo "${field}" recebido do Mockaroo deve ser texto.`)
  }

  return value
}

function parseProduct(value: unknown, index: number): Product {
  if (!isRecord(value)) {
    throw new Error(`O produto ${index + 1} recebido do Mockaroo é inválido.`)
  }

  const id =
    typeof value.id === 'number'
      ? value.id
      : typeof value.id === 'string' && value.id.trim() !== ''
        ? Number(value.id)
        : Number.NaN
  const price =
    typeof value.price === 'string' && value.price.trim() !== ''
      ? value.price
      : typeof value.price === 'number' && Number.isFinite(value.price)
        ? value.price.toFixed(2).replace('.', ',')
        : undefined
  const imageName = optionalString(value.image, 'image')

  if (!Number.isInteger(id) || id < 1) {
    throw new Error(`O produto ${index + 1} precisa ter um id numérico válido.`)
  }
  if (typeof value.name !== 'string' || value.name.trim() === '') {
    throw new Error(`O produto ${index + 1} precisa ter um nome.`)
  }
  if (!isProductCategory(value.category)) {
    throw new Error(`A categoria do produto ${index + 1} não é reconhecida.`)
  }
  if (!price) {
    throw new Error(`O produto ${index + 1} precisa ter um preço válido.`)
  }
  if (typeof value.tipo !== 'string' || value.tipo.trim() === '') {
    throw new Error(`O produto ${index + 1} precisa ter um tipo.`)
  }

  return {
    id,
    name: value.name,
    category: value.category,
    price,
    tipo: value.tipo,
    condition: optionalString(value.condition, 'condition'),
    image: imageName ? productImages[imageName] ?? imageName : undefined,
  }
}

async function listFeaturedProducts(signal: AbortSignal): Promise<Product[]> {
  const apiKey = import.meta.env.VITE_MOCKAROO_API_KEY?.trim()

  if (!apiKey) {
    throw new Error(
      'Configure VITE_MOCKAROO_API_KEY no arquivo .env.local para carregar as cartas.',
    )
  }

  const url = new URL(MOCKAROO_API_URL)
  url.searchParams.set('key', apiKey)

  let response: Response
  try {
    response = await fetch(url, { signal })
  } catch (error) {
    if (signal.aborted) {
      throw error
    }

    throw new Error(
      'Não foi possível conectar à API do Mockaroo. Verifique sua conexão e tente novamente.',
      { cause: error },
    )
  }

  if (!response.ok) {
    throw new Error(
      `O Mockaroo não conseguiu carregar as cartas (HTTP ${response.status}). Verifique a chave e o endpoint.`,
    )
  }

  let payload: unknown
  try {
    payload = await response.json()
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('A resposta do Mockaroo não contém um JSON válido.', {
        cause: error,
      })
    }

    throw error
  }

  if (!Array.isArray(payload)) {
    throw new Error('A resposta do Mockaroo precisa ser uma lista de produtos.')
  }

  return payload
    .map((product, index) => parseProduct(product, index))
    .filter((product) => product.category !== 'acessorios')
}

export const productService = {
  listFeaturedProducts,
  listAccessoryProducts() {
    return accessoryProducts
  },
}
