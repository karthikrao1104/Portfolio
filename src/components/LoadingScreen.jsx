import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Subtle radial glow */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex items-center space-x-2">
              <span className="text-3xl sm:text-4xl font-extralight tracking-[0.25em] text-white">
                KARTHIK<span className="text-[#8E8E93]">.</span>
              </span>
            </div>
            
            <p className="text-xs uppercase tracking-[0.3em] text-[#8E8E93] font-mono">
              AI &amp; Data Science
            </p>

            {/* Apple-style minimalist loading track */}
            <div className="w-36 h-[1.5px] bg-white/10 rounded-full overflow-hidden mt-6 relative">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
