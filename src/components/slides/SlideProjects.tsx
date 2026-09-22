import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, Sparkles, Cpu, Gamepad2, CheckSquare, ArrowUpRight, Code2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface SlideProjectsProps {
  onSelectProject: (project: any) => void;
}

export const SlideProjects: React.FC<SlideProjectsProps> = ({ onSelectProject }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const currentProject = FEATURED_PROJECTS[activeProjectIndex] || FEATURED_PROJECTS[0];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-28 pb-20 overflow-hidden">
      {/* Studio Lighting */}
      <div className="studio-cyan-glow w-[600px] h-[600px] top-1/4 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto space-y-6">
        
        {/* Header & Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#d4af37]" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#d4af37] font-bold">
                03 WORKS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white uppercase">
              FLAGSHIP SYSTEMS <span className="text-[#d4af37]">/</span>
            </h2>
          </div>

          {/* Project Switcher Pills */}
          <div className="flex flex-wrap gap-2">
            {FEATURED_PROJECTS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  sound.playClick();
                  setActiveProjectIndex(idx);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeProjectIndex === idx
                    ? 'bg-[#d4af37] text-black font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                0{idx + 1} {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Project 3D Viewport Frame */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-10 rounded-3xl bg-[#0a0a12]/90 border border-white/15 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.95)] space-y-6"
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-3 py-0.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono font-bold">
                    {currentProject.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{currentProject.type}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-sans text-white">
                  {currentProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#d4af37] font-medium mt-0.5">
                  {currentProject.tagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    sound.playClick();
                    onSelectProject(currentProject);
                  }}
                  className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold transition-all cursor-pointer hover:border-[#d4af37]"
                >
                  Blueprint
                </button>

                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-[#d4af37] font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer hover:scale-105"
                >
                  <span>Launch Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Description & Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-3">
                <p className="text-sm sm:text-base font-serif text-slate-300 leading-relaxed">
                  {currentProject.fullDescription[0]}
                </p>
                <p className="text-xs sm:text-sm font-serif text-slate-400 leading-relaxed">
                  {currentProject.fullDescription[1]}
                </p>
              </div>

              <div className="lg:col-span-5 p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#d4af37] font-bold block">
                  Engineering Innovations:
                </span>
                {currentProject.highlights.map((hl, i) => (
                  <div key={i} className="text-xs font-serif text-slate-300 flex items-start gap-2">
                    <span className="text-[#d4af37] font-mono">•</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {currentProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};
