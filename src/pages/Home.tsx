import React, { Suspense, useRef, useState, useEffect, useCallback } from 'react';
import type { Application } from '@splinetool/runtime';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';
import { 
  ArrowUpRight, Github, ExternalLink, Cpu, Code, Layers, Users, 
  Lightbulb, Trophy, Award, Calendar, Terminal, MapPin, Mail, Linkedin, FileText
} from 'lucide-react';

// Per-card scroll-triggered 3D tilt reveal animation wrapper
function ProjectCardReveal({ children, idx }: { children: React.ReactNode; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 88%', 'start 22%'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const scale   = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <div ref={ref} style={{ perspective: '1200px' }} className="relative">
      <motion.div
        style={{ rotateX, scale, opacity, transformOrigin: 'center top' }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Project Card Content
function ProjectCard({ proj, idx }: { proj: any; idx: number }) {
  const isEven = idx % 2 === 0;

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-sohub-dark-grey bg-sohub-black overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-none"
    >
      {/* Visual Canvas Block (Span 7) */}
      <div
        className={`lg:col-span-7 h-[300px] md:h-[380px] bg-sohub-black flex items-center justify-center p-6 relative overflow-hidden border-b lg:border-b-0 ${
          isEven ? 'lg:border-r border-sohub-dark-grey lg:order-1' : 'lg:border-l border-sohub-dark-grey lg:order-2'
        }`}
      >
        <div className="absolute top-4 left-4 text-[10px] font-bold text-sohub-grey tracking-widest uppercase font-mono z-20">
          SEC_0{idx + 1} // Visual Matrix
        </div>

        
        {/* Project image visual — full bleed with overlay metadata */}
        {proj.image && (
          <div className="absolute inset-0 overflow-hidden">
            {/* Image */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Bottom-left metadata */}
            <div className="absolute bottom-5 left-5 font-mono text-[8px] text-sohub-white/60 flex flex-col gap-0.5">
              {proj.meta?.map((m: string) => <span key={m}>{m}</span>)}
            </div>
            {/* Bottom-right status */}
            {proj.status && (
              <div className="absolute bottom-5 right-5 font-mono text-[8px] text-sohub-white/60 text-right">
                {proj.status}
              </div>
            )}
          </div>
        )}

        <div className="absolute top-4 right-4 flex justify-between items-center z-20">
          <span className="text-[10px] font-bold text-sohub-white uppercase bg-sohub-dark-grey px-2.5 py-1 border border-sohub-dark-grey">
            {proj.category}
          </span>
        </div>
      </div>

      {/* Content Block (Span 5) */}
      <div
        className={`lg:col-span-5 flex flex-col justify-between ${
          isEven ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <div className="p-4 md:p-5 border-b border-sohub-dark-grey">
          <span className="text-[10px] uppercase font-bold tracking-widest text-sohub-grey font-mono block">Project Showcase</span>
          <h4 className="text-2xl font-extrabold uppercase tracking-tight text-sohub-white mt-1 font-display">
            {proj.title}
          </h4>
        </div>

        <div className="flex-1 divide-y divide-sohub-dark-grey text-xs">
          <div className="p-4 md:p-5 flex flex-col md:flex-row gap-1.5 md:gap-5">
            <span className="text-[10px] font-bold text-sohub-white uppercase tracking-widest min-w-[70px] block">Problem:</span>
            <p className="text-sohub-grey flex-1 leading-relaxed font-medium">{proj.problem}</p>
          </div>
          <div className="p-4 md:p-5 flex flex-col md:flex-row gap-1.5 md:gap-5">
            <span className="text-[10px] font-bold text-sohub-white uppercase tracking-widest min-w-[70px] block">Solution:</span>
            <p className="text-sohub-grey flex-1 leading-relaxed font-medium">{proj.solution}</p>
          </div>
          <div className="p-4 md:p-5 flex flex-col md:flex-row gap-1.5 md:gap-5">
            <span className="text-[10px] font-bold text-sohub-white uppercase tracking-widest min-w-[70px] block">Impact:</span>
            <p className="text-sohub-grey flex-1 leading-relaxed font-medium">{proj.impact}</p>
          </div>
        </div>

        <div className="p-4 md:p-5 border-t border-sohub-dark-grey bg-sohub-dark-grey/15 flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {proj.tech.map((t: string) => (
              <span key={t} className="text-[9px] uppercase font-bold text-sohub-white px-2 py-0.5 bg-sohub-black border border-sohub-dark-grey font-mono">
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-6 pt-2 border-t border-sohub-dark-grey/50">
            {proj.github && proj.github !== '#' && (
              <a 
                href={proj.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs uppercase font-bold text-sohub-white hover:text-sohub-grey transition-colors flex items-center gap-1.5 group/btn"
              >
                <Github className="w-4 h-4 group-hover/btn:scale-115 transition-transform" /> Code
              </a>
            )}
            {proj.live && proj.live !== '#' && (
              <a 
                href={proj.live} 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs uppercase font-bold text-sohub-white hover:text-sohub-grey transition-colors flex items-center gap-1.5 group/btn"
              >
                <ExternalLink className="w-4 h-4 group-hover/btn:scale-115 transition-transform" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Self-contained component for Expertise section to isolate hover state and prevent rendering lag on main page
function ExpertiseSection() {
  const [activeExpertise, setActiveExpertise] = useState<number | null>(null);

  const expertises = [
    {
      icon: <Cpu className="w-5 h-5" />,
      title: 'AI & Machine Learning',
      details: 'Building computer vision pipelines (OpenCV), model integration, data cleaning workflows, and deploying smart model inferences.',
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: 'Full Stack Development',
      details: 'Structuring responsive client layers with React/Next.js and solid server APIs utilizing Node.js, Express, and SQL databases.',
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: 'System Design',
      details: 'Designing scalable architectures, structured database schemas, and writing performant web integration loops.',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Hackathon Leadership',
      details: 'Leading multi-disciplinary teams under high-pressure timelines to conceptualize, design, and pitch functional prototypes.',
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Product Thinking',
      details: 'Analyzing user needs, wireframing workflows, and prioritizing features to build products that solve actual user problems.',
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-sohub-dark-grey border-y border-sohub-dark-grey">
      <div className="max-w-4xl mx-auto">
        <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold block mb-2">03 / Capabilities</span>
        <h3 className="text-3xl md:text-5xl font-display-title font-bold uppercase tracking-tight text-sohub-white mb-12">EXPERTISE</h3>
        
        <div className="border-t border-sohub-grey/20">
          {expertises.map((exp, index) => {
            const isSelected = activeExpertise === index;
            return (
              <div key={index} className="border-b border-sohub-grey/20">
                <button
                  onMouseEnter={() => setActiveExpertise(index)}
                  onMouseLeave={() => setActiveExpertise(null)}
                  className="w-full py-7 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-mono text-sohub-grey">0{index + 1}</span>
                    <span className="text-xl md:text-2xl font-bold text-sohub-white uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                      {exp.title}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-sohub-grey group-hover:text-sohub-white transition-colors duration-300" />
                </button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: isSelected ? 'auto' : 0, 
                    opacity: isSelected ? 1 : 0 
                  }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-12 pr-6 text-xs md:text-sm text-sohub-grey font-medium leading-relaxed max-w-xl flex gap-4 items-start">
                    <div className="p-2 border border-sohub-grey/25 text-sohub-white">
                      {exp.icon}
                    </div>
                    <p>{exp.details}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface HackathonCardProps {
  hack: {
    event: string;
    role: string;
    team: string;
    outcome: string;
    learning: string;
    theme: string;
  };
  idx: number;
}

function HackathonCard({ hack, idx }: HackathonCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    if (window.innerWidth < 768) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    // Calculate rotation (-12 to 12 degrees)
    const rotateX = -((y / height) - 0.5) * 16;
    const rotateY = ((x / width) - 0.5) * 16;

    // Update styling directly on DOM for 60fps performance
    card.style.transition = 'transform 0.1s ease-out';
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    glowRef.current.style.opacity = '1';
    glowRef.current.style.background = `radial-gradient(circle 180px at ${x}px ${y}px, rgba(255, 255, 255, 0.15), transparent 85%)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glowRef.current) return;

    const card = cardRef.current;
    card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease';
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

    glowRef.current.style.opacity = '0';
  };

  const isGold = hack.theme === 'gold';
  const isSilver = hack.theme === 'silver';

  let cardThemeClasses = "";
  let glowColor = "";
  let badgeClasses = "";
  let iconClasses = "";

  if (isGold) {
    cardThemeClasses = "border-amber-500/30 bg-gradient-to-br from-amber-500/[0.06] via-sohub-black to-sohub-black hover:border-amber-400 shadow-md shadow-amber-500/5 hover:shadow-[0_0_35px_rgba(245,158,11,0.18)]";
    badgeClasses = "text-amber-400 bg-amber-500/10 border-amber-500/35";
    iconClasses = "text-amber-400 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]";
    glowColor = "rgba(245, 158, 11, 0.08)";
  } else if (isSilver) {
    cardThemeClasses = "border-slate-400/30 bg-gradient-to-br from-slate-400/[0.06] via-sohub-black to-sohub-black hover:border-slate-300 shadow-md shadow-slate-400/5 hover:shadow-[0_0_35px_rgba(148,163,184,0.15)]";
    badgeClasses = "text-slate-300 bg-slate-400/10 border-slate-400/35";
    iconClasses = "text-slate-300 filter drop-shadow-[0_0_8px_rgba(148,163,184,0.4)]";
    glowColor = "rgba(148, 163, 184, 0.06)";
  } else {
    cardThemeClasses = "border-sohub-dark-grey bg-gradient-to-br from-zinc-900/[0.2] via-sohub-black to-sohub-black hover:border-sohub-white/20 shadow-md hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]";
    badgeClasses = "text-sohub-grey bg-sohub-dark-grey/40 border-sohub-dark-grey/50";
    iconClasses = "text-sohub-grey group-hover:text-sohub-white";
    glowColor = "rgba(255, 255, 255, 0.02)";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: '1000px' }}
      className="w-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`border p-8 flex flex-col justify-between h-[380px] group relative overflow-hidden rounded-none transition-all duration-300 ease-out cursor-pointer ${cardThemeClasses}`}
        style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' }}
      >
        {/* Mouse tracking glare overlay */}
        <div 
          ref={glowRef}
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 mix-blend-screen"
        />

        {/* Ambient background positional glow */}
        <div 
          className="absolute top-0 right-0 w-[140px] h-[140px] rounded-full blur-[45px] pointer-events-none -mr-8 -mt-8 transition-all duration-500"
          style={{ backgroundColor: glowColor }}
        />

        <div className="space-y-4 relative z-10" style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
          <div className="flex justify-between items-start" style={{ transform: 'translateZ(15px)' }}>
            <span className={`text-[10px] font-extrabold px-3 py-1 border uppercase tracking-widest ${badgeClasses}`}>
              {hack.outcome}
            </span>
            <Trophy className={`w-5 h-5 transition-transform duration-500 group-hover:scale-110 ${iconClasses}`} />
          </div>

          <h4 
            className="text-xl font-bold uppercase tracking-tight text-sohub-white pt-2 font-display transition-transform duration-300 group-hover:translate-x-0.5"
            style={{ transform: 'translateZ(25px)' }}
          >
            {hack.event.startsWith('Google') ? (
              <>
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
                <span>{hack.event.substring(6)}</span>
              </>
            ) : (
              hack.event
            )}
          </h4>

          <div 
            className="space-y-2.5 text-xxs md:text-xs text-sohub-grey font-semibold leading-relaxed pt-2"
            style={{ transform: 'translateZ(20px)' }}
          >
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sohub-white/20" />
              <strong className="text-sohub-white font-bold">Role:</strong> 
              <span className="text-sohub-white/90">{hack.role}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sohub-white/20" />
              <strong className="text-sohub-white font-bold">Team Size:</strong> 
              <span className="text-sohub-white/90">{hack.team}</span>
            </p>
          </div>
        </div>

        <div 
          className="pt-5 border-t border-sohub-dark-grey/50 relative z-10 flex flex-col gap-1.5"
          style={{ transform: 'translateZ(15px)' }}
        >
          <span className="text-[9px] uppercase font-extrabold text-sohub-white/80 tracking-widest block">
            Key Takeaway
          </span>
          <p className="text-[11px] text-sohub-grey leading-relaxed font-medium">
            {hack.learning}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const splineAppRef = useRef<Application | null>(null);
  const robotContainerRef = useRef<HTMLDivElement>(null);
  const robotInnerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const mouseNorm = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Look-at updates for Spline 3D elements and DOM parallax (no-render state)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalized -1 to 1 for Spline interactions
      mouseNorm.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -((e.clientY / window.innerHeight) * 2 - 1),
      };

      // Direct DOM mutation for dynamic parallax background shift (no re-renders)
      if (containerRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
      }

      // Direct DOM mutation for 3D robot tilt (no re-renders)
      if (robotInnerRef.current) {
        const tiltX = ((e.clientY / window.innerHeight) - 0.5) * -14;
        const tiltY = ((e.clientX / window.innerWidth) - 0.5) * 14;
        robotInnerRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }

      // Emit mouseHover on the robot to wake Spline interaction states
      if (splineAppRef.current) {
        try {
          splineAppRef.current.emitEvent('mouseHover', 'Robot');
        } catch (_) { /* graceful */ }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Idle float + head bob loop via Spline variables
  useEffect(() => {
    let t = 0;
    const tick = () => {
      t += 0.012;
      if (splineAppRef.current) {
        try {
          const obj = splineAppRef.current.findObjectByName('Robot');
          if (obj) {
            // Gentle idle float
            (obj as any).position.y = Math.sin(t) * 8;
            // Subtle idle sway
            (obj as any).rotation.z = Math.sin(t * 0.7) * 0.018;
          }
          // Head look-at mouse
          const head = splineAppRef.current.findObjectByName('Head') ||
                        splineAppRef.current.findObjectByName('head') ||
                        splineAppRef.current.findObjectByName('Face');
          if (head) {
            const target = {
              x: mouseNorm.current.y * 0.3,
              y: mouseNorm.current.x * 0.4,
            };
            (head as any).rotation.x += (target.x - (head as any).rotation.x) * 0.08;
            (head as any).rotation.y += (target.y - (head as any).rotation.y) * 0.08;
          }
          // Hand wave on idle
          const hand = splineAppRef.current.findObjectByName('Hand_R') ||
                        splineAppRef.current.findObjectByName('ArmR') ||
                        splineAppRef.current.findObjectByName('hand_r');
          if (hand) {
            (hand as any).rotation.z = Math.sin(t * 1.4) * 0.15 - 0.1;
          }
        } catch (_) { /* graceful no-op if names don't match */ }
      }
      animFrameRef.current = requestAnimationFrame(tick);
    };
    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // onLoad: store Spline app ref and fire startup event
  const onSplineLoad = useCallback((app: Application) => {
    splineAppRef.current = app;
    try {
      app.emitEvent('start', 'Robot');
    } catch (_) { /* graceful */ }
  }, []);

  // Click on robot: trigger mouseDown/mouseUp interaction
  const handleRobotClick = useCallback(() => {
    if (!splineAppRef.current) return;
    try {
      splineAppRef.current.emitEvent('mouseDown', 'Robot');
      setTimeout(() => {
        splineAppRef.current?.emitEvent('mouseUp', 'Robot');
      }, 120);
    } catch (_) { /* graceful */ }
  }, []);

  const projects = [
    {
      title: 'MEDUCATE',
      category: 'AI / Medical Education',
      problem: 'Medical students struggle with dry, static content that fails to make complex anatomy and concepts truly intuitive.',
      solution: 'Built an AI-powered learning platform combining RAG-based knowledge retrieval, immersive 3D anatomy models, and a contextual AI assistant — collaboratively developed with Tanmay Jain.',
      impact: 'Bridges technology and healthcare education, making complex medical concepts interactive, accessible, and personalised for every learner.',
      tech: ['React', 'Three.js', 'RAG', 'AI', 'Node.js'],
      github: '',
      live: 'https://meducate.vercel.app/',
      image: '/project_meducate.png',
      meta: ['MODULE // RAG_PIPELINE', 'MODALITY // 3D_ANATOMY'],
      status: 'STATUS // LIVE',
    },
    {
      title: 'HACKMATE',
      category: 'Full Stack Platform',
      problem: 'Students and developers have no central hub to discover hackathons, form teams, and connect with like-minded innovators.',
      solution: 'Designed and built a full-stack platform with real-time team matching, event discovery, and collaborative project boards.',
      impact: 'Empowers the next generation of builders to find the right team and the right event, fast.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      github: 'https://github.com/Unmesh-12634/HackMate',
      live: 'https://hack-mate-ecru.vercel.app/',
      image: '/project_hackmate.png',
      meta: ['NODES // TEAMS + EVENTS', 'STACK // REACT · NODE'],
      status: 'STATUS // LIVE',
    },
    {
      title: 'MINE VISION',
      category: 'AI / Computer Vision',
      problem: 'Manual visual inspection in industrial automation is slow, error-prone, and scales poorly under high throughput.',
      solution: 'Created an end-to-end computer vision pipeline using YOLO-based object detection with a real-time Python backend dashboard.',
      impact: 'Achieved 94.2% defect detection accuracy at 60 FPS, drastically reducing false-negative inspection rates.',
      tech: ['Python', 'OpenCV', 'YOLOv8', 'FastAPI', 'TensorFlow'],
      github: 'https://github.com/Unmesh-12634/minevision/tree/main',
      live: '',
      image: '/project_mine_vision.png',
      meta: ['MODEL // YOLOV8_TINY', 'LATENCY // 12.4ms'],
      status: 'CONF // 0.942',
    },
    {
      title: 'RAG MODEL',
      category: 'AI / NLP',
      problem: 'General LLMs hallucinate and lack access to custom, up-to-date knowledge bases critical for domain-specific use cases.',
      solution: 'Engineered a production-ready Retrieval-Augmented Generation pipeline using FAISS vector search, Gemini Pro, and a custom document ingestion layer.',
      impact: 'Delivers grounded, context-aware AI responses over private documents with a live, shareable web interface.',
      tech: ['Python', 'FAISS', 'Gemini Pro', 'LangChain', 'Streamlit'],
      github: 'https://github.com/Unmesh-12634/RAG-Chatbot',
      live: 'https://rag-chatbot-xi-steel.vercel.app/',
      image: '/project_rag_model.png',
      meta: ['EMBED // FAISS', 'LLM // GEMINI_PRO'],
      status: 'CONTEXT // 128K_TOKENS',
    },
  ];

  const hackathons = [
    {
      event: 'Google Lakecity Hackathon',
      role: 'Team Lead & Developer',
      team: '3 Members',
      outcome: 'Winner - 1st Place',
      learning: 'Secured 1st Place out of 3,000+ national-level teams for Meducators AI Platform.',
      theme: 'gold'
    },
    {
      event: 'AI-Slingshot Hackathon',
      role: 'Team Lead & Developer',
      team: '5 Members',
      outcome: '1st Runner Up (2nd Position)',
      learning: 'Secured 2nd Position at Sir Padampat Singhania University (SPSU Udaipur).',
      theme: 'silver'
    },
    {
      event: 'Hack with UttarPradesh',
      role: 'Team Lead & Developer',
      team: '5 Members',
      outcome: 'CU Lucknow Campus Participant',
      learning: 'Represented team at Chandigarh University & connected with co-founders of Blackbox AI.',
      theme: 'neutral'
    },
  ];

  const timeline = [
    { year: '2024', description: 'Started B.Tech, Appointed HackerRank Ambassador & Mastered Algorithms' },
    { year: '2025', description: 'Built Full Stack Applications, Hackathons & Team Leadership' },
    { year: '2026', description: 'AI Systems Integration & Product Building (Ongoing)' },
  ];

  const certificates = [
    { title: 'Oracle Generative AI Professional', authority: 'Oracle' },
    { title: 'IBM SkillBuild Frontend Web Development', authority: 'IBM / CSRBOX' },
    { title: 'Google Cloud Gen AI Academy', authority: 'Google Cloud' },
    { title: 'CyberSecurity Fundamentals', authority: 'IBM' },
  ];

  const events = [
    {
      title: 'Smart India Hackathon College Rounds',
      type: 'Trophy / Leadership',
      description: 'Nominated to represent the institution in national rounds, driving team presentation and architecture pitch.',
    },
    {
      title: 'NASA Space Apps Hackathon',
      type: 'NASA / Community',
      description: 'Participated in global space data visualization, designing custom map coordinates in React.',
    },
    {
      title: 'Google Cloud Agentic AI Day',
      type: 'Workshop / AI Dev',
      description: 'Explored agentic frameworks, Vertex AI pipelines, and model fine-tuning processes during the conference.',
    },
  ];

  return (
    <PageTransition>
      <div ref={containerRef} className="relative bg-sohub-black text-sohub-white overflow-hidden bg-grain min-h-screen">
        
        {/* Dynamic Parallax Background Shift */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 transition-transform duration-300 ease-out -z-10"
          style={{
            transform: 'translate(var(--mouse-x, 0px), var(--mouse-y, 0px))',
          }}
        />

        {/* SECTION 1: HERO */}
        <section className="relative min-h-[95vh] flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
          
          {/* Spotlight Ambient Glow Background */}
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20 opacity-30 dark:opacity-40"
            fill="var(--color-sohub-white)"
          />

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 -mt-6 lg:-mt-12">
            
            {/* Left Column: Bold Typography & Statement */}
            <div className="lg:col-span-6 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[10px] uppercase font-bold tracking-widest text-sohub-grey"
              >
                Portfolio &bull; Unmesh Joshi
              </motion.div>

              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-6xl md:text-8xl lg:text-9xl font-display-title font-extrabold uppercase leading-[0.85] tracking-tighter"
                >
                  UNMESH JOSHI
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="text-lg md:text-2xl font-bold uppercase tracking-widest text-sohub-grey font-display"
                >
                  Engineer. Builder. AI Explorer.
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="max-w-xl text-sm md:text-base text-sohub-grey font-medium leading-relaxed"
              >
                Create digital experiences, intelligent systems, and impactful products. Bridging deep learning analytics with bespoke web design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="flex items-center gap-4 pt-4"
              >
                <a href="#work" className="px-8 py-4 bg-sohub-white text-sohub-black font-bold text-xxs uppercase tracking-widest hover:bg-sohub-soft-grey transition-colors">
                  Selected Work
                </a>
                <Link to="/contact" className="px-8 py-4 border border-sohub-white text-sohub-white font-bold text-xxs uppercase tracking-widest hover:bg-sohub-white hover:text-sohub-black transition-all">
                  Let's Connect
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Spline 3D Robot Scene (Enlarged Container) or Interactive Mobile Fallback */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-6 h-[320px] sm:h-[500px] lg:h-[650px] w-full relative flex items-center justify-center overflow-hidden"
            >
              {!isMobile ? (
                /* CSS 3D perspective wrapper for mouse-tilt parallax */
                <div
                  ref={robotContainerRef}
                  onClick={handleRobotClick}
                  style={{
                    width: '100%',
                    height: '100%',
                    perspective: '900px',
                    cursor: 'pointer',
                    transition: 'transform 0.05s linear',
                  }}
                >
                  <div
                    ref={robotInnerRef}
                    style={{
                      width: '100%',
                      height: '100%',
                      transform: 'rotateX(0deg) rotateY(0deg)',
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.12s ease-out',
                      willChange: 'transform',
                    }}
                  >
                    <SplineScene
                      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      className="w-full h-full"
                      onLoad={onSplineLoad}
                    />
                  </div>
                </div>
              ) : (
                /* Beautiful, smooth CSS Interactive glowing orb for mobile to prevent lag */
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute w-64 h-64 bg-gradient-to-tr from-[#4285F4]/20 via-[#EA4335]/20 to-[#FBBC05]/20 rounded-full blur-[60px] animate-pulse" />
                  <div className="relative w-44 h-44 border border-white/10 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                    {/* Glowing outer rings */}
                    <div className="absolute inset-2 border border-[#4285F4]/30 rounded-full animate-[spin_8s_linear_infinite]" />
                    <div className="absolute inset-4 border border-t-[#EA4335]/40 border-b-[#FBBC05]/40 border-l-transparent border-r-transparent rounded-full animate-[spin_4s_linear_infinite_reverse]" />
                    
                    {/* Inner core */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/90 via-sohub-grey to-zinc-900 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-pulse">
                      <Cpu className="w-7 h-7 text-black animate-pulse" />
                    </div>
                  </div>
                  {/* Decorative particles */}
                  <div className="absolute w-2 h-2 bg-[#34A853] rounded-full blur-[1px] top-1/4 left-1/4 animate-bounce" />
                  <div className="absolute w-1.5 h-1.5 bg-[#4285F4] rounded-full blur-[1px] bottom-1/3 right-1/4 animate-ping" />
                </div>
              )}

              {/* Hint label */}
              {!isMobile && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[9px] font-mono text-sohub-grey/50 uppercase tracking-widest select-none pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-sohub-grey/40 animate-ping" />
                  Click or move cursor to interact
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: ABOUT */}
        <section className="py-32 px-6 md:px-12 bg-sohub-dark-grey border-y border-sohub-dark-grey">
          <div className="max-w-4xl mx-auto text-left space-y-12">
            <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold block">01 / Story</span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-display font-extrabold uppercase leading-tight tracking-tight text-sohub-white"
            >
              I don't just write code.<br />
              I build products, lead teams,<br className="hidden md:block" /> and turn ideas into impact.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-sm md:text-base text-sohub-grey font-medium leading-relaxed max-w-2xl"
            >
              B.Tech CSE student at Techno India NJR, Udaipur — building at the intersection of{' '}
              <span className="text-sohub-white font-semibold">AI/ML</span>,{' '}
              <span className="text-sohub-white font-semibold">RAG systems</span>, and{' '}
              <span className="text-sohub-white font-semibold">Full-Stack Engineering</span>.
              20+ national hackathons. 1st Place — Google Lakecity 2026.
            </motion.p>

            <div className="pt-2 flex items-center gap-2">
              <Link to="/about" className="text-xs uppercase font-bold text-sohub-white flex items-center gap-1 hover:text-sohub-grey transition-colors">
                Full Profile <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3: SELECTED WORK */}
        <section id="work" className="relative py-20 px-6 md:px-12 bg-sohub-black border-t border-sohub-dark-grey">
          {/* Section Header */}
          <div className="pb-8 mb-12 flex justify-between items-end border-b border-sohub-dark-grey/50">
            <div>
              <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold block mb-2 font-mono">02 / Portfolio</span>
              <h3 className="text-4xl md:text-6xl font-display-title font-extrabold uppercase tracking-tighter text-sohub-white">Selected Work</h3>
            </div>
            <Link to="/projects" className="text-xs uppercase font-bold text-sohub-white flex items-center gap-1 hover:text-sohub-grey transition-colors mb-1">
              Browse Archives <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Individual scroll-animated project cards */}
          <div className="flex flex-col gap-8">
            <ProjectCardReveal idx={0}>
              <ProjectCard proj={projects[0]} idx={0} />
            </ProjectCardReveal>
            <ProjectCardReveal idx={1}>
              <ProjectCard proj={projects[1]} idx={1} />
            </ProjectCardReveal>
            <ProjectCardReveal idx={2}>
              <ProjectCard proj={projects[2]} idx={2} />
            </ProjectCardReveal>
          </div>
        </section>

        {/* SECTION 4: EXPERTISE */}
        <ExpertiseSection />

        {/* SECTION 5: HACKATHONS */}
        <section className="py-32 px-6 md:px-12 bg-sohub-black">
          <div className="max-w-6xl mx-auto">
            <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold block mb-2">04 / Leadership</span>
            <h3 className="text-3xl md:text-5xl font-display-title font-bold uppercase tracking-tight text-sohub-white mb-16">HACKATHONS</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hackathons.map((hack, idx) => (
                <HackathonCard hack={hack} idx={idx} key={hack.event} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: JOURNEY */}
        <section className="py-32 px-6 md:px-12 bg-sohub-dark-grey border-y border-sohub-dark-grey">
          <div className="max-w-4xl mx-auto">
            <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold block mb-2">05 / Evolution</span>
            <h3 className="text-3xl md:text-5xl font-display-title font-bold uppercase tracking-tight text-sohub-white mb-16">JOURNEY</h3>

            <div className="relative pl-6 md:pl-12 border-l border-sohub-grey/25 py-4 space-y-12">
              {timeline.map((node, index) => (
                <motion.div
                  key={node.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative space-y-2"
                >
                  <div className="absolute -left-[31px] md:-left-[55px] top-1 w-2.5 h-2.5 bg-sohub-white border border-sohub-black" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                    <span className="text-lg font-bold text-sohub-white font-mono">{node.year}</span>
                    <p className="text-sm md:text-base font-semibold text-sohub-grey">{node.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: CERTIFICATIONS & ACHIEVEMENTS */}
        <section className="py-32 px-6 md:px-12 bg-sohub-black">
          <div className="max-w-5xl mx-auto">
            <div className="border-b border-sohub-dark-grey pb-8 mb-16 flex justify-between items-end">
              <div>
                <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold block mb-2">06 / Achievements</span>
                <h3 className="text-3xl md:text-5xl font-display-title font-bold uppercase tracking-tight text-sohub-white">CERTIFICATIONS</h3>
              </div>
              <Link to="/certificates" className="text-xs uppercase font-bold text-sohub-white flex items-center gap-1 hover:text-sohub-grey transition-colors mb-1">
                View Verification <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificates.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="border border-sohub-dark-grey bg-sohub-black p-6 flex justify-between items-center hover:border-sohub-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-sohub-grey">{cert.authority}</span>
                    <h4 className="text-sm font-bold text-sohub-white uppercase tracking-wider mt-0.5 group-hover:text-sohub-soft-grey transition-colors leading-snug">
                      {cert.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 border border-sohub-dark-grey bg-sohub-dark-grey/40 flex items-center justify-center text-sohub-grey group-hover:text-sohub-white transition-colors">
                    <Award className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: EVENTS & COMMUNITY */}
        <section className="py-32 px-6 md:px-12 bg-sohub-dark-grey border-t border-sohub-dark-grey">
          <div className="max-w-5xl mx-auto">
            <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold block mb-2">07 / Engagement</span>
            <h3 className="text-3xl md:text-5xl font-display-title font-bold uppercase tracking-tight text-sohub-white mb-16">EVENTS & COMMUNITY</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((evt, idx) => (
                <motion.div
                  key={evt.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="border border-sohub-dark-grey bg-sohub-black p-8 hover:border-sohub-white/20 transition-all duration-300 flex flex-col justify-between h-[300px]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xxs uppercase tracking-widest text-sohub-grey font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {evt.type}
                    </div>
                    <h4 className="text-lg font-bold uppercase tracking-tight text-sohub-white font-display leading-tight pt-1">
                      {evt.title}
                    </h4>
                  </div>
                  
                  <p className="text-xs text-sohub-grey font-medium leading-relaxed">
                    {evt.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: CONTACT */}
        <section className="py-36 px-6 md:px-12 bg-sohub-black border-t border-sohub-dark-grey/50 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold block">08 / Connection</span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-display-title font-extrabold uppercase leading-none text-sohub-white"
            >
              Let's Build Something Meaningful.
            </motion.h3>
            <p className="text-xs md:text-sm text-sohub-grey font-medium max-w-md mx-auto">
              If you are a recruiter, engineering manager, or founder looking to collaborate on AI integration or full-stack web architectures, get in touch today.
            </p>
            
            {/* Social Grid Connections */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto pt-8">
              <a 
                href="https://github.com/Unmesh-12634" 
                target="_blank" 
                rel="noreferrer"
                className="border border-sohub-dark-grey bg-sohub-black p-5 hover:border-sohub-white/25 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <Github className="w-5 h-5 text-sohub-white mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-sohub-white uppercase tracking-wider block">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/unmesh-joshi-b0846431b" 
                target="_blank" 
                rel="noreferrer"
                className="border border-sohub-dark-grey bg-sohub-black p-5 hover:border-sohub-white/25 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <Linkedin className="w-5 h-5 text-sohub-white mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-sohub-white uppercase tracking-wider block">LinkedIn</span>
              </a>
              <a 
                href="mailto:unmeshjoshi083@gmail.com" 
                className="border border-sohub-dark-grey bg-sohub-black p-5 hover:border-sohub-white/25 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <Mail className="w-5 h-5 text-sohub-white mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-sohub-white uppercase tracking-wider block">Email</span>
              </a>
              <a 
                href="#" 
                className="border border-sohub-dark-grey bg-sohub-black p-5 hover:border-sohub-white/25 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <FileText className="w-5 h-5 text-sohub-white mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-sohub-white uppercase tracking-wider block">Resume</span>
              </a>
            </div>

            <div className="pt-8">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-sohub-white text-sohub-black font-bold text-xs uppercase tracking-widest hover:bg-sohub-soft-grey transition-colors"
              >
                Conversational Inquiry <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}

// Helper Arrow Component
function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
