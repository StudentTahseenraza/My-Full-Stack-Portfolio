import { useState, useCallback } from 'react';
import { RefObject } from 'react';

export const useMagneticButton = (ref: RefObject<HTMLElement>, strength: number = 0.5) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const moveX = (x - centerX) * strength;
    const moveY = (y - centerY) * strength;

    setPosition({ x: moveX, y: moveY });
  }, [ref, strength]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return {
    position,
    handleMouseMove,
    handleMouseLeave,
  };
};