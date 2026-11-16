import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, FileText, ArrowRight } from 'lucide-react';
import { Icons } from './BrandIcons';
import { personalData } from '../data/portfolioData';
import { AppleOrbitalSphere } from './AppleOrbitalSphere';

export const Hero = () => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]"
    >
      {/* Subtle Apple-style Background Ambient Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern overlay with low opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 my-auto">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Small Introductory Pill Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-6 w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-200 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase text-[#A1A1A6]">
              {personalData.title}
            </span>
          </motion.div>

          {/* Main Name Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-white mb-3"
          >
            {personalData.name.toUpperCase()}
          </motion.h1>

          {/* Large Apple-style Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl sm:text-3xl xl:text-4xl font-normal tracking-tight titanium-gradient-text mb-6 leading-snug"
          >
            <div>{personalData.headline1}</div>
            <div className="text-white/90 font-light">{personalData.headline2}</div>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-[#A1A1A6] font-light max-w-xl mb-8 leading-relaxed"
          >
            {personalData.shortBio}
          </motion.p>

          {/* Technology Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2 sm:gap-2.5 mb-10"
          >
            {personalData.techLabels.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-mono tracking-wide text-neutral-300 bg-[#111111] border border-white/10 hover:border-white/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Action Buttons & Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            {/* Explore Work Button */}
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="group inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.15)] active:scale-95"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Download Resume Button */}
            <a
              href={personalData.resumeUrl}
              download="P_Karthik_Rao_Resume.pdf"
              className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/25 transition-all duration-200 active:scale-95"
            >
              <FileText className="w-4 h-4 text-[#A1A1A6]" />
              <span>Download Resume</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pl-2 sm:pl-4 border-l border-white/10">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-[#A1A1A6] hover:text-white bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Icons.Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-[#A1A1A6] hover:text-white bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Icons.Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-3 rounded-full text-[#A1A1A6] hover:text-white bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all duration-200"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Apple-inspired Orbital Sphere Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          <AppleOrbitalSphere />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 cursor-pointer text-[#8E8E93] hover:text-white transition-colors"
        onClick={handleScrollToAbout}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
