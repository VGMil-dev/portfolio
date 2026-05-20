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

      <div className="max-w-[1280px] mx-auto w-full px-6 relative z-10 grid md:grid-cols-12 gap-12 items-center">
        <motion.div 
          className="col-span-12 md:col-span-7 lg:col-span-7"
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

        {/* Profile Image Section */}
        <motion.div 
          className="col-span-12 md:col-span-5 lg:col-span-5 relative hidden md:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-[4/5] max-w-[400px] ml-auto">
            {/* Architectural Frame Accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-brand-secondary/40 z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-brand-secondary/40 z-0"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full h-full overflow-hidden rounded-sm border border-brand-outline-variant/30 bg-brand-surface-container-lowest shadow-2xl">
              <img 
                src="/images/me.png" 
                alt="Milton Velásquez" 
                className="w-full h-full object-cover filter contrast-[1.05] brightness-[1.02]"
              />
              
              {/* Subtle Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/40 to-transparent mix-blend-multiply"></div>
            </div>

            {/* Floating Detail */}
            <motion.div 
              className="absolute -bottom-8 -right-8 bg-brand-surface border border-brand-outline-variant/30 p-4 rounded-sm shadow-xl z-20 backdrop-blur-md hidden lg:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></div>
                <span className="text-label-caps text-brand-primary text-[10px] tracking-[0.2em]">Based in Ecuador</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
