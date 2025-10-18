import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About = () => {
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants} className="perspective">
          <motion.div
            whileHover={{ rotateY: 5, rotateX: 5 }}
            className="gradient-border p-1 rounded-lg overflow-hidden"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                alt="Software engineer working on design project"
                className="w-full h-full object-cover"
               src="https://images.unsplash.com/photo-1687006067259-6de13ca3875e" />
            </div>
          </motion.div>
        </motion.div>

        <div>
          <motion.span
            variants={itemVariants}
            className="inline-block text-sm font-medium text-gray-400 tracking-wider uppercase mb-2"
          >
            About Me
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Crafting Digital Solutions with <span className="text-gradient">Passion & Precision</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="space-y-4 text-gray-300 mb-8">
            <p>
              Senior Full‑Stack JavaScript Engineer with 20+ years building and shipping enterprise applications for Fortune 500 brands including Sprint, SAP, Dell, Colgate, Gatorade, Ford, and Burger King.
            </p>
            <p>
              Expert in React.js, Next.js, TypeScript, and Node.js with deep expertise in frontend architecture, Agile development, and legacy system modernization. Proven track record implementing CI/CD pipelines, optimizing application performance, and delivering measurable improvements in user experience.
            </p>
            <p>
              Strong technical background in HIPAA-compliant applications, accessibility standards (WCAG), scalable microservices architecture, and AI integration with modern development workflows.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-1">20+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">100+</h3>
              <p className="text-gray-400">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Fortune 500</h3>
              <p className="text-gray-400">Enterprise Clients</p>
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
  );
};

export default About;