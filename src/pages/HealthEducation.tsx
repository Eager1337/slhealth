import { motion } from "framer-motion";
import { BookOpen, ChevronRight, Heart, Pill, Baby, Brain, Bone, Eye } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Link } from "react-router-dom";

const topics = [
  {
    id: 1,
    title: "Malaria Prevention & Treatment",
    description: "Learn how to prevent and treat malaria in Sierra Leone",
    icon: Heart,
    color: "from-destructive to-secondary",
    path: "/health-education/malaria",
  },
  {
    id: 2,
    title: "Typhoid Fever",
    description: "Symptoms, treatment, and prevention of typhoid",
    icon: Pill,
    color: "from-primary to-accent",
    path: "/health-education/typhoid",
  },
  {
    id: 3,
    title: "Cholera Prevention",
    description: "Water safety and cholera prevention tips",
    icon: Brain,
    color: "from-health-blue to-primary",
    path: "/health-education/cholera",
  },
  {
    id: 4,
    title: "Maternal Health",
    description: "Pregnancy care and safe delivery practices",
    icon: Baby,
    color: "from-secondary to-health-gold",
    path: "/health-education/maternal",
  },
  {
    id: 5,
    title: "Child Nutrition",
    description: "Proper nutrition for children's growth",
    icon: Heart,
    color: "from-health-green to-primary",
    path: "/health-education/nutrition",
  },
  {
    id: 6,
    title: "Lassa Fever",
    description: "Prevention and early detection of Lassa fever",
    icon: Brain,
    color: "from-destructive to-health-red",
    path: "/health-education/lassa",
  },
  {
    id: 7,
    title: "HIV/AIDS Awareness",
    description: "Prevention, testing, and treatment information",
    icon: Heart,
    color: "from-primary to-health-teal",
    path: "/health-education/hiv",
  },
  {
    id: 8,
    title: "Eye Care",
    description: "Protecting your vision and eye health",
    icon: Eye,
    color: "from-accent to-health-blue",
    path: "/health-education/eye-care",
  },
  {
    id: 9,
    title: "Bone & Joint Health",
    description: "Keeping your bones strong and healthy",
    icon: Bone,
    color: "from-health-gold to-secondary",
    path: "/health-education/bone-health",
  },
];

const HealthEducation = () => {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      
      <main className="container px-4 pt-20 page-transition">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Health Education</h1>
              <p className="text-sm text-muted-foreground">Learn about health in Sierra Leone</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={topic.path}>
                    <div className="glow-card p-4 flex items-center gap-4 group">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{topic.title}</h3>
                        <p className="text-sm text-muted-foreground">{topic.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
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

export default HealthEducation;
