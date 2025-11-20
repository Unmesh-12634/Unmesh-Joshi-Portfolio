import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Card } from '../components/Card';
import { GraduationCap, Heart, Music, Code2, Sparkles, Brain, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import profilePic from '../assets/profile.jpeg';

export function About() {
  const hobbies = [
    { icon: Code2, label: 'Coding', color: 'text-[#00e5ff]' },
    { icon: Brain, label: 'Learning AI', color: 'text-[#7c4dff]' },
    { icon: Music, label: 'Music', color: 'text-[#00e5ff]' },
    { icon: Heart, label: 'Design', color: 'text-[#7c4dff]' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-[#00e5ff] to-[#7c4dff] bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-muted-foreground text-lg">Get to know the person behind the code</p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20"
        >
          {/* Left Column - Portrait and Quick Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Profile Image Card */}
            <Card glowColor="primary" className="overflow-hidden">
              <div className="relative group">
                {/* Image Container */}
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-[#00e5ff]/10 to-[#7c4dff]/10">
                  <ImageWithFallback
                    src={profilePic}
                    alt="Unmesh Joshi - Developer Workspace"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60" />
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-[#0a0f1a]/80 rounded-lg p-4 border border-[#00e5ff]/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00e5ff] to-[#7c4dff] flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Unmesh Joshi</h3>
                        <p className="text-sm text-[#00e5ff]">Full Stack Developer & AI Enthusiast</p>
                        <p className="text-xs text-[#7c4dff] mt-1">HackerRank Ambassador</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00e5ff]/40 rounded-tl-lg" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#7c4dff]/40 rounded-br-lg" />
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                className="bg-gradient-to-br from-[#00e5ff]/10 to-[#00e5ff]/5 rounded-xl p-4 border border-[#00e5ff]/20 backdrop-blur-sm"
              >
                <Zap className="w-8 h-8 text-[#00e5ff] mb-2" />
                <p className="text-2xl font-bold text-white">10</p>
                <p className="text-sm text-muted-foreground">Hackathons</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: -2 }}
                className="bg-gradient-to-br from-[#7c4dff]/10 to-[#7c4dff]/5 rounded-xl p-4 border border-[#7c4dff]/20 backdrop-blur-sm"
              >
                <Brain className="w-8 h-8 text-[#7c4dff] mb-2" />
                <p className="text-2xl font-bold text-white">Fullstack</p>
                <p className="text-sm text-muted-foreground">& AI/ML</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Bio and Interests */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Who I Am */}
            <Card glowColor="secondary">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7c4dff] to-[#00e5ff] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl text-[#00e5ff]">Who I Am</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed">
                I'm <span className="text-[#00e5ff] font-semibold">Unmesh Joshi</span>, a B.Tech CSE student from{' '}
                <span className="text-[#7c4dff] font-semibold">Techno India NJR, Udaipur</span>, 
                passionate about building technology that connects creativity and intelligence. 
                As a <span className="text-[#00e5ff] font-semibold">HackerRank Ambassador</span>, I actively 
                engage with the developer community, promoting problem-solving and competitive programming.
                I believe in the power of code to transform ideas into reality and create 
                meaningful digital experiences that make a difference.
              </p>
            </Card>

            {/* My Interests */}
            <Card glowColor="primary">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#7c4dff] flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl text-[#7c4dff]">My Interests</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.08, 
                      rotateZ: index % 2 === 0 ? 3 : -3,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-muted/30 to-muted/10 border border-white/5 hover:border-white/20 transition-all cursor-pointer group"
                  >
                    <hobby.icon className={`w-6 h-6 ${hobby.color} group-hover:scale-110 transition-transform`} />
                    <span className="font-medium">{hobby.label}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Vision Statement */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-[#00e5ff]/10 via-[#7c4dff]/10 to-[#00e5ff]/10 border border-[#00e5ff]/20 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00e5ff]/5 to-[#7c4dff]/5 animate-pulse" />
              <div className="relative z-10">
                <p className="text-center text-foreground/80 italic">
                  "Creating the future, one line of code at a time"
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Education & Focus Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl text-center mb-12 bg-gradient-to-r from-[#00e5ff] to-[#7c4dff] bg-clip-text text-transparent">
            Education & Focus
          </h2>
          
          <div className="space-y-6">
            {/* Education Card */}
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card glowColor="primary">
                <div className="flex items-start gap-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00e5ff]/20 to-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center flex-shrink-0"
                  >
                    <GraduationCap className="w-8 h-8 text-[#00e5ff]" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl mb-2 text-white">B.Tech in Computer Science & Engineering</h3>
                    <p className="text-[#00e5ff] mb-3 font-medium">Techno India NJR, Udaipur</p>
                    <p className="text-foreground/80 leading-relaxed">
                      Specializing in Full Stack Development and Artificial Intelligence, 
                      focusing on building intelligent systems that solve real-world problems.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Current Focus Card */}
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card glowColor="secondary">
                <div className="flex items-start gap-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#7c4dff]/20 to-[#7c4dff]/10 border border-[#7c4dff]/30 flex items-center justify-center flex-shrink-0"
                  >
                    <Code2 className="w-8 h-8 text-[#7c4dff]" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl mb-2 text-white">Current Focus</h3>
                    <p className="text-[#7c4dff] mb-3 font-medium">AI-Integrated Full Stack Applications</p>
                    <p className="text-foreground/80 leading-relaxed">
                      Building intelligent web applications that leverage machine learning 
                      and AI to create smarter, more intuitive user experiences.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
