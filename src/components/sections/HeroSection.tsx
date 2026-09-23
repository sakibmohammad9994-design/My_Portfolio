import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';

const HeroSection = () => {
  return (
    <section id="hero" className="w-full pt-6 px-6 max-w-[1400px] mx-auto min-h-screen flex flex-col relative z-10">
      <div className="hero-container flex-grow flex flex-col pt-32 pb-12 px-8 lg:px-16 mt-4 relative">
        
        {/* Abstract shapes inside hero */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/40 to-transparent pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow relative z-10">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start text-left"
          >
            <h2 className="text-white/90 text-xl font-medium mb-2">Hey, I'm a</h2>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] mb-8 drop-shadow-2xl">
              Full-Stack <br/>
              Developer
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
            </div>
          </motion.div>

          {/* Right Side Text & Image overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-full flex flex-col justify-center items-end"
          >
            <div className="max-w-xs text-right relative z-20 mb-8 lg:mb-0 lg:absolute lg:top-1/4 lg:-left-20 bg-black/20 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                Great code should feel invisible.
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                From scalable backends to intuitive interfaces, I build solutions that connect and perform.
              </p>
            </div>
            
            <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/5] mx-auto z-10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#c22900]/80 to-transparent rounded-full blur-3xl -z-10 mix-blend-overlay"></div>
              {/* Image using panjabi-hero.jpg */}
              <img 
                src="/panjabi-hero.jpg" 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-center rounded-[30px] drop-shadow-2xl grayscale-[20%] contrast-110"
                style={{
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
                }}
              />
            </div>
          </motion.div>

        </div>

        {/* Bottom Stats / Nav items inside hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20 relative z-10"
        >
          <div>
            <div className="text-[#ff9e66] text-xs font-bold mb-1">#01</div>
            <div className="text-white text-sm font-medium">Frontend React</div>
          </div>
          <div>
            <div className="text-[#ff9e66] text-xs font-bold mb-1">#02</div>
            <div className="text-white text-sm font-medium">Backend Systems</div>
          </div>
          <div>
            <div className="text-[#ff9e66] text-xs font-bold mb-1">#03</div>
            <div className="text-white text-sm font-medium">AI & RAG Integrations</div>
          </div>
          <div>
            <div className="text-[#ff9e66] text-xs font-bold mb-1">#04</div>
            <div className="text-white text-sm font-medium">Software Architecture</div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default HeroSection;
