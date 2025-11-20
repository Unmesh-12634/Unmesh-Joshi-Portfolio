import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy, useState, useEffect } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CursorEffect } from './components/CursorEffect';
import { BackgroundScene } from './components/BackgroundScene';
import { Preloader } from './components/Preloader';
import { Toaster } from './components/ui/sonner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Skills = lazy(() => import('./pages/Skills').then(module => ({ default: module.Skills })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const Certificates = lazy(() => import('./pages/Certificates').then(module => ({ default: module.Certificates })));
const Experience = lazy(() => import('./pages/Experience').then(module => ({ default: module.Experience })));
const Journey = lazy(() => import('./pages/Journey').then(module => ({ default: module.Journey })));
const Events = lazy(() => import('./pages/Events').then(module => ({ default: module.Events })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-primary">Loading...</p>
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
          <Route path="/experience" element={<Experience />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Failsafe to hide preloader in case of an issue
    const failsafeTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Should be longer than the preloader's own timeout

    return () => clearTimeout(failsafeTimeout);
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onComplete={handlePreloaderComplete} />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen overflow-hidden"
          >
            {/* Animated Background Scene */}
            <BackgroundScene />

            {/* Custom Cursor */}
            <CursorEffect />

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
        )}
      </AnimatePresence>
    </Router>
  );
}