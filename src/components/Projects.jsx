import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PropTypes from 'prop-types';
import { GRID } from '@/utils/constants';

const projects = [
  {
    id: 1,
    title: 'VentureMap',
    description: 'AI-powered business plan generator that creates comprehensive, professional business plans in minutes.',
    tags: [
      { name: 'React', icon: <img src="/icons/react.png" alt="React" className="h-8 w-8" /> },
      { name: 'TypeScript', icon: <img src="/icons/typescript.png" alt="TypeScript" className="h-8 w-8" /> },
      { name: 'Node.js', icon: <img src="/icons/nodejs.png" alt="Node.js" className="h-8 w-8" /> },
      { name: 'Express', icon: <img src="/icons/express.png" alt="Express" className="h-8 w-8" /> },
      { name: 'OpenAI', icon: <img src="/icons/chatGPT.png" alt="OpenAI" className="h-8 w-8" /> },
      { name: 'TailwindCSS', icon: <img src="/icons/tailwind.png" alt="TailwindCSS" className="h-8 w-8" /> },
      { name: 'pnpm', icon: <img src="/icons/pnpm.png" alt="pnpm" className="h-8 w-8" /> }
    ],
    image: '/webp/proj-venmap.webp',
    link: 'https://venture-map.com',
    github: 'https://github.com/kiernan-dev/venture-map',
    featured: true,
    category: 'React',
  },
  {
    id: 2,
    title: 'Keygen',
    description: 'A powerful, production-ready, cryptographic key generation platform for developers.',
    tags: [
      { name: 'Vite', icon: <img src="/icons/vite.png" alt="Vite" className="h-8 w-8" /> },
      { name: 'React', icon: <img src="/icons/react.png" alt="React" className="h-8 w-8" /> },
      { name: 'TypeScript', icon: <img src="/icons/typescript.png" alt="TypeScript" className="h-8 w-8" /> },
      { name: 'TailwindCSS', icon: <img src="/icons/tailwind.png" alt="TailwindCSS" className="h-8 w-8" /> },
      { name: 'Framer Motion', icon: <img src="/icons/framer-motion.png" alt="Framer Motion" className="h-8 w-8" /> },
      { name: 'pnpm', icon: <img src="/icons/pnpm.png" alt="pnpm" className="h-8 w-8" /> }
    ],
    image: '/webp/proj-keygen.webp',
    link: 'https://keygen.kiernan.studio',
    github: 'https://github.com/kiernan-dev/keygen',
    featured: false,
    category: 'React',
  },
  {
    id: 3,
    title: 'Cardography',
    description: 'A comprehensive visual journey through 85 design movements spanning from 1850 to present day.',
    tags: [
      { name: 'HTML', icon: <img src="/icons/html.png" alt="HTML" className="h-8 w-8" /> },
      { name: 'CSS', icon: <img src="/icons/css.png" alt="CSS" className="h-8 w-8" /> },
      { name: 'JavaScript', icon: <img src="/icons/js.png" alt="JavaScript" className="h-8 w-8" /> }
    ],
    image: '/webp/proj-cardography.webp',
    link: 'https://cardography.kiernan.studio',
    github: 'https://github.com/kiernan-dev/cardography',
    featured: false,
    category: 'Static HTML',
  },
  {
    id: 4,
    title: 'ColorStack',
    description: 'React-based color palette generator with intuitive hex code management and export functionality.',
    tags: [
      { name: 'Vite', icon: <img src="/icons/vite.png" alt="Vite" className="h-8 w-8" /> },
      { name: 'React', icon: <img src="/icons/react.png" alt="React" className="h-8 w-8" /> },
      { name: 'TypeScript', icon: <img src="/icons/typescript.png" alt="TypeScript" className="h-8 w-8" /> },
      { name: 'TailwindCSS', icon: <img src="/icons/tailwind.png" alt="TailwindCSS" className="h-8 w-8" /> },
      { name: 'React Router', icon: <img src="/icons/react-router.png" alt="React Router" className="h-8 w-8" /> }
    ],
    image: '/webp/proj-colorstack.webp',
    link: 'https://colorstack.kiernan.studio',
    github: 'https://github.com/kiernan-dev/colorstack',
    featured: false,
    category: 'React',
  },
  {
    id: 5,
    title: 'Memorium',
    description: 'AI-Powered Memorial Platform for generating personalized eulogies, condolence messages, and memorial tributes.',
    tags: [
      { name: 'Astro', icon: <img src="/icons/astro.png" alt="Astro" className="h-8 w-8" /> },
      { name: 'Node.js', icon: <img src="/icons/nodejs.png" alt="Node.js" className="h-8 w-8" /> },
      { name: 'TailwindCSS', icon: <img src="/icons/tailwind.png" alt="TailwindCSS" className="h-8 w-8" /> },
      { name: 'OpenRouter', icon: <img src="/icons/openrouter.png" alt="OpenRouter" className="h-8 w-8" /> },
      { name: 'OpenAI', icon: <img src="/icons/chatGPT.png" alt="OpenAI" className="h-8 w-8" /> }
    ],
    image: '/webp/proj-memorium.webp',
    link: 'https://memorium.kiernan.studio',
    github: 'https://github.com/kiernan-dev/memorium',
    featured: false,
    category: 'Astro',
  },
  {
    id: 6,
    title: 'DockerPimp',
    description: 'Interactive Docker Command Reference with comprehensive categorized commands, filtering, and search functionality.',
    tags: [
      { name: 'Next.js', icon: <img src="/icons/nextjs.png" alt="Next.js" className="h-8 w-8" /> },
      { name: 'TypeScript', icon: <img src="/icons/typescript.png" alt="TypeScript" className="h-8 w-8" /> },
      { name: 'TailwindCSS', icon: <img src="/icons/tailwind.png" alt="TailwindCSS" className="h-8 w-8" /> },
      { name: 'Framer Motion', icon: <img src="/icons/framer-motion.png" alt="Framer Motion" className="h-8 w-8" /> },
      { name: 'Supabase', icon: <img src="/icons/supabase.png" alt="Supabase" className="h-8 w-8" /> }
    ],
    image: '/webp/proj-dockerpimp.webp',
    link: 'https://dockerpimp.kiernan.studio',
    github: 'https://github.com/kiernan-dev/dockerpimp',
    featured: false,
    category: 'Next.js',
  },
  {
    id: 7,
    title: 'HealthWise',
    description: 'AI-powered wellness platform featuring conversational health guidance and natural remedy recommendations.',
    tags: [
      { name: 'Vite', icon: <img src="/icons/vite.png" alt="Vite" className="h-8 w-8" /> },
      { name: 'React', icon: <img src="/icons/react.png" alt="React" className="h-8 w-8" /> },
      { name: 'TypeScript', icon: <img src="/icons/typescript.png" alt="TypeScript" className="h-8 w-8" /> },
      { name: 'TailwindCSS', icon: <img src="/icons/tailwind.png" alt="TailwindCSS" className="h-8 w-8" /> },
      { name: 'OpenAI', icon: <img src="/icons/chatGPT.png" alt="OpenAI" className="h-8 w-8" /> },
      { name: 'Supabase', icon: <img src="/icons/supabase.png" alt="Supabase" className="h-8 w-8" /> }
    ],
    image: '/webp/proj-healthwise.webp',
    link: 'https://healthwise.kiernan.studio',
    github: 'https://github.com/kiernan-dev/healthwise',
    featured: true,
    category: 'React',
  },
  {
    id: 8,
    title: 'StoryBook',
    description: 'Interactive AI Story Generator with narrative generation, AI cover art, interactive editing, and PDF export.',
    tags: [
      { name: 'Vite', icon: <img src="/icons/vite.png" alt="Vite" className="h-8 w-8" /> },
      { name: 'React', icon: <img src="/icons/react.png" alt="React" className="h-8 w-8" /> },
      { name: 'TypeScript', icon: <img src="/icons/typescript.png" alt="TypeScript" className="h-8 w-8" /> },
      { name: 'TailwindCSS', icon: <img src="/icons/tailwind.png" alt="TailwindCSS" className="h-8 w-8" /> },
      { name: 'OpenAI', icon: <img src="/icons/chatGPT.png" alt="OpenAI" className="h-8 w-8" /> },
      { name: 'Supabase', icon: <img src="/icons/supabase.png" alt="Supabase" className="h-8 w-8" /> }
    ],
    image: '/webp/proj-storybook.webp',
    link: 'https://storybook.kiernan.studio',
    github: 'https://github.com/kiernan-dev/storybook',
    featured: true,
    category: 'React',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(project => project.featured) 
      : projects.filter(project => project.category === filter);

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
    'Next.js', 
    'Astro', 
    'Static HTML'
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
          A curated collection of my work spanning full-stack development and visual design.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="flex flex-wrap justify-center gap-2 mb-12"
        role="group"
        aria-label="Filter projects by category"
      >
        {filters.map((filterItem) => (
          <Button
            key={filterItem}
            variant={filter === filterItem ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter(filterItem)}
            className="capitalize"
            aria-pressed={filter === filterItem}
            aria-label={`Filter by ${filterItem}`}
          >
            {filterItem}
          </Button>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        className={`grid ${GRID.PROJECTS_COLS.mobile} ${GRID.PROJECTS_COLS.tablet} ${GRID.PROJECTS_COLS.desktop} gap-6`}
        role="list"
        aria-label="Portfolio projects"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  return (
    <motion.article
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      whileHover={{ y: -5 }}
      className="group relative bg-secondary/20 rounded-lg gradient-border h-full flex flex-col p-1"
      role="listitem"
      aria-label={`Project: ${project.title}`}
    >
      <div 
        className="relative overflow-hidden rounded-lg"
        style={{
          height: '200px',
        }}
      >
        {/* Loading placeholder */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
            <div className="text-gray-500 text-sm">Loading...</div>
          </div>
        )}
        
        {/* Error placeholder */}
        {imageError && (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <div className="text-gray-500 text-sm">Image unavailable</div>
          </div>
        )}
        
        {/* Project image */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url("${project.image}")`,
            backgroundSize: '150%',
            backgroundPosition: 'top left',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Preload image */}
        <img
          src={project.image}
          alt={project.title}
          className="hidden"
          onLoad={() => {
            setImageLoaded(true);
            setImageError(false);
          }}
          onError={() => {
            setImageLoaded(false);
            setImageError(true);
          }}
        />
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
        
        <div className="flex items-center gap-3 mt-auto">
          {project.tags.map((tag, index) => (
            <div
              key={index}
              className="relative group/icon"
              title={tag.name}
            >
              {tag.icon}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                {tag.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
    github: PropTypes.string,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
      })
    ).isRequired,
    featured: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Projects;