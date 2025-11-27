import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMagneticButton } from '../../hooks/useMagneticButton';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  strength = 0.5,
  variant = 'primary',
  size = 'md',
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { position, handleMouseMove, handleMouseLeave } = useMagneticButton(ref, strength);

  const baseStyles = "relative overflow-hidden rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-100";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl",
    secondary: "glass-effect text-white border-white/30 hover:bg-white/20",
    ghost: "text-white hover:bg-white/10 border border-transparent hover:border-white/20"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={position}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="relative z-10 flex items-center gap-2"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {children}
      </motion.span>
      
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white rounded-lg opacity-0"
        whileTap={{ opacity: 0.2, scale: 1.1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};