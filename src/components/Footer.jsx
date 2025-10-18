import React from 'react';
import { Github, Globe } from 'lucide-react';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-background/95 relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm text-gray-400">© {currentYear} Steven Kiernan</span>
          <span className="text-gray-600">•</span>
          <a
            href="https://github.com/kiernan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Portfolio"
          >
            <Globe className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;