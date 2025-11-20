import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Card } from '../components/Card';
import { Mail, Github, Linkedin, Instagram, Send, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Unmesh-12634',
      color: 'primary' as const,
      handle: '@Unmesh-12634',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/unmesh-joshi-b0846431b',
      color: 'secondary' as const,
      handle: 'Unmesh Joshi',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:unmeshjoshi083@gmail.com',
      color: 'primary' as const,
      handle: 'unmeshjoshi083@gmail.com',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/unmesh12634',
      color: 'secondary' as const,
      handle: '@unmesh12634',
    },
  ];

  const mailtoHref = `mailto:unmeshjoshi083@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}`;

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-muted-foreground">Let's build something amazing together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card glowColor="primary">
              <h2 className="text-2xl mb-6">Send a Message</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm text-foreground/80">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-muted/30 border border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-foreground/80">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-muted/30 border border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm text-foreground/80">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-muted/30 border border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.a
                  href={mailtoHref}
                  onClick={() => toast.info('Opening your email client...')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-background flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.a>
              </div>
            </Card>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <Card glowColor="secondary">
              <h2 className="text-2xl mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p>Udaipur, Rajasthan, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:unmeshjoshi083@gmail.com" className="text-primary hover:underline">
                      unmeshjoshi083@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Available</p>
                    <p>Mon - Fri, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card glowColor="primary">
              <h2 className="text-2xl mb-6">Connect With Me</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateZ: 2 }}
                    className={`
                      p-4 rounded-lg border border-${social.color}/20 
                      bg-${social.color}/5 hover:bg-${social.color}/10
                      transition-all duration-300 group
                    `}
                  >
                    <social.icon className={`w-6 h-6 text-${social.color} mb-2`} />
                    <p className="text-sm mb-1">{social.label}</p>
                    <p className={`text-xs text-${social.color}/70`}>{social.handle}</p>
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Animated connection visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="relative h-32 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-lg">
                {/* Animated nodes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      className="absolute w-2 h-2 rounded-full bg-primary"
                      style={{
                        left: `${20 + i * 12}%`,
                        top: `${30 + Math.sin(i) * 20}%`,
                      }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm text-center text-muted-foreground z-10">
                    Let's connect and create something extraordinary
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}