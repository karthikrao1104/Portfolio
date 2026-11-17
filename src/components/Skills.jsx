import React from 'react';
import { Code2, Database, Brain, Library, Globe, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const CATEGORY_ICONS = {
  "programming": Code2,
  "analytics": Database,
  "ml-ai": Brain,
  "libraries": Library,
  "web": Globe,
  "tools": Terminal
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-container p-8 sm:p-12">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 text-xs font-mono font-medium uppercase tracking-wider mb-3">
              <span>02 — TECHNICAL EXPERTISE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-2">
              Technologies and tools I work with.
            </h2>
            <p className="text-base text-neutral-500 max-w-2xl">
              A comprehensive overview of programming languages, analytical platforms, machine learning frameworks, and developer environments.
            </p>
          </div>

          {/* 6 Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => {
              const IconComponent = CATEGORY_ICONS[cat.id] || Code2;

              return (
                <div
                  key={cat.id}
                  className="card-box p-7 flex flex-col justify-between group"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-2.5 rounded-xl border border-neutral-200 bg-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        {cat.number}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 mb-4 tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-100">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-50 text-neutral-800 border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-100 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
