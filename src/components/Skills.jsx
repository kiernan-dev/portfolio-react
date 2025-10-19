import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, LineChart } from 'lucide-react';
import PropTypes from 'prop-types';
import { GRID } from '@/utils/constants';

const skillCategories = [
  {
    title: 'Core Frontend',
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 95 },
      { name: 'Javascript (ES6+)', level: 95 },
      { name: 'Typescript', level: 85 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Web APIs', level: 90 },
    ],
  },
  {
    title: 'Frontend Tools & Styling',
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: 'Webpack/Vite', level: 80 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Sass/SCSS', level: 95 },
      { name: 'PostCSS', level: 75 },
      { name: 'Styled Components', level: 75 },
      { name: 'CSS Modules', level: 80 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Vue.js', level: 70 },
      { name: 'Astro', level: 75 },
      { name: 'Svelte', level: 70 },
      { name: 'Zustand', level: 75 },
    ],
  },
  {
    title: 'AI Integration',
    icon: <Cpu className="h-6 w-6" />,
    skills: [
      { name: 'OpenAI API', level: 80 },
      { name: 'Claude CLI', level: 85 },
      { name: 'Prompt Engineering', level: 75 },
      { name: 'Multi-provider Integration', level: 85 },
      { name: 'Ollama', level: 80 },
      { name: 'LiteLLM', level: 75 },
    ],
  },
  {
    title: 'Backend Development',
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 80 },
      { name: 'Webhooks', level: 70 },
      { name: 'Socket.io', level: 60 },
      { name: 'Serverless Functions', level: 65 },
      { name: 'JWT Authentication', level: 75 },
    ],
  },
  {
    title: 'APIs & Databases',
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: 'RESTful APIs', level: 80 },
      { name: 'GraphQL', level: 70 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Redis', level: 70 },
      { name: 'MongoDB', level: 70 },
      { name: 'Supabase', level: 70 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: 'Docker', level: 75 },
      { name: 'Dokploy', level: 70 },
      { name: 'Kubernetes', level: 55 },
      { name: 'CI/CD Pipelines', level: 65 },
      { name: 'AWS/GCP', level: 70 },
      { name: 'Vercel/Netlify', level: 80 },
    ],
  },
  {
    title: 'Animation & 3D',
    icon: <Cpu className="h-6 w-6" />,
    skills: [
      { name: 'CSS Animations', level: 90 },
      { name: 'Three.js', level: 75 },
      { name: 'Anime.js', level: 75 },
      { name: 'GSAP', level: 75 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Lottie', level: 90 },
    ],
  },
  {
    title: 'Development Tools',
    icon: <LineChart className="h-6 w-6" />,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'ESLint', level: 90 },
      { name: 'Jest/Testing', level: 75 },
      { name: 'Prettier', level: 85 },
      { name: 'npm/pnpm', level: 90 },
      { name: 'VS Code', level: 90 },
    ],
  },
];

const Skills = () => {
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="text-center mb-12"
      >
        <motion.span variants={itemVariants} className="inline-block text-sm font-medium text-gray-400 tracking-wider uppercase mb-2">
          My Expertise
        </motion.span>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
          Skills & <span className="text-gradient">Technologies</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-gray-300">
          A comprehensive overview of my technical skills and proficiency levels across various domains.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className={`grid ${GRID.SKILLS_COLS.mobile} ${GRID.SKILLS_COLS.tablet} ${GRID.SKILLS_COLS.desktop} gap-6`}
      >
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} category={category} />
        ))}
      </motion.div>
    </div>
  );
};

const SkillCategory = React.memo(({ category }) => {
  const averageScore = useMemo(() => 
    Math.round(category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length),
    [category.skills]
  );

  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      className="relative bg-secondary/20 rounded-lg p-6 gradient-border"
    >
      <div className="absolute top-0 right-0 -mt-2 -mr-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
        {averageScore}
      </div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg text-primary-foreground">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold">{category.title}</h3>
      </div>
      
      <div className="space-y-4" role="list" aria-label={`${category.title} skills`}>
        {category.skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
});

const SkillBar = React.memo(({ skill, index }) => {
  return (
    <div role="listitem">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <span className="text-sm font-medium text-gray-400" aria-label={`${skill.name} proficiency: ${skill.level} percent`}>
          {skill.level}%
        </span>
      </div>
      <div 
        className="h-2 bg-gray-700 rounded-full overflow-hidden" 
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} skill level`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
        ></motion.div>
      </div>
    </div>
  );
});

SkillCategory.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        level: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

SkillBar.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Skills;