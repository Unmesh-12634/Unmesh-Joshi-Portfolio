import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Card } from '../components/Card';
import { Code, Globe, Server, Brain, Wrench, Database, GitBranch, Figma, Palette, Laptop, Book, Lightbulb, BarChart } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      color: 'primary' as const,
      skills: [
        { name: 'C', icon: Code },
        { name: 'C++', icon: Code },
        { name: 'Python', icon: Code },
        { name: 'JavaScript', icon: Code },
      ],
    },
    {
      icon: Globe,
      title: 'Frontend',
      color: 'secondary' as const,
      skills: [
        { name: 'HTML', icon: Globe },
        { name: 'CSS', icon: Globe },
        { name: 'React', icon: Globe },
      ],
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'primary' as const,
      skills: [
        { name: 'Node.js', icon: Laptop },
        { name: 'MySQL', icon: Database },
      ],
    },
    {
      icon: Brain,
      title: 'AI & ML',
      color: 'secondary' as const,
      skills: [
        { name: 'Python Libraries', icon: Book },
        { name: 'Machine Learning', icon: Lightbulb },
        { name: 'Data Analysis', icon: BarChart },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools',
      color: 'primary' as const,
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'VS Code', icon: Code },
        { name: 'Figma', icon: Figma },
        { name: 'Canva', icon: Palette },
      ],
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
            Skills & Technologies
          </h1>
          <p className="text-muted-foreground">Tools and technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card glowColor={category.color} className="h-full">
                <div className="relative">
                  {/* Glowing ring behind icon */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-${category.color}/20 flex items-center justify-center`}>
                      <category.icon className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <h2 className="text-2xl">{category.title}</h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
                        whileHover={{ scale: 1.05, rotateZ: skillIndex % 2 === 0 ? 3 : -3, boxShadow: `0 0 15px var(--${category.color})` }}
                        className={`flex flex-col items-center justify-center gap-2 p-2 rounded-lg bg-muted/30 border border-${category.color}/20 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                      >
                        {skill.icon && <skill.icon className={`w-10 h-10 text-${category.color} transition-colors group-hover:text-white`} />}
                        <span className="text-sm text-center font-medium transition-colors group-hover:text-white">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <Card glowColor="secondary">
            <h2 className="text-3xl mb-8 text-center bg-gradient-to-r from-[#00e5ff] to-[#7c4dff] bg-clip-text text-transparent">
              Skill Proficiency
            </h2>
            <div className="space-y-6">
              {[
                { name: 'Full Stack Development', level: 85, color: '#00e5ff' },
                { name: 'Frontend Technologies', level: 90, color: '#7c4dff' },
                { name: 'Backend Development', level: 80, color: '#00e5ff' },
                { name: 'AI & Machine Learning', level: 75, color: '#7c4dff' },
                { name: 'UI/UX Design', level: 70, color: '#00e5ff' },
              ].map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  index={index}
                />
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </PageTransition>
  );
}

// Animated Skill Bar Component
function SkillBar({ skill, index }: { skill: { name: string; level: number; color: string }; index: number }) {
  const [isInView, setIsInView] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInView(true);
      
      // Animate the number counter
      let startTime: number;
      const duration = 1500; // 1.5 seconds
      
      const animateValue = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);
        
        setDisplayValue(Math.round(easedProgress * skill.level));
        
        if (progress < 1) {
          requestAnimationFrame(animateValue);
        }
      };
      
      requestAnimationFrame(animateValue);
    }, 700 + index * 150);

    return () => clearTimeout(timeout);
  }, [skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7 + index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium text-foreground/90">{skill.name}</span>
        <span 
          className="font-bold tabular-nums"
          style={{ 
            color: skill.color,
            textShadow: `0 0 10px ${skill.color}40`
          }}
        >
          {displayValue}%
        </span>
      </div>
      
      {/* Progress bar container */}
      <div className="relative h-3 bg-[#0a0f1a] rounded-full overflow-visible border border-white/10">
        {/* Background glow */}
        <div 
          className="absolute inset-0 rounded-full opacity-50 blur-sm"
          style={{ 
            background: `linear-gradient(90deg, ${skill.color}20 0%, transparent 100%)`
          }}
        />
        
        {/* Animated progress bar */}
        <motion.div
          className="relative h-full rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${skill.level}%` : 0 }}
          transition={{ 
            duration: 1.5, 
            delay: 0.7 + index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Main gradient fill */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}dd 100%)`
            }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${skill.color}40 50%, transparent 100%)`
            }}
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'linear',
            }}
          />
          
          {/* Glow at the end of bar */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full blur-md"
            style={{
              background: skill.color,
              opacity: 0.6
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
        
        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? [0, 0.3, 0] : 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            boxShadow: `0 0 20px ${skill.color}60, inset 0 0 10px ${skill.color}20`
          }}
        />
        
        {/* Percentage markers */}
        <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
          {[25, 50, 75].map((mark) => (
            <div
              key={mark}
              className="w-px h-2 bg-white/10"
              style={{ marginLeft: mark === 25 ? '25%' : mark === 50 ? '25%' : '25%' }}
            />
          ))}
        </div>
      </div>
      
      {/* Hover detail */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        whileHover={{ opacity: 1, height: 'auto' }}
        className="overflow-hidden"
      >
        <div className="mt-2 text-xs text-muted-foreground text-right opacity-0 group-hover:opacity-100 transition-opacity">
          Professional Level: {skill.level >= 80 ? 'Expert' : skill.level >= 60 ? 'Advanced' : 'Intermediate'}
        </div>
      </motion.div>
    </motion.div>
  );
}