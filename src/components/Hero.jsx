import React from 'react';
import { ArrowRight, Download, Mail, Database, Brain, Code2, ShieldCheck } from 'lucide-react';
import { Icons } from './BrandIcons';
import { personal } from '../data/personal';

export const Hero = () => {
  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-36 md:pb-24 bg-white overflow-hidden">
      {/* Subtle Monochrome Tech Grid Background */}
      <div className="absolute inset-0 bg-grid-monochrome [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_90%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-neutral-100 mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-neutral-900" />
              <span className="text-xs font-mono font-medium tracking-wider text-neutral-800 uppercase">
                {personal.introEyebrow}
              </span>
            </div>

            {/* Main Full Name */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 mb-3">
              {personal.fullName}
            </h1>

            {/* Professional Headline in Pure Neutral Contrast */}
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mb-4 leading-snug">
              Building Intelligent Solutions with Data, AI &amp; Technology.
            </h2>

            {/* Concise Professional Description */}
            <p className="text-base sm:text-lg text-neutral-600 font-normal max-w-xl mb-8 leading-relaxed">
              {personal.summaryShort}
            </p>

            {/* Technology Highlights */}
            <div className="flex flex-wrap gap-2 mb-8">
              {personal.techHighlights.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 text-xs font-mono font-medium text-neutral-800 bg-neutral-100 border border-neutral-200 rounded-lg hover:border-neutral-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={handleScrollTo('projects')}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-white bg-neutral-900 hover:bg-neutral-800 transition-all shadow-xs active:scale-95"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumePath}
                download="P_Karthik_Rao_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-neutral-900 bg-white hover:bg-neutral-50 border border-neutral-300 transition-all shadow-2xs hover:border-neutral-400 active:scale-95"
              >
                <Download className="w-4 h-4 text-neutral-500" />
                <span>Download My Resume</span>
              </a>

              {/* Social Channels */}
              <div className="flex items-center space-x-2 sm:pl-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-neutral-700 hover:text-neutral-950 border border-neutral-200 bg-white hover:bg-neutral-100 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Icons.Github className="w-4 h-4" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-neutral-700 hover:text-neutral-950 border border-neutral-200 bg-white hover:bg-neutral-100 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Icons.Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="p-3 rounded-xl text-neutral-700 hover:text-neutral-950 border border-neutral-200 bg-white hover:bg-neutral-100 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Monochrome Architecture & Verified Status Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md card-monochrome rounded-2xl p-7 bg-white">
              {/* Header with verified badge */}
              <div className="flex items-center justify-between pb-5 border-b border-neutral-100 mb-5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-sm">
                    KR
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-900">P. Karthik Rao</div>
                    <div className="text-xs text-neutral-500 font-mono">{personal.location}</div>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full text-xs font-mono font-medium text-neutral-800 bg-neutral-100 border border-neutral-200 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                  <span>Available</span>
                </div>
              </div>

              {/* Verified Domain Pillars in Black & Grey */}
              <div className="space-y-3.5 mb-6">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start space-x-3 hover:bg-neutral-100 transition-colors">
                  <div className="p-2 rounded-lg bg-neutral-200 text-neutral-900">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-neutral-500 uppercase">Data Analytics &amp; SQL</div>
                    <div className="text-sm font-bold text-neutral-900">75,000+ Sales Records Analyzed</div>
                    <div className="text-xs text-neutral-600 mt-0.5">Ualytica Solutions • Power BI &amp; Advanced SQL</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start space-x-3 hover:bg-neutral-100 transition-colors">
                  <div className="p-2 rounded-lg bg-neutral-200 text-neutral-900">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-neutral-500 uppercase">Machine Learning &amp; AI</div>
                    <div className="text-sm font-bold text-neutral-900">Oracle OCI Certified Generative AI Pro</div>
                    <div className="text-xs text-neutral-600 mt-0.5">Computer Vision (OpenCV), TensorFlow &amp; TimeSeries</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start space-x-3 hover:bg-neutral-100 transition-colors">
                  <div className="p-2 rounded-lg bg-neutral-200 text-neutral-900">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-neutral-500 uppercase">Full-Stack Development</div>
                    <div className="text-sm font-bold text-neutral-900">Django Backend &amp; React Frontend</div>
                    <div className="text-xs text-neutral-600 mt-0.5">Sandhata Technologies • Git &amp; Linux Workflows</div>
                  </div>
                </div>
              </div>

              {/* Bottom Education Strip */}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1.5 text-neutral-500 font-mono">
                  <ShieldCheck className="w-4 h-4 text-neutral-800" />
                  <span>SIMATS AI &amp; DS (8.2 CGPA)</span>
                </div>
                <a
                  href="#about"
                  onClick={handleScrollTo('about')}
                  className="font-semibold text-neutral-900 hover:underline flex items-center space-x-1"
                >
                  <span>Explore Bio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
