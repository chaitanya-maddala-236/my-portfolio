
import React from 'react';
import { 
  Briefcase, Calendar, ChevronRight
} from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "TechCorp AI",
      duration: "2023 - Present",
      description: "Developing and deploying advanced AI models focusing on natural language processing and generative AI. Built a financial analysis system using LlamaIndex and GPT models.",
      skills: ["LangChain", "LlamaIndex", "PyTorch", "GPT Integration", "Vector Databases"]
    },
    {
      title: "AI Research Assistant",
      company: "Research Institute",
      duration: "2022 - 2023",
      description: "Conducted research on medical applications of large language models. Created a prototype medical chatbot that provides accurate information while adhering to medical ethics.",
      skills: ["Medical NLP", "LLM Fine-tuning", "Healthcare Data Processing", "Python", "Research Methodologies"]
    },
    {
      title: "Data Science Intern",
      company: "Data Insights Inc",
      duration: "2021 - 2022",
      description: "Analyzed large datasets to extract meaningful insights for business decisions. Built predictive models using machine learning algorithms for stock price prediction.",
      skills: ["Data Analysis", "LSTM Networks", "Time Series Forecasting", "scikit-learn", "Pandas"]
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
