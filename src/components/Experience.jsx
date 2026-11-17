import React from 'react';
import { Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-container p-8 sm:p-12">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 text-xs font-mono font-medium uppercase tracking-wider mb-3">
              <span>03 — EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-2">
              Where I've gained practical experience.
            </h2>
            <p className="text-base text-neutral-500 max-w-2xl">
              Verified internship track record handling big data workflows, statistical exploration, dashboard engineering, and modular software features.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="card-box p-7 sm:p-9 group"
              >
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-neutral-700">
                    EXPERIENCE {exp.index}
                  </span>

                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-1 group-hover:text-black transition-colors">
                  {exp.role}
                </h3>
                <div className="text-sm sm:text-base text-neutral-600 font-medium mb-6">
                  <span className="text-neutral-900 font-semibold">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs font-mono text-neutral-500">{exp.location}</span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-3 text-sm text-neutral-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Badges */}
                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-neutral-500 mr-2">Technologies:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-100 text-neutral-800 border border-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
