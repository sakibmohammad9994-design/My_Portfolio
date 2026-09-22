import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CinematicSectionNav } from './components/cinematic/CinematicSectionNav';
import { CinematicSlideController } from './components/cinematic/CinematicSlideController';
import { SlideHero } from './components/slides/SlideHero';
import { SlideAbout } from './components/slides/SlideAbout';
import { SlideProjects } from './components/slides/SlideProjects';
import { SlideSkills } from './components/slides/SlideSkills';
import { SlideAILab } from './components/slides/SlideAILab';
import { SlideContact } from './components/slides/SlideContact';
import { AskSakibAIModal } from './components/AskSakibAIModal';
import { CommandPalette } from './components/CommandPalette';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './types';
import { sound } from './utils/sound';

export function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const totalSlides = 6;
  const slideIds = ['hero', 'about', 'works', 'skills', 'ailab', 'contact'];

  const handleUserInteraction = () => {
    sound.init();
  };

  const nextSlide = () => {
    sound.playClick();
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    sound.playClick();
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    sound.playClick();
    setCurrentSlide(index);
  };

  const goToSlideById = (id: string) => {
    const idx = slideIds.indexOf(id);
    if (idx !== -1) {
      goToSlide(idx);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture when typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
        sound.playClick();
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
        sound.playClick();
      }
      // Number keys 1-6
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= totalSlides) {
        setCurrentSlide(num - 1);
        sound.playClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      onClick={handleUserInteraction}
      className="relative w-full min-h-screen bg-[#040407] text-slate-100 overflow-hidden select-none selection:bg-[#d4af37]/30 selection:text-white"
    >
      {/* Top Luxury Navigation Header */}
      <CinematicSectionNav
        activeSection={slideIds[currentSlide]}
        onSelectSection={goToSlideById}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Full-Screen Cinematic Slide Stage */}
      <div className="relative w-full min-h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -15 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="w-full min-h-screen"
          >
            {currentSlide === 0 && (
              <SlideHero
                onNext={nextSlide}
                onOpenContact={() => goToSlide(5)}
              />
            )}
            {currentSlide === 1 && (
              <SlideAbout
                onGoTo={goToSlide}
              />
            )}
            {currentSlide === 2 && (
              <SlideProjects
                onSelectProject={(p) => setSelectedProject(p)}
              />
            )}
            {currentSlide === 3 && (
              <SlideSkills />
            )}
            {currentSlide === 4 && (
              <SlideAILab
                onOpenAI={() => setIsAIOpen(true)}
              />
            )}
            {currentSlide === 5 && (
              <SlideContact />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Slide Navigation Controller */}
      <CinematicSlideController
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
        onGoTo={goToSlide}
        onOpenAI={() => setIsAIOpen(true)}
      />

      {/* Live "Ask Sakib AI" Assistant Modal */}
      <AskSakibAIModal
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* Spotlight Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* Project Blueprint Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
