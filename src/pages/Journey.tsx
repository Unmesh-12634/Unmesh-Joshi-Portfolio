import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { BookOpen, Code, Rocket, Brain, Sparkles, Users, Server, Trophy, Lightbulb } from 'lucide-react';

const getBlockColor = (index: number) => {
  if (index < 5) return '#1C4EFF'; // Blue
  if (index < 10) return '#34D399'; // Emerald
  if (index < 14) return '#F79FFF'; // Pink
  if (index < 18) return '#FFD600'; // Yellow
  return '#FE881B'; // Orange
};

function SegmentedBar({ progress }: { progress: number }) {
  const totalBlocks = 20;
  const activeBlocks = Math.round((progress / 100) * totalBlocks);
  
  return (
    <div className="flex gap-[3px] w-full">
      {Array.from({ length: totalBlocks }).map((_, i) => {
        const isActive = i < activeBlocks;
        const isLastActive = i === activeBlocks - 1;
        return (
          <div 
            key={i}
            className={`h-2.5 flex-1 transition-all duration-300 rounded-none ${
              isLastActive ? 'animate-pulse' : ''
            }`}
            style={{
              backgroundColor: isActive ? getBlockColor(i) : 'rgba(120, 120, 120, 0.1)',
              border: '1px solid rgba(120, 120, 120, 0.15)',
              boxShadow: isLastActive ? `0 0 8px ${getBlockColor(i)}` : 'none',
              opacity: isActive ? 1 : 0.25,
            }}
          />
        );
      })}
    </div>
  );
}

export function Journey() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate position for the active glowing tracer head
  const dotY = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  const roadmapItems = [
    {
      year: '2024',
      title: 'The Foundation',
      icon: BookOpen,
      description: 'Started my B.Tech journey in Computer Science, building a solid foundation in coding and problem-solving during my first semester.',
      highlights: [
        'Learned C, HTML, CSS, JavaScript, and Python',
        'Strengthened fundamentals of Data Structures & Algorithms',
      ],
    },
    {
      year: '2024',
      title: 'Community & Exploration',
      icon: Users,
      description: 'Became an active member of the tech community, participating in events and exploring the world of development.',
      highlights: [
        'Joined college tech communities',
        'Began participating in coding events',
        'Started exploring the world of development',
      ],
    },
    {
      year: '2025',
      title: 'Frontend & First Project',
      icon: Code,
      description: 'Continued learning frontend development and Python, which led me to create my first interactive website — Krishnam.',
      highlights: [
        'Built my first interactive website (Krishnam)',
      ],
    },
    {
      year: '2025',
      title: 'Backend & Full-Stack',
      icon: Server,
      description: 'Expanded my skills to backend development, integrating it with frontend projects to create full-stack solutions.',
      highlights: [
        'Started exploring backend development',
        'Integrating backend with frontend projects',
      ],
    },
    {
      year: '2025',
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Began my journey into AI & Machine Learning with great enthusiasm, sparking a deep interest in AI-based solutions.',
      highlights: [
        'Began my journey into AI & Machine Learning',
      ],
    },
    {
      year: '2025',
      title: 'Hackathons & Leadership',
      icon: Trophy,
      description: 'Gained hands-on experience and teamwork skills by participating in 10+ hackathons and leading multiple teams.',
      highlights: [
        'Appointed HackerRank College Ambassador to drive campus coding',
        'Participated in my first hackathon, top 40 finalist at Microsoft Gurugram',
        'Led multiple teams in hackathons and college projects',
        'Represented my college in Smart India Hackathon (SIH) internal rounds',
      ],
    },
    {
      year: 'Next',
      title: 'Full-Stack AI Engineer',
      icon: Rocket,
      description: 'Aspiring to become a Full-Stack AI Engineer, blending the power of web technologies and machine learning to create intelligent, impactful solutions.',
      highlights: [
        'Master advanced AI/ML concepts',
        'Build and deploy production-level AI systems',
        'Contribute to open-source AI projects',
      ],
    },
    {
      year: 'Future',
      title: 'Entrepreneurship',
      icon: Lightbulb,
      description: 'Aiming to leverage my skills and experience to launch my own tech startup in the future.',
      highlights: [
        'Launch my own tech startup in the future',
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Header Title */}
        <div className="border-b border-sohub-dark-grey pb-8 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xxs uppercase tracking-widest text-[#34D399] font-mono font-bold block mb-2">// CONSOLE_SESSION: ARCHIVE_01</span>
            <h1 className="text-4xl md:text-7xl font-display-title font-extrabold uppercase leading-none text-sohub-white">
              MY JOURNEY
            </h1>
          </div>
          <div className="text-right font-mono text-[10px] text-sohub-grey flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-none animate-ping" />
            <span>TIMELINE_ACTIVE // COORDS: 2024.11 - FUTURE</span>
          </div>
        </div>

        {/* Vertical Chronological Cyber-Pipeline Console */}
        <div ref={containerRef} className="relative mb-28 max-w-5xl mx-auto px-2">
          
          {/* Central Connecting Conduit Line (Dashed Tech Spine) */}
          <div className="absolute top-0 bottom-0 left-[22px] md:left-1/2 w-[2px] border-l-2 border-dashed border-sohub-dark-grey/50 -translate-x-1/2" />
          
          {/* Active Glowing Scroll Tracer Line */}
          <motion.div 
            style={{ scaleY }} 
            className="absolute top-0 bottom-0 left-[22px] md:left-1/2 w-[2px] bg-gradient-to-b from-[#1C4EFF] via-[#34D399] to-[#FE881B] origin-top -translate-x-1/2 z-10" 
          />

          {/* Glowing Active Target Reticle Sliding Down Spine */}
          <motion.div 
            style={{ top: dotY }} 
            className="absolute left-[22px] md:left-1/2 w-3.5 h-3.5 bg-[#FE881B] border-2 border-sohub-white -translate-x-1/2 -translate-y-1/2 z-20 rotate-45 flex items-center justify-center shadow-[0_0_12px_rgba(254,136,27,0.8)]"
          >
            <div className="w-1.5 h-1.5 bg-sohub-white animate-ping opacity-75" />
          </motion.div>

          <div className="space-y-16">
            {roadmapItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const nodeIndex = (idx + 1).toString().padStart(2, '0');
              
              // Get status based on year
              let statusText = 'LOG: INTEGRATED';
              let statusColorClass = 'text-emerald-500 border-emerald-500/20';
              if (item.year === 'Next') {
                statusText = 'LOG: COMPILING';
                statusColorClass = 'text-amber-500 border-amber-500/20';
              } else if (item.year === 'Future') {
                statusText = 'LOG: QUEUED';
                statusColorClass = 'text-sohub-grey border-sohub-dark-grey/50';
              }
              
              return (
                <div 
                  key={item.title} 
                  className={`flex flex-col md:flex-row items-stretch w-full relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Card Column */}
                  <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.05 }}
                      className="relative border border-sohub-dark-grey bg-sohub-black p-8 hover:border-sohub-white/20 transition-all duration-300 group rounded-none hover:shadow-[0_0_20px_rgba(172,36,255,0.08)]"
                    >
                      {/* Technical Hover Color Accent Strip (Inner Edge) */}
                      <div className={`hidden md:block w-[3px] bg-gradient-to-b from-[#1C4EFF] to-[#34D399] absolute top-0 bottom-0 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 ${
                        isEven ? 'left-0' : 'right-0'
                      }`} />
                      <div className="block md:hidden w-[3px] bg-gradient-to-b from-[#1C4EFF] to-[#34D399] absolute left-0 top-0 bottom-0 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                      {/* Tech Corner Decoration Crosshairs */}
                      <div className="absolute top-2 left-2 text-sohub-grey/30 font-mono text-[9px] select-none">+</div>
                      <div className="absolute top-2 right-2 text-sohub-grey/30 font-mono text-[9px] select-none">+</div>
                      
                      {/* Connector line to center spine (Desktop & Mobile directional correction) */}
                      <div className={`hidden md:block absolute top-[42px] w-8 border-t border-dashed border-sohub-dark-grey group-hover:border-sohub-white/30 transition-colors ${
                        isEven ? 'right-full' : 'left-full'
                      }`} />
                      <div className="block md:hidden absolute top-[42px] right-full w-6 border-t border-dashed border-sohub-dark-grey" />
                      
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-mono font-bold text-sohub-white uppercase tracking-widest bg-sohub-dark-grey px-2 py-0.5 border border-sohub-dark-grey/80">
                              {item.year}
                            </span>
                            <span className={`text-[9px] font-mono px-2 py-0.5 border uppercase tracking-wider bg-sohub-black/35 ${statusColorClass}`}>
                              {statusText}
                            </span>
                          </div>
                          <h3 className="text-md font-display-title font-bold text-sohub-white uppercase tracking-wider mt-3 group-hover:text-[#34D399] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <div className="w-10 h-10 border border-sohub-dark-grey bg-sohub-dark-grey/25 flex items-center justify-center text-sohub-grey group-hover:text-sohub-white group-hover:border-sohub-white/30 transition-all duration-300 group-hover:rotate-6">
                          <item.icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Monospace Code tag */}
                      <div className="text-[9px] font-mono text-sohub-grey/50 mb-4 select-none">
                        NODE_INDEX // 0x{nodeIndex} // SIG: {item.title.toUpperCase().replace(/[^A-Z0-9]/g, '_')}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-sohub-grey leading-relaxed mb-6 font-medium">
                        {item.description}
                      </p>

                      {/* Highlights styled as console checks */}
                      <div className="space-y-2.5 pt-4 border-t border-sohub-dark-grey/50">
                        {item.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="text-[10px] text-[#34D399] font-mono select-none font-bold">
                              [OK]
                            </span>
                            <span className="text-[11px] text-sohub-grey font-medium leading-relaxed">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Spine Center Node Indicator */}
                  <div 
                    className="absolute left-[22px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10" 
                    style={{ top: '32px' }}
                  >
                    <motion.div 
                      whileInView={{ scale: [0.8, 1.3, 1] }}
                      viewport={{ once: true }}
                      className="w-5 h-5 border-2 border-sohub-dark-grey bg-sohub-black rounded-none flex items-center justify-center hover:border-sohub-white transition-colors cursor-pointer group"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.25, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-[#34D399] group-hover:bg-[#FE881B] transition-colors" 
                      />
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop alignment */}
                  <div className="hidden md:block w-full md:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress & Goals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Progress Stack (Span 7) */}
          <div className="lg:col-span-7 border border-sohub-dark-grey p-8 bg-sohub-black relative">
            {/* Tech Corner Crosshairs */}
            <div className="absolute top-2 left-2 text-sohub-grey/30 font-mono text-[9px] select-none">+</div>
            <div className="absolute top-2 right-2 text-sohub-grey/30 font-mono text-[9px] select-none">+</div>
            
            <span className="text-xxs uppercase tracking-widest text-[#34D399] font-mono font-bold block mb-2">// ROADMAP_STATS</span>
            <h2 className="text-xl font-bold text-sohub-white uppercase tracking-tight font-display mb-10">
              Learning Progress
            </h2>
            
            <div className="space-y-6">
              {[
                { skill: 'Programming Fundamentals', start: 2024, progress: 95 },
                { skill: 'Web Development', start: 2025, progress: 90 },
                { skill: 'AI & Machine Learning', start: 2025, progress: 70 },
                { skill: 'System Design', start: 2025, progress: 60 },
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="space-y-2.5"
                >
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                    <div>
                      <span className="text-sohub-white font-display">{item.skill}</span>
                      <span className="text-[9px] text-sohub-grey block mt-0.5 normal-case font-medium">Since {item.start}</span>
                    </div>
                    <span className="text-sohub-white font-mono">{item.progress}%</span>
                  </div>
                  
                  {/* Segmented Level Bar */}
                  <SegmentedBar progress={item.progress} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Next Goals Card (Span 5) */}
          <div className="lg:col-span-5 border border-sohub-dark-grey p-8 bg-sohub-black flex flex-col justify-between min-h-[340px] relative overflow-hidden group">
            {/* Tech Corner Crosshairs */}
            <div className="absolute top-2 left-2 text-sohub-grey/30 font-mono text-[9px] select-none">+</div>
            <div className="absolute top-2 right-2 text-sohub-grey/30 font-mono text-[9px] select-none">+</div>
            <div className="absolute bottom-2 left-2 text-sohub-grey/30 font-mono text-[9px] select-none">+</div>
            <div className="absolute bottom-2 right-2 text-sohub-grey/30 font-mono text-[9px] select-none">+</div>

            <div className="absolute inset-0 bg-gradient-to-r from-sohub-white/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-xxs uppercase tracking-widest text-[#34D399] font-bold flex items-center gap-1.5">
                <Rocket className="w-3.5 h-3.5" /> Forward Look
              </span>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-sohub-white font-display">
                What's Next?
              </h2>
              <p className="text-xs text-sohub-grey leading-relaxed font-medium">
                Continuing to push engineering limits, master production-level model integrations, and launch scalable digital solutions that tackle real challenges.
              </p>
            </div>

            <div className="mt-8 relative z-10">
              <div className="inline-flex items-center gap-1.5 py-3 px-6 bg-sohub-white text-sohub-black font-bold text-xxs uppercase tracking-widest hover:bg-[#34D399] hover:text-sohub-white transition-colors duration-300 select-none cursor-pointer">
                <Sparkles className="w-3.5 h-3.5" /> The journey continues
              </div>
            </div>
          </div>

        </div>

      </div>
    </PageTransition>
  );
}
