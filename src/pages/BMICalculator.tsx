import { useState } from "react";
import { motion } from "framer-motion";
import { Scale, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) setBmi(parseFloat((w / (h * h)).toFixed(1)));
  };

  const getCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-blue-400", advice: "Consider eating more nutrient-rich foods." };
    if (bmi < 25) return { label: "Normal", color: "text-green-400", advice: "Great! Maintain your healthy lifestyle." };
    if (bmi < 30) return { label: "Overweight", color: "text-yellow-400", advice: "Consider more exercise and balanced diet." };
    return { label: "Obese", color: "text-red-400", advice: "Consult a doctor for a health plan." };
  };

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/analytics" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"><Scale className="w-6 h-6 text-white" /></div>
            <h1 className="text-2xl font-bold gradient-text">BMI Calculator</h1>
          </div>

          <div className="glow-card p-6 space-y-4">
            <div><Label>Weight (kg)</Label><Input type="number" placeholder="e.g. 70" value={weight} onChange={(e) => setWeight(e.target.value)} className="bg-muted border-border" /></div>
            <div><Label>Height (cm)</Label><Input type="number" placeholder="e.g. 170" value={height} onChange={(e) => setHeight(e.target.value)} className="bg-muted border-border" /></div>
            <Button variant="glow" className="w-full" onClick={calculateBMI}>Calculate BMI</Button>
          </div>

          {bmi !== null && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glow-card p-6 mt-6 text-center">
              <p className="text-5xl font-bold text-primary mb-2">{bmi}</p>
              <p className={`text-xl font-semibold ${getCategory(bmi).color}`}>{getCategory(bmi).label}</p>
              <p className="text-sm text-muted-foreground mt-2">{getCategory(bmi).advice}</p>
            </motion.div>
          )}
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default BMICalculator;
