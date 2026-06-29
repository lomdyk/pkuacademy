import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLang } from '../utils/i18n';
import { GhostButton } from './ui/GhostButton';
import { soundEngine } from '../utils/audioEngine';
import { Send } from 'lucide-react';

interface SubmitLogModalProps {
  onClose: () => void;
}

export const SubmitLogModal: React.FC<SubmitLogModalProps> = ({ onClose }) => {
  const { t } = useLang();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
    if (e && 'preventDefault' in e) e.preventDefault();
    if (name.trim() && message.trim()) {
      soundEngine.clickPop(); // feedback
      setIsSubmitting(true);
      // Simulate backend submission
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSubmitting(false);
      setShowSuccess(true);
      soundEngine.clickBubble(); // success
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  const stopScroll = (e: React.WheelEvent | React.TouchEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 overflow-y-auto"
      onWheel={stopScroll}
      onTouchMove={stopScroll}
      data-lenis-prevent="true"
    >
      <div className="fixed inset-0 bg-[#050a18]/90 backdrop-blur-xl" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative z-10 w-full max-w-lg bg-[#0a1128] border border-cyan-500/20 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(34,211,238,0.1)] my-auto"
      >
        <button 
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800/50 text-slate-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        {showSuccess ? (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="w-20 h-20 bg-cyan-500/20 border border-cyan-500/50 rounded-full flex items-center justify-center text-4xl mb-6 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              🚀
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 text-center">{t("submitLog.success")}</h2>
            <p className="text-cyan-400 text-center">{t("submitLog.successSub")}</p>
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white text-center mb-2">
              {t("submitLog.title")}
            </h2>
            <p className="text-slate-400 text-center mb-6 text-sm leading-relaxed">
              {t("submitLog.intro")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {t("submitLog.name")}
                </label>
                <input 
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Captain Bo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {t("submitLog.message")}
                </label>
                <textarea 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white h-32 resize-none focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="..."
                />
              </div>

              <GhostButton 
                type="submit"
                onClick={handleSubmit}
                icon={<Send className="w-4 h-4" />}
                className="w-full h-14"
                active={name.trim().length > 0 && message.trim().length > 0}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">...</span>
                ) : (
                  t("submitLog.submit")
                )}
              </GhostButton>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};
