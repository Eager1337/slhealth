import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, AlertTriangle, CheckCircle, Pill } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";

const educationContent: Record<string, {
  title: string;
  krioTitle: string;
  description: string;
  krioDescription: string;
  symptoms: string[];
  krioSymptoms: string[];
  prevention: string[];
  krioPrevention: string[];
  treatment: string[];
  krioTreatment: string[];
}> = {
  malaria: {
    title: "Malaria Prevention & Treatment",
    krioTitle: "Aw Fɔ Privent En Trit Malaria",
    description: "Malaria is a serious disease caused by mosquito bites. It's one of the most common illnesses in Sierra Leone.",
    krioDescription: "Malaria na wan sik we mɔskito de bit yu. I komɔn bad bad na Salone.",
    symptoms: ["High fever and chills", "Headache and body pain", "Nausea and vomiting", "Weakness and fatigue"],
    krioSymptoms: ["Bɔdi at en kol", "Edek en bɔdi pen", "Vɔmit en bɛlɛ tɔn", "Wik en tayad"],
    prevention: ["Sleep under insecticide-treated nets", "Use mosquito repellent", "Remove stagnant water around your home", "Wear long sleeves in the evening"],
    krioPrevention: ["Slip ɔnda nɛt we dɛn put mɛdisin", "Yuz ting fɔ drɛb mɔskito", "Trowɛ wata we set na os", "Wɛr lɔng sliv na ivin"],
    treatment: ["See a doctor immediately", "Take prescribed antimalarial drugs", "Rest and drink plenty of fluids", "Complete your medication course"],
    krioTreatment: ["Go mek dɔkta luk yu naw naw", "Tek di mɛdisin we dɔkta gi yu", "Rɛs en drink plɛnti wata", "Finis fɔ tek ɔl di mɛdisin"],
  },
  typhoid: {
    title: "Typhoid Fever",
    krioTitle: "Tayfɔyd Fiva",
    description: "Typhoid is caused by contaminated food and water. It's preventable with proper hygiene.",
    krioDescription: "Tayfɔyd de kɔm frɔm dɔti it en wata. Yu kin privent am if yu kip klin.",
    symptoms: ["Prolonged high fever", "Stomach pain", "Loss of appetite", "Rose-colored spots on chest"],
    krioSymptoms: ["Bɔdi at we nɔ de stɔp", "Bɛlɛ pen", "Nɔ want it", "Rɛd spɔt dɛm na chɛst"],
    prevention: ["Drink clean, boiled water", "Wash hands before eating", "Eat well-cooked food", "Avoid street food"],
    krioPrevention: ["Drink wata we bɔyl", "Was an bifo yu it", "It fud we kuk gud", "Nɔ it fud na strit"],
    treatment: ["Get tested at a clinic", "Take antibiotics as prescribed", "Stay hydrated", "Rest at home"],
    krioTreatment: ["Go tɛst na ɔspital", "Tek antibiɔtik we dɔkta gi yu", "Drink plɛnti wata", "Rɛs na os"],
  },
  cholera: {
    title: "Cholera Prevention",
    krioTitle: "Aw Fɔ Privent Kɔlera",
    description: "Cholera spreads through contaminated water. It can be deadly but is easily preventable.",
    krioDescription: "Kɔlera de sprid tru dɔti wata. I kin kil pɔsin bɔt yu kin privent am izi.",
    symptoms: ["Severe watery diarrhea", "Vomiting", "Rapid dehydration", "Muscle cramps"],
    krioSymptoms: ["Bad bad wata rɔn bɛlɛ", "Vɔmit", "Bɔdi dray kwik kwik", "Bɔdi kach"],
    prevention: ["Always drink treated water", "Wash hands with soap", "Use proper toilets", "Keep food covered"],
    krioPrevention: ["Drink wata we trit", "Was an wit sop", "Yuz gud tɔylɛt", "Kɔba fud"],
    treatment: ["Seek immediate medical help", "Oral rehydration solution", "IV fluids if severe", "Antibiotics as prescribed"],
    krioTreatment: ["Go ɔspital kwik kwik", "Drink ORS", "IV drip if i bad", "Tek antibiɔtik"],
  },
};

const HealthEducationDetail = () => {
  const { topic } = useParams<{ topic: string }>();
  const content = educationContent[topic || ""] || educationContent.malaria;

  return (
    <div className="min-h-screen pb-24">
      <Header />
      
      <main className="container px-4 pt-20 page-transition">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/health-education" className="inline-flex items-center gap-2 text-primary mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Topics
          </Link>

          <div className="glow-card p-6 mb-6">
            <h1 className="text-xl font-bold text-foreground mb-1">{content.title}</h1>
            <p className="text-sm text-primary italic mb-4">{content.krioTitle}</p>
            
            <div className="space-y-2">
              <p className="text-foreground">{content.description}</p>
              <p className="text-muted-foreground italic">{content.krioDescription}</p>
            </div>
          </div>

          {/* Symptoms */}
          <section className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <h2 className="text-lg font-semibold">Symptoms / Sain dɛm</h2>
            </div>
            <div className="glow-card p-4 space-y-3">
              {content.symptoms.map((symptom, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                  <div>
                    <p className="text-foreground">{symptom}</p>
                    <p className="text-sm text-muted-foreground italic">{content.krioSymptoms[i]}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Prevention */}
          <section className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Prevention / Aw Fɔ Privent</h2>
            </div>
            <div className="glow-card p-4 space-y-3">
              {content.prevention.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="text-foreground">{item}</p>
                    <p className="text-sm text-muted-foreground italic">{content.krioPrevention[i]}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Treatment */}
          <section className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Pill className="w-5 h-5 text-secondary" />
              <h2 className="text-lg font-semibold">Treatment / Tritment</h2>
            </div>
            <div className="glow-card p-4 space-y-3">
              {content.treatment.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                  <div>
                    <p className="text-foreground">{item}</p>
                    <p className="text-sm text-muted-foreground italic">{content.krioTreatment[i]}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Link to="/emergency">
            <Button variant="emergency" size="lg" className="w-full">
              <Heart className="w-5 h-5 mr-2" />
              Need Emergency Help?
            </Button>
          </Link>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default HealthEducationDetail;
