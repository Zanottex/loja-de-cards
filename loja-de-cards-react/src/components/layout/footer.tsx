type FooterProps = {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export function Footer({ theme, onToggleTheme }: FooterProps) {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer-content">
          <p>Card Wish - Desenvolvimento de Aplicações Web</p>
          <p>Pato Branco - PR</p>
        </div>
      </footer>

      <div className="bottom-bar">
        <nav className="bottom-nav" aria-label="Atalhos">
          <a href="#">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="m2 15 14-13 14 13h-4v15h-8v-9h-5v9H6V15z" />
            </svg>
            <span>Início</span>
          </a>
          <a href="#">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M2 2h12v12H2zm16 0h12v12H18zM2 18h12v12H2zm16 0h12v12H18z" />
            </svg>
            <span>Categorias</span>
          </a>
          <a href="#">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M16 29 4 17C-3 9 8 1 16 9c8-8 19 0 12 8z" />
            </svg>
            <span>Favoritos</span>
          </a>
          <a href="#">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="16" cy="9" r="7" />
              <path d="M2 30c0-7 5-11 14-11s14 4 14 11z" />
            </svg>
            <span>Perfil</span>
          </a>
          <button
            className="bottom-theme-button"
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <circle cx="16" cy="16" r="6" />
                <path d="M16 2v4M16 26v4M2 16h4M26 16h4M6.1 6.1l2.8 2.8M23.1 23.1l2.8 2.8M25.9 6.1l-2.8 2.8M8.9 23.1l-2.8 2.8" />
              </svg>
            ) : (
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M24.5 20.5A10.5 10.5 0 0 1 11.5 7.5a10.5 10.5 0 1 0 13 13z" />
              </svg>
            )}
            <span>Tema</span>
          </button>
          <a href="#">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M2 4h4l4 19h17l4-14H8" />
              <circle cx="13" cy="29" r="2.5" />
              <circle cx="26" cy="29" r="2.5" />
            </svg>
            <span>Carrinho</span>
          </a>
        </nav>
      </div>
    </>
  )
}
