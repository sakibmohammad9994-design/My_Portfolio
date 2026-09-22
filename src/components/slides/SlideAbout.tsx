import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, BIOGRAPHY, CURRENT_STATUS } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface SlideAboutProps {
  onGoTo: (slide: number) => void;
}

export const SlideAbout: React.FC<SlideAboutProps> = ({ onGoTo }) => {
  const chapters = [
    { num: '01', label: 'HERO OVERVIEW', slide: 0, active: false },
    { num: '02', label: 'ABOUT ME', slide: 1, active: true },
    { num: '03', label: 'WORKS', slide: 2, active: false },
    { num: '04', label: 'SKILLS', slide: 3, active: false },
    { num: '05', label: 'AI LAB', slide: 4, active: false },
    { num: '06', label: 'CONTACT', slide: 5, active: false },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-28 pb-20 overflow-hidden">
      {/* Studio Lighting Glow */}
      <div className="studio-gold-glow w-[600px] h-[600px] top-10 right-10" />

      {/* Main Grid matching reference right frame */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-7xl mx-auto w-full my-auto">
        
        {/* Left Column (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 lg:pr-6"
        >
          {/* Chapter Quick Index */}
          <div className="flex flex-wrap items-center gap-4">
            {chapters.map((ch) => (
              <button
                key={ch.num}
                onClick={() => {
                  sound.playClick();
                  onGoTo(ch.slide);
                }}
                className={`flex items-center gap-2 text-xs font-mono tracking-widest transition-all cursor-pointer ${
                  ch.active
                    ? 'text-[#d4af37] font-bold'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {ch.active && <span className="w-4 h-[1.5px] bg-[#d4af37]" />}
                <span>{ch.num}</span>
                <span>{ch.label}</span>
              </button>
            ))}
          </div>

          {/* Title */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <span className="text-xs font-mono text-[#d4af37] tracking-[0.25em] font-bold block">
              CHAPTER 02
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white uppercase">
              ABOUT SAKIB <span className="text-[#d4af37]">/</span>
            </h2>
          </div>

          {/* Narrative */}
          <div className="space-y-3 text-sm sm:text-base font-serif text-slate-300 leading-relaxed max-w-xl">
            <p>
              {BIOGRAPHY.summary}
            </p>
            <p className="text-xs sm:text-sm font-sans text-slate-400">
              {BIOGRAPHY.academic}
            </p>
          </div>

          {/* Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl pt-2">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#d4af37] font-bold">
                ACADEMIC STANDING
              </span>
              <div className="text-xs font-mono font-bold text-white">
                IIUC · 8th Semester CSE
              </div>
              <div className="text-[11px] font-mono text-emerald-400">
                CGPA Above 3.00
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#d4af37] font-bold">
                LOCATION & TIME
              </span>
              <div className="text-xs font-mono font-bold text-white">
                Kalamia Bazar, Chittagong
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Bangladesh (BST / UTC+6)
              </div>
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className="p-4 rounded-2xl bg-black/50 border-l-2 border-[#d4af37] max-w-xl">
            <p className="text-xs sm:text-sm font-serif italic text-slate-300">
              “{BIOGRAPHY.philosophy}”
            </p>
          </div>
        </motion.div>

        {/* Right Column: Prominent Portrait (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/20 to-transparent rounded-full blur-3xl scale-95 pointer-events-none" />

          <div className="relative w-72 sm:w-88 lg:w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)]">
            <img
              src="/abdullah.jpg"
              alt="Abdullah Al Sakib"
              className="w-full h-full object-cover object-[center_15%] filter contrast-[1.05] brightness-[0.98]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040407] via-transparent to-transparent opacity-85 pointer-events-none" />

            <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-xs font-mono text-white">
              <div>
                <span className="text-[10px] text-[#d4af37] uppercase font-bold block">
                  PORTFOLIO ARCHITECT
                </span>
                <span className="font-bold">Abdullah Al Sakib</span>
              </div>
              <span className="text-[11px] text-slate-400">IIUC CSE</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
