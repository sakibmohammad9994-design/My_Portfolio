import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Cpu, Layers, CheckCircle2, Code2 } from 'lucide-react';
import { Project } from '../types';
import { sound } from '../utils/sound';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#292524]/60 backdrop-blur-sm"
        />

        {/* The Architectural Blueprint Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl bg-[#FAF6EE] border-4 border-[#1C1917] rounded-3xl p-6 sm:p-8 shadow-[8px_10px_0px_0px_#1C1917] my-auto overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b-2 border-[#1C1917] gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-[10px] font-mono font-bold text-[#1C1917]">
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-[#78716C]">{project.type}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1C1917]">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#854D0E] font-mono font-bold mt-0.5">
                {project.tagline}
              </p>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-[#EBE4D5] hover:bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[2px_2px_0px_0px_#1C1917] text-[#1C1917] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="mt-6 space-y-6 max-h-[65vh] overflow-y-auto pr-1">
            {/* Live Link Action Bar */}
            <div className="p-4 rounded-2xl bg-[#EBE4D5] border-2 border-[#1C1917] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono uppercase text-[#78716C] font-bold">
                  VERIFIED PRODUCTION DEPLOYMENT
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-[#1C1917]">
                  {project.liveUrl}
                </div>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1C1917] text-[#FAF6EE] hover:bg-[#292524] font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#44403C] transition-all cursor-pointer shrink-0"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Comprehensive Technical Description */}
            <div>
              <h3 className="text-sm font-mono text-[#1C1917] uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>Architecture & Engineering Overview</span>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm font-serif text-[#292524] leading-relaxed">
                {project.fullDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Architecture Pipeline / Flow */}
            {project.architectureDiagram && (
              <div className="p-4 rounded-2xl bg-[#EBE4D5]/60 border border-[#292524]">
                <h4 className="text-xs font-mono text-[#1C1917] font-bold uppercase mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>SYSTEM DATA FLOW & PIPELINE</span>
                </h4>
                <div className="flex flex-col sm:flex-row items-center gap-2 text-xs font-mono">
                  {project.architectureDiagram.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="w-full sm:w-auto px-3 py-2 rounded-xl bg-[#FAF6EE] border border-[#292524] text-[#1C1917] text-center shadow-sm">
                        {step}
                      </div>
                      {idx < project.architectureDiagram!.length - 1 && (
                        <div className="text-[#1C1917] hidden sm:block font-bold">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Key Technical Capabilities */}
            <div>
              <h3 className="text-sm font-mono text-[#1C1917] uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Key Technical Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-[#FAF6EE] border border-[#292524] text-xs font-serif text-[#1C1917] shadow-sm flex items-start gap-2"
                  >
                    <span className="text-[#854D0E] font-bold mt-0.5">•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div>
              <h3 className="text-sm font-mono text-[#1C1917] uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Integrated Technologies & Frameworks</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-[#EBE4D5] border border-[#292524] text-[#1C1917] font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t-2 border-[#1C1917] flex items-center justify-between text-xs font-mono text-[#78716C]">
            <span>Verified Production Deliverable</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#EBE4D5] hover:bg-[#FAF6EE] border border-[#292524] text-[#1C1917] font-bold cursor-pointer"
            >
              Close Inspection
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
