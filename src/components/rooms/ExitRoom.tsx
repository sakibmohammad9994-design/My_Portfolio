import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ExternalLink, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface ExitRoomProps {
  onObjectClick?: (details: string) => void;
}

export const ExitRoom: React.FC<ExitRoomProps> = ({ onObjectClick }) => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    const mailtoUrl = `mailto:${PERSONAL_INFO.emailPrimary}?subject=Portfolio Dispatch from ${encodeURIComponent(
      formName
    )}&body=${encodeURIComponent(
      `Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`
    )}`;
    window.location.href = mailtoUrl;
    setIsSent(true);
  };

  const copyToClipboard = (text: string, key: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="w-full space-y-8">
      {/* Hand-Drawn Room Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-[#78716C] uppercase tracking-widest">
                LOCATION 09 · THE DISPATCH DESK & POST OFFICE
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBE4D5] border border-[#292524] text-[10px] font-mono font-bold text-[#1C1917]">
                CONTACT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1C1917]">
              Let’s Build Something Together
            </h2>
            <p className="text-sm font-serif text-[#57534E] mt-1">
              Open for full-stack engineering roles, applied AI research, and ambitious technology builds.
            </p>
          </div>

          {/* Contact Dispatch Badge */}
          <div className="flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-[#EBE4D5] border border-[#292524] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#1C1917] overflow-hidden shrink-0">
              <img
                src="/abdullah.jpg"
                alt="Abdullah Al Sakib"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase text-[#78716C]">
                DIRECT DISPATCH
              </div>
              <div className="text-xs font-serif font-bold text-[#1C1917]">
                Abdullah Al Sakib
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sketched Mail Room & Direct Dispatch Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Contact Channels & Verified Socials (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Primary Email */}
          <div className="p-4 rounded-2xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[3px_3px_0px_0px_#1C1917] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-2 rounded-xl bg-[#EBE4D5] border border-[#1C1917] text-[#1C1917] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <div className="text-[10px] font-mono text-[#78716C] uppercase">
                  Primary Email
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-[#1C1917] truncate">
                  {PERSONAL_INFO.emailPrimary}
                </div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.emailPrimary, 'email1')}
              className="p-2 rounded-xl bg-[#EBE4D5] hover:bg-[#FAF6EE] border border-[#292524] text-[#1C1917] cursor-pointer"
            >
              {copiedKey === 'email1' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Secondary Email */}
          <div className="p-4 rounded-2xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[3px_3px_0px_0px_#1C1917] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-2 rounded-xl bg-[#EBE4D5] border border-[#1C1917] text-[#1C1917] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <div className="text-[10px] font-mono text-[#78716C] uppercase">
                  Secondary Email
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-[#1C1917] truncate">
                  {PERSONAL_INFO.emailSecondary}
                </div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.emailSecondary, 'email2')}
              className="p-2 rounded-xl bg-[#EBE4D5] hover:bg-[#FAF6EE] border border-[#292524] text-[#1C1917] cursor-pointer"
            >
              {copiedKey === 'email2' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone */}
          <div className="p-4 rounded-2xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[3px_3px_0px_0px_#1C1917] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-2 rounded-xl bg-[#EBE4D5] border border-[#1C1917] text-[#1C1917] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#78716C] uppercase">
                  Direct Phone
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-[#1C1917]">
                  {PERSONAL_INFO.phone}
                </div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
              className="p-2 rounded-xl bg-[#EBE4D5] hover:bg-[#FAF6EE] border border-[#292524] text-[#1C1917] cursor-pointer"
            >
              {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Physical Location */}
          <div className="p-4 rounded-2xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[3px_3px_0px_0px_#1C1917] flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#EBE4D5] border border-[#1C1917] text-[#1C1917] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#78716C] uppercase">
                Location Base
              </div>
              <div className="text-xs sm:text-sm font-serif font-bold text-[#1C1917]">
                {PERSONAL_INFO.location}
              </div>
            </div>
          </div>

          {/* Verified Social Ledger */}
          <div className="pt-2">
            <span className="text-xs font-mono uppercase text-[#78716C] font-bold block mb-2">
              Online Profiles:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {PERSONAL_INFO.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-3 rounded-2xl bg-[#FAF6EE] hover:bg-[#EBE4D5] border border-[#292524] text-xs font-mono text-[#1C1917] flex items-center justify-between transition-colors shadow-sm"
                >
                  <span className="font-bold">{soc.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#78716C]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Direct Dispatch Message Composer (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-3xl bg-[#FAF6EE] border-2 border-[#1C1917] shadow-[4px_6px_0px_0px_#1C1917] space-y-4"
          >
            <div className="border-b border-[#292524]/20 pb-3">
              <h3 className="text-xl font-bold font-serif text-[#1C1917]">
                Transmit Direct Dispatch
              </h3>
              <p className="text-xs font-mono text-[#78716C]">
                Draft an instant letter directly to Abdullah's email
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#57534E] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-[#EBE4D5]/60 border border-[#292524] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:bg-[#FAF6EE]"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-[#57534E] mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="sarah@company.com"
                  className="w-full bg-[#EBE4D5]/60 border border-[#292524] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:bg-[#FAF6EE]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#57534E] mb-1">
                Message Outline *
              </label>
              <textarea
                required
                rows={4}
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                placeholder="Describe your engineering role, project requirements, or question..."
                className="w-full bg-[#EBE4D5]/60 border border-[#292524] rounded-xl p-3.5 text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:bg-[#FAF6EE] resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-[#78716C]">
                Transmits directly to {PERSONAL_INFO.emailPrimary}
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#1C1917] text-[#FAF6EE] hover:bg-[#292524] border-2 border-[#1C1917] shadow-[2px_2px_0px_0px_#44403C] text-xs font-mono font-bold cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Letter</span>
              </button>
            </div>

            {isSent && (
              <div className="p-3 rounded-xl bg-[#EBE4D5] border border-[#292524] text-xs font-mono text-[#1C1917] flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Dispatch opened in your mail client. Thank you for connecting!</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
