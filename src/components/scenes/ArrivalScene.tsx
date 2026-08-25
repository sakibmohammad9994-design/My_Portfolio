import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface ArrivalSceneProps {
  onEnterHouse: () => void;
  onOpenMap: () => void;
  onSkipIntro?: () => void;
}

export const ArrivalScene: React.FC<ArrivalSceneProps> = ({
  onEnterHouse,
  onOpenMap,
  onSkipIntro,
}) => {
  const [sequenceStage, setSequenceStage] = useState<
    'idle' | 'unlatching' | 'opening' | 'entering' | 'done'
  >('idle');

  const isTransitioning = sequenceStage !== 'idle';

  const startEntrySequence = () => {
    if (isTransitioning) return;

    // Stage 1: Unlatch door
    setSequenceStage('unlatching');
    sound.playClick();
    sound.playHandleLatch();

    // Stage 2: Open double doors
    setTimeout(() => {
      setSequenceStage('opening');
      sound.playDoor();
    }, 600);

    // Stage 3: Camera passes through entrance
    setTimeout(() => {
      setSequenceStage('entering');
      sound.playFootstep();
    }, 1400);

    // Stage 4: Enter study
    setTimeout(() => {
      setSequenceStage('done');
      if (typeof window !== 'undefined') {
        localStorage.setItem('hasEnteredWorld', 'true');
      }
      onEnterHouse();
    }, 2400);
  };

  const handleSkip = () => {
    sound.playClick();
    if (typeof window !== 'undefined') {
      localStorage.setItem('hasEnteredWorld', 'true');
    }
    if (onSkipIntro) {
      onSkipIntro();
    } else {
      onEnterHouse();
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between p-4 sm:p-6 paper-canvas overflow-hidden select-none">
      {/* Top Sketchbook Utility Bar */}
      <header className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto flex items-center justify-between py-2 border-b border-[#44403C]/30 text-[#1C1917] z-30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border-2 border-[#1C1917] bg-[#EBE4D5] overflow-hidden flex items-center justify-center font-mono text-xs font-bold text-[#1C1917] shadow-[2px_2px_0px_0px_#1C1917] shrink-0">
            <img src="/abdullah.jpg" alt="AS" className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <div className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#57534E]">
              Portfolio World · Est. 2026
            </div>
            <div className="text-xs sm:text-sm font-bold font-serif text-[#1C1917]">
              Abdullah Al Sakib
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Subtle Skip Intro Option */}
          <button
            onClick={handleSkip}
            className="px-3 py-1.5 rounded-lg hover:bg-[#EBE4D5] text-xs font-mono text-[#57534E] hover:text-[#1C1917] flex items-center gap-1 transition-colors cursor-pointer"
            title="Skip directly to Portfolio Study"
          >
            <span>Skip Intro</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Architectural Floorplan Map */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenMap();
            }}
            className="px-3.5 py-1.5 rounded-lg bg-[#FAF6EE] hover:bg-[#EBE4D5] border border-[#292524] shadow-[2px_2px_0px_0px_#292524] text-xs font-mono text-[#1C1917] flex items-center gap-1.5 transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Estate Map</span>
          </button>
        </div>
      </header>

      {/* Main Architectural Camera Viewport */}
      <main className="relative w-full max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center my-4 z-20">
        {/* Dynamic Dolly Zoom Container */}
        <motion.div
          animate={
            sequenceStage === 'idle'
              ? { scale: 1, y: 0, opacity: 1 }
              : sequenceStage === 'unlatching'
              ? { scale: 1.15, y: 30, opacity: 1 }
              : sequenceStage === 'opening'
              ? { scale: 1.45, y: 65, opacity: 1 }
              : sequenceStage === 'entering'
              ? { scale: 1.85, y: 100, opacity: 0.15 }
              : { scale: 2.3, y: 140, opacity: 0 }
          }
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full flex flex-col items-center"
        >
          {/* Integrated Hand-Drawn Sign: "ABDULLAH AL SAKIB · ENTER MY WORLD" */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={
              isTransitioning
                ? { opacity: 0, y: -20, scale: 0.95 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ duration: 0.6 }}
            className="mb-4 text-center px-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#78716C]/40 bg-[#EBE4D5]/60 text-[11px] font-mono text-[#57534E] mb-2 shadow-sm">
              <Sparkles className="w-3 h-3 text-[#1C1917]" />
              <span>INTERACTIVE HOUSE ENTRANCE</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-[#1C1917] tracking-tight">
              ABDULLAH AL SAKIB
            </h1>
            
            <p className="text-sm sm:text-base text-[#57534E] font-serif italic max-w-lg mx-auto mt-1">
              “Building ideas into reality, one line of code at a time.”
            </p>
          </motion.div>

          {/* The Hand-Drawn House & Entrance Stage */}
          <div className="relative w-full max-w-3xl aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
            {/* Background Architectural House SVG */}
            <svg
              viewBox="0 0 800 480"
              className="w-full h-full drop-shadow-sm select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Sky / Horizon Drafting lines */}
              <line x1="40" y1="360" x2="760" y2="360" stroke="#44403C" strokeWidth="2" />
              <line x1="30" y1="366" x2="770" y2="366" stroke="#78716C" strokeWidth="1" strokeDasharray="6 3" />
              <line x1="20" y1="372" x2="780" y2="372" stroke="#A8A29E" strokeWidth="0.75" />

              {/* Background Trees & Foliage */}
              {/* Left Garden Tree */}
              <path
                d="M 120 360 C 100 320, 90 280, 110 240 C 130 200, 170 200, 190 240 C 210 280, 200 320, 180 360 Z"
                fill="#EBE4D5"
                stroke="#292524"
                strokeWidth="1.75"
              />
              <path d="M 150 360 L 150 250 M 150 300 L 130 280 M 150 280 L 170 260" stroke="#292524" strokeWidth="1.5" />
              
              {/* Right Garden Tree */}
              <path
                d="M 640 360 C 620 310, 610 260, 635 220 C 660 180, 700 180, 725 220 C 750 260, 740 310, 720 360 Z"
                fill="#EBE4D5"
                stroke="#292524"
                strokeWidth="1.75"
              />
              <path d="M 680 360 L 680 230 M 680 290 L 660 270 M 680 270 L 700 250" stroke="#292524" strokeWidth="1.5" />

              {/* House Main Structure */}
              <rect
                x="240"
                y="180"
                width="320"
                height="180"
                fill="#FAF6EE"
                stroke="#1C1917"
                strokeWidth="2.5"
              />

              {/* Wall Crosshatching */}
              <line x1="240" y1="220" x2="270" y2="220" stroke="#78716C" strokeWidth="0.8" />
              <line x1="530" y1="220" x2="560" y2="220" stroke="#78716C" strokeWidth="0.8" />
              <line x1="240" y1="300" x2="260" y2="300" stroke="#78716C" strokeWidth="0.8" />

              {/* Roof Pitch */}
              <polygon
                points="210,180 400,90 590,180"
                fill="#FAF6EE"
                stroke="#1C1917"
                strokeWidth="2.5"
              />
              {/* Shingles */}
              <line x1="260" y1="155" x2="540" y2="155" stroke="#44403C" strokeWidth="1.2" strokeDasharray="12 4" />
              <line x1="310" y1="130" x2="490" y2="130" stroke="#44403C" strokeWidth="1.2" strokeDasharray="10 4" />
              <line x1="360" y1="108" x2="440" y2="108" stroke="#44403C" strokeWidth="1.2" />

              {/* Chimney & Smoke */}
              <rect x="490" y="100" width="35" height="50" fill="#FAF6EE" stroke="#1C1917" strokeWidth="2" />
              <line x1="485" y1="100" x2="530" y2="100" stroke="#1C1917" strokeWidth="2" />
              <path
                d="M 508 90 Q 515 75 505 60 Q 525 45 520 30"
                stroke="#78716C"
                strokeWidth="1.2"
                strokeDasharray="4 2"
                fill="none"
              />

              {/* Attic Circular Window */}
              <circle cx="400" cy="140" r="18" fill="#FAF6EE" stroke="#1C1917" strokeWidth="1.75" />
              <line x1="400" y1="122" x2="400" y2="158" stroke="#1C1917" strokeWidth="1.2" />
              <line x1="382" y1="140" x2="418" y2="140" stroke="#1C1917" strokeWidth="1.2" />

              {/* Left Ground Window */}
              <rect x="265" y="230" width="55" height="70" fill="#EBE4D5" stroke="#1C1917" strokeWidth="2" />
              <line x1="292.5" y1="230" x2="292.5" y2="300" stroke="#1C1917" strokeWidth="1.2" />
              <line x1="265" y1="265" x2="320" y2="265" stroke="#1C1917" strokeWidth="1.2" />
              <line x1="260" y1="302" x2="325" y2="302" stroke="#1C1917" strokeWidth="2" />

              {/* Right Ground Window */}
              <rect x="480" y="230" width="55" height="70" fill="#EBE4D5" stroke="#1C1917" strokeWidth="2" />
              <line x1="507.5" y1="230" x2="507.5" y2="300" stroke="#1C1917" strokeWidth="1.2" />
              <line x1="480" y1="265" x2="535" y2="265" stroke="#1C1917" strokeWidth="1.2" />
              <line x1="475" y1="302" x2="540" y2="302" stroke="#1C1917" strokeWidth="2" />

              {/* Entrance Porch Structure */}
              <rect x="355" y="210" width="90" height="150" fill="#FAF6EE" stroke="#1C1917" strokeWidth="2.5" />
              
              {/* Porch Steps */}
              <line x1="340" y1="360" x2="460" y2="360" stroke="#1C1917" strokeWidth="2.5" />
              <line x1="330" y1="368" x2="470" y2="368" stroke="#1C1917" strokeWidth="2" />
              <line x1="320" y1="376" x2="480" y2="376" stroke="#1C1917" strokeWidth="1.5" />

              {/* Stone Walkway */}
              <path
                d="M 360 376 L 290 475 M 440 376 L 510 475"
                stroke="#292524"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              <ellipse cx="400" cy="400" rx="28" ry="9" fill="#FAF6EE" stroke="#44403C" strokeWidth="1.5" />
              <ellipse cx="400" cy="435" rx="38" ry="12" fill="#FAF6EE" stroke="#44403C" strokeWidth="1.5" />
              <ellipse cx="400" cy="470" rx="46" ry="14" fill="#FAF6EE" stroke="#44403C" strokeWidth="1.5" />

              {/* Hand-Drawn Wooden Signboard on Lawn */}
              <g transform="translate(165, 348)">
                <rect x="18" y="20" width="4" height="45" fill="#1C1917" />
                <rect x="0" y="0" width="84" height="32" rx="4" fill="#FAF6EE" stroke="#1C1917" strokeWidth="2" />
                <text x="8" y="14" fontFamily="serif" fontSize="8" fontWeight="bold" fill="#1C1917">
                  ENTER MY WORLD
                </text>
                <text x="14" y="25" fontFamily="monospace" fontSize="7" fill="#57534E">
                  Abdullah's House
                </text>
              </g>
            </svg>

            {/* Interactive Physical Arched Doorway (Positioned over SVG door frame) */}
            <div
              onClick={startEntrySequence}
              className="absolute left-1/2 -translate-x-1/2 top-[44%] w-24 sm:w-28 h-36 sm:h-40 rounded-t-full border-2 border-[#1C1917] bg-[#EBE4D5] shadow-inner overflow-hidden flex z-10 cursor-pointer group/door"
              title="Click the door to step inside"
            >
              {/* Radiant Warm Light Spill when door opens */}
              <motion.div
                animate={
                  sequenceStage === 'opening' || sequenceStage === 'entering'
                    ? { opacity: 1, scale: 1.3 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-t from-[#FDE047]/50 via-[#FAF6EE] to-transparent pointer-events-none"
              />

              {/* Left Door Leaf */}
              <motion.div
                animate={
                  sequenceStage === 'opening' || sequenceStage === 'entering'
                    ? { rotateY: -80, transformOrigin: 'left center' }
                    : { rotateY: 0 }
                }
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                className="w-1/2 h-full border-r border-[#1C1917] bg-[#FAF6EE] p-1 flex flex-col justify-between items-end relative shadow-sm transition-colors group-hover/door:bg-[#F5EFE6]"
              >
                <div className="w-full h-8 rounded-t-full border border-[#292524] bg-[#EBE4D5]/40 mt-1" />
                <div className="w-full h-10 border border-[#292524] bg-[#EBE4D5]/40 mb-1" />
                {/* Left Brass Knob */}
                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#1C1917] flex items-center justify-center shadow-xs">
                  <div className="w-1 h-1 rounded-full bg-[#FAF6EE]" />
                </div>
              </motion.div>

              {/* Right Door Leaf */}
              <motion.div
                animate={
                  sequenceStage === 'opening' || sequenceStage === 'entering'
                    ? { rotateY: 80, transformOrigin: 'right center' }
                    : { rotateY: 0 }
                }
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                className="w-1/2 h-full border-l border-[#1C1917] bg-[#FAF6EE] p-1 flex flex-col justify-between items-start relative shadow-sm transition-colors group-hover/door:bg-[#F5EFE6]"
              >
                <div className="w-full h-8 rounded-t-full border border-[#292524] bg-[#EBE4D5]/40 mt-1" />
                <div className="w-full h-10 border border-[#292524] bg-[#EBE4D5]/40 mb-1" />
                {/* Right Brass Knob */}
                <div className="absolute left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#1C1917] flex items-center justify-center shadow-xs">
                  <div className="w-1 h-1 rounded-full bg-[#FAF6EE]" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Interactive "ENTER MY WORLD" Action Trigger */}
          <AnimatePresence>
            {!isTransitioning && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="mt-2 sm:mt-4 flex flex-col items-center gap-2 z-30"
              >
                <button
                  onClick={startEntrySequence}
                  className="px-7 py-3 rounded-2xl bg-[#1C1917] text-[#FAF6EE] hover:bg-[#292524] border-2 border-[#1C1917] shadow-[4px_5px_0px_0px_#44403C] font-mono text-sm sm:text-base font-bold tracking-wide flex items-center gap-3 transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>ENTER MY WORLD</span>
                  <ArrowRight className="w-4 h-4 text-[#FAF6EE]" />
                </button>

                <p className="text-[11px] sm:text-xs font-mono text-[#78716C] tracking-wide mt-1">
                  Click the entrance door or button to step inside
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dynamic Sequence Status Caption during cinematic movement */}
          <AnimatePresence>
            {isTransitioning && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#FAF6EE]/90 border border-[#1C1917] shadow-sm font-mono text-xs text-[#1C1917] flex items-center gap-2 z-30"
              >
                <div className="w-2 h-2 rounded-full bg-[#1C1917] animate-pulse" />
                <span>
                  {sequenceStage === 'unlatching' && 'Unlatching the entrance door...'}
                  {sequenceStage === 'opening' && 'Opening the doors into the world...'}
                  {sequenceStage === 'entering' && 'Stepping through into the study...'}
                  {sequenceStage === 'done' && 'Entering Abdullah’s World...'}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Footer Credentials */}
      <footer className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between py-2 border-t border-[#44403C]/20 text-xs font-mono text-[#78716C] z-30 gap-2">
        <div>
          <span>{PERSONAL_INFO.emailPrimary}</span> · <span>{PERSONAL_INFO.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{PERSONAL_INFO.university}</span>
          <span>•</span>
          <span>{PERSONAL_INFO.location}</span>
        </div>
      </footer>
    </div>
  );
};
