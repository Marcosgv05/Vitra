import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Plus } from 'lucide-react';
import { SITE_TEXT } from '../constants';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  return (
    <div 
      className="group flex flex-col gap-3 relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Link to={`/produto/${product.id}`} className="relative aspect-[4/5] bg-gray-200 overflow-hidden w-full block">
        <img
          src={product.imageFront}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={product.imageBack}
          alt={`${product.name} Costas`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Quick Add Button - Inside Image Container */}
        <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onAddToCart(product);
            }}
            className="w-full bg-white text-black font-sans text-xs uppercase font-medium py-3 hover:bg-mensch-charcoal hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <Plus className="w-4 h-4" /> {SITE_TEXT.products.quickAdd}
          </button>
        </div>

        {/* Mobile Quick Add Button - Always visible on touch devices */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onAddToCart(product);
          }}
          className="sm:hidden absolute bottom-3 right-3 w-10 h-10 bg-white text-black rounded-full shadow-lg flex items-center justify-center hover:bg-mensch-charcoal hover:text-white transition-colors z-10"
          aria-label="Adicionar ao carrinho"
        >
          <Plus className="w-5 h-5" />
        </button>
      </Link>

      {/* Product Details - Now separate from the button */}
      <Link to={`/produto/${product.id}`} className="flex flex-col items-start space-y-1 pt-1">
        <span className="text-xs text-mensch-grey uppercase tracking-wider font-medium">
          {product.brand}
        </span>
        <div className="flex justify-between w-full items-start gap-2">
          <h3 className="text-sm font-bold text-mensch-charcoal leading-tight flex-1 line-clamp-2">
            {product.name}
          </h3>
          <span className="text-sm font-sans font-normal text-mensch-charcoal whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
