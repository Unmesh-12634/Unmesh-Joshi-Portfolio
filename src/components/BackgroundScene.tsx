import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
}

export function BackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    // Animation
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.fillStyle = 'rgba(10, 15, 26, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.1)';
      ctx.lineWidth = 1;

      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 1 - distance / 150;
            ctx.strokeStyle = `rgba(0, 229, 255, ${opacity * 0.2})`;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wave motion
        particle.y += Math.sin(particle.x * 0.01 + time) * 0.5;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        const size = (1000 - particle.z) / 1000 * 3;
        const alpha = (1000 - particle.z) / 1000;

        ctx.fillStyle = `rgba(0, 229, 255, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.fillStyle = `rgba(0, 229, 255, ${alpha * 0.3})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: '#0a0f1a' }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-[100px] animate-pulse" 
           style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[80px] animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '2s' }} />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}
      />

      {/* Floating shapes */}
      <div className="absolute top-20 left-20 w-4 h-4 border-2 border-primary/40 rotate-45 animate-float" 
           style={{ animationDuration: '6s' }} />
      <div className="absolute top-40 right-32 w-6 h-6 border-2 border-secondary/40 animate-float" 
           style={{ animationDuration: '8s', animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/3 w-3 h-3 border-2 border-primary/40 rounded-full animate-float" 
           style={{ animationDuration: '7s', animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/4 w-5 h-5 border-2 border-secondary/40 rotate-45 animate-float" 
           style={{ animationDuration: '9s', animationDelay: '3s' }} />

      {/* Energy waves */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute w-[200%] h-[200%] -left-1/2 -top-1/2"
             style={{
               background: 'radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 50%)',
               animation: 'rotate 30s linear infinite'
             }} />
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
