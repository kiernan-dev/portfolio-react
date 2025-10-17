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
              I'm a passionate software engineer and graphic designer with over 5 years of experience creating exceptional digital experiences that combine functionality with stunning aesthetics.
            </p>
            <p>
              My approach blends technical expertise with creative vision, allowing me to build solutions that not only work flawlessly but also engage and delight users. I specialize in front-end development, UI/UX design, and creating immersive interactive experiences.
            </p>
            <p>
              When I'm not coding or designing, you'll find me exploring new technologies, contributing to open-source projects, or seeking inspiration through photography and travel.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-1">5+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">50+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">20+</h3>
              <p className="text-gray-400">Happy Clients</p>
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