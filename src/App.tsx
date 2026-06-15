import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy, useEffect } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackgroundScene } from './components/BackgroundScene';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Skills = lazy(() => import('./pages/Skills').then(module => ({ default: module.Skills })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const Certificates = lazy(() => import('./pages/Certificates').then(module => ({ default: module.Certificates })));
const Hackathons = lazy(() => import('./pages/Hackathons').then(module => ({ default: module.Hackathons })));
const Experience = lazy(() => import('./pages/Experience').then(module => ({ default: module.Experience })));
const Journey = lazy(() => import('./pages/Journey').then(module => ({ default: module.Journey })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-primary font-mono text-xs uppercase tracking-widest">Loading...</p>
            </div>
          </div>
        }
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target instanceof HTMLImageElement ||
        target.closest('img') ||
        (target.style.backgroundImage && target.style.backgroundImage !== 'none')
      ) {
        e.clipboardData?.setData('text/plain', 'You cannot copy this asset. It belongs to Unmesh Joshi.');
        e.preventDefault();
        toast.warning('Action Blocked', {
          description: 'This asset is protected. It belongs to Unmesh Joshi.',
        });
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target instanceof HTMLImageElement || target.closest('img')) {
        e.preventDefault();
        navigator.clipboard.writeText('You cannot copy this asset. It belongs to Unmesh Joshi.').catch(() => {});
        toast.warning('Action Blocked', {
          description: 'Right-click is disabled on images to protect assets.',
        });
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target instanceof HTMLImageElement || target.closest('img')) {
        e.preventDefault();
        toast.warning('Action Blocked', {
          description: 'Image dragging is disabled to protect assets.',
        });
      }
    };

    document.addEventListener('copy', handleCopy);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <Router>
      <motion.div
        key="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen overflow-hidden"
      >
        {/* Animated Background Scene */}
        <BackgroundScene />

        {/* Global Toaster for notifications */}
        <Toaster />

        <Navbar />

        {/* Content */}
        <div className="relative z-10">
          <main className="pt-16 sm:pt-20">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </motion.div>
    </Router>
  );
}