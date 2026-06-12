import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment count steadily
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment by small random numbers to feel organic
        const increment = Math.floor(Math.random() * 4) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Format progress to always show two digits (e.g., 03, 42, 99, 100)
  const formatProgress = (val: number) => {
    if (val < 10) return `0${val}`;
    return `${val}`;
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Smooth cubic slide-up
      onAnimationComplete={(definition) => {
        // Trigger onComplete when slide-up transition finishes
        if (progress === 100) {
          onComplete();
        }
      }}
      className="fixed inset-0 z-[10000] flex flex-col justify-between bg-sohub-black p-8 md:p-16 overflow-hidden bg-grid-lines bg-grain"
    >
      {/* Top Header metadata */}
      <div className="flex justify-between items-start text-xxs uppercase tracking-widest text-sohub-grey font-bold">
        <div>Unmesh Joshi &bull; Portfolio 2.0</div>
        <div>Udaipur, India</div>
      </div>

      {/* Center: Massive Geometric Counter */}
      <div className="flex flex-col items-center justify-center flex-grow select-none">
        <motion.div 
          className="text-[22vw] font-display-title font-extrabold text-sohub-white tracking-tighter leading-none"
          animate={{ scale: [1, 1.01, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {formatProgress(progress)}
        </motion.div>
        <div className="text-xxs uppercase tracking-widest text-sohub-grey font-semibold mt-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-sohub-white rounded-none animate-ping" />
          System Initialization
        </div>
      </div>

      {/* Bottom status indicator */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-xxs uppercase tracking-widest text-sohub-grey font-bold border-t border-sohub-dark-grey pt-6 gap-4">
        <div>Establishing connection...</div>
        <div>
          {progress === 100 ? 'Complete' : `Loading resources...`}
        </div>
      </div>
    </motion.div>
  );
}
