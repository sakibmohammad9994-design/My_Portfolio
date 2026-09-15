import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Menu, X, Command } from 'lucide-react';
import { sound } from '../../utils/sound';

interface CinematicSectionNavProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
  onOpenCommandPalette: () => void;
}

export const CinematicSectionNav: React.FC<CinematicSectionNavProps> = ({
  activeSection,
  onSelectSection,
  onOpenCommandPalette,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', number: '01', title: 'ABOUT ME' },
    { id: 'works', number: '02', title: 'WORKS' },
    { id: 'journey', number: '03', title: 'JOURNEY' },
    { id: 'skills', number: '04', title: 'SKILLS' },
    { id: 'ailab', number: '05', title: 'AI LAB' },
    { id: 'contact', number: '06', title: 'CONTACT' },
  ];

  const toggleSound = () => {
    sound.playClick();
    const next = !isMuted;
    setIsMuted(next);
    sound.setMuted(next);
  };

  return (
    <>
      {/* Top Luxury Fixed Header */}
      <header
        className={`fixed top-0 inset-x-0 z-50 px-6 sm:px-12 lg:px-16 py-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050508]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4'
            : 'bg-transparent'
        }`}
      >
        {/* Brand Name (Top Left) */}
        <button
          onClick={() => onSelectSection('hero')}
          className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase font-bold text-white hover:text-[#d4af37] transition-colors cursor-pointer text-left"
        >
          ABDULLAH AL SAKIB
        </button>

        {/* Right Menu Controls */}
        <div className="flex items-center gap-6">
          {/* Quick Command Search */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenCommandPalette();
            }}
            className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <Command className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="tracking-widest uppercase text-[11px]">SEARCH</span>
          </button>

          {/* Audio Toggle */}
          <button
            onClick={toggleSound}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#d4af37]" />
            )}
          </button>

          {/* Navigation Drawer Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="text-xs font-mono tracking-[0.2em] uppercase font-bold text-white hover:text-[#d4af37] transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
            {isMenuOpen ? (
              <X className="w-4 h-4 text-[#d4af37]" />
            ) : (
              <Menu className="w-4 h-4 text-[#d4af37]" />
            )}
          </button>
        </div>
      </header>

      {/* Fullscreen Luxury Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050508]/95 backdrop-blur-2xl flex flex-col justify-center px-8 sm:px-20 lg:px-32"
          >
            <div className="max-w-4xl w-full mx-auto space-y-6">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#d4af37] font-bold block mb-4">
                NAVIGATION CHAPTERS
              </span>

              <div className="space-y-4">
                {sections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => {
                        sound.playClick();
                        onSelectSection(sec.id);
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-between text-left py-2 group cursor-pointer border-b border-white/5 hover:border-[#d4af37]/30 transition-colors"
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-xs font-mono text-slate-500 group-hover:text-[#d4af37] transition-colors">
                          {sec.number}
                        </span>
                        <span
                          className={`text-2xl sm:text-4xl font-sans font-extrabold tracking-tight transition-all duration-300 ${
                            isActive
                              ? 'text-[#d4af37]'
                              : 'text-slate-300 group-hover:text-white group-hover:translate-x-3'
                          }`}
                        >
                          {sec.title}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-600 group-hover:text-[#d4af37] transition-colors">
                        →
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
