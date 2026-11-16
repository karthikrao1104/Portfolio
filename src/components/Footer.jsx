import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Icons } from './BrandIcons';
import { personal } from '../data/personal';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-surface-white border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Credit */}
          <div className="text-center md:text-left">
            <span className="text-base font-bold tracking-tight text-primary">
              {personal.navBrand}
            </span>
            <p className="text-xs text-muted mt-1">
              Designed &amp; Built by {personal.fullName}.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted hover:text-primary border border-surface-border bg-surface-white hover:bg-surface-section transition-colors"
              aria-label="GitHub"
            >
              <Icons.Github className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted hover:text-primary border border-surface-border bg-surface-white hover:bg-surface-section transition-colors"
              aria-label="LinkedIn"
            >
              <Icons.Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-lg text-muted hover:text-primary border border-surface-border bg-surface-white hover:bg-surface-section transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center space-x-5 text-xs text-muted">
            <span>&copy; {new Date().getFullYear()} {personal.fullName}. All Rights Reserved.</span>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 text-primary hover:text-black rounded-lg border border-surface-border bg-surface-white hover:bg-surface-section transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
