import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { personal } from '../data/personal';

const StatCounter = ({ target, decimals = 0, suffix = "" }) => {
  const [val, setVal] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const duration = 1500;
          const frames = 60;
          const step = duration / frames;
          let currentFrame = 0;

          const interval = setInterval(() => {
            currentFrame++;
            const progress = currentFrame / frames;
            // standard ease-out
            const ease = 1 - Math.pow(1 - progress, 3);
            const currentVal = start + (target - start) * ease;

            setVal(currentVal);

            if (currentFrame >= frames) {
              clearInterval(interval);
              setVal(target);
            }
          }, step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, target]);

  return (
    <span ref={elementRef} className="font-bold text-primary tracking-tight">
      {decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toLocaleString()}
      {suffix}
    </span>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-surface-section border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-medium tracking-wider text-eyebrow uppercase mb-2">
            01 — ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-3">
            A little about my journey.
          </h2>
          <p className="text-base text-muted max-w-2xl">
            Passionate about transforming data into insights and developing practical software applications.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Professional Story Card */}
          <div className="lg:col-span-7 card-clean rounded-2xl p-8 sm:p-10 bg-surface-white">
            <div className="space-y-4 text-body text-base leading-relaxed">
              {personal.aboutDetailed.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "text-primary font-medium" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Capability Checklist */}
            <div className="mt-8 pt-8 border-t border-surface-border grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-body">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Large-Scale SQL Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Interactive Power BI &amp; Tableau</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Machine Learning &amp; Computer Vision</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Full-Stack Django &amp; React</span>
              </div>
            </div>
          </div>

          {/* Right: Verified Statistics Cards with Dark Readable Typography */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personal.statistics.map((stat, idx) => (
              <div
                key={idx}
                className="card-clean rounded-2xl p-6 bg-surface-white flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-mono font-medium text-eyebrow uppercase tracking-wider mb-2">
                    Metric 0{idx + 1}
                  </div>
                  <div className="text-3xl sm:text-4xl mb-2 text-primary">
                    <StatCounter
                      target={stat.value}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix}
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-surface-border">
                  <div className="text-sm font-semibold text-primary">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    {stat.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
