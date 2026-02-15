import { useState } from "react";
import { motion } from "framer-motion";
import { Baby, Calendar, Heart, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const weeklyTips: Record<number, { size: string; tip: string }> = {
  8: { size: "Raspberry 🫐", tip: "Baby's fingers and toes are forming. Take folic acid daily." },
  12: { size: "Lime 🍋", tip: "Morning sickness may ease. First ultrasound time!" },
  16: { size: "Avocado 🥑", tip: "You may start feeling kicks! Stay hydrated." },
  20: { size: "Banana 🍌", tip: "Halfway there! Gender can be determined." },
  24: { size: "Corn 🌽", tip: "Baby responds to sounds. Talk and sing!" },
  28: { size: "Eggplant 🍆", tip: "Third trimester! Baby's eyes can open." },
  32: { size: "Squash 🎃", tip: "Baby gaining weight. Prepare for delivery." },
  36: { size: "Honeydew Melon 🍈", tip: "Baby dropping into position. Pack hospital bag!" },
  40: { size: "Watermelon 🍉", tip: "Full term! Baby can arrive any day now." },
};

const PregnancyTracker = () => {
  const [weeks, setWeeks] = useState(20);
  const nearestWeek = Object.keys(weeklyTips).map(Number).reduce((prev, curr) => Math.abs(curr - weeks) < Math.abs(prev - weeks) ? curr : prev);
  const tip = weeklyTips[nearestWeek];

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/more" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center"><Baby className="w-6 h-6 text-white" /></div>
            <div><h1 className="text-2xl font-bold gradient-text">Pregnancy Tracker</h1><p className="text-sm text-muted-foreground">Week by week guide</p></div>
          </div>

          <div className="glow-card p-6 text-center mb-6">
            <p className="text-sm text-muted-foreground">Current Week</p>
            <input type="range" min={1} max={42} value={weeks} onChange={(e) => setWeeks(Number(e.target.value))} className="w-full accent-primary my-4" />
            <p className="text-4xl font-bold text-primary">{weeks}</p>
            <p className="text-muted-foreground">weeks</p>
          </div>

          <div className="glow-card p-6">
            <p className="text-center text-3xl mb-2">{tip.size.split(" ").pop()}</p>
            <h3 className="text-center font-bold text-foreground mb-1">Baby is the size of a {tip.size.split(" ")[0]}</h3>
            <p className="text-center text-sm text-muted-foreground">{tip.tip}</p>
          </div>

          <div className="mt-6 space-y-3">
            <Link to="/appointments"><Button variant="glow" className="w-full"><Calendar className="w-4 h-4 mr-2" />Book Prenatal Visit</Button></Link>
            <Link to="/teleconsultation"><Button variant="gold" className="w-full"><Heart className="w-4 h-4 mr-2" />Talk to OB/GYN</Button></Link>
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default PregnancyTracker;
