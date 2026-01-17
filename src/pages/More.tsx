import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Video, Calendar, BookOpen, MapPin, Pill, Stethoscope, Heart, Phone, Brain, Users, FileText, Shield, BarChart, CreditCard, Globe, Wifi, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";

const moreFeatures = [
  { icon: Stethoscope, title: "Doctor Profiles", path: "/doctors", color: "from-primary to-accent" },
  { icon: BarChart, title: "Health Analytics", path: "/analytics", color: "from-health-blue to-primary" },
  { icon: CreditCard, title: "Financial Aid", path: "/financial-aid", color: "from-secondary to-health-gold" },
  { icon: Brain, title: "AI Symptom Checker", path: "/symptom-checker", color: "from-accent to-health-blue" },
  { icon: Users, title: "Community Events", path: "/community-events", color: "from-primary to-health-green" },
  { icon: FileText, title: "Patient Records", path: "/patient-records", color: "from-health-gold to-secondary" },
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
                <motion.div key={feature.path} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
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
