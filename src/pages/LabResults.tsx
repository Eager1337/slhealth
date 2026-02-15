import { motion } from "framer-motion";
import { FlaskConical, ArrowLeft, Download, Eye } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const results = [
  { test: "Full Blood Count", date: "Feb 14, 2026", status: "Normal", doctor: "Dr. Kamara" },
  { test: "Malaria Rapid Test", date: "Feb 10, 2026", status: "Negative", doctor: "Dr. Sesay" },
  { test: "Blood Sugar (Fasting)", date: "Feb 5, 2026", status: "Normal", doctor: "Dr. Conteh" },
  { test: "HIV Screening", date: "Jan 28, 2026", status: "Negative", doctor: "Dr. Koroma" },
  { test: "Liver Function Test", date: "Jan 20, 2026", status: "Attention", doctor: "Dr. Kamara" },
];

const LabResults = () => {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/patient-records" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center"><FlaskConical className="w-6 h-6 text-white" /></div>
            <h1 className="text-2xl font-bold gradient-text">Lab Results</h1>
          </div>

          <div className="space-y-3">
            {results.map((r, i) => (
              <motion.div key={r.test + r.date} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="glow-card p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-foreground">{r.test}</h3>
                    <p className="text-sm text-muted-foreground">{r.date} • {r.doctor}</p>
                  </div>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${r.status === "Normal" || r.status === "Negative" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>{r.status}</span>
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

export default LabResults;
