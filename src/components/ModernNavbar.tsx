import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Layers, 
  Cpu, 
  GraduationCap, 
  Send, 
  Command, 
  Volume2, 
  VolumeX, 
  Sparkles,
  Menu,
  X,
  Code2
} from 'lucide-react';
import { sound } from '../utils/sound';

interface ModernNavbarProps {
  onOpenCommandPalette: () => void;
  activeSection: string;
}

export const ModernNavbar: React.FC<ModernNavbarProps> = ({
  onOpenCommandPalette,
  activeSection,
}) => {
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About', icon: Sparkles },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'experience', label: 'Journey', icon: GraduationCap },
    { id: 'research', label: 'AI Lab', icon: Cpu },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  const scrollToSection = (id: string) => {
    sound.playClick();
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
    setIsMobileMenuOpen(false);
  };

  const toggleAudio = () => {
    sound.playClick();
    const next = !isAudioMuted;
    setIsAudioMuted(next);
    sound.setMuted(next);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 py-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`pointer-events-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0b0b14]/80 backdrop-blur-2xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]'
              : 'bg-[#0f0f1c]/50 backdrop-blur-xl border-white/10'
          } max-w-5xl w-full`}
        >
          {/* Brand Logo & Name */}
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-500/40 p-0.5 bg-gradient-to-tr from-cyan-500 to-indigo-600 shadow-[0_0_12px_rgba(6,182,212,0.35)] group-hover:scale-105 transition-transform">
              <img
                src="/abdullah.jpg"
                alt="Sakib"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold font-mono tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Abdullah Al Sakib
              </span>
              <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Full-Stack & AI
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-white/20 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action Tools: Command Palette & Audio */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sound.playClick();
                onOpenCommandPalette();
              }}
              className="px-2.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-sm group"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] bg-black/40 border border-white/10 rounded text-slate-400 font-mono">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={toggleAudio}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white text-xs transition-colors cursor-pointer"
              title={isAudioMuted ? 'Unmute Sound' : 'Mute Sound'}
            >
              {isAudioMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-40 p-4 rounded-3xl glass-panel border border-white/15 md:hidden space-y-2"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-sm font-mono text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    {link.label}
                  </span>
                  <span className="text-xs text-slate-500">→</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
