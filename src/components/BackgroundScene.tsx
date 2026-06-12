import { useEffect, useRef } from 'react';

export function BackgroundScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add mouse move listener to slightly shift a soft glow highlight in the background
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      containerRef.current.style.setProperty('--mouse-x', `${x}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-50 overflow-hidden bg-sohub-black bg-grain transition-colors duration-500"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      } as React.CSSProperties}
    >
      {/* Soft interactive radial ambient highlight */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 transition-all duration-300"
        style={{
          background: 'radial-gradient(circle 600px at var(--mouse-x) var(--mouse-y), rgba(30, 41, 59, 0.5), transparent 80%)'
        }}
      />
      
      {/* Edge vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(12,16,22,0.8)_100%)]" />
    </div>
  );
}
