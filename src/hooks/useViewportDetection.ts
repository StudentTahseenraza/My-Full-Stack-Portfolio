import { useState, useEffect } from 'react';

export const useViewportDetection = (threshold: number = 0.1) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const [hasBeenInViewport, setHasBeenInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentlyInViewport = entry.isIntersecting;
        setIsInViewport(currentlyInViewport);
        
        if (currentlyInViewport && !hasBeenInViewport) {
          setHasBeenInViewport(true);
        }
      },
      { threshold }
    );

    const element = document.getElementById('viewport-detection');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, hasBeenInViewport]);

  return { isInViewport, hasBeenInViewport };
};

export default useViewportDetection;