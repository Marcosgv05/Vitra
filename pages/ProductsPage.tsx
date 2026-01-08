import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import { SITE_TEXT } from '../constants';
import { Product } from '../types';
import { SlidersHorizontal, X, Loader2 } from 'lucide-react';

interface ProductsPageProps {
  onAddToCart: (product: Product) => void;
}

const CATEGORIAS = [
  { id: 'todos', label: 'Todos' },
  { id: 'vestuario', label: 'Vestuário' },
  { id: 'calcados', label: 'Calçados' },
  { id: 'relogios', label: 'Relógios' },
  { id: 'perfumes', label: 'Perfumes' },
  { id: 'carteiras', label: 'Carteiras' },
  { id: 'cintos', label: 'Cintos' },
  { id: 'oculos', label: 'Óculos' },
  { id: 'acessorios', label: 'Acessórios' },
];

const ProductsPage: React.FC<ProductsPageProps> = ({ onAddToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaParam = searchParams.get('categoria') || 'todos';
  const [selectedCategory, setSelectedCategory] = useState(categoriaParam);
  const [showFilters, setShowFilters] = useState(false);

  // Usa o contexto de produtos
  const { products, loading, error, isShopifyEnabled, getProductsByCategory } = useProducts();

  // Sincroniza a categoria da URL com o estado
  useEffect(() => {
    setSelectedCategory(categoriaParam);
  }, [categoriaParam]);

  const filteredProducts = useMemo(() => {
    return getProductsByCategory(selectedCategory);
  }, [selectedCategory, products, getProductsByCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'todos') {
      searchParams.delete('categoria');
    } else {
      searchParams.set('categoria', categoryId);
    }
    setSearchParams(searchParams);
    setShowFilters(false);
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16">
      {/* Header da Página */}
      <div className="bg-mensch-charcoal text-white py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-screen-2xl mx-auto">
          <motion.h1 
            className="font-serif text-4xl sm:text-5xl md:text-7xl italic mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {SITE_TEXT.nav.shop}
          </motion.h1>
          <motion.p 
            className="text-gray-400 max-w-lg text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Produtos premium selecionados para o homem moderno. Qualidade, estilo e sofisticação em cada detalhe.
          </motion.p>
          {isShopifyEnabled && (
            <motion.span 
              className="inline-block mt-4 text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              ✓ Conectado ao Shopify
            </motion.span>
          )}
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Barra de Filtros */}
        <div className="flex justify-between items-center mb-6 sm:mb-12">
          {/* Filtro Desktop */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-wrap">
            {CATEGORIAS.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3 lg:px-4 py-2 text-xs lg:text-sm uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-mensch-charcoal text-white'
                    : 'bg-transparent text-mensch-charcoal border border-mensch-charcoal/20 hover:border-mensch-charcoal'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Filtro Mobile - Botão */}
          <button 
            className="md:hidden flex items-center gap-2 text-sm uppercase tracking-wider px-4 py-2 border border-mensch-charcoal/20 rounded-full"
            onClick={() => setShowFilters(true)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filtrar
            {selectedCategory !== 'todos' && (
              <span className="ml-1 w-2 h-2 bg-mensch-charcoal rounded-full" />
            )}
          </button>

          <span className="text-xs sm:text-sm text-gray-500">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'}
          </span>
        </div>

        {/* Categoria Selecionada - Mobile */}
        {selectedCategory !== 'todos' && (
          <div className="md:hidden mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Categoria:</span>
              <span className="px-3 py-1 bg-mensch-charcoal text-white text-sm rounded-full flex items-center gap-2">
                {CATEGORIAS.find(c => c.id === selectedCategory)?.label}
                <button onClick={() => handleCategoryChange('todos')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            </div>
          </div>
        )}

        {/* Modal de Filtros Mobile */}
        <AnimatePresence>
          {showFilters && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-50 md:hidden"
                onClick={() => setShowFilters(false)}
              />
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-3xl md:hidden max-h-[80vh] overflow-y-auto"
              >
                <div className="sticky top-0 bg-white p-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-serif text-xl">Filtrar por Categoria</h3>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4 pb-8">
                  <div className="grid grid-cols-2 gap-3">
                    {CATEGORIAS.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`p-4 text-sm font-medium text-left rounded-xl transition-all ${
                          selectedCategory === cat.id
                            ? 'bg-mensch-charcoal text-white'
                            : 'bg-gray-50 text-mensch-charcoal hover:bg-gray-100'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Estado de Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-mensch-charcoal" />
            <span className="ml-3 text-gray-500">Carregando produtos...</span>
          </div>
        )}

        {/* Erro */}
        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-yellow-800 text-sm">{error}</p>
          </div>
        )}

        {/* Grid de Produtos */}
        {!loading && (
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-x-6 sm:gap-y-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProductCard 
                  product={product} 
                  onAddToCart={onAddToCart} 
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Nenhum produto encontrado nesta categoria.</p>
            <button 
              onClick={() => handleCategoryChange('todos')}
              className="mt-4 text-sm underline text-mensch-charcoal"
            >
              Ver todos os produtos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
