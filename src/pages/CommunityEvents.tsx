import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Free Malaria Screening",
    date: "January 20, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Connaught Hospital, Freetown",
    attendees: 156,
    image: "🏥",
    category: "Screening",
  },
  {
    id: 2,
    title: "Maternal Health Workshop",
    date: "January 22, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Princess Christian Maternity Hospital",
    attendees: 89,
    image: "🤰",
    category: "Workshop",
  },
  {
    id: 3,
    title: "Blood Donation Drive",
    date: "January 25, 2026",
    time: "8:00 AM - 5:00 PM",
    location: "National Blood Bank, Freetown",
    attendees: 234,
    image: "🩸",
    category: "Donation",
  },
  {
    id: 4,
    title: "Child Immunization Day",
    date: "January 28, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "Ola During Children's Hospital",
    attendees: 312,
    image: "💉",
    category: "Immunization",
  },
  {
    id: 5,
    title: "Mental Health Awareness",
    date: "February 1, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "City Hall, Freetown",
    attendees: 67,
    image: "🧠",
    category: "Awareness",
  },
];

const CommunityEvents = () => {
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

  const handleRegister = (eventId: number, eventTitle: string) => {
    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents(prev => prev.filter(id => id !== eventId));
      toast.info(`Unregistered from ${eventTitle}`);
    } else {
      setRegisteredEvents(prev => [...prev, eventId]);
      toast.success(`Registered for ${eventTitle}!`);
    }
  };

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-health-green flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Community Events</h1>
              <p className="text-sm text-muted-foreground">Health events near you</p>
            </div>
          </div>

          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glow-card overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl">
                      {event.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                          {event.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-foreground">{event.title}</h3>
                      
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="w-3 h-3" />
                          <span>{event.attendees} registered</span>
                        </div>
                        <Button
                          size="sm"
                          variant={registeredEvents.includes(event.id) ? "outline" : "glow"}
                          onClick={() => handleRegister(event.id, event.title)}
                        >
                          {registeredEvents.includes(event.id) ? "Registered ✓" : "Register"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 glow-card p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Want to organize a health event?
            </p>
            <Button variant="gold" size="sm" className="mt-2">
              Submit Event <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default CommunityEvents;
