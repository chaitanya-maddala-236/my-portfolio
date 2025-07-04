
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Globe } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate hero elements with GSAP
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50, scale: 0.8 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "back.out(1.7)" }
    )
    .fromTo(subtitleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 
      "-=0.8"
    )
    .fromTo(buttonsRef.current, 
      { opacity: 0, y: 30, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.2)" }, 
      "-=0.6"
    );

    // Floating animation for the gradient orbs
    gsap.to(".gradient-orb-1", {
      y: -20,
      x: 10,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    gsap.to(".gradient-orb-2", {
      y: 15,
      x: -15,
      duration: 3.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Neural pattern background with overlay */}
      <div className="absolute inset-0 bg-neural-pattern opacity-20"></div>
      
      {/* Enhanced gradient orbs with GSAP animation */}
      <div className="gradient-orb-1 absolute top-1/4 -left-40 w-80 h-80 bg-tech-purple/20 rounded-full blur-3xl"></div>
      <div className="gradient-orb-2 absolute bottom-10 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <p className="text-accent font-medium">AI & MACHINE LEARNING ENGINEER</p>
          </div>

          <div>
            <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 opacity-0">
              <span className="gradient-heading">
                Chaitanya Maddala
              </span>
            </h1>
          </div>

          <div>
            <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8 opacity-0">
              Transforming Data into Intelligent Solutions
            </p>
          </div>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 hover:scale-105 transition-transform duration-200" asChild>
              <a href="#projects">
                <Code className="mr-2 h-5 w-5" />
                View Projects
              </a>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-6 hover:scale-105 transition-transform duration-200" asChild>
              <a href="#contact">
                <Globe className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
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
