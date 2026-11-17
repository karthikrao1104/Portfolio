import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { personal } from '../data/portfolioData';

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
    <span ref={elementRef} className="font-extrabold text-neutral-900 tracking-tight">
      {decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toLocaleString()}
      {suffix}
    </span>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-container p-8 sm:p-12">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 text-xs font-mono font-medium uppercase tracking-wider mb-3">
              <span>01 — ABOUT ME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-2">
              A little about my journey.
            </h2>
            <p className="text-base text-neutral-500 max-w-2xl">
              Passionate about transforming data into insights and developing practical software applications.
            </p>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Professional Story Card */}
            <div className="lg:col-span-7 card-box p-8 sm:p-10">
              <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
                {personal.aboutDetailed.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "text-neutral-900 font-medium text-lg leading-relaxed" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Capability Checklist */}
              <div className="mt-8 pt-8 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-mono text-neutral-700">
                <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span className="font-medium">Large-Scale SQL Analysis</span>
                </div>
                <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span className="font-medium">Interactive Power BI &amp; Tableau</span>
                </div>
                <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span className="font-medium">Machine Learning &amp; Computer Vision</span>
                </div>
                <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span className="font-medium">Full-Stack Django &amp; React</span>
                </div>
              </div>
            </div>

            {/* Right: Verified Statistics Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personal.statistics.map((stat, idx) => (
                <div
                  key={idx}
                  className="card-box p-6 flex flex-col justify-between overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-900" />

                  <div>
                    <div className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                      Metric 0{idx + 1}
                    </div>
                    <div className="text-3xl sm:text-4xl mb-2 text-neutral-900">
                      <StatCounter
                        target={stat.value}
                        decimals={stat.decimals || 0}
                        suffix={stat.suffix}
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-100">
                    <div className="text-sm font-bold text-neutral-900">
                      {stat.label}
                    </div>
                    <div className="text-xs text-neutral-500 mt-0.5">
                      {stat.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
