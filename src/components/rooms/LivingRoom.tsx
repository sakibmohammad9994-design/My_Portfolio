import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Laptop, Sparkles, MapPin, Coffee, Compass } from 'lucide-react';
import { PERSONAL_INFO, BIOGRAPHY } from '../../data/portfolioData';
import { RoomId } from '../../types';
import { sound } from '../../utils/sound';
import { AbdullahFullBodyPhoto } from '../entry/AbdullahFullBodyPhoto';

interface LivingRoomProps {
  onNavigateRoom: (roomId: RoomId) => void;
  onObjectClick?: (details: string) => void;
}

export const LivingRoom: React.FC<LivingRoomProps> = ({
  onNavigateRoom,
  onObjectClick,
}) => {
  return (
    <div className="w-full space-y-8 lg:space-y-10">
      {/* Hand-Drawn Room Header */}
      <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[5px_7px_0px_0px_#1C1917] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="text-xs sm:text-sm font-mono text-[#78716C] uppercase tracking-widest font-bold">
                LOCATION 01 · STUDY & LIVING QUARTERS
              </span>
              <span className="px-3 py-1 rounded-full bg-[#EBE4D5] border border-[#292524] text-xs font-mono font-bold text-[#1C1917]">
                ABOUT ME
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-[#1C1917] tracking-tight">
              The Developer's Study
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-serif text-[#57534E] mt-1.5">
              Personal introduction, background, and engineering philosophy.
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-xs sm:text-sm md:text-base font-mono text-[#57534E] bg-[#EBE4D5] px-4 py-2.5 rounded-xl border border-[#292524] shrink-0">
            <MapPin className="w-5 h-5 text-[#1C1917]" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>

      {/* Architect / Host Welcome Card */}
      <AbdullahFullBodyPhoto
        variant="study_host"
        onClick={() => {
          sound.playClick();
          onObjectClick?.(
            "Abdullah Al Sakib: Final-year CSE student at IIUC, passionate about full-stack architectures, real-time engines, and RAG systems."
          );
        }}
      />

      {/* Main Architectural Room Environment & Sketched Objects */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Sketched Personal Desk, Portrait & Key Objects (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Hand-Drawn Desk Illustration & Bio */}
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[5px_7px_0px_0px_#1C1917] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#292524]/20">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-[#1C1917]">
                Biography & Core Focus
              </h3>
              <span className="px-3 py-1 rounded-full bg-[#EBE4D5] border border-[#292524] text-xs font-mono font-bold text-[#854D0E]">
                DOSSIER
              </span>
            </div>

            {/* Sketched Bio Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg md:text-xl font-serif text-[#292524] leading-relaxed">
              <p>{BIOGRAPHY.summary}</p>
              <p>{BIOGRAPHY.academic}</p>
              <p className="text-sm sm:text-base md:text-lg font-mono text-[#57534E] bg-[#EBE4D5]/60 p-4 rounded-xl border border-[#78716C]/40 leading-normal">
                “{BIOGRAPHY.philosophy}”
              </p>
            </div>

            {/* Clickable Physical Room Objects */}
            <div className="pt-4 border-t border-[#292524]/20">
              <span className="text-xs sm:text-sm font-mono uppercase text-[#78716C] font-bold block mb-3">
                Interact with study objects:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => {
                    sound.playClick();
                    onObjectClick?.(
                      'Drafting Notebook: Abdullah documents full-stack system schemas, RAG embedding pipelines, and scalable database architectures.'
                    );
                  }}
                  className="p-3 sm:p-4 rounded-xl bg-[#EBE4D5] hover:bg-[#FAF6EE] border border-[#292524] text-xs sm:text-sm md:text-base font-mono text-[#1C1917] flex items-center gap-2.5 cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>Drafting Notes</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onObjectClick?.(
                      'Workstation Laptop: Running VS Code, Git, Node.js, and local AI model integration environments.'
                    );
                  }}
                  className="p-3 sm:p-4 rounded-xl bg-[#EBE4D5] hover:bg-[#FAF6EE] border border-[#292524] text-xs sm:text-sm md:text-base font-mono text-[#1C1917] flex items-center gap-2.5 cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  <Laptop className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>MacBook Pro</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onObjectClick?.(
                      'Warm Coffee Cup: Fueling late-night machine learning research and full-stack project sprints.'
                    );
                  }}
                  className="p-3 sm:p-4 rounded-xl bg-[#EBE4D5] hover:bg-[#FAF6EE] border border-[#292524] text-xs sm:text-sm md:text-base font-mono text-[#1C1917] flex items-center gap-2.5 cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  <Coffee className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>Coffee Mug</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quick Dossier & Doors to Next Rooms (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Engineering Pillars Sheet */}
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[5px_7px_0px_0px_#1C1917] space-y-5">
            <h4 className="text-xs sm:text-sm md:text-base font-mono text-[#1C1917] uppercase tracking-wider font-bold border-b border-[#292524]/20 pb-3">
              Engineering Disciplines
            </h4>
            <div className="space-y-4 font-serif">
              <div className="p-4 rounded-xl bg-[#EBE4D5]/60 border border-[#78716C]/40 space-y-1">
                <div className="font-bold text-base sm:text-lg md:text-xl text-[#1C1917]">Full-Stack Systems</div>
                <p className="text-xs sm:text-sm md:text-base text-[#57534E] font-mono">
                  Scalable React frontend & Node/Django backend integration.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#EBE4D5]/60 border border-[#78716C]/40 space-y-1">
                <div className="font-bold text-base sm:text-lg md:text-xl text-[#1C1917]">Applied Machine Learning</div>
                <p className="text-xs sm:text-sm md:text-base text-[#57534E] font-mono">
                  Semantic retrieval, RAG, and LLM integration workflows.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#EBE4D5]/60 border border-[#78716C]/40 space-y-1">
                <div className="font-bold text-base sm:text-lg md:text-xl text-[#1C1917]">Computer Science Core</div>
                <p className="text-xs sm:text-sm md:text-base text-[#57534E] font-mono">
                  Algorithms, data structures, and relational databases.
                </p>
              </div>
            </div>
          </div>

          {/* Doorway to Skills Studio */}
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#EBE4D5] border-2 border-[#1C1917] shadow-[5px_7px_0px_0px_#1C1917] flex flex-col items-start justify-between gap-5">
            <div>
              <span className="text-xs font-mono text-[#78716C] uppercase font-bold">
                Next Architectural Doorway
              </span>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-[#1C1917] mt-1">
                Enter Developer Tech Studio
              </h4>
              <p className="text-sm sm:text-base md:text-lg font-serif text-[#57534E] mt-1">
                Explore programming languages, frameworks, and AI toolsets.
              </p>
            </div>
            <button
              onClick={() => {
                sound.playClick();
                onNavigateRoom('tech_room');
              }}
              className="px-6 py-3.5 rounded-xl bg-[#1C1917] text-[#FAF6EE] hover:bg-[#292524] border-2 border-[#1C1917] shadow-[3px_3px_0px_0px_#44403C] text-xs sm:text-sm md:text-base font-mono font-bold cursor-pointer transition-transform hover:-translate-y-0.5 flex items-center gap-2.5"
            >
              <span>Walk into Tech Studio →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
