import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, ChevronRight, Shirt, Watch, Sparkles, Wallet, Glasses, Footprints } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { SITE_TEXT } from '../constants';

interface NavbarProps {
  onOpenCart: () => void;
  cartItemCount: number;
}

const CATEGORIAS_MENU = [
  { id: 'vestuario', label: 'Vestuário', icon: Shirt, href: '/produtos?categoria=vestuario' },
  { id: 'calcados', label: 'Calçados', icon: Footprints, href: '/produtos?categoria=calcados' },
  { id: 'relogios', label: 'Relógios', icon: Watch, href: '/produtos?categoria=relogios' },
  { id: 'perfumes', label: 'Perfumes', icon: Sparkles, href: '/produtos?categoria=perfumes' },
  { id: 'carteiras', label: 'Carteiras', icon: Wallet, href: '/produtos?categoria=carteiras' },
  { id: 'oculos', label: 'Óculos', icon: Glasses, href: '/produtos?categoria=oculos' },
];

const Navbar: React.FC<NavbarProps> = ({ onOpenCart, cartItemCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  // Verifica se está na página inicial (onde tem o hero escuro)
  const isHomePage = location.pathname === '/';

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { href: '/sobre', label: SITE_TEXT.nav.about },
    { href: '/contato', label: SITE_TEXT.nav.contact },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-md border-black/5 text-mensch-charcoal shadow-sm' 
            : 'bg-transparent text-white'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Left: Menu Hamburger + Links */}
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Menu Hamburger com Categorias */}
            <button 
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
              onClick={() => setIsCategoryMenuOpen(true)}
              aria-label="Abrir menu de categorias"
            >
              <Menu className="w-6 h-6" />
              <span className="hidden sm:inline text-sm font-medium tracking-wide">MENU</span>
            </button>
            
            {/* Links Desktop - Sobre e Contato */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
              {navLinks.map(link => (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className={`hover:opacity-70 transition-opacity ${location.pathname === link.href ? 'border-b border-current pb-0.5' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Center: Logo */}
          <Link to="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-widest uppercase">{SITE_TEXT.brand}</h1>
          </Link>

          {/* Right: Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="hover:opacity-70 transition-opacity hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={onOpenCart}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">{SITE_TEXT.nav.cart} ({cartItemCount})</span>
              {cartItemCount > 0 && (
                <span className="sm:hidden absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu de Categorias (Slide from Left) */}
      <AnimatePresence>
        {isCategoryMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsCategoryMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-full sm:w-96 bg-white z-50 overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white">
                <span className="font-serif text-xl font-bold">{SITE_TEXT.brand}</span>
                <button 
                  onClick={() => setIsCategoryMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Categorias */}
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Categorias</p>
                <nav className="space-y-1">
                  {CATEGORIAS_MENU.map((cat) => {
                    const IconComponent = cat.icon;
                    return (
                      <Link
                        key={cat.id}
                        to={cat.href}
                        onClick={() => setIsCategoryMenuOpen(false)}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-mensch-charcoal group-hover:text-white transition-colors">
                            <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                          </div>
                          <span className="font-medium">{cat.label}</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-mensch-charcoal transition-colors" />
                      </Link>
                    );
                  })}
                </nav>

                {/* Ver Todos */}
                <Link
                  to="/produtos"
                  onClick={() => setIsCategoryMenuOpen(false)}
                  className="block mt-4 p-4 bg-mensch-charcoal text-white text-center rounded-lg font-medium hover:bg-black transition-colors"
                >
                  Ver Todos os Produtos
                </Link>
              </div>

              {/* Links Adicionais */}
              <div className="p-6 border-t border-gray-100">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Navegação</p>
                <nav className="space-y-3">
                  <Link 
                    to="/sobre"
                    onClick={() => setIsCategoryMenuOpen(false)}
                    className="block text-lg hover:text-gray-500 transition-colors"
                  >
                    Sobre Nós
                  </Link>
                  <Link 
                    to="/contato"
                    onClick={() => setIsCategoryMenuOpen(false)}
                    className="block text-lg hover:text-gray-500 transition-colors"
                  >
                    Contato
                  </Link>
                </nav>
              </div>

              {/* Info */}
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <p className="text-sm text-gray-500 leading-relaxed">
                  {SITE_TEXT.footer.description}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu (Legacy - mantido para compatibilidade) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-80 bg-white z-50 lg:hidden"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <span className="font-serif text-xl font-bold">{SITE_TEXT.brand}</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="p-6 space-y-6">
                {navLinks.map(link => (
                  <Link 
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-medium hover:text-gray-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
