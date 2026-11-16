import React, { useState } from 'react';
import { ExternalLink, Eye, Cpu, BarChart2, Layers, ArrowRight } from 'lucide-react';
import { Icons } from './BrandIcons';

export const ProjectCard = ({ project, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="card-box overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Dynamic Monochrome Tech Blueprint Box */}
        <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-neutral-200">
          {!imageError ? (
            <img
              src={project.imagePath}
              alt={project.imageAlt}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white relative">
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
                  <span className="text-xs font-mono text-neutral-400 ml-2">SYSTEM PREVIEW</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-neutral-300 border border-white/10">
                  Ready
                </span>
              </div>

              {/* Center Icon */}
              <div className="flex flex-col items-center justify-center my-auto py-2 relative z-10">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-white mb-2 shadow-inner">
                  {project.id === 'imageflow' && <Cpu className="w-7 h-7 text-white" />}
                  {project.id === 'wind-forecasting' && <BarChart2 className="w-7 h-7 text-neutral-200" />}
                  {project.id === 'employee-analytics' && <Layers className="w-7 h-7 text-neutral-300" />}
                </div>
                <div className="text-sm font-bold text-white tracking-wide">{project.title}</div>
                <div className="text-[11px] font-mono text-neutral-400 mt-0.5">Placeholder: {project.imagePath}</div>
              </div>

              {/* Bottom Strip */}
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-3 border-t border-white/10 relative z-10">
                <span>{project.technologies.slice(0, 3).join(' • ')}</span>
                <span className="text-neutral-300">Verified Architecture</span>
              </div>
            </div>
          )}

          {/* Project Number Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-md bg-white/95 text-neutral-900 border border-neutral-200 shadow-xs">
              PROJECT {project.number}
            </span>
          </div>

          {/* Quick View Button */}
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="absolute bottom-3 right-3 z-10 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/95 text-neutral-900 border border-neutral-200 shadow-xs flex items-center space-x-1.5 opacity-90 hover:opacity-100 hover:text-black transition-all"
            aria-label="View Project Details"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Specifications</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <div className="text-xs font-mono font-bold text-neutral-500 uppercase mb-1">
            {project.tagline}
          </div>

          <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-3 group-hover:text-black transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-600 line-clamp-3 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 py-4 bg-neutral-50/80 border-t border-neutral-100 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="text-xs font-bold text-neutral-900 hover:text-black flex items-center space-x-1.5 transition-colors"
        >
          <span>View Deep Dive</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center space-x-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-700 hover:text-neutral-950 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-100 shadow-xs transition-colors"
            title="GitHub Repository"
            aria-label="View source on GitHub"
          >
            <Icons.Github className="w-4 h-4" />
          </a>

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-700 hover:text-neutral-950 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-100 shadow-xs transition-colors"
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
