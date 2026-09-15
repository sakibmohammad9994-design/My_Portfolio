import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layers, Sparkles, Cpu, Gamepad2, CheckSquare, ArrowUpRight } from 'lucide-react';
import { FEATURED_PROJECTS } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface CinematicProjectsSectionProps {
  onSelectProject: (project: any) => void;
}

export const CinematicProjectsSection: React.FC<CinematicProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="works" className="relative min-h-screen w-full bg-[#050508] px-6 sm:px-12 lg:px-16 py-24">
      {/* Background Lighting */}
      <div className="cyan-glow-orb w-[600px] h-[600px] top-1/4 -right-20" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#d4af37]" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#d4af37] font-bold">
              02 WORKS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white uppercase">
            FLAGSHIP SYSTEMS <span className="text-[#d4af37]">/</span>
          </h2>
          <p className="text-sm sm:text-base font-serif text-slate-400 max-w-2xl leading-relaxed">
            Scalable full-stack platforms and AI-integrated systems built and deployed to production.
          </p>
        </div>

        {/* Project Showcase List */}
        <div className="space-y-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0a0a10]/80 border border-white/10 hover:border-[#d4af37]/40 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top Meta Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-[#d4af37] font-bold tracking-widest uppercase">
                      0{idx + 1} · {project.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">|</span>
                    <span className="text-xs font-mono text-slate-400">{project.type}</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold font-sans text-white tracking-tight group-hover:text-[#d4af37] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-slate-300 font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={() => {
                      sound.playClick();
                      onSelectProject(project);
                    }}
                    className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold transition-all cursor-pointer hover:border-[#d4af37]/50"
                  >
                    System Blueprint
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    className="px-6 py-2.5 rounded-full bg-white text-[#050508] hover:bg-[#d4af37] hover:text-black font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer"
                  >
                    <span>Launch Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Description & Technical Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-4">
                <div className="lg:col-span-7 space-y-3">
                  <p className="text-sm sm:text-base font-serif text-slate-300 leading-relaxed">
                    {project.fullDescription[0]}
                  </p>
                  <p className="text-xs sm:text-sm font-serif text-slate-400 leading-relaxed">
                    {project.fullDescription[1]}
                  </p>
                </div>

                <div className="lg:col-span-5 p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2.5">
                  <span className="text-[11px] font-mono uppercase text-[#d4af37] font-bold tracking-wider block">
                    Engineering Highlights:
                  </span>
                  {project.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="text-xs font-serif text-slate-300 flex items-start gap-2">
                      <span className="text-[#d4af37] font-mono mt-0.5">•</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-slate-300 text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
