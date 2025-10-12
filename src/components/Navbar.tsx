import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/certificates', label: 'Certificates' },
  { path: '/experience', label: 'Experience' },
  { path: '/journey', label: 'Journey' },
  { path: '/contact', label: 'Contact' },
];

export function Navbar() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/30 border-b border-primary/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              UJ
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="relative group">
                <span className={`transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-primary'
                }`}>
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
              <span className="w-full h-0.5 bg-primary"></span>
              <span className="w-full h-0.5 bg-primary"></span>
              <span className="w-full h-0.5 bg-primary"></span>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
