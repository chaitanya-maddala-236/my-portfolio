
import React, { useEffect, useRef } from 'react';
import { Progress } from "@/components/ui/progress";
import { 
  Code, Database, Brain, Server, 
  BarChart, GitBranch, Globe, Terminal 
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedIcon from './AnimatedIcon';
import loadingDots from '@/assets/animations/loading-dots.json';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const progressBarsRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "TensorFlow", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "LangChain", level: 90 },
    { name: "LlamaIndex", level: 85 },
    { name: "Java", level: 80 },
    { name: "SQL", level: 85 },
    { name: "C/C++", level: 75 },
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code />,
      skills: ["Python", "JavaScript", "Java", "SQL", "C/C++"],
    },
    {
      title: "AI & ML Technologies",
      icon: <Brain />,
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "LangChain", "LlamaIndex", "Hugging Face"],
    },
    {
      title: "Databases",
      icon: <Database />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Pinecone", "Vector DBs"],
    },
    {
      title: "Development Tools",
      icon: <GitBranch />,
      skills: ["Git", "GitHub", "Docker", "Jupyter Notebooks"],
    },
    {
      title: "Data Visualization",
      icon: <BarChart />,
      skills: ["Matplotlib", "Seaborn", "Plotly", "Dashboard Design"],
    },
    {
      title: "Web Technologies",
      icon: <Globe />,
      skills: ["REST APIs", "FastAPI", "Flask", "Basic Frontend"],
    },
  ];

  useEffect(() => {
    // Animate progress bars on scroll
    gsap.fromTo(progressBarsRef.current?.children || [], 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: progressBarsRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    // Animate skill categories
    gsap.fromTo(categoriesRef.current?.children || [], 
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: categoriesRef.current,
          start: "top 85%",
          end: "bottom 20%",
        }
      }
    );

  }, []);

  return (
    <section ref={skillsRef} id="skills" className="py-24 relative bg-background">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background/0 via-muted/5 to-background"></div>
      
      <div className="section-container relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading text-center gradient-heading">
          Technical Skills
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          My expertise spans across various AI and ML technologies, with a focus on building intelligent systems
        </p>
        
        <div className="mb-16">
          <div ref={progressBarsRef} className="grid md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
        
        <div ref={categoriesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 border border-border card-hover hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-md text-primary mr-3">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="tech-tag hover:bg-primary/20 transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
