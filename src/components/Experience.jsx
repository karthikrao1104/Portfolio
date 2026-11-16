import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowUpRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1A6] mb-3">
            <span>EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-2">
            Professional trajectory.
          </h2>
          <p className="text-sm font-mono text-[#8E8E93] uppercase tracking-wider">
            Verified Industry Internships &amp; Practical Engineering
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-16">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-white/40 group-hover:border-white transition-colors flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-9 rounded-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-300">
                {/* Meta details row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    EXPERIENCE 0{idx + 1}
                  </span>
                  
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#8E8E93]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role and Company */}
                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight mb-1">
                  {exp.role}
                </h3>
                <div className="text-sm sm:text-base text-[#A1A1A6] font-normal mb-6 flex items-center space-x-2">
                  <span className="text-white/90 font-medium">{exp.company}</span>
                  <span>•</span>
                  <span className="text-xs font-mono">{exp.location}</span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-8">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-3 text-sm text-neutral-300 font-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="pt-5 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-[#8E8E93] mr-2">Technologies:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
