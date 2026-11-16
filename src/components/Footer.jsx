import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Icons } from './BrandIcons';
import { personalData } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-14 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Attribution */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="text-base font-light tracking-[0.25em] text-white">
            KARTHIK<span className="text-[#8E8E93]">.</span>
          </span>
          <p className="text-xs text-[#8E8E93] font-light">
            Designed &amp; Built by {personalData.name}.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-[#A1A1A6] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors"
            aria-label="GitHub"
          >
            <Icons.Github className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-[#A1A1A6] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors"
            aria-label="LinkedIn"
          >
            <Icons.Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="p-2.5 rounded-full text-[#A1A1A6] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center space-x-6">
          <p className="text-xs text-[#8E8E93] font-mono">
            &copy; {new Date().getFullYear()} {personalData.name}. All Rights Reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full text-[#A1A1A6] hover:text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
