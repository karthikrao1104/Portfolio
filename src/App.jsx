import React, { useState } from 'react';
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
import { CursorSpotlight } from './components/CursorSpotlight';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [siteLoaded, setSiteLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white relative">
      {/* Loading Screen */}
      <LoadingScreen onFinish={() => setSiteLoaded(true)} />

      {/* Desktop Spotlight & Scroll Progress */}
      <CursorSpotlight />
      <ScrollProgressBar />

      {/* Sticky Apple-styled Glass Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
