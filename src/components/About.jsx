import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Parallax effect - start offscreen right, move to center when in view
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ['100%', '0%', '-100%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Giant KIERNAN Background Text */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ x }}
      >
        <div 
          className="font-bold text-orange-500/20 whitespace-nowrap leading-none select-none font-display"
          style={{ 
            fontSize: 'clamp(16rem, 50vw, 60rem)',
            letterSpacing: '-0.05em'
          }}
        >
          KIERNAN
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div>
          <motion.span
            variants={itemVariants}
            className="inline-block text-sm font-medium text-gray-400 tracking-wider uppercase mb-2"
          >
            About Me
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
          >
            Crafting Digital Solutions with <span className="text-gradient">Passion & Precision</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="space-y-6 text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            <p className="leading-relaxed">
              Senior Full‑Stack JavaScript Engineer with <span className="text-white font-semibold">20+ years</span> building and shipping enterprise applications for Fortune 500 brands including <span className="text-white">Sprint, SAP, Dell, Colgate, Gatorade, Ford, Burger King, and many more.</span>
            </p>
            <p className="leading-relaxed">
              Specializing in <span className="text-gradient font-semibold">React.js, Next.js, TypeScript, and Node.js</span> with extensive experience in frontend architecture, agile development, and legacy system modernization. Proven track record implementing CI/CD pipelines, optimizing application performance, and delivering measurable improvements in user experience.
            </p>
            <p className="leading-relaxed">
              Strong technical background in HIPAA-compliant applications, accessibility standards (WCAG), scalable microservices architecture, and AI integration with modern development workflows.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-12">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">20+</h3>
              <p className="text-gray-400 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">100+</h3>
              <p className="text-gray-400 font-medium">Projects Delivered</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Fortune 500</h3>
              <p className="text-gray-400 font-medium">Enterprise Clients</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Button className="flex items-center gap-2">
              <Download size={16} />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default About;