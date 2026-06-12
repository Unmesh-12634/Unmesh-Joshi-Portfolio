import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, Variants } from 'motion/react';
import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Home, User, Cpu, FolderKanban, Award, Trophy, Briefcase, Compass, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';
import FocusTrap from 'focus-trap-react';
import { LimelightNav } from './ui/limelight-nav';

const navLinks = [
  { path: '/', label: 'Home', icon: <Home /> },
  { path: '/about', label: 'About', icon: <User /> },
  { path: '/skills', label: 'Skills', icon: <Cpu /> },
  { path: '/projects', label: 'Projects', icon: <FolderKanban /> },
  { path: '/certificates', label: 'Certificates', icon: <Award /> },
  { path: '/hackathons', label: 'Hackathons', icon: <Trophy /> },
  { path: '/experience', label: 'Experience', icon: <Briefcase /> },
  { path: '/journey', label: 'Journey', icon: <Compass /> },
  { path: '/contact', label: 'Contact', icon: <Mail /> },
];

const navbarVariants: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 24, delay: 0.2 },
  },
};

const navLinksContainerVariants: Variants = {
  animate: {
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
};

const navLinkVariants: Variants = {
  initial: { y: -15, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 150, damping: 20 } },
};

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const activeIndex = navLinks.findIndex((link) => link.path === location.pathname);
  const safeActiveIndex = activeIndex !== -1 ? activeIndex : 0;

  const navItems = navLinks.map((link) => ({
    id: link.path,
    icon: link.icon,
    label: link.label,
    onClick: () => navigate(link.path),
  }));

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        className="fixed top-0 left-0 right-0 z-50 bg-sohub-black/85 backdrop-blur-md border-b border-sohub-dark-grey touch-manipulation overflow-hidden"
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" aria-label="Home" className="group">
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
              <div className="w-8 h-8 bg-sohub-white text-sohub-black font-display font-bold flex items-center justify-center text-sm tracking-tighter">
                UJ
              </div>
              <span className="text-sm font-semibold tracking-wider text-sohub-white uppercase transition-colors group-hover:text-sohub-grey">
                Unmesh Joshi
              </span>
            </motion.div>
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center">
              <LimelightNav
                items={navItems}
                activeIndex={safeActiveIndex}
                className="bg-transparent border-0 h-auto py-0 px-0"
                iconContainerClassName="py-2.5 px-3"
              />
            </div>

            {/* Theme Toggle Button */}
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                className="p-2 border border-sohub-dark-grey bg-sohub-dark-grey/40 text-sohub-white hover:border-sohub-white/20 transition-all flex items-center justify-center cursor-pointer"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>
            )}

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-sohub-white hover:text-sohub-grey"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? 'x' : 'menu'}
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <MobileMenu isOpen={isMobileMenuOpen} closeMenu={() => setMobileMenuOpen(false)} />
    </>
  );
}

import { MobileMenu } from './MobileMenu';
