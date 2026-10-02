import React, { useEffect, useRef, useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { Target, BookOpen, Globe, ArrowUpRight, Github, Linkedin } from 'lucide-react';
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
                    Engineering full-stack systems.<br />Architecting intelligent AI solutions.
                  </h2>
                  <div className="space-y-4 text-xs md:text-sm text-sohub-grey font-medium leading-relaxed">
                    <p>
                      I am a{' '}
                      <strong className="text-sohub-white">Computer Science &amp; Engineering student</strong>{' '}
                      at <strong className="text-sohub-white">Techno NJR Institute of Technology, Udaipur</strong>{' '}
                      (currently in 3rd Year / 5th Semester) and a{' '}
                      <strong className="text-sohub-white">Full Stack Java &amp; AI/ML Developer</strong>.
                      My work centers on building enterprise full-stack software, RAG architectures, multimodal AI assistants, and rapid hackathon solutions.
                    </p>
                    <p>
                      I completed an{' '}
                      <strong className="text-sohub-white">Advanced Diploma in Full Stack Java Development</strong>{' '}
                      at <strong className="text-sohub-white">Cranes Varsity</strong>, mastering Java 17, Spring Boot, Maven, JPA, Hibernate, REST APIs, H2 Database, and SQL. Following this training, I served as{' '}
                      <strong className="text-sohub-white">Project Lead / Intern</strong> at Cranes Varsity for the{' '}
                      <strong className="text-sohub-white">CDA Student Mobile Application</strong> (July – August 2026), steering application development, full-stack implementation, and end-to-end functionality integration.
                    </p>
                    <p>
                      As an active hackathon builder and finalist in{' '}
                      <strong className="text-sohub-white">15+ national hackathons</strong>, my team secured{' '}
                      <strong className="text-sohub-white">1st Place at Google Lakecity Hackathon 2026</strong>{' '}
                      among 3,000+ teams for building <strong className="text-sohub-white">Meducators</strong>,{' '}
                      <strong className="text-sohub-white">1st Runner Up at SPSU Udaipur</strong>,{' '}
                      <strong className="text-sohub-white">Top 40 at Microsoft Gurgaon</strong>, and developed{' '}
                      <strong className="text-sohub-white">AeroX</strong> for <strong className="text-sohub-white">Smart India Hackathon (SIH) 2026</strong>.
                    </p>
                    <p>
                      Beyond development, I serve as the{' '}
                      <strong className="text-sohub-white">HackerRank College Ambassador</strong>{' '}
                      for Techno NJR, driving algorithm workshops, coding contests, and mentoring peers in data structures and problem solving.
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
                    { label: 'Full Stack Java & Modern Web', detail: 'Java 17, Spring Boot, Maven, Hibernate/JPA, REST APIs, React.js, Next.js, Tailwind CSS' },
                    { label: 'AI / ML & Generative AI', detail: 'RAG systems, ChromaDB, multi-agent frameworks, LLM integration, Python, FastAPI' },
                    { label: 'Hackathons & Rapid Prototyping', detail: 'Winner at Google Lakecity (3000+ teams), SIH 2026 (AeroX), SPSU 1st Runner Up, 15+ finalist records' },
                    { label: 'Leadership & Community', detail: 'Project Lead at Cranes Varsity, HackerRank College Ambassador, campus coding mentor' },
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
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white block">
                      Full Stack Java · AI/ML Developer · Hackathon Builder
                    </span>
                  </div>

                  {/* Top-right status badge */}
                  <div className="absolute top-4 right-4 bg-black/60 border border-white/10 px-2.5 py-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse block" />
                    <span className="text-[9px] font-mono uppercase tracking-widest text-white/70">Available</span>
                  </div>
                </div>
              </TiltCard>

              {/* Profile Links Stack */}
              <div className="flex flex-col gap-3 w-full">
                {/* LinkedIn Profile Link */}
                <a
                  href="https://www.linkedin.com/in/unmesh-joshi-b0846431b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between border border-sohub-dark-grey bg-sohub-dark-grey/15 p-5 hover:border-sohub-white/20 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-sohub-white" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-sohub-white font-mono">
                      LinkedIn Profile
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-sohub-grey group-hover:text-sohub-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* GitHub Profile Link */}
                <a
                  href="https://github.com/Unmesh-12634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between border border-sohub-dark-grey bg-sohub-dark-grey/15 p-5 hover:border-sohub-white/20 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-sohub-white" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-sohub-white font-mono">
                      GitHub Profile
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-sohub-grey group-hover:text-sohub-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Google Skills Profile Link Button */}
                <a
                  href="https://www.skills.google/public_profiles/b0a2a4d6-42e7-4e6f-9c78-2e729195cee6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between border border-sohub-dark-grey bg-sohub-dark-grey/15 p-5 hover:border-sohub-white/20 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex font-extrabold text-xs tracking-tighter">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">o</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#34A853]">l</span>
                      <span className="text-[#EA4335]">e</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-sohub-white font-mono">
                      Developer Skills Profile
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-sohub-grey group-hover:text-sohub-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

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
