import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem } from '../types';
import { SITE_TEXT } from '../constants';
import { createShopifyCheckout, isShopifyConfigured } from '../services/shopify';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  const handleCheckout = async () => {
    // Verifica se o Shopify está configurado
    if (!isShopifyConfigured()) {
      alert('Shopify não está configurado. Configure as variáveis de ambiente VITE_SHOPIFY_STORE_DOMAIN e VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN.');
      return;
    }

    // Verifica se todos os itens têm variantId (produtos do Shopify)
    const itemsWithoutVariant = items.filter(item => !item.variantId);
    if (itemsWithoutVariant.length > 0) {
      alert('Alguns produtos no carrinho não vêm do Shopify e não podem ser processados. Por favor, remova produtos de demonstração antes de finalizar a compra.');
      return;
    }

    setIsCheckingOut(true);

    try {
      // Prepara os itens para o checkout do Shopify
      const checkoutItems = items.map(item => ({
        variantId: item.variantId!,
        quantity: item.quantity,
      }));

      // Cria o checkout no Shopify
      const checkoutUrl = await createShopifyCheckout(checkoutItems);

      if (checkoutUrl) {
        // Redireciona para o checkout do Shopify (headless)
        window.location.href = checkoutUrl;
      } else {
        alert('Erro ao criar checkout. Verifique se os produtos estão disponíveis e tente novamente.');
        setIsCheckingOut(false);
      }
    } catch (error) {
      console.error('Erro no checkout:', error);
      alert('Erro ao processar checkout. Tente novamente.');
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        />
      )}

      {/* Drawer */}
      <motion.div
        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[60] shadow-2xl flex flex-col"
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-gray-100">
          <h2 className="font-serif text-2xl italic">{SITE_TEXT.cart.title} ({items.length})</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
              <span className="font-serif text-xl italic">{SITE_TEXT.cart.empty}</span>
              <button onClick={onClose} className="text-xs uppercase tracking-widest underline underline-offset-4 text-black">{SITE_TEXT.cart.continueShopping}</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4">
                <div className="w-24 aspect-[4/5] bg-gray-100 flex-shrink-0">
                  <img src={item.imageFront} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <span className="text-xs text-gray-500 uppercase">{item.brand}</span>
                      <button onClick={() => onRemoveItem(item.id)} className="text-gray-400 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mt-1">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{SITE_TEXT.cart.size}: {item.size}</p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-gray-200">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-2 hover:bg-gray-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-medium w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-2 hover:bg-gray-50"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium uppercase tracking-wider">{SITE_TEXT.cart.subtotal}</span>
              <span className="text-lg font-bold font-serif">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-gray-500 mb-6 text-center">{SITE_TEXT.cart.shipping}</p>
            <button 
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-mensch-charcoal text-white py-4 uppercase tracking-widest text-xs font-medium hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCheckingOut ? 'Processando...' : SITE_TEXT.cart.checkout}
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default CartDrawer;
