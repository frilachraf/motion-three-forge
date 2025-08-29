import { motion } from 'framer-motion';
import { Card } from './ui/card';

const technologies = [
  {
    name: "React",
    description: "Modern UI library with hooks and context",
    icon: "⚛️"
  },
  {
    name: "Three.js",
    description: "3D graphics and animations in the browser",
    icon: "🎨"
  },
  {
    name: "Framer Motion",
    description: "Smooth animations and interactions",
    icon: "🎬"
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: "🎯"
  },
  {
    name: "TypeScript",
    description: "Type-safe development experience",
    icon: "📝"
  },
  {
    name: "Supabase Ready",
    description: "Backend as a service integration",
    icon: "🚀"
  }
];

export default function TechStack() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Modern</span> Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with the latest and greatest technologies for optimal performance and developer experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {tech.name}
                </h3>
                <p className="text-muted-foreground">
                  {tech.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}