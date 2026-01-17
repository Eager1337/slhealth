import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, AlertTriangle, Check, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Link } from "react-router-dom";

const symptoms = [
  { id: "fever", label: "Fever / High Temperature", icon: "🌡️" },
  { id: "headache", label: "Headache", icon: "🤕" },
  { id: "cough", label: "Cough", icon: "😷" },
  { id: "fatigue", label: "Fatigue / Tiredness", icon: "😴" },
  { id: "body_ache", label: "Body Aches", icon: "💪" },
  { id: "nausea", label: "Nausea / Vomiting", icon: "🤢" },
  { id: "diarrhea", label: "Diarrhea", icon: "🚽" },
  { id: "sore_throat", label: "Sore Throat", icon: "🗣️" },
  { id: "rash", label: "Skin Rash", icon: "🔴" },
  { id: "breathing", label: "Difficulty Breathing", icon: "😮‍💨" },
];

const diagnoses = {
  malaria: {
    name: "Possible Malaria",
    severity: "moderate",
    description: "Your symptoms may indicate malaria. This is common in Sierra Leone.",
    recommendations: [
      "Get a malaria test immediately",
      "Stay hydrated with clean water",
      "Rest and avoid strenuous activity",
      "Seek medical attention within 24 hours",
    ],
  },
  typhoid: {
    name: "Possible Typhoid",
    severity: "high",
    description: "Your symptoms suggest possible typhoid fever. Seek immediate medical care.",
    recommendations: [
      "Visit a doctor immediately",
      "Get blood tests done",
      "Drink only clean, boiled water",
      "Avoid contaminated food",
    ],
  },
  flu: {
    name: "Common Cold / Flu",
    severity: "low",
    description: "Your symptoms appear to be a common cold or flu.",
    recommendations: [
      "Rest well at home",
      "Drink plenty of fluids",
      "Take paracetamol for fever",
      "Monitor symptoms for 3-5 days",
    ],
  },
};

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<keyof typeof diagnoses | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const analyzeSymptoms = async () => {
    if (selectedSymptoms.length < 2) return;
    
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simple diagnosis logic
    if (selectedSymptoms.includes("fever") && selectedSymptoms.includes("body_ache")) {
      setResult("malaria");
    } else if (selectedSymptoms.includes("fever") && selectedSymptoms.includes("diarrhea")) {
      setResult("typhoid");
    } else {
      setResult("flu");
    }
    
    setIsAnalyzing(false);
  };

  const resetChecker = () => {
    setSelectedSymptoms([]);
    setResult(null);
  };

  if (result) {
    const diagnosis = diagnoses[result];
    return (
      <div className="min-h-screen pb-24">
        <Header />
        <main className="container px-4 pt-20 page-transition">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className={`glow-card p-6 mb-6 ${
              diagnosis.severity === "high" ? "border-destructive" :
              diagnosis.severity === "moderate" ? "border-secondary" : "border-health-green"
            }`}>
              <div className="flex items-center gap-3 mb-4">
                {diagnosis.severity === "high" ? (
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                ) : (
                  <Brain className="w-8 h-8 text-primary" />
                )}
                <div>
                  <h2 className="text-xl font-bold text-foreground">{diagnosis.name}</h2>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    diagnosis.severity === "high" ? "bg-destructive/20 text-destructive" :
                    diagnosis.severity === "moderate" ? "bg-secondary/20 text-secondary" : "bg-health-green/20 text-health-green"
                  }`}>
                    {diagnosis.severity.toUpperCase()} PRIORITY
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{diagnosis.description}</p>
              
              <h3 className="font-semibold mb-3">Recommendations:</h3>
              <ul className="space-y-2">
                {diagnosis.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <Link to="/teleconsultation">
                <Button variant="glow" className="w-full">Consult Doctor</Button>
              </Link>
              <Link to="/emergency">
                <Button variant="emergency" className="w-full">Emergency</Button>
              </Link>
            </div>

            <Button variant="outline" className="w-full" onClick={resetChecker}>
              Check Again
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              ⚠️ This is not a medical diagnosis. Always consult a healthcare professional.
            </p>
          </motion.div>
        </main>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">AI Symptom Checker</h1>
              <p className="text-sm text-muted-foreground">Select your symptoms</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {symptoms.map((symptom) => (
              <motion.button
                key={symptom.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleSymptom(symptom.id)}
                className={`glow-card p-4 text-left transition-all ${
                  selectedSymptoms.includes(symptom.id)
                    ? "border-primary ring-2 ring-primary/30"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{symptom.icon}</span>
                  <span className="text-sm font-medium text-foreground">{symptom.label}</span>
                </div>
                {selectedSymptoms.includes(symptom.id) && (
                  <Check className="w-4 h-4 text-primary absolute top-2 right-2" />
                )}
              </motion.button>
            ))}
          </div>

          <Button
            variant="glow"
            size="xl"
            className="w-full"
            onClick={analyzeSymptoms}
            disabled={selectedSymptoms.length < 2 || isAnalyzing}
          >
            {isAnalyzing ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Analyzing...
              </span>
            ) : (
              <>
                Analyze Symptoms
                <ChevronRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>

          {selectedSymptoms.length < 2 && (
            <p className="text-xs text-muted-foreground text-center mt-3">
              Select at least 2 symptoms to continue
            </p>
          )}
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default SymptomChecker;
