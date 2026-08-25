import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Award, Calendar } from 'lucide-react';
import { EDUCATION_TIMELINE, CURRENT_STATUS } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface LibraryRoomProps {
  onObjectClick?: (details: string) => void;
}

export const LibraryRoom: React.FC<LibraryRoomProps> = ({ onObjectClick }) => {
  return (
    <div className="w-full space-y-8">
      {/* Hand-Drawn Room Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-[#78716C] uppercase tracking-widest">
                LOCATION 04 · ACADEMIC ARCHIVES
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-[10px] font-mono font-bold text-[#1C1917]">
                EDUCATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1C1917]">
              The Scholar's Library
            </h2>
            <p className="text-sm font-serif text-[#57534E] mt-1">
              Illustrated academic ledger and chronological educational journey.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#EBE4D5] border border-[#292524] text-xs font-mono text-[#1C1917] shrink-0">
            <GraduationCap className="w-4 h-4" />
            <span>IIUC · 8th Semester CSE</span>
          </div>
        </div>
      </div>

      {/* Main Educational Shelf / Ledger & University Milestone */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Illustrated Academic Shelf (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] space-y-6">
            <h3 className="text-xl font-bold font-serif text-[#1C1917] border-b border-[#292524]/20 pb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Chronological Educational Bookshelf</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION_TIMELINE.map((item, idx) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  onClick={() => {
                    sound.playClick();
                    onObjectClick?.(
                      `${item.degree}: Completed with score/GPA ${item.score} at ${item.institution}.`
                    );
                  }}
                  className="p-4 rounded-2xl bg-[#FAF6EE] hover:bg-[#EBE4D5] border border-[#292524] shadow-[2px_2px_0px_0px_#44403C] transition-transform hover:-translate-y-0.5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold font-serif text-[#1C1917]">
                        {item.degree}
                      </span>
                      <span className="text-xs font-mono text-[#78716C]">
                        ({item.year})
                      </span>
                    </div>
                    <p className="text-xs font-serif text-[#57534E] mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-3 py-1 rounded-full bg-[#EBE4D5] border border-[#292524] text-xs font-mono font-bold text-[#1C1917]">
                      {item.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Current University Standing & Degree Ledger (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] space-y-4">
            <span className="text-[11px] font-mono text-[#78716C] uppercase font-bold">
              Current Academic Standing
            </span>
            <h4 className="text-2xl font-bold font-serif text-[#1C1917]">
              {CURRENT_STATUS.university}
            </h4>
            <div className="p-4 rounded-2xl bg-[#EBE4D5]/60 border border-[#78716C]/40 space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-[#57534E]">Department:</span>
                <span className="font-bold text-[#1C1917]">{CURRENT_STATUS.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#57534E]">Standing:</span>
                <span className="font-bold text-[#1C1917]">{CURRENT_STATUS.semester}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#57534E]">Cumulative GPA:</span>
                <span className="font-bold text-[#1C1917]">{CURRENT_STATUS.cgpa}</span>
              </div>
            </div>
            <p className="text-xs font-serif text-[#57534E] leading-relaxed">
              Engaged in advanced undergraduate research focusing on retrieval-augmented generation and distributed software engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
