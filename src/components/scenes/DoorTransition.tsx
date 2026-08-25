import React, { useState } from 'react';
import { motion } from 'motion/react';
import { sound } from '../../utils/sound';

interface DoorTransitionProps {
  onComplete: () => void;
  onCancel: () => void;
}

export const DoorTransition: React.FC<DoorTransitionProps> = ({
  onComplete,
  onCancel,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDoor = () => {
    if (isOpen) return;
    setIsOpen(true);
    sound.playDoor();

    // After animation completes, carry visitor into Living Room
    setTimeout(() => {
      onComplete();
    }, 1400);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8 paper-canvas overflow-hidden">
      {/* Background Room Lighting Reveal through doorway */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isOpen ? { opacity: 1, scale: 1.6 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-[450px] h-[650px] rounded-t-full bg-[#FAF6EE] border-2 border-[#1C1917]"
        />
      </div>

      {/* Main Architectural Double Door Frame */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isOpen ? { scale: 1.3, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="relative z-10 w-full max-w-md flex flex-col items-center"
      >
        {/* Header Plaque */}
        <div className="mb-6 text-center space-y-1">
          <span className="text-xs font-mono tracking-widest text-[#78716C] uppercase">
            Main Entrance Archway
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1C1917]">
            Step Inside the Studio
          </h2>
          <p className="text-xs font-mono text-[#57534E]">
            Click the door handles or push the door to step inside
          </p>
        </div>

        {/* The Illustrated Double Arched Door */}
        <div
          onClick={handleOpenDoor}
          className="relative w-72 sm:w-80 h-[380px] sm:h-[420px] rounded-t-full border-4 border-[#1C1917] bg-[#EBE4D5] shadow-[6px_8px_0px_0px_#1C1917] cursor-pointer overflow-hidden flex select-none"
        >
          {/* Left Door Leaf */}
          <motion.div
            animate={
              isOpen
                ? { rotateY: -75, transformOrigin: 'left center' }
                : { rotateY: 0 }
            }
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="w-1/2 h-full border-r border-[#1C1917] bg-[#FAF6EE] p-4 flex flex-col justify-between items-end relative shadow-inner"
          >
            {/* Architectural Wood Panel Details */}
            <div className="w-full h-24 rounded-t-full border-2 border-[#292524] bg-[#EBE4D5]/40 mt-6" />
            <div className="w-full h-28 border-2 border-[#292524] bg-[#EBE4D5]/40" />
            <div className="w-full h-28 border-2 border-[#292524] bg-[#EBE4D5]/40 mb-4" />

            {/* Left Brass Door Knob */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1C1917] shadow-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FAF6EE]" />
            </div>
          </motion.div>

          {/* Right Door Leaf */}
          <motion.div
            animate={
              isOpen
                ? { rotateY: 75, transformOrigin: 'right center' }
                : { rotateY: 0 }
            }
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="w-1/2 h-full border-l border-[#1C1917] bg-[#FAF6EE] p-4 flex flex-col justify-between items-start relative shadow-inner"
          >
            {/* Architectural Wood Panel Details */}
            <div className="w-full h-24 rounded-t-full border-2 border-[#292524] bg-[#EBE4D5]/40 mt-6" />
            <div className="w-full h-28 border-2 border-[#292524] bg-[#EBE4D5]/40" />
            <div className="w-full h-28 border-2 border-[#292524] bg-[#EBE4D5]/40 mb-4" />

            {/* Right Brass Door Knob */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1C1917] shadow-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FAF6EE]" />
            </div>
          </motion.div>

          {/* Center Threshold Shadow */}
          <div className="absolute inset-x-0 bottom-0 h-4 bg-[#1C1917]/20 pointer-events-none" />
        </div>

        {/* Step In Button */}
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={() => {
              sound.playClick();
              onCancel();
            }}
            className="px-4 py-2 rounded-xl bg-[#FAF6EE] hover:bg-[#EBE4D5] border border-[#292524] text-xs font-mono text-[#57534E] hover:text-[#1C1917] cursor-pointer"
          >
            ← Return to Front Yard
          </button>

          <button
            onClick={handleOpenDoor}
            disabled={isOpen}
            className="px-6 py-2.5 rounded-xl bg-[#1C1917] text-[#FAF6EE] hover:bg-[#292524] border-2 border-[#1C1917] shadow-[3px_3px_0px_0px_#44403C] text-xs font-mono font-bold tracking-wide cursor-pointer flex items-center gap-2"
          >
            <span>{isOpen ? 'Entering...' : 'Open Door & Step In →'}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
