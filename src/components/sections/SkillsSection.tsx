import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../../data/portfolioData';
import { ArrowRight } from 'lucide-react';

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-24 px-6 max-w-6xl mx-auto">
      
      {/* Split Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-md"
        >
          <h3 className="text-[#ff5e00] font-bold text-sm tracking-wider uppercase mb-4">Services & Skills</h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            What I Can Help <br/> You With
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-sm flex flex-col items-start md:items-end text-left md:text-right"
        >
          <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
            From modern frontends to robust AI integrations, I offer tailored development to help your project grow with clarity and impact.
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

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS_DATA.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="service-card flex flex-col h-full"
          >
            <div className="text-[#ff5e00] text-sm font-semibold mb-6">
              {skillGroup.category}
            </div>
            <h3 className="text-xl font-bold text-white mb-6">
              {skillGroup.category.split(' ')[0]} <br/> 
              {skillGroup.category.split(' ').slice(1).join(' ')}
            </h3>
            
            <ul className="space-y-3 mt-auto">
              {skillGroup.skills.map(skill => (
                <li key={skill.name} className="text-zinc-400 text-sm flex items-start">
                  <span className="text-[#ff5e00] mr-2">•</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
