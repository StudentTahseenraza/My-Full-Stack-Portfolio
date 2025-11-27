import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import { MagneticButton } from '../../ui/MagneticButton';
import { Typewriter } from '../../animations/Typewriter';

// Try different possible image paths
const profileImage = "/images/MyPic.jpg"; // Using public folder path
console.log('Image path:', profileImage);

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageError = () => {
    console.error('Failed to load image at path:', profileImage);
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="section-padding max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* ... (keep your existing left content exactly as is) ... */}
            <motion.div
              className="inline-block mb-6"
              variants={itemVariants}
            >
              <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20">
                👋 Welcome to my Portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="block text-primary">Full Stack</span>
              <span className="gradient-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Developer
              </span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-secondary mb-8 h-16"
              variants={itemVariants}
            >
              <Typewriter
                texts={[
                  'I build amazing web experiences',
                  'React • TypeScript • Node.js',
                  'Clean code & modern design',
                  'Performance & user focused'
                ]}
                speed={50}
                delay={2000}
              />
            </motion.div>

            <motion.p
              className="text-lg text-secondary mb-12 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              I specialize in creating <span className="text-cyan-400 font-semibold">high-performance</span>, 
              <span className="text-blue-400 font-semibold"> visually stunning</span>, and 
              <span className="text-purple-400 font-semibold"> user-friendly applications</span>. 
              With a passion for both frontend artistry and backend architecture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <MagneticButton
                variant="primary"
                size="lg"
                onClick={scrollToProjects}
                className="group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                size="lg"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-6"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/25"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main Profile Image Container */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Profile Image with Error Handling */}
                {!imageError ? (
                  <motion.img
                    src={profileImage}
                    alt="Your Name - Full Stack Developer"
                    className="w-full h-full object-cover rounded-3xl"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: imageLoaded ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    whileHover={{ scale: 1.05 }}
                  />
                ) : (
                  // Fallback when image fails to load
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-3xl">
                    <span className="text-gray-500 text-lg">Image not found</span>
                  </div>
                )}
                
                {/* Loading shimmer effect */}
                {!imageLoaded && !imageError && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-3xl"
                    animate={{
                      backgroundPosition: ['200% 0', '-200% 0'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                  />
                )}
                
                {/* Animated Border - Fixed positioning */}
                <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/30 z-10 pointer-events-none" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -left-2 w-6 h-6 bg-cyan-400/30 rounded-full blur-sm z-20"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-5 h-5 bg-blue-400/30 rounded-full blur-sm z-20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-4 -right-4 w-4 h-4 bg-purple-400/30 rounded-full blur-sm z-20"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              {/* Status Indicator */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/80 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-secondary font-medium">Available for work</span>
                </div>
              </motion.div>

              {/* Tech Stack Floating Badges */}
              <motion.div
                className="absolute -top-3 -right-6 z-20"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm shadow-lg">
                  <span className="text-cyan-400 text-sm font-semibold">React</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-6 top-1/4 z-20"
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.4, type: "spring" }}
              >
                <div className="px-3 py-1 bg-blue-500/10 border border-blue-400/30 rounded-full backdrop-blur-sm shadow-lg">
                  <span className="text-blue-400 text-sm font-semibold">Node.js</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-8 bottom-1/4 z-20"
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.6, type: "spring" }}
              >
                <div className="px-3 py-1 bg-purple-500/10 border border-purple-400/30 rounded-full backdrop-blur-sm shadow-lg">
                  <span className="text-purple-400 text-sm font-semibold">TypeScript</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.button
            onClick={scrollToProjects}
            className="flex flex-col items-center text-secondary hover:text-cyan-400 transition-colors group"
            whileHover={{ y: 5 }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;