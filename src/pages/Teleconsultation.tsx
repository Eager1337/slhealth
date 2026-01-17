import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Video, Phone, Mic, MicOff, VideoOff, 
  PhoneOff, MessageSquare, Star, Clock
} from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Link } from "react-router-dom";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";

const doctors = [
  {
    id: 1,
    name: "Dr. Mohamed Kamara",
    specialty: "General Practitioner",
    rating: 4.9,
    image: doctor1,
    price: "Le 50,000",
    available: true,
  },
  {
    id: 2,
    name: "Dr. Fatmata Sesay",
    specialty: "Pediatrician",
    rating: 4.8,
    image: doctor2,
    price: "Le 60,000",
    available: true,
  },
  {
    id: 3,
    name: "Dr. Ibrahim Conteh",
    specialty: "Cardiologist",
    rating: 4.9,
    image: doctor3,
    price: "Le 80,000",
    available: false,
  },
  {
    id: 4,
    name: "Dr. Aminata Koroma",
    specialty: "Gynecologist",
    rating: 4.7,
    image: doctor4,
    price: "Le 70,000",
    available: true,
  },
];

const subscriptionPlans = [
  { name: "Basic", price: "Le 100,000/month", calls: "5 consultations" },
  { name: "Standard", price: "Le 200,000/month", calls: "15 consultations" },
  { name: "Premium", price: "Le 350,000/month", calls: "Unlimited" },
];

const Teleconsultation = () => {
  const [inCall, setInCall] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const userVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (inCall && userVideoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (userVideoRef.current) {
            userVideoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.log("Camera access denied:", err));
    }
  }, [inCall]);

  const startCall = (doctor: typeof doctors[0]) => {
    setSelectedDoctor(doctor);
    setInCall(true);
  };

  const endCall = () => {
    if (userVideoRef.current && userVideoRef.current.srcObject) {
      const stream = userVideoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
    setInCall(false);
    setSelectedDoctor(null);
  };

  if (inCall && selectedDoctor) {
    return (
      <div className="min-h-screen bg-background">
        <div className="relative h-screen">
          {/* Doctor's video (simulated) */}
          <div className="absolute inset-0 bg-card flex items-center justify-center">
            <img 
              src={selectedDoctor.image} 
              alt={selectedDoctor.name}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          {/* User's video */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 right-4 w-32 h-44 rounded-xl overflow-hidden border-2 border-primary shadow-lg z-20"
          >
            <video
              ref={userVideoRef}
              autoPlay
              muted
              playsInline
              className={`w-full h-full object-cover ${isVideoOff ? 'hidden' : ''}`}
            />
            {isVideoOff && (
              <div className="w-full h-full bg-card flex items-center justify-center">
                <VideoOff className="w-8 h-8 text-muted-foreground" />
              </div>
            )}
          </motion.div>

          {/* Doctor info */}
          <div className="absolute top-4 left-4 z-20">
            <div className="glass-effect rounded-xl p-3">
              <p className="font-semibold text-foreground">{selectedDoctor.name}</p>
              <p className="text-sm text-muted-foreground">{selectedDoctor.specialty}</p>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3 text-primary" />
                <span className="text-xs text-primary">In Call</span>
              </div>
            </div>
          </div>

          {/* Call controls */}
          <div className="absolute bottom-10 left-0 right-0 z-20">
            <div className="flex items-center justify-center gap-4">
              <Button
                variant={isMuted ? "destructive" : "glass"}
                size="icon"
                className="w-14 h-14 rounded-full"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
              </Button>
              
              <Button
                variant="emergency"
                size="icon"
                className="w-16 h-16 rounded-full"
                onClick={endCall}
              >
                <PhoneOff className="w-7 h-7" />
              </Button>
              
              <Button
                variant={isVideoOff ? "destructive" : "glass"}
                size="icon"
                className="w-14 h-14 rounded-full"
                onClick={() => setIsVideoOff(!isVideoOff)}
              >
                {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
              </Button>
              
              <Link to="/chat">
                <Button
                  variant="glass"
                  size="icon"
                  className="w-14 h-14 rounded-full"
                >
                  <MessageSquare className="w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <Header />
      
      <main className="container px-4 pt-20 page-transition">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl font-bold mb-2">
            <span className="gradient-text">Teleconsultation</span>
          </h1>
          <p className="text-muted-foreground mb-6">
            Connect with doctors via video or audio call
          </p>

          {/* Subscription Plans */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Subscription Plans</h2>
            <div className="grid grid-cols-3 gap-3">
              {subscriptionPlans.map((plan) => (
                <motion.div
                  key={plan.name}
                  whileHover={{ scale: 1.05 }}
                  className="glow-card p-4 text-center cursor-pointer"
                >
                  <h3 className="font-bold text-primary text-sm">{plan.name}</h3>
                  <p className="text-xs text-foreground font-semibold mt-1">{plan.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">{plan.calls}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Available Doctors */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Available Doctors</h2>
            <div className="space-y-4">
              {doctors.map((doctor) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glow-card p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                      <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="w-3 h-3 text-secondary fill-secondary" />
                        <span className="text-xs text-muted-foreground">{doctor.rating}</span>
                        <span className="text-xs text-primary font-semibold">{doctor.price}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        size="sm"
                        variant={doctor.available ? "glow" : "outline"}
                        disabled={!doctor.available}
                        onClick={() => startCall(doctor)}
                      >
                        <Video className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant={doctor.available ? "gold" : "outline"}
                        disabled={!doctor.available}
                        onClick={() => startCall(doctor)}
                      >
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
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

export default Teleconsultation;
