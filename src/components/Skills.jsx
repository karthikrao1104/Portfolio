import React from 'react';
import { Code2, Database, Brain, Library, Globe, Terminal } from 'lucide-react';
import { skillCategories } from '../data/skills';

const CATEGORY_META = {
  "programming": { icon: Code2, color: "text-blue-600 bg-blue-50 border-blue-200" },
  "analytics": { icon: Database, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  "ml-ai": { icon: Brain, color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
  "libraries": { icon: Library, color: "text-amber-600 bg-amber-50 border-amber-200" },
  "web": { icon: Globe, color: "text-purple-600 bg-purple-50 border-purple-200" },
  "tools": { icon: Terminal, color: "text-slate-700 bg-slate-100 border-slate-200" }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-100/70 text-blue-800 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <span>02 — TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Technologies and tools I work with.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            A comprehensive overview of programming languages, analytical platforms, machine learning frameworks, and developer environments.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const meta = CATEGORY_META[cat.id] || { icon: Code2, color: "text-blue-600 bg-blue-50 border-blue-200" };
            const IconComponent = meta.icon;

            return (
              <div
                key={cat.id}
                className="card-premium rounded-2xl p-7 bg-white flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-2.5 rounded-xl border ${meta.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {cat.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-4 tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
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
