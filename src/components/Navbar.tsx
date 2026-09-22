import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 w-full z-50 flex justify-center px-4"
    >
      <nav className="flex items-center gap-1 sm:gap-4 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl">
        <a href="#hero" className="text-white font-semibold text-lg mr-4 px-2 tracking-tight">
          Sakib
        </a>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="px-3 py-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </motion.header>
  );
};

export default Navbar;
