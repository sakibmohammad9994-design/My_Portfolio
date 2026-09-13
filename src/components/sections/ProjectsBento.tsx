import React from 'react';
import { motion } from 'motion/react';
import { 
  Layers, 
  ExternalLink, 
  Sparkles, 
  Cpu, 
  Activity, 
  Gamepad2, 
  CheckSquare, 
  ArrowUpRight,
  Database,
  Code2
} from 'lucide-react';
import { BentoCard } from '../ui/BentoCard';
import { FEATURED_PROJECTS } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface ProjectsBentoProps {
  onSelectProject: (project: any) => void;
}

export const ProjectsBento: React.FC<ProjectsBentoProps> = ({ onSelectProject }) => {
  const aethericProject = FEATURED_PROJECTS.find((p) => p.id === 'aetheric-intelligence') || FEATURED_PROJECTS[0];
  const esportsProject = FEATURED_PROJECTS.find((p) => p.id === 'aysha-tower-arena') || FEATURED_PROJECTS[1];
  const habitProject = FEATURED_PROJECTS.find((p) => p.id === 'personal-habit-tracker') || FEATURED_PROJECTS[2];

  return (
    <section id="projects" className="relative py-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>PRODUCTION DEPLOYMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Flagship Engineering Systems
          </h2>
          <p className="text-sm sm:text-base font-serif text-slate-400 mt-1 max-w-2xl">
            Real-world full-stack architectures engineered from research and ideation to live production deployment.
          </p>
        </div>

        <div className="text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-4 py-2 rounded-xl shrink-0">
          <span>3 Verified Systems Online</span>
        </div>
      </div>

      {/* Projects Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* PROJECT 1: AETHERIC INTELLIGENCE (Large Hero Bento Card - 12 Cols) */}
        <BentoCard
          glowColor="cyan"
          className="lg:col-span-12 p-6 sm:p-8 relative overflow-hidden"
        >
          {/* Subtle Background Circuit Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-white/10 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                  ★ {aethericProject.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {aethericProject.type}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-white">
                {aethericProject.title}
              </h3>
              <p className="text-sm sm:text-base font-mono text-cyan-300 mt-1 font-medium">
                {aethericProject.tagline}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  sound.playClick();
                  onSelectProject(aethericProject);
                }}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold transition-all cursor-pointer hover:border-cyan-500/40"
              >
                Inspect System Architecture
              </button>

              <a
                href={aethericProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Launch Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Description & Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-2">
            <div className="md:col-span-7 space-y-3">
              <p className="text-sm sm:text-base font-serif text-slate-300 leading-relaxed">
                {aethericProject.fullDescription[0]}
              </p>
              <p className="text-xs sm:text-sm font-serif text-slate-400 leading-relaxed">
                {aethericProject.fullDescription[1]}
              </p>
            </div>

            <div className="md:col-span-5 p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2.5">
              <span className="text-[11px] font-mono uppercase text-cyan-400 font-bold tracking-wider block">
                Key Technical Innovations:
              </span>
              {aethericProject.highlights.map((hl, i) => (
                <div key={i} className="text-xs font-serif text-slate-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
            {aethericProject.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono font-medium hover:border-cyan-500/40 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </BentoCard>

        {/* PROJECT 2: AYSHA TOWER ARENA (6 Cols) */}
        <BentoCard
          glowColor="violet"
          className="lg:col-span-6 flex flex-col justify-between min-h-[420px]"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold">
                {esportsProject.badge}
              </span>
              <Gamepad2 className="w-5 h-5 text-purple-400" />
            </div>

            <div>
              <h3 className="text-2xl font-bold font-serif text-white">
                {esportsProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-purple-300 mt-0.5 font-bold">
                {esportsProject.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm font-serif text-slate-300 leading-relaxed line-clamp-3">
              {esportsProject.fullDescription[0]}
            </p>

            <div className="space-y-1.5 p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[10px] font-mono uppercase text-purple-400 font-bold block">
                Highlights:
              </span>
              {esportsProject.highlights.slice(0, 2).map((hl, i) => (
                <div key={i} className="text-xs font-serif text-slate-300 flex items-start gap-1.5">
                  <span className="text-purple-400 font-mono">•</span>
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {esportsProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-4">
            <button
              onClick={() => {
                sound.playClick();
                onSelectProject(esportsProject);
              }}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold text-slate-300"
            >
              Blueprint
            </button>

            <a
              href={esportsProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
            >
              <span>Launch Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </BentoCard>

        {/* PROJECT 3: PERSONAL HABIT TRACKER (6 Cols) */}
        <BentoCard
          glowColor="emerald"
          className="lg:col-span-6 flex flex-col justify-between min-h-[420px]"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                {habitProject.badge}
              </span>
              <CheckSquare className="w-5 h-5 text-emerald-400" />
            </div>

            <div>
              <h3 className="text-2xl font-bold font-serif text-white">
                {habitProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-emerald-300 mt-0.5 font-bold">
                {habitProject.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm font-serif text-slate-300 leading-relaxed line-clamp-3">
              {habitProject.fullDescription[0]}
            </p>

            <div className="space-y-1.5 p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                Highlights:
              </span>
              {habitProject.highlights.slice(0, 2).map((hl, i) => (
                <div key={i} className="text-xs font-serif text-slate-300 flex items-start gap-1.5">
                  <span className="text-emerald-400 font-mono">•</span>
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {habitProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-4">
            <button
              onClick={() => {
                sound.playClick();
                onSelectProject(habitProject);
              }}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold text-slate-300"
            >
              Blueprint
            </button>

            <a
              href={habitProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
            >
              <span>Launch PWA</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </BentoCard>

      </div>
    </section>
  );
};
