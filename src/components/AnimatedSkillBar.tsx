import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import LottieAnimation from './LottieAnimation';
import loadingDots from '@/assets/animations/loading-dots.json';

interface AnimatedSkillBarProps {
  skill: string;
  level: number;
  delay?: number;
}

const AnimatedSkillBar: React.FC<AnimatedSkillBarProps> = ({ skill, level, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, level, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
      transition={{ duration: 0.6, delay }}
      className="skill-bar-container mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{animatedLevel}%</span>
          <div className="w-4 h-4">
            <LottieAnimation 
              animationData={loadingDots} 
              width="16px" 
              height="16px"
              className="opacity-60"
            />
          </div>
        </div>
      </div>
      
      <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${animatedLevel}%` : 0 }}
          transition={{ 
            duration: 1.5, 
            delay: delay + 0.2,
            ease: "easeInOut"
          }}
        />
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: isInView ? '400%' : '-100%' }}
          transition={{ 
            duration: 2, 
            delay: delay + 0.5,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedSkillBar;