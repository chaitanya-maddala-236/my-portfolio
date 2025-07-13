import React from 'react';
import LottieAnimation from './LottieAnimation';
import { motion } from 'framer-motion';

interface AnimatedIconProps {
  animationData: any;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  trigger?: 'hover' | 'view' | 'always';
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  animationData,
  className = '',
  size = 'md',
  trigger = 'always'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <motion.div 
      className={`${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <LottieAnimation 
        animationData={animationData}
        loop={trigger === 'always'}
        autoplay={trigger === 'always' || trigger === 'view'}
      />
    </motion.div>
  );
};

export default AnimatedIcon;