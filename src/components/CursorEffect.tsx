import { useEffect, useState } from 'react';

export function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-screen transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-60 animate-glow" />
          <div className="absolute inset-2 bg-primary rounded-full" />
        </div>
      </div>
      
      {/* Ripple effect */}
      <div
        className="fixed pointer-events-none z-[9998] mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-12 h-12 border-2 border-primary/30 rounded-full animate-pulse-ring" />
      </div>
    </>
  );
}
