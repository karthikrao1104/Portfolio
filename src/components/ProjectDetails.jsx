import React, { useEffect } from 'react';
import { X, CheckCircle2, ExternalLink } from 'lucide-react';
import { Icons } from './BrandIcons';

export const ProjectDetails = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      // Prevent body scroll and hide navbar
      document.body.classList.add('modal-open');
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.classList.remove('modal-open');
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider mb-1">
          PROJECT SPECIFICATION • {project.number}
        </div>

        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
          {project.title}
        </h3>

        <div className="text-sm font-medium text-neutral-600 mb-6">
          {project.tagline}
        </div>

        {/* Problem Statement */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2 font-semibold">
            Problem Statement
          </h4>
          <p className="text-sm text-neutral-700 leading-relaxed bg-neutral-50 p-4 rounded-xl border border-neutral-200">
            {project.problemStatement}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3 font-semibold">
            Key Architecture &amp; Features
          </h4>
          <ul className="space-y-2.5">
            {project.keyFeatures.map((feat, fIdx) => (
              <li key={fIdx} className="flex items-start space-x-2.5 text-sm text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contribution */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2 font-semibold">
            My Engineering Contribution
          </h4>
          <p className="text-sm text-neutral-700 leading-relaxed">
            {project.contribution}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2 font-semibold">
            Technologies Employed
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-neutral-500">
            * Real project repositories &amp; demo configurations
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 transition-colors shadow-xs"
            >
              <Icons.Github className="w-4 h-4" />
              <span>Repository</span>
            </a>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-neutral-900 hover:bg-black transition-colors shadow-xs"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Architecture</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
