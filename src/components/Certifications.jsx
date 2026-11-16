import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsList } from '../data/certifications';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-surface-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-medium tracking-wider text-eyebrow uppercase mb-2">
            06 — CERTIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-3">
            Professional certifications and learning.
          </h2>
          <p className="text-base text-muted max-w-2xl">
            Industry-validated credentials from Oracle Cloud Infrastructure, Google Cloud, and Deloitte.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsList.map((cert, idx) => (
            <div
              key={idx}
              className="card-clean rounded-2xl p-6 sm:p-7 bg-surface-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-surface-section border border-surface-border text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-surface-section border border-surface-border text-eyebrow">
                    {cert.year}
                  </span>
                </div>

                <div className="text-xs font-mono font-semibold text-eyebrow uppercase mb-1">
                  {cert.issuer}
                </div>

                <h3 className="text-base font-bold text-primary mb-3 leading-snug">
                  {cert.name}
                </h3>
              </div>

              <div className="pt-4 border-t border-surface-border flex items-center justify-between">
                <span className="text-xs font-mono text-muted">
                  {cert.category}
                </span>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-primary hover:text-black transition-colors"
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
