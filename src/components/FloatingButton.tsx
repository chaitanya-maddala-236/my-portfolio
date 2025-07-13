
import React from 'react';
import { Button } from '@/components/ui/button';
import LottieAnimation from './LottieAnimation';
import successCheck from '@/assets/animations/success-check.json';

const FloatingButton = () => {
  const handleClick = () => {
    console.log('FloatingButton clicked - redirecting to:', 'http://bit.ly/45Tx1GN');
    window.open('http://bit.ly/45Tx1GN', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative">
      {/* Pulse animation ring - positioned behind the button */}
      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping -z-10"></div>
      
      <Button
        onClick={handleClick}
        className="relative px-6 py-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group z-10 text-white font-medium flex items-center gap-2"
      >
        <div className="w-5 h-5">
          <LottieAnimation 
            animationData={successCheck} 
            width="20px" 
            height="20px"
            className="opacity-80"
          />
        </div>
        Resume
      </Button>
    </div>
  );
};

export default FloatingButton;
