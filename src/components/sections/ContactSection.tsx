import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-24 px-6 max-w-6xl mx-auto mb-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card relative overflow-hidden p-8 md:p-16 flex flex-col items-center text-center"
      >
        {/* Glow behind contact */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-zinc-700/20 blur-[100px] rounded-full pointer-events-none"></div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight relative z-10">
          Let's build something <br/> exceptional together.
        </h2>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 relative z-10">
          Whether you have a project in mind or just want to chat about AI and React, I'm always open to new opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
            <Mail className="w-5 h-5 mr-2" />
            Send me an email
          </a>
          <div className="flex gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-300 transition-all border border-white/10">
              <Github className="w-6 h-6" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-300 transition-all border border-white/10">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
