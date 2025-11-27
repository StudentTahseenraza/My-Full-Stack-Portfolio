import { ReactNode } from 'react';

export interface AnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export interface ScrollRevealProps extends AnimationProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

// Remove the default export line