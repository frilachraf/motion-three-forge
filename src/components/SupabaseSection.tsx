import { motion } from 'framer-motion';
import { HeroButton } from './ui/hero-button';
import { Database, Shield, Zap, Code } from 'lucide-react';
import { Card } from './ui/card';

const features = [
  {
    icon: Database,
    title: "Real-time Database",
    description: "PostgreSQL database with real-time subscriptions"
  },
  {
    icon: Shield,
    title: "Authentication",
    description: "Secure user authentication and authorization"
  },
  {
    icon: Zap,
    title: "Edge Functions",
    description: "Serverless functions deployed globally"
  },
  {
    icon: Code,
    title: "Auto APIs",
    description: "RESTful APIs generated automatically"
  }
];

export default function SupabaseSection() {
  return (
    <section className="py-32 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for <span className="gradient-text">Supabase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            This project is pre-configured to work with Supabase. Connect your backend 
            in seconds and unlock powerful features like authentication, real-time data, 
            and serverless functions.
          </p>
          
          <HeroButton variant="hero" size="xl" className="mb-8">
            Connect to Supabase
          </HeroButton>
          
          <p className="text-sm text-muted-foreground">
            Click the green Supabase button in the top right to get started
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}