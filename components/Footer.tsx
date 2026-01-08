import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_TEXT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mensch-charcoal text-white pt-20 pb-10 px-6">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="md:col-span-1">
          <h2 className="font-serif text-3xl font-bold mb-6">{SITE_TEXT.brand}</h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            {SITE_TEXT.footer.description}
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-lg italic mb-6">{SITE_TEXT.footer.shop.title}</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/produtos" className="hover:text-white transition-colors">{SITE_TEXT.footer.shop.newArrivals}</Link></li>
            <li><Link to="/produtos" className="hover:text-white transition-colors">{SITE_TEXT.footer.shop.bestSellers}</Link></li>
            <li><Link to="/produtos?categoria=acessorios" className="hover:text-white transition-colors">{SITE_TEXT.footer.shop.accessories}</Link></li>
            <li><Link to="/produtos" className="hover:text-white transition-colors">{SITE_TEXT.footer.shop.sale}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg italic mb-6">{SITE_TEXT.footer.support.title}</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">{SITE_TEXT.footer.support.shipping}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{SITE_TEXT.footer.support.sizeGuide}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{SITE_TEXT.footer.support.faq}</a></li>
            <li><Link to="/contato" className="hover:text-white transition-colors">{SITE_TEXT.footer.support.contact}</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="font-serif text-lg italic mb-6">{SITE_TEXT.footer.newsletter.title}</h4>
           <p className="text-xs text-gray-400 mb-4">{SITE_TEXT.footer.newsletter.description}</p>
           <form className="flex border-b border-white/20 pb-2">
             <input 
                type="email" 
                placeholder={SITE_TEXT.footer.newsletter.placeholder}
                className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-gray-600"
              />
              <button type="button" className="text-xs uppercase tracking-widest hover:text-gray-300">{SITE_TEXT.footer.newsletter.button}</button>
           </form>
        </div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
        <p>{SITE_TEXT.footer.copyright}</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">Instagram</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">TikTok</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
