import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data/portfolioData';

export const Achievements = () => {
  return (
    <section id="achievements" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1A6] mb-3">
            <span>MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-2">
            Verified milestones.
          </h2>
          <p className="text-sm font-mono text-[#8E8E93] uppercase tracking-wider">
            Tangible Impact &amp; Professional Accomplishments
          </p>
        </div>

        {/* Milestones 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-7 rounded-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-extralight tracking-tight text-white mb-4 group-hover:text-neutral-200 transition-colors">
                  {item.number}
                </div>
                <h3 className="text-base font-medium text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs text-[#8E8E93] font-light leading-relaxed pt-4 border-t border-white/5">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
