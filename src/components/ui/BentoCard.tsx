import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'violet' | 'emerald' | 'amber' | 'indigo';
  onClick?: () => void;
  enableTilt?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = '',
  glowColor = 'indigo',
  onClick,
  enableTilt = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotX = ((y - centerY) / centerY) * -4; // Max -4 to 4 deg tilt
      const rotY = ((x - centerX) / centerX) * 4;
      setRotateX(rotX);
      setRotateY(rotY);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const glowGradients = {
    cyan: 'rgba(6, 182, 212, 0.18)',
    violet: 'rgba(139, 92, 246, 0.18)',
    emerald: 'rgba(16, 185, 129, 0.18)',
    amber: 'rgba(245, 158, 11, 0.18)',
    indigo: 'rgba(99, 102, 241, 0.18)',
  };

  const borderGlows = {
    cyan: 'hover:border-cyan-500/40',
    violet: 'hover:border-purple-500/40',
    emerald: 'hover:border-emerald-500/40',
    amber: 'hover:border-amber-500/40',
    indigo: 'hover:border-indigo-500/40',
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className={`relative rounded-3xl overflow-hidden glass-panel ${borderGlows[glowColor]} ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Spotlight Hover Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${glowGradients[glowColor]}, transparent 70%)`,
        }}
      />

      {/* Top Glass Highlight Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-7">
        {children}
      </div>
    </motion.div>
  );
};
