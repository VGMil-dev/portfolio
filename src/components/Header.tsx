import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

export function Header() {
  const { t } = useTranslation();

  const navItems = [
    { key: 'expertise', id: 'expertise' },
    { key: 'architecture', id: 'architecture' },
    { key: 'techStack', id: 'tech-stack' },
    { key: 'contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-surface/90 backdrop-blur-md border-b border-brand-secondary/30 h-20 flex items-center transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto w-full px-6 flex justify-between items-center">
        
        {/* Logo / Brand */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-10 h-10 rounded flex items-center justify-center relative overflow-hidden bg-brand-surface-container-lowest border border-brand-outline-variant/30 transition-colors duration-300">
            <img src="/icons/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-brand-primary font-bold text-sm tracking-widest uppercase transition-colors duration-300">Milton Velásquez</span>
            <span className="text-brand-outline font-medium text-xs tracking-widest uppercase transition-colors duration-300">Software Architect</span>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.nav 
          className="hidden md:flex gap-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {navItems.map((item) => (
            <a 
              key={item.key}
              href={`#${item.id}`}
              className="text-label-caps text-brand-on-surface-variant hover:text-brand-primary transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-brand-secondary hover:after:w-full after:transition-all after:duration-300"
            >
              {t(`header.nav.${item.key}`)}
            </a>
          ))}
        </motion.nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2"
          >
            <LanguageToggle />
            <ThemeToggle />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="px-6 py-2 bg-brand-primary text-brand-on-primary text-label-caps border border-brand-secondary/50 rounded-sm hover:bg-brand-primary-container hover:shadow-ambient-hover transition-all duration-300"
          >
            {t('header.viewGithub')}
          </motion.button>
        </div>
      </div>
    </header>
  );
}
