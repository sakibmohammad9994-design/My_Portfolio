import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const HeroSection = () => {
  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center pt-24 pb-12 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start text-left order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for Work
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gradient leading-[1.1] mb-6">
            Building digital <br/>
            experiences that <br/>
            matter.
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-md mb-8 leading-relaxed">
            I'm <span className="text-white font-medium">{PERSONAL_INFO.name}</span>, a {PERSONAL_INFO.role} combining React, Full-Stack development, and AI to craft modern solutions.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] max-w-md mx-auto order-1 lg:order-2"
        >
          {/* Subtle Glow Behind Image */}
          <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-75 transform -translate-y-4"></div>
          
          <div className="relative w-full h-full glass-card p-2 group">
            <div className="w-full h-full rounded-xl overflow-hidden bg-zinc-900 relative">
              <img 
                src="/hero-sakib.png" 
                alt="Abdullah Al Sakib" 
                className="w-full h-full object-cover object-top grayscale-[20%] contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs text-zinc-200">
                <MapPin className="w-3 h-3" />
                {PERSONAL_INFO.location}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
