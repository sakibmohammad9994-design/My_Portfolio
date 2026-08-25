import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, User, Camera } from 'lucide-react';

export type PhotoVariant = 'porch_entrance' | 'study_host' | 'desk_card' | 'portrait_badge';

interface AbdullahFullBodyPhotoProps {
  variant?: PhotoVariant;
  onClick?: () => void;
  className?: string;
  showCaption?: boolean;
}

export const AbdullahFullBodyPhoto: React.FC<AbdullahFullBodyPhotoProps> = ({
  variant = 'study_host',
  onClick,
  className = '',
  showCaption = true,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Real photo URL
  const photoSrc = '/abdullah.jpg';

  if (variant === 'porch_entrance') {
    return (
      <div
        onClick={onClick}
        className={`relative inline-block cursor-pointer select-none group ${className}`}
        title="Abdullah Al Sakib · Host"
      >
        {/* Optical Ground Contact Shadow on Porch Stone Deck */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-5 rounded-full bg-[#1C1917]/35 blur-[2.5px] pointer-events-none transform translate-y-1" />

        {/* Full-Body Host Frame */}
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Framed Cutout / Avatar Container */}
          <div className="relative w-32 sm:w-40 h-[240px] sm:h-[290px] rounded-2xl overflow-hidden border-2 border-[#1C1917] bg-[#FAF6EE] shadow-[3px_4px_0px_0px_#1C1917] p-1.5 flex flex-col justify-between">
            {/* Top Tape Corner */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-[#EBE4D5]/90 border border-[#78716C]/50 rotate-1 shadow-xs z-20" />

            {/* Photo / Silhouette Area */}
            <div className="relative w-full flex-1 rounded-xl overflow-hidden bg-[#EBE4D5] border border-[#292524]/40 flex items-center justify-center">
              {!imageError ? (
                <img
                  src={photoSrc}
                  alt="Abdullah Al Sakib"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[0.98]"
                />
              ) : (
                /* Elegant Architectural Silhouette Fallback */
                <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-b from-[#FAF6EE] to-[#EBE4D5]">
                  <div className="w-14 h-14 rounded-full border-2 border-[#1C1917] bg-[#FAF6EE] flex items-center justify-center mb-2 shadow-sm">
                    <User className="w-7 h-7 text-[#1C1917]" />
                  </div>
                  <span className="font-serif font-bold text-xs text-[#1C1917]">
                    Abdullah Al Sakib
                  </span>
                  <span className="text-[10px] font-mono text-[#78716C] mt-0.5">
                    Lead Architect
                  </span>
                </div>
              )}

              {/* Ink Wash Overlay for Hand-Drawn Harmony */}
              <div className="absolute inset-0 bg-[#FAF6EE]/10 pointer-events-none mix-blend-multiply" />
            </div>

            {/* Handwritten Label Tag */}
            {showCaption && (
              <div className="mt-1.5 pt-1 border-t border-[#292524]/20 flex items-center justify-between px-1">
                <span className="text-[10px] font-mono font-bold text-[#1C1917]">
                  Abdullah Al Sakib
                </span>
                <span className="text-[9px] font-mono text-[#854D0E] uppercase">
                  Host
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  if (variant === 'desk_card') {
    return (
      <div
        onClick={onClick}
        className={`relative p-2 rounded-2xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[3px_3px_0px_0px_#1C1917] flex items-center gap-3 cursor-pointer hover:bg-[#EBE4D5] transition-colors ${className}`}
      >
        <div className="w-12 h-12 rounded-xl bg-[#EBE4D5] border border-[#1C1917] overflow-hidden flex items-center justify-center shrink-0">
          {!imageError ? (
            <img
              src={photoSrc}
              alt="Abdullah Al Sakib"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-serif font-bold text-base text-[#1C1917]">AS</span>
          )}
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase text-[#78716C] font-bold">
            ARCHITECT DOSSIER
          </div>
          <div className="text-xs font-serif font-bold text-[#1C1917]">
            Abdullah Al Sakib
          </div>
        </div>
      </div>
    );
  }

  // Default: 'study_host' (For Living Room / About Me)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className={`relative rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[5px_7px_0px_0px_#1C1917] p-5 sm:p-7 md:p-8 flex flex-col sm:flex-row items-center gap-6 lg:gap-8 cursor-pointer hover:bg-[#FAF6EE]/95 transition-all ${className}`}
    >
      {/* Drafting Tape Top Corners */}
      <div className="absolute -top-2.5 left-8 w-20 h-5 bg-[#EBE4D5] border border-[#78716C]/60 -rotate-2 shadow-xs z-10" />
      <div className="absolute -top-2.5 right-8 w-20 h-5 bg-[#EBE4D5] border border-[#78716C]/60 rotate-2 shadow-xs z-10" />

      {/* Hand-Drawn Architectural Sketch Photo Frame */}
      <div className="relative w-44 sm:w-56 md:w-64 aspect-[3/4] max-h-[280px] sm:max-h-[320px] md:max-h-[350px] rounded-2xl overflow-hidden border-2 border-[#1C1917] bg-[#EBE4D5] shadow-[3px_4px_0px_0px_#1C1917] shrink-0 flex items-center justify-center p-1">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#EBE4D5]">
          {!imageError ? (
            <img
              src={photoSrc}
              alt="Abdullah Al Sakib"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-[center_15%] filter contrast-[1.02] brightness-[0.98] sepia-[0.06]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-[#FAF6EE] to-[#EBE4D5]">
              <div className="w-14 h-14 rounded-full border-2 border-[#1C1917] bg-[#FAF6EE] flex items-center justify-center mb-2 shadow-sm">
                <User className="w-7 h-7 text-[#1C1917]" />
              </div>
              <span className="font-serif font-bold text-sm text-[#1C1917]">AS</span>
              <span className="text-xs font-mono text-[#78716C]">Chittagong, BD</span>
            </div>
          )}

          {/* Warm Hand-Drawn Paper Ink Wash Overlay */}
          <div className="absolute inset-0 bg-[#F5F0E6]/15 pointer-events-none mix-blend-multiply" />
        </div>
      </div>

      {/* Description & Host Welcome */}
      <div className="space-y-2.5 flex-1 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-[11px] font-mono font-bold text-[#1C1917]">
          <Sparkles className="w-3.5 h-3.5 text-[#854D0E]" />
          <span>PORTFOLIO ARCHITECT</span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#1C1917] tracking-tight">
          Abdullah Al Sakib
        </h3>

        <p className="text-sm sm:text-base font-serif text-[#57534E] leading-relaxed">
          “Welcome to my interactive world. Feel free to explore my study, examine my live production systems in the workshop, inspect academic ledgers in the library, or dispatch a message.”
        </p>

        <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm font-mono text-[#78716C]">
          <span>📍 Kalamia Bazar, Chittagong</span>
          <span>•</span>
          <span>🎓 IIUC 8th Semester</span>
        </div>
      </div>
    </motion.div>
  );
};
