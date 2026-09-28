import { useState, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'motion/react';

export function useScrollDirection(threshold = 40) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const prevScrollY = useRef(0);

  useMotionValueEvent(scrollY, 'change', current => {
    // Check threshold for blurred background
    const scrolledPastThreshold = current > threshold;
    setIsScrolled(prev => (prev !== scrolledPastThreshold ? scrolledPastThreshold : prev));

    // Check scroll direction
    const diff = current - prevScrollY.current;
    if (Math.abs(diff) > 4) {
      const nextDir = diff > 0 ? 'down' : 'up';
      setScrollDirection(prevDir => (prevDir !== nextDir ? nextDir : prevDir));
      prevScrollY.current = current;
    }
  });

  return { isScrolled, scrollDirection, scrollY };
}

export default useScrollDirection;
