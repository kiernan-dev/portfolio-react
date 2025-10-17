
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import LoadingScreen from '@/components/LoadingScreen';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background text-foreground relative overflow-hidden"
          >
            <Cursor />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background pointer-events-none z-0"></div>
            
            <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />
            
            <main className="relative z-10">
              <section id="home">
                <Hero />
              </section>
              
              <section id="about" className="relative pt-40 pb-20">
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-0"></div>
                <About />
              </section>
              
              <section id="skills" className="py-20">
                <Skills />
              </section>
              
              <section id="projects" className="py-20">
                <Projects />
              </section>
              
              
              <section id="contact">
                <Contact />
              </section>
            </main>
            
            <Footer />
            <Toaster />

            <AnimatePresence>
              {showBackToTop && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="fixed bottom-8 right-8 z-50"
                >
                  <Button
                    size="icon"
                    className="gradient-border h-12 w-12"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                  >
                    <ArrowUp className="h-6 w-6" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
