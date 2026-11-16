import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Layers, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { Icons } from './BrandIcons';
import { projectsData } from '../data/portfolioData';

// Visual Mockup Components for each project
const ProjectVisual = ({ type }) => {
  if (type === 'ai-cluster') {
    return (
      <div className="relative w-full h-full min-h-[260px] bg-[#0c0c0e] rounded-xl overflow-hidden border border-white/10 p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[11px] font-mono text-[#8E8E93] ml-2">ImageFlow • Cluster Engine v2.4</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-neutral-300">Face Vectorizing</span>
        </div>

        {/* Visual Cluster Nodes */}
        <div className="grid grid-cols-3 gap-3 my-4">
          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-blue-400/40 bg-blue-500/10 flex items-center justify-center text-[10px] font-mono text-blue-300 mb-2">
              ID: 01
            </div>
            <span className="text-[11px] text-neutral-300 font-mono">Cluster A</span>
            <span className="text-[9px] text-[#8E8E93]">128 Embeddings</span>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-purple-400/40 bg-purple-500/10 flex items-center justify-center text-[10px] font-mono text-purple-300 mb-2">
              ID: 02
            </div>
            <span className="text-[11px] text-neutral-300 font-mono">Cluster B</span>
            <span className="text-[9px] text-[#8E8E93]">94 Embeddings</span>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-emerald-400/40 bg-emerald-500/10 flex items-center justify-center text-[10px] font-mono text-emerald-300 mb-2">
              ID: 03
            </div>
            <span className="text-[11px] text-neutral-300 font-mono">Cluster C</span>
            <span className="text-[9px] text-[#8E8E93]">210 Embeddings</span>
          </div>
        </div>

        {/* Status Line */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#8E8E93] pt-3 border-t border-white/10">
          <span>Backend: Django REST</span>
          <span className="text-emerald-400">Auto-Organized (100%)</span>
        </div>
      </div>
    );
  }

  if (type === 'analytics-forecast') {
    return (
      <div className="relative w-full h-full min-h-[260px] bg-[#0c0c0e] rounded-xl overflow-hidden border border-white/10 p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-mono text-[#8E8E93]">Wind Power Forecasting Core</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-neutral-300">TimeSeries ML</span>
        </div>

        {/* Stylized SVG Chart Preview */}
        <div className="py-3 px-2">
          <svg viewBox="0 0 300 100" className="w-full h-24 stroke-current">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Grid lines */}
            <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.05)" />
            <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.05)" />
            <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.05)" />

            {/* Historical curve */}
            <path
              d="M0,70 Q40,30 80,55 T160,25 T240,65 T300,20"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* Predicted curve */}
            <path
              d="M0,75 Q40,35 80,50 T160,20 T240,60 T300,15"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2.5"
            />
          </svg>
          <div className="flex justify-between text-[9px] font-mono text-[#8E8E93] mt-1">
            <span>Historical baseline</span>
            <span className="text-white font-medium">Model Forecast Trend</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-[#8E8E93] pt-3 border-t border-white/10">
          <span>Target: Megawatts (MW)</span>
          <span className="text-white">Scikit-learn Regressors</span>
        </div>
      </div>
    );
  }

  // workforce-bi
  return (
    <div className="relative w-full h-full min-h-[260px] bg-[#0c0c0e] rounded-xl overflow-hidden border border-white/10 p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          <span className="text-[11px] font-mono text-[#8E8E93]">Workforce Retention Dashboard</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-neutral-300">Tableau + SQL</span>
      </div>

      {/* Bar breakdown mockup */}
      <div className="space-y-2.5 my-3">
        <div>
          <div className="flex justify-between text-[10px] font-mono text-neutral-300 mb-1">
            <span>Overtime &amp; Work-Life Factor</span>
            <span className="text-white font-medium">Critical (32%)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full bg-white/80 rounded-full w-[32%]" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] font-mono text-neutral-300 mb-1">
            <span>Tenure Threshold (1-2 Years)</span>
            <span className="text-white font-medium">Moderate (24%)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full bg-white/60 rounded-full w-[24%]" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] font-mono text-neutral-300 mb-1">
            <span>Compensation Alignment</span>
            <span className="text-white font-medium">Predictive (18%)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full bg-white/40 rounded-full w-[18%]" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-[#8E8E93] pt-3 border-t border-white/10">
        <span>Cohorts Analyzed: 100%</span>
        <span className="text-white">Retention Strategy</span>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1A6] mb-3">
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-2">
            Ideas transformed into intelligent applications.
          </h2>
          <p className="text-sm font-mono text-[#8E8E93] uppercase tracking-wider">
            Engineered Systems, Predictive Machine Learning &amp; Enterprise Analytics
          </p>
        </div>

        {/* Projects Showcase Cards */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Project Details */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Index & Category */}
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-xs font-mono text-[#8E8E93] tracking-widest uppercase">
                        PROJECT {project.number}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <span className="text-xs font-mono text-neutral-400">
                        {project.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-4 group-hover:text-neutral-100 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Detail Modal Button */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-colors"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-medium text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <Icons.Github className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-medium text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Architecture</span>
                    </a>
                  </div>
                </div>

                {/* Right: Interactive Visual Component */}
                <div className="lg:col-span-5 transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <ProjectVisual type={project.visualType} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#0f0f11] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-left"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-[#8E8E93] hover:text-white bg-white/5 border border-white/10 hover:border-white/25 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-[10px] font-mono tracking-widest text-[#8E8E93] uppercase mb-2">
                PROJECT SPECIFICATION • {selectedProject.number}
              </div>

              <h3 className="text-2xl font-light text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono text-neutral-400 mb-6">
                {selectedProject.subtitle}
              </p>

              <div className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                {selectedProject.description}
              </div>

              {/* Architecture Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3">
                  Technical Architecture &amp; Delivery:
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies in Modal */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8E8E93] mb-2.5">
                  Technologies Employed:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-[11px] font-mono text-[#8E8E93]">
                  * Verified project work
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-medium text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-colors"
                  >
                    <Icons.Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
