import React from 'react';
import { verifiedMilestones } from '../data/certifications';

export const Achievements = () => {
  return (
    <section className="py-20 bg-surface-section border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="text-xs font-mono font-medium tracking-wider text-eyebrow uppercase mb-1">
            VERIFIED HIGHLIGHTS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            Summary of Professional Milestones
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verifiedMilestones.map((item, idx) => (
            <div
              key={idx}
              className="card-clean rounded-2xl p-6 bg-surface-white flex flex-col justify-between text-left"
            >
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {item.stat}
                </div>
                <h3 className="text-sm font-semibold text-primary mb-2">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs text-muted leading-relaxed pt-3 border-t border-surface-border">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
