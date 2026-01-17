import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";

const clinicLocations = [
  { id: 1, name: "Freetown Mobile Unit", lat: 8.4657, lng: -13.2317, color: "primary" },
  { id: 2, name: "Eastern Clinic Van", lat: 8.4789, lng: -13.2156, color: "secondary" },
  { id: 3, name: "Western Area Truck", lat: 8.4532, lng: -13.2789, color: "accent" },
  { id: 4, name: "Bo District Clinic", lat: 7.9553, lng: -11.7380, color: "health-green" },
];

const MobileClinicMap = () => {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      
      <main className="container px-4 pt-20 page-transition">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/mobile-clinics" className="inline-flex items-center gap-2 text-primary mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Clinics
          </Link>

          <h1 className="text-2xl font-bold gradient-text mb-4">Clinic Map</h1>
          
          {/* Interactive Map Visualization */}
          <div className="glow-card p-4 mb-6">
            <div className="relative w-full h-80 bg-muted rounded-xl overflow-hidden">
              {/* Sierra Leone Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              
              {/* Grid lines */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                  linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />

              {/* Map Label */}
              <div className="absolute top-4 left-4 glass-effect rounded-lg px-3 py-2">
                <p className="text-sm font-semibold text-foreground">Sierra Leone</p>
                <p className="text-xs text-muted-foreground">Healthcare Locations</p>
              </div>

              {/* Clinic Markers */}
              {clinicLocations.map((clinic, index) => (
                <motion.div
                  key={clinic.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="absolute"
                  style={{
                    left: `${20 + (index * 18)}%`,
                    top: `${30 + (index % 2) * 30}%`,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="relative"
                  >
                    <div className={`w-8 h-8 rounded-full bg-${clinic.color} flex items-center justify-center shadow-lg`}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-ping" />
                  </motion.div>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <p className="text-xs font-medium text-foreground bg-card/90 px-2 py-1 rounded">
                      {clinic.name}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* User Location */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-4 h-4 bg-health-blue rounded-full border-2 border-white shadow-lg" />
                <div className="absolute inset-0 bg-health-blue/30 rounded-full animate-ping" />
              </motion.div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-health-blue rounded-full" />
                <span className="text-sm text-muted-foreground">Your Location</span>
              </div>
              <Button variant="outline" size="sm">
                <Navigation className="w-4 h-4 mr-2" />
                Center Map
              </Button>
            </div>
          </div>

          {/* Clinic Quick Access */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 gap-3">
              {clinicLocations.map((clinic) => (
                <motion.div
                  key={clinic.id}
                  whileHover={{ scale: 1.02 }}
                  className="glow-card p-4"
                >
                  <div className={`w-10 h-10 rounded-full bg-${clinic.color} flex items-center justify-center mb-2`}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-medium text-sm text-foreground">{clinic.name}</h3>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Navigation className="w-3 h-3" />
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="w-3 h-3" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default MobileClinicMap;
