import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export function BackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  const initParticle = (particle: Partial<Particle>, canvas: HTMLCanvasElement): Particle => {
    particle.x = Math.random() * canvas.width;
    particle.y = Math.random() * canvas.height;
    particle.size = Math.random() * 2 + 0.5;
    particle.speedX = (Math.random() - 0.5) * 0.5;
    particle.speedY = (Math.random() - 0.5) * 0.5;
    particle.color = `hsl(${Math.random() * 60 + 200}, 100%, 70%)`;
    return particle as Particle;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particleCount = 500;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(initParticle({}, canvas));
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          initParticle(p, canvas);
        }

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
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
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: '#0a0f1a' }}
      />
    </div>
  );
}
