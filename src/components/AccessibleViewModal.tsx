import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, ExternalLink, Mail, Phone, MapPin, Award, BookOpen, Laptop, Code2, Sparkles, Briefcase } from 'lucide-react';
import { PERSONAL_INFO, BIOGRAPHY, CURRENT_STATUS, SKILLS_DATA, FEATURED_PROJECTS, EDUCATION_DATA, ACHIEVEMENTS_DATA, EXPERIENCE_DATA, RESEARCH_TOPICS } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface AccessibleViewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibleViewModal: React.FC<AccessibleViewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#292524]/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-[#FAF6EE] border-4 border-[#1C1917] rounded-3xl p-6 sm:p-10 shadow-[10px_12px_0px_0px_#1C1917] max-h-[90vh] overflow-y-auto space-y-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b-2 border-[#1C1917] pb-5 sticky top-0 bg-[#FAF6EE] z-20 pt-1">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#EBE4D5] border-2 border-[#1C1917] text-[#1C1917]">
                <FileText className="w-6 h-6 text-[#854D0E]" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#854D0E] tracking-widest">
                  ACCESSIBLE FULL PORTFOLIO DOCUMENT
                </span>
                <h1 className="text-2xl sm:text-4xl font-bold font-serif text-[#1C1917]">
                  {PERSONAL_INFO.name}
                </h1>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2.5 rounded-xl bg-[#EBE4D5] hover:bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[2px_2px_0px_0px_#1C1917] text-[#1C1917] cursor-pointer"
              title="Close Accessible View"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Section 1: Executive Summary */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#292524]/20 pb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-xs font-mono font-bold text-[#1C1917]">
                SECTION 01
              </span>
              <h2 className="text-2xl font-bold font-serif text-[#1C1917]">About & Identity</h2>
            </div>
            <div className="p-6 rounded-2xl bg-[#EBE4D5]/40 border border-[#292524] space-y-3 font-serif text-base text-[#1C1917] leading-relaxed">
              <p className="font-bold text-lg">{PERSONAL_INFO.title}</p>
              <p>{BIOGRAPHY.summary}</p>
              <p>{BIOGRAPHY.academic}</p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#57534E]">
                <span>📍 {PERSONAL_INFO.location}</span>
                <span>🎓 {PERSONAL_INFO.university} ({PERSONAL_INFO.semester})</span>
                <span>📊 CGPA: {PERSONAL_INFO.cgpa}</span>
              </div>
            </div>
          </section>

          {/* Section 2: Technical Skills */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#292524]/20 pb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-xs font-mono font-bold text-[#1C1917]">
                SECTION 02
              </span>
              <h2 className="text-2xl font-bold font-serif text-[#1C1917]">Technical Stack & Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILLS_DATA.map((cat) => (
                <div key={cat.category} className="p-5 rounded-2xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[3px_3px_0px_0px_#1C1917] space-y-3">
                  <h3 className="font-serif font-bold text-lg text-[#1C1917]">{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="px-2.5 py-1 rounded-lg bg-[#EBE4D5] border border-[#292524] text-xs font-mono text-[#1C1917] font-bold">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Featured Production Systems */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#292524]/20 pb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-xs font-mono font-bold text-[#1C1917]">
                SECTION 03
              </span>
              <h2 className="text-2xl font-bold font-serif text-[#1C1917]">Featured Production Systems</h2>
            </div>
            <div className="space-y-4">
              {FEATURED_PROJECTS.map((p) => (
                <div key={p.id} className="p-6 rounded-2xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_4px_0px_0px_#1C1917] space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold font-serif text-[#1C1917]">{p.title}</h3>
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#854D0E] hover:underline">
                      <span>Launch Live System</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-sm font-mono text-[#854D0E] font-bold">{p.tagline}</p>
                  <p className="text-sm font-serif text-[#292524]">{p.description.join(' ')}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#EBE4D5] text-[11px] font-mono text-[#1C1917]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Education & Achievements */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#292524]/20 pb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-xs font-mono font-bold text-[#1C1917]">
                SECTION 04
              </span>
              <h2 className="text-2xl font-bold font-serif text-[#1C1917]">Education & Academic Distinction</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="p-4 rounded-xl bg-[#EBE4D5]/50 border border-[#292524] space-y-1">
                  <div className="flex justify-between font-bold text-sm font-serif text-[#1C1917]">
                    <span>{edu.exam}</span>
                    <span className="font-mono text-xs">{edu.grade}</span>
                  </div>
                  <p className="text-xs font-mono text-[#57534E]">{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Direct Communication */}
          <section className="space-y-4 border-t-2 border-[#1C1917] pt-6">
            <h2 className="text-2xl font-bold font-serif text-[#1C1917]">Contact Channels</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-mono">
              <div className="p-3 rounded-xl bg-[#EBE4D5] border border-[#292524]">
                <span className="text-xs text-[#78716C] uppercase block">Primary Email:</span>
                <span className="font-bold text-[#1C1917]">{PERSONAL_INFO.emailPrimary}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#EBE4D5] border border-[#292524]">
                <span className="text-xs text-[#78716C] uppercase block">Secondary Email:</span>
                <span className="font-bold text-[#1C1917]">{PERSONAL_INFO.emailSecondary}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#EBE4D5] border border-[#292524]">
                <span className="text-xs text-[#78716C] uppercase block">Phone / WhatsApp:</span>
                <span className="font-bold text-[#1C1917]">{PERSONAL_INFO.phone}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#EBE4D5] border border-[#292524]">
                <span className="text-xs text-[#78716C] uppercase block">Location:</span>
                <span className="font-bold text-[#1C1917]">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
