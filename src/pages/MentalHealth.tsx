import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Heart, ArrowLeft, Smile, Frown, Meh } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const moodOptions = [
  { icon: Smile, label: "Happy", color: "text-green-400" },
  { icon: Meh, label: "Okay", color: "text-yellow-400" },
  { icon: Frown, label: "Sad", color: "text-red-400" },
];

const exercises = [
  { title: "Deep Breathing", desc: "4-7-8 breathing technique for calm", duration: "5 min", emoji: "🧘" },
  { title: "Gratitude Journal", desc: "Write 3 things you're grateful for", duration: "10 min", emoji: "📝" },
  { title: "Body Scan", desc: "Progressive muscle relaxation", duration: "15 min", emoji: "🧠" },
  { title: "Mindful Walking", desc: "Walk slowly and observe surroundings", duration: "20 min", emoji: "🚶" },
  { title: "Positive Affirmations", desc: "Repeat empowering statements", duration: "5 min", emoji: "💪" },
];

const MentalHealth = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/more" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"><Brain className="w-6 h-6 text-white" /></div>
            <div><h1 className="text-2xl font-bold gradient-text">Mental Health</h1><p className="text-sm text-muted-foreground">Your mind matters</p></div>
          </div>

          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-4">How are you feeling today?</h2>
            <div className="flex gap-4 justify-center">
              {moodOptions.map((mood) => {
                const Icon = mood.icon;
                return (
                  <motion.button key={mood.label} whileTap={{ scale: 0.9 }} onClick={() => { setSelectedMood(mood.label); toast.success(`Mood logged: ${mood.label}`); }}
                    className={`glow-card p-6 flex flex-col items-center gap-2 ${selectedMood === mood.label ? "ring-2 ring-primary" : ""}`}>
                    <Icon className={`w-10 h-10 ${mood.color}`} />
                    <span className="text-sm text-foreground">{mood.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">Wellness Exercises</h2>
            <div className="space-y-3">
              {exercises.map((ex, i) => (
                <motion.div key={ex.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="glow-card p-4 flex items-center gap-4">
                  <span className="text-3xl">{ex.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{ex.title}</h3>
                    <p className="text-sm text-muted-foreground">{ex.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-primary">{ex.duration}</span>
                    <Button variant="outline" size="sm" className="mt-1 block" onClick={() => toast.success(`Starting ${ex.title}...`)}>Start</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <div className="glow-card p-6 text-center">
              <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-foreground">Need Someone to Talk To?</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">Our mental health counselors are here to help</p>
              <Link to="/teleconsultation"><Button variant="glow">Talk to a Counselor</Button></Link>
            </div>
          </section>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default MentalHealth;
