import logo from '../../assets/img/Logo-transparent.png'
import { CategoryNav } from './category-nav'
import type { Category } from '../../data/categories'

type SidebarProps = {
  categories: Category[]
  activeCategory: string
  onSelectCategory: (alias: string) => void
  onGoHome: () => void
}

export function Sidebar({
  categories,
  activeCategory,
  onSelectCategory,
  onGoHome,
}: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Navegação por categorias">
      <a className="brand sidebar-brand" href="#top" aria-label="CardWish, início" onClick={onGoHome}>
        <img className="brand-image" src={logo} alt="CardWish" />
      </a>

      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
        className="category-nav"
        ariaLabel="Categorias de cartas"
      />

      <a className="sidebar-profile" href="#" aria-label="Perfil">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="9" r="7" />
          <path d="M3 28c0-6 5-10 13-10s13 4 13 10v2H3z" />
        </svg>
      </a>
    </aside>
  )
}
