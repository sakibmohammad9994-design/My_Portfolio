import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MapPin, ExternalLink, Mail, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO, BIOGRAPHY } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface SlideHeroProps {
  onNext: () => void;
  onOpenContact: () => void;
}

export const SlideHero: React.FC<SlideHeroProps> = ({ onNext, onOpenContact }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-28 pb-20 overflow-hidden">
      {/* 2026 Studio Lighting Glows */}
      <div className="studio-gold-glow w-[600px] h-[600px] -top-32 right-10" />
      <div className="studio-cyan-glow w-[500px] h-[500px] bottom-10 -left-20" />

      {/* Subtle Arc Background Geometric Guides */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75%" cy="50%" r="350" fill="none" stroke="#d4af37" strokeWidth="0.75" strokeDasharray="4 8" />
          <circle cx="75%" cy="50%" r="500" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2 12" />
        </svg>
      </div>

      {/* Main Split Screen */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto w-full my-auto">
        
        {/* Left Editorial Text Column (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-6 lg:pr-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#d4af37]" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#d4af37] font-semibold">
              HELLO, I'M
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-sans leading-none">
              Abdullah <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Al Sakib
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg font-mono tracking-[0.18em] uppercase text-slate-300 font-medium pt-2">
              Full-Stack Developer & AI Enthusiast
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[#d4af37] font-bold">BASED IN</span>
              <span>CHITTAGONG, BD •</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#d4af37] font-bold">CURRENT:</span>
              <span>IIUC 8TH SEMESTER CSE (&gt; 3.00 CGPA)</span>
            </div>
          </div>

          <p className="text-sm sm:text-base font-serif text-slate-300 max-w-xl leading-relaxed">
            {BIOGRAPHY.summary}
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                sound.playClick();
                onNext();
              }}
              className="px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#d4af37] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <span>Explore Chapter 02</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onOpenContact();
              }}
              className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
            >
              Dispatch Inquiries
            </button>
          </div>
        </motion.div>

        {/* Right Studio Portrait Column (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/25 via-cyan-500/10 to-transparent rounded-full blur-3xl scale-95 pointer-events-none" />

          <div className="relative w-72 sm:w-88 lg:w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.95)] group">
            <img
              src="/abdullah.jpg"
              alt="Abdullah Al Sakib"
              className="w-full h-full object-cover object-[center_15%] filter contrast-[1.05] brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040407] via-transparent to-transparent opacity-85 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040407]/40 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-slate-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ONLINE · AVAILABLE</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
