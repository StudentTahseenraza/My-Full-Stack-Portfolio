import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Code, Users } from 'lucide-react';
import { AnimatedCard } from '../../ui/AnimatedCard';

const About: React.FC = () => {
  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
    { icon: Calendar, value: '3+', label: 'Years Experience' },
    { icon: Award, value: '15+', label: 'Technologies' },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      description: 'Leading development of enterprise-scale applications with React, Node.js, and cloud technologies.',
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript'],
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      description: 'Developed and maintained multiple web applications, focusing on performance and user experience.',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Docker'],
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      company: 'Web Creators Agency',
      description: 'Created responsive and interactive user interfaces for various clients and projects.',
      technologies: ['JavaScript', 'React', 'CSS3', 'WordPress'],
    },
    {
      year: '2020',
      title: 'Computer Science Degree',
      company: 'University of Technology',
      description: 'Graduated with honors, focusing on software engineering and web technologies.',
      technologies: ['Java', 'Python', 'SQL', 'Algorithms'],
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-dark-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Passionate full-stack developer with a love for creating digital experiences 
            that are both beautiful and functional.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedCard
                  hoverEffect="glow"
                  className="text-center p-6 group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-cyan-500/10 rounded-2xl group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </AnimatedCard>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              My Journey
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hello! I'm a passionate full-stack developer with over 3 years of experience 
                creating digital solutions that make a difference. My journey started in university 
                where I fell in love with coding and problem-solving.
              </p>
              
              <p>
                I specialize in <span className="text-cyan-400 font-semibold">modern web technologies</span> 
                and enjoy working on both the frontend and backend. My goal is to create applications 
                that are not only functional but also provide an exceptional user experience.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or enjoying outdoor activities. I believe in continuous 
                learning and always strive to improve my skills.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Experience
            </h3>
            
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 to-blue-500/20" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-6 relative group"
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center z-10 relative">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-cyan-400 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300 opacity-50" />
                  </div>

                  {/* Content */}
                  <AnimatedCard
                    hoverEffect="lift"
                    className="flex-1 p-6 group-hover:shadow-2xl group-hover:shadow-cyan-500/10 transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-cyan-400 font-semibold">{item.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium">
                        {item.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/5 text-gray-400 rounded text-xs border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </AnimatedCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;