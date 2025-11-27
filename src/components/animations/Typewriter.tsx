import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  speed = 50,
  delay = 2000,
  className = '',
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const type = useCallback(() => {
    const fullText = texts[currentTextIndex];
    
    if (isDeleting) {
      // Deleting text
      setCurrentText(fullText.substring(0, currentText.length - 1));
    } else {
      // Typing text
      setCurrentText(fullText.substring(0, currentText.length + 1));
    }

    if (!isDeleting && currentText === fullText) {
      // Finished typing, pause then start deleting
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && currentText === '') {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [currentText, currentTextIndex, isDeleting, delay, texts]);

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(type, isDeleting ? speed / 2 : speed);
      return () => clearTimeout(timer);
    }
  }, [currentText, isDeleting, isPaused, speed, type]);

  return (
    <div className={`inline-flex ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentTextIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-cyan-400 font-semibold"
        >
          {currentText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1"
          >
            |
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

// Make sure to export as default if needed elsewhere
export default Typewriter;