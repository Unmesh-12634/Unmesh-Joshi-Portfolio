import { motion, useScroll, useTransform } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Card } from '../components/Card';
import { BookOpen, Code, Rocket, Brain, Sparkles, Users, Server, Trophy, Lightbulb } from 'lucide-react';
import { useRef } from 'react';

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

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
      color: 'primary' as const,
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
      color: 'secondary' as const,
    },
    {
      year: '2025',
      title: 'Frontend & First Project',
      icon: Code,
      description: 'Continued learning frontend development and Python, which led me to create my first interactive website — Krishnam.',
      highlights: [
        'Built my first interactive website (Krishnam)',
      ],
      color: 'primary' as const,
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
      color: 'secondary' as const,
    },
    {
      year: '2025',
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Began my journey into AI & Machine Learning with great enthusiasm, sparking a deep interest in AI-based solutions.',
      highlights: [
        'Began my journey into AI & Machine Learning',
      ],
      color: 'primary' as const,
    },
    {
      year: '2025',
      title: 'Hackathons & Leadership',
      icon: Trophy,
      description: 'Gained hands-on experience and teamwork skills by participating in 10+ hackathons and leading multiple teams.',
      highlights: [
        'Participated in my first hackathon, top 40 finalist at Microsoft Gurugram',
        'Led multiple teams in hackathons and college projects',
        'Represented my college in Smart India Hackathon (SIH) internal rounds',
      ],
      color: 'secondary' as const,
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
      color: 'primary' as const,
    },
    {
      year: 'Future',
      title: 'Entrepreneurship',
      icon: Lightbulb,
      description: 'Aiming to leverage my skills and experience to launch my own tech startup in the future.',
      highlights: [
        'Launch my own tech startup in the future',
      ],
      color: 'secondary' as const,
    },
  ];

  return (
    <PageTransition>
      <div ref={containerRef} className="container mx-auto px-6 py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Journey
          </h1>
          <p className="text-muted-foreground">Growth, learning, and evolution</p>
        </motion.div>

        {/* Horizontal scrolling timeline */}
        <div className="mb-20">
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="min-w-[300px] md:min-w-[400px] snap-center"
              >
                <Card glowColor={item.color} className="h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full bg-${item.color}/20 flex items-center justify-center`}>
                      <item.icon className={`w-8 h-8 text-${item.color}`} />
                    </div>
                    <div>
                      <div className={`text-sm text-${item.color} mb-1`}>{item.year}</div>
                      <h3 className="text-2xl">{item.title}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{item.description}</p>

                  <div className="space-y-3">
                    {item.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 0.3 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <Sparkles className={`w-4 h-4 text-${item.color} flex-shrink-0`} />
                        <span className="text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card glowColor="primary">
            <h2 className="text-2xl mb-8 text-center">Learning Progress</h2>
            
            <div className="space-y-6">
              {[
                { skill: 'Programming Fundamentals', start: 2024, progress: 95 },
                { skill: 'Web Development', start: 2025, progress: 90 },
                { skill: 'AI & Machine Learning', start: 2025, progress: 70 },
                { skill: 'System Design', start: 2025, progress: 60 },
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="block mb-1">{item.skill}</span>
                      <span className="text-sm text-muted-foreground">Since {item.start}</span>
                    </div>
                    <span className="text-primary text-xl">{item.progress}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Next Goals Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="max-w-2xl mx-auto mt-12"
        >
          <Card glowColor="secondary" className="text-center">
            <Rocket className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h2 className="text-3xl mb-4">What's Next?</h2>
            <p className="text-muted-foreground mb-6">
              Continuing to push boundaries, learn cutting-edge technologies, and build 
              solutions that make a real difference in people's lives.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-background">
              <Sparkles className="w-5 h-5" />
              <span>The journey continues...</span>
            </div>
          </Card>
        </motion.div>
      </div>
    </PageTransition>
  );
}
