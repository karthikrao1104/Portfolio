import React from 'react';
import { motion } from 'framer-motion';

export const AppleOrbitalSphere = () => {
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] flex items-center justify-center select-none pointer-events-none">
      {/* Background Soft Lighting / Ambient Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/[0.08] via-transparent to-white/[0.03] blur-3xl" />
      
      {/* Outer Rotating Titanium Orbital Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full rounded-full border border-white/[0.07] shadow-[0_0_50px_rgba(255,255,255,0.02)]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/40 shadow-[0_0_10px_#fff]" />
      </motion.div>

      {/* Tilted Elliptical Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute w-[85%] h-[85%] rounded-full border border-dashed border-white/[0.12]"
        style={{ transform: 'rotateX(65deg) rotateY(25deg)' }}
      >
        <div className="absolute top-1/4 right-0 w-2.5 h-2.5 rounded-full bg-neutral-300 shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
      </motion.div>

      {/* Counter Orbital Ring 3 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
        className="absolute w-[70%] h-[70%] rounded-full border border-white/[0.08]"
        style={{ transform: 'rotateX(-60deg) rotateY(40deg)' }}
      />

      {/* Core Space Black & Titanium Sphere with Light Shading */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9),inset_0_2px_4px_rgba(255,255,255,0.3)] border border-white/10"
        style={{
          background: 'radial-gradient(circle at 35% 30%, #444446 0%, #1c1c1e 40%, #0c0c0d 75%, #050505 100%)',
        }}
      >
        {/* Specular Highlight Arc */}
        <div className="absolute top-3 left-6 w-24 h-12 rounded-full bg-gradient-to-b from-white/30 to-transparent blur-md transform -rotate-12" />
        
        {/* Internal Subtle Geometric Grid Wireframe Overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Ambient Ring Glow */}
        <div className="absolute inset-0 rounded-full border border-white/20 opacity-40" />

        {/* Floating Core Tech Monogram / Data Pulse */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] tracking-[0.35em] text-white/50 uppercase font-mono">Neural</span>
          <span className="text-xl font-extralight tracking-widest text-white/80">AI / DS</span>
          <span className="text-[9px] tracking-[0.25em] text-white/30 font-mono mt-0.5">38°N 77°W</span>
        </div>
      </motion.div>

      {/* Orbiting Satellite Data Nodes */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-4 glass-panel px-3.5 py-1.5 rounded-full flex items-center space-x-2 border border-white/10 shadow-lg"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-mono tracking-wider text-neutral-300">ML Pipeline Active</span>
      </motion.div>

      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1 -right-1 sm:top-6 sm:right-6 glass-panel px-3.5 py-1.5 rounded-full flex items-center space-x-2 border border-white/10 shadow-lg"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        <span className="text-[11px] font-mono tracking-wider text-neutral-300">75k+ Records</span>
      </motion.div>
    </div>
  );
};
