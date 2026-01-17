import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import Teleconsultation from "./pages/Teleconsultation";
import Appointments from "./pages/Appointments";
import HealthEducation from "./pages/HealthEducation";
import HealthEducationDetail from "./pages/HealthEducationDetail";
import Notifications from "./pages/Notifications";
import Emergency from "./pages/Emergency";
import MobileClinics from "./pages/MobileClinics";
import MobileClinicMap from "./pages/MobileClinicMap";
import MedicationReminders from "./pages/MedicationReminders";
import HealthTips from "./pages/HealthTips";
import Doctors from "./pages/Doctors";
import More from "./pages/More";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/teleconsultation" element={<Teleconsultation />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/health-education" element={<HealthEducation />} />
          <Route path="/health-education/:topic" element={<HealthEducationDetail />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/mobile-clinics" element={<MobileClinics />} />
          <Route path="/mobile-clinics/map" element={<MobileClinicMap />} />
          <Route path="/mobile-clinics/:id" element={<MobileClinics />} />
          <Route path="/mobile-clinics/schedule" element={<Appointments />} />
          <Route path="/medication-reminders" element={<MedicationReminders />} />
          <Route path="/health-tips" element={<HealthTips />} />
          <Route path="/health-tips/:id" element={<HealthTips />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/more" element={<More />} />
          <Route path="/symptom-checker" element={<More />} />
          <Route path="/community-events" element={<More />} />
          <Route path="/patient-records" element={<More />} />
          <Route path="/privacy" element={<More />} />
          <Route path="/language-settings" element={<More />} />
          <Route path="/analytics" element={<More />} />
          <Route path="/financial-aid" element={<More />} />
          <Route path="/offline" element={<More />} />
          <Route path="/about" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
