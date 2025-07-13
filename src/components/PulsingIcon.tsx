import React from 'react';
import { motion } from 'framer-motion';
import LottieAnimation from './LottieAnimation';

interface PulsingIconProps {
  animationData: any;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const PulsingIcon: React.FC<PulsingIconProps> = ({
  animationData,
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <motion.div 
      className={`${sizeClasses[size]} ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <LottieAnimation 
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </motion.div>
  );
};

export default PulsingIcon;