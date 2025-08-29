import ThreeScene from '@/components/ThreeScene';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';
import SupabaseSection from '@/components/SupabaseSection';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

const Index = () => {
  const [instruments, setInstruments] = useState([]);
  useEffect(() => {
    getInstruments();
  }, []);
  async function getInstruments() {
    const { data } = await supabase.from("profiles").select();
    setInstruments(data);
  }

  return (
    <div className="min-h-screen bg-background relative">
      <ThreeScene />
      <HeroSection />
      <TechStack />
      <SupabaseSection />
    </div>
  );
};

export default Index;
