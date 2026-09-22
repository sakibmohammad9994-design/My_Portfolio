import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, Copy, Check, Clock, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import confetti from 'canvas-confetti';

export const SlideContact: React.FC = () => {
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
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-28 pb-20 overflow-hidden">
      {/* Studio Lighting */}
      <div className="studio-gold-glow w-[600px] h-[600px] top-10 right-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#d4af37]" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#d4af37] font-bold">
                06 CONTACT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white uppercase">
              GET IN TOUCH <span className="text-[#d4af37]">/</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Chittagong (BST):</span>
            <span className="font-bold text-white">{currentTime || 'Loading...'}</span>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {/* Primary Email */}
            <div className="p-5 rounded-3xl bg-[#0a0a10]/90 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-[#d4af37] font-bold">
                  PRIMARY EMAIL
                </span>
                <Mail className="w-4 h-4 text-[#d4af37]" />
              </div>
              <div className="text-sm font-mono font-bold text-white break-all">
                {PERSONAL_INFO.emailPrimary}
              </div>
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.emailPrimary, 'p-email')}
                  className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1 cursor-pointer"
                >
                  {copiedKey === 'p-email' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                  <span>{copiedKey === 'p-email' ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.emailPrimary}`}
                  className="text-xs font-mono text-[#d4af37] hover:underline"
                >
                  Compose →
                </a>
              </div>
            </div>

            {/* Phone & Location */}
            <div className="p-5 rounded-3xl bg-[#0a0a10]/90 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-1 rounded-md bg-white/5 text-slate-400"
                >
                  {copiedKey === 'phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1 border-t border-white/10">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Pills */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {PERSONAL_INFO.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-2.5 rounded-2xl bg-white/[0.03] hover:bg-[#d4af37]/15 border border-white/10 hover:border-[#d4af37]/40 text-center transition-all group"
                >
                  <span className="text-[11px] font-mono font-bold text-slate-300 group-hover:text-[#d4af37]">
                    {s.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Direct Dispatch Form (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0a0a10]/90 border border-white/15 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#d4af37] font-bold block mb-1">
                DISPATCH TERMINAL
              </span>
              <h3 className="text-xl font-bold font-sans text-white mb-4">
                Send a Direct Inquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4af37] text-xs text-white placeholder-slate-500 font-mono outline-hidden"
                  />
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4af37] text-xs text-white placeholder-slate-500 font-mono outline-hidden"
                  />
                </div>

                <textarea
                  required
                  rows={3}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your project, full-stack role, or collaboration..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4af37] text-xs text-white placeholder-slate-500 font-serif outline-hidden resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#d4af37] hover:bg-white text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-[1.01]"
                >
                  <span>Dispatch Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            <div className="pt-2 text-center text-[11px] font-mono text-slate-500">
              <span>Average response time within 12–24 hours</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
