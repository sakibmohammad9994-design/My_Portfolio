import React, { useState, useEffect } from 'react';
import { ThreeDBackground } from './components/ThreeDBackground';
import { ModernNavbar } from './components/ModernNavbar';
import { CommandPalette } from './components/CommandPalette';
import { HeroBento } from './components/sections/HeroBento';
import { ProjectsBento } from './components/sections/ProjectsBento';
import { SkillsBento } from './components/sections/SkillsBento';
import { ExperienceEducationBento } from './components/sections/ExperienceEducationBento';
import { AIResearchBento } from './components/sections/AIResearchBento';
import { ContactBento } from './components/sections/ContactBento';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './types';
import { sound } from './utils/sound';
import { Sparkles, ArrowUp, Heart, Github, Globe } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

export function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('about');

  // Audio initialization on first user click
  const handleUserInteraction = () => {
    sound.init();
  };

  // Scroll spy to highlight active section in floating navbar
  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'experience', 'research', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
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

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
  };

  return (
    <div
      onClick={handleUserInteraction}
      className="relative min-h-screen bg-[#07070a] text-slate-100 overflow-x-hidden selection:bg-indigo-500/30 selection:text-white"
    >
      {/* 3D WebGL Particle & Spatial Geometry Background */}
      <ThreeDBackground />

      {/* Floating Glassmorphic Top Navbar */}
      <ModernNavbar
        activeSection={activeSection}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Single-Page Bento Grid Flow */}
      <main className="relative z-10 space-y-12">
        <HeroBento
          onOpenContact={() => scrollToSection('contact')}
          onOpenProjects={() => scrollToSection('projects')}
        />

        <ProjectsBento
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <SkillsBento />

        <ExperienceEducationBento />

        <AIResearchBento />

        <ContactBento />
      </main>

      {/* Sleek Modern Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#07070a]/80 backdrop-blur-xl py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-cyan-500/40 p-0.5 bg-gradient-to-tr from-cyan-500 to-indigo-600">
              <img
                src="/abdullah.jpg"
                alt="Sakib"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <div>
              <span className="font-bold text-white block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-slate-500">
                Architected with React 19, Three.js & Tailwind CSS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              About
            </button>
            <span>•</span>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Projects
            </button>
            <span>•</span>
            <button
              onClick={() => scrollToSection('skills')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Skills
            </button>
            <span>•</span>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
              title="Scroll to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </footer>

      {/* Spotlight Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
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
