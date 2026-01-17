import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import HeroSection from "@/components/home/HeroSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import CreatorSection from "@/components/home/CreatorSection";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      
      <main className="container px-4 page-transition">
        <HeroSection />
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-bold mb-2">Our Services</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Access quality healthcare services anytime, anywhere
          </p>
          <FeatureGrid />
        </motion.section>

        <CreatorSection />
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 mb-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            © 2026 Salone Health Connect. Created by Alusine Gadrie Dumbuya
          </p>
        </motion.section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
