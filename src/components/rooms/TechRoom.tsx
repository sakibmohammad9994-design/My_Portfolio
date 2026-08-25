import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Terminal, Database, Wrench, Sparkles, Cpu, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface TechRoomProps {
  onObjectClick?: (details: string) => void;
}

export const TechRoom: React.FC<TechRoomProps> = ({ onObjectClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <div className="w-full space-y-8">
      {/* Hand-Drawn Room Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[5px_7px_0px_0px_#1C1917] relative overflow-hidden space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono text-[#78716C] uppercase tracking-widest font-bold">
                LOCATION 02 · DEVELOPER STUDIO
              </span>
              <span className="px-3 py-1 rounded-full bg-[#EBE4D5] border border-[#292524] text-xs font-mono font-bold text-[#1C1917]">
                TECHNICAL ARSENAL
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#1C1917] tracking-tight">
              The Technology Workshop
            </h2>
            <p className="text-base sm:text-lg font-serif text-[#57534E] mt-1">
              Hand-drawn technical workbench comprising languages, frameworks, and AI workflows.
            </p>
          </div>
        </div>

        {/* Category Filter Pills (Full Width Responsive Wrap & Scroll) */}
        <div className="pt-4 border-t border-[#292524]/20 flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              sound.playClick();
              setSelectedCategory('all');
            }}
            className={`px-3.5 py-2 rounded-xl border-2 text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#1C1917] text-[#FAF6EE] border-[#1C1917] shadow-[2px_2px_0px_0px_#44403C]'
                : 'bg-[#EBE4D5] hover:bg-[#FAF6EE] text-[#1C1917] border-[#44403C]'
            }`}
          >
            All Desks
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.category}
              onClick={() => {
                sound.playClick();
                setSelectedCategory(cat.category);
              }}
              className={`px-3.5 py-2 rounded-xl border-2 text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer ${
                selectedCategory === cat.category
                  ? 'bg-[#1C1917] text-[#FAF6EE] border-[#1C1917] shadow-[2px_2px_0px_0px_#44403C]'
                  : 'bg-[#EBE4D5] hover:bg-[#FAF6EE] text-[#1C1917] border-[#44403C]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* Sketched Physical Workstations & Benches */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="p-6 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] space-y-4"
          >
            {/* Workstation Header */}
            <div className="flex items-center justify-between border-b border-[#292524]/20 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EBE4D5] border border-[#1C1917] flex items-center justify-center text-[#1C1917]">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-serif text-[#1C1917]">
                    {cat.category} Desk
                  </h3>
                  <p className="text-[11px] font-mono text-[#78716C] uppercase">
                    {cat.skills.length} Sketched Tools
                  </p>
                </div>
              </div>
            </div>

            {/* Sketched Skill Chips / Physical Objects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  onClick={() => {
                    sound.playClick();
                    onObjectClick?.(
                      `${skill.name}: Applied in full-stack architecture, algorithm design, and software implementation.`
                    );
                  }}
                  className="p-3 rounded-2xl bg-[#FAF6EE] hover:bg-[#EBE4D5] border border-[#292524] shadow-[2px_2px_0px_0px_#44403C] transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1C1917]" />
                    <span className="text-xs font-mono font-bold text-[#1C1917]">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#78716C] border border-[#78716C]/40 px-1.5 py-0.5 rounded bg-[#FAF6EE]">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
