import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    color: 'hover:text-gray-300'
  },
  {
    name: 'LinkedIn', 
    icon: Linkedin,
    href: 'https://linkedin.com',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:alex@example.com',
    color: 'hover:text-red-400'
  }
];

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/30 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-3 rounded-lg glass-effect border border-primary/20 text-muted-foreground transition-all duration-300 ${link.color} hover:border-primary/40 hover:shadow-glow`}
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Alex Johnson
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer & Creative Technologist
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>© 2024 Alex Johnson. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of coffee.</span>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 rounded-lg glass-effect border border-primary/20 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:shadow-glow group"
          >
            <span className="group-hover:-translate-y-1 transition-transform duration-300 inline-block">
              Back to Top ↑
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}