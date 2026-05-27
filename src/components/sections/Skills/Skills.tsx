import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard } from '../../ui/AnimatedCard';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' },
    { id: 'soft', name: 'Soft Skills' },
  ];

  const skills = {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML/CSS', level: 98 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Next.js', level: 80 },
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 88 },
      { name: 'Express.js', level: 87 },
      { name: 'Java', level: 89 },
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MySQL', level: 80 },
    ],
    tools: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'Render', level: 80 },
      { name: 'Figma', level: 60 },
      { name: 'VSCODE', level: 83 },
      { name: 'Jest', level: 70 },
      { name: 'Vercel', level: 80 },
    ],
    soft: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Team Leadership', level: 88 },
      { name: 'Project Management', level: 85 },
      { name: 'Creativity', level: 92 },
      { name: 'Adaptability', level: 90 },
    ],
  };

  return (
    <section id="skills" className="min-h-screen py-20 bg-dark-200/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20'
                }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Progress */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <AnimatedCard hoverEffect="glow" className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Technical Proficiency
              </h3>
              {skills[activeCategory as keyof typeof skills].map((skill, index) => (
                <div key={skill.name} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-cyan-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </AnimatedCard>
          </motion.div>

          {/* Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <AnimatedCard hoverEffect="lift" className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Me?</h3>
              <div className="space-y-4">
                {[
                  'Full-stack expertise with modern technologies',
                  'Focus on performance and user experience',
                  'Clean, maintainable code architecture',
                  'Agile development methodology',
                  'Strong problem-solving skills',
                  'Continuous learning and adaptation'
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">{point}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedCard>

            {/* Skill Level Overview */}
            <AnimatedCard hoverEffect="lift" className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Expertise Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Full Stack Web Development', level: 'Advanced' },
                  { name: 'Frontend Development (React / Next.js)', level: 'Expert' },
                  { name: 'Backend Development (Node.js / APIs)', level: 'Intermediate' },
                  { name: 'AI Integration in Web Apps', level: 'Intermediate' },
                ].map((area, index) => (
                  <motion.div
                    key={area.name}
                    className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-white font-semibold mb-2">{area.name}</h4>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${area.level === 'Expert'
                        ? 'bg-green-500/20 text-green-400'
                        : area.level === 'Advanced'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                      {area.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;