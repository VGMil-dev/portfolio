import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
      ></div>

      <div className="max-w-[1280px] mx-auto w-full px-6 relative z-10 grid md:grid-cols-12 gap-6">
        <motion.div 
          className="col-span-12 md:col-span-8 lg:col-span-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-brand-secondary"></div>
            <span className="text-label-caps text-brand-secondary">{t('hero.structuralPrecision')}</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-display-xl-mobile md:text-display-xl text-brand-primary mb-8">
            {t('hero.title1')} <br />
            <span className="text-brand-on-surface-variant font-normal">{t('hero.title2')}</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-body-lg text-brand-on-surface-variant mb-12 max-w-2xl leading-relaxed">
            {t('hero.description')}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex gap-6 items-center">
            <button className="px-8 py-4 bg-brand-primary text-brand-on-primary font-semibold text-sm tracking-widest uppercase rounded-sm border border-brand-secondary/50 hover:bg-brand-primary-container hover:shadow-ambient-hover transition-all duration-300">
              {t('hero.viewArchitecture')}
            </button>
            <a href="#contact" className="text-sm font-semibold tracking-widest uppercase text-brand-primary hover:text-brand-secondary transition-colors duration-300 flex items-center gap-2">
              {t('hero.contactMe')} 
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
