import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Card } from '../components/Card';
import { ExternalLink, Github, Star } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'KRISHNAM',
      description: 'A beautifully designed and responsive frontend project focused on creativity and user interaction. Built with core web technologies for smooth performance and modern UI.',
      techStack: ['Frontend', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Unmesh-12634/Krishnam',
      live: 'https://unmesh-12634.github.io/Krishnam/',
      color: 'primary' as const,
    },
    {
      title: 'YATRA PATH',
      description: 'A travel-planning web app helping users explore destinations, routes, and trip info with an elegant, accessible UI.',
      techStack: ['Frontend', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Unmesh-12634/PROJECT-UDAIPUR',
      live: 'https://unmesh-12634.github.io/PROJECT-UDAIPUR/',
      color: 'secondary' as const,
    },
    {
      title: 'STUDI',
      description: 'An educational assistant platform for students — manage notes, timetables, and resources efficiently with an intuitive interface.',
      techStack: ['Frontend', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Unmesh-12634/Studi',
      live: 'https://unmesh-12634.github.io/Studi/',
      color: 'primary' as const,
    },
    {
      title: 'UJ PORTFOLIO',
      description: 'My personal portfolio website showcasing my skills, projects, and achievements in a sleek, responsive design.',
      techStack: ['Frontend', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Unmesh-12634/ujfolio',
      live: 'https://unmesh-12634.github.io/ujfolio/',
      color: 'secondary' as const,
    },
    {
      title: 'CLARITY AI',
      description: 'A futuristic web interface inspired by AI and data visualization — emphasizes clarity, interactivity, and clean UI design.',
      techStack: ['Frontend', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Unmesh-12634/clarity-ai',
      live: 'https://unmesh-12634.github.io/clarity-ai/',
      color: 'primary' as const,
    },
    {
      title: 'MINI VISION (SIH PROJECT)',
      description: 'A Smart India Hackathon project leveraging computer vision and AI to process and analyze visual data. Built with backend logic, ML integration, and database connectivity for real-world AI automation.',
      techStack: ['AI/ML', 'Backend', 'Database', 'HTML', 'CSS', 'JavaScript', 'Python'],
      github: 'https://github.com/Unmesh-12634/minevision/tree/main',
      live: '#',
      color: 'secondary' as const,
    },
    {
        title: 'DUALITY AI',
        description: 'A hackathon project integrating backend intelligence and AI automation. Demonstrates model pipelines, decision logic, and backend-ML synergy.',
        techStack: ['AI/ML', 'Backend', 'Python'],
        github: 'https://github.com/Unmesh-12634/duality-hackathon-submission',
        live: '#',
        color: 'primary' as const,
      },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-muted-foreground">Building solutions that make a difference</p>
        </motion.div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.03, rotateZ: index % 2 === 0 ? 2 : -2, boxShadow: `0 10px 20px rgba(0,0,0,0.2)` }}
              className="relative"
            >
              <Card glowColor={project.color} className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl">{project.title}</h3>
                  <Star className={`w-5 h-5 text-${project.color}`} />
                </div>

                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full bg-${project.color}/10 text-${project.color} border border-${project.color}/30`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-${project.color} text-background rounded-lg hover:opacity-90 transition-opacity ${!project.live || project.live === '#' ? 'pointer-events-none opacity-50' : ''}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live</span>
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
