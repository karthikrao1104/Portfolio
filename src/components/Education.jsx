import React from 'react';
import { Calendar, GraduationCap, Award } from 'lucide-react';
import { educationList } from '../data/certifications';

export const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Container Card Frame */}
        <div className="section-container p-8 sm:p-12">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 text-xs font-mono font-medium uppercase tracking-wider mb-3">
              <span>05 — EDUCATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-2">
              Academic background.
            </h2>
            <p className="text-base text-neutral-500 max-w-2xl">
              Formal engineering foundations in Artificial Intelligence and Data Science.
            </p>
          </div>

          {/* 2-Card Stack */}
          <div className="space-y-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="card-box p-7 sm:p-8 group"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-900 font-mono text-xs font-bold">
                    {edu.grade}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-1 group-hover:text-black transition-colors">
                  {edu.degree}
                </h3>

                <div className="text-sm font-medium text-neutral-600 mb-4">
                  <span className="text-neutral-900 font-semibold">{edu.institution}</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs font-mono text-neutral-500">{edu.location}</span>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed pt-3 border-t border-neutral-100">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
