import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-surface-white text-body selection:bg-primary selection:text-surface-white relative font-sans antialiased">
      {/* Top Reading Progress */}
      <ScrollProgress />

      {/* Clean Sticky Navigation Bar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Minimal Clean Footer */}
      <Footer />

      {/* Quick Scroll Back To Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
