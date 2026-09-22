import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Sparkles, Send, X, User, CornerDownLeft, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO, BIOGRAPHY, CURRENT_STATUS, FEATURED_PROJECTS, EDUCATION_DATA, SKILLS_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface AskSakibAIModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: any) => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AskSakibAIModal: React.FC<AskSakibAIModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hello! I'm Sakib's AI Assistant. Ask me anything about Abdullah Al Sakib's engineering projects, IIUC academic background, skills, or how to collaborate with him!`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const quickPrompts = [
    'What are Sakib’s flagship projects?',
    'Tell me about his academic background & IIUC CGPA',
    'What is his primary tech stack?',
    'How can I get in touch with Sakib?',
  ];

  const generateAnswer = (userQuery: string): string => {
    const q = userQuery.toLowerCase();

    if (q.includes('project') || q.includes('work') || q.includes('aetheric') || q.includes('esports') || q.includes('habit')) {
      return `Sakib has built 3 flagship production systems:\n\n1. **Aetheric Intelligence** (AI Academic Research & Citation Platform with Google Gemini, RAG, pgvector, and PostgreSQL).\n2. **Aysha Tower Arena** (Real-Time Esports Tournament Hub for EA FC 25 with WebSockets and Supabase).\n3. **Personal Habit Tracker** (Progressive Web App with offline-first Firestore sync and custom HTML5 Canvas analytics).`;
    }

    if (q.includes('academic') || q.includes('education') || q.includes('cgpa') || q.includes('university') || q.includes('iiuc') || q.includes('semester')) {
      return `Abdullah Al Sakib is currently in his **8th (Final) Semester** studying **B.Sc. in Computer Science & Engineering** at **International Islamic University Chittagong (IIUC)** maintaining a solid **CGPA above 3.00**. Prior to IIUC, he achieved **GPA 5.00 (A+)** in HSC at Hazera Taju Degree College and distinction results at Nasirabad Govt Boys' High School.`;
    }

    if (q.includes('tech') || q.includes('stack') || q.includes('skill') || q.includes('language')) {
      return `Sakib's core technology matrix includes:\n• **Languages**: C++, Python, JavaScript (ES6+), Java, C\n• **Frontend**: React 19, TypeScript, Tailwind CSS\n• **Backend & DB**: Node.js, Express, PostgreSQL, pgvector, Django, MongoDB, Firestore\n• **AI / ML**: Google Gemini API, Google GenAI SDK, RAG Architecture, OpenAI API`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('reach')) {
      return `You can reach Abdullah Al Sakib directly via:\n• **Primary Email**: deltaframex@gmail.com\n• **Secondary Email**: sakibmohammad9991@gmail.com\n• **Phone / WhatsApp**: 01967773981\n• **Location**: Kalamia Bazar, Chittagong, Bangladesh (BST / UTC+6)`;
    }

    return `Abdullah Al Sakib is a final-semester CSE undergraduate at IIUC and a Full-Stack & AI developer dedicated to shipping practical, reliable software. He specializes in React 19, Node.js, Google Gemini API, pgvector, and RAG architectures. Would you like to know more about his projects, skills, or academic record?`;
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    sound.playClick();
    const userMsg: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = generateAnswer(text);
      setMessages((prev) => [...prev, { role: 'assistant', content: answer }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-[#0a0a12] border border-white/15 rounded-3xl p-5 sm:p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.95)] my-auto overflow-hidden z-10 flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-mono text-sm sm:text-base font-bold text-white">
                    Ask Sakib AI
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
                    ONLINE
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-400">
                  Interactive Knowledge Console · Instant Inquiries
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Stream */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm font-sans leading-relaxed max-w-[85%] whitespace-pre-line ${
                    m.role === 'user'
                      ? 'bg-[#d4af37] text-black font-semibold rounded-tr-xs'
                      : 'bg-white/[0.04] border border-white/10 text-slate-200 rounded-tl-xs'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start items-center text-xs font-mono text-slate-400">
                <div className="w-7 h-7 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="flex gap-1.5 py-2 px-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="py-2 border-t border-white/10 flex flex-wrap gap-1.5">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-[11px] font-mono text-slate-300 hover:text-[#d4af37] transition-colors cursor-pointer text-left"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="pt-2 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Sakib's skills, projects, or degree..."
              className="flex-1 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#d4af37] text-xs sm:text-sm text-white placeholder-slate-500 font-mono outline-hidden"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="p-3 rounded-xl bg-[#d4af37] hover:bg-white text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
