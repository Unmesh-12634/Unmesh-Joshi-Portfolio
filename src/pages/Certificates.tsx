import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Award, Calendar, FileText, ArrowRight, ExternalLink } from 'lucide-react';

interface Credential {
  title: string;
  organizer: string;
  description: string;
  achievement: string;
  image: string;
  date: string;
  certificateId?: string;
  type: 'course' | 'internship' | 'hackathon';
  category?: 'aiml' | 'fullstack' | 'other';
}

export function Certificates() {
  const [openCertTitle, setOpenCertTitle] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'aiml' | 'other' | 'fullstack'>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string | null>(null);

  const toggleCert = (title: string) => {
    setOpenCertTitle(openCertTitle === title ? null : title);
  };

  const courses: Credential[] = [
    {
      title: 'National Workshop on "Mobile Device and Application Security"',
      organizer: 'CUSAT, IIT Jammu & ISEA',
      description: 'Completed a five-day National Workshop on Mobile Device and Application Security organized by the Department of Computer Applications, Cochin University of Science and Technology (CUSAT), in collaboration with IIT Jammu under the ISEA project. The intensive training program focused on identification of vulnerabilities in mobile operating systems, secure coding patterns for mobile applications, threat landscape mapping, and defensive security measures, supported by the Ministry of Electronics and Information Technology (MeitY).',
      achievement: 'Certificate of Participation',
      image: '/Courses/mobile_device_and_application_security_workshop_2026.png',
      date: 'February 23 - 26, 2026',
      type: 'course',
      category: 'other'
    },
    {
      title: 'AI-Machine Learning Engineer Certificate Course',
      organizer: 'Reliance Foundation & Skill India',
      description: 'Successfully completed the 150-hour online skilling course on AI-Machine Learning Engineer Certificate Course offered by Reliance Foundation Skilling Academy through Skill India Digital Hub. Gained comprehensive knowledge and practical skills in AI/ML engineering, pipeline development, and model optimization.',
      achievement: 'Certificate of Completion',
      image: '/Courses/9UN00HSOS7.png',
      date: 'February 01, 2026',
      certificateId: '9UN00HSOS7',
      type: 'course',
      category: 'aiml'
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      organizer: 'Oracle',
      description: 'Global professional certification from Oracle University. Validates comprehensive expertise in Large Language Models (LLMs), prompt engineering, Retrieval-Augmented Generation (RAG), fine-tuning models, and deploying generative AI pipelines on Oracle Cloud Infrastructure.',
      achievement: 'Oracle Certified Professional',
      image: '/Courses/oracle_genai_2025.png',
      date: 'August 13, 2025',
      certificateId: '321663739OCI25GAIOCP',
      type: 'course',
      category: 'aiml'
    },
    {
      title: 'Gen AI Academy 2.0',
      organizer: 'Google Cloud & Hack2skill',
      description: 'Successfully completed the AI/ML learning track of the Gen AI Academy 2.0. Gained hands-on skills in data preparation using Dataprep and Dataflow, Apache Spark execution on Dataproc, and integrating key machine learning APIs (Natural Language, Speech-to-Text, Video Intelligence, and Document AI) for automated data extraction pipelines.',
      achievement: 'Completion Certificate',
      image: '/Courses/google_genai_2_0.png',
      date: 'December 26, 2025',
      certificateId: '2025H2S10GENAI-AIML100132',
      type: 'course',
      category: 'aiml'
    },
    {
      title: 'AWS Cloud Practitioner Essentials',
      organizer: 'AWS',
      description: 'Completed the official AWS Training & Certification course covering cloud concepts, AWS core services, security, architecture, pricing models, and cloud support options.',
      achievement: 'Completion Certificate',
      image: '/Courses/aws_cloud_practitioner.png',
      date: 'December 21, 2025',
      type: 'course',
      category: 'other'
    },
    {
      title: 'CyberSecurity Fundamentals',
      organizer: 'IBM',
      description: 'Foundational course detailing network security, threat vectors, data privacy policies, and encryption algorithms.',
      achievement: 'Certificate of Completion',
      image: '/Courses/CyberSecurity.png',
      date: '2024',
      type: 'course',
      category: 'other'
    },
    {
      title: 'Full Stack Web Development',
      organizer: 'Online Learning',
      description: 'Comprehensive course covering MERN stack and modern web development practices.',
      achievement: 'Completed with Distinction',
      image: '/Courses/Full Stack.png',
      date: '2024',
      type: 'course',
      category: 'fullstack'
    },
    {
      title: 'IBM SkillBuild - Beginner\'s Guide to Front End Web Development',
      organizer: 'CSRBOX Foundation & IBM SkillBuild',
      description: 'Successfully completed the IBM SkillBuild Project Based Learning Program - Beginner\'s Guide to Front End Web Development with CSRBOX. Learned comprehensive front-end development skills including HTML, CSS, JavaScript, and modern web development practices.',
      achievement: 'Certificate of Completion',
      image: '/Courses/IBM.png',
      date: 'July - August 2025',
      certificateId: 'IBM25PBL2337',
      type: 'course',
      category: 'fullstack'
    },
  ];

  const filteredCourses = courses.filter(
    (course) => activeCategory === 'all' || course.category === activeCategory
  );

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Header Title */}
        <div className="border-b border-sohub-dark-grey pb-8 mb-16">
          <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold block mb-2">Milestones Log</span>
          <h1 className="text-4xl md:text-7xl font-display-title font-extrabold uppercase leading-none text-sohub-white">
            CREDENTIALS
          </h1>
        </div>

        {/* Vertical Stack List Wrapper (Flexbox Layout) */}
        <div className="flex flex-col gap-16">
          
          {/* Courses & Certifications Section */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-baseline border-b border-sohub-dark-grey pb-3 mb-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-sohub-grey block">01 / COURSES & CERTIFICATIONS</span>
              <span className="text-xxs text-sohub-grey font-mono">{filteredCourses.length} CREDENTIALS</span>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { id: 'all', label: 'All' },
                { id: 'aiml', label: 'AI / ML' },
                { id: 'other', label: 'Other' },
                { id: 'fullstack', label: 'Full Stack' }
              ].map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveCategory(tab.id as any);
                      setOpenCertTitle(null);
                    }}
                    className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest border transition-all duration-300 relative cursor-pointer ${
                      isActive
                        ? 'border-sohub-white bg-sohub-white text-sohub-black font-bold shadow-md'
                        : 'border-sohub-dark-grey bg-sohub-black/30 text-sohub-grey hover:border-sohub-white/20 hover:text-sohub-white'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-sohub-white border border-sohub-black rotate-45" />
                    )}
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col">
              {filteredCourses.map((course, index) => {
                const isExpanded = openCertTitle === course.title;
                const paddedIndex = String(index + 1).padStart(2, '0');
                
                return (
                  <div key={course.title} className="flex flex-col">
                    {/* Accordion Row Header */}
                    <div
                      onClick={() => toggleCert(course.title)}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between py-5 px-4 cursor-pointer border-t border-sohub-dark-grey/60 last:border-b transition-all duration-300 hover:bg-sohub-dark-grey/15 group ${
                        isExpanded ? 'bg-sohub-dark-grey/10' : ''
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[9px] text-sohub-grey bg-sohub-dark-grey/25 px-2 py-0.5 border border-sohub-dark-grey/50 group-hover:border-sohub-soft-grey/30 group-hover:text-sohub-white transition-colors">
                          C_{paddedIndex}
                        </span>
                        <h4 className="font-display text-xs md:text-sm font-bold uppercase tracking-wider text-sohub-white group-hover:text-sohub-soft-grey transition-colors">
                          {course.title}
                        </h4>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 mt-3 sm:mt-0 pt-2 sm:pt-0 border-t border-sohub-dark-grey/20 sm:border-0">
                        <span className="font-mono text-xxs text-sohub-grey">
                          {course.organizer}
                        </span>
                        <div className="flex items-center gap-6">
                          <span className="font-mono text-xxs text-sohub-grey text-right min-w-[70px]">
                            {course.date}
                          </span>
                          <span className="font-mono text-xs text-sohub-grey group-hover:text-sohub-white transition-colors font-bold w-4 text-center">
                            {isExpanded ? '[-]' : '[+]'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Collapsible Expanded Details */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden bg-sohub-dark-grey/5 border-t border-sohub-dark-grey/40"
                        >
                          <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8 items-start">
                            {/* Certificate Image Frame */}
                            {course.image && (
                              <div 
                                onClick={() => {
                                  setLightboxImage(course.image);
                                  setLightboxTitle(course.title);
                                }}
                                className="w-full md:w-2/5 flex-shrink-0 border border-sohub-dark-grey p-2 bg-sohub-black/80 relative group/img overflow-hidden cursor-pointer"
                              >
                                <img 
                                  src={course.image} 
                                  alt={course.title} 
                                  className="w-full max-h-[200px] object-contain transition-transform duration-500 group-hover/img:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                  <ExternalLink className="w-5 h-5 text-white" />
                                </div>
                              </div>
                            )}

                            {/* Details Node */}
                            <div className="flex-grow font-mono text-[10px] leading-relaxed space-y-4 w-full">
                              <div className="flex justify-between items-center border-b border-sohub-dark-grey/40 pb-2">
                                <span className="font-bold text-sohub-white uppercase">METADATA_NODE // {course.organizer.toUpperCase()}</span>
                                <span className="text-white bg-sohub-dark-grey px-1.5 py-0.5 font-bold">[VERIFIED]</span>
                              </div>

                              <div className="space-y-3">
                                <div>
                                  <span className="text-sohub-grey block font-bold">CREDENTIAL //</span>
                                  <p className="text-sohub-white font-sans text-xs font-semibold mt-0.5">{course.title}</p>
                                </div>
                                <div>
                                  <span className="text-sohub-grey block font-bold">SCOPE / STATUS //</span>
                                  <p className="text-sohub-white font-sans text-xs font-semibold mt-0.5">{course.achievement}</p>
                                </div>
                                <div>
                                  <span className="text-sohub-grey block font-bold">DESCRIPTION //</span>
                                  <p className="text-sohub-grey font-sans text-xs leading-relaxed font-medium mt-0.5">{course.description}</p>
                                </div>
                                
                                {course.certificateId && (
                                  <div>
                                    <span className="text-sohub-grey block font-bold">VERIFICATION_ID //</span>
                                    <p className="text-sohub-white font-sans text-xs font-semibold mt-0.5">{course.certificateId}</p>
                                  </div>
                                )}
                                
                                <div className="pt-2 border-t border-sohub-dark-grey/30 flex justify-between items-center text-[9px] text-sohub-grey">
                                  <span>ISSUED: {course.date}</span>
                                  <span>STATUS: ACTIVE_NODE</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Stats Flex Dashboard (Grid-Free) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 flex flex-col sm:flex-row gap-6 max-w-4xl mx-auto w-full justify-between items-stretch"
        >
          <div className="flex-1 border border-sohub-dark-grey p-6 bg-sohub-black text-center relative">
            <span className="absolute top-1 left-2 font-mono text-[8px] text-sohub-grey/50">NODE_01</span>
            <h4 className="text-4xl font-display-title font-extrabold text-sohub-white leading-none">
              {courses.filter(c => c.category === 'aiml').length}
            </h4>
            <span className="text-[9px] uppercase tracking-wider text-sohub-grey mt-2 block font-mono">AI / ML</span>
          </div>
          <div className="flex-1 border border-sohub-dark-grey p-6 bg-sohub-black text-center relative">
            <span className="absolute top-1 left-2 font-mono text-[8px] text-sohub-grey/50">NODE_02</span>
            <h4 className="text-4xl font-display-title font-extrabold text-sohub-white leading-none">
              {courses.filter(c => c.category === 'fullstack').length}
            </h4>
            <span className="text-[9px] uppercase tracking-wider text-sohub-grey mt-2 block font-mono">Full Stack</span>
          </div>
          <div className="flex-1 border border-sohub-dark-grey p-6 bg-sohub-black text-center relative">
            <span className="absolute top-1 left-2 font-mono text-[8px] text-sohub-grey/50">NODE_03</span>
            <h4 className="text-4xl font-display-title font-extrabold text-sohub-white leading-none">
              {courses.filter(c => c.category === 'other').length}
            </h4>
            <span className="text-[9px] uppercase tracking-wider text-sohub-grey mt-2 block font-mono">Other / Cloud</span>
          </div>
          <div className="flex-1 border border-sohub-dark-grey p-6 bg-sohub-black text-center relative">
            <span className="absolute top-1 left-2 font-mono text-[8px] text-sohub-grey/50">NODE_04</span>
            <h4 className="text-4xl font-display-title font-extrabold text-sohub-white leading-none">
              {courses.length}
            </h4>
            <span className="text-[9px] uppercase tracking-wider text-sohub-grey mt-2 block font-mono">Total Certifications</span>
          </div>
        </motion.div>

      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
            onClick={() => {
              setLightboxImage(null);
              setLightboxTitle(null);
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setLightboxImage(null);
                setLightboxTitle(null);
              }}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-55 cursor-pointer p-2 border border-white/10 bg-white/5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Fullscreen Certificate Image */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt={lightboxTitle || 'Certificate'}
                className="max-w-full max-h-[75vh] object-contain border border-white/10"
              />
              {lightboxTitle && (
                <div className="text-center px-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#8B95A7] block mb-1">
                    Credential Vault
                  </span>
                  <h4 className="text-xs font-bold uppercase text-white leading-tight">
                    {lightboxTitle} - Official Certificate
                  </h4>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}