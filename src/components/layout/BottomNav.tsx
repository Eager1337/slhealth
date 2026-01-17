import { Link, useLocation } from "react-router-dom";
import { Home, Video, Calendar, BookOpen, Bell, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Video, label: "Consult", path: "/teleconsultation" },
  { icon: Calendar, label: "Book", path: "/appointments" },
  { icon: BookOpen, label: "Learn", path: "/health-education" },
  { icon: Bell, label: "Alerts", path: "/notifications" },
  { icon: MoreHorizontal, label: "More", path: "/more" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="nav-bottom safe-area-bottom">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300",
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon 
                className={cn(
                  "w-5 h-5 transition-all duration-300",
                  isActive && "icon-glow drop-shadow-[0_0_10px_hsl(160_100%_50%/0.5)]"
                )} 
              />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
