import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsList } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Container Card Frame */}
        <div className="section-container p-8 sm:p-12">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 text-xs font-mono font-medium uppercase tracking-wider mb-3">
              <span>06 — CERTIFICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-2">
              Professional certifications and learning.
            </h2>
            <p className="text-base text-neutral-500 max-w-2xl">
              Industry-validated credentials from Oracle Cloud Infrastructure, Google Cloud, and Deloitte.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsList.map((cert, idx) => (
              <div
                key={idx}
                className="card-box p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-neutral-100 border border-neutral-200 text-neutral-700">
                      {cert.year}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
                    {cert.issuer}
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mb-3 leading-snug group-hover:text-neutral-950 transition-colors">
                    {cert.name}
                  </h3>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500">
                    {cert.category}
                  </span>

                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-neutral-900 hover:text-black group-hover:translate-x-0.5 transition-all"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
