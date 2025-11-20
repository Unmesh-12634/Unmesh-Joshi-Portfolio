import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Card } from '../components/Card';
import { Award, BookOpen, Trophy, ExternalLink, Briefcase } from 'lucide-react';
import { useState } from 'react';

export function Certificates() {
  const [activeTab, setActiveTab] = useState<'hackathons' | 'courses' | 'internship'>('hackathons');
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const hackathons = [
    {
      title: 'Hack with UP',
      organizer: 'HackerRank',
      description: 'Certificate of participation in Hack with UP hackathon organized by HackerRank. This event brought together developers and problem solvers to create innovative solutions.',
      achievement: 'Certificate of Participation',
      image: '/Hackathons/HackWithUP.png',
      date: '2025',
    },
    {
      title: 'BuildwithDelhi 2.0',
      organizer: 'HackWithIndia',
      description: 'Secured a position in the Top 40 at BuildwithDelhi 2.0, conducted by HackWithIndia at Microsoft Gurgaon. Demonstrated remarkable innovation, skills, and performance during the hackathon. The contribution stood out and was sincerely celebrated.',
      achievement: 'Top 40 Position - Certificate of Achievement',
      image: '/Hackathons/Microsoft Top 40.png',
      date: 'August 6, 2025',
    },
    {
      title: 'SUNHACKS-2K25',
      organizer: 'Sandip University, Nashik',
      description: 'International Level Hackathon organized by School of Computer Sciences & Engineering. Participated in building innovative solutions for real-world problems.',
      achievement: 'Certificate of Participation',
      image: '/Hackathons/SunHack.png',
      date: 'August 21-23, 2025',
    },
    {
      title: 'Google Cloud Agentic AI Day',
      organizer: 'Google Cloud & Hack2skill',
      description: 'Participated in the Google Cloud Agentic AI Day event. Joined a community of changemakers harnessing the power of Agentic AI to address real-world problems.',
      achievement: 'Certificate of Participation',
      image: '/Hackathons/Hack2skill-Certificate.png',
      date: '2025',
    },
    {
      title: 'Hack2skill- ISRO Certificate',
      organizer: 'Hack2skill',
      description: 'Certificate for participation in a hackathon organized by Hack2skill in collaboration with ISRO.',
      achievement: 'Certificate of Participation',
      image: '/Hackathons/Hack2skill- ISRO Certificate.png',
      date: '2025',
    },
    {
      title: 'Hack2skill1 Certificate',
      organizer: 'Hack2skill',
      description: 'Certificate for participation in a hackathon organized by Hack2skill.',
      achievement: 'Certificate of Participation',
      image: '/Hackathons/Hack2skill1-Certificate.png',
      date: '2025',
    },
    {
      title: 'NASA Certificate',
      organizer: 'NASA',
      description: 'Certificate for participation in a NASA hackathon.',
      achievement: 'Certificate of Participation',
      image: '/Hackathons/nasa.jpg',
      date: '2025',
    },
  ];

  const courses = [
    {
      title: 'Oracle',
      organizer: 'Oracle',
      description: 'I am a certified generative AI professional with a global certification from Oracle. This certification validates my expertise in generative AI and its applications.',
      achievement: 'Certificate of Completion',
      image: '/Courses/Oracle.png',
    },
    {
      title: 'IBM SkillBuild - Click, Code, Create',
      organizer: 'CSRBOX Foundation & IBM SkillBuild',
      description: 'Successfully completed the IBM SkillBuild Project Based Learning Program - Click, Code, Create: Beginner\'s Guide to Front End Web Development with CSRBOX. Learned comprehensive front-end development skills including HTML, CSS, JavaScript, and modern web development practices.',
      achievement: 'Certificate of Completion',
      image: '/Courses/IBM.png',
      date: 'July - August 2025',
      certificateId: 'Team ID: IBM25PBL2337',
    },
    {
      title: 'Gen AI Academy',
      organizer: 'Google Cloud',
      description: 'Successfully completed the Gen AI Academy, an initiative designed to foster industry-relevant AI expertise through a curated set of Generative AI courses. Gained foundational knowledge and practical skills utilizing key Google\'s Gen AI tools and platforms, including Vertex AI, Gemini APIs, Imagen, Streamlit and Multimodal RAG.',
      achievement: 'Completion Certificate',
      image: '/Courses/9UN00HSOS7.png',
      date: 'May 28, 2025',
      certificateId: '2025H2S04GENAI-A00488',
    },
    {
      title: 'Full Stack Web Development',
      organizer: 'Online Learning',
      description: 'Comprehensive course covering MERN stack and modern web development practices.',
      achievement: 'Completed with Distinction',
      image: '/Courses/Full Stack.png',
    },
    {
      title: 'CyberSecurity',
      organizer: 'IBM',
      description: 'CyberSecurity course.',
      achievement: 'Certificate of Completion',
      image: '/Courses/CyberSecurity.png',
    },
  ];

  const internships = [
    {
      title: 'CodeSoft',
      organizer: 'CodeSoft',
      description: 'Completed a one-month internship at CodeSoft, gaining hands-on experience in web development and contributing to real-world projects.',
      achievement: 'Certificate of Completion',
      image: '/Internship/CodeSoft.png',
    },
    {
      title: 'Cognifyz Internship',
      organizer: 'Cognifyz',
      description: 'Successfully completed an internship program at Cognifyz, focusing on data science and machine learning.',
      achievement: 'Certificate of Completion',
      image: '/Internship/Cognifyz.png',
    },
  ];

  const currentData = activeTab === 'hackathons' ? hackathons : activeTab === 'courses' ? courses : internships;

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Certificates & Achievements
          </h1>
          <p className="text-muted-foreground">Recognition and learning milestones</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('hackathons')}
            className={`
              px-4 py-2 md:px-8 md:py-4 rounded-lg transition-all duration-300 flex items-center gap-3
              ${activeTab === 'hackathons'
                ? 'bg-gradient-to-r from-primary to-secondary text-background'
                : 'border border-primary text-primary hover:bg-primary/10'
              }
            `}
          >
            <Trophy className="w-5 h-5" />
            Hackathons
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('courses')}
            className={`
              px-4 py-2 md:px-8 md:py-4 rounded-lg transition-all duration-300 flex items-center gap-3
              ${activeTab === 'courses'
                ? 'bg-gradient-to-r from-primary to-secondary text-background'
                : 'border border-secondary text-secondary hover:bg-secondary/10'
              }
            `}
          >
            <BookOpen className="w-5 h-5" />
            Courses & Certifications
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('internship')}
            className={`
              px-4 py-2 md:px-8 md:py-4 rounded-lg transition-all duration-300 flex items-center gap-3
              ${activeTab === 'internship'
                ? 'bg-gradient-to-r from-primary to-secondary text-background'
                : 'border border-primary text-primary hover:bg-primary/10'
              }
            `}
          >
            <Briefcase className="w-5 h-5" />
            Internship
          </motion.button>
        </div>

        {/* Certificates Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {currentData.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  glowColor={activeTab === 'hackathons' ? 'primary' : activeTab === 'courses' ? 'secondary' : 'primary'}
                  onClick={() => setSelectedCertificate(selectedCertificate === index ? null : index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg ${activeTab === 'hackathons' ? 'bg-primary/20' : activeTab === 'courses' ? 'bg-secondary/20' : 'bg-primary/20'} flex items-center justify-center flex-shrink-0`}>
                      <Award className={`w-6 h-6 ${activeTab === 'hackathons' ? 'text-primary' : activeTab === 'courses' ? 'text-secondary' : 'text-primary'}`} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl mb-2">{cert.title}</h3>
                      <p className={`${activeTab === 'hackathons' ? 'text-primary' : activeTab === 'courses' ? 'text-secondary' : 'text-primary'} text-sm mb-3`}>
                        {cert.organizer}
                      </p>
                      
                      <AnimatePresence>
                        {selectedCertificate === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-primary/20"
                          >
                            {/* Certificate Image */}
                            {cert.image ? (
                              <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="relative group mb-4"
                              >
                                <img
                                  src={cert.image}
                                  alt={`${cert.title} Certificate`}
                                  loading="lazy"
                                  decoding="async"
                                  fetchPriority="low"
                                  className="w-full max-h-[600px] object-contain rounded-lg border border-primary/30 shadow-lg hover:shadow-primary/20 transition-shadow"
                                />
                                
                                {/* Zoom overlay on hover */}
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                  <ExternalLink className="w-8 h-8 text-primary" />
                                </div>
                              </motion.div>
                            ) : (
                              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center border border-primary/20">
                                <Award className="w-16 h-16 text-primary/30" />
                              </div>
                            )}
                            
                            <p className="text-muted-foreground mb-3">
                              {cert.description}
                            </p>
                            
                            {cert.date && (
                              <p className="text-sm text-muted-foreground mb-3">
                                📅 {cert.date}
                              </p>
                            )}
                            
                            {'certificateId' in cert && (
                              <p className="text-xs text-muted-foreground mb-3 font-mono">
                                Certificate ID: {(cert as any).certificateId}
                              </p>
                            )}
                            
                            <div className={`inline-block px-4 py-2 rounded-lg ${activeTab === 'hackathons' ? 'bg-primary/10 border border-primary/30' : 'bg-secondary/10 border border-secondary/30'}`}>
                              <p className="text-sm">{cert.achievement}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {selectedCertificate !== index && (
                        <p className="text-sm text-muted-foreground">
                          Click to view certificate
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20">
            <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              11
            </div>
            <p className="text-sm text-muted-foreground">Hackathons</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-secondary/20">
            <div className="text-4xl mb-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              8
            </div>
            <p className="text-sm text-muted-foreground">Certificates</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20">
            <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              19
            </div>
            <p className="text-sm text-muted-foreground">Total Earned</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-secondary/20">
            <div className="text-4xl mb-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              2025
            </div>
            <p className="text-sm text-muted-foreground">Active Year</p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}