import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Sparkles } from 'lucide-react';
import { RoomId } from '../types';
import { HOUSE_ROOMS } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface HouseMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentRoom: RoomId;
  onSelectRoom: (roomId: RoomId) => void;
}

export const HouseMapModal: React.FC<HouseMapModalProps> = ({
  isOpen,
  onClose,
  currentRoom,
  onSelectRoom,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#292524]/60 backdrop-blur-sm"
        />

        {/* The Architectural Drafting Map Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          className="relative w-full max-w-4xl bg-[#FAF6EE] border-4 border-[#1C1917] rounded-3xl p-6 sm:p-8 shadow-[8px_10px_0px_0px_#1C1917] my-auto overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b-2 border-[#1C1917] gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#78716C]">
                  ARCHITECTURAL SCHEMATIC · 1:100 SCALE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1C1917]">
                Estate Floorplan & Spatial Map
              </h2>
              <p className="text-xs font-mono text-[#57534E] mt-0.5">
                Click any sector to travel your camera directly to that room
              </p>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-[#EBE4D5] hover:bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[2px_2px_0px_0px_#1C1917] text-[#1C1917] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Hand-Drawn Blueprint Floorplan Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HOUSE_ROOMS.map((room) => {
              const isCurrent = currentRoom === room.id;
              const isSecret = room.id === 'secret_room';

              return (
                <motion.div
                  key={room.id}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    sound.playClick();
                    onSelectRoom(room.id);
                    onClose();
                  }}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between min-h-[140px] ${
                    isCurrent
                      ? 'bg-[#EBE4D5] border-[#1C1917] shadow-[4px_4px_0px_0px_#1C1917]'
                      : 'bg-[#FAF6EE] hover:bg-[#EBE4D5]/60 border-[#44403C] shadow-[2px_3px_0px_0px_#44403C]'
                  }`}
                >
                  {/* Top indicators */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-[#78716C] font-bold">
                      {isSecret ? '✦ HIDDEN SECTOR' : `SECTOR · ${room.theme}`}
                    </span>
                    {isCurrent && (
                      <span className="px-2 py-0.5 rounded-full bg-[#1C1917] text-[#FAF6EE] text-[10px] font-mono font-bold">
                        YOU ARE HERE
                      </span>
                    )}
                  </div>

                  {/* Room Name & Theme */}
                  <div className="my-2">
                    <h3 className="text-lg font-bold font-serif text-[#1C1917]">
                      {isSecret ? 'The Horizon (Secret Attic)' : room.name}
                    </h3>
                    <p className="text-xs font-serif text-[#57534E] line-clamp-2 mt-0.5">
                      {room.description}
                    </p>
                  </div>

                  {/* Room Floorplan Sketch Icon / Tag */}
                  <div className="pt-2 border-t border-[#44403C]/20 flex items-center justify-between text-[11px] font-mono text-[#78716C]">
                    <span>Enter Room →</span>
                    <span className="font-bold text-[#1C1917]">{room.theme}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-6 pt-4 border-t-2 border-[#1C1917] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#78716C] gap-2">
            <span>Spatial Exploration Active · Continuous Camera Pan</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1C1917]" />
              <span>9 Interconnected Architectural Spaces</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
