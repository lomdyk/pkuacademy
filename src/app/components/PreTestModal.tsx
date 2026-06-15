import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../utils/i18n';
import { GhostButton } from './ui/GhostButton';

interface PreTestModalProps {
  onSubmit: (age: string, knowledge: string) => void;
}

export const PreTestModal: React.FC<PreTestModalProps> = ({ onSubmit }) => {
  const { t } = useLang();
  const [age, setAge] = useState('');
  const [knowledge, setKnowledge] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (age && knowledge) {
      onSubmit(age, knowledge);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <div className="absolute inset-0 bg-[#050a18]/90 backdrop-blur-xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 w-full max-w-lg bg-[#0a1128] border border-cyan-500/20 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(34,211,238,0.1)]"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <span className="text-3xl">🚀</span>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
          Welcome to PKU Academy
        </h2>
        <p className="text-slate-400 text-center mb-8 text-sm md:text-base leading-relaxed">
          Before we start your mission, please answer two quick questions to help us calibrate your experience. This data is anonymous and used for research.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Age Group */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-300">
              1. What is your age group?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['< 18', '18-25', '26-35', '35+'].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setAge(opt)}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-300 ${
                    age === opt
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                      : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:bg-slate-800'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Knowledge */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-300">
              2. Are you familiar with Phenylketonuria (PKU)?
            </label>
            <div className="flex flex-col gap-3">
              {[
                { id: 'yes', label: 'Yes, very familiar (or diagnosed)' },
                { id: 'heard', label: 'I have heard of it' },
                { id: 'no', label: 'No, completely new to me' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setKnowledge(opt.id)}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-300 text-left ${
                    knowledge === opt.id
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                      : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:bg-slate-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <p className="text-xs text-slate-400 text-center mb-4 leading-relaxed">
              <span className="text-cyan-400 font-semibold">Note:</span> Take your time to explore the site and play the minigames. When you reach the very bottom of the page, click the <span className="text-white">"Finish Simulation & Evaluate"</span> button to submit your final feedback.
            </p>
            <GhostButton
              tone="cyan"
              className="w-full justify-center py-4"
              onClick={handleSubmit}
              disabled={!age || !knowledge}
            >
              Start Mission
            </GhostButton>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
