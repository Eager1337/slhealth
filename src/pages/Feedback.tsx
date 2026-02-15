import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Star, Send, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("general");

  const handleSubmit = () => {
    if (rating === 0) { toast.error("Please select a rating"); return; }
    toast.success("Thank you for your feedback!");
    setRating(0); setFeedback(""); setCategory("general");
  };

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/more" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"><MessageSquare className="w-6 h-6 text-white" /></div>
            <h1 className="text-2xl font-bold gradient-text">Feedback</h1>
          </div>

          <div className="glow-card p-6 space-y-6">
            <div>
              <Label className="mb-3 block">Rate your experience</Label>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((s) => (
                  <motion.button key={s} whileTap={{ scale: 0.8 }} onClick={() => setRating(s)}>
                    <Star className={`w-10 h-10 ${s <= rating ? "text-secondary fill-secondary" : "text-muted-foreground"}`} />
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <Label className="mb-2 block">Category</Label>
              <div className="flex gap-2 flex-wrap">
                {["general", "doctors", "app", "teleconsultation", "payments"].map((c) => (
                  <Button key={c} variant={category === c ? "default" : "outline"} size="sm" onClick={() => setCategory(c)} className="capitalize">{c}</Button>
                ))}
              </div>
            </div>

            <div>
              <Label className="mb-2 block">Your feedback</Label>
              <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Tell us how we can improve..." className="w-full h-32 rounded-xl bg-muted border border-border p-3 text-foreground text-sm resize-none focus:ring-2 focus:ring-primary outline-none" />
            </div>

            <Button variant="glow" className="w-full" onClick={handleSubmit}><Send className="w-4 h-4 mr-2" />Submit Feedback</Button>
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Feedback;
