import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' }
];

const Navbar = ({ activeSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ['home', ...navItems.map(item => item.id)];
      let currentSection = 'home';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
            break;
          }
        }
      }
      onSectionChange(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSectionChange]);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onSectionChange('home');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
        onSectionChange(sectionId);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollToSection('home')} className="p-2 -ml-2" aria-label="Scroll to top">
            <motion.div
              className="text-2xl font-bold font-display"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gradient">STEVEN 
KIERNAN</span>
            </motion.div>
          </button>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.id ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                onClick={() => scrollToSection(item.id)}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-md z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contact')} className="gradient-border">
              Let's Talk
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatedMobileMenu
        isOpen={mobileMenuOpen}
        navItems={navItems}
        activeSection={activeSection}
        onItemClick={scrollToSection}
      />
    </motion.header>
  );
};

const AnimatedMobileMenu = ({ isOpen, navItems, activeSection, onItemClick }) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg"
    >
      <div className="px-4 py-2 space-y-1">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            whileTap={{ scale: 0.95 }}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${activeSection === item.id ? 'bg-primary/10 text-white' : 'text-gray-300 hover:bg-primary/5 hover:text-white'}`}
            onClick={() => onItemClick(item.id)}
          >
            {item.name}
          </motion.button>
        ))}
        <Button onClick={() => onItemClick('contact')} className="w-full mt-4 gradient-border">
          Let's Talk
        </Button>
      </div>
    </motion.div>
  );
};

export default Navbar;