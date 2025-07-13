import React from 'react';
import { motion } from 'framer-motion';
import LottieAnimation from './LottieAnimation';

interface FloatingParticlesProps {
  animationData: any;
  count?: number;
  className?: string;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({ 
  animationData, 
  count = 5, 
  className = '' 
}) => {
  const particles = Array.from({ length: count }, (_, i) => i);

  const generateRandomValues = () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    scale: 0.3 + Math.random() * 0.7,
    duration: 10 + Math.random() * 20,
  });

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {particles.map((particle) => {
        const { x, y, scale, duration } = generateRandomValues();
        
        return (
          <motion.div
            key={particle}
            className="absolute opacity-20"
            style={{
              left: x,
              top: y,
              transform: `scale(${scale})`,
            }}
            animate={{
              y: [y, y - 200, y + 100, y],
              x: [x, x + 50, x - 30, x],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-12 h-12">
              <LottieAnimation 
                animationData={animationData}
                width="48px"
                height="48px"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingParticles;