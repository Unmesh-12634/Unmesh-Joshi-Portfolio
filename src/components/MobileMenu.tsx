import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, Variants } from 'motion/react';
import { useEffect } from 'react';
import FocusTrap from 'focus-trap-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/certificates', label: 'Certificates' },
  { path: '/hackathons', label: 'Hackathons' },
  { path: '/experience', label: 'Experience' },
  { path: '/journey', label: 'Journey' },
  { path: '/contact', label: 'Contact' },
];

const mobileMenuVariants: Variants = {
  open: {
    x: 0,
    transition: { type: 'spring', stiffness: 150, damping: 25, staggerChildren: 0.05, delayChildren: 0.1 },
  },
  closed: {
    x: '100%',
    transition: { type: 'spring', stiffness: 150, damping: 25, when: 'afterChildren' },
  },
};

const mobileLinkVariants: Variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
  closed: { x: 30, opacity: 0 },
};

function useEscapeClose(open: boolean, onClose: () => void) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);
}

export function MobileMenu({ isOpen, closeMenu }: { isOpen: boolean; closeMenu: () => void; }) {
  const location = useLocation();

  useEscapeClose(isOpen, closeMenu);

  return (
    <AnimatePresence>
      {isOpen && (
        <FocusTrap active={isOpen}>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={closeMenu}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 bottom-0 right-0 w-[calc(100vw-1.5rem)] max-w-xs bg-sohub-black border-l border-sohub-dark-grey z-50 p-8 flex flex-col justify-between"
            >
              <div className="flex-1 flex flex-col justify-center items-start">
                <nav className="flex flex-col gap-6 w-full">
                  {navLinks.map((link) => (
                    <motion.div key={link.path} variants={mobileLinkVariants}>
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`text-2xl font-semibold uppercase tracking-wider block transition-colors w-full text-left py-2 ${
                          location.pathname === link.path
                            ? 'text-sohub-white border-l-2 border-sohub-white pl-3'
                            : 'text-sohub-grey hover:text-sohub-white pl-0'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Extra details in side menu like local time */}
              <div className="text-xxs uppercase tracking-widest text-sohub-grey mt-6 pt-4 border-t border-sohub-dark-grey">
                &copy; 2026 Unmesh Joshi. All rights reserved.
              </div>
            </motion.div>
          </div>
        </FocusTrap>
      )}
    </AnimatePresence>
  );
}
