import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { toast } from "sonner";

const languages = [
  { id: "en", name: "English", native: "English", flag: "🇬🇧" },
  { id: "krio", name: "Krio", native: "Krio", flag: "🇸🇱" },
  { id: "mende", name: "Mende", native: "Mɛnde", flag: "🇸🇱" },
  { id: "temne", name: "Temne", native: "Temne", flag: "🇸🇱" },
  { id: "limba", name: "Limba", native: "Hulimba", flag: "🇸🇱" },
  { id: "fr", name: "French", native: "Français", flag: "🇫🇷" },
];

const LanguageSettings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (langId: string) => {
    setSelectedLanguage(langId);
    const lang = languages.find(l => l.id === langId);
    toast.success(`Language changed to ${lang?.name}`);
  };

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Language</h1>
              <p className="text-sm text-muted-foreground">Choose your preferred language</p>
            </div>
          </div>

          <div className="space-y-3">
            {languages.map((lang, index) => (
              <motion.button
                key={lang.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleLanguageChange(lang.id)}
                className={`w-full glow-card p-4 flex items-center gap-4 transition-all ${
                  selectedLanguage === lang.id
                    ? "border-primary ring-2 ring-primary/30"
                    : ""
                }`}
              >
                <span className="text-3xl">{lang.flag}</span>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-foreground">{lang.name}</p>
                  <p className="text-sm text-muted-foreground">{lang.native}</p>
                </div>
                {selectedLanguage === lang.id && (
                  <Check className="w-5 h-5 text-primary" />
                )}
              </motion.button>
            ))}
          </div>

          <div className="mt-8 glow-card p-4">
            <h3 className="font-semibold mb-2">About Languages</h3>
            <p className="text-sm text-muted-foreground">
              Salone Health Connect supports multiple languages spoken in Sierra Leone.
              Content availability may vary by language. English and Krio have full support.
            </p>
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default LanguageSettings;
