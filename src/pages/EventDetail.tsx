import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { Card } from '../components/Card';
import { Calendar, Users, Award, ArrowLeft, ExternalLink } from 'lucide-react';

const eventsData = {
  'hackerrank-campus-event': {
    title: 'HackerRank Campus Event',
    location: 'Techno India NJR, Udaipur',
    role: 'Host & HackerRank Ambassador',
    description: 'Hosted a HackerRank event as a Campus Ambassador, featuring a guest from HackerRank. The event focused on competitive programming and skill development.',
    images: [
      '/events/techno-event-1.jpeg',
      '/events/techno-event-2.jpeg',
      '/events/techno-event-3.jpeg',
      '/events/techno-event-4.jpeg',
    ],
    date: '2025',
    linkedinPost: 'https://www.linkedin.com/posts/unmesh-joshi-9a6981245_hackerrank-campus-ambassador-activity-7169999999999999999-aBcD', // Placeholder
  },
};

export function EventDetail() {
  const { eventId } = useParams();
  const event = eventsData[eventId];

  if (!event) {
    return (
      <PageTransition>
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl mb-4">Event not found</h1>
          <Link to="/events" className="text-primary">
            Back to all events
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/events" className="flex items-center text-primary mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all events
          </Link>

          <Card glowColor="primary">
            <div className="p-6">
              <h1 className="text-4xl md:text-5xl mb-4 text-primary">{event.title}</h1>
              <div className="flex flex-wrap items-center text-muted-foreground mb-4">
                <div className="flex items-center mr-4 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center mr-4 mb-2">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Award className="w-4 h-4 mr-2" />
                  <span>Role: {event.role}</span>
                </div>
              </div>
              <p className="text-foreground/90 mb-6">{event.description}</p>

              {event.linkedinPost && (
                <a
                  href={event.linkedinPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary mb-8"
                >
                  View LinkedIn Post
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {event.images.map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + imgIndex * 0.1 }}
                    className="overflow-hidden rounded-lg border border-primary/20"
                  >
                    <img
                      src={image}
                      alt={`${event.title} - Image ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </PageTransition>
  );
}
