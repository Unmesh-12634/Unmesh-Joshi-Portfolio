import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { ArrowUpRight, Github, ExternalLink, Grid, List } from 'lucide-react';

export function Projects() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const projects = [
    {
      title: 'CDA STUDENT MOBILE APPLICATION',
      category: 'Mobile App & Full Stack Java',
      year: '2026',
      featured: true,
      description: 'Engineered as Project Lead during the Cranes Varsity internship. Spearheaded the architecture and development of the student mobile application for CDA (Cranes Digital Academy), coordinating full-stack integration, backend REST APIs, student profiles, and live course modules. Recognized with the Certificate of Accomplishment and crystal trophy.',
      techStack: ['Flutter', 'Java', 'Spring Boot', 'REST APIs', 'Supabase'],
      github: '',
      live: '',
    },
    {
      title: 'AEROX',
      category: 'SIH 2026 Hackathon Product',
      year: '2026',
      featured: true,
      description: 'AeroX is our flagship hackathon product developed for Smart India Hackathon (SIH) 2026. Built under high-pressure competitive conditions, AeroX focuses on airfare prediction pipelines, dynamic flight data processing, and scalable backend services. Engineered to deliver reliable real-time performance and responsive user interaction.',
      techStack: ['Java', 'Spring Boot', 'REST APIs', 'React', 'AI/ML'],
      github: '',
      live: '',
    },
    {
      title: 'SENTI',
      category: 'Multimodal AI Desktop Assistant',
      year: '2026',
      featured: true,
      description: 'SENTI is an advanced multimodal AI desktop assistant designed to unify system control and intelligent task execution. Features OS control, voice automation, WhatsApp messaging automation, web automation, multi-agent architecture, persistent memory system, and research automation for streamlined desktop productivity.',
      techStack: ['Python', 'AI Agents', 'Multi-Agent', 'Voice AI', 'Automation'],
      github: 'https://github.com/Unmesh-12634',
      live: '',
    },
    {
      title: 'HACKMATE',
      category: 'Collaborative Platform',
      year: '2026',
      description: 'HackMate is a real-time collaborative platform designed for hackathons and team productivity. It empowers students, developers, and innovators to discover hackathons, match with like-minded teammates, and collaborate on project boards seamlessly.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      github: 'https://github.com/Unmesh-12634/HackMate',
      live: 'https://hack-mate-ecru.vercel.app/',
    },
    {
      title: 'MEDUCATE',
      category: 'Healthcare AI',
      year: '2026',
      description: 'Meducate is an AI-powered medical learning platform designed to make healthcare education interactive, accessible, and personalized. The platform combines intelligent RAG retrieval, immersive 3D anatomy visualization, and contextual AI assistance. Collaboratively developed with Tanmay Jain, winning 1st Place at Google Lakecity Hackathon 2026.',
      techStack: ['React', 'Three.js', 'RAG', 'Vertex AI', 'Tailwind'],
      github: '', 
      live: 'https://meducate.vercel.app/',
    },
    {
      title: 'RAG CREATOR STUDIO',
      category: 'AI Intelligence',
      year: '2026',
      description: 'An AI-powered intelligence platform combining LangChain, ChromaDB, and Pinecone vector search with contextual analysis to transform content into actionable insights. Supports natural conversations, transcript search, and trend extraction.',
      techStack: ['Python', 'LangChain', 'ChromaDB', 'Pinecone', 'React'],
      github: 'https://github.com/Unmesh-12634/RAG-Chatbot',
      live: 'https://rag-chatbot-xi-steel.vercel.app/',
    },
    {
      title: 'MINE VISION (ROCKFALL DETECTION & PREDICTION)',
      category: 'Computer Vision & AI',
      year: '2025',
      description: 'A Smart India Hackathon project leveraging computer vision and AI to process and analyze opencast mining visual data. Engineered with YOLOv8 object detection, OpenCV, and telemetry models for automated rockfall hazard prediction and worker safety.',
      techStack: ['Python', 'OpenCV', 'YOLOv8', 'FastAPI', 'TensorFlow'],
      github: 'https://github.com/Unmesh-12634/minevision/tree/main',
      live: '#',
    },
    {
      title: 'KRISHNAM',
      category: 'Creative Frontend',
      year: '2024',
      description: 'A beautifully designed and responsive frontend project focused on creativity and user interaction. Built with core web technologies for smooth performance and modern UI.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Unmesh-12634/Krishnam',
      live: 'https://unmesh-12634.github.io/Krishnam/',
    },
    {
      title: 'YATRA PATH',
      category: 'Travel Assistant',
      year: '2024',
      description: 'A travel-planning web app helping users explore destinations, routes, and trip info with an elegant, accessible UI.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Unmesh-12634/PROJECT-UDAIPUR',
      live: 'https://unmesh-12634.github.io/PROJECT-UDAIPUR/',
    },
    {
      title: 'STUDI',
      category: 'EdTech Assistant',
      year: '2024',
      description: 'An educational assistant platform for students — manage notes, timetables, and resources efficiently with an intuitive interface.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Unmesh-12634/Studi',
      live: 'https://unmesh-12634.github.io/Studi/',
    },
    {
      title: 'CLARITY AI',
      category: 'Interface Design',
      year: '2025',
      description: 'A futuristic web interface inspired by AI and data visualization — emphasizes clarity, interactivity, and clean UI design.',
      techStack: ['React', 'D3.js', 'Tailwind'],
      github: 'https://github.com/Unmesh-12634/clarity-ai',
      live: 'https://unmesh-12634.github.io/clarity-ai/',
    },
    {
      title: 'DUALITY AI',
      category: 'Machine Learning',
      year: '2026',
      description: 'A hackathon project integrating backend intelligence and AI automation. Demonstrates model pipelines, decision logic, and backend-ML synergy.',
      techStack: ['AI/ML', 'Backend', 'Python'],
      github: 'https://github.com/Unmesh-12634/duality-hackathon-submission',
      live: '#',
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        
        {/* Header and View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-sohub-dark-grey pb-8 mb-16 gap-6">
          <div>
            <span className="text-xxs uppercase tracking-widest text-sohub-grey font-semibold block mb-2">Projects Log</span>
            <h1 className="text-4xl md:text-7xl font-display-title font-extrabold uppercase leading-none text-sohub-white">
              WORKS
            </h1>
          </div>
          
          {/* SOHub Style View Toggle Switcher */}
          <div className="relative flex items-center p-1 bg-sohub-dark-grey border border-sohub-dark-grey/60 h-10 w-44">
            <button
              onClick={() => setViewMode('grid')}
              className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 text-xxs uppercase tracking-wider font-bold h-full transition-colors duration-300 ${
                viewMode === 'grid' ? 'text-sohub-black' : 'text-sohub-grey hover:text-sohub-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" /> Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 text-xxs uppercase tracking-wider font-bold h-full transition-colors duration-300 ${
                viewMode === 'list' ? 'text-sohub-black' : 'text-sohub-grey hover:text-sohub-white'
              }`}
            >
              <List className="w-3.5 h-3.5" /> List
            </button>

            {/* Sliding backdrop pill */}
            <motion.div
              layout
              className="absolute top-1 bottom-1 left-1 bg-sohub-white"
              style={{
                width: 'calc(50% - 4px)',
                x: viewMode === 'grid' ? 0 : '100%',
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          </div>
        </div>

        {/* Dynamic Works Container */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            /* Grid View */
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`p-8 flex flex-col justify-between h-[370px] group transition-all duration-300 relative overflow-hidden ${
                    project.title === 'AEROX'
                      ? 'border border-amber-500/40 bg-gradient-to-br from-amber-500/[0.08] via-sohub-dark-grey to-sohub-dark-grey hover:border-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.08)]'
                      : (project as any).featured
                      ? 'border border-slate-300/30 bg-gradient-to-br from-slate-400/[0.06] via-sohub-dark-grey to-sohub-dark-grey hover:border-slate-200'
                      : 'bg-sohub-dark-grey border border-sohub-dark-grey/60 hover:border-sohub-white/20'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-sohub-grey">{project.category}</span>
                          {project.title === 'AEROX' && (
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40">
                              ★ SIH 2026
                            </span>
                          )}
                          {project.title === 'SENTI' && (
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-white/10 text-sohub-white border border-white/20">
                              AI AGENT
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-sohub-white group-hover:translate-x-1.5 transition-transform duration-300 flex items-center gap-1">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-sohub-grey opacity-0 group-hover:opacity-100 group-hover:text-sohub-white transition-all duration-300" />
                    </div>

                    <p className="text-xs md:text-sm text-sohub-grey leading-relaxed line-clamp-4 font-medium">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-6 pt-4 border-t border-sohub-black/35">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] uppercase font-bold text-sohub-white bg-sohub-black px-2 py-0.5 border border-sohub-dark-grey"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-2 bg-sohub-black text-sohub-white border border-sohub-dark-grey text-center font-bold text-[10px] uppercase tracking-widest hover:bg-sohub-white hover:text-sohub-black transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Github className="w-3.5 h-3.5" /> Code
                        </a>
                      )}
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className={`${
                          project.github && project.github !== '#' ? 'flex-1' : 'w-full'
                        } py-2 bg-sohub-white text-sohub-black text-center font-bold text-[10px] uppercase tracking-widest hover:bg-sohub-soft-grey transition-colors flex items-center justify-center gap-1.5 ${
                          !project.live || project.live === '#' ? 'pointer-events-none opacity-40' : ''
                        }`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* List View */
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="border border-sohub-dark-grey bg-sohub-black overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-sohub-dark-grey text-xxs uppercase tracking-widest text-sohub-grey font-bold bg-sohub-dark-grey/25">
                      <th className="py-4 px-6">Project Title</th>
                      <th className="py-4 px-6 hidden sm:table-cell">Category</th>
                      <th className="py-4 px-6">Year</th>
                      <th className="py-4 px-6 text-right">Links</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr 
                        key={project.title}
                        className="border-b border-sohub-dark-grey/65 last:border-0 hover:bg-sohub-dark-grey/30 transition-colors duration-200 group"
                      >
                        <td className="py-5 px-6 font-bold text-sm text-sohub-white group-hover:translate-x-1.5 transition-transform duration-200">
                          {project.title}
                        </td>
                        <td className="py-5 px-6 text-xs text-sohub-grey hidden sm:table-cell">
                          {project.category}
                        </td>
                        <td className="py-5 px-6 text-xs text-sohub-grey">
                          {project.year}
                        </td>
                        <td className="py-5 px-6 text-right">
                          <div className="inline-flex justify-end gap-3">
                            {project.github && project.github !== '#' && (
                              <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="p-1.5 border border-sohub-dark-grey text-sohub-grey hover:text-sohub-white hover:border-sohub-white/20 transition-all"
                                title="Github Code"
                              >
                                <Github className="w-4 h-4" />
                              </a>
                            )}
                            <a 
                              href={project.live} 
                              target="_blank" 
                              rel="noreferrer" 
                              className={`p-1.5 border border-sohub-dark-grey text-sohub-grey hover:text-sohub-white hover:border-sohub-white/20 transition-all ${
                                !project.live || project.live === '#' ? 'pointer-events-none opacity-30' : ''
                              }`}
                              title="Live Demo"
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
