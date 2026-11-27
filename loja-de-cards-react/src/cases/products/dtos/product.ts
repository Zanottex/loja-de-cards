import imagemBePrepared from '../assets/Be Prepared.jpg'
import imagemCharizardEx from '../assets/Charizard-ex.jpg'
import imagemElsa from '../assets/Elsa - Spirit of Winter.jpg'
import imagemMaleficent from '../assets/Maleficent.jpg'
import imagemMickey from '../assets/Mickey Mouse - Brave Little Tailor.jpg'
import imagemPikachu from '../assets/Pikachu-V.jpg'
import imagemStitch from '../assets/Stitch - Rock Star.jpg'
import imagemAliancaImpensavel from '../assets/alianca-impensavel.jpg'
import imagemBlackLotus from '../assets/black-lotus.jpg'
import imagemCharizardMegaX from '../assets/charizard-mega-x.jpg'
import imagemCounterspell from '../assets/counterspell.jpg'
import imagemDados from '../assets/dados.jpg'
import imagemDeckBox from '../assets/deck-box.jpg'
import imagemDarkMagician from '../assets/dark-magician.jpg'
import imagemDragaoBranco from '../assets/dragao-branco.jpg'
import imagemExodia from '../assets/exodia-the-forbidden-one.jpg'
import imagemGardevoir from '../assets/gardevoir-ex.jpg'
import imagemKuriboh from '../assets/kuriboh.png'
import imagemLightningBolt from '../assets/lightning-bolt.jpg'
import imagemMarcadores from '../assets/marcadores de habilidade.jpg'
import imagemMewtwo from '../assets/mewtwo-ex.jpg'
import imagemPlaymat from '../assets/playmat.jpg'
import imagemRedEyes from '../assets/red-eyes-black-dragon.jpg'
import imagemSleeves from '../assets/sleeves.jpg'
import imagemSolRing from '../assets/sol-ring.jpg'

export type ProductCategory =
  | 'pokemon'
  | 'yugioh'
  | 'magic'
  | 'lorcana'
  | 'acessorios'

export type Product = {
  id: number
  name: string
  category: ProductCategory
  price: string
  tipo: string
  condition?: string
  image?: string
}

export const productImages: Partial<Record<string, string>> = {
  'Be Prepared.jpg': imagemBePrepared,
  'Charizard-ex.jpg': imagemCharizardEx,
  'Elsa - Spirit of Winter.jpg': imagemElsa,
  'Maleficent.jpg': imagemMaleficent,
  'Mickey Mouse - Brave Little Tailor.jpg': imagemMickey,
  'Pikachu-V.jpg': imagemPikachu,
  'Stitch - Rock Star.jpg': imagemStitch,
  'alianca-impensavel.jpg': imagemAliancaImpensavel,
  'black-lotus.jpg': imagemBlackLotus,
  'charizard-mega-x.jpg': imagemCharizardMegaX,
  'counterspell.jpg': imagemCounterspell,
  'dados.jpg': imagemDados,
  'dark-magician.jpg': imagemDarkMagician,
  'deck-box.jpg': imagemDeckBox,
  'dragao-branco.jpg': imagemDragaoBranco,
  'exodia-the-forbidden-one.jpg': imagemExodia,
  'gardevoir-ex.jpg': imagemGardevoir,
  'kuriboh.png': imagemKuriboh,
  'lightning-bolt.jpg': imagemLightningBolt,
  'marcadores de habilidade.jpg': imagemMarcadores,
  'mewtwo-ex.jpg': imagemMewtwo,
  'playmat.jpg': imagemPlaymat,
  'red-eyes-black-dragon.jpg': imagemRedEyes,
  'sleeves.jpg': imagemSleeves,
  'sol-ring.jpg': imagemSolRing,
}

export const accessoryProducts: Product[] = [
  {
    id: 6,
    name: 'Sleeves para cartas',
    category: 'acessorios',
    price: '15,00',
    tipo: 'Proteção',
    image: productImages['sleeves.jpg'],
  },
  {
    id: 7,
    name: 'Deck box',
    category: 'acessorios',
    price: '45,00',
    tipo: 'Armazenamento',
    image: productImages['deck-box.jpg'],
  },
  {
    id: 8,
    name: 'Playmat',
    category: 'acessorios',
    price: '80,00',
    tipo: 'Tapete de jogo',
    image: productImages['playmat.jpg'],
  },
  {
    id: 9,
    name: 'Dados',
    category: 'acessorios',
    price: '12,00',
    tipo: 'Acessório de jogo',
    image: productImages['dados.jpg'],
  },
  {
    id: 10,
    name: 'Marcadores de habilidade',
    category: 'acessorios',
    price: '8,00',
    tipo: 'Marcadores',
    image: productImages['marcadores de habilidade.jpg'],
  },
]
