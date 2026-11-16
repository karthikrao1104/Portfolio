import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, TrendingUp, Award, Layers, Sparkles } from 'lucide-react';
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
    <span ref={elementRef} className="font-extrabold text-slate-900 tracking-tight">
      {decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toLocaleString()}
      {suffix}
    </span>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-100/70 text-blue-800 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <span>01 — ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            A little about my journey.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Passionate about transforming data into insights and developing practical software applications.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Professional Story Card */}
          <div className="lg:col-span-7 card-premium rounded-2xl p-8 sm:p-10 bg-white">
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              {personal.aboutDetailed.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "text-slate-900 font-medium text-lg leading-relaxed" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Capability Checklist */}
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-mono text-slate-700">
              <div className="flex items-center space-x-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium">Large-Scale SQL Analysis</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium">Interactive Power BI &amp; Tableau</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium">Machine Learning &amp; Computer Vision</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium">Full-Stack Django &amp; React</span>
              </div>
            </div>
          </div>

          {/* Right: Verified Statistics Cards with Subtle Color Top Strips */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personal.statistics.map((stat, idx) => {
              const borderColors = [
                'from-blue-600 to-indigo-600',
                'from-indigo-600 to-purple-600',
                'from-sky-600 to-blue-600',
                'from-emerald-600 to-teal-600'
              ];

              return (
                <div
                  key={idx}
                  className="card-premium rounded-2xl p-6 bg-white flex flex-col justify-between overflow-hidden relative"
                >
                  {/* Subtle Accent Top Gradient Strip */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${borderColors[idx]}`} />

                  <div>
                    <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Metric 0{idx + 1}
                    </div>
                    <div className="text-3xl sm:text-4xl mb-2">
                      <StatCounter
                        target={stat.value}
                        decimals={stat.decimals || 0}
                        suffix={stat.suffix}
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-sm font-bold text-slate-900">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {stat.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
