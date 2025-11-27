import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const NAVIGATION_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = NAVIGATION_LINKS.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark-100/90 backdrop-blur-lg border-b border-white/10 py-2' 
            : 'bg-transparent py-3'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-6 sm:px-8 lg:px-12 xl:px-24 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo - Smaller */}
            <motion.div
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation - Compact */}
            <div className="hidden md:flex items-center space-x-6">
              {NAVIGATION_LINKS.map((link, index) => (
                <motion.button
                  key={link.name}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'text-cyan-400'
                      : 'text-white/90 hover:text-cyan-300'
                  }`}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
              
              <MagneticButton variant="primary" size="sm" className="text-sm">
                Get In Touch
              </MagneticButton>
            </div>

            {/* Mobile Menu Button - Smaller */}
            <motion.button
              className="md:hidden p-1.5 text-white/90 hover:text-cyan-300 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel - Compact */}
            <motion.div
              className="absolute top-0 right-0 h-full w-64 bg-dark-100/95 backdrop-blur-lg border-l border-white/10"
              variants={navVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-6">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 text-white/90 hover:text-cyan-300 transition-colors"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-4">
                  {NAVIGATION_LINKS.map((link, index) => (
                    <motion.button
                      key={link.name}
                      className={`text-left text-lg font-medium p-3 rounded-lg transition-colors ${
                        activeSection === link.href.substring(1)
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : 'text-white/90 hover:bg-white/10 hover:text-white'
                      }`}
                      onClick={() => scrollToSection(link.href.substring(1))}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>

                {/* Get In Touch Button */}
                <motion.div
                  className="mt-6 pt-6 border-t border-white/10"
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ delay: 0.5 }}
                >
                  <MagneticButton
                    variant="primary"
                    size="sm"
                    className="w-full"
                    onClick={() => scrollToSection('contact')}
                  >
                    Get In Touch
                  </MagneticButton>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;