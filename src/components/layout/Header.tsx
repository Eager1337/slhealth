import { motion } from "framer-motion";
import { Heart, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="relative"
          >
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <div className="absolute inset-0 animate-ping">
              <Heart className="w-8 h-8 text-primary/30 fill-primary/30" />
            </div>
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm font-bold gradient-text leading-tight">SALONE</span>
            <span className="text-xs font-semibold text-foreground leading-tight">HEALTH CONNECT</span>
          </div>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-card border-border">
            <nav className="flex flex-col gap-4 mt-8">
              <Link to="/signin" className="text-lg font-medium hover:text-primary transition-colors">
                Sign In
              </Link>
              <Link to="/about" className="text-lg font-medium hover:text-primary transition-colors">
                About Creator
              </Link>
              <Link to="/doctors" className="text-lg font-medium hover:text-primary transition-colors">
                Our Doctors
              </Link>
              <Link to="/emergency" className="text-lg font-medium text-destructive hover:text-destructive/80 transition-colors">
                Emergency Services
              </Link>
              <Link to="/symptom-checker" className="text-lg font-medium hover:text-primary transition-colors">
                AI Symptom Checker
              </Link>
              <Link to="/community-events" className="text-lg font-medium hover:text-primary transition-colors">
                Community Events
              </Link>
              <Link to="/privacy" className="text-lg font-medium hover:text-primary transition-colors">
                Privacy & Security
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
