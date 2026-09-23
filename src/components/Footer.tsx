import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden bg-[#0a0a0a] pt-20 pb-8 mt-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Availability Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-5 py-2.5 mb-16"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]" />
          <span className="text-zinc-300 text-sm font-medium">Available for Q4 2026 Roles</span>
        </motion.div>

        {/* Monumental Sign-off Text */}
        <h2 className="text-[clamp(4rem,15vw,12rem)] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none text-center leading-[0.8] mb-12">
          SAKIB.
        </h2>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <div className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="#hero" className="text-zinc-500 hover:text-[#ff5e00] transition-colors">Back to top</a>
            <a href={(PERSONAL_INFO.socials.find(s => s.name === 'GitHub')?.url || '')} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">GitHub</a>
            <a href={(PERSONAL_INFO.socials.find(s => s.name.includes('LinkedIn'))?.url || '')} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[400px] bg-[#ff5e00]/10 blur-[120px] rounded-[100%] pointer-events-none -z-10"></div>
    </footer>
  );
};

export default Footer;
