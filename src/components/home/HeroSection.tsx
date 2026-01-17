import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/sierra-leone-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl mt-20 mb-6">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sierra Leone" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      <div className="relative z-10 p-6 pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold mb-2">
            <span className="gradient-text">SALONE</span>{" "}
            <span className="text-foreground">HEALTH</span>
          </h1>
          <h2 className="text-2xl font-bold gradient-text-gold mb-4">CONNECT</h2>
          <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
            Your trusted healthcare companion in Sierra Leone. Access doctors, clinics, 
            and health resources at your fingertips.
          </p>
          
          <div className="flex gap-3 justify-center">
            <Link to="/signin">
              <Button variant="glow" size="lg">
                Get Started
              </Button>
            </Link>
            <Link to="/teleconsultation">
              <Button variant="outline" size="lg">
                Consult Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/30 blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-secondary/30 blur-3xl"
      />
    </section>
  );
};

export default HeroSection;
