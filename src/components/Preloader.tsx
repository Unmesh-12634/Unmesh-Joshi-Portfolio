import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING');

  useEffect(() => {
    const texts = ['INITIALIZING', 'LOADING ASSETS', 'PREPARING EXPERIENCE', 'ALMOST READY'];
    let currentIndex = 0;

    // Update progress - faster animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 3;
      });
    }, 25);

    // Update loading text
    const textInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setLoadingText(texts[currentIndex]);
    }, 600);

    // Complete after progress reaches 100 - shorter duration
    const timeout = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px]"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-32 h-32 rounded-full border-4 border-primary/30 border-t-primary"
            />
            
            {/* Inner rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border-4 border-secondary/30 border-t-secondary"
            />

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >
                UJ
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl mb-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
        >
          Unmesh Joshi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground mb-8"
        >
          Full Stack Developer & AI/ML Enthusiast
        </motion.p>

        {/* Loading text */}
        <motion.div
          key={loadingText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-primary text-sm mb-6 tracking-widest"
        >
          {loadingText}
        </motion.div>

        {/* Progress bar */}
        <div className="w-80 max-w-full mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-primary to-secondary relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-sm opacity-50" />
            </motion.div>
          </div>

          {/* Progress percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary text-sm mt-3"
          >
            {progress}%
          </motion.div>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full bg-primary"
            />
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-8 left-8 w-16 h-16 border-2 border-primary/20 rounded-lg"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-8 right-8 w-20 h-20 border-2 border-secondary/20 rounded-lg"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 right-12 w-12 h-12 border-2 border-primary/20 rotate-45"
      />
    </motion.div>
  );
}
