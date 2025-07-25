import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, Variants } from 'framer-motion';
import LottieAnimation from './LottieAnimation';
import rocketLaunch from '@/assets/animations/rocket-launch.json';
import loadingDots from '@/assets/animations/loading-dots.json';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLImageElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced background animation
      gsap.to(".gradient-orb-1", {
        y: -30,
        x: 20,
        rotation: 360,
        duration: 6,
        ease: "none",
        yoyo: true,
        repeat: -1
      });

      gsap.to(".gradient-orb-2", {
        y: 25,
        x: -25,
        rotation: -360,
        duration: 8,
        ease: "none",
        yoyo: true,
        repeat: -1
      });

      // Parallax effect for hero elements
      gsap.to(backgroundRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Fade out hero content on scroll
      gsap.to([titleRef.current, subtitleRef.current, buttonsRef.current], {
        opacity: 0.3,
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "center top",
          end: "bottom top",
          scrub: true
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Fixed Framer Motion variants with proper typing
  const nameVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.68, -0.55, 0.265, 1.55],
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55]
      }
    }
  };

  const name = "Chaitanya Maddala";

  return (
    <div ref={heroRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Enhanced neural pattern background */}
      <div ref={backgroundRef} className="absolute inset-0 bg-neural-pattern opacity-30"></div>
      
      {/* Enhanced gradient orbs with more complex animations */}
      <div className="gradient-orb-1 absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/25 rounded-full blur-3xl"></div>
      <div className="gradient-orb-2 absolute bottom-10 -right-40 w-[500px] h-[500px] bg-gradient-to-l from-secondary/25 via-primary/30 to-accent/20 rounded-full blur-3xl"></div>
      
      {/* Lottie Animations */}
      <div className="absolute top-20 right-10 w-24 h-24 opacity-60">
        <LottieAnimation animationData={rocketLaunch} />
      </div>
      <div className="absolute bottom-20 left-10 w-16 h-16 opacity-40">
        <LottieAnimation animationData={loadingDots} />
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-primary/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-secondary/30 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-10 w-3 h-3 bg-accent/50 rounded-full animate-ping"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent font-medium tracking-wider">AI & MACHINE LEARNING ENGINEER</p>
          </motion.div>

          <motion.div
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="perspective-1000 mb-6"
          >
            <motion.img
              ref={titleRef}
              src="/lovable-uploads/ef664876-0a5a-4784-84b8-a7cf304da569.png"
              alt="Chaitanya Maddala"
              className="h-16 md:h-24 lg:h-32 w-auto mx-auto object-contain hover:scale-105 transition-transform duration-300"
              variants={letterVariants}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
              Transforming Data into Intelligent Solutions
            </p>
          </motion.div>

          <motion.div 
            ref={buttonsRef} 
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 2, ease: [0.68, -0.55, 0.265, 1.55] }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25" asChild>
              <a href="#projects" data-barba-prevent="self">
                <Code className="mr-2 h-5 w-5" />
                View Projects
              </a>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-6 hover:scale-105 transition-all duration-300 backdrop-blur-sm" asChild>
              <a href="#contact" data-barba-prevent="self">
                <Globe className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group" data-barba-prevent="self">
              <span className="mb-2 text-sm group-hover:scale-110 transition-transform">Scroll Down</span>
              <ArrowDown className="animate-bounce group-hover:scale-110 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
