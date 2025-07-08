
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingButton = () => {
  const handleClick = () => {
    window.open('http://bit.ly/45Tx1GN', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleClick}
        className="h-14 w-14 rounded-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        size="icon"
      >
        <ExternalLink 
          size={20} 
          className="text-white group-hover:rotate-12 transition-transform duration-300" 
        />
        <span className="sr-only">Visit external link</span>
      </Button>
      
      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
    </div>
  );
};

export default FloatingButton;
