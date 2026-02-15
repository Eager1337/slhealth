import { motion } from "framer-motion";
import { Droplets, MapPin, ArrowLeft, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const centers = [
  { name: "Freetown Blood Bank", location: "Connaught Hospital", hours: "8AM - 4PM", needs: ["O-", "A+", "B+"] },
  { name: "Bo Blood Center", location: "Bo Government Hospital", hours: "9AM - 3PM", needs: ["AB+", "O+"] },
  { name: "Kenema Blood Bank", location: "Kenema General Hospital", hours: "8AM - 5PM", needs: ["A-", "O+", "B-"] },
];

const BloodDonation = () => {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/more" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center"><Droplets className="w-6 h-6 text-white" /></div>
            <div><h1 className="text-2xl font-bold gradient-text">Blood Donation</h1><p className="text-sm text-muted-foreground">Save lives, donate blood</p></div>
          </div>

          <div className="glow-card p-6 mb-6 text-center">
            <Droplets className="w-12 h-12 text-red-400 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-foreground">Every Drop Counts</h3>
            <p className="text-sm text-muted-foreground mt-1">One donation can save up to 3 lives</p>
          </div>

          <h2 className="text-lg font-semibold mb-4">Donation Centers</h2>
          <div className="space-y-4">
            {centers.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="glow-card p-4">
                <h3 className="font-bold text-foreground">{c.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" />{c.location}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{c.hours}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="text-xs text-muted-foreground">Urgent needs:</span>
                  {c.needs.map((n) => <span key={n} className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">{n}</span>)}
                </div>
                <Button variant="glow" size="sm" className="mt-3" onClick={() => toast.success("Appointment request sent!")}>Schedule Donation</Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default BloodDonation;
