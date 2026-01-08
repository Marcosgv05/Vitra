import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Category } from '../types';
import { SITE_TEXT } from '../constants';
import { ArrowRight } from 'lucide-react';

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 py-12 sm:py-24 bg-mensch-offwhite">
      {/* Título para mobile */}
      <div className="mb-6 sm:hidden">
        <h2 className="font-serif text-2xl italic">Categorias</h2>
      </div>

      {/* Grid para Desktop */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 h-[800px]">
        {categories.map((cat, index) => {
          // Determine grid placement based on 'size'
          let gridClass = '';
          if (cat.size === 'large') gridClass = 'col-span-2 row-span-2';
          else if (cat.size === 'tall') gridClass = 'col-span-1 row-span-2';
          else gridClass = 'col-span-1 row-span-1';

          return (
            <motion.div
              key={cat.id}
              className={`relative group overflow-hidden cursor-pointer ${gridClass}`}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={cat.link} className="block w-full h-full">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <h3 className="font-serif text-3xl md:text-4xl text-white italic transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {cat.title}
                  </h3>
                  <div className="h-[1px] w-0 bg-white mt-4 group-hover:w-full transition-all duration-700 delay-100" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                  <span className="px-6 py-3 border border-white text-white uppercase tracking-widest text-xs">{SITE_TEXT.products.explore}</span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Layout Mobile - Cards horizontais com scroll */}
      <div className="md:hidden space-y-3">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link 
              to={cat.link} 
              className="flex items-center gap-4 bg-white rounded-xl overflow-hidden shadow-sm active:scale-[0.98] transition-transform"
            >
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 pr-4">
                <h3 className="font-serif text-lg">{cat.title}</h3>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Ver produtos</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 mr-4" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Alternativa: Slider horizontal para mobile */}
      {/* 
      <div className="md:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 w-max pb-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-[70vw] flex-shrink-0"
            >
              <Link to={cat.link} className="block">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-serif text-2xl text-white italic">{cat.title}</h3>
                    <span className="text-xs text-white/70 uppercase tracking-wider">Ver produtos →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      */}
    </section>
  );
};

export default CategoryGrid;
