import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Code, Users } from 'lucide-react';
import { AnimatedCard } from '../../ui/AnimatedCard';

const About: React.FC = () => {
  const stats = [
    { icon: Code, value: '50+', label: 'Projects on GitHub' },
    { icon: Award, value: '10+', label: 'Live Applications' },
    { icon: Calendar, value: '3+', label: 'Years of Learning & Building' },
    { icon: Users, value: '300+', label: 'DSA Problems Solved' },
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Frontend Developer Intern (Remote)',
      company: 'College Tips Startup',
      description:
        'Worked on building responsive and accessible UI components using React.js. Collaborated with the team on community-focused platforms and improved overall user experience across devices.',
      technologies: ['React', 'JavaScript', 'CSS'],
    },
    {
      year: '2024',
      title: 'Full Stack & AI Project Development',
      company: 'Personal & Open Source',
      description:
        'Built multiple full-stack and AI-powered applications including a DSA Visualizer, job automation tools, and learning platforms. Focused on clean architecture, performance, and real-world usability.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Puppeteer', 'AI'],
    },
    {
      year: '2022 – Present',
      title: 'B.Tech in Computer Science & IT',
      company: 'Maulana Azad National Urdu University',
      description:
        'Pursuing undergraduate studies with a strong foundation in software engineering, data structures, algorithms, and core computer science subjects.',
      technologies: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'],
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-dark-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-24">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack developer focused on building real-world, scalable, and intelligent web applications.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedCard hoverEffect="glow" className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-cyan-500/10 rounded-2xl">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </AnimatedCard>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hi, I’m Tahseen — a <span className="text-cyan-400 font-semibold">full-stack developer</span> currently
                pursuing my B.Tech in Computer Science & Information Technology. I actively build projects alongside
                my academics to strengthen my real-world development skills.
              </p>

              <p>
                I enjoy working across the <span className="text-cyan-400 font-semibold">entire development lifecycle</span>,
                from crafting responsive user interfaces to designing robust backend systems and databases.
              </p>

              <p>
                I’ve built <span className="text-cyan-400 font-semibold">50+ projects on GitHub</span>, many of which are
                <span className="text-cyan-400 font-semibold"> live and production-ready</span>. My work spans
                full-stack applications, automation tools, DSA visualizations, and AI-powered platforms.
              </p>

              <p>
                Recently, I’ve been focusing on <span className="text-cyan-400 font-semibold">AI integration in web
                applications</span>, exploring how intelligent systems can improve productivity, learning, and user
                experience. I strongly believe in learning by building.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'AI'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20"
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Experience & Education</h3>

            <div className="space-y-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 to-blue-500/20" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-6 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>

                  <AnimatedCard hoverEffect="lift" className="flex-1 p-6">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        <p className="text-cyan-400 font-semibold">{item.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">
                        {item.year}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4">{item.description}</p>

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
