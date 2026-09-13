import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Layout, 
  Server, 
  Database, 
  Sparkles, 
  Wrench,
  Cpu,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { BentoCard } from '../ui/BentoCard';
import { SKILLS_DATA } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

export const SkillsBento: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Stacks' },
    ...SKILLS_DATA.map((c) => ({ id: c.category, label: c.category })),
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((c) => c.category === activeCategory);

  const categoryIcons: Record<string, any> = {
    'Programming Languages': Code2,
    'Frontend Engineering': Layout,
    'Backend & Systems': Server,
    'Databases & Vector Storage': Database,
    'AI / Machine Learning & RAG': Sparkles,
    'Development Tools & Workflow': Wrench,
  };

  return (
    <section id="skills" className="relative py-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-bold mb-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Skills & Architecture Matrix
          </h2>
          <p className="text-sm sm:text-base font-serif text-slate-400 mt-1 max-w-2xl">
            Core programming languages, distributed backend services, vector storage systems, and applied generative AI workflows.
          </p>
        </div>

        {/* Category Filter Pills (Wrap seamlessly across devices) */}
        <div className="flex flex-wrap items-center gap-2 bg-white/[0.02] p-1.5 rounded-2xl border border-white/5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sound.playClick();
                setActiveCategory(cat.id);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold shadow-[0_0_15px_rgba(99,102,241,0.35)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCategories.map((cat, idx) => {
          const Icon = categoryIcons[cat.category] || Code2;
          return (
            <BentoCard
              key={cat.category}
              glowColor={
                idx % 4 === 0
                  ? 'cyan'
                  : idx % 4 === 1
                  ? 'violet'
                  : idx % 4 === 2
                  ? 'emerald'
                  : 'indigo'
              }
              className="flex flex-col justify-between space-y-4 min-h-[300px]"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-serif text-white">
                        {cat.category}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400">
                        {cat.skills.length} Specialized Technologies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => {
                    const isSelected = selectedSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onClick={() => {
                          sound.playClick();
                          setSelectedSkill(isSelected ? null : skill.name);
                        }}
                        className={`p-3 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-500/20 border-indigo-400/50 shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                            : 'bg-white/[0.02] hover:bg-white/[0.06] border-white/5'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                skill.highlight ? 'bg-cyan-400' : 'bg-slate-500'
                              }`}
                            />
                            <span className="text-xs sm:text-sm font-mono font-bold text-slate-200">
                              {skill.name}
                            </span>
                          </div>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                              skill.highlight
                                ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold'
                                : 'bg-white/5 text-slate-400'
                            }`}
                          >
                            {skill.highlight ? 'Core Stack' : 'Proficient'}
                          </span>
                        </div>

                        {isSelected && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs font-serif text-slate-300 mt-2 pt-2 border-t border-white/10 leading-relaxed"
                          >
                            {skill.description}
                          </motion.p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                <span>Click any item for details</span>
                <span>•</span>
                <span>Verified Capability</span>
              </div>
            </BentoCard>
          );
        })}
      </div>
    </section>
  );
};
