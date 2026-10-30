import './App.css'
import imagemBanner from './assets/img/imagem_banner.png'

function App() {
  return (
    <>
      <aside className="sidebar" aria-label="Navegação por categorias">
        <a className="brand sidebar-brand" href="#" aria-label="CardWish, início">
          LOGO
        </a>

        <nav className="sidebar-categories" aria-label="Categorias de cartas">
          <a href="#"><span>Opção 1</span><small>Exemplo: pokemon</small></a>
          <a href="#"><span>Opção 2</span><small>Exemplo: Yu-gi-oh</small></a>
          <a href="#"><span>Opção 3</span><small>Exemplo: Magic</small></a>
          <a href="#"><span>Opção 4</span><small>Exemplo: Lorcana</small></a>
          <a href="#"><span>Opção 5</span><small>Exemplo: Outros</small></a>
        </nav>

        <a className="sidebar-profile" href="#" aria-label="Perfil">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="9" r="7" />
            <path d="M3 28c0-6 5-10 13-10s13 4 13 10v2H3z" />
          </svg>
        </a>
      </aside>

      <div className="site-shell">
        <header className="topbar">
          <a className="brand mobile-brand" href="#" aria-label="CardWish, início">
            LOGO
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
            <a href="#" aria-label="Início">
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <path d="m4 22 20-18 20 18h-6v21H27V29h-7v14H10V22z" />
              </svg>
            </a>
          </nav>
        </header>

        <main className="main-content">
          <section className="banner" aria-label="Crie sua carta personalizada">
            <img
              className="banner-image"
              src={imagemBanner}
              alt="Crie sua carta personalizada com a CardWish"
            />
          </section>

          <nav className="mobile-categories" aria-label="Categorias de cartas">
            <a href="#"><span>Opção 1</span><small>Exemplo: pokemon</small></a>
            <a href="#"><span>Opção 2</span><small>Exemplo: Yu-gi-oh</small></a>
            <a href="#"><span>Opção 3</span><small>Exemplo: Magic</small></a>
            <a className="category-lorcana" href="#"><span>Opção 4</span><small>Exemplo: Lorcana</small></a>
            <a href="#">
              <span className="category-label-mobile">Opção 4</span>
              <span className="category-label-tablet">Opção 5</span>
              <small>Exemplo: Outros</small>
            </a>
          </nav>

          <section className="featured" aria-labelledby="featured-title">
            <header className="section-heading">
              <h1 id="featured-title">Destaques do dia</h1>
              <button className="next-button" type="button" aria-label="Ver mais cartas">
                <span aria-hidden="true">➜</span>
              </button>
            </header>

            <div className="product-grid">
              <article className="product">
                <figure className="card-image" aria-label="Imagem ilustrativa da carta 1">
                  <span className="card-cloud" aria-hidden="true" />
                  <span className="card-hill" aria-hidden="true" />
                </figure>
                <div className="product-info">
                  <p>Informações da carta:</p>
                  <ul><li>Nome</li><li>Preço</li><li>Estado de conservação</li></ul>
                </div>
              </article>

              <article className="product">
                <figure className="card-image" aria-label="Imagem ilustrativa da carta 2">
                  <span className="card-cloud" aria-hidden="true" />
                  <span className="card-hill" aria-hidden="true" />
                </figure>
                <div className="product-info">
                  <p>Informações da carta:</p>
                  <ul><li>Nome</li><li>Preço</li><li>Estado de conservação</li></ul>
                </div>
              </article>

              <article className="product">
                <figure className="card-image" aria-label="Imagem ilustrativa da carta 3">
                  <span className="card-cloud" aria-hidden="true" />
                  <span className="card-hill" aria-hidden="true" />
                </figure>
                <div className="product-info">
                  <p>Informações da carta:</p>
                  <ul><li>Nome</li><li>Preço</li><li>Estado de conservação</li></ul>
                </div>
              </article>

              <article className="product">
                <figure className="card-image" aria-label="Imagem ilustrativa da carta 4">
                  <span className="card-cloud" aria-hidden="true" />
                  <span className="card-hill" aria-hidden="true" />
                </figure>
                <div className="product-info">
                  <p>Informações da carta:</p>
                  <ul><li>Nome</li><li>Preço</li><li>Estado de conservação</li></ul>
                </div>
              </article>

              <article className="product">
                <figure className="card-image" aria-label="Imagem ilustrativa da carta 5">
                  <span className="card-cloud" aria-hidden="true" />
                  <span className="card-hill" aria-hidden="true" />
                </figure>
                <div className="product-info">
                  <p>Informações da carta:</p>
                  <ul><li>Nome</li><li>Preço</li><li>Estado de conservação</li></ul>
                </div>
              </article>
            </div>
          </section>
        </main>

        <footer className="bottom-bar">
          <nav className="bottom-nav" aria-label="Atalhos">
            <a href="#">
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m2 15 14-13 14 13h-4v15h-8v-9h-5v9H6V15z" /></svg>
              <span>Início</span>
            </a>
            <a href="#">
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M2 2h12v12H2zm16 0h12v12H18zM2 18h12v12H2zm16 0h12v12H18z" /></svg>
              <span>Categorias</span>
            </a>
            <a href="#">
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 29 4 17C-3 9 8 1 16 9c8-8 19 0 12 8z" /></svg>
              <span>Favoritos</span>
            </a>
            <a href="#">
              <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="9" r="7" /><path d="M2 30c0-7 5-11 14-11s14 4 14 11z" /></svg>
              <span>Perfil</span>
            </a>
            <a href="#">
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M2 4h4l4 19h17l4-14H8" /><circle cx="13" cy="29" r="2.5" /><circle cx="26" cy="29" r="2.5" /></svg>
              <span>Carrinho</span>
            </a>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default App
