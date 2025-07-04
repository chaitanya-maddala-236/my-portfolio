import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation with rotation and scale
      gsap.fromTo(imageRef.current,
        { 
          opacity: 0, 
          scale: 0.8, 
          rotation: -10,
          x: -100 
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          x: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "center center",
          }
        }
      );

      // Content animation with stagger
      gsap.fromTo(contentRef.current?.children || [],
        { 
          opacity: 0, 
          y: 60,
          x: 50
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            end: "bottom center",
          }
        }
      );

      // Cards animation with 3D effect
      gsap.fromTo(cardsRef.current?.children || [],
        { 
          opacity: 0, 
          y: 80,
          rotationX: 45,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 90%",
            end: "bottom center",
          }
        }
      );

      // Continuous floating animation for the image
      gsap.to(imageRef.current, {
        y: -10,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 bg-background/80">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image with Enhanced Animation */}
          <div className="md:w-1/3 flex justify-center">
            <div ref={imageRef} className="relative group">
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary/40 p-1 transition-all duration-300 group-hover:border-primary/70 group-hover:shadow-2xl group-hover:shadow-primary/20">
                <img
                  src="/lovable-uploads/726463f4-9bd9-4e51-a09b-f55f94f33787.png"
                  alt="Chaitanya Maddala"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-tech-blue via-tech-purple to-tech-teal opacity-20 blur-xl group-hover:opacity-40 group-hover:blur-2xl transition-all duration-300"></div>
              
              {/* Floating particles around image */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-primary/60 rounded-full animate-ping"></div>
              <div className="absolute -bottom-6 -left-6 w-4 h-4 bg-secondary/40 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 -right-8 w-2 h-2 bg-accent/50 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Bio Content with Enhanced Design */}
          <div className="md:w-2/3">
            <div ref={contentRef}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading gradient-heading animate-gradient-x">
                About Me
              </h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-4 leading-relaxed">
                  I'm an AI & Machine Learning Engineer passionate about creating intelligent systems that solve real-world problems. 
                  With expertise in Generative AI, Deep Learning, and Predictive Modeling, I develop solutions that transform complex data into meaningful insights.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  My journey in AI began with a curiosity about how machines learn and has evolved into a deep technical understanding of the latest advancements in the field. 
                  I'm particularly focused on leveraging large language models and neural networks to build practical applications that enhance user experiences and business outcomes.
                </p>
              </div>
            </div>
            
            {/* Info boxes with Enhanced UI */}
            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-card p-5 rounded-xl border border-border/40 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/5">
                <h3 className="text-sm text-primary/80 mb-2 font-semibold uppercase tracking-wider">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-3">
                    <p className="font-medium text-foreground/90">VNR Vignana Jyothi Institute of Engineering and Technology</p>
                    <p className="text-sm text-muted-foreground">B.Tech in Artificial Intelligence and Data Science</p>
                    <p className="text-xs text-primary/70 font-medium mt-1">Present</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-3">
                    <p className="font-medium text-foreground/90">Institute of Electronics</p>
                    <p className="text-sm text-muted-foreground">Diploma in Artificial Intelligence and Machine Learning</p>
                    <p className="text-xs text-primary/70 font-medium mt-1">2021-2024</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-card p-5 rounded-xl border border-border/40 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/5 h-1/2">
                  <h3 className="text-sm text-primary/80 font-semibold uppercase tracking-wider">Experience</h3>
                  <p className="font-medium mt-2">AI & ML Engineering</p>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary/70 to-secondary/70 rounded-full mt-2"></div>
                </div>
                <div className="bg-card p-5 rounded-xl border border-border/40 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/5 h-1/2">
                  <h3 className="text-sm text-primary/80 font-semibold uppercase tracking-wider">Specialization</h3>
                  <p className="font-medium mt-2">Generative AI & LLMs</p>
                  <div className="h-1 w-20 bg-gradient-to-r from-secondary/70 to-accent/70 rounded-full mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
