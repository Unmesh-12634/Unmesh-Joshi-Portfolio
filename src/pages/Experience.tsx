import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Code, Trophy, Users, Rocket, ChevronRight, Cpu, Terminal, Activity } from 'lucide-react';

interface ExperienceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  role: string;
  date: string;
  description: string;
  achievements: string[];
  systemMetrics: {
    calibration: string;
    load: string;
    integrity: string;
  };
}

const experiences: ExperienceItem[] = [
  {
    icon: Code,
    title: 'Technical Experience',
    role: 'Full Stack Engineer',
    date: '2024 - Present',
    description: 'Built and deployed multiple interactive frontend projects using HTML, CSS, JavaScript, and React. Later expanded into backend development with Node.js and database integration to create full-stack applications.',
    achievements: [
      'Currently exploring AI and ML technologies, learning frameworks like TensorFlow.',
      'Integrating AI models into web-based projects.',
      'Developed a strong problem-solving mindset through consistent practice in C, C++, and Python.',
    ],
    systemMetrics: {
      calibration: '98.6% NOMINAL',
      load: '14.2% MINIMAL',
      integrity: '100% SECURE'
    }
  },
  {
    icon: Trophy,
    title: 'Hackathon & Leadership',
    role: 'Technical Team Leader',
    date: '2025 - Present',
    description: 'Participated in 10+ hackathons, contributing to ideation, development, and final presentations.',
    achievements: [
      'Top 40 Finalist in a national-level hackathon, invited to the finals at Microsoft Gurugram.',
      'Led multiple teams in inter-college and national hackathons, including Smart India Hackathon (SIH).',
      'Strengthened leadership, teamwork, and technical collaboration skills through real-world challenges.',
    ],
    systemMetrics: {
      calibration: '99.4% OPTIMIZED',
      load: '38.9% ACTIVE',
      integrity: '100% SECURE'
    }
  },
  {
    icon: Users,
    title: 'Community & Freelance',
    role: 'Freelance Developer',
    date: '2024 - 2025',
    description: 'Active member of college tech clubs, contributing to events, mentorship, and collaborative projects.',
    achievements: [
      'Started freelancing, developing web applications and assisting others with frontend design.',
      'Contributed to open-source projects, focusing on innovative web and AI-based solutions.',
    ],
    systemMetrics: {
      calibration: '95.2% ALIGNED',
      load: '8.4% IDLE',
      integrity: '100% SECURE'
    }
  },
  {
    icon: Rocket,
    title: 'Current Focus',
    role: 'AI Systems Integration',
    date: '2026',
    description: 'Advancing in AI/ML integration with web technologies and exploring backend frameworks and production-level AI systems.',
    achievements: [
      'Building a portfolio of intelligent, impactful applications.',
    ],
    systemMetrics: {
      calibration: '99.9% PRECISE',
      load: '54.5% STABLE',
      integrity: '100% SECURE'
    }
  },
];

// Reusable typing hook
function useTypingEffect(text: string, speed: number = 12) {
  const [displayText, setDisplayText] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const textRef = useRef(text);
  
  useEffect(() => {
    textRef.current = text;
    setDisplayText('');
    setIsFinished(false);

    let index = 0;
    let currentText = '';
    const interval = setInterval(() => {
      if (index < textRef.current.length) {
        currentText += textRef.current[index];
        setDisplayText(currentText);
        index++;
      } else {
        setIsFinished(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  const skip = () => {
    setDisplayText(text);
    setIsFinished(true);
  };

  return { displayText, isFinished, skip };
}

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const activeExp = experiences[activeTab];
  
  // Custom typing effect for the active milestone description
  const { displayText, isFinished, skip } = useTypingEffect(activeExp.description, 10);

  const Icon = activeExp.icon;

  return (
    <PageTransition>
      <div className="bg-sohub-black text-sohub-white min-h-screen overflow-x-hidden">
        {/* Main Layout Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          
          {/* Blueprint Grid Lines Backdrop */}
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,rgba(240,246,248,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(240,246,248,0.1)_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

          {/* Header Area */}
          <div className="border-b border-sohub-dark-grey pb-6 mb-12 flex justify-between items-end">
            <div>
              <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold block mb-2 font-mono">03 / Evolution</span>
              <h1 className="text-4xl md:text-7xl font-display-title font-extrabold uppercase leading-none text-sohub-white">
                EXPERIENCE
              </h1>
            </div>
            
            <div className="flex items-center gap-4 text-xxs font-mono text-sohub-grey font-semibold">
              <span className="hidden md:inline uppercase">Interactive Control Deck</span>
              <Terminal className="w-4 h-4 animate-pulse" />
            </div>
          </div>

          {/* Console Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
            
            {/* Left Column: Milestone Selector Timeline (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col gap-4 relative">
              <div className="absolute left-10 top-8 bottom-8 w-[1px] bg-sohub-dark-grey hidden lg:block -z-10" />
              
              {experiences.map((exp, idx) => {
                const isActive = idx === activeTab;
                const ExpIcon = exp.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-6 p-4 text-left border transition-all duration-300 relative group z-10 ${
                      isActive 
                        ? 'border-sohub-white bg-sohub-dark-grey/25 shadow-[0_10px_30px_rgba(0,0,0,0.4)]' 
                        : 'border-sohub-dark-grey bg-sohub-black/40 hover:border-sohub-white/20'
                    }`}
                  >
                    {/* Glowing active node indicator */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? 'bg-sohub-white text-sohub-black border-sohub-white'
                          : 'bg-sohub-dark-grey/40 text-sohub-white border-sohub-dark-grey group-hover:border-sohub-white/30'
                      }`}>
                        <ExpIcon className="w-5 h-5" />
                      </div>
                      {isActive && (
                        <div className="absolute -inset-1 border border-sohub-white/30 animate-pulse -z-10" />
                      )}
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] font-mono text-sohub-grey font-bold uppercase tracking-wider">
                          MILESTONE_0{idx + 1}
                        </span>
                        <span className="text-[9px] font-mono text-sohub-grey font-bold">
                          {exp.date}
                        </span>
                      </div>
                      <h4 className="text-xs md:text-sm font-bold text-sohub-white uppercase tracking-wider truncate font-display">
                        {exp.title}
                      </h4>
                      <p className="text-[10px] uppercase font-bold text-sohub-grey truncate font-mono">
                        {exp.role}
                      </p>
                    </div>

                    {/* Selector indicator node arrow */}
                    <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                      isActive ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
                    }`}>
                      <ChevronRight className="w-4 h-4 text-sohub-white" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Console Details (lg:col-span-8) */}
            <div className="lg:col-span-8 flex flex-col justify-between border border-sohub-dark-grey bg-sohub-dark-grey/15 p-6 md:p-10 relative overflow-hidden min-h-[460px] shadow-lg">
              
              {/* Skip Typing Button overlay - only visible while typing */}
              {!isFinished && (
                <button 
                  onClick={skip}
                  className="absolute top-4 right-4 text-[9px] font-mono text-sohub-grey hover:text-sohub-white border border-sohub-dark-grey hover:border-sohub-white px-2 py-1 transition-colors uppercase cursor-pointer z-30"
                >
                  Skip Typing // Click Card
                </button>
              )}

              {/* Click target helper overlay for skipping typing */}
              {!isFinished && (
                <div className="absolute inset-0 z-20 cursor-pointer" onClick={skip} />
              )}

              <div className="space-y-6 relative z-10 pointer-events-none">
                
                {/* Header detail */}
                <div className="flex justify-between items-start border-b border-sohub-dark-grey pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-sohub-white bg-sohub-white text-sohub-black flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-sohub-white uppercase tracking-wider font-display">
                        {activeExp.title}
                      </h3>
                      <p className="text-xs uppercase font-bold text-sohub-grey font-mono">
                        {activeExp.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-sohub-white bg-sohub-dark-grey border border-sohub-dark-grey px-3 py-1">
                    {activeExp.date}
                  </span>
                </div>

                {/* Real character typing description */}
                <div className="min-h-[96px] md:min-h-[84px] font-mono text-xs md:text-sm text-sohub-grey leading-relaxed select-none relative">
                  <span>{displayText}</span>
                  {!isFinished && (
                    <span className="inline-block w-1.5 h-4 bg-sohub-white ml-1 animate-blink" />
                  )}
                </div>

                {/* Achievements: fade-in sequentially after typing finishes */}
                <div className="space-y-3 pt-6 border-t border-sohub-dark-grey/60 min-h-[140px] pointer-events-auto">
                  <span className="text-[9px] font-mono text-sohub-grey uppercase block tracking-wider mb-2">
                    Key Achievements //
                  </span>
                  
                  <motion.div
                    initial="hidden"
                    animate={isFinished ? "visible" : "hidden"}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.12 }
                      }
                    }}
                    className="space-y-3"
                  >
                    {activeExp.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, x: -12 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        className="flex items-start gap-3"
                      >
                        <ChevronRight className="w-4 h-4 text-sohub-white mt-0.5 flex-shrink-0 opacity-60" />
                        <span className="text-xs md:text-sm text-sohub-grey font-medium leading-relaxed font-sans">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

              </div>

              {/* Console Footer Telemetry Bar */}
              <div className="mt-8 pt-4 border-t border-sohub-dark-grey/30 flex flex-wrap justify-between items-center gap-4 text-[10px] font-mono text-sohub-grey relative z-30">
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-sohub-white opacity-50 animate-pulse" />
                  <span className="uppercase tracking-wider">Telemetry Monitoring // Active</span>
                </div>
                
                <div className="flex gap-4 flex-wrap">
                  <span className="uppercase">Cal: <b className="text-sohub-white">{activeExp.systemMetrics.calibration}</b></span>
                  <span className="uppercase">Load: <b className="text-sohub-white">{activeExp.systemMetrics.load}</b></span>
                  <span className="uppercase">Net: <b className="text-sohub-white">{activeExp.systemMetrics.integrity}</b></span>
                </div>
              </div>

            </div>

          </div>

          {/* Bento Grid Metrics Board */}
          <div className="border-t border-sohub-dark-grey pt-12 relative z-10">
            <div className="border-b border-sohub-dark-grey pb-4 mb-10">
              <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold block mb-1">Telemetry Metrics</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-sohub-white font-display">
                PERFORMANCE OVERVIEW
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Bento Card 1: Hackathons */}
              <div className="border border-sohub-dark-grey bg-sohub-dark-grey/15 p-8 flex flex-col justify-between group hover:border-sohub-white/20 transition-all duration-300 relative overflow-hidden min-h-[250px] shadow-sm">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Trophy className="w-32 h-32 text-sohub-white" />
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 border border-sohub-dark-grey bg-sohub-black flex items-center justify-center text-sohub-white">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-display-title font-bold text-sohub-white leading-none">10+</h4>
                    <span className="text-[10px] uppercase tracking-wider text-sohub-grey mt-1.5 block font-mono">
                      Hackathons Participated
                    </span>
                  </div>
                </div>
                <p className="text-xs text-sohub-grey font-medium leading-relaxed pt-4 border-t border-sohub-dark-grey/50">
                  Top 40 Finalist at Microsoft Gurugram (BuildwithDelhi 2.0) & Smart India Hackathon finalist. Experienced in fast prototype loops.
                </p>
              </div>

              {/* Bento Card 2: Team Leadership */}
              <div className="border border-sohub-dark-grey bg-sohub-dark-grey/15 p-8 flex flex-col justify-between group hover:border-sohub-white/20 transition-all duration-300 relative overflow-hidden min-h-[250px] shadow-sm">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Users className="w-32 h-32 text-sohub-white" />
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 border border-sohub-dark-grey bg-sohub-black flex items-center justify-center text-sohub-white">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-display-title font-bold text-sohub-white leading-none">50+</h4>
                    <span className="text-[10px] uppercase tracking-wider text-sohub-grey mt-1.5 block font-mono">
                      Team Members Led
                    </span>
                  </div>
                </div>
                <p className="text-xs text-sohub-grey font-medium leading-relaxed pt-4 border-t border-sohub-dark-grey/50">
                  Acted as Technical Team Leader in national events. Formulated technical strategies, system design specs, and coordinated codebases.
                </p>
              </div>

              {/* Bento Card 3: Codebases built */}
              <div className="border border-sohub-dark-grey bg-sohub-dark-grey/15 p-8 flex flex-col justify-between group hover:border-sohub-white/20 transition-all duration-300 relative overflow-hidden min-h-[250px] shadow-sm">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Cpu className="w-32 h-32 text-sohub-white" />
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 border border-sohub-dark-grey bg-sohub-black flex items-center justify-center text-sohub-white">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-display-title font-bold text-sohub-white leading-none">15+</h4>
                    <span className="text-[10px] uppercase tracking-wider text-sohub-grey mt-1.5 block font-mono">
                      Projects Completed
                    </span>
                  </div>
                </div>
                <p className="text-xs text-sohub-grey font-medium leading-relaxed pt-4 border-t border-sohub-dark-grey/50">
                  Created rich visual frontends (GSAP, Framer Motion), physics-enabled sandboxes (Matter.js), and integrated computer vision modules (YOLOv8).
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.9s infinite;
        }
      `}</style>
    </PageTransition>
  );
}
