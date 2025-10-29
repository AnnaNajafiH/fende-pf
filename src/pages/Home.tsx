import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ExperienceSection from "../components/ExperienceSection";
// import Education from "../components/Education";
import Certificates from "../components/Certificates";
import Champions from "../components/Champions";
import Contact from "../components/ContactSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ExperienceSection />
      {/* <Education /> */}
      <Certificates />
      <Champions />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
