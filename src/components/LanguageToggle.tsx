import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative h-10 px-3 flex items-center justify-center gap-2 rounded border border-brand-outline-variant/30 hover:border-brand-secondary/50 bg-brand-surface-container/50 backdrop-blur-sm transition-all duration-300 group overflow-hidden"
      aria-label="Toggle language"
    >
      <div className="absolute inset-0 bg-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <Languages size={18} className="text-brand-primary group-hover:text-brand-secondary transition-colors duration-300" />
      
      <div className="relative w-6 h-5 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={i18n.language}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center text-xs font-bold text-brand-primary uppercase tracking-tighter"
          >
            {i18n.language}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Decorative architectural line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-secondary/0 group-hover:bg-brand-secondary/50 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left" />
    </button>
  );
}
