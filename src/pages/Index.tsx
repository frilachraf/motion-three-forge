import ThreeScene from '@/components/ThreeScene';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';
import SupabaseSection from '@/components/SupabaseSection';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <ThreeScene />
      <HeroSection />
      <TechStack />
      <SupabaseSection />
    </div>
  );
};

export default Index;
