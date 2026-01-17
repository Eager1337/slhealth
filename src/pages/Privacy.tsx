import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Check, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const privacySettings = [
  { id: "data_sharing", label: "Share data with healthcare providers", description: "Allow doctors to access your health records", enabled: true },
  { id: "analytics", label: "Health analytics", description: "Use your data to provide personalized insights", enabled: true },
  { id: "notifications", label: "Marketing notifications", description: "Receive promotional health tips and offers", enabled: false },
  { id: "research", label: "Anonymous research", description: "Contribute anonymized data to medical research", enabled: false },
];

const securityFeatures = [
  { icon: Lock, title: "End-to-End Encryption", description: "All your data is encrypted in transit and at rest" },
  { icon: Shield, title: "Secure Authentication", description: "Multi-factor authentication for added security" },
  { icon: Eye, title: "Privacy Controls", description: "You control who sees your health information" },
  { icon: FileText, title: "Data Portability", description: "Download or delete your data anytime" },
];

const Privacy = () => {
  const [settings, setSettings] = useState(
    privacySettings.reduce((acc, s) => ({ ...acc, [s.id]: s.enabled }), {} as Record<string, boolean>)
  );

  const toggleSetting = (id: string) => {
    setSettings(prev => ({ ...prev, [id]: !prev[id] }));
    toast.success("Settings updated");
  };

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-health-green to-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Privacy & Security</h1>
              <p className="text-sm text-muted-foreground">Manage your data settings</p>
            </div>
          </div>

          {/* Security Features */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Security Features</h2>
            <div className="grid grid-cols-2 gap-3">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="glow-card p-4"
                  >
                    <Icon className="w-8 h-8 text-primary mb-2" />
                    <h3 className="font-semibold text-sm text-foreground">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Privacy Settings */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Privacy Settings</h2>
            <div className="space-y-3">
              {privacySettings.map((setting) => (
                <div key={setting.id} className="glow-card p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{setting.label}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{setting.description}</p>
                    </div>
                    <button
                      onClick={() => toggleSetting(setting.id)}
                      className={`w-12 h-6 rounded-full transition-all ${
                        settings[setting.id] ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <motion.div
                        animate={{ x: settings[setting.id] ? 24 : 2 }}
                        className="w-5 h-5 rounded-full bg-white shadow-md"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Data Management */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Data Management</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-between">
                Download My Data
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                View Data Usage
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between text-destructive border-destructive/50">
                Delete My Account
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </section>

          <p className="text-xs text-muted-foreground text-center mt-8">
            Last updated: January 2026. Read our full{" "}
            <span className="text-primary underline">Privacy Policy</span>
          </p>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Privacy;
