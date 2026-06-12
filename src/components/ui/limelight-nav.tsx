import React, { useState, useRef, useLayoutEffect, cloneElement } from 'react';

// --- Internal Types and Defaults ---

const DefaultHomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);
const DefaultCompassIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
);
const DefaultBellIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export type NavItem = {
  id: string | number;
  icon: React.ReactElement<any>;
  label?: string;
  onClick?: () => void;
};

const defaultNavItems: NavItem[] = [
  { id: 'default-home', icon: <DefaultHomeIcon />, label: 'Home' },
  { id: 'default-explore', icon: <DefaultCompassIcon />, label: 'Explore' },
  { id: 'default-notifications', icon: <DefaultBellIcon />, label: 'Notifications' },
];

export type LimelightNavProps = {
  items?: NavItem[];
  defaultActiveIndex?: number;
  activeIndex?: number; // Support for controlled activeIndex from route logic
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
  showLabels?: boolean; // Toggle text labels alongside icons
};

/**
 * An adaptive-width navigation bar with a "limelight" effect that highlights the active item.
 */
export const LimelightNav = ({
  items = defaultNavItems,
  defaultActiveIndex = 0,
  activeIndex: controlledActiveIndex,
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName,
  showLabels = true,
}: LimelightNavProps) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState(defaultActiveIndex);
  const activeIndex = controlledActiveIndex !== undefined ? controlledActiveIndex : internalActiveIndex;
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];
    
    if (limelight && activeItem) {
      const newLeft = activeItem.offsetLeft;
      const newWidth = activeItem.offsetWidth;
      limelight.style.left = `${newLeft}px`;
      limelight.style.width = `${newWidth}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [activeIndex, isReady, items]);

  if (items.length === 0) {
    return null; 
  }

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    if (controlledActiveIndex === undefined) {
      setInternalActiveIndex(index);
    }
    onTabChange?.(index);
    itemOnClick?.();
  };

  return (
    <nav className={`relative inline-flex items-center h-16 rounded-lg bg-card text-foreground border px-2 ${className || ''}`}>
      {items.map(({ id, icon, label, onClick }, index) => (
        <a
          key={id}
          ref={(el) => { navItemRefs.current[index] = el; }}
          className={`relative z-20 flex h-full cursor-pointer items-center justify-center px-4 md:px-5 select-none ${iconContainerClassName || ''}`}
          onClick={() => handleItemClick(index, onClick)}
          aria-label={label}
        >
          <span className="flex items-center gap-2">
            {cloneElement(icon as React.ReactElement<{ className?: string }>, {
              className: `w-4 h-4 transition-opacity duration-200 ease-in-out ${
                activeIndex === index ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'
              } ${icon.props.className || ''} ${iconClassName || ''}`,
            } as any)}
            {showLabels && label && (
              <span
                className={`text-[10px] uppercase font-bold tracking-widest transition-colors duration-200 ${
                  activeIndex === index ? 'text-sohub-white font-bold' : 'text-sohub-grey hover:text-sohub-white'
                }`}
              >
                {label}
              </span>
            )}
          </span>
        </a>
      ))}

      <div 
        ref={limelightRef}
        className={`absolute top-0 z-10 h-[3px] rounded-full bg-primary shadow-[0_5px_15px_var(--primary)] ${
          isReady ? 'transition-[left,width] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]' : ''
        } ${limelightClassName || ''}`}
        style={{ left: '-999px', width: '0px' }}
      >
        {/* Light beam (spotlight cone) */}
        <div className="absolute left-[10%] right-[10%] top-[3px] h-[52px] [clip-path:polygon(15%_100%,35%_0,65%_0,85%_100%)] bg-gradient-to-b from-primary/30 to-transparent pointer-events-none" />
        
        {/* Falling ground light pool/glow */}
        <div className="absolute top-[53px] left-[18%] right-[18%] h-[2px] rounded-full bg-primary/45 shadow-[0_0_8px_var(--primary)] pointer-events-none" />
      </div>
    </nav>
  );
};
