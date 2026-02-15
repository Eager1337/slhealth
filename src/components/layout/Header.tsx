import { motion } from "framer-motion";
import { Heart, Menu, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="relative"
          >
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <div className="absolute inset-0 animate-ping"><Heart className="w-8 h-8 text-primary/30 fill-primary/30" /></div>
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm font-bold gradient-text leading-tight">SALONE</span>
            <span className="text-xs font-semibold text-foreground leading-tight">HEALTH CONNECT</span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {user ? (
            <Link to="/profile"><Button variant="ghost" size="icon"><User className="w-5 h-5" /></Button></Link>
          ) : (
            <Link to="/signin"><Button variant="glow" size="sm">Sign In</Button></Link>
          )}
          <Sheet>
            <SheetTrigger asChild><Button variant="ghost" size="icon"><Menu className="w-5 h-5" /></Button></SheetTrigger>
            <SheetContent side="right" className="w-80 bg-card border-border">
              <nav className="flex flex-col gap-4 mt-8">
                {user ? (
                  <>
                    <Link to="/profile" className="text-lg font-medium hover:text-primary transition-colors">My Profile</Link>
                    <Link to="/patient-records" className="text-lg font-medium hover:text-primary transition-colors">Patient Records</Link>
                    <Link to="/lab-results" className="text-lg font-medium hover:text-primary transition-colors">Lab Results</Link>
                  </>
                ) : (
                  <Link to="/signin" className="text-lg font-medium hover:text-primary transition-colors">Sign In</Link>
                )}
                <Link to="/doctors" className="text-lg font-medium hover:text-primary transition-colors">Our Doctors</Link>
                <Link to="/emergency" className="text-lg font-medium text-destructive hover:text-destructive/80 transition-colors">Emergency Services</Link>
                <Link to="/first-aid" className="text-lg font-medium hover:text-primary transition-colors">First Aid Guide</Link>
                <Link to="/pharmacy" className="text-lg font-medium hover:text-primary transition-colors">Pharmacy</Link>
                <Link to="/health-insurance" className="text-lg font-medium hover:text-primary transition-colors">Health Insurance</Link>
                <Link to="/health-news" className="text-lg font-medium hover:text-primary transition-colors">Health News</Link>
                <Link to="/mental-health" className="text-lg font-medium hover:text-primary transition-colors">Mental Health</Link>
                <Link to="/vaccination" className="text-lg font-medium hover:text-primary transition-colors">Vaccination</Link>
                <Link to="/family-health" className="text-lg font-medium hover:text-primary transition-colors">Family Health</Link>
                <Link to="/symptom-checker" className="text-lg font-medium hover:text-primary transition-colors">AI Symptom Checker</Link>
                <Link to="/community-events" className="text-lg font-medium hover:text-primary transition-colors">Community Events</Link>
                <Link to="/feedback" className="text-lg font-medium hover:text-primary transition-colors">Feedback</Link>
                <Link to="/privacy" className="text-lg font-medium hover:text-primary transition-colors">Privacy & Security</Link>
                {user && (
                  <button onClick={() => signOut()} className="text-lg font-medium text-destructive hover:text-destructive/80 transition-colors text-left flex items-center gap-2">
                    <LogOut className="w-5 h-5" />Sign Out
                  </button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
