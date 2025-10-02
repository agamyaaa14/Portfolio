import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-poppins scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;