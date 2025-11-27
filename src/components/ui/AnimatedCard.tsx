import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'tilt' | 'all';
  delay?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  hoverEffect = 'all',
  delay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || hoverEffect !== 'tilt') return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const cardX = e.clientX - rect.left;
    const cardY = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((cardX - centerX) / centerX) * 5;
    const rotateX = ((centerY - cardY) / centerY) * 5;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current && hoverEffect === 'tilt') {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
  };

  const getHoverStyles = () => {
    switch (hoverEffect) {
      case 'lift':
        return 'hover:scale-105 hover:shadow-2xl';
      case 'glow':
        return 'hover:shadow-lg hover:shadow-cyan-500/25';
      case 'tilt':
        return 'tilt-effect';
      case 'all':
        return 'hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 tilt-effect';
      default:
        return '';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        glass-effect rounded-xl p-6 transition-all duration-500
        ${getHoverStyles()} 
        ${className}
      `}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={hoverEffect === 'tilt' || hoverEffect === 'all' ? handleMouseMove : undefined}
      onMouseLeave={hoverEffect === 'tilt' || hoverEffect === 'all' ? handleMouseLeave : undefined}
      whileHover={hoverEffect !== 'tilt' ? { 
        scale: hoverEffect === 'lift' || hoverEffect === 'all' ? 1.05 : 1,
        boxShadow: hoverEffect === 'glow' || hoverEffect === 'all' ? '0 20px 40px rgba(6, 182, 212, 0.3)' : undefined
      } : undefined}
    >
      {children}
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 opacity-0 transition-opacity duration-500 hover:opacity-100 -z-10" />
    </motion.div>
  );
};