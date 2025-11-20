import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

const navLinks = [
	{ path: '/', label: 'Home' },
	{ path: '/about', label: 'About' },
	{ path: '/skills', label: 'Skills' },
	{ path: '/projects', label: 'Projects' },
	{ path: '/certificates', label: 'Certificates' },
	{ path: '/experience', label: 'Experience' },
	{ path: '/journey', label: 'Journey' },
	{ path: '/events', label: 'Events' },
	{ path: '/contact', label: 'Contact' },
];

const navbarVariants = {
	initial: { y: -100, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.5 },
	},
};

const logoVariants = {
	hover: {
		scale: 1.1,
		rotate: 5,
		transition: { type: 'spring', stiffness: 300, damping: 15 },
	},
};

const nameVariants = {
	hover: { color: 'var(--primary)' },
};

export function MobileNavbar() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMobileMenuOpen]);

	return (
		<>
			<motion.nav
				variants={navbarVariants}
				initial="initial"
				animate="animate"
				className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg saturate-180 bg-background/60 border-b border-primary/20 touch-manipulation"
style={{ WebkitBackdropFilter: 'blur(16px) saturate(1.8)' }}
			>
				<div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
					<Link to="/" aria-label="Home">
						<motion.div
							className="flex items-center gap-3"
							whileHover="hover"
						>
							<motion.img
								src="/assets/logo.png"
								alt="Site logo"
								className="w-10 h-10 lg:w-12 lg:h-12 rounded-md"
								variants={logoVariants}
							/>
							<motion.span
								className="text-lg font-semibold text-foreground/90 hidden xs:block"
								variants={nameVariants}
							>
								Unmesh Joshi
							</motion.span>
						</motion.div>
					</Link>

					<div>
						<motion.button
							aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={isMobileMenuOpen}
							onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
							className="p-2 rounded-md"
							whileTap={{ scale: 0.9 }}
						>
							<AnimatePresence mode="wait">
								<motion.div
									key={isMobileMenuOpen ? 'x' : 'menu'}
									initial={{ rotate: 90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: -90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									{isMobileMenuOpen ? <X /> : <Menu />}
								</motion.div>
							</AnimatePresence>
						</motion.button>
					</div>
				</div>
			</motion.nav>
			<MobileMenu isOpen={isMobileMenuOpen} closeMenu={() => setMobileMenuOpen(false)} />
		</>
	);
}