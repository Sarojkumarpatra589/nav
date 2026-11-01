"use client";

import React, { useRef } from "react";
import { Sparkles, ArrowRight, Compass, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface BrandStatementSectionProps {
  onStartProject?: () => void;
}

export default function BrandStatementSection({ onStartProject }: BrandStatementSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Gentle scroll-driven parallax between the three statement lines
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const line1Y = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const line2Y = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const line3Y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Subtle neural signal lines background animation
  return (
    <section
      ref={containerRef}
      id="mission"
      className="relative w-full py-28 sm:py-36 md:py-44 lg:py-48 bg-gradient-to-b from-white via-[#F3FAF6] to-white overflow-hidden text-center select-none border-t border-slate-100"
    >
      {/* ========================================================
          1. AMBIENT NEURAL NETWORK & GEOMETRIC DEPTH BACKGROUND
      ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-emerald-400/10 via-[#72E73E]/08 to-cyan-400/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-grid-cross opacity-20" />

        {/* Delicate Left Neural Network Flow */}
        <svg
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[240px] sm:w-[320px] h-[400px] opacity-40 pointer-events-none hidden md:block"
          viewBox="0 0 320 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10 80 Q 90 120 160 80 T 260 140"
            stroke="#10B981"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            fill="none"
          />
          <path
            d="M 20 200 C 110 160 180 260 280 200"
            stroke="#38D9D6"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M 10 320 Q 120 280 200 330 T 290 280"
            stroke="#B7F34A"
            strokeWidth="1"
            strokeDasharray="3 3"
            fill="none"
          />

          {/* Running Synapse Pulse Beads */}
          <circle cx="160" cy="80" r="3.5" fill="#10B981">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="280" cy="200" r="4" fill="#38D9D6">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="330" r="3" fill="#B7F34A">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Network Nodes */}
          <circle cx="10" cy="80" r="3" fill="#CBD5E1" />
          <circle cx="260" cy="140" r="4.5" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
          <circle cx="20" cy="200" r="3" fill="#CBD5E1" />
          <circle cx="290" cy="280" r="5" fill="#FFFFFF" stroke="#38D9D6" strokeWidth="1.5" />
        </svg>

        {/* Delicate Right Neural Network Flow */}
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[240px] sm:w-[320px] h-[400px] opacity-40 pointer-events-none hidden md:block"
          viewBox="0 0 320 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 310 100 Q 220 70 140 120 T 40 90"
            stroke="#10B981"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M 300 220 C 200 260 140 160 50 230"
            stroke="#38D9D6"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            fill="none"
          />
          <path
            d="M 310 310 Q 210 340 120 290 T 30 330"
            stroke="#B7F34A"
            strokeWidth="1"
            fill="none"
          />

          <circle cx="140" cy="120" r="4" fill="#10B981">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="230" r="3.5" fill="#38D9D6">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="120" cy="290" r="3" fill="#B7F34A">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3.2s" repeatCount="indefinite" />
          </circle>

          <circle cx="310" cy="100" r="3" fill="#CBD5E1" />
          <circle cx="40" cy="90" r="4.5" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
          <circle cx="300" cy="220" r="3" fill="#CBD5E1" />
          <circle cx="30" cy="330" r="5" fill="#FFFFFF" stroke="#B7F34A" strokeWidth="1.5" />
        </svg>

        {/* Floating Ambient 3D Glass Rings */}
        <div className="absolute top-16 left-1/4 w-28 h-28 rounded-full border border-emerald-400/20 blur-[1px] animate-[spin_40s_linear_infinite]" />
        <div className="absolute bottom-20 right-1/4 w-36 h-36 rounded-full border border-cyan-400/20 blur-[1px] animate-[spin_55s_linear_infinite_reverse]" />
      </div>

      {/* ========================================================
          2. EDITORIAL KINETIC TYPOGRAPHY CONTAINER
      ======================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-emerald-500/25 shadow-sm mb-6 sm:mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.22em] text-[#10251D]">
            THE NAVCHETNAA MISSION
          </span>
        </motion.div>

        {/* ========================================================
            THE THREE DISTINCT KINETIC TYPOGRAPHY STATEMENTS
        ======================================================== */}
        <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 md:space-y-3 font-black tracking-tight leading-[1.05] sm:leading-[1.02]">
          {/* ----------------------------------------------------
              LINE 1 — "Build Smarter."
              Animation: Staggered Mask Reveal
              Emerges upward through a clipping mask with letter stagger
          ---------------------------------------------------- */}
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : line1Y }}
            className="overflow-hidden py-1 px-3 sm:px-6"
          >
            <motion.h2
              initial={{ y: "115%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#10251D] drop-shadow-xs"
            >
              Build{" "}
              <span className="bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] bg-clip-text text-transparent">
                Smarter.
              </span>
            </motion.h2>
          </motion.div>

          {/* ----------------------------------------------------
              LINE 2 — "Automate Better."
              Animation: Outline-to-Solid Transformation
              Starts as an outlined typeface, fills with deep emerald & cyan light sweep
          ---------------------------------------------------- */}
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : line2Y }}
            className="relative py-1 px-3 sm:px-6 group"
          >
            {/* Outline Base Layer (Revealed first) */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.45,
              }}
              style={{
                WebkitTextStroke: "2px #10B981",
                color: "transparent",
              }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black select-none tracking-tight"
            >
              Automate Better.
            </motion.h2>

            {/* Solid Fill Layer (Fills over outline with smooth light sweep) */}
            <motion.h2
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.95,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.65,
              }}
              className="absolute inset-0 py-1 px-3 sm:px-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight pointer-events-none text-[#10251D]"
            >
              Automate{" "}
              <span className="bg-gradient-to-r from-[#10B981] via-[#38D9D6] to-[#00BFE6] bg-clip-text text-transparent">
                Better.
              </span>
            </motion.h2>
          </motion.div>

          {/* ----------------------------------------------------
              LINE 3 — "Grow Faster."
              Animation: 3D Perspective Reveal
              Starts with perspective rotation & smooth scale depth,
              finishes with lime accent on "Faster."
          ---------------------------------------------------- */}
          <motion.div
            style={{
              y: shouldReduceMotion ? 0 : line3Y,
              perspective: 1200,
            }}
            className="py-1 px-3 sm:px-6"
          >
            <motion.h2
              initial={{
                rotateX: 45,
                y: 50,
                scale: 0.9,
                opacity: 0,
              }}
              whileInView={{
                rotateX: 0,
                y: 0,
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.9,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#10251D] tracking-tight drop-shadow-sm"
            >
              Grow{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#84CC16] via-[#B7F34A] to-[#10B981] bg-clip-text text-transparent">
                  Faster.
                </span>
                {/* Subtle Kinetic Accent Dot */}
                <span className="inline-block w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#B7F34A] ml-1 shadow-[0_0_12px_rgba(183,243,74,0.8)] animate-pulse" />
              </span>
            </motion.h2>
          </motion.div>
        </div>

        {/* ========================================================
            3. ELEGANT INTERACTIVE CTA ACTION DESK
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.15 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={onStartProject}
            className="relative group px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-[#10251D] text-white font-bold text-sm sm:text-base hover:bg-emerald-600 transition-all duration-300 shadow-xl shadow-[#10251D]/15 hover:shadow-emerald-500/25 active:scale-95 flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10">Initiate Your Transformation</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#38D9D6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </button>

          {/* Verification Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200/90 text-xs font-mono font-bold text-slate-700 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Guaranteed Production Architecture</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
