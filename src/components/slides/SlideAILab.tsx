import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Sparkles, Database, Layers, ArrowRight, Zap, Share2, Bot } from 'lucide-react';
import { RESEARCH_TOPICS } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface SlideAILabProps {
  onOpenAI: () => void;
}

export const SlideAILab: React.FC<SlideAILabProps> = ({ onOpenAI }) => {
  const [selectedTopicId, setSelectedTopicId] = useState(RESEARCH_TOPICS[0].id);
  const activeTopic =
    RESEARCH_TOPICS.find((t) => t.id === selectedTopicId) || RESEARCH_TOPICS[0];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-28 pb-20 overflow-hidden">
      {/* Studio Lighting */}
      <div className="studio-purple-glow w-[600px] h-[600px] top-1/4 -right-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#d4af37]" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#d4af37] font-bold">
                05 AI LAB
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white uppercase">
              RAG & VECTOR RESEARCH <span className="text-[#d4af37]">/</span>
            </h2>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onOpenAI();
            }}
            className="px-5 py-2.5 rounded-full bg-[#d4af37] hover:bg-white text-black font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer hover:scale-105"
          >
            <Bot className="w-4 h-4" />
            <span>Launch Live AI Assistant</span>
          </button>
        </div>

        {/* Deep Research Visualizer Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Research Topics (4 Cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            {RESEARCH_TOPICS.map((t) => {
              const isSelected = selectedTopicId === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedTopicId(t.id);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#d4af37]/15 border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] text-white'
                      : 'bg-[#0a0a12]/80 border-white/10 hover:border-white/20 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-mono font-bold">
                      {t.title}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 ${isSelected ? 'text-[#d4af37]' : 'text-slate-600'}`}
                    />
                  </div>
                  <p className="text-[11px] font-mono text-slate-500 mt-1">
                    {t.focus}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Pipeline Topology Schematic (8 Cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#0a0a12]/90 border border-white/15 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <span className="px-3 py-0.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono font-bold">
                    TOPOLOGY ARCHITECTURE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mt-2">
                    {activeTopic.title}
                  </h3>
                  <p className="text-xs font-mono text-[#d4af37] mt-0.5">
                    {activeTopic.focus}
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-[#d4af37]" />
              </div>

              <p className="text-xs sm:text-sm font-serif text-slate-300 leading-relaxed">
                {activeTopic.description}
              </p>

              {/* Data Pipeline Diagram */}
              <div className="my-5 p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                  3-Stage Continuous Grounding Topology:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                    <Database className="w-4 h-4 text-[#d4af37] mx-auto mb-1" />
                    <span className="font-bold text-white block">Ingestion</span>
                    <span className="text-[10px] text-slate-400">PDFs / Crossref API</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                    <Share2 className="w-4 h-4 text-[#d4af37] mx-auto mb-1" />
                    <span className="font-bold text-white block">Vector Index</span>
                    <span className="text-[10px] text-slate-400">pgvector Storage</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                    <Zap className="w-4 h-4 text-[#d4af37] mx-auto mb-1" />
                    <span className="font-bold text-white block">GenAI Synthesis</span>
                    <span className="text-[10px] text-slate-400">Google Gemini API</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {activeTopic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Applied LLM & Vector Retrieval</span>
              <span className="text-[#d4af37]">Active Research</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
