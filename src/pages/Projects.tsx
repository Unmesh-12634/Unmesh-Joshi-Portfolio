import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { ArrowUpRight, Github, ExternalLink, Grid, List } from 'lucide-react';

export function Projects() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const projects = [
    {
      title: 'MEDUCATE',
      category: 'Healthcare AI',
      year: '2026',
      description: 'Meducators is an AI-powered medical learning platform designed to make healthcare education more interactive, accessible, and personalized. The platform combines intelligent knowledge retrieval, immersive 3D learning experiences, and contextual AI assistance to help students explore complex medical concepts more effectively. Developed through the collaborative efforts of our team, Meducators, with key contributions from Tanmay Jain and myself, the platform was carefully designed and refined to create a meaningful impact in medical education. We worked closely together to build an engaging learning experience that bridges technology and healthcare education. The project focuses on enhancing the learning journey through innovation, accessibility, and real-world educational value.',
      techStack: ['React', 'Vite', 'Supabase', 'Vertex AI'],
      github: '',
      live: 'https://meducate.vercel.app/',
    },
    {
      title: 'HACKMATE',
      category: 'Community Hub',
      year: '2026',
      description: 'HackMate is a platform designed to help students, developers, and innovators discover hackathons, connect with like-minded teammates, and collaborate on impactful ideas. The goal is to simplify the journey from finding opportunities to building strong teams and successful projects. Built as an independent initiative, HackMate focuses on community-driven collaboration, meaningful networking, and empowering aspiring builders to participate confidently in hackathons and innovation challenges.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      github: 'https://github.com/Unmesh-12634/HackMate',
      live: 'https://hack-mate-ecru.vercel.app/',
    },
    {
      title: 'RAG CREATOR STUDIO',
      category: 'AI Intelligence',
      year: '2026',
      description: 'RAG Creator Studio is an AI-powered intelligence platform designed to help creators analyze, compare, and understand content performance across videos and short-form media. By combining retrieval-augmented generation with contextual analysis, the platform transforms raw content into actionable insights. The system enables users to explore trends, extract meaningful information from transcripts, and interact with content through natural conversations, making research, content strategy, and decision-making significantly more efficient.',
      techStack: ['React', 'Node.js', 'Vertex AI', 'Python'],
      github: 'https://github.com/Unmesh-12634/RAG-Chatbot',
      live: 'https://rag-chatbot-xi-steel.vercel.app/',
    },
    {
      title: 'MINE VISION (SIH PROJECT)',
      category: 'Computer Vision',
      year: '2025',
      description: 'A Smart India Hackathon project leveraging computer vision and AI to process and analyze visual data. Built with backend logic, ML integration, and database connectivity.',
      techStack: ['AI/ML', 'Backend', 'Python', 'OpenCV'],
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
                  className="bg-sohub-dark-grey border border-sohub-dark-grey/60 p-8 flex flex-col justify-between h-[360px] group transition-colors duration-300 hover:border-sohub-white/20"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-sohub-grey">{project.category}</span>
                        <h3 className="text-xl font-bold text-sohub-white group-hover:translate-x-1.5 transition-transform duration-300 flex items-center gap-1">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-sohub-grey opacity-0 group-hover:opacity-100 group-hover:text-sohub-white transition-all duration-300" />
                    </div>

                    <p className="text-xs md:text-sm text-sohub-grey leading-relaxed line-clamp-4">
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
