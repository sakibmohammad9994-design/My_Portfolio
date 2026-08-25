import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, Laptop } from 'lucide-react';
import { EXPERIENCE_RECORDS } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface OfficeRoomProps {
  onObjectClick?: (details: string) => void;
}

export const OfficeRoom: React.FC<OfficeRoomProps> = ({ onObjectClick }) => {
  return (
    <div className="w-full space-y-8">
      {/* Hand-Drawn Room Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-[#78716C] uppercase tracking-widest">
                LOCATION 06 · DEVELOPER WORKSPACE
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-[10px] font-mono font-bold text-[#1C1917]">
                EXPERIENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1C1917]">
              The Developer's Office
            </h2>
            <p className="text-sm font-serif text-[#57534E] mt-1">
              Professional collaborations, part-time engineering initiatives, and research assistantships.
            </p>
          </div>

          {/* Dossier Badge */}
          <div className="flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-[#EBE4D5] border border-[#292524] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#1C1917] overflow-hidden shrink-0">
              <img
                src="/abdullah.jpg"
                alt="Abdullah Al Sakib"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase text-[#78716C]">
                ENGINEER DOSSIER
              </div>
              <div className="text-xs font-serif font-bold text-[#1C1917]">
                Abdullah Al Sakib
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sketched Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPERIENCE_RECORDS.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => {
              sound.playClick();
              onObjectClick?.(
                `Office Ledger: ${exp.role} at ${exp.company} (${exp.period})`
              );
            }}
            className="p-6 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] space-y-4"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#292524]/20 pb-3 gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#78716C] font-bold">
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold font-serif text-[#1C1917]">
                  {exp.role}
                </h3>
                <p className="text-xs font-mono text-[#854D0E] font-bold">
                  {exp.company}
                </p>
              </div>

              <span className="px-2.5 py-1 rounded-xl bg-[#EBE4D5] border border-[#292524] text-[11px] font-mono text-[#1C1917] shrink-0">
                {exp.period}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm font-serif text-[#292524] leading-relaxed">
              {exp.description}
            </p>

            {/* Key Deliverables */}
            <div className="space-y-1.5 pt-2 border-t border-[#292524]/20">
              <span className="text-[10px] font-mono uppercase text-[#78716C] font-bold block">
                Deliverables & Contributions:
              </span>
              {exp.deliverables.map((del, dIdx) => (
                <div
                  key={dIdx}
                  className="text-xs font-serif text-[#57534E] flex items-start gap-1.5"
                >
                  <span className="text-[#1C1917]">•</span>
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
