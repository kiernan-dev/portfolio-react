import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Cpu, LineChart } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Vue.js', level: 80 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 85 },
    ],
  },
  {
    title: 'Design',
    icon: <Palette className="h-6 w-6" />,
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'Adobe XD', level: 85 },
      { name: 'Photoshop', level: 80 },
      { name: 'Illustrator', level: 75 },
      { name: 'UI/UX Design', level: 85 },
      { name: 'Motion Design', level: 70 },
    ],
  },
  {
    title: 'Backend Development',
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Firebase', level: 85 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    title: 'Web Technologies',
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: 'RESTful APIs', level: 90 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Progressive Web Apps', level: 80 },
      { name: 'Web Performance', level: 85 },
      { name: 'Accessibility', level: 80 },
      { name: 'SEO', level: 75 },
    ],
  },
  {
    title: '3D & Animation',
    icon: <Cpu className="h-6 w-6" />,
    skills: [
      { name: 'Three.js', level: 80 },
      { name: 'WebGL', level: 75 },
      { name: 'GSAP', level: 85 },
      { name: 'Framer Motion', level: 90 },
      { name: 'CSS Animations', level: 85 },
      { name: 'Blender', level: 65 },
    ],
  },
  {
    title: 'Tools & Methods',
    icon: <LineChart className="h-6 w-6" />,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'Jest/Testing', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'Webpack/Vite', level: 85 },
      { name: 'Docker', level: 70 },
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} category={category} />
        ))}
      </motion.div>
    </div>
  );
};

const SkillCategory = ({ category }) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      className="bg-secondary/20 rounded-lg p-6 gradient-border"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg text-primary-foreground">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold">{category.title}</h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const SkillBar = ({ skill, index }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
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
};

export default Skills;