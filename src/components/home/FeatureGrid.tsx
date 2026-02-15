import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Video, Calendar, BookOpen, Bell, MapPin, 
  Pill, Stethoscope, Heart, Phone, Brain,
  Users, FileText, Shield, Globe, Syringe,
  Baby, Utensils, Scale, Droplets, Newspaper
} from "lucide-react";

const features = [
  { icon: Video, title: "Teleconsultation", description: "Live video consultations", path: "/teleconsultation", color: "from-primary to-accent" },
  { icon: Calendar, title: "Appointments", description: "Book appointments anytime", path: "/appointments", color: "from-secondary to-health-gold" },
  { icon: BookOpen, title: "Health Education", description: "Learn about wellness", path: "/health-education", color: "from-health-blue to-primary" },
  { icon: Bell, title: "Notifications", description: "Stay updated", path: "/notifications", color: "from-health-gold to-secondary" },
  { icon: MapPin, title: "Mobile Clinics", description: "Find clinics near you", path: "/mobile-clinics", color: "from-primary to-health-green" },
  { icon: Phone, title: "Emergency", description: "Emergency contacts", path: "/emergency", color: "from-destructive to-red-600" },
  { icon: Pill, title: "Medication", description: "Set reminders", path: "/medication-reminders", color: "from-health-green to-primary" },
  { icon: Stethoscope, title: "Doctors", description: "View doctor profiles", path: "/doctors", color: "from-accent to-health-blue" },
  { icon: Heart, title: "Health Tips", description: "Tips in Krio & English", path: "/health-tips", color: "from-primary to-secondary" },
  { icon: Brain, title: "AI Symptom Check", description: "AI-powered checker", path: "/symptom-checker", color: "from-health-blue to-accent" },
  { icon: Users, title: "Community", description: "Health events near you", path: "/community-events", color: "from-secondary to-health-gold" },
  { icon: FileText, title: "Records", description: "Patient records", path: "/patient-records", color: "from-primary to-health-teal" },
  { icon: Heart, title: "First Aid", description: "Emergency first aid", path: "/first-aid", color: "from-destructive to-red-600" },
  { icon: Pill, title: "Pharmacy", description: "Order medicines", path: "/pharmacy", color: "from-green-500 to-primary" },
  { icon: Brain, title: "Mental Health", description: "Your mind matters", path: "/mental-health", color: "from-purple-500 to-pink-500" },
  { icon: Syringe, title: "Vaccination", description: "Track immunizations", path: "/vaccination", color: "from-blue-500 to-cyan-500" },
  { icon: Baby, title: "Pregnancy", description: "Week by week guide", path: "/pregnancy-tracker", color: "from-pink-400 to-purple-500" },
  { icon: Droplets, title: "Blood Donation", description: "Save lives", path: "/blood-donation", color: "from-red-500 to-red-700" },
  { icon: Shield, title: "Insurance", description: "Health coverage", path: "/health-insurance", color: "from-primary to-health-green" },
  { icon: Newspaper, title: "Health News", description: "Latest updates", path: "/health-news", color: "from-primary to-health-blue" },
];

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div key={feature.path + feature.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }}>
            <Link to={feature.path}>
              <div className="feature-grid-item group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FeatureGrid;
