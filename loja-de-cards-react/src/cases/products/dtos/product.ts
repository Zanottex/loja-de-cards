import imagemCharizard from '../assets/charizard-mega-x.jpg'
import imagemDragaoBranco from '../assets/dragao-branco.jpg'
import imagemAliancaImpensavel from '../assets/alianca-impensavel.jpg'

export type Product = {
  id: number
  name: string
  category: string
  price: string
  tipo: string
  condition?: string
  image?: string
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Mega Charizard X',
    category: 'pokemon',
    price: '1000,00',
    tipo: 'Pokemon',
    condition: 'NM',
    image: imagemCharizard,
  },
  {
    id: 2,
    name: 'Dragão Branco de Olhos Azuis',
    category: 'yugioh',
    price: '20,00',
    tipo: 'Criatura',
    condition: 'NM',
    image: imagemDragaoBranco,
  },
  {
    id: 3,
    name: 'Aliança Impensável',
    category: 'magic',
    price: '00,20',
    tipo: 'Encantamento',
    condition: 'NM',
    image: imagemAliancaImpensavel,
  },
  {
    id: 4,
    name: 'Carta Lorcana 04',
    category: 'lorcana',
    price: '10,00',
    tipo: 'Objeto',
    condition: 'NM',
  },
  {
    id: 5,
    name: 'Pikachu V',
    category: 'pokemon',
    price: '150,00',
    tipo: 'Pokémon',
    condition: 'NM',
  },
]

export const accessoryProducts: Product[] = [
  {
    id: 6,
    name: 'Sleeves para cartas',
    category: 'acessorios',
    price: '15,00',
    tipo: 'Proteção',
  },
  {
    id: 7,
    name: 'Deck box',
    category: 'acessorios',
    price: '45,00',
    tipo: 'Armazenamento',
  },
  {
    id: 8,
    name: 'Playmat',
    category: 'acessorios',
    price: '80,00',
    tipo: 'Tapete de jogo',
  },
  {
    id: 9,
    name: 'Dados',
    category: 'acessorios',
    price: '12,00',
    tipo: 'Acessório de jogo',
  },
  {
    id: 10,
    name: 'Marcadores de habilidade',
    category: 'acessorios',
    price: '8,00',
    tipo: 'Marcadores',
  },
]
