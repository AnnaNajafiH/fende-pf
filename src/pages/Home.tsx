import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/ProjectsSection";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certificates from "../components/Certificates";
import Champions from "../components/Champions";
import Contact from "../components/ContactSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Champions />
      <Contact />
    </div>
  );
};

export default Home;
