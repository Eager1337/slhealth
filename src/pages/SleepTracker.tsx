import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const SleepTracker = () => {
  const [bedtime, setBedtime] = useState("22:00");
  const [wakeTime, setWakeTime] = useState("06:00");
  const [logs, setLogs] = useState([
    { date: "Feb 14", hours: 7.5, quality: "Good" },
    { date: "Feb 13", hours: 6, quality: "Fair" },
    { date: "Feb 12", hours: 8, quality: "Excellent" },
  ]);

  const logSleep = () => {
    const [bH, bM] = bedtime.split(":").map(Number);
    const [wH, wM] = wakeTime.split(":").map(Number);
    let hours = wH - bH + (wM - bM) / 60;
    if (hours < 0) hours += 24;
    const quality = hours >= 8 ? "Excellent" : hours >= 7 ? "Good" : hours >= 6 ? "Fair" : "Poor";
    setLogs([{ date: "Today", hours: parseFloat(hours.toFixed(1)), quality }, ...logs]);
    toast.success(`Logged ${hours.toFixed(1)} hours of sleep`);
  };

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/analytics" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"><Moon className="w-6 h-6 text-white" /></div>
            <h1 className="text-2xl font-bold gradient-text">Sleep Tracker</h1>
          </div>

          <div className="glow-card p-6 space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div><Label className="flex items-center gap-1"><Moon className="w-3 h-3" />Bedtime</Label><Input type="time" value={bedtime} onChange={(e) => setBedtime(e.target.value)} className="bg-muted border-border" /></div>
              <div><Label className="flex items-center gap-1"><Sun className="w-3 h-3" />Wake Up</Label><Input type="time" value={wakeTime} onChange={(e) => setWakeTime(e.target.value)} className="bg-muted border-border" /></div>
            </div>
            <Button variant="glow" className="w-full" onClick={logSleep}>Log Sleep</Button>
          </div>

          <h2 className="text-lg font-semibold mb-4">Sleep History</h2>
          <div className="space-y-3">
            {logs.map((log, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="glow-card p-4 flex items-center justify-between">
                <div><p className="font-medium text-foreground">{log.date}</p><p className="text-sm text-muted-foreground">{log.hours} hours</p></div>
                <span className={`text-sm font-semibold ${log.quality === "Excellent" ? "text-green-400" : log.quality === "Good" ? "text-primary" : log.quality === "Fair" ? "text-yellow-400" : "text-red-400"}`}>{log.quality}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default SleepTracker;
