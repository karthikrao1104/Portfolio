import React from 'react';
import { X, CheckCircle2, ExternalLink } from 'lucide-react';
import { Icons } from './BrandIcons';

export const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-surface-white border border-surface-border rounded-2xl shadow-elevated p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-muted hover:text-primary bg-surface-section hover:bg-surface-border transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-xs font-mono font-medium text-eyebrow uppercase mb-1">
          PROJECT SPECIFICATION • {project.number}
        </div>

        <h3 className="text-2xl font-bold text-primary mb-2">
          {project.title}
        </h3>

        <div className="text-sm font-medium text-body mb-6">
          {project.tagline}
        </div>

        {/* Problem Statement */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-eyebrow mb-2">
            Problem Statement
          </h4>
          <p className="text-sm text-body leading-relaxed bg-surface-alt p-4 rounded-xl border border-surface-border">
            {project.problemStatement}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-eyebrow mb-3">
            Key Architecture &amp; Features
          </h4>
          <ul className="space-y-2.5">
            {project.keyFeatures.map((feat, fIdx) => (
              <li key={fIdx} className="flex items-start space-x-2.5 text-sm text-body">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contribution */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-eyebrow mb-2">
            My Engineering Contribution
          </h4>
          <p className="text-sm text-body leading-relaxed">
            {project.contribution}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-eyebrow mb-2">
            Technologies Employed
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded bg-surface-section text-body border border-surface-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-surface-border flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-muted">
            * Real project repositories &amp; demo configurations
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold text-primary bg-surface-white hover:bg-surface-section border border-[#D4D4D4] transition-colors"
            >
              <Icons.Github className="w-4 h-4" />
              <span>Repository</span>
            </a>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold text-surface-white bg-primary hover:bg-black transition-colors"
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
