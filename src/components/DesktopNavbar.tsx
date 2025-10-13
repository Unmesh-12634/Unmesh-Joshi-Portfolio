import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const navLinksContainerVariants = {
	animate: {
		transition: { staggerChildren: 0.1, delayChildren: 0.8 },
	},
};

const navLinkVariants = {
	initial: { y: -20, opacity: 0 },
	animate: { y: 0, opacity: 1 },
};

export function DesktopNavbar() {
	const location = useLocation();

	return (
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

				<motion.div
					className="flex items-center gap-8"
					variants={navLinksContainerVariants}
					initial="initial"
					animate="animate"
				>
					{navLinks.map((link) => (
						<motion.div key={link.path} variants={navLinkVariants}>
							<Link to={link.path} className="relative group">
								<span
									className={`transition-colors ${
										location.pathname === link.path
												? 'text-primary'
												: 'text-foreground/70 hover:text-primary'
									}`}
								>
									{link.label}
								</span>
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
				</motion.div>
			</div>
		</motion.nav>
	);
}
