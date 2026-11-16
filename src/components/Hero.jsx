import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, Database, Brain, Code2, LineChart, ShieldCheck } from 'lucide-react';
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
    <section id="home" className="relative pt-32 pb-20 md:pt-36 md:pb-28 bg-white overflow-hidden border-b border-slate-200">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-blue-100/60 via-indigo-50/40 to-transparent rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-sky-100/50 via-blue-50/30 to-transparent rounded-full blur-3xl pointer-events-none -ml-28" />
      <div className="absolute inset-0 bg-grid-slate [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_85%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-sm mb-6 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider text-blue-900 uppercase">
                {personal.introEyebrow}
              </span>
              <span className="text-blue-300">•</span>
              <span className="text-[11px] font-mono text-blue-700">Available For Impact</span>
            </div>

            {/* Main Full Name */}
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-3">
              {personal.fullName}
            </h1>

            {/* Professional Headline with Gradient Accents */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 leading-snug">
              <span className="text-slate-900">Building Intelligent Solutions with </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                Data, AI &amp; Technology.
              </span>
            </h2>

            {/* Concise Professional Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mb-8 leading-relaxed">
              {personal.summaryShort}
            </p>

            {/* Interactive Technology Highlights */}
            <div className="flex flex-wrap gap-2 mb-8">
              {personal.techHighlights.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 text-xs font-mono font-medium text-slate-800 bg-white border border-slate-200 rounded-lg shadow-xs hover:border-blue-400 hover:text-blue-600 transition-colors"
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
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-white bg-slate-900 hover:bg-blue-600 transition-all shadow-md hover:shadow-blue-500/25 active:scale-95"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumePath}
                download="P_Karthik_Rao_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs hover:border-slate-400 active:scale-95"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Download My Resume</span>
              </a>

              {/* Social Channels */}
              <div className="flex items-center space-x-2 sm:pl-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-600 hover:text-slate-900 border border-slate-200 bg-white hover:bg-slate-50 shadow-xs transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Icons.Github className="w-4 h-4" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-600 hover:text-blue-600 border border-slate-200 bg-white hover:bg-slate-50 shadow-xs transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Icons.Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="p-3 rounded-xl text-slate-600 hover:text-rose-600 border border-slate-200 bg-white hover:bg-slate-50 shadow-xs transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tech Blueprint & Verified Status Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md card-premium rounded-2xl p-7 bg-white/90 backdrop-blur-md border border-slate-200 shadow-premium">
              {/* Header with verified badge */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-500/20">
                    KR
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">P. Karthik Rao</div>
                    <div className="text-xs text-slate-500 font-mono">{personal.location}</div>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Available</span>
                </div>
              </div>

              {/* Verified Domain Pillars */}
              <div className="space-y-3.5 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start space-x-3 hover:bg-blue-50/40 hover:border-blue-200 transition-colors">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-slate-500 uppercase">Data Analytics &amp; SQL</div>
                    <div className="text-sm font-bold text-slate-900">75,000+ Sales Records Analyzed</div>
                    <div className="text-xs text-slate-600 mt-0.5">Ualytica Solutions • Power BI &amp; Advanced SQL</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start space-x-3 hover:bg-indigo-50/40 hover:border-indigo-200 transition-colors">
                  <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-slate-500 uppercase">Machine Learning &amp; AI</div>
                    <div className="text-sm font-bold text-slate-900">Oracle OCI Certified Generative AI Pro</div>
                    <div className="text-xs text-slate-600 mt-0.5">Computer Vision (OpenCV), TensorFlow &amp; TimeSeries</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start space-x-3 hover:bg-sky-50/40 hover:border-sky-200 transition-colors">
                  <div className="p-2 rounded-lg bg-sky-100 text-sky-700">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-slate-500 uppercase">Full-Stack Development</div>
                    <div className="text-sm font-bold text-slate-900">Django Backend &amp; React Frontend</div>
                    <div className="text-xs text-slate-600 mt-0.5">Sandhata Technologies • Git &amp; Linux Workflows</div>
                  </div>
                </div>
              </div>

              {/* Bottom Education Strip */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1.5 text-slate-500 font-mono">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>SIMATS AI &amp; DS (8.2 CGPA)</span>
                </div>
                <a
                  href="#about"
                  onClick={handleScrollTo('about')}
                  className="font-semibold text-blue-600 hover:text-blue-800 flex items-center space-x-1"
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
