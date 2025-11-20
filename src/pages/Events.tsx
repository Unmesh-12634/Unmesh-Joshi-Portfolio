import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Card } from '../components/Card';
import { Calendar, Users, MapPin, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events = [
    {
      title: 'HackerRank Campus Ambassador Event',
      date: '2025',
      location: 'Virtual',
      description: 'As a HackerRank Ambassador, participated in organizing and promoting coding challenges and competitions for the student community.',
      images: ['/Events/hackerrank-event-1.jpg'],
      category: 'Ambassador Event',
    },
    {
      title: 'Tech Meetup & Networking',
      date: '2025',
      location: 'Udaipur',
      description: 'Attended a tech meetup to network with fellow developers and share knowledge about latest technologies.',
      images: ['/Events/meetup-1.jpg'],
      category: 'Networking',
    },
    {
      title: 'Hackathon Workshop',
      date: '2025',
      location: 'College Campus',
      description: 'Conducted a workshop on hackathon preparation and problem-solving strategies for students.',
      images: ['/Events/workshop-1.jpg'],
      category: 'Workshop',
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
            Events Gallery
          </h1>
          <p className="text-muted-foreground">Moments from hackathons, workshops, and tech events I've hosted or attended</p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                glowColor={index % 2 === 0 ? 'primary' : 'secondary'}
                onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
              >
                <div className="space-y-4">
                  {/* Event Image */}
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                    {event.images[0] ? (
                      <img
                        src={event.images[0]}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : null}
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm">
                      <span className="text-xs text-white font-medium">{event.category}</span>
                    </div>
                  </div>

                  {/* Event Info */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-secondary" />
                        {event.location}
                      </div>
                    </div>

                    <AnimatePresence>
                      {selectedEvent === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-3 border-t border-primary/20"
                        >
                          <p className="text-muted-foreground">
                            {event.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {selectedEvent !== index && (
                      <p className="text-sm text-primary/60 cursor-pointer">
                        Click to learn more →
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <Card glowColor="primary">
            <div className="text-center space-y-4">
              <Users className="w-12 h-12 text-primary mx-auto" />
              <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Community Engagement
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                As a HackerRank Ambassador, I actively participate in tech events, workshops, and hackathons. 
                I believe in sharing knowledge, fostering collaboration, and building a strong developer community.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20">
            <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              10+
            </div>
            <p className="text-sm text-muted-foreground">Events Attended</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-secondary/20">
            <div className="text-4xl mb-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              5+
            </div>
            <p className="text-sm text-muted-foreground">Workshops Hosted</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20">
            <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              200+
            </div>
            <p className="text-sm text-muted-foreground">Students Reached</p>
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
