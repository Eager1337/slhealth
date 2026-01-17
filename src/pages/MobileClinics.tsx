import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import mobileClinicImg from "@/assets/mobile-clinic.jpg";

const clinics = [
  {
    id: 1,
    name: "Freetown Mobile Health Unit",
    location: "Congo Cross, Freetown",
    distance: "1.2 km",
    hours: "8:00 AM - 5:00 PM",
    services: ["General Checkup", "Vaccinations", "Malaria Testing"],
    lat: 8.4657,
    lng: -13.2317,
  },
  {
    id: 2,
    name: "Eastern Clinic Van",
    location: "Kissy Road, Freetown",
    distance: "2.8 km",
    hours: "9:00 AM - 4:00 PM",
    services: ["Maternal Care", "Child Health", "Blood Pressure"],
    lat: 8.4789,
    lng: -13.2156,
  },
  {
    id: 3,
    name: "Western Area Health Truck",
    location: "Lumley Beach Road",
    distance: "3.5 km",
    hours: "7:00 AM - 6:00 PM",
    services: ["HIV Testing", "TB Screening", "General Medicine"],
    lat: 8.4532,
    lng: -13.2789,
  },
  {
    id: 4,
    name: "Bo District Mobile Clinic",
    location: "Bo Town Center",
    distance: "120 km",
    hours: "8:00 AM - 4:00 PM",
    services: ["Emergency Care", "Vaccinations", "Health Education"],
    lat: 7.9553,
    lng: -11.7380,
  },
];

const MobileClinics = () => {
  const [selectedClinic, setSelectedClinic] = useState<typeof clinics[0] | null>(null);

  return (
    <div className="min-h-screen pb-24">
      <Header />
      
      <main className="container px-4 pt-20 page-transition">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-health-green flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Mobile Clinics</h1>
              <p className="text-sm text-muted-foreground">Find healthcare near you</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="glow-card overflow-hidden mb-6">
            <img 
              src={mobileClinicImg} 
              alt="Mobile Clinic" 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-foreground">Healthcare on Wheels</h3>
              <p className="text-sm text-muted-foreground">
                Our mobile clinics bring quality healthcare to communities across Sierra Leone
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-primary" />
              Clinic Locations
            </h2>
            <Link to="/mobile-clinics/map">
              <div className="glow-card p-6 text-center cursor-pointer group">
                <div className="w-full h-40 bg-muted rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <MapPin className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <Button variant="glow" className="w-full">
                  <Navigation className="w-4 h-4 mr-2" />
                  View Full Map
                </Button>
              </div>
            </Link>
          </section>

          {/* Clinic List */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Nearby Clinics</h2>
            <div className="space-y-4">
              {clinics.map((clinic, index) => (
                <motion.div
                  key={clinic.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/mobile-clinics/${clinic.id}`}>
                    <div className="glow-card p-4 group">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {clinic.name}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3" />
                            {clinic.location}
                          </p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {clinic.hours}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {clinic.services.map((service) => (
                              <span 
                                key={service}
                                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-primary font-bold">{clinic.distance}</p>
                          <ChevronRight className="w-5 h-5 text-muted-foreground ml-auto mt-2" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Schedule Visit */}
          <section className="mt-8">
            <Link to="/mobile-clinics/schedule">
              <Button variant="gold" size="lg" className="w-full">
                <Clock className="w-5 h-5 mr-2" />
                Schedule a Visit
              </Button>
            </Link>
          </section>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default MobileClinics;
