import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Volume2, 
  VolumeX, 
  Home, 
  Eye, 
  EyeOff, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { RoomId } from '../types';
import { HOUSE_ROOMS } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface NavigationHUDProps {
  currentRoomId: RoomId;
  onNavigateRoom: (roomId: RoomId) => void;
  onOpenMap: () => void;
  onOpenAccessibleView: () => void;
  onReturnToArrival: () => void;
  activeObjectDetails: string | null;
  onClearObjectDetails: () => void;
}

export const NavigationHUD: React.FC<NavigationHUDProps> = ({
  currentRoomId,
  onNavigateRoom,
  onOpenMap,
  onOpenAccessibleView,
  onReturnToArrival,
  activeObjectDetails,
  onClearObjectDetails,
}) => {
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [showQuickNav, setShowQuickNav] = useState(false);

  // Standard rooms (Secret room hidden from standard quick nav)
  const standardRooms = HOUSE_ROOMS.filter((r) => r.id !== 'secret_room');
  const currentIndex = standardRooms.findIndex((r) => r.id === currentRoomId);
  const currentRoom = HOUSE_ROOMS.find((r) => r.id === currentRoomId) || HOUSE_ROOMS[0];

  const handlePrev = () => {
    sound.playClick();
    if (currentIndex > 0) {
      onNavigateRoom(standardRooms[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    sound.playClick();
    if (currentIndex >= 0 && currentIndex < standardRooms.length - 1) {
      onNavigateRoom(standardRooms[currentIndex + 1].id);
    }
  };

  const toggleAudio = () => {
    sound.playClick();
    const nextMute = !isAudioMuted;
    setIsAudioMuted(nextMute);
    sound.setMuted(nextMute);
  };

  return (
    <>
      {/* Top Floating Sketchbook Bar */}
      <nav className="fixed top-3 inset-x-3 sm:top-5 sm:inset-x-8 z-40 max-w-[96vw] 2xl:max-w-[1760px] mx-auto flex items-center justify-between pointer-events-none">
        {/* Left: Location Marker & Home */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => {
              sound.playClick();
              onReturnToArrival();
            }}
            className="p-2.5 rounded-xl bg-[#FAF6EE] hover:bg-[#EBE4D5] border-2 border-[#1C1917] shadow-[2px_2px_0px_0px_#1C1917] text-[#1C1917] transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            title="Return to Front Yard"
          >
            <Home className="w-4 h-4" />
            <span className="text-xs font-mono font-bold hidden sm:inline">Front Yard</span>
          </button>

          <div className="px-3.5 py-2 rounded-xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[2px_2px_0px_0px_#1C1917] flex items-center gap-2 text-xs font-mono text-[#1C1917]">
            <span className="w-2 h-2 rounded-full bg-[#854D0E] animate-pulse" />
            <span className="font-serif font-bold text-sm hidden md:inline">{currentRoom.name}</span>
            <span className="text-[#78716C] font-mono text-[11px] uppercase">({currentRoom.theme})</span>
          </div>
        </div>

        {/* Right: Accessible View, Map, Quick Travel & Audio Controls */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* "View Portfolio Normally" Accessible Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenAccessibleView();
            }}
            className="px-3 py-2.5 rounded-xl bg-[#FAF6EE] hover:bg-[#EBE4D5] border-2 border-[#1C1917] shadow-[2px_2px_0px_0px_#1C1917] text-[#1C1917] text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer"
            title="View Accessible Full Portfolio Document"
          >
            <Eye className="w-4 h-4 text-[#854D0E]" />
            <span className="hidden md:inline">Accessible View</span>
          </button>

          {/* Quick Travel Dropdown (Secret room filtered out) */}
          <div className="relative">
            <button
              onClick={() => setShowQuickNav(!showQuickNav)}
              className="p-2.5 rounded-xl bg-[#FAF6EE] hover:bg-[#EBE4D5] border-2 border-[#1C1917] shadow-[2px_2px_0px_0px_#1C1917] text-[#1C1917] text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer"
              title="Quick Travel"
            >
              <span>Rooms</span>
              <span className="text-[10px]">▼</span>
            </button>

            <AnimatePresence>
              {showQuickNav && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-56 p-2 rounded-2xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] z-50 space-y-1"
                >
                  <div className="px-2 py-1 text-[10px] font-mono uppercase text-[#78716C] border-b border-[#292524]/20">
                    Architectural Locations
                  </div>
                  {standardRooms.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => {
                        sound.playClick();
                        onNavigateRoom(room.id);
                        setShowQuickNav(false);
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-mono flex items-center justify-between transition-colors cursor-pointer ${
                        currentRoomId === room.id
                          ? 'bg-[#1C1917] text-[#FAF6EE] font-bold'
                          : 'hover:bg-[#EBE4D5] text-[#1C1917]'
                      }`}
                    >
                      <span>{room.name}</span>
                      <span className="text-[10px] opacity-70">{room.theme}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Map Overlay Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenMap();
            }}
            className="px-3 py-2.5 rounded-xl bg-[#FAF6EE] hover:bg-[#EBE4D5] border-2 border-[#1C1917] shadow-[2px_2px_0px_0px_#1C1917] text-[#1C1917] text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer"
            title="Open Hand-Drawn Map"
          >
            <Compass className="w-4 h-4" />
            <span className="hidden sm:inline">Map</span>
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleAudio}
            className="p-2.5 rounded-xl bg-[#FAF6EE] hover:bg-[#EBE4D5] border-2 border-[#1C1917] shadow-[2px_2px_0px_0px_#1C1917] text-[#1C1917] cursor-pointer"
            title={isAudioMuted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Bottom Spatial Wayfinding Navigation Controls */}
      <aside className="fixed bottom-4 inset-x-4 sm:bottom-6 z-50 max-w-xl mx-auto flex items-center justify-between p-2.5 rounded-2xl bg-[#FAF6EE]/95 backdrop-blur-md border-2 border-[#1C1917] shadow-[5px_5px_0px_0px_#1C1917]">
        {/* Previous Room */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-3 py-2 rounded-xl border border-[#292524] bg-[#EBE4D5] hover:bg-[#FAF6EE] disabled:opacity-30 disabled:cursor-not-allowed text-[#1C1917] text-xs font-mono font-bold flex items-center gap-1 cursor-pointer transition-transform hover:-translate-x-0.5"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Current Location Dots / Stepper */}
        <div className="flex items-center gap-1.5 px-2">
          {standardRooms.map((room, idx) => (
            <button
              key={room.id}
              onClick={() => {
                sound.playClick();
                onNavigateRoom(room.id);
              }}
              title={room.name}
              className={`w-3 h-3 rounded-full border border-[#1C1917] transition-all cursor-pointer ${
                currentRoomId === room.id
                  ? 'bg-[#1C1917] scale-125'
                  : 'bg-[#EBE4D5] hover:bg-[#78716C]'
              }`}
            />
          ))}
        </div>

        {/* Next Room */}
        <button
          onClick={handleNext}
          disabled={currentIndex < 0 || currentIndex === standardRooms.length - 1}
          className="px-3 py-2 rounded-xl border border-[#292524] bg-[#EBE4D5] hover:bg-[#FAF6EE] disabled:opacity-30 disabled:cursor-not-allowed text-[#1C1917] text-xs font-mono font-bold flex items-center gap-1 cursor-pointer transition-transform hover:translate-x-0.5"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </aside>

      {/* Object Inspection Note / Annotation Overlay */}
      <AnimatePresence>
        {activeObjectDetails && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="fixed bottom-20 inset-x-4 sm:inset-x-auto sm:right-8 sm:w-96 z-40 p-4 rounded-2xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[5px_5px_0px_0px_#1C1917]"
          >
            <div className="flex items-start justify-between gap-3 border-b border-[#292524]/20 pb-2 mb-2">
              <span className="text-[11px] font-mono font-bold text-[#854D0E] uppercase">
                Sketchbook Annotation
              </span>
              <button
                onClick={onClearObjectDetails}
                className="text-xs font-mono font-bold text-[#78716C] hover:text-[#1C1917] cursor-pointer"
              >
                ✕ Close
              </button>
            </div>
            <p className="text-xs sm:text-sm font-serif text-[#1C1917] leading-relaxed">
              {activeObjectDetails}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
