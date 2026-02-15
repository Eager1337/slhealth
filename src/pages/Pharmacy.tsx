import { useState } from "react";
import { motion } from "framer-motion";
import { Pill, Search, ShoppingCart, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const medicines = [
  { name: "Paracetamol", desc: "Pain & fever relief", price: "5000", category: "Pain Relief" },
  { name: "Amoxicillin", desc: "Antibiotic for infections", price: "15000", category: "Antibiotics" },
  { name: "Artemether", desc: "Malaria treatment", price: "25000", category: "Antimalarial" },
  { name: "ORS Sachets", desc: "Oral rehydration salts", price: "3000", category: "Hydration" },
  { name: "Ibuprofen", desc: "Anti-inflammatory", price: "8000", category: "Pain Relief" },
  { name: "Metformin", desc: "Diabetes management", price: "12000", category: "Chronic Care" },
  { name: "Folic Acid", desc: "Pregnancy vitamin", price: "4000", category: "Vitamins" },
  { name: "Zinc Tablets", desc: "Immune support", price: "6000", category: "Vitamins" },
];

const Pharmacy = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<string[]>([]);
  const filtered = medicines.filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.category.toLowerCase().includes(search.toLowerCase()));

  const addToCart = (name: string) => {
    setCart([...cart, name]);
    toast.success(`${name} added to cart`);
  };

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/more" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-primary flex items-center justify-center"><Pill className="w-6 h-6 text-white" /></div>
              <h1 className="text-2xl font-bold gradient-text">Pharmacy</h1>
            </div>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-foreground" />
              {cart.length > 0 && <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full text-xs text-white flex items-center justify-center">{cart.length}</span>}
            </div>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search medicines..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 bg-muted border-border" />
          </div>

          <div className="space-y-3">
            {filtered.map((med, i) => (
              <motion.div key={med.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="glow-card p-4 flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{med.name}</h3>
                  <p className="text-sm text-muted-foreground">{med.desc}</p>
                  <span className="text-xs text-primary">{med.category}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">Le {parseInt(med.price).toLocaleString()}</p>
                  <Link to={`/payment?amount=${med.price}&service=${encodeURIComponent(med.name)}`}>
                    <Button variant="glow" size="sm" className="mt-1" onClick={() => addToCart(med.name)}>Buy</Button>
                  </Link>
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

export default Pharmacy;
