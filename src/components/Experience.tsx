
import React from 'react';
import { 
  Briefcase, Calendar, ChevronRight
} from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Generative AI Intern",
      company: "Skillible",
      duration: "July 2024 - August 2024",
      description: "Gained hands-on experience in Generative AI, focusing on understanding the fundamental concepts. Explored various prompting techniques to effectively interact with AI models. Learned about model behaviors and how to optimize inputs for better outputs.",
      skills: ["Generative AI", "Prompt Engineering", "AI Models", "Collaborative Projects"]
    },
    {
      title: "Intern",
      company: "Industech",
      duration: "Dec 2023 - May 2024",
      description: "Applied machine learning techniques to develop predictive models using scikit-learn. Assisted in automating workflows, improving operational efficiency across multiple tasks. Gained practical experience in model training and optimization for real-time applications.",
      skills: ["Machine Learning", "scikit-learn", "Workflow Automation", "Model Optimization"]
    },
    {
      title: "Intern",
      company: "Verzeo",
      duration: "Sep 2022 - Oct 2022",
      description: "Worked on data analysis using Python and scikit-learn to develop predictive models. Developed solutions for improving data processing efficiency with MySQL. Contributed to projects that involved handling large datasets and extracting actionable insights.",
      skills: ["Data Analysis", "Python", "scikit-learn", "MySQL", "Large Datasets"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-background">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background via-muted/5 to-background"></div>
      
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading text-center gradient-heading">
          Professional Experience
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          My journey building AI solutions across different organizations
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-tech-blue via-tech-purple to-tech-teal"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative z-10">
                <div className={`flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <Briefcase size={14} className="text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'} pl-16 sm:pl-0`}>
                    <div className="bg-card rounded-lg p-6 border border-border card-hover">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <span className="mr-4">{exp.company}</span>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      <p className="mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="tech-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
