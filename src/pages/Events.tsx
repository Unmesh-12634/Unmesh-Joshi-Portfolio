import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { Card } from '../components/Card';
import { ArrowRight } from 'lucide-react';

const events = [
  {
    id: 'hackerrank-campus-event',
    title: 'HackerRank Campus Event',
    location: 'Techno India NJR, Udaipur',
    role: 'Host & HackerRank Ambassador',
    thumbnail: '/events/techno-event-1.jpeg',
    date: '2025',
  },
];

export function Events() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setLightboxImage(null);
  }, []);

  useEffect(() => {
    if (lightboxImage) {
      window.addEventListener('keydown', handleEsc);
    } else {
      window.removeEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [lightboxImage, handleEsc]);

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Events & Engagements
          </h1>
          <p className="text-muted-foreground">Community involvement and leadership</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link to={`/events/${event.id}`}>
                <Card glowColor="primary" className="h-full">
                  <div className="p-6">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 cursor-zoom-in group" onClick={() => setLightboxImage(event.thumbnail)}>
                      <img
                        src={event.thumbnail}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h2 className="text-2xl mb-2 text-primary">{event.title}</h2>
                    <p className="text-muted-foreground mb-4">{event.location}</p>
                    <div className="flex items-center text-primary">
                      <span>View Event</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 15 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Enlarged event"
                className="mx-auto max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 px-3 py-1.5 text-sm rounded-md bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/20"
              >
                Close ✕ (Esc)
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}