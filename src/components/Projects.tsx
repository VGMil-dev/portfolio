import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'ecosystem',
    title: 'Transactional Ecosystems',
    category: 'Backend Architecture',
    description: 'Constructed robust APIs using NestJS and PostgreSQL, implementing hexagonal architectures for strict separation of concerns.',
    placeholder: 'project-ecosystem.png'
  },
  {
    id: 'cicd',
    title: 'Fragments CI/CD',
    category: 'Infrastructure',
    description: 'Designed scalable microservices with automated deployment flows utilizing GitHub Actions and advanced Linux environments.',
    placeholder: 'project-cicd.png'
  }
];

export function Projects() {
  return (
    <section id="architecture" className="py-[120px] bg-brand-canvas relative z-10 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto w-full px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-label-caps text-brand-secondary mb-4 block transition-colors duration-300">Selected Works</span>
            <h2 className="text-headline-lg text-brand-primary transition-colors duration-300">Architectural Highlights</h2>
          </div>
          <p className="text-body-md text-brand-on-surface-variant max-w-md transition-colors duration-300">
            A showcase of structured business logic, database optimization, and high-availability infrastructure deployments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-brand-surface rounded-md overflow-hidden border border-brand-outline-variant/30 hover:border-brand-secondary/50 transition-all duration-500 hover:shadow-ambient"
            >
              <div className="aspect-[4/3] bg-brand-canvas relative overflow-hidden transition-colors duration-300">
                <img 
                  src={`/images/projects/${project.placeholder}`} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center backdrop-blur-sm">
                  <p className="text-brand-on-primary text-body-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="p-8 bg-brand-surface-container-lowest border-t border-brand-outline-variant/20 flex justify-between items-center group-hover:bg-brand-surface-bright transition-colors duration-300">
                <div>
                  <span className="text-label-caps text-brand-outline mb-2 block transition-colors duration-300">{project.category}</span>
                  <h3 className="text-headline-md text-brand-primary transition-colors duration-300">{project.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-brand-secondary/30 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-on-secondary transition-all duration-300 transform group-hover:scale-110">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
