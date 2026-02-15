import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
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
import Payment from "./pages/Payment";
import SymptomChecker from "./pages/SymptomChecker";
import CommunityEvents from "./pages/CommunityEvents";
import PatientRecords from "./pages/PatientRecords";
import HealthAnalytics from "./pages/HealthAnalytics";
import FinancialAid from "./pages/FinancialAid";
import Privacy from "./pages/Privacy";
import LanguageSettings from "./pages/LanguageSettings";
import OfflineAccess from "./pages/OfflineAccess";
import FirstAid from "./pages/FirstAid";
import Pharmacy from "./pages/Pharmacy";
import MentalHealth from "./pages/MentalHealth";
import Vaccination from "./pages/Vaccination";
import DietPlanner from "./pages/DietPlanner";
import PregnancyTracker from "./pages/PregnancyTracker";
import BloodDonation from "./pages/BloodDonation";
import BMICalculator from "./pages/BMICalculator";
import WaterTracker from "./pages/WaterTracker";
import SleepTracker from "./pages/SleepTracker";
import HealthInsurance from "./pages/HealthInsurance";
import HealthNews from "./pages/HealthNews";
import LabResults from "./pages/LabResults";
import FamilyHealth from "./pages/FamilyHealth";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
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
            <Route path="/payment" element={<Payment />} />
            <Route path="/symptom-checker" element={<SymptomChecker />} />
            <Route path="/community-events" element={<CommunityEvents />} />
            <Route path="/patient-records" element={<PatientRecords />} />
            <Route path="/analytics" element={<HealthAnalytics />} />
            <Route path="/financial-aid" element={<FinancialAid />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/language-settings" element={<LanguageSettings />} />
            <Route path="/offline" element={<OfflineAccess />} />
            <Route path="/first-aid" element={<FirstAid />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/mental-health" element={<MentalHealth />} />
            <Route path="/vaccination" element={<Vaccination />} />
            <Route path="/diet-planner" element={<DietPlanner />} />
            <Route path="/pregnancy-tracker" element={<PregnancyTracker />} />
            <Route path="/blood-donation" element={<BloodDonation />} />
            <Route path="/bmi-calculator" element={<BMICalculator />} />
            <Route path="/water-tracker" element={<WaterTracker />} />
            <Route path="/sleep-tracker" element={<SleepTracker />} />
            <Route path="/health-insurance" element={<HealthInsurance />} />
            <Route path="/health-news" element={<HealthNews />} />
            <Route path="/lab-results" element={<LabResults />} />
            <Route path="/family-health" element={<FamilyHealth />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/about" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
