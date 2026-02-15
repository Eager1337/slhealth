import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Heart, LogOut, Camera, Save } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({ full_name: "", phone: "", location: "", blood_type: "", emergency_contact: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { navigate("/signin"); return; }
    const fetchProfile = async () => {
      const { data } = await supabase.from("profiles").select("*").eq("user_id", user.id).single();
      if (data) setProfile({ full_name: data.full_name || "", phone: data.phone || "", location: data.location || "", blood_type: data.blood_type || "", emergency_contact: data.emergency_contact || "" });
      setLoading(false);
    };
    fetchProfile();
  }, [user, navigate]);

  const handleSave = async () => {
    if (!user) return;
    const { error } = await supabase.from("profiles").update(profile).eq("user_id", user.id);
    if (error) toast.error("Failed to update profile");
    else toast.success("Profile updated!");
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
    toast.success("Signed out successfully");
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="container px-4 pt-20 page-transition">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">{profile.full_name || "Your Profile"}</h1>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="glow-card p-4 space-y-4">
              <div><Label>Full Name</Label><Input value={profile.full_name} onChange={(e) => setProfile(p => ({ ...p, full_name: e.target.value }))} className="bg-muted border-border" /></div>
              <div><Label>Phone</Label><Input value={profile.phone} onChange={(e) => setProfile(p => ({ ...p, phone: e.target.value }))} className="bg-muted border-border" /></div>
              <div><Label>Location</Label><Input value={profile.location} onChange={(e) => setProfile(p => ({ ...p, location: e.target.value }))} className="bg-muted border-border" /></div>
              <div><Label>Blood Type</Label><Input value={profile.blood_type} onChange={(e) => setProfile(p => ({ ...p, blood_type: e.target.value }))} placeholder="e.g. O+" className="bg-muted border-border" /></div>
              <div><Label>Emergency Contact</Label><Input value={profile.emergency_contact} onChange={(e) => setProfile(p => ({ ...p, emergency_contact: e.target.value }))} placeholder="+232..." className="bg-muted border-border" /></div>
              <Button variant="glow" className="w-full" onClick={handleSave}><Save className="w-4 h-4 mr-2" />Save Profile</Button>
            </div>

            <Button variant="destructive" className="w-full" onClick={handleSignOut}><LogOut className="w-4 h-4 mr-2" />Sign Out</Button>
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Profile;
