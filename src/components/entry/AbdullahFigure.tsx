import React from 'react';
import { motion } from 'motion/react';

export type FigurePose = 'idle' | 'approach' | 'reach' | 'opening' | 'entering';

interface AbdullahFigureProps {
  pose: FigurePose;
  onClick?: () => void;
  className?: string;
}

export const AbdullahFigure: React.FC<AbdullahFigureProps> = ({
  pose,
  onClick,
  className = '',
}) => {
  // Motion variants for staged architectural movement
  const figureVariants = {
    idle: {
      x: 0,
      y: 0,
      scale: 1,
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    approach: {
      x: -20,
      y: -4,
      scale: 0.98,
      rotateY: -8,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
    reach: {
      x: -28,
      y: -8,
      scale: 0.96,
      rotateY: -16,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeInOut' },
    },
    opening: {
      x: -34,
      y: -12,
      scale: 0.94,
      rotateY: -24,
      opacity: 1,
      transition: { duration: 0.9, ease: 'easeInOut' },
    },
    entering: {
      x: -38,
      y: -36,
      scale: 0.82,
      rotateY: -32,
      opacity: 0,
      transition: { duration: 1.1, ease: [0.4, 0, 0.2, 1] },
    },
  };

  // Ground contact shadow variants matching posture and movement
  const shadowVariants = {
    idle: { scaleX: 1, scaleY: 1, x: 0, opacity: 0.35 },
    approach: { scaleX: 0.95, scaleY: 0.9, x: -20, opacity: 0.32 },
    reach: { scaleX: 0.9, scaleY: 0.85, x: -28, opacity: 0.28 },
    opening: { scaleX: 0.85, scaleY: 0.8, x: -34, opacity: 0.24 },
    entering: { scaleX: 0.5, scaleY: 0.5, x: -38, y: -20, opacity: 0 },
  };

  return (
    <div
      onClick={onClick}
      className={`relative inline-block cursor-pointer select-none group ${className}`}
      title="Abdullah Al Sakib"
    >
      {/* Contact Ground Floor Shadow on Porch */}
      <motion.div
        variants={shadowVariants}
        animate={pose}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-6 rounded-full bg-[#1C1917]/30 blur-[2px] pointer-events-none"
      />

      {/* Main Full-Body Hand-Drawn Figure */}
      <motion.div
        variants={figureVariants}
        animate={pose}
        className="relative z-10 flex flex-col items-center origin-bottom"
      >
        <div className="relative w-36 sm:w-44 h-[280px] sm:h-[340px] flex items-end justify-center">
          <svg
            viewBox="0 0 160 320"
            className="w-full h-full drop-shadow-md overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Subtle Ambient Drafting Aura */}
            <circle cx="80" cy="80" r="70" fill="rgba(250, 246, 238, 0.4)" />

            {/* Head & Hairstyle */}
            <g className="origin-center">
              {/* Curly Hair Styling */}
              <path
                d="M 64 56 C 62 42, 98 40, 98 52 C 100 62, 96 66, 96 66 L 64 66 Z"
                fill="#1C1917"
              />
              <path
                d="M 66 48 Q 72 40 80 44 Q 88 38 94 48"
                stroke="#1C1917"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="#1C1917"
              />
              {/* Head Outline */}
              <ellipse cx="80" cy="62" rx="15" ry="18" fill="#FAF6EE" stroke="#1C1917" strokeWidth="2.2" />
              {/* Mustache / Goatee subtle ink detail */}
              <path d="M 77 71 Q 80 73 83 71" stroke="#1C1917" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="80" cy="74.5" r="1.2" fill="#1C1917" />
              {/* Eyes */}
              <circle cx="75" cy="60" r="1.5" fill="#1C1917" />
              <circle cx="85" cy="60" r="1.5" fill="#1C1917" />
              {/* Neck */}
              <rect x="75" y="78" width="10" height="12" fill="#FAF6EE" stroke="#1C1917" strokeWidth="2" />
            </g>

            {/* Torso & Overcoat / Turtleneck */}
            <g>
              {/* Turtleneck collar */}
              <rect x="73" y="80" width="14" height="10" rx="2" fill="#1C1917" stroke="#1C1917" strokeWidth="1.5" />
              
              {/* Coat Body */}
              <path
                d="M 56 90 L 62 195 L 98 195 L 104 90 C 96 86, 64 86, 56 90 Z"
                fill="#FAF6EE"
                stroke="#1C1917"
                strokeWidth="2.4"
              />
              {/* Coat Lapels & Seams */}
              <line x1="72" y1="90" x2="74" y2="195" stroke="#1C1917" strokeWidth="1.5" />
              <line x1="88" y1="90" x2="86" y2="195" stroke="#1C1917" strokeWidth="1.5" />
              {/* Pockets */}
              <line x1="62" y1="140" x2="70" y2="140" stroke="#44403C" strokeWidth="1.4" />
              <line x1="90" y1="140" x2="98" y2="140" stroke="#44403C" strokeWidth="1.4" />
              {/* Subtle fabric hatching */}
              <line x1="65" y1="155" x2="71" y2="155" stroke="#78716C" strokeWidth="0.8" />
              <line x1="65" y1="162" x2="71" y2="162" stroke="#78716C" strokeWidth="0.8" />
            </g>

            {/* Left Arm (Reaching Arm toward Door) */}
            <motion.g
              animate={
                pose === 'reach' || pose === 'opening'
                  ? { rotate: -28, x: -14, y: -8, originX: '58px', originY: '95px' }
                  : pose === 'approach'
                  ? { rotate: -12, x: -6, originX: '58px', originY: '95px' }
                  : { rotate: 0, x: 0, y: 0 }
              }
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {/* Upper & Forearm */}
              <path
                d="M 56 92 L 46 138 L 40 174"
                stroke="#1C1917"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Hand */}
              <circle cx="39" cy="176" r="4.5" fill="#FAF6EE" stroke="#1C1917" strokeWidth="1.8" />
            </motion.g>

            {/* Right Arm (Resting in pocket / natural pose) */}
            <g>
              <path
                d="M 104 92 L 112 138 L 102 152"
                stroke="#1C1917"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>

            {/* Trousers / Legs */}
            <g>
              {/* Left Leg */}
              <path
                d="M 66 195 L 64 274"
                stroke="#1C1917"
                strokeWidth="10"
                strokeLinecap="square"
                fill="none"
              />
              {/* Right Leg */}
              <path
                d="M 94 195 L 96 274"
                stroke="#1C1917"
                strokeWidth="10"
                strokeLinecap="square"
                fill="none"
              />
              {/* Trousers Crease / Inset */}
              <line x1="80" y1="195" x2="80" y2="230" stroke="#FAF6EE" strokeWidth="2.5" />
            </g>

            {/* Shoes */}
            <g>
              {/* Left Shoe */}
              <path
                d="M 52 278 L 72 278 C 74 278, 74 286, 70 286 L 50 286 C 48 286, 48 278, 52 278 Z"
                fill="#1C1917"
              />
              {/* Right Shoe */}
              <path
                d="M 88 278 L 108 278 C 110 278, 110 286, 106 286 L 86 286 C 84 286, 84 278, 88 278 Z"
                fill="#1C1917"
              />
            </g>

            {/* Handwritten Identity Tag Pin */}
            <g transform="translate(108, 105)">
              <rect x="0" y="0" width="46" height="18" rx="4" fill="#FAF6EE" stroke="#1C1917" strokeWidth="1.2" />
              <text x="5" y="12" fontFamily="monospace" fontSize="8.5" fontWeight="bold" fill="#1C1917">
                Abdullah
              </text>
              <line x1="0" y1="9" x2="-6" y2="9" stroke="#1C1917" strokeWidth="1.2" />
            </g>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};
