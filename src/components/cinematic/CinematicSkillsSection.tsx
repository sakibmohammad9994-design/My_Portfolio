import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Layout, Server, Database, Sparkles, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

export const CinematicSkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categoryIcons: Record<string, any> = {
    'Programming Languages': Code2,
    'Frontend Engineering': Layout,
    'Backend & Systems': Server,
    'Databases & Vector Storage': Database,
    'AI / Machine Learning & RAG': Sparkles,
    'Development Tools & Workflow': Wrench,
  };

  const filtered =
    activeTab === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative min-h-screen w-full bg-[#050508] px-6 sm:px-12 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#d4af37]" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#d4af37] font-bold">
                04 SKILLS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white uppercase">
              TECHNICAL MATRIX <span className="text-[#d4af37]">/</span>
            </h2>
            <p className="text-sm sm:text-base font-serif text-slate-400 max-w-2xl leading-relaxed">
              Core computing languages, full-stack frameworks, database engines, and AI architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('all');
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#d4af37] text-black font-bold'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              All Categories
            </button>
            {SKILLS_DATA.map((c) => (
              <button
                key={c.category}
                onClick={() => {
                  sound.playClick();
                  setActiveTab(c.category);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeTab === c.category
                    ? 'bg-[#d4af37] text-black font-bold'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Code2;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#0a0a10]/90 border border-white/10 hover:border-[#d4af37]/30 space-y-4 transition-all"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="p-2 rounded-xl bg-white/5 text-[#d4af37]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-sans text-white">
                      {cat.category}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-500">
                      {cat.skills.length} Technologies
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            s.highlight ? 'bg-[#d4af37]' : 'bg-slate-500'
                          }`}
                        />
                        <span className="text-xs font-mono font-bold text-slate-200">
                          {s.name}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          s.highlight
                            ? 'bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 font-bold'
                            : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        {s.highlight ? 'Core' : 'Proficient'}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
