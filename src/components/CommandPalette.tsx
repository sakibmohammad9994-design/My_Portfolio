import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  X, 
  ExternalLink, 
  Copy, 
  Check, 
  Code2, 
  Layers, 
  GraduationCap, 
  Mail, 
  FileText, 
  Sparkles,
  Github,
  Globe
} from 'lucide-react';
import { PERSONAL_INFO, FEATURED_PROJECTS, EDUCATION_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: any) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        if (isOpen) onClose();
        else sound.playClick();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyText = (text: string, key: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#6366f1', '#10b981'],
    });
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const scrollTo = (id: string) => {
    sound.playClick();
    onClose();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const filteredProjects = FEATURED_PROJECTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 pb-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#0f0f1c] border border-white/15 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden z-10 flex flex-col max-h-[80vh]"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/[0.02]">
            <Search className="w-5 h-5 text-cyan-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, skills, contact, or commands..."
              className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 font-mono outline-hidden"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results Stream */}
          <div className="overflow-y-auto p-4 space-y-4 divide-y divide-white/5">
            {/* Quick Navigation Jumps */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-bold px-2 block">
                Quick Navigation
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {[
                  { id: 'about', label: 'About & Bio', icon: Sparkles },
                  { id: 'projects', label: 'Flagship Projects', icon: Layers },
                  { id: 'skills', label: 'Technical Skills', icon: Code2 },
                  { id: 'experience', label: 'Timeline & History', icon: GraduationCap },
                  { id: 'research', label: 'AI & Research Lab', icon: Code2 },
                  { id: 'contact', label: 'Contact Terminal', icon: Mail },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] text-xs font-mono text-slate-300 hover:text-cyan-400 flex items-center gap-2 transition-all text-left"
                    >
                      <Icon className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Projects Matching Query */}
            <div className="pt-3 space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-bold px-2 block">
                Projects ({filteredProjects.length})
              </span>
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-3 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 flex items-center justify-between gap-3 group transition-all"
                >
                  <div className="truncate">
                    <div className="text-xs sm:text-sm font-bold text-white font-mono group-hover:text-cyan-400 transition-colors">
                      {p.title}
                    </div>
                    <div className="text-[11px] text-slate-400 font-serif truncate mt-0.5">
                      {p.tagline}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold flex items-center gap-1"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Actions */}
            <div className="pt-3 space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-bold px-2 block">
                Quick Contact & Copy
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={() => copyText(PERSONAL_INFO.emailPrimary, 'email1')}
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-300"
                >
                  <span className="truncate">{PERSONAL_INFO.emailPrimary}</span>
                  {copiedKey === 'email1' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  )}
                </button>
                <button
                  onClick={() => copyText(PERSONAL_INFO.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-300"
                >
                  <span>{PERSONAL_INFO.phone}</span>
                  {copiedKey === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Footer Shortcuts */}
          <div className="px-5 py-3 border-t border-white/10 bg-white/[0.01] flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Navigation Command Palette</span>
            <div className="flex items-center gap-3">
              <span>ESC to close</span>
              <span>•</span>
              <span>⌘K / Ctrl+K toggle</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
