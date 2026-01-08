import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { ProductProvider } from './context/ProductContext';
import { Product, CartItem } from './types';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1, size: 'M' }]; // Tamanho padrão M
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Router>
      <ScrollToTop />
      <ProductProvider>
        <div className="min-h-screen bg-mensch-offwhite font-sans text-mensch-charcoal selection:bg-mensch-charcoal selection:text-white">
          <Navbar 
            onOpenCart={() => setIsCartOpen(true)} 
            cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          />

          <AnimatePresence>
            {isCartOpen && (
              <CartDrawer 
                isOpen={isCartOpen} 
                onClose={() => setIsCartOpen(false)} 
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            )}
          </AnimatePresence>

          <main>
            <Routes>
              <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
              <Route path="/produtos" element={<ProductsPage onAddToCart={addToCart} />} />
              <Route path="/produto/:id" element={<ProductDetailPage onAddToCart={addToCart} />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/contato" element={<ContactPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ProductProvider>
    </Router>
  );
};

export default App;
