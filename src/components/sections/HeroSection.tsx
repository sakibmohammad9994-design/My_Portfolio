import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';

const customEase = [0.16, 1, 0.3, 1];

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" className="w-full min-h-screen flex flex-col relative z-10" ref={containerRef}>
      <div className="hero-container flex-grow flex flex-col pt-32 pb-12 px-6 lg:px-16 relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#ff5e00]/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="relative flex-grow flex items-center justify-center w-full max-w-[1400px] mx-auto min-h-[60vh] z-20">
          
          {/* Overlapping Parallax Image - AGGRESSIVE EDGE ERASER */}
          <motion.div 
            style={{ y: shouldReduceMotion ? 0 : yImage, opacity }}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: customEase }}
            className="absolute right-0 lg:-right-10 bottom-0 w-full md:w-[65%] lg:w-[60%] h-full z-10 flex items-end justify-end"
          >
            <img 
              src="/sakib-bw-suit.png" 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-[50%_20%] opacity-90 grayscale contrast-125 mix-blend-luminosity"
              style={{
                /* Extremely aggressive mask to guarantee NO straight edges are visible. 
                   Fades out completely well before hitting the borders of the image. */
                maskImage: 'radial-gradient(ellipse 70% 80% at 50% 45%, black 25%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 45%, black 25%, transparent 100%)'
              }}
            />
          </motion.div>

          {/* Typography */}
          <motion.div 
            style={{ y: shouldReduceMotion ? 0 : yText }}
            className="absolute left-0 lg:left-10 w-full lg:w-[65%] z-30 flex flex-col items-start pointer-events-none"
          >
            <div className="overflow-hidden mb-2">
              <motion.h2 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: customEase }}
                className="text-white/90 text-xl md:text-2xl font-semibold tracking-wide uppercase"
              >
                Hey, I'm {PERSONAL_INFO.name.split(' ')[0]}
              </motion.h2>
            </div>
            
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: customEase }}
                className="text-[clamp(3.5rem,8vw,8rem)] font-black tracking-tighter text-white leading-[0.85] drop-shadow-2xl"
              >
                FULL-STACK
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: customEase }}
                className="text-[clamp(3.5rem,8vw,8rem)] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30 leading-[0.9] drop-shadow-2xl"
              >
                DEVELOPER<span className="text-[#ff5e00]">.</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: customEase }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pointer-events-auto"
            >
              <a href="#projects" className="btn-primary shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
                View My Work
              </a>
              <div className="text-white/80 text-sm max-w-[200px] leading-snug font-medium">
                Designing invisible code & unforgettable experiences.
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: customEase }}
          className="mt-auto max-w-[1400px] mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10 relative z-30"
        >
          {[
            { id: '01', text: 'Frontend React' },
            { id: '02', text: 'Backend Systems' },
            { id: '03', text: 'AI & RAG Integrations' },
            { id: '04', text: 'Software Architecture' }
          ].map((stat, i) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + (i * 0.1), ease: customEase }}
            >
              <div className="text-[#ff5e00] text-xs font-black tracking-widest mb-1">#{stat.id}</div>
              <div className="text-white text-sm font-medium">{stat.text}</div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default HeroSection;
