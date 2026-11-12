import { useState } from 'react'
import { useProducts } from './cases/products/hooks/use-products'
import { Footer } from './components/layout/footer'
import { Header } from './components/layout/header'
import { CategoryNav } from './components/layout/category-nav'
import { Sidebar } from './components/layout/sidebar'
import { ProductSection } from './components/products/product-section'
import { categories } from './data/categories'
import imagemBanner from './assets/img/imagem_banner.png'
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const { featuredProducts, accessoryProducts } = useProducts()
  const handleGoHome = () => setActiveCategory('todos')

  return (
    <div className="site-shell" id="top">
      <Header onGoHome={handleGoHome} />

      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        onGoHome={handleGoHome}
      />

      <main className="main-content">
        <section className="banner" aria-label="Crie sua carta personalizada">
          <img
            className="banner-image"
            src={imagemBanner}
            alt="Crie sua carta personalizada com a CardWish"
          />
        </section>

        <CategoryNav
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          className="mobile-categories"
          ariaLabel="Categorias de cartas"
        />

        <ProductSection
          id="featured-title"
          title="Destaques do dia"
          products={featuredProducts}
          activeCategory={activeCategory}
          showNextButton
        />
        <ProductSection
          id="more-products-title"
          title="Principais Acessórios"
          products={accessoryProducts}
          activeCategory={activeCategory}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
