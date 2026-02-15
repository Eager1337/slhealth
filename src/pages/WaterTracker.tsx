import { useState } from "react";
import { motion } from "framer-motion";
import { Droplets, Plus, Minus, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WaterTracker = () => {
  const [glasses, setGlasses] = useState(0);
  const goal = 8;
  const percentage = Math.min((glasses / goal) * 100, 100);

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/analytics" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"><Droplets className="w-6 h-6 text-white" /></div>
            <h1 className="text-2xl font-bold gradient-text">Water Tracker</h1>
          </div>

          <div className="glow-card p-8 text-center">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                <circle cx="60" cy="60" r="54" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" strokeDasharray={`${percentage * 3.39} 339`} strokeLinecap="round" className="transition-all duration-500" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Droplets className="w-8 h-8 text-primary mb-1" />
                <span className="text-3xl font-bold text-foreground">{glasses}</span>
                <span className="text-xs text-muted-foreground">of {goal} glasses</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <Button variant="outline" size="icon" className="w-14 h-14 rounded-full" onClick={() => setGlasses(Math.max(0, glasses - 1))}><Minus className="w-6 h-6" /></Button>
              <Button variant="glow" size="icon" className="w-16 h-16 rounded-full" onClick={() => setGlasses(glasses + 1)}><Plus className="w-6 h-6" /></Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">{percentage >= 100 ? "🎉 Goal reached! Stay hydrated!" : `${Math.round(percentage)}% of daily goal`}</p>
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default WaterTracker;
