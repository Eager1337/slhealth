import { useState } from "react";
import { motion } from "framer-motion";
import { Wifi, WifiOff, Download, Check, Trash2 } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const downloadableContent = [
  { id: "health_tips", name: "Health Tips Library", size: "2.5 MB", downloaded: true },
  { id: "emergency", name: "Emergency Contacts & Guides", size: "1.2 MB", downloaded: true },
  { id: "education", name: "Health Education Content", size: "8.5 MB", downloaded: false },
  { id: "medication", name: "Medication Database", size: "3.8 MB", downloaded: false },
  { id: "first_aid", name: "First Aid Instructions", size: "4.2 MB", downloaded: true },
  { id: "krio_content", name: "Krio Language Content", size: "5.1 MB", downloaded: false },
];

const OfflineAccess = () => {
  const [content, setContent] = useState(downloadableContent);
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = async (id: string) => {
    setDownloading(id);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setContent(prev => prev.map(c => c.id === id ? { ...c, downloaded: true } : c));
    setDownloading(null);
    toast.success("Downloaded successfully!");
  };

  const handleDelete = (id: string) => {
    setContent(prev => prev.map(c => c.id === id ? { ...c, downloaded: false } : c));
    toast.info("Content removed");
  };

  const totalDownloaded = content.filter(c => c.downloaded).reduce((acc, c) => acc + parseFloat(c.size), 0);

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Offline Access</h1>
              <p className="text-sm text-muted-foreground">Download content for offline use</p>
            </div>
          </div>

          {/* Storage Info */}
          <div className="glow-card p-4 mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-muted-foreground">Downloaded Content</span>
              <span className="font-semibold text-foreground">{totalDownloaded.toFixed(1)} MB</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(totalDownloaded / 30) * 100}%` }}
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Using {totalDownloaded.toFixed(1)} MB of 30 MB available</p>
          </div>

          {/* Offline Status */}
          <div className="glow-card p-4 mb-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-health-green/20 flex items-center justify-center">
              <Wifi className="w-5 h-5 text-health-green" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">You're Online</p>
              <p className="text-xs text-muted-foreground">Download content while connected</p>
            </div>
          </div>

          {/* Downloadable Content */}
          <h2 className="text-lg font-semibold mb-4">Available Content</h2>
          <div className="space-y-3">
            {content.map((item) => (
              <div key={item.id} className="glow-card p-4 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  item.downloaded ? "bg-health-green/20" : "bg-muted"
                }`}>
                  {item.downloaded ? (
                    <Check className="w-5 h-5 text-health-green" />
                  ) : (
                    <WifiOff className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.size}</p>
                </div>
                {item.downloaded ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                    className="text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    variant="glow"
                    size="sm"
                    onClick={() => handleDownload(item.id)}
                    disabled={downloading === item.id}
                  >
                    {downloading === item.id ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Download className="w-4 h-4" />
                    )}
                  </Button>
                )}
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full mt-6">
            Download All ({content.filter(c => !c.downloaded).length} items)
          </Button>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default OfflineAccess;
