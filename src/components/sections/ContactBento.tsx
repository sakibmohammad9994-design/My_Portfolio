import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Clock, 
  ExternalLink, 
  MessageSquare,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';
import { BentoCard } from '../ui/BentoCard';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import confetti from 'canvas-confetti';

export const ContactBento: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      colors: ['#06b6d4', '#6366f1', '#10b981'],
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
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="contact" className="relative py-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glow */}
      <div className="glow-orb-cyan w-96 h-96 top-10 right-0" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold mb-2">
            <Send className="w-3.5 h-3.5" />
            <span>DISPATCH & CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="text-sm sm:text-base font-serif text-slate-400 mt-1 max-w-2xl">
            Open for full-stack web engineering roles, AI model integrations, and collaborative product builds.
          </p>
        </div>

        {/* Local Time Indicator */}
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 shrink-0">
          <Clock className="w-4 h-4 text-cyan-400" />
          <span>Chittagong Time (BST):</span>
          <span className="font-bold text-white">{currentTime || 'Loading...'}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* LEFT: DIRECT CONTACT CHANNELS (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Primary Email Card */}
          <BentoCard glowColor="cyan" className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                Primary Contact Email
              </span>
              <Mail className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-base sm:text-lg font-mono font-bold text-white break-all">
              {PERSONAL_INFO.emailPrimary}
            </div>
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => handleCopy(PERSONAL_INFO.emailPrimary, 'primary')}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {copiedKey === 'primary' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                )}
                <span>{copiedKey === 'primary' ? 'Copied!' : 'Copy Address'}</span>
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.emailPrimary}`}
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1 font-bold"
              >
                <span>Compose Email</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </BentoCard>

          {/* Secondary Email Card */}
          <BentoCard glowColor="violet" className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                Secondary Email
              </span>
              <Mail className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-base sm:text-lg font-mono font-bold text-white break-all">
              {PERSONAL_INFO.emailSecondary}
            </div>
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => handleCopy(PERSONAL_INFO.emailSecondary, 'secondary')}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {copiedKey === 'secondary' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-purple-400" />
                )}
                <span>{copiedKey === 'secondary' ? 'Copied!' : 'Copy Address'}</span>
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.emailSecondary}`}
                className="text-xs font-mono text-purple-400 hover:underline flex items-center gap-1 font-bold"
              >
                <span>Compose Email</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </BentoCard>

          {/* Phone & Location Card */}
          <BentoCard glowColor="emerald" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-slate-300">
                  {PERSONAL_INFO.phone}
                </span>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300"
                title="Copy phone"
              >
                {copiedKey === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </BentoCard>

          {/* Social Profiles Bento Strip */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {PERSONAL_INFO.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 flex flex-col items-center justify-center text-center group transition-all"
              >
                <span className="text-[11px] font-mono font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">
                  {s.name}
                </span>
                <span className="text-[9px] font-mono text-slate-500 truncate w-full mt-0.5">
                  {s.username}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: INTERACTIVE DISPATCH TERMINAL (7 Cols) */}
        <BentoCard glowColor="indigo" className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase text-indigo-400 font-bold tracking-wider">
                  DIRECT DISPATCH PORTAL
                </span>
                <h3 className="text-2xl font-bold font-serif text-white mt-1">
                  Send a Direct Message
                </h3>
              </div>
              <MessageSquare className="w-6 h-6 text-indigo-400" />
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
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-500/60 focus:bg-white/[0.06] text-sm text-white placeholder-slate-500 font-mono outline-hidden transition-colors"
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
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-500/60 focus:bg-white/[0.06] text-sm text-white placeholder-slate-500 font-mono outline-hidden transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 font-bold">
                  Project or Opportunity Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your project, team role, or collaborative idea..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-500/60 focus:bg-white/[0.06] text-sm text-white placeholder-slate-500 font-serif outline-hidden transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 text-white font-mono text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all cursor-pointer hover:scale-[1.01]"
              >
                <span>Dispatch Message via Email Client</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="pt-4 border-t border-white/10 text-center text-xs font-mono text-slate-500">
            <span>Encrypted Transmission · Average response within 12-24 hours</span>
          </div>
        </BentoCard>

      </div>
    </section>
  );
};
