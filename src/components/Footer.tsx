import { motion } from 'motion/react';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="relative mt-20 py-8 border-t border-primary/20 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">
          © 2025 Unmesh Joshi. Crafted with passion and code.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
          <p className="text-sm text-primary/70">Building the future, one line at a time</p>
          <div className="w-2 h-2 rounded-full bg-secondary animate-glow"></div>
        </div>
      </div>
    </motion.footer>
  );
}
