import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Sparkles, Database, Layers, Search } from 'lucide-react';
import { RESEARCH_DOMAINS } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface ResearchLabRoomProps {
  onObjectClick?: (details: string) => void;
}

export const ResearchLabRoom: React.FC<ResearchLabRoomProps> = ({
  onObjectClick,
}) => {
  const [selectedTopic, setSelectedTopic] = useState(RESEARCH_DOMAINS[0].id);
  const currentTopic =
    RESEARCH_DOMAINS.find((t) => t.id === selectedTopic) || RESEARCH_DOMAINS[0];

  return (
    <div className="w-full space-y-8">
      {/* Hand-Drawn Room Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-[#78716C] uppercase tracking-widest">
                LOCATION 07 · AI & INTELLIGENCE LAB
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-[10px] font-mono font-bold text-[#1C1917]">
                RESEARCH INTERESTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1C1917]">
              The AI Research Observatory
            </h2>
            <p className="text-sm font-serif text-[#57534E] mt-1">
              Hand-drawn neural diagrams, vector flow schematics, and applied generative AI systems.
            </p>
          </div>
        </div>
      </div>

      {/* Sketched AI Research Desks & Diagrams */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Domain Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-mono uppercase text-[#78716C] font-bold block px-1">
            Research Disciplines:
          </span>
          {RESEARCH_DOMAINS.map((domain) => (
            <button
              key={domain.id}
              onClick={() => {
                sound.playClick();
                setSelectedTopic(domain.id);
              }}
              className={`w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                selectedTopic === domain.id
                  ? 'bg-[#1C1917] text-[#FAF6EE] border-[#1C1917] shadow-[4px_4px_0px_0px_#44403C]'
                  : 'bg-[#FAF6EE] hover:bg-[#EBE4D5] text-[#1C1917] border-[#292524] shadow-[2px_2px_0px_0px_#292524]'
              }`}
            >
              <h3 className="font-serif font-bold text-base">{domain.title}</h3>
              <p
                className={`text-xs mt-1 font-serif ${
                  selectedTopic === domain.id ? 'text-[#EBE4D5]' : 'text-[#57534E]'
                }`}
              >
                {domain.description}
              </p>
            </button>
          ))}
        </div>

        {/* Right: Hand-Drawn Neural Schema & Technical Detail Sheet (8 cols) */}
        <div className="lg:col-span-8">
          <motion.div
            key={currentTopic.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] space-y-6"
          >
            {/* Header */}
            <div className="border-b border-[#292524]/20 pb-4">
              <span className="text-[10px] font-mono text-[#854D0E] font-bold uppercase">
                RESEARCH DOSSIER
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#1C1917] mt-0.5">
                {currentTopic.title}
              </h3>
              <p className="text-sm font-serif text-[#57534E] mt-1">
                {currentTopic.description}
              </p>
            </div>

            {/* Hand-Drawn Vector Flow Diagram (SVG) */}
            <div className="p-4 rounded-2xl bg-[#EBE4D5]/60 border border-[#292524] space-y-3">
              <span className="text-[11px] font-mono uppercase text-[#78716C] font-bold block">
                System Schematic Blueprint
              </span>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#292524] text-center w-full sm:w-auto shadow-sm">
                  Document Store & Chunker
                </div>
                <span className="text-[#1C1917] font-bold">→</span>
                <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#292524] text-center w-full sm:w-auto shadow-sm">
                  Dense Vector Embeddings
                </div>
                <span className="text-[#1C1917] font-bold">→</span>
                <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#292524] text-center w-full sm:w-auto shadow-sm">
                  Gemini / LLM Synthesizer
                </div>
              </div>
            </div>

            {/* Core Research Focus Points */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#78716C] font-bold block">
                Core Investigation Areas:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentTopic.focusAreas.map((area, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3 rounded-xl bg-[#FAF6EE] border border-[#292524] text-xs font-serif text-[#1C1917] shadow-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#854D0E]" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
