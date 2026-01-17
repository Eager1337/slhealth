import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Video, Calendar, BookOpen, Bell, MapPin, 
  Pill, Stethoscope, Heart, Phone, Brain,
  Users, FileText, Shield, Globe
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Teleconsultation",
    description: "Live video consultations with doctors",
    path: "/teleconsultation",
    color: "from-primary to-accent",
  },
  {
    icon: Calendar,
    title: "Appointments",
    description: "Book appointments anytime",
    path: "/appointments",
    color: "from-secondary to-health-gold",
  },
  {
    icon: BookOpen,
    title: "Health Education",
    description: "Learn about health and wellness",
    path: "/health-education",
    color: "from-health-blue to-primary",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Stay updated with reminders",
    path: "/notifications",
    color: "from-health-gold to-secondary",
  },
  {
    icon: MapPin,
    title: "Mobile Clinics",
    description: "Find clinics near you",
    path: "/mobile-clinics",
    color: "from-primary to-health-green",
  },
  {
    icon: Phone,
    title: "Emergency",
    description: "Access emergency contacts",
    path: "/emergency",
    color: "from-destructive to-health-red",
  },
  {
    icon: Pill,
    title: "Medication",
    description: "Set medication reminders",
    path: "/medication-reminders",
    color: "from-health-green to-primary",
  },
  {
    icon: Stethoscope,
    title: "Doctors",
    description: "View doctor profiles",
    path: "/doctors",
    color: "from-accent to-health-blue",
  },
  {
    icon: Heart,
    title: "Health Tips",
    description: "Tips in Krio & English",
    path: "/health-tips",
    color: "from-primary to-secondary",
  },
  {
    icon: Brain,
    title: "AI Symptom Check",
    description: "AI-powered health checker",
    path: "/symptom-checker",
    color: "from-health-blue to-accent",
  },
  {
    icon: Users,
    title: "Community",
    description: "Health events near you",
    path: "/community-events",
    color: "from-secondary to-health-gold",
  },
  {
    icon: FileText,
    title: "Records",
    description: "Your patient records",
    path: "/patient-records",
    color: "from-primary to-health-teal",
  },
  {
    icon: Shield,
    title: "Privacy",
    description: "Your data is secure",
    path: "/privacy",
    color: "from-health-green to-primary",
  },
  {
    icon: Globe,
    title: "Multi-language",
    description: "Krio, English & more",
    path: "/language-settings",
    color: "from-accent to-primary",
  },
];

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
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
