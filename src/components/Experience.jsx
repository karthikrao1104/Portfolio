import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-surface-section border-b border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-medium tracking-wider text-eyebrow uppercase mb-2">
            03 — EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-3">
            Where I've gained practical experience.
          </h2>
          <p className="text-base text-muted max-w-2xl">
            Verified internship track record handling big data workflows, statistical exploration, dashboard engineering, and modular software features.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="card-clean rounded-2xl p-7 sm:p-9 bg-surface-white"
            >
              {/* Meta details */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-surface-section border border-surface-border text-eyebrow">
                  EXPERIENCE {exp.index}
                </span>

                <div className="flex items-center space-x-2 text-xs font-mono text-muted">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Role & Company */}
              <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-tight mb-1">
                {exp.role}
              </h3>
              <div className="text-sm sm:text-base text-muted font-medium mb-6">
                <span className="text-primary font-semibold">{exp.company}</span>
                <span className="mx-2">•</span>
                <span className="text-xs font-mono text-eyebrow">{exp.location}</span>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start space-x-3 text-sm text-body leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-surface-border flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-eyebrow mr-2">Technologies:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-surface-section text-body border border-surface-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
