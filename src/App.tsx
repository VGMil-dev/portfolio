import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Global Watermark Texture */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'url(/images/watermark-pattern.png)',
          backgroundSize: '400px'
        }}
      ></div>

      <Header />
      
      <main className="relative z-10 pt-20">
        <Hero />
        <Projects />
        <TechStack />
      </main>

      <footer id="contact" className="bg-brand-primary text-brand-on-primary py-12 relative z-10">
        <div className="max-w-[1280px] mx-auto w-full px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-brand-secondary flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-brand-primary rotate-45"></div>
            </div>
            <span className="text-label-caps tracking-widest text-white">Milton Velásquez</span>
          </div>
          
          <div className="flex gap-6 text-label-caps text-brand-on-primary-container">
            <a href="mailto:info@vgmils.dev" className="hover:text-brand-secondary transition-colors">info@vgmils.dev</a>
            <a href="https://github.com/vGMil-dev/" target="_blank" rel="noreferrer" className="hover:text-brand-secondary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/milton-velasquez-g/" target="_blank" rel="noreferrer" className="hover:text-brand-secondary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
