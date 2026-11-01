"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const unsubscribeScroll = scrollY.on("change", (latest) => {
      setShowBackToTop(latest > 450);
    });

    const unsubscribePercent = scrollYProgress.on("change", (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });

    return () => {
      unsubscribeScroll();
      unsubscribePercent();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. Global Subtle Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#72E73E] via-[#10B981] to-[#00BFE6] origin-left z-[100] pointer-events-none"
      />

      {/* 2. Floating Circular Back-to-Top Button with Radial Progress Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.8,
          y: showBackToTop ? 0 : 20,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`fixed bottom-6 right-6 z-50 ${
          showBackToTop ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="group relative w-12 h-12 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white backdrop-blur-xl border border-white/20 shadow-xl shadow-slate-950/25 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
          aria-label="Scroll to top"
        >
          {/* Circular SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
            <circle
              cx="22"
              cy="22"
              r="19"
              className="text-slate-800"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            />
            <circle
              cx="22"
              cy="22"
              r="19"
              className="text-emerald-400 transition-all duration-150"
              strokeWidth="2.5"
              strokeDasharray={119.4}
              strokeDashoffset={119.4 - (119.4 * scrollPercent) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
            />
          </svg>

          {/* Center Arrow Icon */}
          <ArrowUp className="w-4 h-4 text-emerald-400 group-hover:-translate-y-0.5 transition-transform duration-200 relative z-10" />
        </button>
      </motion.div>
    </>
  );
}
