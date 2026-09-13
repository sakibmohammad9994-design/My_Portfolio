import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  Sparkles,
  CheckCircle2,
  Building2,
  ExternalLink
} from 'lucide-react';
import { BentoCard } from '../ui/BentoCard';
import { EDUCATION_DATA, EXPERIENCE_DATA, ACHIEVEMENTS_DATA } from '../../data/portfolioData';

export const ExperienceEducationBento: React.FC = () => {
  return (
    <section id="experience" className="relative py-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>JOURNEY & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Experience & Academic Roots
          </h2>
          <p className="text-sm sm:text-base font-serif text-slate-400 mt-1 max-w-2xl">
            Verified engineering contributions, undergraduate research assistantships, and continuous academic excellence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT: VERIFIED WORK EXPERIENCE (6 Cols) */}
        <div className="lg:col-span-6 space-y-5">
          <div className="flex items-center gap-2 mb-2 px-1">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <h3 className="text-lg font-bold font-serif text-white">
              Engineering Experience & Roles
            </h3>
          </div>

          {EXPERIENCE_DATA.map((exp, idx) => (
            <BentoCard
              key={exp.id}
              glowColor={idx === 0 ? 'cyan' : idx === 1 ? 'violet' : 'indigo'}
              className="space-y-4"
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-3 gap-3">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold uppercase">
                    {exp.type}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold font-serif text-white mt-1.5">
                    {exp.role}
                  </h4>
                  <p className="text-xs font-mono text-slate-300 font-medium">
                    {exp.organization}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 shrink-0">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm font-serif text-slate-300 leading-relaxed">
                {exp.description.map((desc, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-mono mt-0.5">•</span>
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
            </BentoCard>
          ))}
        </div>

        {/* RIGHT: CHRONOLOGICAL EDUCATION & HONORS TIMELINE (6 Cols) */}
        <div className="lg:col-span-6 space-y-5">
          <div className="flex items-center gap-2 mb-2 px-1">
            <Award className="w-4 h-4 text-emerald-400" />
            <h3 className="text-lg font-bold font-serif text-white">
              Academic Education & Board Distinctions
            </h3>
          </div>

          <BentoCard glowColor="emerald" className="space-y-5">
            <div className="relative border-l border-white/15 ml-2 pl-6 space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={edu.id} className="relative group">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#09090d] transition-all group-hover:scale-125 ${
                      edu.isCurrent
                        ? 'bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]'
                        : 'bg-indigo-400'
                    }`}
                  />

                  <div className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 space-y-1.5 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-base font-bold font-serif text-white group-hover:text-emerald-300 transition-colors">
                        {edu.exam}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold w-fit">
                        {edu.grade}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-slate-300 flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.institution}</span>
                    </div>

                    <p className="text-xs font-serif text-slate-400 mt-1">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Honor Highlight */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-300 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Verified National & University Record</span>
              </span>
              <span>100% Authentic Credentials</span>
            </div>
          </BentoCard>
        </div>

      </div>
    </section>
  );
};
