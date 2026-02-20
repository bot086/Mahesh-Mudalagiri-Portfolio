import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NeuronBackground from './components/NeuronBackground';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <NeuronBackground />
      <div className="min-h-screen bg-tech-black selection:bg-tech-gray-800 selection:text-white">
        <Navbar />
        <main>
          <Hero scrollYProgress={scrollYProgress} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
