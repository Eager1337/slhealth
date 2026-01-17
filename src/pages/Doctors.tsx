import { motion } from "framer-motion";
import { Star, Phone, Video, Calendar } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";

const doctors = [
  { id: 1, name: "Dr. Mohamed Kamara", specialty: "General Practitioner", rating: 4.9, experience: "15 years", image: doctor1, price: "Le 50,000" },
  { id: 2, name: "Dr. Fatmata Sesay", specialty: "Pediatrician", rating: 4.8, experience: "12 years", image: doctor2, price: "Le 60,000" },
  { id: 3, name: "Dr. Ibrahim Conteh", specialty: "Cardiologist", rating: 4.9, experience: "20 years", image: doctor3, price: "Le 80,000" },
  { id: 4, name: "Dr. Aminata Koroma", specialty: "Gynecologist", rating: 4.7, experience: "10 years", image: doctor4, price: "Le 70,000" },
];

const Doctors = () => {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold gradient-text mb-6">Our Doctors</h1>
          <div className="space-y-4">
            {doctors.map((doctor, index) => (
              <motion.div key={doctor.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="glow-card p-4">
                <div className="flex gap-4">
                  <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{doctor.name}</h3>
                    <p className="text-sm text-primary">{doctor.specialty}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Star className="w-4 h-4 text-secondary fill-secondary" />
                      <span className="text-sm">{doctor.rating}</span>
                      <span className="text-xs text-muted-foreground">• {doctor.experience}</span>
                    </div>
                    <p className="text-sm font-semibold text-primary mt-1">{doctor.price}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Link to="/teleconsultation" className="flex-1"><Button variant="glow" size="sm" className="w-full"><Video className="w-4 h-4 mr-1" />Video</Button></Link>
                  <Link to="/appointments" className="flex-1"><Button variant="gold" size="sm" className="w-full"><Calendar className="w-4 h-4 mr-1" />Book</Button></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Doctors;
