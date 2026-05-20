import { motion } from 'framer-motion';
import { Server, Database, Container, Terminal, GitBranch, LayoutTemplate } from 'lucide-react';

const technologies = [
  { name: 'NestJS', icon: Server },
  { name: 'Node.js', icon: Terminal },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Microservices', icon: Container },
  { name: 'CI/CD Pipelines', icon: GitBranch },
  { name: 'Clean Architecture', icon: LayoutTemplate },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-[120px] bg-brand-surface relative z-10 border-t border-brand-outline-variant/20">
      <div className="max-w-[1280px] mx-auto w-full px-6">
        <div className="text-center mb-16">
          <span className="text-label-caps text-brand-secondary mb-4 block">Core Competencies</span>
          <h2 className="text-headline-lg text-brand-primary">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white aspect-square flex flex-col items-center justify-center p-6 border border-brand-outline-variant/30 rounded-sm hover:border-brand-secondary/50 hover:shadow-ambient transition-all duration-300 group"
              >
                <div className="text-brand-outline mb-4 group-hover:text-brand-secondary transition-colors duration-300 transform group-hover:scale-110">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <span className="text-label-caps text-brand-on-surface-variant text-center group-hover:text-brand-primary transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
