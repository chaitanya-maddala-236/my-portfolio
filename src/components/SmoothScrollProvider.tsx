
import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import barba from '@barba/core';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with correct options
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update ScrollTrigger on scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Initialize Barba.js for page transitions
    barba.init({
      transitions: [
        {
          name: 'slide-left-to-right',
          leave(data) {
            return gsap.to(data.current.container, {
              duration: 0.5,
              x: '-100%',
              ease: 'power2.inOut'
            });
          },
          enter(data) {
            gsap.fromTo(data.next.container, 
              { x: '100%' },
              { 
                duration: 0.5,
                x: '0%',
                ease: 'power2.inOut'
              }
            );
          }
        }
      ]
    });

    // Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      barba.destroy();
    };
  }, []);

  return <div data-barba="wrapper"><div data-barba="container">{children}</div></div>;
};

export default SmoothScrollProvider;
