import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/[0.05]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1A6] mb-3">
            <span>EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-2">
            Academic foundations.
          </h2>
          <p className="text-sm font-mono text-[#8E8E93] uppercase tracking-wider">
            Verified Degrees &amp; Academic Credentials
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs font-medium">
                  {edu.grade}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight mb-1">
                {edu.degree}
              </h3>

              <div className="text-sm text-[#A1A1A6] mb-4 flex items-center space-x-2">
                <span className="text-white/90 font-medium">{edu.institution}</span>
                <span>•</span>
                <span className="text-xs font-mono">{edu.location}</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
