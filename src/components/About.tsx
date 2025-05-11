
import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-background/80">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary/40 p-1">
                <img
                  src="/lovable-uploads/72b8105f-506c-4cae-9076-e7c19d1b0681.png"
                  alt="Chaitanya Maddala"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-tech-blue via-tech-purple to-tech-teal opacity-20 blur-xl"></div>
            </div>
          </div>
          
          {/* Bio Content */}
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading gradient-heading">
              About Me
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-4">
                I'm an AI & Machine Learning Engineer passionate about creating intelligent systems that solve real-world problems. 
                With expertise in Generative AI, Deep Learning, and Predictive Modeling, I develop solutions that transform complex data into meaningful insights.
              </p>
              <p className="text-lg mb-6">
                My journey in AI began with a curiosity about how machines learn and has evolved into a deep technical understanding of the latest advancements in the field. 
                I'm particularly focused on leveraging large language models and neural networks to build practical applications that enhance user experiences and business outcomes.
              </p>
            </div>
            
            {/* Contact & Education */}
            <div className="mt-6 mb-8">
              <p className="flex items-center text-muted-foreground">
                <span className="mr-2">📧</span>
                <a href="mailto:chaitanyaa.2006@gmail.com" className="hover:text-primary transition-colors">
                  chaitanyaa.2006@gmail.com
                </a>
              </p>
            </div>
            
            {/* Info boxes */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-muted p-4 rounded-md w-full">
                <h3 className="text-sm text-muted-foreground mb-1">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">VNR Vignana Jyothi Institute of Engineering and Technology</p>
                    <p className="text-sm text-muted-foreground">B.Tech in Artificial Intelligence and Data Science</p>
                    <p className="text-xs text-muted-foreground">Present</p>
                  </div>
                  <div>
                    <p className="font-medium">Institute of Electronics</p>
                    <p className="text-sm text-muted-foreground">Diploma in Artificial Intelligence and Machine Learning</p>
                    <p className="text-xs text-muted-foreground">2021-2024</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-md w-full sm:w-48">
                <h3 className="text-sm text-muted-foreground">Experience</h3>
                <p className="font-medium">AI & ML Engineering</p>
              </div>
              <div className="bg-muted p-4 rounded-md w-full sm:w-48">
                <h3 className="text-sm text-muted-foreground">Specialization</h3>
                <p className="font-medium">Generative AI & LLMs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
