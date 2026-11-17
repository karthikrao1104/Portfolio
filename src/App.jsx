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
import { BackgroundUI } from './components/BackgroundUI';
import { CursorSpotlight } from './components/CursorSpotlight';

function App() {
  return (
    <div className="min-h-screen text-neutral-800 selection:bg-neutral-900 selection:text-white relative font-sans antialiased">
      {/* Dynamic Ambient Background System */}
      <BackgroundUI />

      {/* Interactive Cursor Spotlight */}
      <CursorSpotlight />

      {/* Top Reading Progress */}
      <ScrollProgress />

      {/* Clean Sticky Navigation Bar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
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
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Quick Scroll Back To Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
