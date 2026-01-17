import { motion } from "framer-motion";
import { Heart, ChevronRight, Globe } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const healthTipsEnglish = [
  {
    id: 1,
    title: "Drink Plenty of Water",
    content: "Drinking at least 8 glasses of water daily helps maintain body functions, improves digestion, and keeps your skin healthy.",
    category: "Hydration",
  },
  {
    id: 2,
    title: "Eat Balanced Meals",
    content: "Include proteins, carbohydrates, fruits, and vegetables in every meal for optimal nutrition.",
    category: "Nutrition",
  },
  {
    id: 3,
    title: "Exercise Regularly",
    content: "At least 30 minutes of physical activity daily helps prevent diseases and maintains good mental health.",
    category: "Fitness",
  },
  {
    id: 4,
    title: "Get Enough Sleep",
    content: "Adults need 7-9 hours of sleep per night for proper body recovery and mental clarity.",
    category: "Rest",
  },
  {
    id: 5,
    title: "Wash Hands Frequently",
    content: "Regular handwashing with soap prevents the spread of diseases like cholera and typhoid.",
    category: "Hygiene",
  },
  {
    id: 6,
    title: "Use Mosquito Nets",
    content: "Sleep under insecticide-treated nets to prevent malaria, especially for children and pregnant women.",
    category: "Prevention",
  },
];

const healthTipsKrio = [
  {
    id: 1,
    title: "Drink Plɛnti Wata",
    content: "Drink at lis 8 glas wata ɛvri day. Dis go ɛp yu bɔdi wok gud, ɛp yu digest fud, en kip yu skin fresh.",
    category: "Wata",
  },
  {
    id: 2,
    title: "It Gud Fud",
    content: "Put protin, karbohaydret, frut en vejitabl na ɛvri fud we yu it so dat yu go gɛt ɔl di nyutrishn we yu bɔdi nid.",
    category: "Fud",
  },
  {
    id: 3,
    title: "Ɛkzasayz Ɛvri Day",
    content: "Ɛkzasayz fɔ at lis 30 minit ɛvri day go ɛp yu privent sik en kip yu maind ɔlrait.",
    category: "Bɔdi Wok",
  },
  {
    id: 4,
    title: "Slip Gud",
    content: "Big pɔsin nid fɔ slip 7-9 awas ɛvri nait fɔ mek di bɔdi rɛst en di maind klia.",
    category: "Rɛst",
  },
  {
    id: 5,
    title: "Was Yu An Dɛn",
    content: "Was yu an dɛn wit sop ɔltɛm. Dis go stɔp sik layk kɔlera en tayfɔyd fɔ sprid.",
    category: "Klin",
  },
  {
    id: 6,
    title: "Yuz Mɔskito Nɛt",
    content: "Slip ɔnda nɛt we dɛn put mɛdisin fɔ privent malaria, ɛspɛshali fɔ pikin dɛn en woman dɛn we gɛt bɛlɛ.",
    category: "Privent",
  },
];

const HealthTips = () => {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      
      <main className="container px-4 pt-20 page-transition">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-health-green flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Health Tips</h1>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Globe className="w-3 h-3" />
                Available in English & Krio
              </p>
            </div>
          </div>

          <Tabs defaultValue="english" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted">
              <TabsTrigger value="english">🇬🇧 English</TabsTrigger>
              <TabsTrigger value="krio">🇸🇱 Krio</TabsTrigger>
            </TabsList>

            <TabsContent value="english" className="space-y-4">
              {healthTipsEnglish.map((tip, index) => (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/health-tips/${tip.id}`}>
                    <div className="glow-card p-4 group">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {tip.category}
                          </span>
                          <h3 className="font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
                            {tip.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {tip.content}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="krio" className="space-y-4">
              {healthTipsKrio.map((tip, index) => (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/health-tips/${tip.id}`}>
                    <div className="glow-card p-4 group">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                            {tip.category}
                          </span>
                          <h3 className="font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
                            {tip.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {tip.content}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default HealthTips;
