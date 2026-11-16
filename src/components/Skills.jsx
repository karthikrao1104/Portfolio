import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Library, Globe, Terminal, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const CATEGORY_ICONS = {
  "PROGRAMMING": Code2,
  "DATA ANALYTICS": Database,
  "AI & MACHINE LEARNING": Brain,
  "LIBRARIES & FRAMEWORKS": Library,
  "WEB DEVELOPMENT": Globe,
  "TOOLS & ENVIRONMENTS": Terminal
};

export const Skills = () => {
  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1A6] mb-3">
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-2">
            Engineered for precision.
          </h2>
          <p className="text-sm font-mono text-[#8E8E93] uppercase tracking-wider">
            Verified Competencies Across Data, AI, and Software Engineering
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, catIdx) => {
            const IconComponent = CATEGORY_ICONS[category.category] || Sparkles;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="glass-panel p-7 rounded-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top silver highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white group-hover:text-neutral-100 group-hover:bg-white/[0.08] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#8E8E93] uppercase">
                      0{catIdx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-white mb-1.5 tracking-tight">
                    {category.category}
                  </h3>
                  <p className="text-xs text-[#8E8E93] mb-6 leading-relaxed font-light">
                    {category.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs px-3 py-1.5 rounded-lg font-mono transition-all duration-200 border ${
                        skill.highlight
                          ? 'bg-white/[0.06] text-white border-white/15 hover:border-white/30 hover:bg-white/10'
                          : 'bg-[#111111]/80 text-[#A1A1A6] border-white/5 hover:border-white/10 hover:text-white'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
