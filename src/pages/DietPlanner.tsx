import { motion } from "framer-motion";
import { Utensils, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Link } from "react-router-dom";

const meals = [
  { time: "Breakfast", items: ["Cassava leaf porridge", "Boiled eggs", "Fresh mango"], calories: 450, emoji: "🌅" },
  { time: "Mid-Morning", items: ["Groundnuts", "Banana"], calories: 200, emoji: "🥜" },
  { time: "Lunch", items: ["Jollof rice with fish", "Potato leaf sauce", "Palm oil stew"], calories: 650, emoji: "🍚" },
  { time: "Afternoon Snack", items: ["Fresh fruits", "Coconut water"], calories: 150, emoji: "🥥" },
  { time: "Dinner", items: ["Fufu with groundnut soup", "Grilled chicken", "Okra sauce"], calories: 550, emoji: "🍲" },
];

const DietPlanner = () => {
  const totalCalories = meals.reduce((sum, m) => sum + m.calories, 0);

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/more" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center"><Utensils className="w-6 h-6 text-white" /></div>
            <div><h1 className="text-2xl font-bold gradient-text">Diet Planner</h1><p className="text-sm text-muted-foreground">Sierra Leonean meals</p></div>
          </div>

          <div className="glow-card p-4 mb-6 text-center">
            <p className="text-sm text-muted-foreground">Daily Target</p>
            <p className="text-3xl font-bold text-primary">{totalCalories} cal</p>
          </div>

          <div className="space-y-4">
            {meals.map((meal, i) => (
              <motion.div key={meal.time} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="glow-card p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{meal.emoji}</span>
                  <div className="flex-1"><h3 className="font-bold text-foreground">{meal.time}</h3></div>
                  <span className="text-sm text-primary font-semibold">{meal.calories} cal</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {meal.items.map((item) => (
                    <span key={item} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{item}</span>
                  ))}
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

export default DietPlanner;
