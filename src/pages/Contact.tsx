import React, { useState, useEffect } from 'react';
import { PageTransition } from '../components/PageTransition';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [greeting, setGreeting] = useState('Hello');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Determine dynamic greeting based on Indian Standard Time (IST)
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      hour12: false,
    };
    const hour = parseInt(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    
    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning');
    } else if (hour >= 12 && hour < 17) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Unmesh-12634',
      handle: '@Unmesh-12634',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/unmesh-joshi-b0846431b',
      handle: 'Unmesh Joshi',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:unmeshjoshi083@gmail.com',
      handle: 'unmeshjoshi083@gmail.com',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    const emailSubject = `Portfolio Contact from ${formData.name}`;
    const emailBody = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    const mailtoHref = `mailto:unmeshjoshi083@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    toast.success('Opening your default mail client...');
    window.location.href = mailtoHref;
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        
        {/* Header Title */}
        <div className="border-b border-sohub-dark-grey pb-8 mb-16">
          <span className="text-xxs uppercase tracking-widest text-sohub-grey font-semibold block mb-2">
            Let's Collaborate &bull; Udaipur, India
          </span>
          <h1 className="text-4xl md:text-7xl font-display-title font-extrabold uppercase leading-none text-sohub-white">
            GET IN TOUCH
          </h1>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Minimal Unified Form (Span 7) */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 border border-sohub-dark-grey bg-sohub-black p-8 md:p-12 space-y-6">
            <div className="space-y-2">
              <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold block">
                {greeting}! Send a message
              </span>
              <h2 className="text-xl md:text-2xl font-display font-extrabold uppercase text-sohub-white">
                Start a conversation
              </h2>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-sohub-grey">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-sohub-dark-grey/15 border border-sohub-dark-grey px-4 py-3 text-xs text-sohub-white focus:outline-none focus:border-sohub-white/40 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-sohub-grey">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-sohub-dark-grey/15 border border-sohub-dark-grey px-4 py-3 text-xs text-sohub-white focus:outline-none focus:border-sohub-white/40 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-sohub-grey">Message *</label>
              <textarea
                required
                rows={8}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-sohub-dark-grey/15 border border-sohub-dark-grey px-4 py-3 text-xs text-sohub-white focus:outline-none focus:border-sohub-white/40 transition-colors resize-none"
                placeholder="Type your message here..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-sohub-white text-sohub-black font-bold text-xs uppercase tracking-widest hover:bg-sohub-soft-grey transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Send message <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Right Column: Contact Info & Social Cards (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Context Stats / Location Details */}
            <div className="border border-sohub-dark-grey bg-sohub-black p-8 space-y-4">
              <span className="text-xxs uppercase tracking-widest text-sohub-grey font-bold">Contact Info</span>
              <div className="space-y-4 pt-2">
                <div className="group relative">
                  <span className="text-[9px] uppercase tracking-wider text-sohub-grey block">Email</span>
                  <div className="flex items-center justify-between mt-0.5">
                    <a href="mailto:unmeshjoshi083@gmail.com" className="text-xs font-semibold text-sohub-white hover:text-sohub-grey transition-colors">
                      unmeshjoshi083@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText('unmeshjoshi083@gmail.com');
                        toast.success('Email copied to clipboard!');
                      }}
                      className="text-[9px] font-mono uppercase text-sohub-grey hover:text-sohub-white cursor-pointer px-2 py-0.5 border border-sohub-dark-grey rounded bg-sohub-dark-grey/25 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] uppercase tracking-wider text-sohub-grey block">Location</span>
                  <span className="text-xs font-semibold text-sohub-white block mt-0.5">
                    Udaipur, Rajasthan, India
                  </span>
                </div>

                <div>
                  <span className="text-[9px] uppercase tracking-wider text-sohub-grey block">Local Time (IST)</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse block" />
                    <span className="text-xs font-semibold text-sohub-white font-mono">{currentTime || 'Loading...'}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] uppercase tracking-wider text-sohub-grey block">Working Hours</span>
                  <span className="text-xs font-semibold text-sohub-white uppercase block mt-0.5">
                    MON - FRI, 09:00 - 18:00 IST
                  </span>
                </div>
              </div>
            </div>

            {/* Grid of Social Cards */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-sohub-dark-grey bg-sohub-black p-5 hover:border-sohub-white/20 transition-all duration-300 group block"
                >
                  <social.icon className="w-5 h-5 text-sohub-white mb-2 group-hover:scale-105 transition-transform" />
                  <span className="text-[10px] font-bold text-sohub-white block uppercase tracking-wider">{social.label}</span>
                  <span className="text-[9px] text-sohub-grey block mt-0.5">{social.handle}</span>
                </a>
              ))}
            </div>

          </div>

        </div>

      </div>
    </PageTransition>
  );
}