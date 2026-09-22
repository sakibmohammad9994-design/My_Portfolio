import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../../data/portfolioData';

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Core Skills</h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          The technologies and tools I use to bring ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS_DATA.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-white/10 pb-4">
              {skillGroup.category}
            </h3>
            <ul className="space-y-3 flex flex-wrap gap-2">
              {skillGroup.items.map(skill => (
                <li key={skill} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  {skill}
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
