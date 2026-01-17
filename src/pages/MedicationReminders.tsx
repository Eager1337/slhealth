import { useState } from "react";
import { motion } from "framer-motion";
import { Pill, Plus, Clock, Bell, Trash2, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface Reminder {
  id: number;
  medication: string;
  dosage: string;
  time: string;
  frequency: string;
  active: boolean;
}

const MedicationReminders = () => {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, medication: "Malaria Tablets", dosage: "2 tablets", time: "08:00", frequency: "Daily", active: true },
    { id: 2, medication: "Blood Pressure Meds", dosage: "1 tablet", time: "09:00", frequency: "Daily", active: true },
    { id: 3, medication: "Vitamins", dosage: "1 capsule", time: "14:00", frequency: "Daily", active: false },
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [newReminder, setNewReminder] = useState({
    medication: "",
    dosage: "",
    time: "",
    frequency: "Daily",
  });

  const addReminder = () => {
    if (newReminder.medication && newReminder.time) {
      setReminders(prev => [...prev, {
        id: Date.now(),
        ...newReminder,
        active: true,
      }]);
      setNewReminder({ medication: "", dosage: "", time: "", frequency: "Daily" });
      setShowForm(false);
      toast.success("Reminder added successfully!");
    }
  };

  const toggleReminder = (id: number) => {
    setReminders(prev => 
      prev.map(r => r.id === id ? { ...r, active: !r.active } : r)
    );
  };

  const deleteReminder = (id: number) => {
    setReminders(prev => prev.filter(r => r.id !== id));
    toast.success("Reminder deleted");
  };

  return (
    <div className="min-h-screen pb-24">
      <Header />
      
      <main className="container px-4 pt-20 page-transition">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-health-gold flex items-center justify-center">
                <Pill className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text-gold">Medication</h1>
                <p className="text-sm text-muted-foreground">Reminders</p>
              </div>
            </div>
            <Button
              variant="glow"
              size="icon"
              onClick={() => setShowForm(!showForm)}
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>

          {/* Add Reminder Form */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="glow-card p-4 mb-6"
            >
              <h3 className="font-semibold mb-4 text-foreground">Add New Reminder</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="medication">Medication Name</Label>
                  <Input
                    id="medication"
                    placeholder="e.g. Paracetamol"
                    value={newReminder.medication}
                    onChange={(e) => setNewReminder(prev => ({ ...prev, medication: e.target.value }))}
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="dosage">Dosage</Label>
                  <Input
                    id="dosage"
                    placeholder="e.g. 2 tablets"
                    value={newReminder.dosage}
                    onChange={(e) => setNewReminder(prev => ({ ...prev, dosage: e.target.value }))}
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={newReminder.time}
                    onChange={(e) => setNewReminder(prev => ({ ...prev, time: e.target.value }))}
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <Label>Frequency</Label>
                  <div className="flex gap-2 mt-2">
                    {["Daily", "Weekly", "Monthly"].map((freq) => (
                      <Button
                        key={freq}
                        variant={newReminder.frequency === freq ? "default" : "outline"}
                        size="sm"
                        onClick={() => setNewReminder(prev => ({ ...prev, frequency: freq }))}
                      >
                        {freq}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button variant="glow" className="w-full" onClick={addReminder}>
                  <Bell className="w-4 h-4 mr-2" />
                  Set Reminder
                </Button>
              </div>
            </motion.div>
          )}

          {/* Reminders List */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Your Reminders</h2>
            <div className="space-y-3">
              {reminders.map((reminder, index) => (
                <motion.div
                  key={reminder.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`glow-card p-4 ${!reminder.active ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <Button
                      variant={reminder.active ? "glow" : "outline"}
                      size="icon"
                      className="rounded-full"
                      onClick={() => toggleReminder(reminder.id)}
                    >
                      {reminder.active ? (
                        <Bell className="w-5 h-5" />
                      ) : (
                        <Check className="w-5 h-5" />
                      )}
                    </Button>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{reminder.medication}</h3>
                      <p className="text-sm text-muted-foreground">{reminder.dosage}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-primary flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {reminder.time}
                        </span>
                        <span className="text-xs text-muted-foreground">{reminder.frequency}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteReminder(reminder.id)}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Today's Schedule */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Today's Schedule</h2>
            <div className="glow-card p-4">
              <div className="space-y-4">
                {reminders.filter(r => r.active).map((reminder) => (
                  <div key={reminder.id} className="flex items-center gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="w-16 text-center">
                      <p className="text-lg font-bold text-primary">{reminder.time}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{reminder.medication}</p>
                      <p className="text-sm text-muted-foreground">{reminder.dosage}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Take
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default MedicationReminders;
