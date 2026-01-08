import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import { CATEGORIES, SITE_TEXT } from '../constants';
import { Product } from '../types';
import { Loader2 } from 'lucide-react';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
  const { products, loading, isShopifyEnabled } = useProducts();

  return (
    <>
      <Hero />
      
      <CategoryGrid categories={CATEGORIES} />

      {/* Seção de Produtos em Destaque */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 italic">{SITE_TEXT.products.title}</h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md">
              {SITE_TEXT.products.subtitle}
            </p>
          </div>
          <Link 
            to="/produtos" 
            className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity"
          >
            {SITE_TEXT.products.viewAll}
          </Link>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-mensch-charcoal" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-x-6 sm:gap-y-12">
            {products.slice(0, 8).map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart} 
              />
            ))}
          </div>
        )}
        
        {/* Link mobile para ver todos */}
        <div className="sm:hidden mt-8 text-center">
          <Link 
            to="/produtos" 
            className="inline-block bg-mensch-charcoal text-white px-8 py-3 text-xs uppercase tracking-widest"
          >
            {SITE_TEXT.products.viewAll}
          </Link>
        </div>
      </section>

      {/* Editorial / Declaração da Marca */}
      <section className="py-20 sm:py-32 bg-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 sm:mb-6 block">{SITE_TEXT.philosophy.label}</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-6xl leading-tight mb-6 sm:mb-8">
            {SITE_TEXT.philosophy.quote.split('elegância')[0]}
            <span className="italic">elegância</span>
            {SITE_TEXT.philosophy.quote.split('elegância')[1]}
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {SITE_TEXT.philosophy.description}
          </p>
        </div>
      </section>

      {/* Banner de Destaque */}
      <section className="relative h-[50vh] sm:h-[70vh] overflow-hidden">
        <img 
          src="https://picsum.photos/seed/menLifestyle/1920/1080"
          alt="Lifestyle masculino Vitra"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-6xl italic mb-4 sm:mb-6">O Estilo que Define</h3>
            <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 max-w-lg mx-auto">
              Cada peça foi selecionada para o homem que valoriza qualidade e sofisticação.
            </p>
            <Link 
              to="/sobre"
              className="inline-block border border-white text-white px-6 sm:px-8 py-3 text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Conheça Nossa História
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
