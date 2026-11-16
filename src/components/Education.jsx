import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';
import { educationList } from '../data/certifications';

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-surface-section border-b border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-medium tracking-wider text-eyebrow uppercase mb-2">
            05 — EDUCATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-3">
            Academic background.
          </h2>
          <p className="text-base text-muted max-w-2xl">
            Formal engineering foundations in Artificial Intelligence and Data Science.
          </p>
        </div>

        {/* 2-Card Layout */}
        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="card-clean rounded-2xl p-7 sm:p-8 bg-surface-white"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center space-x-2 text-xs font-mono text-muted">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>

                <div className="px-3 py-1 rounded-full bg-surface-section border border-surface-border text-primary font-mono text-xs font-semibold">
                  {edu.grade}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-tight mb-1">
                {edu.degree}
              </h3>

              <div className="text-sm font-medium text-body mb-4">
                <span className="text-primary font-semibold">{edu.institution}</span>
                <span className="mx-2">•</span>
                <span className="text-xs font-mono text-eyebrow">{edu.location}</span>
              </div>

              <p className="text-sm text-body leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
