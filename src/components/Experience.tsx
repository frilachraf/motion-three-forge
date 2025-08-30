import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Led a team of 5 developers in building scalable web applications. Architected and implemented microservices infrastructure that improved system performance by 40%. Mentored junior developers and established coding standards.",
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    current: true
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovations Inc",
    location: "Remote",
    period: "2020 - 2022",
    description: "Developed responsive web applications using modern React ecosystem. Collaborated with designers to implement pixel-perfect UIs. Optimized application performance achieving 95+ Lighthouse scores.",
    technologies: ["React", "TypeScript", "GraphQL", "Styled Components"],
    current: false
  },
  {
    title: "Junior Web Developer",
    company: "StartupXYZ",
    location: "New York, NY",
    period: "2019 - 2020",
    description: "Built and maintained company website and internal tools. Implemented responsive designs and ensured cross-browser compatibility. Participated in agile development processes.",
    technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
    current: false
  }
];

export default function Experience() {
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
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional career, building impactful solutions and growing as a developer.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-primary opacity-30" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background" />

              <Card className="ml-16 p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span className="font-semibold text-primary">{exp.company}</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {exp.current && (
                    <Badge className="bg-gradient-primary text-primary-foreground border-0 mt-2 lg:mt-0">
                      Current
                    </Badge>
                  )}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}