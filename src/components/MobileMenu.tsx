import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import FocusTrap from 'focus-trap-react';

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

const mobileMenuVariants = {
	open: {
		x: 0,
		transition: { type: 'spring', stiffness: 120, damping: 25, staggerChildren: 0.08, delayChildren: 0.2 },
	},
	closed: {
		x: '100%',
		transition: { type: 'spring', stiffness: 120, damping: 25, when: 'afterChildren' },
	},
};

const mobileLinkVariants = {
	open: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', stiffness: 200, damping: 20 },
	},
	closed: { x: 50, opacity: 0 },
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
							transition={{ duration: 0.3 }}
							className="fixed inset-0 bg-black/80 backdrop-blur-xl saturate-180 z-50"
							onClick={closeMenu}
						/>
						<motion.div
							variants={mobileMenuVariants}
							initial="closed"
							animate="open"
							exit="closed"
							className="fixed top-0 bottom-0 right-0 w-[calc(100vw-1rem)] max-w-xs bg-background/95 border-l border-primary/20 z-50 p-6 flex flex-col"
						>
							<div className="flex-1 flex flex-col justify-center items-start">
								<nav className="flex flex-col gap-8 w-full">
									{navLinks.map((link) => (
										<motion.div key={link.path} variants={mobileLinkVariants}>
											<Link
												to={link.path}
												onClick={closeMenu}
												className={`text-3xl font-medium transition-colors w-full text-left ${
													location.pathname === link.path
														? 'text-primary'
														: 'text-foreground/70 hover:text-primary'
												}`}
											>
												{link.label}
												{location.pathname === link.path && (
													<motion.div
														layoutId="navbar-indicator"
														className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
														transition={{ type: 'spring', stiffness: 500, damping: 30 }}
													/>
												)}
											</Link>
										</motion.div>
									))}
								</nav>
							</div>
						</motion.div>
					</div>
				</FocusTrap>
			)}
		</AnimatePresence>
	);
}