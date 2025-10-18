import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroCanvas from '@/components/three/HeroCanvas';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const canvasY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: canvasY }}>
        <HeroCanvas />
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-sm md:text-base font-medium text-gray-400 tracking-wider uppercase">
              Senior Full-Stack Engineer | React/Node.js
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Creating <span className="text-gradient">Digital Experiences</span> That Matter
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
          >
            I blend code and design to build beautiful, functional, and user-centered digital products that solve real problems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="gradient-border text-white px-8 py-6 text-lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth',
                  });
                }
              }}
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  window.scrollTo({
                    top: projectsSection.offsetTop - 80,
                    behavior: 'smooth',
                  });
                }
              }}
            >
              View My Work
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-float"
          onClick={scrollToAbout}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-0"></div>
    </div>
  );
};

export default Hero;
