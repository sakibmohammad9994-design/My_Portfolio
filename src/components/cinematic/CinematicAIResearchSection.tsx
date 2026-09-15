import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Sparkles, Database, Layers, ArrowRight, Zap, Share2 } from 'lucide-react';
import { RESEARCH_TOPICS } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

export const CinematicAIResearchSection: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(RESEARCH_TOPICS[0].id);
  const activeTopic =
    RESEARCH_TOPICS.find((t) => t.id === selectedTopicId) || RESEARCH_TOPICS[0];

  return (
    <section id="ailab" className="relative min-h-screen w-full bg-[#050508] px-6 sm:px-12 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#d4af37]" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#d4af37] font-bold">
              05 AI LAB
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white uppercase">
            VECTOR INTELLIGENCE & RAG <span className="text-[#d4af37]">/</span>
          </h2>
          <p className="text-sm sm:text-base font-serif text-slate-400 max-w-2xl leading-relaxed">
            Applied research in RAG pipelines, Google Gemini function calling, vector embeddings with pgvector, and offline-first state synchronization.
          </p>
        </div>

        {/* Dual Column AI Lab Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: TOPIC SELECTOR (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase text-[#d4af37] font-bold tracking-wider px-1 block">
              RESEARCH DOMAINS
            </span>

            {RESEARCH_TOPICS.map((t) => {
              const isSelected = selectedTopicId === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedTopicId(t.id);
                  }}
                  className={`p-5 rounded-3xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#d4af37]/10 border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.15)]'
                      : 'bg-[#0a0a10]/80 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white">
                      {t.title}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-[#d4af37] translate-x-1' : 'text-slate-600'
                      }`}
                    />
                  </div>
                  <p className="text-[11px] font-mono text-slate-400 mt-1">
                    {t.focus}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT: DEEP SPECIFICATION CARD (8 Cols) */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#0a0a10]/90 border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono font-bold">
                    ACTIVE INVESTIGATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white mt-2">
                    {activeTopic.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#d4af37] mt-0.5">
                    {activeTopic.focus}
                  </p>
                </div>
                <Sparkles className="w-6 h-6 text-[#d4af37]" />
              </div>

              <p className="text-sm sm:text-base font-serif text-slate-300 leading-relaxed">
                {activeTopic.description}
              </p>

              {/* Data Pipeline Diagram */}
              <div className="my-6 p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider block">
                  Data Flow Topology:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col items-center text-center space-y-1">
                    <Database className="w-5 h-5 text-[#d4af37]" />
                    <span className="font-bold text-white">1. Knowledge Ingestion</span>
                    <span className="text-[10px] text-slate-400">PDFs / Crossref API</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col items-center text-center space-y-1">
                    <Share2 className="w-5 h-5 text-[#d4af37]" />
                    <span className="font-bold text-white">2. Vector Indexing</span>
                    <span className="text-[10px] text-slate-400">pgvector Embeddings</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col items-center text-center space-y-1">
                    <Zap className="w-5 h-5 text-[#d4af37]" />
                    <span className="font-bold text-white">3. Gemini Synthesis</span>
                    <span className="text-[10px] text-slate-400">Google GenAI SDK</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 font-bold block">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeTopic.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Applied AI & Systems Research</span>
              <span className="text-[#d4af37]">Active</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
