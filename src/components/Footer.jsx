import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold font-display text-gradient">Portfolio.</span>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating exceptional digital experiences through code and design.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="mb-4 rounded-full p-2 bg-primary/10 hover:bg-primary/20"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
            
            <p className="text-sm text-gray-500">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;