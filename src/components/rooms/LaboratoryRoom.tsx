import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Sparkles, Layers, Cpu, Radio } from 'lucide-react';
import { FEATURED_PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { sound } from '../../utils/sound';

interface LaboratoryRoomProps {
  onSelectProject: (project: Project) => void;
  onObjectClick?: (details: string) => void;
}

export const LaboratoryRoom: React.FC<LaboratoryRoomProps> = ({
  onSelectProject,
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
                LOCATION 03 · DEVELOPMENT WORKSHOP
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-[10px] font-mono font-bold text-[#1C1917]">
                PROJECTS LAB
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1C1917]">
              The Production Workshop
            </h2>
            <p className="text-sm font-serif text-[#57534E] mt-1">
              Three major hand-drawn engineering workstations featuring verified production systems.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Sketched Physical Project Workbenches */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {FEATURED_PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              {/* Workstation Header */}
              <div className="flex items-center justify-between border-b border-[#292524]/20 pb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-[10px] font-mono font-bold text-[#1C1917]">
                  {project.badge}
                </span>
                <span className="text-[11px] font-mono text-[#78716C]">
                  {project.type}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-xl font-bold font-serif text-[#1C1917]">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#854D0E] mt-0.5 font-bold">
                  {project.tagline}
                </p>
              </div>

              {/* Description Sketch */}
              <p className="text-xs sm:text-sm font-serif text-[#292524] line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* Sketched Highlights */}
              <div className="space-y-1.5 pt-2">
                {project.highlights.slice(0, 2).map((hl, hIdx) => (
                  <div
                    key={hIdx}
                    className="text-xs font-serif text-[#57534E] flex items-start gap-1.5"
                  >
                    <span className="text-[#1C1917]">•</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md bg-[#EBE4D5] border border-[#78716C]/40 text-[10px] font-mono text-[#1C1917]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Workstation Action Triggers */}
            <div className="pt-4 border-t border-[#292524]/20 flex flex-col gap-2">
              <button
                onClick={() => {
                  sound.playClick();
                  onSelectProject(project);
                }}
                className="w-full py-2.5 rounded-xl bg-[#1C1917] text-[#FAF6EE] hover:bg-[#292524] border-2 border-[#1C1917] shadow-[2px_2px_0px_0px_#44403C] text-xs font-mono font-bold cursor-pointer transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Inspect System Blueprint</span>
              </button>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="w-full py-2 rounded-xl bg-[#EBE4D5] hover:bg-[#FAF6EE] border border-[#292524] text-xs font-mono text-[#1C1917] font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
