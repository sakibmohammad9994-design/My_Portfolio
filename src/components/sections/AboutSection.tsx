import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, GraduationCap, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">About Me</h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          A glimpse into my background, education, and the driving force behind my work.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Bio Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-8 md:col-span-2 flex flex-col justify-center"
        >
          <Sparkles className="w-8 h-8 text-white/40 mb-6" />
          <h3 className="text-xl font-semibold text-white mb-4">My Story</h3>
          <p className="text-zinc-400 leading-relaxed mb-6">
            {PERSONAL_INFO.shortBio}
          </p>
          <div className="flex items-center gap-4 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-white" />
              Full-Stack Dev
            </div>
            <div className="w-1 h-1 rounded-full bg-zinc-600"></div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-white" />
              AI Enthusiast
            </div>
          </div>
        </motion.div>

        {/* Image Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-2 aspect-square md:aspect-auto"
        >
          <img 
            src="/about-sakib.png" 
            alt="Sakib Outdoors" 
            className="w-full h-full object-cover rounded-xl grayscale-[10%] hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Education Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-8 md:col-span-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium text-lg">Computer Science & Engineering</h4>
              <p className="text-zinc-400 text-sm">International Islamic University Chittagong (IIUC)</p>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-white font-medium">8th Semester</div>
            <div className="text-zinc-500 text-sm">CGPA: 3.16</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
