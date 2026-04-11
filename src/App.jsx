import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import './index.css';

// Code-split below-the-fold sections for faster initial load
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));
const CustomCursor = lazy(() => import('./components/CustomCursor'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Projects = lazy(() => import('./components/Projects'));
const Github = lazy(() => import('./components/Github'));
const Hackathon = lazy(() => import('./components/Hackathon'));
const Certificates = lazy(() => import('./components/Certificates'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Lightweight fallback — avoids layout shift while sections load
const SectionFallback = () => (
  <div className="py-24 flex items-center justify-center" aria-hidden="true">
    <div className="w-8 h-8 rounded-full border-2 border-electric-cyan/30 border-t-electric-cyan animate-spin" />
  </div>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Custom cursor: desktop only
    if (!isMobile) {
      document.body.style.cursor = 'none';
    }

    // Lenis smooth scroll: desktop only.
    // On mobile the native momentum scroll is already smooth and performant;
    // running Lenis on low-end Android devices wastes CPU and hurts scores.
    if (isMobile) return;

    // Dynamically import Lenis only on desktop so mobile never pays the cost
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      let rafId;
      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      const handleAnchorClick = (e) => {
        const target = e.target.closest('a');
        if (target && target.hash && target.hash.startsWith('#')) {
          e.preventDefault();
          lenis.scrollTo(target.hash);
        }
      };
      document.addEventListener('click', handleAnchorClick);
      window.lenis = lenis;

      // Store cleanup references for the return callback
      window._lenisRafId = rafId;
      window._lenisCleanup = () => {
        cancelAnimationFrame(rafId);
        document.removeEventListener('click', handleAnchorClick);
        lenis.destroy();
        document.body.style.cursor = 'auto';
      };
    });

    return () => {
      if (window._lenisCleanup) window._lenisCleanup();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Effects — lazy so it doesn't block first paint */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      {/* Custom Cursor (desktop only, lazy-loaded) */}
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      {/* Navigation — eagerly loaded for instant access */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Suspense fallback={<SectionFallback />}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Suspense fallback={<SectionFallback />}>
                  <About />
                  <Skills />
                  <Education />
                  <Projects />
                  <Github />
                  <Hackathon />
                  <Certificates />
                  <Contact />
                </Suspense>
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/github" element={<Github />} />
            <Route path="/hackathons" element={<Hackathon />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
