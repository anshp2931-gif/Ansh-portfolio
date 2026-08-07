import { useEffect, useState, useRef, useMemo, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ReactLenis, useLenis } from 'lenis/react';
import { seoConfig } from './config/seoConfig';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Preloader from './components/Preloader';
import HackathonWinnerModal, { useHackathonWinnerModal } from './components/HackathonWinnerModal';
import './index.css';

// Code-split below-the-fold sections for faster initial load
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));
const CustomCursor = lazy(() => import('./components/CustomCursor'));
import About from './components/About';
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Projects = lazy(() => import('./components/Projects'));
const Figma = lazy(() => import('./components/Figma'));
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
  const lenis = useLenis();
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderExiting, setPreloaderExiting] = useState(false);
  const { isOpen: isModalOpen, close: closeModal } = useHackathonWinnerModal(preloaderExiting);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, lenis]);

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Only run scroll spy on the home page
    if (location.pathname !== '/' || showPreloader) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust margin to detect section in "active" zone
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['home', 'about', 'skills', 'education', 'projects', 'figma', 'github', 'hackathons', 'certificates', 'contact'];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname, showPreloader]);

  // Determine current metadata based on route or active scroll section
  const currentMetadata = useMemo(() => {
    if (location.pathname === '/') {
      return seoConfig[activeSection] || seoConfig.home;
    }
    const path = location.pathname.split('/')[1];
    return seoConfig[path] || seoConfig.home;
  }, [location.pathname, activeSection]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    // Custom cursor: desktop only
    if (!isMobile) {
      document.body.style.cursor = 'none';
    }
  }, []);


  return (
    <>
      <Helmet>
        <title>{currentMetadata.title}</title>
        <meta name="description" content={currentMetadata.description} />
        <meta name="keywords" content="Ansh Patel, Full Stack Developer, AI Integrator, Portfolio, React Developer, Web Developer, UI/UX Designer" />
        <meta name="author" content="Ansh Patel" />
        <meta name="theme-color" content="#22d3ee" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anshp-portfolio.vercel.app/" />
        <meta property="og:title" content={currentMetadata.title} />
        <meta property="og:description" content={currentMetadata.description} />
        <meta property="og:image" content="/ansh.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://anshp-portfolio.vercel.app/" />
        <meta property="twitter:title" content={currentMetadata.title} />
        <meta property="twitter:description" content={currentMetadata.description} />
        <meta property="twitter:image" content="/ansh.png" />
      </Helmet>

      {showPreloader && (
        <Preloader
          onStartExit={() => setPreloaderExiting(true)}
          onComplete={() => setShowPreloader(false)}
        />
      )}
      <HackathonWinnerModal isOpen={isModalOpen} onClose={closeModal} />
      <ReactLenis root options={{ 
      lerp: 0.12,
      duration: 1.0,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      infinite: false,
    }}>
    <div className="relative min-h-screen">
      {/* Background Interactive Layer */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      {/* Custom Cursor */}
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      <Navigation activeSection={activeSection} />

      <main id="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Suspense fallback={<SectionFallback />}>
                <About />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Skills />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Education />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Projects />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Figma />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Github />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Hackathon />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Certificates />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Contact />
              </Suspense>
            </>
          } />
          {/* Fallback route - redirects to home */}
          <Route path="*" element={
            <>
              <Hero />
              <Suspense fallback={<SectionFallback />}>
                <About />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Skills />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Education />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Projects />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Figma />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Github />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Hackathon />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Certificates />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Contact />
              </Suspense>
            </>
          } />
        </Routes>
      </main>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
    </ReactLenis>
    </>
  );
}

export default App;
