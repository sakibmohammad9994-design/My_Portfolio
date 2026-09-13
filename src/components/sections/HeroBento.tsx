import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Terminal, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  FileCode2, 
  Code2, 
  GraduationCap, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { BentoCard } from '../ui/BentoCard';
import { PERSONAL_INFO, BIOGRAPHY, CURRENT_STATUS } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import confetti from 'canvas-confetti';

interface HeroBentoProps {
  onOpenContact: () => void;
  onOpenProjects: () => void;
}

export const HeroBento: React.FC<HeroBentoProps> = ({ onOpenContact, onOpenProjects }) => {
  const [copied, setCopied] = useState(false);
  const [terminalIndex, setTerminalIndex] = useState(0);

  const terminalCommands = [
    { cmd: 'sakib.currentRole', res: '"Full-Stack Developer & AI Enthusiast"' },
    { cmd: 'sakib.education', res: '"IIUC · B.Sc in CSE (8th Semester)"' },
    { cmd: 'sakib.focusAreas', res: '["React 19", "Node.js", "RAG", "Gemini API", "pgvector"]' },
    { cmd: 'sakib.status', res: '"🚀 Shipping Production Systems"' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalIndex((prev) => (prev + 1) % terminalCommands.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.emailPrimary);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#06b6d4', '#6366f1', '#10b981'],
    });
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="about" className="relative pt-24 sm:pt-28 pb-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glow Orbs */}
      <div className="glow-orb-cyan w-96 h-96 -top-20 -left-20" />
      <div className="glow-orb-violet w-[500px] h-[500px] top-40 -right-20" />

      {/* Main Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        
        {/* BENTO ITEM 1: Master Profile Card with High-Res Photo (7 Cols on Desktop) */}
        <BentoCard
          glowColor="cyan"
          className="md:col-span-7 flex flex-col justify-between min-h-[460px] sm:min-h-[500px]"
        >
          {/* Top Status Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Full-Stack & AI Roles</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Chittagong, Bangladesh</span>
            </div>
          </div>

          {/* Center Profile Presentation */}
          <div className="my-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* High-Res Photo with 3D Glassmorphic Border */}
            <div className="relative w-36 sm:w-44 aspect-3/4 rounded-2xl overflow-hidden border-2 border-white/20 shadow-[0_0_30px_rgba(6,182,212,0.25)] shrink-0 group">
              <img
                src="/abdullah.jpg"
                alt="Abdullah Al Sakib"
                className="w-full h-full object-cover object-[center_15%] filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent opacity-60" />
            </div>

            {/* Profile Intro & Title */}
            <div className="space-y-3 text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-mono font-bold">
                <Sparkles className="w-3 h-3" />
                <span>FULL-STACK & AI ARCHITECT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-serif">
                Abdullah Al Sakib
              </h1>

              <p className="text-sm sm:text-base text-slate-300 font-serif leading-relaxed">
                {BIOGRAPHY.summary}
              </p>

              <p className="text-xs sm:text-sm text-slate-400 font-mono">
                {BIOGRAPHY.academic}
              </p>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-medium text-slate-200 flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:border-cyan-500/40"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                <span>{copied ? 'Email Copied!' : PERSONAL_INFO.emailPrimary}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenProjects}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>View Flagship Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </BentoCard>

        {/* BENTO ITEM 2: Interactive Terminal Widget & Academic Credentials (5 Cols) */}
        <div className="md:col-span-5 flex flex-col gap-5">
          
          {/* Interactive Mini Terminal Card */}
          <BentoCard glowColor="violet" className="flex-1 min-h-[240px]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">bash ~ sakib-shell</span>
              </div>
              <Terminal className="w-4 h-4 text-purple-400" />
            </div>

            <div className="font-mono text-xs space-y-2.5 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-cyan-400">❯</span>
                <span className="text-slate-200">{terminalCommands[terminalIndex].cmd}</span>
              </div>
              <motion.div
                key={terminalIndex}
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-3 rounded-xl bg-black/40 border border-white/5 text-emerald-400 text-[11px] font-mono break-all leading-relaxed"
              >
                {terminalCommands[terminalIndex].res}
              </motion.div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Auto-cycling developer status</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            </div>
          </BentoCard>

          {/* Academic & University Distinction Card */}
          <BentoCard glowColor="indigo" className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-indigo-400 font-bold tracking-wider">
                  Undergraduate Academic Ledger
                </span>
                <h3 className="text-lg font-bold font-serif text-white mt-0.5">
                  {CURRENT_STATUS.university}
                </h3>
              </div>
              <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0" />
            </div>

            <div className="grid grid-cols-2 gap-2 my-3">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-[10px] font-mono text-slate-400">Program</div>
                <div className="text-xs font-mono font-bold text-white mt-0.5">B.Sc. in CSE</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-[10px] font-mono text-slate-400">Current Semester</div>
                <div className="text-xs font-mono font-bold text-cyan-400 mt-0.5">8th (Final)</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-[10px] font-mono text-slate-400">Cumulative GPA</div>
                <div className="text-xs font-mono font-bold text-emerald-400 mt-0.5">&gt; 3.00 (Solid)</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-[10px] font-mono text-slate-400">Board Distinction</div>
                <div className="text-xs font-mono font-bold text-amber-400 mt-0.5">HSC GPA 5.00 A+</div>
              </div>
            </div>

            <p className="text-[11px] font-serif text-slate-400 italic">
              “{BIOGRAPHY.philosophy}”
            </p>
          </BentoCard>
        </div>

      </div>
    </section>
  );
};
