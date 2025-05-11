
import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold gradient-heading font-heading">
              Chaitanya Maddala
            </h2>
            <p className="text-muted-foreground mt-2 text-center">
              AI & Machine Learning Engineer
            </p>
          </div>
          
          <div className="flex space-x-8 mb-8">
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </a>
            <a 
              href="#experience" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/chaitanya-maddala-236" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-muted/30 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/chaitanya-maddala236/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-muted/30 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://leetcode.com/u/AI_MASTER/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-muted/30 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <Code size={20} />
            </a>
          </div>
          
          <div className="text-muted-foreground text-sm">
            <p>&copy; {currentYear} Chaitanya Maddala. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
