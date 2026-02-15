import { useState } from "react";
import { motion } from "framer-motion";
import { Syringe, Check, ArrowLeft, Calendar } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const vaccines = [
  { name: "COVID-19", status: "completed", date: "Jan 2026", doses: "2/2" },
  { name: "Yellow Fever", status: "completed", date: "Dec 2025", doses: "1/1" },
  { name: "Hepatitis B", status: "partial", date: "Feb 2026", doses: "2/3" },
  { name: "Tetanus", status: "due", date: "Mar 2026", doses: "0/1" },
  { name: "Polio (OPV)", status: "completed", date: "Childhood", doses: "4/4" },
  { name: "Measles", status: "completed", date: "Childhood", doses: "2/2" },
];

const Vaccination = () => {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/more" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"><Syringe className="w-6 h-6 text-white" /></div>
            <div><h1 className="text-2xl font-bold gradient-text">Vaccination Record</h1><p className="text-sm text-muted-foreground">Track your immunizations</p></div>
          </div>

          <div className="space-y-3">
            {vaccines.map((v, i) => (
              <motion.div key={v.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="glow-card p-4 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${v.status === "completed" ? "bg-green-500/20" : v.status === "partial" ? "bg-yellow-500/20" : "bg-red-500/20"}`}>
                  {v.status === "completed" ? <Check className="w-5 h-5 text-green-400" /> : v.status === "partial" ? <Syringe className="w-5 h-5 text-yellow-400" /> : <Calendar className="w-5 h-5 text-red-400" />}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{v.name}</h3>
                  <p className="text-sm text-muted-foreground">{v.date} • {v.doses}</p>
                </div>
                {v.status === "due" && (
                  <Link to="/appointments"><Button variant="glow" size="sm">Schedule</Button></Link>
                )}
                {v.status === "partial" && (
                  <Link to="/appointments"><Button variant="gold" size="sm">Next Dose</Button></Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Vaccination;
