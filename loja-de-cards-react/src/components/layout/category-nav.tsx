import type { Category } from '../../data/categories'

type CategoryNavProps = {
  categories: Category[]
  activeCategory: string
  onSelectCategory: (alias: string) => void
  className: string
  ariaLabel: string
}

export function CategoryNav({
  categories,
  activeCategory,
  onSelectCategory,
  className,
  ariaLabel,
}: CategoryNavProps) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      {categories.map((category) => (
        <button
          key={category.alias}
          type="button"
          className={activeCategory === category.alias ? 'active' : ''}
          aria-pressed={activeCategory === category.alias}
          onClick={() => onSelectCategory(category.alias)}
        >
          <img className="category-logo" src={category.logo} alt="" aria-hidden="true" />
          <span className={category.showLabel ? '' : 'visually-hidden'}>{category.label}</span>
        </button>
      ))}
    </nav>
  )
}
