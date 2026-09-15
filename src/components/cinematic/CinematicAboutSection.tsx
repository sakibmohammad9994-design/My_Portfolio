import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, BIOGRAPHY, CURRENT_STATUS } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface CinematicAboutSectionProps {
  onSelectSection: (id: string) => void;
}

export const CinematicAboutSection: React.FC<CinematicAboutSectionProps> = ({ onSelectSection }) => {
  const chapters = [
    { id: 'about', num: '01', label: 'ABOUT', active: true },
    { id: 'works', num: '02', label: 'WORKS', active: false },
    { id: 'journey', num: '03', label: 'EXPERIENCE & EDUCATION', active: false },
    { id: 'skills', num: '04', label: 'SKILLS', active: false },
    { id: 'ailab', num: '05', label: 'AI RESEARCH', active: false },
    { id: 'contact', num: '06', label: 'CONTACT', active: false },
  ];

  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col justify-center bg-[#050508] px-6 sm:px-12 lg:px-16 py-24">
      {/* Background Soft Lighting Glow */}
      <div className="gold-glow-orb w-[650px] h-[650px] top-10 right-10" />

      {/* Main Grid matching reference image right frame */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-7xl mx-auto w-full my-auto">
        
        {/* LEFT COLUMN: Numbered Index & Bio Narrative (7 Cols) */}
        <div className="lg:col-span-7 space-y-8 lg:pr-6">
          
          {/* Vertical Chapter Index (Exact visual match from reference image) */}
          <div className="space-y-3">
            {chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  sound.playClick();
                  onSelectSection(ch.id);
                }}
                className={`flex items-center gap-3 text-xs font-mono tracking-[0.2em] transition-all cursor-pointer ${
                  ch.active
                    ? 'text-[#d4af37] font-bold'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {ch.active && <span className="w-6 h-[1.5px] bg-[#d4af37]" />}
                <span>{ch.num}</span>
                <span>{ch.label}</span>
              </button>
            ))}
          </div>

          {/* Section Heading */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <span className="text-xs font-mono text-[#d4af37] tracking-[0.25em] font-bold block">
              01
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white uppercase">
              ABOUT ME <span className="text-[#d4af37]">/</span>
            </h2>
          </div>

          {/* Bio Story Narrative */}
          <div className="space-y-4 text-sm sm:text-base font-serif text-slate-300 leading-relaxed max-w-xl">
            <p>
              {BIOGRAPHY.summary}
            </p>
            <p className="text-slate-400 font-sans text-xs sm:text-sm">
              {BIOGRAPHY.academic}
            </p>
          </div>

          {/* Verified Academic & Location Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
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

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#d4af37] font-bold">
                LOCATION & TIMEZONE
              </span>
              <div className="text-xs font-mono font-bold text-white">
                Kalamia Bazar, Chittagong
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Bangladesh (BST / UTC+6)
              </div>
            </div>
          </div>

          {/* Core Philosophy Quote */}
          <div className="p-4 rounded-2xl bg-black/40 border-l-2 border-[#d4af37] max-w-xl">
            <p className="text-xs sm:text-sm font-serif italic text-slate-300">
              “{BIOGRAPHY.philosophy}”
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Large Focal Portrait (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          {/* Ambient Lighting Behind Portrait */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/20 to-transparent rounded-full blur-3xl scale-95 pointer-events-none" />

          {/* Prominent High-Res Framed Image */}
          <div className="relative w-72 sm:w-88 lg:w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)]">
            <img
              src="/abdullah.jpg"
              alt="Abdullah Al Sakib"
              className="w-full h-full object-cover object-[center_15%] filter contrast-[1.05] brightness-[0.98]"
            />

            {/* Seamless Dark Edge Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-85 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/30 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Caption Overlay */}
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
    </section>
  );
};
