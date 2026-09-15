import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, Copy, Check, Clock, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import confetti from 'canvas-confetti';

export const CinematicContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, key: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#d4af37', '#ffffff', '#38bdf8'],
    });
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.emailPrimary}?subject=${subject}&body=${body}`;
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="contact" className="relative min-h-screen w-full bg-[#050508] px-6 sm:px-12 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#d4af37]" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#d4af37] font-bold">
                06 CONTACT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white uppercase">
              GET IN TOUCH <span className="text-[#d4af37]">/</span>
            </h2>
            <p className="text-sm sm:text-base font-serif text-slate-400 max-w-2xl leading-relaxed">
              Available for full-stack engineering opportunities, AI model integrations, and collaborative projects.
            </p>
          </div>

          {/* Live Clock Indicator */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Chittagong (BST):</span>
            <span className="font-bold text-white">{currentTime || 'Loading...'}</span>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: EMAIL & CONTACT DETAILS (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="p-6 rounded-3xl bg-[#0a0a10]/90 border border-white/10 hover:border-[#d4af37]/30 space-y-3 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-[#d4af37] font-bold tracking-wider">
                  PRIMARY EMAIL
                </span>
                <Mail className="w-4 h-4 text-[#d4af37]" />
              </div>
              <div className="text-sm sm:text-base font-mono font-bold text-white break-all">
                {PERSONAL_INFO.emailPrimary}
              </div>
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.emailPrimary, 'p-email')}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedKey === 'p-email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                  )}
                  <span>{copiedKey === 'p-email' ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.emailPrimary}`}
                  className="text-xs font-mono text-[#d4af37] hover:underline flex items-center gap-1 font-bold"
                >
                  <span>Compose</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Secondary Email Card */}
            <div className="p-6 rounded-3xl bg-[#0a0a10]/90 border border-white/10 hover:border-[#d4af37]/30 space-y-3 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                  SECONDARY EMAIL
                </span>
                <Mail className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-sm sm:text-base font-mono font-bold text-white break-all">
                {PERSONAL_INFO.emailSecondary}
              </div>
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.emailSecondary, 's-email')}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedKey === 's-email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                  )}
                  <span>{copiedKey === 's-email' ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.emailSecondary}`}
                  className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1"
                >
                  <span>Compose</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone & Location */}
            <div className="p-6 rounded-3xl bg-[#0a0a10]/90 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-mono text-slate-200">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-1.5 rounded-lg bg-white/5 text-slate-400"
                >
                  {copiedKey === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-white/10">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {PERSONAL_INFO.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-3 rounded-2xl bg-white/[0.03] hover:bg-[#d4af37]/10 border border-white/10 hover:border-[#d4af37]/40 flex flex-col items-center justify-center text-center group transition-all"
                >
                  <span className="text-[11px] font-mono font-bold text-slate-300 group-hover:text-[#d4af37]">
                    {s.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: DIRECT DISPATCH FORM (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0a0a10]/90 border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-[10px] font-mono uppercase text-[#d4af37] font-bold tracking-wider">
                  DIRECT DISPATCH
                </span>
                <h3 className="text-2xl font-bold font-sans text-white mt-1">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-slate-500 font-mono outline-hidden transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-bold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. sarah@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-slate-500 font-mono outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-bold">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project, team role, or collaborative opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-slate-500 font-serif outline-hidden transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#d4af37] hover:bg-white text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-[1.01]"
                >
                  <span>Dispatch Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            <div className="pt-4 border-t border-white/10 text-center text-xs font-mono text-slate-500">
              <span>Direct communication terminal · Responses typically within 12-24 hours</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
