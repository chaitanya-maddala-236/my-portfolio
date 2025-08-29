
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        className="relative h-16 w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group z-10"
        size="icon"
      >
        <ExternalLink 
          size={24} 
          className="text-white group-hover:rotate-12 transition-transform duration-300" 
        />
        <span className="sr-only">Visit external link</span>
      </Button>
    </div>
  );
};

export default FloatingButton;
