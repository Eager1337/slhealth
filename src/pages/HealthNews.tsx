import { motion } from "framer-motion";
import { Newspaper, ArrowLeft, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Link } from "react-router-dom";

const news = [
  { title: "Sierra Leone Launches Free Maternal Healthcare", date: "Feb 15, 2026", category: "Policy", excerpt: "The government announces free healthcare for all pregnant women across the country." },
  { title: "New Malaria Vaccine Available in Freetown", date: "Feb 12, 2026", category: "Vaccination", excerpt: "WHO-approved RTS,S vaccine now available at major hospitals in the Western Area." },
  { title: "Community Health Workers Training Program", date: "Feb 10, 2026", category: "Education", excerpt: "500 new community health workers trained to serve rural areas across all districts." },
  { title: "Digital Health Initiative Reaches Bo District", date: "Feb 8, 2026", category: "Technology", excerpt: "Telemedicine services now available in Bo, connecting rural patients with specialists." },
  { title: "Cholera Prevention Campaign Launched", date: "Feb 5, 2026", category: "Prevention", excerpt: "Ministry of Health launches nationwide clean water and sanitation campaign." },
  { title: "Mental Health Services Expanded Nationwide", date: "Feb 1, 2026", category: "Mental Health", excerpt: "New mental health clinics opened in Kenema, Makeni, and Port Loko districts." },
];

const HealthNews = () => {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/more" className="flex items-center gap-2 text-muted-foreground mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-health-blue flex items-center justify-center"><Newspaper className="w-6 h-6 text-white" /></div>
            <h1 className="text-2xl font-bold gradient-text">Health News</h1>
          </div>

          <div className="space-y-4">
            {news.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glow-card p-4">
                <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">{item.category}</span>
                <h3 className="font-bold text-foreground mt-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.excerpt}</p>
                <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1"><Clock className="w-3 h-3" />{item.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default HealthNews;
