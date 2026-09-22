import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Layout, Server, Database, Sparkles, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

export const SlideSkills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(SKILLS_DATA[0].category);
  const currentCategory = SKILLS_DATA.find((s) => s.category === activeCategory) || SKILLS_DATA[0];

  const categoryIcons: Record<string, any> = {
    'Programming Languages': Code2,
    'Frontend Engineering': Layout,
    'Backend & Systems': Server,
    'Databases & Vector Storage': Database,
    'AI / Machine Learning & RAG': Sparkles,
    'Development Tools & Workflow': Wrench,
  };

  const Icon = categoryIcons[currentCategory.category] || Code2;

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-28 pb-20 overflow-hidden">
      {/* Studio Lighting */}
      <div className="studio-gold-glow w-[550px] h-[550px] -top-10 left-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto space-y-6">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#d4af37]" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#d4af37] font-bold">
              04 SKILLS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white uppercase">
            TECHNICAL MATRIX <span className="text-[#d4af37]">/</span>
          </h2>
        </div>

        {/* Dual Column Layout: Left Category Tabs, Right Skill Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Category Selector Tabs (4 Cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            {SKILLS_DATA.map((c) => {
              const CatIcon = categoryIcons[c.category] || Code2;
              const isSelected = activeCategory === c.category;
              return (
                <button
                  key={c.category}
                  onClick={() => {
                    sound.playClick();
                    setActiveCategory(c.category);
                  }}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#d4af37]/15 border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] text-white'
                      : 'bg-[#0a0a12]/80 border-white/10 hover:border-white/20 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CatIcon className={`w-4 h-4 ${isSelected ? 'text-[#d4af37]' : 'text-slate-500'}`} />
                    <span className="text-xs sm:text-sm font-mono font-bold">
                      {c.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {c.skills.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Category Deep Cards (8 Cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#0a0a12]/90 border border-white/15 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                <div className="p-2.5 rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-sans text-white">
                    {currentCategory.category}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    Production Proven Toolset & Engineering Depth
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentCategory.skills.map((s) => (
                  <div
                    key={s.name}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-bold text-white">
                        {s.name}
                      </span>
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
                    <p className="text-xs font-serif text-slate-400 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Architectural Verification Passed</span>
              <span className="text-[#d4af37]">Production Ready</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
