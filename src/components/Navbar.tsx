import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple scroll spy logic
      const sections = navLinks.map(link => link.href.substring(1));
      let current = 'Home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          const matchedLink = navLinks.find(l => l.href.substring(1) === section);
          if (matchedLink) current = matchedLink.name;
        }
      }
      setActiveTab(current);
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
        scrolled ? 'bg-black/80 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-2xl' : 'bg-transparent py-4'
      }`}>
        
        <div className="text-white font-bold text-xl tracking-tight z-20">
          Sakib<span className="text-[#ff5e00]">.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium relative z-20">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`relative px-4 py-2 transition-colors duration-300 ${
                activeTab === link.name ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {activeTab === link.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block z-20">
          <a href="#contact" className="btn-brand text-sm px-5 py-2 group">
            Get in touch
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer (Spring Physics) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="absolute top-20 left-4 right-4 bg-[#111] border border-white/10 p-6 rounded-3xl shadow-2xl md:hidden z-40 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`text-lg font-medium px-4 py-3 rounded-xl transition-colors ${
                  activeTab === link.name ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 btn-brand w-full justify-center"
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;
