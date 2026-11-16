import React from 'react';
import { ArrowRight, Download, Mail, ExternalLink } from 'lucide-react';
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
    <section id="home" className="pt-32 pb-20 md:pt-36 md:pb-28 bg-surface-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-surface-border bg-surface-alt mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-xs font-mono font-medium tracking-wider text-eyebrow uppercase">
                {personal.introEyebrow}
              </span>
            </div>

            {/* Main Full Name */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-3">
              {personal.fullName}
            </h1>

            {/* Professional Headline */}
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary mb-4 leading-snug">
              {personal.headline}
            </h2>

            {/* Concise Professional Description */}
            <p className="text-base sm:text-lg text-body font-normal max-w-xl mb-8 leading-relaxed">
              {personal.summaryShort}
            </p>

            {/* Technology Highlights */}
            <div className="flex flex-wrap gap-2 mb-8">
              {personal.techHighlights.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium text-body bg-surface-section border border-surface-border rounded-md"
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
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold tracking-wide text-surface-white bg-primary hover:bg-black transition-colors shadow-sm active:scale-95"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumePath}
                download="P_Karthik_Rao_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold tracking-wide text-primary bg-surface-white hover:bg-surface-section border border-[#D4D4D4] transition-colors active:scale-95"
              >
                <Download className="w-4 h-4 text-muted" />
                <span>Download My Resume</span>
              </a>

              {/* Social Channels */}
              <div className="flex items-center space-x-2 sm:pl-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-muted hover:text-primary border border-surface-border bg-surface-white hover:bg-surface-section transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Icons.Github className="w-4 h-4" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-muted hover:text-primary border border-surface-border bg-surface-white hover:bg-surface-section transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Icons.Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-lg text-muted hover:text-primary border border-surface-border bg-surface-white hover:bg-surface-section transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Architecture Badge Card / Profile Card Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md card-clean rounded-2xl p-8 bg-surface-white border border-surface-border">
              {/* Profile / Technology Monogram Header */}
              <div className="flex items-center justify-between pb-6 border-b border-surface-border mb-6">
                <div>
                  <div className="text-xs font-mono font-medium text-eyebrow uppercase tracking-wider">
                    Location &amp; Status
                  </div>
                  <div className="text-sm font-semibold text-primary mt-0.5">
                    {personal.location}
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200">
                  Available for Hire
                </div>
              </div>

              {/* Snapshot of Qualifications */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-surface-alt border border-surface-border">
                  <div className="text-xs font-mono text-eyebrow uppercase">Education</div>
                  <div className="text-sm font-semibold text-primary mt-0.5">
                    B.Tech – Artificial Intelligence &amp; Data Science
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    SIMATS Engineering • CGPA: 8.2 / 10
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-alt border border-surface-border">
                  <div className="text-xs font-mono text-eyebrow uppercase">Certifications</div>
                  <div className="text-sm font-semibold text-primary mt-0.5">
                    Oracle Cloud Infrastructure Certified
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    Generative AI Professional &amp; Data Science Specialist
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-alt border border-surface-border">
                  <div className="text-xs font-mono text-eyebrow uppercase">Internships Completed</div>
                  <div className="text-sm font-semibold text-primary mt-0.5">
                    AI Data Analyst &amp; Software Dev
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    Ualytica Solutions &amp; Sandhata Technologies
                  </div>
                </div>
              </div>

              {/* Footer quick link */}
              <div className="pt-2 flex items-center justify-between text-xs text-muted border-t border-surface-border">
                <span>Verified Resume Details</span>
                <a
                  href="#about"
                  onClick={handleScrollTo('about')}
                  className="font-medium text-primary hover:underline flex items-center space-x-1"
                >
                  <span>Read Full Bio</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
