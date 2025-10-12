import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { ChevronRight, Code, Sparkles } from 'lucide-react';

export function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Welcome to my digital universe</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
          >
            Hi, I'm Unmesh Joshi 👋
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 space-y-2"
          >
            <p className="text-2xl md:text-4xl text-foreground/90">
              Full Stack Developer
            </p>
            <p className="text-xl md:text-2xl text-primary/80">
              AI & ML Enthusiast
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Building intelligent solutions that bridge creativity and technology.
            Passionate about crafting seamless digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 text-background font-medium">
                  Explore My World
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </Link>

            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary rounded-lg text-primary hover:bg-primary/10 transition-colors flex items-center gap-2"
              >
                <Code className="w-5 h-5" />
                View Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
