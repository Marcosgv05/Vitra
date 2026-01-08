import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProducts } from '../context/ProductContext';
import { Product } from '../types';
import { ArrowLeft, Minus, Plus, ShoppingBag, Heart, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductDetailPageProps {
  onAddToCart: (product: Product) => void;
}

// Tamanhos para diferentes categorias
const SIZE_OPTIONS: Record<string, string[]> = {
  'Camisas': ['PP', 'P', 'M', 'G', 'GG', 'XGG'],
  'Blazers': ['PP', 'P', 'M', 'G', 'GG', 'XGG'],
  'Polos': ['PP', 'P', 'M', 'G', 'GG', 'XGG'],
  'Calças': ['38', '40', '42', '44', '46', '48'],
  'Calçados': ['39', '40', '41', '42', '43', '44'],
  'Cintos': ['85', '90', '95', '100', '105', '110'],
};

// Categorias que não precisam de tamanho
const NO_SIZE_CATEGORIES = ['Relógios', 'Perfumes', 'Carteiras', 'Óculos'];

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Usa o contexto de produtos
  const { products, loading, getProductById } = useProducts();
  const product = getProductById(id || '');
  
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState<'front' | 'back'>('front');
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-mensch-charcoal" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-32 px-6 text-center">
        <h1 className="text-2xl font-serif mb-4">Produto não encontrado</h1>
        <Link to="/produtos" className="text-sm underline">Voltar para a loja</Link>
      </div>
    );
  }

  // Verifica se a categoria precisa de tamanho
  const needsSize = !NO_SIZE_CATEGORIES.includes(product.category);
  const availableSizes = SIZE_OPTIONS[product.category] || ['PP', 'P', 'M', 'G', 'GG'];
  
  // Define tamanho padrão se necessário
  useEffect(() => {
    if (needsSize && !selectedSize) {
      setSelectedSize(availableSizes[Math.floor(availableSizes.length / 2)]);
    }
  }, [product.category, needsSize, selectedSize, availableSizes]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  // Guia de tamanho baseado na categoria
  const getSizeGuideLabel = () => {
    switch (product.category) {
      case 'Calçados': return 'Guia de Numeração';
      case 'Cintos': return 'Guia de Medidas';
      default: return 'Guia de Tamanhos';
    }
  };

  // Navegação de imagem mobile
  const toggleImage = () => {
    setActiveImage(prev => prev === 'front' ? 'back' : 'front');
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>
      </div>

      {/* Produto */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          {/* Imagens */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Imagem Principal com Swipe Mobile */}
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative group">
              <motion.img
                key={activeImage}
                src={activeImage === 'front' ? product.imageFront : product.imageBack}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Controles Mobile de Navegação */}
              <div className="sm:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3 pointer-events-none">
                <button 
                  onClick={toggleImage}
                  className="pointer-events-auto w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={toggleImage}
                  className="pointer-events-auto w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Indicador de Imagem Mobile */}
              <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <span className={`w-2 h-2 rounded-full transition-colors ${activeImage === 'front' ? 'bg-black' : 'bg-black/30'}`} />
                <span className={`w-2 h-2 rounded-full transition-colors ${activeImage === 'back' ? 'bg-black' : 'bg-black/30'}`} />
              </div>
            </div>

            {/* Miniaturas - Desktop */}
            <div className="hidden sm:flex gap-4">
              <button 
                onClick={() => setActiveImage('front')}
                className={`aspect-square w-20 lg:w-24 bg-gray-100 overflow-hidden border-2 transition-colors ${activeImage === 'front' ? 'border-black' : 'border-transparent'}`}
              >
                <img src={product.imageFront} alt="Frente" className="w-full h-full object-cover" />
              </button>
              <button 
                onClick={() => setActiveImage('back')}
                className={`aspect-square w-20 lg:w-24 bg-gray-100 overflow-hidden border-2 transition-colors ${activeImage === 'back' ? 'border-black' : 'border-transparent'}`}
              >
                <img src={product.imageBack} alt="Costas" className="w-full h-full object-cover" />
              </button>
            </div>
          </motion.div>

          {/* Informações */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">{product.brand}</span>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">{product.name}</h1>
              <p className="text-xl sm:text-2xl font-light">R$ {product.price.toFixed(2).replace('.', ',')}</p>
              <p className="text-xs text-gray-500 mt-1">ou 3x de R$ {(product.price / 3).toFixed(2).replace('.', ',')} sem juros</p>
            </div>

            {product.description && (
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{product.description}</p>
            )}

            {/* Seleção de Tamanho (apenas para categorias que precisam) */}
            {needsSize && (
              <div>
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {product.category === 'Calçados' ? 'Numeração' : product.category === 'Cintos' ? 'Medida (cm)' : 'Tamanho'}
                  </span>
                  <button className="text-xs underline text-gray-500 hover:text-black">{getSizeGuideLabel()}</button>
                </div>
                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  {availableSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-10 sm:min-w-12 h-10 sm:h-12 px-2 sm:px-3 flex items-center justify-center text-xs sm:text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-mensch-charcoal text-white'
                          : 'bg-gray-100 text-mensch-charcoal hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantidade */}
            <div>
              <span className="text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4 block">Quantidade</span>
              <div className="flex items-center border border-gray-200 w-fit">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-2 sm:p-3 hover:bg-gray-50"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 sm:w-12 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-2 sm:p-3 hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex gap-3 sm:gap-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-mensch-charcoal text-white py-3 sm:py-4 px-4 sm:px-8 uppercase tracking-widest text-xs sm:text-sm font-medium hover:bg-black transition-colors flex items-center justify-center gap-2 sm:gap-3"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Adicionar à Sacola</span>
                <span className="sm:hidden">Adicionar</span>
              </button>
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-3 sm:p-4 border transition-colors flex-shrink-0 ${isWishlisted ? 'bg-red-50 border-red-200 text-red-500' : 'border-gray-200 hover:border-black'}`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Info Adicional */}
            <div className="border-t border-gray-100 pt-6 sm:pt-8 space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-600">
              <div className="flex gap-3">
                <span className="font-medium text-black w-28 sm:w-32">Categoria:</span>
                <span>{product.category}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-black w-28 sm:w-32">Frete:</span>
                <span>Grátis para compras acima de R$ 399</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-black w-28 sm:w-32">Devolução:</span>
                <span>30 dias para troca ou devolução</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Produtos Relacionados */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-gray-100">
            <h2 className="font-serif text-2xl sm:text-3xl italic mb-8 sm:mb-12">Você também pode gostar</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {relatedProducts.map(relProd => (
                <Link key={relProd.id} to={`/produto/${relProd.id}`} className="group">
                  <div className="aspect-[4/5] bg-gray-100 mb-2 sm:mb-3 overflow-hidden">
                    <img 
                      src={relProd.imageFront} 
                      alt={relProd.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-500 uppercase">{relProd.brand}</span>
                  <h3 className="text-xs sm:text-sm font-medium mt-1 line-clamp-2">{relProd.name}</h3>
                  <p className="text-xs sm:text-sm mt-1">R$ {relProd.price.toFixed(2).replace('.', ',')}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
