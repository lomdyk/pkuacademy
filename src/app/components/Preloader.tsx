import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useProgress } from "@react-three/drei";

export const Preloader = () => {
  const { progress } = useProgress();
  const [show, setShow] = useState(true);
  const [isDone, setIsDone] = useState(false);

  // We want to ensure the preloader shows for at least a minimum time (e.g. 1.5s)
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // If progress is 100% AND min time has passed, we are done
    if (progress === 100 && minTimeElapsed) {
      setIsDone(true);
      // Wait for column slide animation to finish before unmounting completely
      const timer = setTimeout(() => {
        setShow(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [progress, minTimeElapsed]);

  // Lock body scroll while loading
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      if ((window as any).lenis) {
        (window as any).lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  const COLUMNS = 5;

  return (
    <div className="fixed inset-0 z-[9999] flex pointer-events-none overflow-hidden">
      
      {/* Background Columns Layer */}
      <div className="absolute inset-0 flex z-0 w-[105vw] -ml-[2.5vw]">
        {Array.from({ length: COLUMNS }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={isDone ? { y: "-100%" } : { y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1], // Smooth custom cubic bezier
              delay: i * 0.08, // Asynchronous stagger
            }}
            // h-[120vh] so the rounded bottom is off-screen initially
            // rounded-b-[40px] creates the roundness at the bottom edge as it slides up
            className="flex-1 h-[120vh] bg-[#050a18] rounded-b-[60px] md:rounded-b-[100px]"
            style={{ 
              // A slight negative margin prevents 1px gaps between columns sometimes seen in browsers
              marginLeft: i !== 0 ? "-2px" : "0",
              marginRight: "-2px",
            }}
          />
        ))}
      </div>

      {/* Content Layer (Numbers and Orbs) */}
      <motion.div
        animate={isDone ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10"
      >
        {/* Subtle background glow */}
        <div 
          className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-30"
          style={{ background: "#22d3ee" }}
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Solid Number Countdown */}
          <h1
            className="text-[120px] md:text-[200px] font-bold text-white leading-none select-none drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {Math.round(progress)}
          </h1>

          <div className="mt-4 text-cyan-400 text-sm tracking-[0.3em] font-bold uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {isDone ? "Systems Online" : "Loading Assets"}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
