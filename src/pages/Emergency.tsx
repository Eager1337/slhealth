import { motion } from "framer-motion";
import { Phone, AlertTriangle, Ambulance, Heart, Shield, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";

const emergencyContacts = [
  {
    name: "Salone Health Emergency",
    number: "+23273095177",
    description: "24/7 Health Emergency Line",
    icon: Heart,
    primary: true,
  },
  {
    name: "National Ambulance",
    number: "117",
    description: "Sierra Leone Ambulance Service",
    icon: Ambulance,
  },
  {
    name: "Police Emergency",
    number: "999",
    description: "Sierra Leone Police",
    icon: Shield,
  },
  {
    name: "Fire Service",
    number: "019",
    description: "National Fire Service",
    icon: AlertTriangle,
  },
];

const nearbyHospitals = [
  { name: "Connaught Hospital", location: "Freetown", distance: "2.5 km" },
  { name: "Princess Christian Maternity Hospital", location: "Freetown", distance: "3.1 km" },
  { name: "34 Military Hospital", location: "Wilberforce", distance: "4.2 km" },
];

const Emergency = () => {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="min-h-screen pb-24">
      <Header />
      
      <main className="container px-4 pt-20 page-transition">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Emergency Banner */}
          <div className="glow-card p-6 bg-gradient-to-r from-destructive/20 to-health-red/20 border-destructive/50 mb-6">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-destructive flex items-center justify-center"
              >
                <Phone className="w-8 h-8 text-white" />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-xl font-bold text-foreground">Emergency Services</h1>
                <p className="text-sm text-muted-foreground">Get immediate help when you need it</p>
              </div>
            </div>
            
            <Button
              variant="emergency"
              size="xl"
              className="w-full mt-4"
              onClick={() => handleCall("+23273095177")}
            >
              <Phone className="w-5 h-5 mr-2 animate-pulse" />
              Call Emergency: +232 73 095 177
            </Button>
          </div>

          {/* Emergency Contacts */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              Emergency Numbers
            </h2>
            <div className="space-y-3">
              {emergencyContacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={contact.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`glow-card p-4 ${contact.primary ? 'border-destructive/50' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        contact.primary ? 'bg-destructive' : 'bg-muted'
                      }`}>
                        <Icon className={`w-6 h-6 ${contact.primary ? 'text-white' : 'text-foreground'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{contact.name}</h3>
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                        <p className="text-lg font-bold text-primary">{contact.number}</p>
                      </div>
                      <Button
                        variant={contact.primary ? "emergency" : "outline"}
                        size="icon"
                        onClick={() => handleCall(contact.number)}
                      >
                        <Phone className="w-5 h-5" />
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Nearby Hospitals */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Nearby Hospitals
            </h2>
            <div className="space-y-3">
              {nearbyHospitals.map((hospital, index) => (
                <motion.div
                  key={hospital.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glow-card p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{hospital.name}</h3>
                      <p className="text-sm text-muted-foreground">{hospital.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-semibold">{hospital.distance}</p>
                      <Button variant="outline" size="sm" className="mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        Directions
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Emergency Tips */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Emergency Tips</h2>
            <div className="glow-card p-4 space-y-3">
              <p className="text-sm text-foreground">• Stay calm and speak clearly when calling</p>
              <p className="text-sm text-foreground">• Provide your exact location</p>
              <p className="text-sm text-foreground">• Describe the emergency situation</p>
              <p className="text-sm text-foreground">• Follow instructions from the operator</p>
              <p className="text-sm text-foreground">• Do not hang up until told to do so</p>
            </div>
          </section>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Emergency;
