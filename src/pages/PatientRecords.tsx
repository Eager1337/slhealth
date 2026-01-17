import { motion } from "framer-motion";
import { FileText, Calendar, Pill, Activity, Download, Plus, User } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const medicalHistory = [
  { id: 1, date: "Jan 10, 2026", type: "Consultation", doctor: "Dr. Mohamed Kamara", diagnosis: "Malaria", status: "Resolved" },
  { id: 2, date: "Dec 15, 2025", type: "Lab Test", doctor: "Lab Services", diagnosis: "Blood Test - Normal", status: "Completed" },
  { id: 3, date: "Nov 20, 2025", type: "Vaccination", doctor: "Dr. Fatmata Sesay", diagnosis: "Typhoid Vaccine", status: "Completed" },
  { id: 4, date: "Oct 5, 2025", type: "Consultation", doctor: "Dr. Ibrahim Conteh", diagnosis: "Hypertension Check", status: "Ongoing" },
];

const medications = [
  { name: "Artemether-Lumefantrine", dosage: "80/480mg", frequency: "Twice daily", duration: "3 days", status: "Completed" },
  { name: "Paracetamol", dosage: "500mg", frequency: "As needed", duration: "Ongoing", status: "Active" },
  { name: "Vitamin C", dosage: "1000mg", frequency: "Once daily", duration: "30 days", status: "Active" },
];

const vitalSigns = [
  { label: "Blood Pressure", value: "120/80", unit: "mmHg", status: "normal" },
  { label: "Heart Rate", value: "72", unit: "bpm", status: "normal" },
  { label: "Temperature", value: "36.5", unit: "°C", status: "normal" },
  { label: "Weight", value: "68", unit: "kg", status: "normal" },
];

const PatientRecords = () => {
  const [activeTab, setActiveTab] = useState<"history" | "medications" | "vitals">("history");

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-health-gold to-secondary flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Patient Records</h1>
              <p className="text-sm text-muted-foreground">Your medical history</p>
            </div>
          </div>

          {/* Patient Info Card */}
          <div className="glow-card p-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground">Patient Profile</h3>
                <p className="text-sm text-muted-foreground">ID: SHC-2026-001234</p>
                <p className="text-xs text-primary mt-1">Blood Type: O+</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-1" />
                Export
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {[
              { id: "history", label: "History", icon: Calendar },
              { id: "medications", label: "Medications", icon: Pill },
              { id: "vitals", label: "Vitals", icon: Activity },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* History Tab */}
          {activeTab === "history" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {medicalHistory.map((record) => (
                <div key={record.id} className="glow-card p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                        {record.type}
                      </span>
                      <h3 className="font-semibold text-foreground mt-2">{record.diagnosis}</h3>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      record.status === "Resolved" ? "bg-health-green/20 text-health-green" :
                      record.status === "Ongoing" ? "bg-secondary/20 text-secondary" :
                      "bg-primary/20 text-primary"
                    }`}>
                      {record.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{record.doctor}</p>
                  <p className="text-xs text-muted-foreground mt-1">{record.date}</p>
                </div>
              ))}
            </motion.div>
          )}

          {/* Medications Tab */}
          {activeTab === "medications" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {medications.map((med, index) => (
                <div key={index} className="glow-card p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">{med.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      med.status === "Active" ? "bg-health-green/20 text-health-green" : "bg-muted text-muted-foreground"
                    }`}>
                      {med.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Dosage</p>
                      <p className="text-foreground">{med.dosage}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Frequency</p>
                      <p className="text-foreground">{med.frequency}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Duration</p>
                      <p className="text-foreground">{med.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Medication
              </Button>
            </motion.div>
          )}

          {/* Vitals Tab */}
          {activeTab === "vitals" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 gap-3"
            >
              {vitalSigns.map((vital, index) => (
                <div key={index} className="glow-card p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">{vital.label}</p>
                  <p className="text-2xl font-bold text-primary">{vital.value}</p>
                  <p className="text-xs text-muted-foreground">{vital.unit}</p>
                  <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-health-green/20 text-health-green">
                    Normal
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default PatientRecords;
