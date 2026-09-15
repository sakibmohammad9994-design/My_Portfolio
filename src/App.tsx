import React, { useState, useEffect } from 'react';
import { CinematicPortraitHero } from './components/cinematic/CinematicPortraitHero';
import { CinematicSectionNav } from './components/cinematic/CinematicSectionNav';
import { CinematicAboutSection } from './components/cinematic/CinematicAboutSection';
import { CinematicProjectsSection } from './components/cinematic/CinematicProjectsSection';
import { CinematicTimelineSection } from './components/cinematic/CinematicTimelineSection';
import { CinematicSkillsSection } from './components/cinematic/CinematicSkillsSection';
import { CinematicAIResearchSection } from './components/cinematic/CinematicAIResearchSection';
import { CinematicContactSection } from './components/cinematic/CinematicContactSection';
import { CommandPalette } from './components/CommandPalette';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './types';
import { sound } from './utils/sound';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleUserInteraction = () => {
    sound.init();
  };

  // Scroll spy to highlight active chapter
  useEffect(() => {
    const sections = ['hero', 'about', 'works', 'journey', 'skills', 'ailab', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    sound.playClick();
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      onClick={handleUserInteraction}
      className="relative min-h-screen bg-[#050508] text-slate-100 overflow-x-hidden selection:bg-[#d4af37]/30 selection:text-white"
    >
      {/* Top Luxury Navigation & Chapter Drawer */}
      <CinematicSectionNav
        activeSection={activeSection}
        onSelectSection={scrollToSection}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Single-Page Cinematic Flow */}
      <main className="relative z-10 space-y-0">
        <div id="hero">
          <CinematicPortraitHero
            onExploreClick={() => scrollToSection('about')}
          />
        </div>

        <CinematicAboutSection
          onSelectSection={scrollToSection}
        />

        <CinematicProjectsSection
          onSelectProject={(p) => setSelectedProject(p)}
        />

        <CinematicTimelineSection />

        <CinematicSkillsSection />

        <CinematicAIResearchSection />

        <CinematicContactSection />
      </main>

      {/* Luxury Minimalist Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#050508] py-12 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span className="text-[#d4af37] font-bold tracking-widest uppercase">
              {PERSONAL_INFO.name}
            </span>
            <span>•</span>
            <span>Full-Stack Developer & AI Enthusiast</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('works')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('hero')}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-[#d4af37] transition-colors cursor-pointer flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

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
