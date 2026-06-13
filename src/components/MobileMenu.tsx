import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, Variants } from 'motion/react';
import FocusTrap from 'focus-trap-react';
import { Home, User, Cpu, FolderKanban, Award, Trophy, Briefcase, Compass, Mail } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
  { path: '/about', label: 'About', icon: <User className="w-5 h-5" /> },
  { path: '/skills', label: 'Skills', icon: <Cpu className="w-5 h-5" /> },
  { path: '/projects', label: 'Projects', icon: <FolderKanban className="w-5 h-5" /> },
  { path: '/certificates', label: 'Certificates', icon: <Award className="w-5 h-5" /> },
  { path: '/hackathons', label: 'Hackathons', icon: <Trophy className="w-5 h-5" /> },
  { path: '/experience', label: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
  { path: '/journey', label: 'Journey', icon: <Compass className="w-5 h-5" /> },
  { path: '/contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
];

const mobileMenuVariants: Variants = {
  open: {
    x: 0,
    transition: { type: 'spring', stiffness: 150, damping: 25, staggerChildren: 0.04, delayChildren: 0.15 },
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
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);
  
  const [activeIndex, setActiveIndex] = useState(() => 
    navLinks.findIndex(link => link.path === location.pathname)
  );
  const [isReady, setIsReady] = useState(false);

  useEscapeClose(isOpen, closeMenu);

  useEffect(() => {
    const idx = navLinks.findIndex(link => link.path === location.pathname);
    if (idx !== -1) {
      setActiveIndex(idx);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen || activeIndex === -1) {
      setIsReady(false);
      return;
    }
    
    const timer = setTimeout(() => {
      const limelight = limelightRef.current;
      const activeItem = itemRefs.current[activeIndex];
      const navContainer = activeItem?.closest('nav');
      
      if (limelight && activeItem && navContainer) {
        // Recursively compute offset relative to the nav container to bypass transform offsetParent issues
        let offsetTop = 0;
        let current: HTMLElement | null = activeItem;
        while (current && current !== navContainer) {
          offsetTop += current.offsetTop;
          current = current.offsetParent as HTMLElement | null;
        }

        const height = activeItem.offsetHeight;
        limelight.style.top = `${offsetTop}px`;
        limelight.style.height = `${height}px`;
        limelight.style.opacity = '1';
        setIsReady(true);
      }
    }, 180);

    return () => clearTimeout(timer);
  }, [isOpen, activeIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <FocusTrap active={isOpen}>
          <div>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50"
              onClick={closeMenu}
            />
            
            {/* Sliding Mobile Sidebar */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 bottom-0 right-0 w-[calc(100vw-2rem)] max-w-[290px] bg-sohub-black border-l border-sohub-dark-grey z-50 p-6 pt-24 flex flex-col justify-between overflow-hidden"
            >
              {/* Backlight Ambient Glow Effect */}
              <div className="absolute top-1/4 -right-12 w-48 h-48 rounded-full bg-sohub-white/5 blur-[60px] pointer-events-none z-0" />
              <div className="absolute bottom-1/4 -left-12 w-40 h-40 rounded-full bg-sohub-white/3 blur-[50px] pointer-events-none z-0" />

              {/* Side edge border-glow (visual side light) */}
              <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent pointer-events-none z-10" />

              <div className="flex-1 flex flex-col justify-start items-start relative z-10 w-full">
                {/* Menu Header Title */}
                <div className="w-full mb-8 pb-3 border-b border-sohub-dark-grey/50">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sohub-grey font-bold">
                    Navigation Menu
                  </span>
                </div>

                <nav className="relative flex flex-col gap-4 w-full pl-5 border-l border-sohub-dark-grey/40">
                  
                  {/* Vertical Limelight Side Light Indicator */}
                  <div
                    ref={limelightRef}
                    className={`absolute left-[-1.5px] z-10 w-[2.5px] rounded-full bg-primary shadow-[0_0_8px_var(--primary),0_0_15px_var(--primary)] pointer-events-none opacity-0 ${
                      isReady ? 'transition-[top,height,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]' : ''
                    }`}
                    style={{ top: '0px', height: '0px' }}
                  >
                    {/* Spotlight smooth glow projecting rightwards */}
                    <div className="absolute left-[2.5px] top-1/2 -translate-y-1/2 w-[180px] h-[55px] bg-gradient-to-r from-primary/18 via-primary/3 to-transparent blur-md pointer-events-none" />
                    
                    {/* Extra radial core glow */}
                    <div className="absolute left-[2.5px] top-1/2 -translate-y-1/2 w-[80px] h-[35px] bg-primary/15 rounded-full blur-sm pointer-events-none" />
                  </div>

                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.div key={link.path} variants={mobileLinkVariants} className="w-full">
                        <Link
                          to={link.path}
                          onClick={closeMenu}
                          ref={(el) => { itemRefs.current[index] = el; }}
                          className={`text-base font-bold uppercase tracking-wider block transition-colors w-full text-left py-2 flex items-center gap-4 ${
                            isActive ? 'text-sohub-white' : 'text-sohub-grey hover:text-sohub-white'
                          }`}
                        >
                          <span className={`w-5 h-5 transition-all duration-300 flex items-center justify-center ${
                            isActive 
                              ? 'text-sohub-white scale-110 opacity-100' 
                              : 'text-sohub-grey opacity-45'
                          }`}>
                            {link.icon}
                          </span>
                          <span className="font-display tracking-[0.16em] text-sm uppercase font-bold">
                            {link.label}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Extra details in side menu like copyright */}
              <div className="text-[9px] font-mono tracking-widest text-sohub-grey uppercase mt-6 pt-4 border-t border-sohub-dark-grey/50 relative z-10">
                &copy; 2026 Unmesh Joshi.
              </div>
            </motion.div>
          </div>
        </FocusTrap>
      )}
    </AnimatePresence>
  );
}
