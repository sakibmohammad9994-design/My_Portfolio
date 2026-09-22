import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-white/5 bg-black/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a href="#hero" className="hover:text-white transition-colors">Back to top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
