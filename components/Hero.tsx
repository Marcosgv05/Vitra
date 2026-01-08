import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SITE_TEXT } from '../constants';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] bg-mensch-charcoal overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://picsum.photos/seed/streetwearHero/1920/1080?grayscale" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mensch-charcoal via-transparent to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-screen-2xl px-4 sm:px-6 flex flex-col items-center justify-center text-center h-full">
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mix-blend-overlay"
        >
          <h1 className="font-serif text-[15vw] sm:text-[10vw] md:text-[12vw] leading-[0.85] text-white opacity-90 tracking-tighter">
            {SITE_TEXT.hero.title1}
          </h1>
          <h1 className="font-serif text-[15vw] sm:text-[10vw] md:text-[12vw] leading-[0.85] text-white opacity-90 tracking-tighter italic">
            {SITE_TEXT.hero.title2}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 sm:mt-8 text-white/80 font-sans font-light tracking-widest text-xs sm:text-sm md:text-base uppercase px-4"
        >
          {SITE_TEXT.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 sm:mt-12"
        >
          <Link 
            to="/produtos"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-sans text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 ease-out overflow-hidden inline-flex items-center gap-2 sm:gap-3"
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              {SITE_TEXT.hero.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator - Desktop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="w-[1px] h-16 bg-white/20">
          <motion.div 
            className="w-full bg-white h-1/2"
            animate={{ y: [0, 32, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Scroll Indicator - Mobile */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 sm:hidden text-white/60 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Role para baixo</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
