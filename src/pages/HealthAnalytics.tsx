import { motion } from "framer-motion";
import { BarChart, Activity, Heart, TrendingUp, Calendar } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";

const weeklyData = [
  { day: "Mon", steps: 4500, calories: 1800, sleep: 7 },
  { day: "Tue", steps: 6200, calories: 2100, sleep: 6.5 },
  { day: "Wed", steps: 3800, calories: 1600, sleep: 8 },
  { day: "Thu", steps: 7100, calories: 2300, sleep: 7.5 },
  { day: "Fri", steps: 5400, calories: 1950, sleep: 6 },
  { day: "Sat", steps: 8200, calories: 2500, sleep: 9 },
  { day: "Sun", steps: 2100, calories: 1400, sleep: 8.5 },
];

const healthMetrics = [
  { label: "Average Steps", value: "5,329", change: "+12%", icon: Activity, color: "from-primary to-accent" },
  { label: "Avg Sleep", value: "7.5 hrs", change: "+5%", icon: Heart, color: "from-health-blue to-primary" },
  { label: "Calories Burned", value: "1,950", change: "+8%", icon: TrendingUp, color: "from-secondary to-health-gold" },
  { label: "Active Days", value: "6/7", change: "+1", icon: Calendar, color: "from-health-green to-primary" },
];

const HealthAnalytics = () => {
  const maxSteps = Math.max(...weeklyData.map(d => d.steps));

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-health-blue to-primary flex items-center justify-center">
              <BarChart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Health Analytics</h1>
              <p className="text-sm text-muted-foreground">Track your wellness</p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {healthMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glow-card p-4"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                  <p className="text-xl font-bold text-foreground">{metric.value}</p>
                  <span className="text-xs text-health-green">{metric.change}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Weekly Steps Chart */}
          <div className="glow-card p-4 mb-6">
            <h3 className="font-semibold mb-4">Weekly Steps</h3>
            <div className="flex items-end justify-between gap-2 h-32">
              {weeklyData.map((data, index) => (
                <div key={data.day} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.steps / maxSteps) * 100}%` }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="w-full bg-gradient-to-t from-primary to-accent rounded-t-md"
                  />
                  <p className="text-xs text-muted-foreground mt-2">{data.day}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sleep Analysis */}
          <div className="glow-card p-4 mb-6">
            <h3 className="font-semibold mb-4">Sleep Quality</h3>
            <div className="space-y-3">
              {weeklyData.map((data) => (
                <div key={data.day} className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground w-10">{data.day}</span>
                  <div className="flex-1 h-3 bg-card rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(data.sleep / 10) * 100}%` }}
                      transition={{ duration: 0.5 }}
                      className={`h-full rounded-full ${
                        data.sleep >= 7 ? "bg-health-green" : data.sleep >= 6 ? "bg-secondary" : "bg-destructive"
                      }`}
                    />
                  </div>
                  <span className="text-sm font-medium w-12 text-right">{data.sleep}h</span>
                </div>
              ))}
            </div>
          </div>

          {/* Health Score */}
          <div className="glow-card p-6 text-center">
            <h3 className="font-semibold mb-4">Overall Health Score</h3>
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-muted"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 352" }}
                  animate={{ strokeDasharray: "282 352" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">80</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Great! Keep maintaining your healthy habits.</p>
            <Button variant="glow" className="mt-4">View Detailed Report</Button>
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default HealthAnalytics;
