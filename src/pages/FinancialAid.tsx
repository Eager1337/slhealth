import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, DollarSign, FileText, Check, Clock, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const aidPrograms = [
  {
    id: 1,
    name: "Free Maternal Care",
    description: "Free healthcare for pregnant women and newborns",
    coverage: "100%",
    eligibility: "All pregnant women",
    status: "Available",
  },
  {
    id: 2,
    name: "Child Health Initiative",
    description: "Free healthcare for children under 5 years",
    coverage: "100%",
    eligibility: "Children under 5",
    status: "Available",
  },
  {
    id: 3,
    name: "Senior Care Program",
    description: "Subsidized healthcare for elderly citizens",
    coverage: "75%",
    eligibility: "Citizens 60+",
    status: "Available",
  },
  {
    id: 4,
    name: "Emergency Fund",
    description: "Financial assistance for emergency treatments",
    coverage: "Up to Le 5,000,000",
    eligibility: "Low-income families",
    status: "Limited",
  },
];

const applications = [
  { id: 1, program: "Free Maternal Care", date: "Jan 5, 2026", status: "Approved", amount: "Le 500,000" },
  { id: 2, program: "Emergency Fund", date: "Dec 20, 2025", status: "Pending", amount: "Le 1,200,000" },
];

const FinancialAid = () => {
  const [activeTab, setActiveTab] = useState<"programs" | "applications">("programs");

  const handleApply = (programName: string) => {
    toast.success(`Application submitted for ${programName}`);
  };

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-health-gold flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Financial Aid</h1>
              <p className="text-sm text-muted-foreground">Healthcare assistance programs</p>
            </div>
          </div>

          {/* Summary Card */}
          <div className="glow-card p-4 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Total Aid Received</p>
                <p className="text-2xl font-bold text-primary">Le 500,000</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-xl font-semibold text-secondary">Le 1,200,000</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("programs")}
              className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                activeTab === "programs"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border"
              }`}
            >
              Programs
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                activeTab === "applications"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border"
              }`}
            >
              My Applications
            </button>
          </div>

          {/* Programs Tab */}
          {activeTab === "programs" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {aidPrograms.map((program) => (
                <div key={program.id} className="glow-card p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-foreground">{program.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      program.status === "Available" 
                        ? "bg-health-green/20 text-health-green" 
                        : "bg-secondary/20 text-secondary"
                    }`}>
                      {program.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div>
                      <p className="text-muted-foreground text-xs">Coverage</p>
                      <p className="text-foreground font-medium">{program.coverage}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Eligibility</p>
                      <p className="text-foreground font-medium">{program.eligibility}</p>
                    </div>
                  </div>
                  <Button 
                    variant="glow" 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleApply(program.name)}
                  >
                    Apply Now <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              ))}
            </motion.div>
          )}

          {/* Applications Tab */}
          {activeTab === "applications" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {applications.map((app) => (
                <div key={app.id} className="glow-card p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{app.program}</h3>
                      <p className="text-xs text-muted-foreground">{app.date}</p>
                    </div>
                    <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                      app.status === "Approved" 
                        ? "bg-health-green/20 text-health-green" 
                        : "bg-secondary/20 text-secondary"
                    }`}>
                      {app.status === "Approved" ? <Check className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      {app.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-sm text-muted-foreground">Amount</span>
                    <span className="font-bold text-primary">{app.amount}</span>
                  </div>
                </div>
              ))}

              {applications.length === 0 && (
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">No applications yet</p>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default FinancialAid;
