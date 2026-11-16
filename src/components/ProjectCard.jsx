import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowRight, Eye, Code, BarChart2, Cpu } from 'lucide-react';
import { Icons } from './BrandIcons';

export const ProjectCard = ({ project, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="card-clean rounded-2xl overflow-hidden bg-surface-white flex flex-col justify-between group">
      <div>
        {/* Screenshot / Placeholder Container */}
        <div className="relative aspect-[16/10] bg-surface-section border-b border-surface-border overflow-hidden">
          {!imageError ? (
            <img
              src={project.imagePath}
              alt={project.imageAlt}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-surface-alt">
              <div className="p-3 rounded-full bg-surface-white border border-surface-border text-muted mb-2">
                {project.id === 'imageflow' && <Cpu className="w-6 h-6 text-primary" />}
                {project.id === 'wind-forecasting' && <BarChart2 className="w-6 h-6 text-primary" />}
                {project.id === 'employee-analytics' && <Layers className="w-6 h-6 text-primary" />}
              </div>
              <span className="text-xs font-mono font-medium text-primary">
                {project.title}
              </span>
              <span className="text-[11px] text-muted mt-1 font-mono">
                Screenshot placeholder ready for upload: {project.imagePath}
              </span>
            </div>
          )}

          {/* Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded bg-surface-white/95 text-primary border border-surface-border shadow-sm">
              PROJECT {project.number}
            </span>
          </div>

          {/* Quick Expand Button overlay */}
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="absolute bottom-3 right-3 px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-white/95 text-primary border border-surface-border shadow-sm flex items-center space-x-1.5 opacity-90 hover:opacity-100 transition-opacity"
            aria-label="View Project Details"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Details</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <div className="text-xs font-mono font-medium text-eyebrow uppercase mb-1">
            {project.tagline}
          </div>

          <h3 className="text-xl font-bold text-primary tracking-tight mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-body line-clamp-3 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded bg-surface-section text-body border border-surface-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 py-4 bg-surface-alt border-t border-surface-border flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="text-xs font-semibold text-primary hover:text-black flex items-center space-x-1 transition-colors"
        >
          <span>Specifications</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center space-x-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-primary rounded-md border border-surface-border bg-surface-white hover:bg-surface-section transition-colors"
            title="GitHub Repository"
            aria-label="View source on GitHub"
          >
            <Icons.Github className="w-4 h-4" />
          </a>

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-primary rounded-md border border-surface-border bg-surface-white hover:bg-surface-section transition-colors"
            title="Live Demo"
            aria-label="View live demo"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
