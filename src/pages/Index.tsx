import ThreeScene from '@/components/ThreeScene';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';
import SupabaseSection from '@/components/SupabaseSection';

const Index = () => {
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
