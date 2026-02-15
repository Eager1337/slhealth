import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Stethoscope, BarChart, CreditCard, Brain, Users, FileText, Shield, Globe, Wifi, ChevronRight,
  Heart, Pill, Utensils, Baby, Droplets, Newspaper, FlaskConical, MessageSquare, Syringe, Scale,
  Moon, User
} from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";

const moreFeatures = [
  { icon: User, title: "My Profile", path: "/profile", color: "from-primary to-accent" },
  { icon: Stethoscope, title: "Doctor Profiles", path: "/doctors", color: "from-primary to-accent" },
  { icon: BarChart, title: "Health Analytics", path: "/analytics", color: "from-health-blue to-primary" },
  { icon: CreditCard, title: "Financial Aid", path: "/financial-aid", color: "from-secondary to-health-gold" },
  { icon: Brain, title: "AI Symptom Checker", path: "/symptom-checker", color: "from-accent to-health-blue" },
  { icon: Users, title: "Community Events", path: "/community-events", color: "from-primary to-health-green" },
  { icon: FileText, title: "Patient Records", path: "/patient-records", color: "from-health-gold to-secondary" },
  { icon: Heart, title: "First Aid Guide", path: "/first-aid", color: "from-destructive to-red-600" },
  { icon: Pill, title: "Pharmacy", path: "/pharmacy", color: "from-green-500 to-primary" },
  { icon: Brain, title: "Mental Health", path: "/mental-health", color: "from-purple-500 to-pink-500" },
  { icon: Syringe, title: "Vaccination Record", path: "/vaccination", color: "from-blue-500 to-cyan-500" },
  { icon: Utensils, title: "Diet Planner", path: "/diet-planner", color: "from-orange-400 to-red-500" },
  { icon: Baby, title: "Pregnancy Tracker", path: "/pregnancy-tracker", color: "from-pink-400 to-purple-500" },
  { icon: Droplets, title: "Blood Donation", path: "/blood-donation", color: "from-red-500 to-red-700" },
  { icon: Scale, title: "BMI Calculator", path: "/bmi-calculator", color: "from-primary to-accent" },
  { icon: Droplets, title: "Water Tracker", path: "/water-tracker", color: "from-blue-400 to-blue-600" },
  { icon: Moon, title: "Sleep Tracker", path: "/sleep-tracker", color: "from-indigo-500 to-purple-600" },
  { icon: Shield, title: "Health Insurance", path: "/health-insurance", color: "from-primary to-health-green" },
  { icon: Newspaper, title: "Health News", path: "/health-news", color: "from-primary to-health-blue" },
  { icon: FlaskConical, title: "Lab Results", path: "/lab-results", color: "from-purple-500 to-blue-500" },
  { icon: Users, title: "Family Health", path: "/family-health", color: "from-primary to-health-green" },
  { icon: MessageSquare, title: "Feedback", path: "/feedback", color: "from-primary to-secondary" },
  { icon: Shield, title: "Privacy & Security", path: "/privacy", color: "from-health-green to-primary" },
  { icon: Globe, title: "Language Settings", path: "/language-settings", color: "from-accent to-primary" },
  { icon: Wifi, title: "Offline Access", path: "/offline", color: "from-primary to-accent" },
];

const More = () => {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold gradient-text mb-6">More Features</h1>
          <div className="space-y-3">
            {moreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.path + feature.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.02 }}>
                  <Link to={feature.path}>
                    <div className="glow-card p-4 flex items-center gap-4 group">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="flex-1 font-medium text-foreground">{feature.title}</span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default More;
