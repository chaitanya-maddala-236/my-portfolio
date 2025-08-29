
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Chaitanya Maddala | AI & ML Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <div className="flex justify-center py-12">
        <FloatingButton />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
