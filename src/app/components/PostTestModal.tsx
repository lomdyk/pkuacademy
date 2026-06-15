import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../utils/i18n';
import { GhostButton } from './ui/GhostButton';

interface PostTestModalProps {
  onSubmit: (design: number, clarity: number, learned: boolean, feedback: string) => void;
  onClose: () => void;
}

export const PostTestModal: React.FC<PostTestModalProps> = ({ onSubmit, onClose }) => {
  const { t } = useLang();
  const [designRating, setDesignRating] = useState<number>(0);
  const [clarityRating, setClarityRating] = useState<number>(0);
  const [learned, setLearned] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (designRating && clarityRating && learned !== null) {
      setIsSubmitting(true);
      await onSubmit(designRating, clarityRating, learned, feedback);
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2500);
    }
  };

  const renderStars = (rating: number, setRating: (val: number) => void) => {
    return (
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              rating >= star 
                ? 'bg-amber-400/20 text-amber-400 border border-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.3)]' 
                : 'bg-slate-800 text-slate-500 border border-slate-700 hover:border-slate-500 hover:bg-slate-700'
            }`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#050a18]/90 backdrop-blur-xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative z-10 w-full max-w-xl bg-[#0a1128] border border-emerald-500/20 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(52,211,153,0.1)] max-h-[90vh] overflow-y-auto"
      >
        {showSuccess ? (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center text-4xl mb-6 shadow-[0_0_30px_rgba(52,211,153,0.4)]">
              ✨
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Mission Accomplished!</h2>
            <p className="text-emerald-400 text-center">Your data has been securely transmitted. Thank you!</p>
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-3xl">📋</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
              Mission Report
            </h2>
            <p className="text-slate-400 text-center mb-8 text-sm md:text-base leading-relaxed">
              You've completed the simulation. Please share your feedback to help us improve the PKU Academy experience.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-300">
                  1. How would you rate the visual design and 3D graphics?
                </label>
                {renderStars(designRating, setDesignRating)}
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-300">
                  2. Were the minigames and interface clear to understand?
                </label>
                {renderStars(clarityRating, setClarityRating)}
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-300">
                  3. Did you learn something new about PKU or the diet?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setLearned(true)}
                    className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-300 ${
                      learned === true
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                        : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:bg-slate-800'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setLearned(false)}
                    className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-300 ${
                      learned === false
                        ? 'bg-slate-800/80 border-slate-500 text-slate-300'
                        : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:bg-slate-800'
                    }`}
                  >
                    No / I already knew
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-300">
                  4. Any open feedback or suggestions? (Optional)
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none resize-none min-h-[100px]"
                  placeholder="What did you like? What could be improved?"
                />
              </div>

              <div className="pt-4 flex gap-3">
                <GhostButton
                  type="button"
                  onClick={onClose}
                  color="#64748b"
                  className="flex-1 justify-center py-4"
                >
                  Cancel
                </GhostButton>
                <GhostButton
                  tone="emerald"
                  className="flex-[2] justify-center py-4"
                  onClick={handleSubmit}
                  disabled={!designRating || !clarityRating || learned === null || isSubmitting}
                >
                  {isSubmitting ? 'Transmitting...' : 'Submit Report'}
                </GhostButton>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};
