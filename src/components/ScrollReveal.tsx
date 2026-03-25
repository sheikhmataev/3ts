'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
}

export default function ScrollReveal({ 
  children, 
  className = '', 
  direction = 'up', 
  delay = 0 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'left':
        return 'reveal-left';
      case 'right':
        return 'reveal-right';
      default:
        return 'reveal';
    }
  };

  return (
    <div ref={ref} className={`${getDirectionClass()} ${className}`}>
      {children}
    </div>
  );
}
