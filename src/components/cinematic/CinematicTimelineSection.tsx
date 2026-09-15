import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Award, GraduationCap, Building2 } from 'lucide-react';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../../data/portfolioData';

export const CinematicTimelineSection: React.FC = () => {
  return (
    <section id="journey" className="relative min-h-screen w-full bg-[#050508] px-6 sm:px-12 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#d4af37]" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#d4af37] font-bold">
              03 JOURNEY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white uppercase">
            EXPERIENCE & EDUCATION <span className="text-[#d4af37]">/</span>
          </h2>
          <p className="text-sm sm:text-base font-serif text-slate-400 max-w-2xl leading-relaxed">
            Verified engineering deliverables, undergraduate research collaborations, and continuous academic distinctions.
          </p>
        </div>

        {/* Experience & Education Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: WORK EXPERIENCE (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-white/10">
              <Briefcase className="w-4 h-4 text-[#d4af37]" />
              <h3 className="text-lg font-mono font-bold tracking-wider uppercase text-white">
                Engineering Experience
              </h3>
            </div>

            <div className="space-y-4">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div
                  key={exp.id}
                  className="p-6 rounded-3xl bg-[#0a0a10]/90 border border-white/10 space-y-4"
                >
                  <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
                    <div>
                      <span className="text-[10px] font-mono text-[#d4af37] uppercase font-bold tracking-wider">
                        {exp.type}
                      </span>
                      <h4 className="text-lg font-bold font-sans text-white mt-1">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-mono text-slate-400">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs sm:text-sm font-serif text-slate-300 leading-relaxed">
                    {exp.description.map((desc, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <span className="text-[#d4af37] font-mono mt-0.5">•</span>
                        <span>{desc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-[10px] font-mono text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CHRONOLOGICAL EDUCATION LEDGER (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-white/10">
              <Award className="w-4 h-4 text-[#d4af37]" />
              <h3 className="text-lg font-mono font-bold tracking-wider uppercase text-white">
                Academic Ledger & Honors
              </h3>
            </div>

            <div className="p-6 rounded-3xl bg-[#0a0a10]/90 border border-white/10 space-y-6">
              <div className="relative border-l border-white/15 ml-2 pl-6 space-y-6">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={edu.id} className="relative group">
                    <div
                      className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#050508] transition-all group-hover:scale-125 ${
                        edu.isCurrent ? 'bg-[#d4af37]' : 'bg-slate-500'
                      }`}
                    />

                    <div className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 space-y-1.5 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-base font-bold font-sans text-white group-hover:text-[#d4af37] transition-colors">
                          {edu.exam}
                        </h4>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono font-bold w-fit">
                          {edu.grade}
                        </span>
                      </div>

                      <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-slate-500" />
                        <span>{edu.institution}</span>
                      </div>

                      <p className="text-xs font-serif text-slate-400 mt-1">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
