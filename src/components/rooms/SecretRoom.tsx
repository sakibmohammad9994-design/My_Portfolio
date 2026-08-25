import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Star, Telescope } from 'lucide-react';
import { sound } from '../../utils/sound';

interface SecretRoomProps {
  onObjectClick?: (details: string) => void;
}

export const SecretRoom: React.FC<SecretRoomProps> = ({ onObjectClick }) => {
  return (
    <div className="w-full space-y-8">
      {/* Hand-Drawn Room Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-[#78716C] uppercase tracking-widest">
                LOCATION 08 · HIDDEN ATTIC OBSERVATORY
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-[10px] font-mono font-bold text-[#1C1917]">
                THE HORIZON
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1C1917]">
              Where I’m Going
            </h2>
            <p className="text-sm font-serif text-[#57534E] mt-1">
              A private glimpse into future engineering horizons, research ambitions, and lifelong technical goals.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#EBE4D5] border border-[#292524] text-xs font-mono text-[#1C1917] shrink-0">
            <Telescope className="w-4 h-4" />
            <span>Observatory Lookout</span>
          </div>
        </div>
      </div>

      {/* Sketched Future Ambitions & Goals Sheet */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => {
            sound.playClick();
            onObjectClick?.(
              'Autonomous Agents: Developing resilient multi-agent orchestration frameworks.'
            );
          }}
          className="p-6 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] space-y-3 cursor-pointer hover:bg-[#EBE4D5] transition-colors"
        >
          <span className="text-[10px] font-mono uppercase text-[#78716C] font-bold">
            Horizon 01
          </span>
          <h3 className="text-xl font-bold font-serif text-[#1C1917]">
            Autonomous Agent Networks
          </h3>
          <p className="text-xs sm:text-sm font-serif text-[#57534E] leading-relaxed">
            Building autonomous agentic workflows capable of collaborative reasoning, tool usage, and enterprise research execution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => {
            sound.playClick();
            onObjectClick?.(
              'High-Scale Backend: Designing low-latency distributed systems and database architectures.'
            );
          }}
          className="p-6 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] space-y-3 cursor-pointer hover:bg-[#EBE4D5] transition-colors"
        >
          <span className="text-[10px] font-mono uppercase text-[#78716C] font-bold">
            Horizon 02
          </span>
          <h3 className="text-xl font-bold font-serif text-[#1C1917]">
            Distributed Systems
          </h3>
          <p className="text-xs sm:text-sm font-serif text-[#57534E] leading-relaxed">
            Deepening expertise in distributed consensus, fault-tolerant microservices, and high-throughput real-time infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => {
            sound.playClick();
            onObjectClick?.(
              'Open-Source Craftsmanship: Publishing accessible developer tools and research codebases.'
            );
          }}
          className="p-6 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] space-y-3 cursor-pointer hover:bg-[#EBE4D5] transition-colors"
        >
          <span className="text-[10px] font-mono uppercase text-[#78716C] font-bold">
            Horizon 03
          </span>
          <h3 className="text-xl font-bold font-serif text-[#1C1917]">
            Open-Source Impact
          </h3>
          <p className="text-xs sm:text-sm font-serif text-[#57534E] leading-relaxed">
            Contributing to open-source developer toolkits, research datasets, and accessible machine learning educational resources.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
