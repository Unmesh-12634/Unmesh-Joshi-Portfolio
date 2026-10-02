import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Code, Trophy, Users, Rocket, ChevronRight, ChevronLeft, Cpu, Terminal, Activity, Eye, X, Award } from 'lucide-react';

interface ExperienceMedia {
  src: string;
  title: string;
  category: 'Certificate' | 'App Screenshot' | 'Project Photo' | 'Stage Photo';
  description?: string;
}

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
  media?: ExperienceMedia[];
}

const experiences: ExperienceItem[] = [
  {
    icon: Rocket,
    title: 'CDA - Cranes Varsity Internship',
    role: 'Project Lead / Intern',
    date: '20 July 2026 – 24 August 2026',
    description: 'Worked as the project lead during the internship and contributed to the development of the CDA Student Mobile Application. Worked on application development, project coordination, backend/full-stack implementation, and integration of required functionality.',
    achievements: [
      'Project: CDA Student Mobile Application.',
      'Served as Project Lead, coordinating project development, timelines, and implementation.',
      'Contributed to application development, backend/full-stack implementation, and functionality integration.',
    ],
    systemMetrics: {
      calibration: '99.8% NOMINAL',
      load: '100% COMPLETED',
      integrity: '100% VERIFIED'
    },
    media: [
      {
        src: '/Internship/cranes_cda_certificate_of_accomplishment.jpg',
        title: 'Certificate of Accomplishment – CDA Mobile Application',
        category: 'Certificate',
        description: 'Awarded to Unmesh Joshi for Outstanding contribution in developing Mobile Application for CDA - Cranes Digital Academy (20 July 2026 to 24 August 2026). Reg No: CL2026070301170571.'
      },
      {
        src: '/Internship/cranes_cda_certificate_of_internship.jpg',
        title: 'Certificate of Internship – Full Stack Java Development',
        category: 'Certificate',
        description: 'Official Project Internship Certificate on Full Stack Java Development conducted by Cranes Varsity, Bengaluru. Certificate No: CV/IN/0388/26-27.'
      },
      {
        src: '/Internship/cranes_cda_completion_letter.jpg',
        title: 'Official Internship Completion & Recommendation Letter',
        category: 'Certificate',
        description: 'Formal commendation letter from Cranes Varsity Private Limited recognizing project leadership and contribution to the Cranes Digital Academy Mobile Application.'
      },
      {
        src: '/Internship/cranes_cda_award_ceremony.jpg',
        title: 'Award Ceremony & Certificate Presentation',
        category: 'Stage Photo',
        description: 'Unmesh Joshi receiving the Certificate of Accomplishment and crystal trophy alongside Cranes Varsity leadership and faculty.'
      },
      {
        src: '/Internship/cranes_cda_trophy.jpg',
        title: 'Cranes Varsity Crystal Trophy – CDA Mobile App Project',
        category: 'Project Photo',
        description: 'Official crystal trophy awarded to Unmesh in recognition of outstanding contribution to the CDA Mobile App Project.'
      }
    ]
  },
  {
    icon: Code,
    title: 'Full Stack Java Training',
    role: 'Advanced Diploma Graduate',
    date: 'Cranes Varsity',
    description: 'Completed an intensive Advanced Diploma in Full Stack Java Development at Cranes Varsity. Mastered enterprise-grade backend architecture, object-oriented design, and database integration.',
    achievements: [
      'Core & Enterprise: Java, Java 17, Spring Boot, Maven, JPA, Hibernate.',
      'APIs & Data: REST APIs, H2 Database, SQL, Relational schema design and transactional management.',
      'Full Stack: End-to-end backend development and client-server integration.',
    ],
    systemMetrics: {
      calibration: '99.5% ACCREDITED',
      load: 'PRODUCTION_READY',
      integrity: '100% VERIFIED'
    },
    media: [
      {
        src: '/Courses/Full Stack.png',
        title: 'Advanced Diploma in Full Stack Java Development',
        category: 'Certificate',
        description: 'Official Cranes Varsity credential covering Java 17, Spring Boot, JPA, and enterprise backend engineering.'
      }
    ]
  },
  {
    icon: Trophy,
    title: 'Hackathon Leadership',
    role: 'Technical Team Leader & Finalist',
    date: '2025 - Present',
    description: 'Finalist in 15+ hackathons, leading multi-disciplinary squads in fast-paced 24-48h national hackathons and building functional prototypes from scratch.',
    achievements: [
      'Winner (1st Place) at Google Lakecity Hackathon 2026 out of 3,000+ national teams.',
      '1st Runner Up (2nd Position) at SPSU Udaipur (AI-Slingshot Hackathon / Panache 2026).',
      'Top 300 out of ~15,000 participants in Hack with UttarPradesh (CU Lucknow).',
      'Top 40 Finalist at HackWithIndia @ Microsoft Gurgaon.',
      'Smart India Hackathon (SIH) 2026 (AeroX product) and SIH 2025.',
    ],
    systemMetrics: {
      calibration: '99.7% OPTIMIZED',
      load: '15+ HACKATHONS',
      integrity: '100% VERIFIED'
    },
    media: [
      {
        src: '/Hackathons/google_lakecity_hackathon.jpg',
        title: 'Google Lakecity Hackathon 2026 - Winner 1st Place',
        category: 'Certificate',
        description: '1st Place Merit Certificate at Google Lakecity Hackathon 2026 out of 3,000+ national teams.'
      },
      {
        src: '/Hackathons/moment_group.png',
        title: 'Team Meducators - Victory Ceremony',
        category: 'Stage Photo',
        description: 'Team Meducators receiving first place trophy on stage at Google Lakecity Hackathon.'
      },
      {
        src: '/Hackathons/spsu_group_victory.jpg',
        title: 'Team JUGAD Junction - 1st Runner Up',
        category: 'Stage Photo',
        description: 'Stage victory celebration at SPSU Udaipur Panache 2026 AI-Slingshot Hackathon.'
      },
      {
        src: '/Hackathons/Microsoft Top 40.png',
        title: 'Microsoft Gurgaon BuildwithDelhi - Top 40',
        category: 'Certificate',
        description: 'Certificate of Achievement for Top 40 finish among 1,000+ national squads.'
      }
    ]
  },
  {
    icon: Users,
    title: 'HackerRank Ambassador',
    role: 'College Ambassador',
    date: '2025 - Present',
    description: 'Serving as the official HackerRank College Ambassador on campus, promoting competitive programming, organizing technical contests, and fostering data structures & algorithms problem-solving culture among students.',
    achievements: [
      'Organized and hosted multiple campus-wide coding contests and hackathons on the HackerRank platform.',
      'Mentored and guided fellow students in strengthening their DSA concepts and preparing for technical challenges.',
      'Represented HackerRank locally, bridging student developer communities with industry standards.',
    ],
    systemMetrics: {
      calibration: '98.8% EXCELLENT',
      load: 'COMMUNITY_LEAD',
      integrity: '100% ACTIVE'
    }
  },
  {
    icon: Cpu,
    title: 'Technical Projects',
    role: 'Full Stack & AI Developer',
    date: '2024 - Present',
    description: 'Hands-on experience developing AI-powered applications, RAG pipelines, modern web applications, and intelligent automation systems.',
    achievements: [
      'Engineered AeroX (SIH 2026) and SENTI (Multimodal AI Desktop Assistant with OS & voice automation).',
      'Built Meducate (AI Medical Learning Platform) and HackMate (Real-Time Team Matching Platform).',
      'Implemented RAG pipelines with LangChain, ChromaDB, and Google Gemini Pro; developed computer vision systems with OpenCV and YOLOv8.',
    ],
    systemMetrics: {
      calibration: '99.9% PRECISE',
      load: '54.5% STABLE',
      integrity: '100% NOMINAL'
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
  const [activeMediaIndex, setActiveMediaIndex] = useState<number | null>(null);
  const activeExp = experiences[activeTab];
  
  // Custom typing effect for the active milestone description
  const { displayText, isFinished, skip } = useTypingEffect(activeExp.description, 10);

  // Keyboard navigation for photo & certificate lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeMediaIndex === null || !activeExp.media) return;
      if (e.key === 'Escape') setActiveMediaIndex(null);
      if (e.key === 'ArrowLeft') {
        setActiveMediaIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : activeExp.media!.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveMediaIndex((prev) => (prev !== null && prev < activeExp.media!.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMediaIndex, activeExp]);

  // Reset active media preview when switching tabs
  useEffect(() => {
    setActiveMediaIndex(null);
  }, [activeTab]);

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

                {/* Photo & Certificate Verification Section */}
                {activeExp.media && activeExp.media.length > 0 && (
                  <div className="pt-6 border-t border-sohub-dark-grey/60 pointer-events-auto">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-sohub-white uppercase tracking-wider font-bold flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        Verified Photos & Credentials // ({activeExp.media.length} Records)
                      </span>
                      <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5">
                        ● Verified Records
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {activeExp.media.map((item, mIdx) => (
                        <div
                          key={item.title + mIdx}
                          onClick={() => setActiveMediaIndex(mIdx)}
                          className="group/thumb border border-sohub-dark-grey hover:border-sohub-white/70 bg-black/60 p-2 cursor-pointer transition-all duration-200 relative overflow-hidden flex flex-col justify-between"
                        >
                          <div className="relative aspect-[4/3] bg-sohub-black/80 overflow-hidden mb-2 border border-white/5">
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover object-center group-hover/thumb:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                              <Eye className="w-4 h-4 text-white" />
                            </div>
                            <span className="absolute bottom-1 left-1 font-mono text-[8px] uppercase tracking-wider bg-black/90 px-1.5 py-0.5 text-white/90 border border-white/10 font-bold">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-[10px] font-mono text-sohub-white font-semibold truncate leading-tight group-hover/thumb:text-amber-300 transition-colors">
                            {item.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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

      {/* Fullscreen Lightbox / Certificate Verification Modal */}
      <AnimatePresence>
        {activeMediaIndex !== null && activeExp.media && activeExp.media[activeMediaIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => setActiveMediaIndex(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-[#0d0d10] border-2 border-white/20 p-4 md:p-6 shadow-[0_20px_70px_rgba(0,0,0,0.9)] flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] bg-white/10 text-white px-2 py-0.5 uppercase tracking-wider font-bold border border-white/20">
                    {activeExp.media[activeMediaIndex].category}
                  </span>
                  <h4 className="text-xs md:text-base font-bold text-white uppercase font-display truncate">
                    {activeExp.media[activeMediaIndex].title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveMediaIndex(null)}
                  className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Close inspection"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Main Image Preview */}
              <div className="relative flex-grow flex items-center justify-center overflow-hidden min-h-[300px] max-h-[60vh] bg-black/60 border border-white/5">
                <img
                  src={activeExp.media[activeMediaIndex].src}
                  alt={activeExp.media[activeMediaIndex].title}
                  className="max-w-full max-h-[60vh] object-contain select-none shadow-lg"
                />

                {/* Prev/Next buttons if multiple */}
                {activeExp.media.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMediaIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : activeExp.media!.length - 1));
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 bg-black/80 border border-white/20 hover:bg-white hover:text-black text-white transition-all cursor-pointer shadow-lg"
                      title="Previous record"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMediaIndex((prev) => (prev !== null && prev < activeExp.media!.length - 1 ? prev + 1 : 0));
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-black/80 border border-white/20 hover:bg-white hover:text-black text-white transition-all cursor-pointer shadow-lg"
                      title="Next record"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Footer Description & Badge */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-sohub-grey">
                <p className="font-sans text-xs text-white/90">
                  {activeExp.media[activeMediaIndex].description || activeExp.media[activeMediaIndex].title}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold tracking-widest uppercase">
                    VERIFIED // {activeExp.title}
                  </span>
                  <span className="bg-white/10 px-2 py-0.5 text-white font-bold">
                    {activeMediaIndex + 1} / {activeExp.media.length}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
