import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, Bot } from 'lucide-react';
import { sound } from '../../utils/sound';

interface CinematicSlideControllerProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (slide: number) => void;
  onOpenAI: () => void;
}

export const CinematicSlideController: React.FC<CinematicSlideControllerProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onGoTo,
  onOpenAI,
}) => {
  const chapterNames = [
    '01 HERO',
    '02 ABOUT',
    '03 WORKS',
    '04 SKILLS',
    '05 AI LAB',
    '06 CONTACT',
  ];

  const currentLabel = chapterNames[currentSlide] || `0${currentSlide + 1} CHAPTER`;

  return (
    <aside className="fixed bottom-6 inset-x-6 sm:inset-x-12 z-40 max-w-5xl mx-auto flex items-center justify-between pointer-events-none">
      {/* Left: AI Assistant Quick Floating Trigger */}
      <button
        onClick={() => {
          sound.playClick();
          onOpenAI();
        }}
        className="pointer-events-auto px-4 py-2.5 rounded-full bg-[#0a0a12]/90 hover:bg-[#d4af37] text-white hover:text-black border border-[#d4af37]/40 shadow-[0_0_25px_rgba(212,175,55,0.25)] flex items-center gap-2 text-xs font-mono font-bold transition-all duration-300 cursor-pointer hover:scale-105"
      >
        <Bot className="w-4 h-4 text-[#d4af37] group-hover:text-black" />
        <span className="hidden sm:inline">Ask Sakib AI</span>
      </button>

      {/* Center: Slide Chapter Indicator & Progress Dots */}
      <div className="pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-full bg-[#0a0a12]/90 backdrop-blur-xl border border-white/15 shadow-2xl">
        {/* Previous Button */}
        <button
          onClick={() => {
            sound.playClick();
            onPrev();
          }}
          disabled={currentSlide === 0}
          className="p-1.5 rounded-full hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed text-slate-300 hover:text-white transition-colors cursor-pointer"
          title="Previous Page (←)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Chapter Title & Counter */}
        <div className="flex items-center gap-2 px-2 border-x border-white/10 text-xs font-mono">
          <span className="text-[#d4af37] font-bold">
            {currentLabel}
          </span>
          <span className="text-slate-500">
            ({currentSlide + 1}/{totalSlides})
          </span>
        </div>

        {/* Chapter Dots */}
        <div className="hidden md:flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                sound.playClick();
                onGoTo(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === idx
                  ? 'bg-[#d4af37] w-5'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => {
            sound.playClick();
            onNext();
          }}
          disabled={currentSlide === totalSlides - 1}
          className="p-1.5 rounded-full hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed text-slate-300 hover:text-white transition-colors cursor-pointer"
          title="Next Page (→)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right: Keyboard Shortcut Hint */}
      <div className="hidden lg:flex pointer-events-auto items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/10 text-[11px] font-mono text-slate-400">
        <span>Use Keys:</span>
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-bold">←</kbd>
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-bold">→</kbd>
      </div>
    </aside>
  );
};
