import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Check, User } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { toast } from "sonner";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";

const doctors = [
  { id: 1, name: "Dr. Mohamed Kamara", specialty: "General Practitioner", image: doctor1 },
  { id: 2, name: "Dr. Fatmata Sesay", specialty: "Pediatrician", image: doctor2 },
  { id: 3, name: "Dr. Ibrahim Conteh", specialty: "Cardiologist", image: doctor3 },
  { id: 4, name: "Dr. Aminata Koroma", specialty: "Gynecologist", image: doctor4 },
];

const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

const generateDays = () => {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push({
      date: date.getDate(),
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      full: date.toISOString().split('T')[0],
    });
  }
  return days;
};

const Appointments = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const days = generateDays();

  const handleBooking = () => {
    if (selectedDoctor && selectedDate && selectedTime) {
      const doctor = doctors.find(d => d.id === selectedDoctor);
      toast.success(`Appointment booked with ${doctor?.name} on ${selectedDate} at ${selectedTime}`);
      setSelectedDoctor(null);
      setSelectedDate(null);
      setSelectedTime(null);
    } else {
      toast.error("Please select doctor, date, and time");
    }
  };

  return (
    <div className="min-h-screen pb-24">
      <Header />
      
      <main className="container px-4 pt-20 page-transition">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl font-bold mb-2">
            <span className="gradient-text">Book Appointment</span>
          </h1>
          <p className="text-muted-foreground mb-6">
            Schedule your visit with our specialists
          </p>

          {/* Select Doctor */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Select Doctor
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {doctors.map((doctor) => (
                <motion.div
                  key={doctor.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedDoctor(doctor.id)}
                  className={`glow-card p-4 cursor-pointer transition-all ${
                    selectedDoctor === doctor.id 
                      ? 'border-primary ring-2 ring-primary/30' 
                      : ''
                  }`}
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-12 h-12 rounded-full object-cover mx-auto mb-2"
                  />
                  <h3 className="text-sm font-semibold text-center text-foreground">{doctor.name}</h3>
                  <p className="text-xs text-muted-foreground text-center">{doctor.specialty}</p>
                  {selectedDoctor === doctor.id && (
                    <div className="flex justify-center mt-2">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Select Date */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Select Date
            </h2>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {days.map((day) => (
                <motion.button
                  key={day.full}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDate(day.full)}
                  className={`flex-shrink-0 w-16 py-3 rounded-xl text-center transition-all ${
                    selectedDate === day.full
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                      : 'bg-card border border-border hover:border-primary/50'
                  }`}
                >
                  <p className="text-xs opacity-70">{day.day}</p>
                  <p className="text-lg font-bold">{day.date}</p>
                </motion.button>
              ))}
            </div>
          </section>

          {/* Select Time */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Select Time
            </h2>
            <div className="grid grid-cols-4 gap-3">
              {timeSlots.map((time) => (
                <motion.button
                  key={time}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTime(time)}
                  className={`py-3 px-2 rounded-xl text-sm font-medium transition-all ${
                    selectedTime === time
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                      : 'bg-card border border-border hover:border-primary/50'
                  }`}
                >
                  {time}
                </motion.button>
              ))}
            </div>
          </section>

          {/* Book Button */}
          <Button
            variant="glow"
            size="xl"
            className="w-full"
            onClick={handleBooking}
            disabled={!selectedDoctor || !selectedDate || !selectedTime}
          >
            Confirm Booking
          </Button>

          {/* My Appointments */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
            <div className="glow-card p-4">
              <p className="text-muted-foreground text-center py-8">
                No upcoming appointments. Book one now!
              </p>
            </div>
          </section>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Appointments;
