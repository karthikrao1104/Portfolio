import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1A6] mb-3">
            <span>CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-2">
            Industry validated credentials.
          </h2>
          <p className="text-sm font-mono text-[#8E8E93] uppercase tracking-wider">
            Oracle Cloud Infrastructure, SQL Specialist, Google Cloud &amp; Deloitte
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Silver top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white group-hover:bg-white/[0.08] transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#8E8E93] px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    {cert.year}
                  </span>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                  {cert.issuer}
                </div>

                <h3 className="text-base font-medium text-white tracking-tight mb-4 group-hover:text-neutral-100 transition-colors leading-snug">
                  {cert.name}
                </h3>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#8E8E93]">
                  {cert.category}
                </span>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors group-hover:translate-x-0.5"
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
