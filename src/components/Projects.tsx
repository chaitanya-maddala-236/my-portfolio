
import React, { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  ExternalLink, 
  MonitorSmartphone,
  FileCode,
  Brain,
  ChartLine,
  Bot
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LottieAnimation from './LottieAnimation';
import floatingIcons from '@/assets/animations/floating-icons.json';
import rocketLaunch from '@/assets/animations/rocket-launch.json';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Financial Stock Analysis using LlamaIndex",
      description: "A financial analysis system that uses LlamaIndex to process and analyze stock market data, providing insights and recommendations based on historical trends.",
      tags: ["LlamaIndex", "GPT", "Python", "Financial Analysis", "VectorDB"],
      icon: <ChartLine size={28} />,
      githubUrl: "https://github.com/chaitanya-maddala-236/financial-stock-analysis",
      liveUrl: "#"
    },
    {
      title: "Medical Chatbot with LLM",
      description: "A medical assistant chatbot built using large language models, capable of providing accurate medical information while ensuring ethical guidelines are followed.",
      tags: ["LangChain", "Medical NLP", "PyTorch", "Healthcare", "LLM Fine-tuning"],
      icon: <Bot size={28} />,
      githubUrl: "https://github.com/chaitanya-maddala-236/medical-chatbot",
      liveUrl: "#"
    },
    {
      title: "Image Generation using GANs",
      description: "A generative adversarial network model for creating realistic images based on textual descriptions, with applications in creative design and content generation.",
      tags: ["TensorFlow", "GANs", "Computer Vision", "Deep Learning", "CUDA"],
      icon: <MonitorSmartphone size={28} />,
      githubUrl: "https://github.com/chaitanya-maddala-236/gan-image-generator",
      liveUrl: "#"
    },
    {
      title: "Stock Price Prediction using LSTM",
      description: "A machine learning model using Long Short-Term Memory networks to predict stock prices based on historical data and market trends.",
      tags: ["LSTM", "Time Series", "Keras", "Data Visualization", "Financial ML"],
      icon: <ChartLine size={28} />,
      githubUrl: "https://github.com/chaitanya-maddala-236/stock-prediction-lstm",
      liveUrl: "#"
    },
    {
      title: "AI-Based Recommendation System",
      description: "A personalized recommendation engine using collaborative filtering and content-based approaches to suggest products or content to users.",
      tags: ["Recommendation Systems", "Python", "scikit-learn", "Matrix Factorization"],
      icon: <Brain size={28} />,
      githubUrl: "https://github.com/chaitanya-maddala-236/ai-recommendation",
      liveUrl: "#"
    },
    {
      title: "Automated Code Documentation Tool",
      description: "An AI tool that automatically generates code documentation from source code using natural language processing techniques.",
      tags: ["NLP", "Code Analysis", "GPT", "Developer Tools", "Python"],
      icon: <FileCode size={28} />,
      githubUrl: "https://github.com/chaitanya-maddala-236/code-documenter",
      liveUrl: "#"
    }
  ];

  useEffect(() => {
    // Animate project cards on scroll
    gsap.fromTo(projectsRef.current?.querySelectorAll('.project-card') || [], 
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%",
          end: "bottom 20%",
        }
      }
    );
  }, []);

  return (
    <section ref={projectsRef} id="projects" className="py-24 relative bg-background">
      {/* Floating Lottie Animations */}
      <div className="absolute top-10 left-10 w-20 h-20 opacity-25">
        <LottieAnimation animationData={floatingIcons} />
      </div>
      <div className="absolute top-1/2 right-10 w-28 h-28 opacity-20">
        <LottieAnimation animationData={rocketLaunch} />
      </div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 opacity-15">
        <LottieAnimation animationData={floatingIcons} />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background via-muted/5 to-background"></div>
      
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading text-center gradient-heading">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Showcasing my work in AI, machine learning, and intelligent systems
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card bg-card rounded-xl overflow-hidden border border-border card-hover flex flex-col hover:scale-105 transition-all duration-300"
            >
              {/* Project header with icon */}
              <div className="p-6 border-b border-border bg-muted/30">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors duration-200">
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-background/80 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-background/80 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project content */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-muted/50 hover:bg-primary/20 transition-colors duration-200">{tag}</Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="bg-muted/50">+{project.tags.length - 3}</Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-200">
            <a href="https://github.com/chaitanya-maddala-236" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={18} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
