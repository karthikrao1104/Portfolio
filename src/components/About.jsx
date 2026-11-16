import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, BarChart3, Database, Layers, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

// Animated Counter Component
const Counter = ({ target, decimals = 0, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // 1.8 seconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutExpo
      const easeVal = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (target - start) * easeVal;
      
      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(target);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-light tracking-tight">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/[0.05]">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1A6] mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-2">
            Curiosity meets technology.
          </h2>
          <p className="text-sm font-mono text-[#8E8E93] uppercase tracking-wider">
            Verified Professional Foundations &amp; Background
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Introduction */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/[0.08] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none" />
              
              <div className="space-y-5 text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
                {personalData.aboutParagraphs.map((para, idx) => (
                  <p key={idx} className="last:text-white/90">
                    {para}
                  </p>
                ))}
              </div>

              {/* Verified Competency Checkmarks */}
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-mono text-[#A1A1A6]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-300" />
                  <span>Large-Scale SQL Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-300" />
                  <span>Interactive Power BI &amp; Tableau</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-300" />
                  <span>ML &amp; Computer Vision (OpenCV)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-300" />
                  <span>Full-Stack Django &amp; React</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Animated Statistics Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalData.statistics.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8E93] mb-4">
                    Metric 0{idx + 1}
                  </div>
                  <div className="text-3xl sm:text-4xl text-white font-light tracking-tight mb-2 group-hover:text-neutral-100 transition-colors">
                    <Counter
                      target={stat.value}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix}
                    />
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-white/90 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#8E8E93] font-light">
                    {stat.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
