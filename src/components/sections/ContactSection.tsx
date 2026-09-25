import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const ContactSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="w-full pt-12 pb-6 px-6 max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="cta-container w-full min-h-[600px] flex flex-col items-center justify-center text-center p-8 md:p-16 relative mb-6"
      >
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}contact-sakib.jpg`} 
            alt="Sakib" 
            className="w-full h-full object-cover object-[50%_40%] opacity-40 grayscale-[50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h3 className="text-white/80 font-bold tracking-widest uppercase text-sm mb-6">Start Your Next Project</h3>
          
          <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-black text-white mb-8 tracking-tighter leading-tight drop-shadow-2xl">
            Let's Bring Your <br/> Ideas to Life
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-12 font-medium">
            Ready to build something amazing together? Whether you're starting fresh or evolving your stack, I'm here to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href={`mailto:${PERSONAL_INFO.emailPrimary}`} className="btn-primary text-lg px-8 py-4">
              <Mail className="w-5 h-5 mr-2" />
              Email Me Directly
            </a>
            <div className="flex gap-4">
              <a href={(PERSONAL_INFO.socials.find(s => s.name === 'GitHub')?.url || '')} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-black/60 text-white transition-all border border-white/20">
                <Github className="w-6 h-6" />
              </a>
              <a href={(PERSONAL_INFO.socials.find(s => s.name.includes('LinkedIn'))?.url || '')} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-black/60 text-white transition-all border border-white/20">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
