import { motion } from "framer-motion";
import { Users, Heart, ArrowLeft, Plus } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const familyMembers = [
  { name: "Aminata (Wife)", age: 28, lastVisit: "Feb 10, 2026", conditions: ["Prenatal care"], emoji: "👩" },
  { name: "Ibrahim (Son)", age: 5, lastVisit: "Jan 15, 2026", conditions: ["Vaccination due"], emoji: "👦" },
  { name: "Fatmata (Daughter)", age: 3, lastVisit: "Dec 20, 2025", conditions: ["Healthy"], emoji: "👧" },
  { name: "Mother", age: 60, lastVisit: "Feb 1, 2026", conditions: ["Hypertension", "Diabetes"], emoji: "👵" },
];

const FamilyHealth = () => {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/more" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-health-green flex items-center justify-center"><Users className="w-6 h-6 text-white" /></div>
              <div><h1 className="text-2xl font-bold gradient-text">Family Health</h1><p className="text-sm text-muted-foreground">Manage your family</p></div>
            </div>
            <Button variant="glow" size="icon" onClick={() => toast.info("Add family member coming soon")}><Plus className="w-5 h-5" /></Button>
          </div>

          <div className="space-y-4">
            {familyMembers.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="glow-card p-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{member.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">Age: {member.age} • Last visit: {member.lastVisit}</p>
                    <div className="flex gap-2 mt-1 flex-wrap">
                      {member.conditions.map((c) => (
                        <span key={c} className={`text-xs px-2 py-0.5 rounded-full ${c === "Healthy" ? "bg-green-500/20 text-green-400" : "bg-primary/20 text-primary"}`}>{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Link to="/appointments" className="flex-1"><Button variant="outline" size="sm" className="w-full">Book Visit</Button></Link>
                  <Link to="/patient-records" className="flex-1"><Button variant="glow" size="sm" className="w-full">Records</Button></Link>
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

export default FamilyHealth;
