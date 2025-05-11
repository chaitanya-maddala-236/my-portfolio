
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Neural pattern background with overlay */}
      <div className="absolute inset-0 bg-neural-pattern opacity-20"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-tech-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="opacity-0 animate-fade-in [animation-delay:0.2s]">
            <p className="text-accent mb-3 font-medium">AI & MACHINE LEARNING ENGINEER</p>
          </div>

          <div className="opacity-0 animate-fade-in [animation-delay:0.4s]">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6">
              <span className="gradient-heading">
                Chaitanya Maddala
              </span>
            </h1>
          </div>

          <div className="opacity-0 animate-fade-in [animation-delay:0.6s]">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
              Transforming Data into Intelligent Solutions
            </p>
          </div>

          <div className="opacity-0 animate-fade-in [animation-delay:0.8s] flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6" asChild>
              <a href="#projects">
                <Code className="mr-2 h-5 w-5" />
                View Projects
              </a>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-6" asChild>
              <a href="#contact">
                <Globe className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>
          
          <div className="opacity-0 animate-fade-in [animation-delay:1.2s] absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
              <span className="mb-2 text-sm">Scroll Down</span>
              <ArrowDown className="animate-bounce" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
