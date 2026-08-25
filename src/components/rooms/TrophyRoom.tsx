import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, Star } from 'lucide-react';
import { ACHIEVEMENTS } from '../../data/portfolioData';
import { Certificate } from '../../types';
import { sound } from '../../utils/sound';

interface TrophyRoomProps {
  onSelectCertificate: (cert: Certificate) => void;
  onObjectClick?: (details: string) => void;
}

export const TrophyRoom: React.FC<TrophyRoomProps> = ({
  onSelectCertificate,
  onObjectClick,
}) => {
  return (
    <div className="w-full space-y-8">
      {/* Hand-Drawn Room Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-[#78716C] uppercase tracking-widest">
                LOCATION 05 · DISTINCTION GALLERY
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-[10px] font-mono font-bold text-[#1C1917]">
                ACHIEVEMENTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1C1917]">
              The Framed Gallery
            </h2>
            <p className="text-sm font-serif text-[#57534E] mt-1">
              Hand-drawn museum wall exhibiting academic milestones and competitive distinction.
            </p>
          </div>
        </div>
      </div>

      {/* Sketched Gallery Wall with Framed Milestone Certificates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((ach, idx) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.08 }}
            onClick={() => {
              sound.playClick();
              onObjectClick?.(
                `Gallery Piece: ${ach.title} (${ach.date}) - ${ach.description}`
              );
            }}
            className="p-6 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] hover:bg-[#EBE4D5] transition-all hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Frame Accent Header */}
              <div className="flex items-center justify-between border-b border-[#292524]/20 pb-2">
                <span className="text-[10px] font-mono uppercase text-[#78716C] font-bold">
                  {ach.category}
                </span>
                <span className="text-xs font-mono text-[#57534E]">{ach.date}</span>
              </div>

              {/* Title & Issuer */}
              <div>
                <h3 className="text-lg font-bold font-serif text-[#1C1917]">
                  {ach.title}
                </h3>
                <p className="text-xs font-mono text-[#854D0E] font-bold mt-0.5">
                  {ach.issuer}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs font-serif text-[#57534E] leading-relaxed">
                {ach.description}
              </p>
            </div>

            {/* Frame Ribbon / Footer */}
            <div className="pt-3 border-t border-[#292524]/20 flex items-center justify-between text-xs font-mono text-[#1C1917]">
              <span className="font-bold">Verified Academic Record</span>
              <Award className="w-4 h-4 text-[#854D0E]" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
