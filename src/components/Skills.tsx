import { motion } from 'framer-motion';
import { Card } from './ui/card';

const skills = [
  {
    name: "React & Next.js",
    description: "Building modern, scalable web applications",
    icon: "⚛️"
  },
  {
    name: "Node.js & Express",
    description: "Server-side development and APIs",
    icon: "🚀"
  },
  {
    name: "Three.js & WebGL",
    description: "3D graphics and immersive experiences",
    icon: "🎨"
  },
  {
    name: "TypeScript",
    description: "Type-safe development at scale",
    icon: "📝"
  },
  {
    name: "Database Design",
    description: "PostgreSQL, MongoDB, and Redis",
    icon: "🗃️"
  },
  {
    name: "Cloud & DevOps",
    description: "AWS, Docker, and CI/CD pipelines",
    icon: "☁️"
  }
];

export default function Skills() {
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life with precision and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}