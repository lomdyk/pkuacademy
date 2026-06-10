import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { soundEngine } from "../../utils/audioEngine";

export const SoundToggle = () => {
  const [isMuted, setIsMuted] = useState(soundEngine.isMutedState);

  useEffect(() => {
    setIsMuted(soundEngine.isMutedState);
  }, []);

  const handleToggle = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundEngine.clickSwitch();
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-4 right-4 z-[999] w-10 h-10 rounded-full bg-[#050a18]/80 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 backdrop-blur-md transition-all duration-200"
      aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
    >
      {isMuted ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </button>
  );
};
