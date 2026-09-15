import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, MapPin, ExternalLink, Mail, Github, Linkedin, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface CinematicPortraitHeroProps {
  onExploreClick: () => void;
}

export const CinematicPortraitHero: React.FC<CinematicPortraitHeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#050508] px-6 sm:px-12 lg:px-16 pt-28 pb-10">
      {/* Ambient Lighting & Geometric HUD Overlays */}
      <div className="gold-glow-orb w-[600px] h-[600px] -top-32 right-10" />
      <div className="cyan-glow-orb w-[500px] h-[500px] bottom-10 -left-20" />

      {/* Subtle Arc / HUD Lines matching reference image */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75%" cy="50%" r="350" fill="none" stroke="#d4af37" strokeWidth="0.75" strokeDasharray="4 8" />
          <circle cx="75%" cy="50%" r="500" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2 12" />
          <line x1="10%" y1="65%" x2="90%" y2="65%" stroke="#ffffff" strokeWidth="0.3" strokeDasharray="1 10" />
        </svg>
      </div>

      {/* Main Split Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
        
        {/* LEFT COLUMN: Luxury Editorial Typography (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-6 lg:pr-8"
        >
          {/* Greeting Label */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#d4af37]" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#d4af37] font-semibold">
              HELLO, I'M
            </span>
          </div>

          {/* Master Name Heading */}
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

          {/* Location & University Tag */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
            <div className="flex items-center gap-1.5">
              <span className="text-[#d4af37] font-bold">BASED IN</span>
              <span>CHITTAGONG, BD •</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#d4af37] font-bold">CURRENT:</span>
              <span>IIUC 8TH SEMESTER CSE (&gt; 3.00 CGPA)</span>
            </div>
          </div>

          {/* Short Bio Description */}
          <p className="text-sm sm:text-base font-serif text-slate-300 max-w-xl leading-relaxed">
            Specializing in dynamic RAG architectures, Google Gemini API integrations, scalable full-stack web platforms, and offline-first Progressive Web Apps.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                sound.playClick();
                onExploreClick();
              }}
              className="px-6 py-3.5 rounded-full bg-white text-[#050508] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] cursor-pointer"
            >
              Explore Portfolio
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.emailPrimary}`}
              className="px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Cinematic Large Portrait with Soft Dark Fade (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          {/* Subtle Ambient Portrait Backlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/20 via-cyan-500/10 to-transparent rounded-full blur-3xl scale-90 pointer-events-none" />

          {/* Portrait Container */}
          <div className="relative w-72 sm:w-88 lg:w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] group">
            <img
              src="/abdullah.jpg"
              alt="Abdullah Al Sakib"
              className="w-full h-full object-cover object-[center_15%] filter contrast-[1.05] brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Seamless Vignette & Bottom Shadow Blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/40 via-transparent to-transparent pointer-events-none" />

            {/* Top Minimal Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ONLINE · AVAILABLE</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* BOTTOM FOOTER STRIP */}
      <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        {/* Scroll Indicator */}
        <button
          onClick={() => {
            sound.playClick();
            onExploreClick();
          }}
          className="flex items-center gap-2 text-slate-300 hover:text-[#d4af37] transition-colors cursor-pointer group"
        >
          <span className="tracking-[0.2em] uppercase font-bold text-[11px]">SCROLL DOWN</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-[#d4af37]" />
        </button>

        {/* Social Follow Strip */}
        <div className="flex items-center gap-5">
          <span className="text-[#d4af37] uppercase font-bold text-[11px] tracking-widest hidden sm:inline">
            FOLLOW ME
          </span>
          {PERSONAL_INFO.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="text-slate-400 hover:text-white uppercase text-[11px] tracking-wider transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
