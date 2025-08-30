import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product management, user authentication, and real-time inventory tracking.",
    image: "🛍️",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "3D Portfolio Website",
    description: "An immersive 3D portfolio showcasing Three.js capabilities with smooth animations and interactive elements. Built with React Three Fiber and Framer Motion.",
    image: "🎨",
    technologies: ["Three.js", "React", "Framer Motion", "GLSL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Real-time Chat App",
    description: "A modern chat application with real-time messaging, file sharing, and video calls. Features include group chats, message encryption, and user presence indicators.",
    image: "💬",
    technologies: ["Socket.io", "React", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Task Management Dashboard",
    description: "A collaborative project management tool with drag-and-drop functionality, team collaboration features, and advanced analytics dashboard.",
    image: "📊",
    technologies: ["Next.js", "Prisma", "tRPC", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export default function Projects() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects I've worked on, showcasing different technologies and problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card className="p-8 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}