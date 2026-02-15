import { motion } from "framer-motion";
import { Shield, Check, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  { name: "Basic Cover", price: "Le 50,000/month", amount: "50000", features: ["General consultations", "Basic lab tests", "Emergency care"], color: "from-primary to-accent" },
  { name: "Family Plan", price: "Le 120,000/month", amount: "120000", features: ["All Basic features", "Family coverage (up to 5)", "Specialist visits", "Dental checkups"], color: "from-secondary to-health-gold", popular: true },
  { name: "Premium Care", price: "Le 250,000/month", amount: "250000", features: ["All Family features", "Surgery coverage", "International referrals", "Mental health", "Maternity care"], color: "from-health-blue to-primary" },
];

const HealthInsurance = () => {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/more" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-health-green flex items-center justify-center"><Shield className="w-6 h-6 text-white" /></div>
            <div><h1 className="text-2xl font-bold gradient-text">Health Insurance</h1><p className="text-sm text-muted-foreground">Choose your coverage</p></div>
          </div>

          <div className="space-y-4">
            {plans.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className={`glow-card p-6 relative ${plan.popular ? "ring-2 ring-secondary" : ""}`}>
                {plan.popular && <span className="absolute -top-3 left-4 bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full font-semibold">Most Popular</span>}
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="w-4 h-4 text-primary flex-shrink-0" />{f}</li>
                  ))}
                </ul>
                <Link to={`/payment?amount=${plan.amount}&service=${encodeURIComponent(plan.name + ' Insurance')}`}>
                  <Button variant={plan.popular ? "glow" : "outline"} className="w-full">Subscribe</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default HealthInsurance;
