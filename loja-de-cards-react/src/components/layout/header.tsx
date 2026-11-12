import logo from '../../assets/img/Logo-transparent.png'

type HeaderProps = {
  onGoHome: () => void
}

export function Header({ onGoHome }: HeaderProps) {
  return (
    <header className="topbar">
      <a className="brand mobile-brand" href="#top" aria-label="CardWish, início" onClick={onGoHome}>
        <img className="brand-image" src={logo} alt="CardWish" />
      </a>

      <div className="search-group">
        <form className="search" role="search" onSubmit={(event) => event.preventDefault()}>
          <label className="visually-hidden" htmlFor="card-search">Buscar cartas</label>
          <input id="card-search" type="search" />
          <button className="search-button" type="submit" aria-label="Buscar">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="13" cy="13" r="9" />
              <path d="m20 20 8 8" />
            </svg>
          </button>
        </form>

        <button className="menu-button" type="button" aria-label="Abrir menu">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M5 8h22M5 16h22M5 24h22" />
          </svg>
        </button>
      </div>

      <nav className="header-actions" aria-label="Ações da loja">
        <a href="#" aria-label="Carrinho">
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <path d="M4 7h6l6 25h24l6-18H14" />
            <circle cx="20" cy="40" r="3" />
            <circle cx="38" cy="40" r="3" />
          </svg>
        </a>
        <a href="#" aria-label="Favoritos">
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <path d="M24 42 7 25C-3 13 12 1 24 13 36 1 51 13 41 25z" />
          </svg>
        </a>
        <a href="#" aria-label="Dados da conta">
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="15" r="9" />
            <path d="M7 43c0-9 7-14 17-14s17 5 17 14" />
          </svg>
        </a>
      </nav>
    </header>
  )
}
