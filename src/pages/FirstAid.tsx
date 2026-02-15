import { motion } from "framer-motion";
import { Heart, ArrowLeft, Bandage } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Link } from "react-router-dom";

const guides = [
  { title: "Choking", icon: "🫁", steps: ["Ask if they can cough", "Give 5 back blows", "Give 5 abdominal thrusts", "Repeat until clear or help arrives"] },
  { title: "Burns", icon: "🔥", steps: ["Cool under running water 10+ min", "Remove clothing near burn", "Cover with clean cloth", "Do NOT apply ice or butter"] },
  { title: "Bleeding", icon: "🩸", steps: ["Apply firm pressure with cloth", "Elevate the wound above heart", "Keep pressure for 15 minutes", "Seek medical help if severe"] },
  { title: "Snakebite", icon: "🐍", steps: ["Keep calm and still", "Remove jewelry near bite", "Do NOT suck venom", "Get to hospital immediately"] },
  { title: "Drowning", icon: "🌊", steps: ["Call for help immediately", "If safe, pull person out", "Start CPR if not breathing", "Keep warm with blanket"] },
  { title: "Malaria Fever", icon: "🦟", steps: ["Give paracetamol for fever", "Keep hydrated with ORS", "Use cool cloth on forehead", "Get to clinic for testing"] },
  { title: "Fractures", icon: "🦴", steps: ["Immobilize the injured area", "Apply ice wrapped in cloth", "Do NOT try to realign", "Transport to hospital"] },
  { title: "Seizures", icon: "⚡", steps: ["Clear area of objects", "Do NOT hold person down", "Place on side after seizure", "Time the seizure duration"] },
];

const FirstAid = () => {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/more" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center"><Heart className="w-6 h-6 text-white" /></div>
            <h1 className="text-2xl font-bold gradient-text">First Aid Guide</h1>
          </div>

          <div className="space-y-4">
            {guides.map((guide, index) => (
              <motion.div key={guide.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="glow-card p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{guide.icon}</span>
                  <h3 className="text-lg font-bold text-foreground">{guide.title}</h3>
                </div>
                <ol className="space-y-2">
                  {guide.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default FirstAid;
