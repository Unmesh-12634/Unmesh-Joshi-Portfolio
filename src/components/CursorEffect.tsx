import { useEffect, useState, useRef } from 'react';

export function CursorEffect() {
  const [isMobile, setIsMobile] = useState(true);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // matches md:hidden break
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);

      const target = e.target as HTMLElement;
      setIsHovered(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isMobile]);

  // Animate the outer trail ring with a smooth follow-delay (linear interpolation)
  useEffect(() => {
    if (isMobile) return;

    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Adjust follow speed (0.15 gives a smooth lag effect)
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      requestRef.current = requestAnimationFrame(updateTrail);
    };
    
    requestRef.current = requestAnimationFrame(updateTrail);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isMobile, position]);

  if (isMobile || isHidden) return null;

  return (
    <>
      {/* Inner Dot - moves instantly */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-1.5 h-1.5 bg-sohub-white rounded-full" />
      </div>
      
      {/* Outer Follow Ring - smooth lag transition */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference transition-transform duration-200 hidden md:block"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
        }}
      >
        <div 
          className={`w-7 h-7 border rounded-full transition-colors duration-300 ${
            isHovered 
              ? 'border-sohub-white bg-sohub-white/10' 
              : 'border-sohub-white/40 bg-transparent'
          }`} 
        />
      </div>
    </>
  );
}
