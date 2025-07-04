
import React from 'react';
import { 
  Briefcase, Calendar, ChevronRight
} from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Campus Ambassador",
      company: "GirlScript Summer of Code",
      location: "Remote",
      duration: "June 2025 - October 2025",
      description: "Promoted open-source culture by organizing info sessions, tech talks, and encouraging student contributions. Acted as a communication bridge between participants and organizers, improving engagement and participation.",
      highlights: [
        "Led initiatives to raise awareness of the program, expanding outreach across multiple student communities",
        "Organized technical workshops and mentorship sessions",
        "Facilitated community engagement and project collaboration"
      ],
      skills: ["Community Management", "Open Source", "Event Organization", "Technical Mentorship"]
    },
    {
      title: "AI Developer Intern",
      company: "Summer of AI Program",
      location: "Remote",
      duration: "July 2025 - August 2025",
      description: "Developed and deployed AI models in team projects by applying supervised learning pipelines, resulting in functional ML applications. Applied MLOps principles and best practices to streamline model training, deployment, and experimentation.",
      highlights: [
        "Received structured mentorship and completed real-world tasks aligned with AI production workflows",
        "Implemented end-to-end ML pipelines from data preprocessing to model deployment",
        "Collaborated on cross-functional teams to deliver production-ready AI solutions"
      ],
      skills: ["Machine Learning", "MLOps", "Model Deployment", "Supervised Learning", "Team Collaboration"]
    },
    {
      title: "Generative AI Intern",
      company: "Skillible",
      location: "Remote",
      duration: "July 2024 - August 2024",
      description: "Explored foundational concepts in Generative AI and prompting techniques to optimize interaction with language models. Conducted experiments to understand model behaviors and refine input strategies for content generation use cases.",
      highlights: [
        "Collaborated on internal AI projects using generation tools, enhancing prompt design and output quality",
        "Developed expertise in prompt engineering and model optimization techniques",
        "Contributed to research on AI model behavior and response quality improvement"
      ],
      skills: ["Generative AI", "Prompt Engineering", "AI Models", "Content Generation", "Research"]
    },
    {
      title: "Machine Learning Intern",
      company: "Industech",
      location: "Hyderabad, India",
      duration: "Dec 2023 - May 2024",
      description: "Built and fine-tuned predictive models using scikit-learn to analyze operational data, enhancing real-time decision making. Automated ETL workflows using Python, reducing data handling time and increasing pipeline efficiency.",
      highlights: [
        "Applied model evaluation techniques and feature engineering to improve overall model performance",
        "Developed automated data processing pipelines that reduced manual work by 60%",
        "Implemented real-time monitoring systems for model performance tracking"
      ],
      skills: ["Machine Learning", "scikit-learn", "Python", "ETL Workflows", "Feature Engineering"]
    },
    {
      title: "Data Science Intern",
      company: "Verzeo",
      location: "Remote",
      duration: "Sep 2022 - Oct 2022",
      description: "Designed predictive models using Python and scikit-learn to analyze customer behavior patterns from large datasets. Utilized MySQL to optimize queries and improve backend data processing efficiency.",
      highlights: [
        "Delivered data-driven insights to project teams by extracting and cleaning raw data for actionable analysis",
        "Improved database query performance by 40% through optimization techniques",
        "Created comprehensive data visualizations and reports for stakeholder presentations"
      ],
      skills: ["Data Science", "Python", "scikit-learn", "MySQL", "Data Analysis", "Data Visualization"]
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
          My journey building AI solutions and contributing to open-source communities
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
                      <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground mb-4 space-y-1 sm:space-y-0">
                        <span className="mr-4 font-medium">{exp.company}</span>
                        <span className="mr-4 text-sm">{exp.location}</span>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>
                      <p className="mb-4 text-sm leading-relaxed">{exp.description}</p>
                      
                      {/* Key highlights */}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start text-sm text-muted-foreground">
                              <ChevronRight size={14} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Skills */}
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
