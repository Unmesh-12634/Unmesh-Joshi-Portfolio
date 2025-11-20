import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'primary' | 'secondary' | 'accent';
  onClick?: () => void;
}

export function Card({ children, className = '', glowColor = 'primary', onClick }: CardProps) {
  const glowColors = {
    primary: 'hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]',
    secondary: 'hover:shadow-[0_0_30px_rgba(124,77,255,0.3)]',
    accent: 'hover:shadow-[0_0_30px_rgba(255,0,110,0.3)]',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateY: 5 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative overflow-hidden rounded-xl 
        bg-card/50 backdrop-blur-sm
        border border-primary/20
        p-6 cursor-pointer
        transition-all duration-300
        ${glowColors[glowColor]}
        ${className}
      `}
      onClick={onClick}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated border glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-pulse" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
