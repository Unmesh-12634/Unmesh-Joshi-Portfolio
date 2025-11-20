import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Card } from '../components/Card';
import { Users, Trophy, Code, Rocket, ChevronDown } from 'lucide-react';

const experiences = [
  {
    icon: Code,
    title: 'Technical Experience',
    description: 'Built and deployed multiple interactive frontend projects using HTML, CSS, JavaScript, and React. Later expanded into backend development with Node.js and database integration to create full-stack applications.',
    achievements: [
      'Currently exploring AI and ML technologies, learning frameworks like TensorFlow.',
      'Integrating AI models into web-based projects.',
      'Developed a strong problem-solving mindset through consistent practice in C, C++, and Python.',
    ],
    color: 'primary' as const,
  },
  {
    icon: Trophy,
    title: 'Hackathon & Team Leadership',
    description: 'Participated in 10+ hackathons, contributing to ideation, development, and final presentations.',
    achievements: [
      'Top 40 Finalist in a national-level hackathon, invited to the finals at Microsoft Gurugram.',
      'Led multiple teams in inter-college and national hackathons, including Smart India Hackathon (SIH).',
      'Strengthened leadership, teamwork, and technical collaboration skills through real-world challenges.',
    ],
    color: 'secondary' as const,
  },
  {
    icon: Users,
    title: 'Community & Freelancing',
    description: 'Active member of college tech clubs, contributing to events, mentorship, and collaborative projects.',
    achievements: [
      'Became HackerRank Campus Ambassador on November 1, 2025',
      'Started freelancing, developing web applications and assisting others with frontend design.',
      'Contributed to open-source projects, focusing on innovative web and AI-based solutions.',
    ],
    color: 'primary' as const,
  },
  {
    icon: Rocket,
    title: 'Current Focus',
    description: 'Advancing in AI/ML integration with web technologies and exploring backend frameworks and production-level AI systems.',
    achievements: [
      'Building a portfolio of intelligent, impactful applications.',
    ],
    color: 'secondary' as const,
  },
];

export function Experience() {
  return (
    <PageTransition>
        <div className="container mx-auto px-6 py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </h1>
            <p className="text-muted-foreground">Leadership, collaboration, and impact</p>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                <div className="flex flex-col items-center text-muted-foreground">
                    <span>Scroll Down</span>
                    <ChevronDown className="w-6 h-6" />
                </div>
            </motion.div>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                  <Card glowColor={exp.color}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-${exp.color}/20 flex items-center justify-center flex-shrink-0`}>
                        <exp.icon className={`w-6 h-6 text-${exp.color}`} />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl mb-2">{exp.title}</h3>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-${exp.color}`} />
                              <span className="text-sm text-foreground/80">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20"
          >
            {[
              { label: 'Hackathons', value: '10+', color: 'primary' },
              { label: 'Team Members Led', value: '50+', color: 'secondary' },
              { label: 'Projects Completed', value: '15+', color: 'primary' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Card glowColor={stat.color as 'primary' | 'secondary'} className="text-center">
                  <div className={`text-4xl mb-2 text-${stat.color}`}>{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </PageTransition>
  );
}
