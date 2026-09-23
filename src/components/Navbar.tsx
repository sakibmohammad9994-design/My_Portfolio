import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'px-4' : 'px-8'
      }`}
    >
      <div className={`mx-auto max-w-6xl flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-black/60 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-2xl' : 'bg-transparent py-4'
      }`}>
        
        <div className="text-white font-bold text-xl tracking-tight">
          Sakib<span className="text-[#ff5e00]">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#hero" className="text-white hover:text-[#ff5e00] transition-colors">Home</a>
          <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a>
        </div>

        <div>
          <a href="#contact" className="btn-brand text-sm px-5 py-2 group">
            Get in touch
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
