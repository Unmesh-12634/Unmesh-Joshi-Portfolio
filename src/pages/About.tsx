import React, { useEffect, useRef, useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { Target, BookOpen, Globe, ArrowUpRight } from 'lucide-react';
import { useTheme } from 'next-themes';


// Reusable Interactive 3D Tilt Card Component
interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

function TiltCard({ children, className, style, ...props }: TiltCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    setRotateX((yc - y) / 15);
    setRotateY((x - xc) / 15);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const shadow = resolvedTheme === 'light' 
    ? (isHovered ? '0 20px 40px rgba(12, 16, 22, 0.08), 0 1px 3px rgba(12, 16, 22, 0.02)' : '0 10px 20px rgba(12, 16, 22, 0.03), 0 1px 2px rgba(12, 16, 22, 0.01)')
    : (isHovered ? '0 30px 60px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.4)' : '0 15px 30px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)');

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-300 ${className}`}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transformStyle: 'preserve-3d',
        boxShadow: shadow,
        ...style
      }}
      {...props}
    >
      <div style={{ transform: isHovered ? 'translateZ(25px)' : 'translateZ(0px)', transition: 'transform 0.2s ease-out' }}>
        {children}
      </div>
    </div>
  );
}

export function About() {
  const { resolvedTheme } = useTheme();

  return (
    <PageTransition>
      <div className="bg-sohub-black text-sohub-white min-h-screen overflow-x-hidden relative">
        
        {/* Soft Ambient Background Highlights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sohub-dark-grey/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sohub-dark-grey/5 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">
          
          {/* Header Title */}
          <div className="border-b border-sohub-dark-grey pb-8 mb-16">
            <span className="text-xxs uppercase tracking-widest text-sohub-grey font-semibold block mb-2">Studio & Bio</span>
            <h1 className="text-4xl md:text-7xl font-display-title font-extrabold uppercase leading-none text-sohub-white">
              ABOUT UNMESH
            </h1>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Biography & Core Focus (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Bio Block: Narrative Biography */}
              <div className="space-y-4">
                <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-sohub-white" /> Biography
                </span>
                
                <TiltCard className="border border-sohub-dark-grey bg-sohub-dark-grey/15 p-8 md:p-12 hover:border-sohub-white/20">
                  <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-sohub-white font-display mb-6">
                    Engineering intelligent systems.<br />Building experiences that matter.
                  </h2>
                  <div className="space-y-4 text-xs md:text-sm text-sohub-grey font-medium leading-relaxed">
                    <p>
                      I'm a{' '}
                      <strong className="text-sohub-white">B.Tech Computer Science &amp; Engineering student</strong>{' '}
                      at <strong className="text-sohub-white">Techno India NJR, Udaipur</strong>, focused on{' '}
                      <strong className="text-sohub-white">Artificial Intelligence</strong>,{' '}
                      <strong className="text-sohub-white">Machine Learning</strong>, and{' '}
                      <strong className="text-sohub-white">Full-Stack Development</strong>.
                      My work revolves around building intelligent systems, AI-powered products, and scalable web applications that combine strong engineering with meaningful user experiences.
                    </p>
                    <p>
                      I've built everything from{' '}
                      <strong className="text-sohub-white">RAG pipelines</strong> and computer vision models to full-stack platforms and interactive digital products —
                      always translating complex ideas into practical, real-world solutions.
                    </p>
                    <p>
                      Competing in{' '}
                      <strong className="text-sohub-white">20+ national-level hackathons</strong>{' '}
                      and leading teams across AI and software engineering domains, my team secured{' '}
                      <strong className="text-sohub-white">1st Place at Google Lakecity Hackathon 2026</strong>{' '}
                      for building <strong className="text-sohub-white">Meducators</strong> — an AI-powered medical learning platform focused on enhancing healthcare education through intelligent learning experiences.
                    </p>
                    <p>
                      Beyond building systems, I serve as the{' '}
                      <strong className="text-sohub-white">HackerRank College Ambassador</strong>{' '}
                      for my campus. In this role, I organize coding contests, mentor fellow students in data structures and algorithms, and drive a vibrant competitive coding culture on campus.
                    </p>
                    <p>
                      I believe great products emerge from the intersection of{' '}
                      <strong className="text-sohub-white">engineering, creativity, and problem-solving</strong>.
                      Whether developing AI workflows, designing full-stack systems, or collaborating with a team —
                      the goal stays the same: build technology that creates measurable impact.
                    </p>
                  </div>
                </TiltCard>
              </div>

              {/* Research Block: Core Focus Areas */}
              <div className="space-y-4 pt-4 border-t border-sohub-dark-grey/50">
                <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-sohub-white" /> Core Focus Areas
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'AI & Machine Learning', detail: 'RAG systems, computer vision, LLM integration, model deployment' },
                    { label: 'Full-Stack Engineering', detail: 'React, Next.js, Node.js, FastAPI, SQL/NoSQL databases' },
                    { label: 'Community & Leadership', detail: 'HackerRank College Ambassador, tech community mentor, and leading 20+ national hackathon teams' },
                    { label: 'Product Design', detail: 'Interactive UI/UX, Three.js, real-world impact-driven builds' },
                  ].map(({ label, detail }) => (
                    <div key={label} className="border border-sohub-dark-grey bg-sohub-dark-grey/10 p-5 hover:border-sohub-white/20 transition-colors">
                      <h4 className="text-[11px] font-bold text-sohub-white uppercase tracking-wider mb-1.5">{label}</h4>
                      <p className="text-[11px] text-sohub-grey leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Profile Photo + Vision (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6">

              {/* Profile Photo Card — top-aligned with Biography */}
              <TiltCard className="border border-sohub-dark-grey hover:border-sohub-white/30 overflow-hidden group relative">
                <div className="relative h-[480px] overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Unmesh Joshi"
                    className="w-full h-full object-cover object-[center_10%] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Black scrim at bottom for label */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

                  {/* Name / Role label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-white/50 block mb-1">UNMESH JOSHI</span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-white">AI Engineer · Full-Stack Developer</span>
                  </div>

                  {/* Top-right status badge */}
                  <div className="absolute top-4 right-4 bg-black/60 border border-white/10 px-2.5 py-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse block" />
                    <span className="text-[9px] font-mono uppercase tracking-widest text-white/70">Available</span>
                  </div>
                </div>
              </TiltCard>

              {/* Vision Statement Box */}
              <TiltCard className="border border-sohub-dark-grey bg-sohub-dark-grey/15 p-8 hover:border-sohub-white/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-sohub-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <p className="text-xs italic text-sohub-grey leading-relaxed relative z-10">
                  "Digital interaction shouldn't be passive. I design web ecosystems that breathe, react, and respond to human actions, merging strict system utility with visceral visual delight."
                </p>
                <div className="flex justify-end mt-4 relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sohub-white flex items-center gap-1">
                    Philosophy <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </TiltCard>

              {/* Interactive Info Footer */}
              <div className="pt-2 flex items-center gap-3 text-xxs font-bold text-sohub-grey tracking-widest uppercase pointer-events-none select-none">
                <Globe className="w-4 h-4 text-sohub-white animate-spin-slow animate-pulse" /> Hover on cards to tilt
              </div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </PageTransition>
  );
}
