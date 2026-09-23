import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowRight } from 'lucide-react';

const customEase = [0.16, 1, 0.3, 1];

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="w-full py-32 px-6 max-w-6xl mx-auto">
      
      {/* Split Header layout */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="max-w-md">
          <div className="overflow-hidden mb-4">
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase }}
              className="text-[#ff5e00] font-bold text-sm tracking-wider uppercase"
            >
              Behind the Code
            </motion.h3>
          </div>
          
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-white leading-[1.05]">
            <div className="overflow-hidden">
              <motion.div 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: customEase }}
              >
                Shaping
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.1, ease: customEase }}
              >
                Experiences That
              </motion.div>
            </div>
            <div className="overflow-hidden text-zinc-500">
              <motion.div 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: customEase }}
              >
                Make Life Simpler
              </motion.div>
            </div>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: customEase }}
          className="max-w-md flex flex-col items-start md:items-end text-left md:text-right"
        >
          <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
            I'm a full-stack developer focused on building clean, intuitive interfaces and robust backends that solve real-world problems.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-zinc-500 text-sm">Let's Build Something<br/>Meaningful Together</span>
            <a href="#contact" className="btn-brand px-5 py-2 text-sm group">
              Get in touch
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Grid of Images / Bio info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Photo Card (Tall) */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: customEase }}
          className="md:col-span-1 rounded-[32px] overflow-hidden aspect-[3/4] relative group"
        >
          <img 
            src="/sakib-outdoors-1.png" 
            alt="Sakib outdoors" 
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
        </motion.div>

        {/* Bio Text Card */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: customEase }}
          className="md:col-span-2 glass-card p-10 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            {PERSONAL_INFO.shortBio}
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
            <div>
              <div className="text-[#ff5e00] font-bold text-lg mb-1">Education</div>
              <div className="text-white">{PERSONAL_INFO.program}</div>
              <div className="text-zinc-500 text-sm">{PERSONAL_INFO.university}</div>
            </div>
            <div>
              <div className="text-[#ff5e00] font-bold text-lg mb-1">Status</div>
              <div className="text-white">{PERSONAL_INFO.semester}</div>
              <div className="text-zinc-500 text-sm">CGPA: {PERSONAL_INFO.cgpa}</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
