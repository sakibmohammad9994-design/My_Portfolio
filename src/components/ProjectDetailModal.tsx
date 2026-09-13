import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Cpu, Layers, CheckCircle2, Code2, Sparkles } from 'lucide-react';
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* The Glassmorphic Blueprint Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl bg-[#0d0d18] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] my-auto overflow-hidden z-10 space-y-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">{project.type}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-cyan-300 font-mono font-medium mt-0.5">
                {project.tagline}
              </p>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="space-y-6 max-h-[65vh] overflow-y-auto pr-1">
            {/* Live Link Action Bar */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                  PRODUCTION URL
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-white break-all">
                  {project.liveUrl}
                </div>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer shrink-0"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Architecture Overview */}
            <div>
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Architecture & Engineering Overview</span>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm font-serif text-slate-300 leading-relaxed">
                {project.fullDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Architecture Pipeline / Flow */}
            {project.architectureDiagram && (
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>SYSTEM DATA FLOW & PIPELINE</span>
                </h4>
                <div className="flex flex-col sm:flex-row items-center gap-2 text-xs font-mono">
                  {project.architectureDiagram.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="w-full sm:w-auto px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 text-center shadow-sm">
                        {step}
                      </div>
                      {idx < project.architectureDiagram!.length - 1 && (
                        <div className="text-cyan-400 hidden sm:block font-bold">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Key Technical Capabilities */}
            <div>
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Key Technical Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-xs font-serif text-slate-300 shadow-sm flex items-start gap-2"
                  >
                    <span className="text-cyan-400 font-bold mt-0.5">•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div>
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-indigo-400" />
                <span>Integrated Technologies & Frameworks</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>Verified Production Deliverable</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-bold cursor-pointer transition-colors"
            >
              Close Inspection
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
