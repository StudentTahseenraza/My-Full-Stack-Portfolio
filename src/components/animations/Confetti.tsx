import React from 'react';
import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#0ea5e9', '#06b6d4', '#3b82f6', '#8b5cf6'],
  });
};

export const ConfettiButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const handleClick = () => {
    triggerConfetti();
  };

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};