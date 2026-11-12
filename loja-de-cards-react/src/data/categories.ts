import pokemonLogo from '../assets/img/logo-pokemon-transparent.png'
import yugiohLogo from '../assets/img/yu-gi-oh-logo-transparent.png'
import magicLogo from '../assets/img/magic-logo-transparent.png'
import lorcanaLogo from '../assets/img/lorcana-logo-transparent.png'
import accessoriesLogo from '../assets/img/acessorios-transparent.png'

export type Category = {
  alias: string
  label: string
  logo: string
  showLabel?: boolean
}

export const categories: Category[] = [
  { alias: 'pokemon', label: 'Pokémon', logo: pokemonLogo },
  { alias: 'yugioh', label: 'Yu-Gi-Oh!', logo: yugiohLogo },
  { alias: 'magic', label: 'Magic: The Gathering', logo: magicLogo },
  { alias: 'lorcana', label: 'Lorcana', logo: lorcanaLogo },
  {
    alias: 'acessorios',
    label: 'Acessórios',
    logo: accessoriesLogo,
    showLabel: true,
  },
]
