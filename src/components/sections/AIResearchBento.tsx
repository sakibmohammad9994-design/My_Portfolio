import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Sparkles, 
  Database, 
  Layers, 
  Search, 
  ArrowRight,
  Zap,
  Code2,
  Share2
} from 'lucide-react';
import { BentoCard } from '../ui/BentoCard';
import { RESEARCH_DOMAINS, RESEARCH_TOPICS } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

export const AIResearchBento: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(RESEARCH_TOPICS[0].id);
  const activeTopic =
    RESEARCH_TOPICS.find((t) => t.id === selectedTopicId) || RESEARCH_TOPICS[0];

  return (
    <section id="research" className="relative py-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glow */}
      <div className="glow-orb-indigo w-96 h-96 top-1/3 -left-20" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI LAB & RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Applied AI & Vector Intelligence
          </h2>
          <p className="text-sm sm:text-base font-serif text-slate-400 mt-1 max-w-2xl">
            Explorations in dynamic grounding with RAG, Google Gemini function calling, vector embeddings with pgvector, and offline-first state synchronization.
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* LEFT: INTERACTIVE TOPIC SELECTOR (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-mono uppercase text-purple-400 font-bold tracking-wider px-1 block">
            Research Disciplines
          </span>

          {RESEARCH_TOPICS.map((topic) => {
            const isSelected = selectedTopicId === topic.id;
            return (
              <BentoCard
                key={topic.id}
                glowColor={isSelected ? 'violet' : 'indigo'}
                onClick={() => {
                  sound.playClick();
                  setSelectedTopicId(topic.id);
                }}
                className={`p-4 sm:p-5 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-purple-500/50 bg-purple-500/10 shadow-[0_0_25px_rgba(139,92,246,0.2)]'
                    : 'hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white">
                    {topic.title}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-purple-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </div>
                <p className="text-[11px] font-mono text-purple-300/80 mt-1">
                  {topic.focus}
                </p>
              </BentoCard>
            );
          })}
        </div>

        {/* RIGHT: DEEP RESEARCH & ARCHITECTURE SCHEMATIC CARD (8 Cols) */}
        <BentoCard glowColor="violet" className="lg:col-span-8 flex flex-col justify-between space-y-6">
          <div>
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-4 gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold">
                  AI ARCHITECTURE SPEC
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-2">
                  {activeTopic.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-cyan-400 font-bold mt-0.5">
                  Focus: {activeTopic.focus}
                </p>
              </div>
              <Sparkles className="w-6 h-6 text-purple-400 shrink-0" />
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base font-serif text-slate-300 leading-relaxed">
              {activeTopic.description}
            </p>

            {/* Interactive Data Flow Schematic */}
            <div className="my-6 p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider block">
                Live Data Pipeline Topology:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-cyan-500/30 flex flex-col items-center text-center space-y-1 group hover:border-cyan-400 transition-colors">
                  <Database className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold text-white">1. Knowledge Extraction</span>
                  <span className="text-[10px] text-slate-400">PDFs / Crossref / Web</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-indigo-500/30 flex flex-col items-center text-center space-y-1 group hover:border-indigo-400 transition-colors">
                  <Share2 className="w-5 h-5 text-indigo-400" />
                  <span className="font-bold text-white">2. Vector Search</span>
                  <span className="text-[10px] text-slate-400">pgvector Embeddings</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-purple-500/30 flex flex-col items-center text-center space-y-1 group hover:border-purple-400 transition-colors">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="font-bold text-white">3. Gemini Synthesis</span>
                  <span className="text-[10px] text-slate-400">Google GenAI SDK</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 font-bold block">
                Investigated Technologies & Subsystems:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeTopic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Deterministic RAG & Agent Systems</span>
            <span className="text-purple-400 font-bold">Research Ongoing</span>
          </div>
        </BentoCard>

      </div>
    </section>
  );
};
