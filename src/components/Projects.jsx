import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and secure checkout process.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'E-commerce website dashboard showing product listings, sales analytics, and customer management interface',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website with 3D animations, interactive elements, and optimized performance.',
    tags: ['React', 'Three.js', 'Framer Motion', 'TailwindCSS'],
    image: 'Modern portfolio website with 3D elements, dark theme, and interactive project showcases',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking.',
    tags: ['React', 'Firebase', 'Redux', 'Material UI'],
    image: 'Task management application with kanban board, task cards, and team collaboration features',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather dashboard with location-based forecasts, interactive maps, and historical weather data.',
    tags: ['JavaScript', 'Chart.js', 'Weather API', 'Leaflet'],
    image: 'Weather dashboard with temperature graphs, forecast cards, and interactive map',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Social Media App',
    description: 'A social media platform with user profiles, post sharing, real-time messaging, and content discovery.',
    tags: ['React Native', 'GraphQL', 'AWS Amplify', 'Socket.io'],
    image: 'Social media app interface showing user profiles, post feed, and messaging features',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'A fitness tracking application with workout plans, progress visualization, and social sharing features.',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'D3.js'],
    image: 'Fitness tracking app showing workout statistics, progress charts, and exercise library',
    link: '#',
    github: '#',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(project => project.featured) 
      : projects.filter(project => project.tags.includes(filter));

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

  const filters = [
    'all', 
    'featured', 
    'React', 
    'JavaScript', 
    'Vue.js', 
    'Three.js'
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="text-center mb-12"
      >
        <motion.span variants={itemVariants} className="inline-block text-sm font-medium text-gray-400 tracking-wider uppercase mb-2">
          My Work
        </motion.span>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-gray-300">
          Explore my recent projects showcasing my expertise in software development and graphic design.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {filters.map((filterItem) => (
          <Button
            key={filterItem}
            variant={filter === filterItem ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter(filterItem)}
            className="capitalize"
          >
            {filterItem}
          </Button>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      whileHover={{ y: -5 }}
      className="group relative bg-secondary/20 rounded-lg overflow-hidden gradient-border h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
         src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {project.github && (
            <Button size="icon" variant="secondary" asChild className="h-9 w-9 rounded-full">
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View GitHub repository">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.link && (
            <Button size="icon" variant="secondary" asChild className="h-9 w-9 rounded-full">
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Visit live project">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className={cn(
                "inline-block px-2 py-1 text-xs font-medium rounded-full",
                "bg-primary/10 text-gray-300"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;