import React from 'react';
import { Code2, Database, Brain, Library, Globe, Terminal } from 'lucide-react';
import { skillCategories } from '../data/skills';

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
    <section id="skills" className="py-24 bg-surface-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-medium tracking-wider text-eyebrow uppercase mb-2">
            02 — TECHNICAL EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-3">
            Technologies and tools I work with.
          </h2>
          <p className="text-base text-muted max-w-2xl">
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
                className="card-clean rounded-2xl p-7 bg-surface-white flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-lg bg-surface-section border border-surface-border text-primary">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-eyebrow">
                      {cat.number}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-primary mb-4 tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-surface-border">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-md bg-surface-section text-body border border-surface-border hover:border-surface-borderHover hover:text-primary transition-colors"
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
    </section>
  );
};
