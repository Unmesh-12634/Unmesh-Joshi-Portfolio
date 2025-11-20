import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, rotateY: 10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      exit={{ opacity: 0, x: -100, rotateY: -10 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
