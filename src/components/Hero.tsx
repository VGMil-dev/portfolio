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
          <div className="relative aspect-[4/5] max-w-[420px] ml-auto">
            {/* Geometric Outlines (Behind) */}
            <div 
              className="absolute inset-0 border border-brand-secondary/30 translate-x-4 translate-y-4 z-0 transition-transform duration-700 hover:translate-x-6 hover:translate-y-6"
              style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}
            ></div>
            <div 
              className="absolute inset-0 border border-brand-primary/20 -translate-x-2 -translate-y-2 z-0"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
            ></div>

            {/* Architectural Grid Details */}
            <svg className="absolute -top-6 -left-6 w-24 h-24 text-brand-secondary/20 z-0" viewBox="0 0 100 100">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
            
            {/* Main Image Container with Geometric Cut */}
            <div 
              className="relative z-10 w-full h-full overflow-hidden bg-brand-surface-container-lowest shadow-2xl group"
              style={{ 
                clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)'
              }}
            >
              <img 
                src="/images/me.png" 
                alt="Milton Velásquez" 
                className="w-full h-full object-cover filter contrast-[1.05] brightness-[1.02] transform -scale-x-100 transition-transform duration-1000 group-hover:-scale-x-105 group-hover:scale-y-105"
              />
              
              {/* Subtle Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/60 via-transparent to-transparent mix-blend-multiply"></div>
              
              {/* Inner Architectural Border */}
              <div className="absolute inset-0 border-[1px] border-brand-outline-variant/30 z-20 pointer-events-none" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}></div>
            </div>

            {/* Floating Detail with Geometric Shape */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-brand-surface/90 border border-brand-outline-variant/30 p-4 shadow-xl z-20 backdrop-blur-md hidden lg:block"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-sm bg-brand-secondary animate-pulse"></div>
                <span className="text-label-caps text-brand-primary text-[10px] tracking-[0.2em] uppercase">Based in Ecuador</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
