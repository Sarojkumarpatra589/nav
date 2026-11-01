"use client";

import React, { useRef } from "react";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Activity, Cpu, Terminal, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroSectionProps {
  onExploreServices: () => void;
  onStartProject: () => void;
}

export default function HeroSection({
  onExploreServices,
  onStartProject,
}: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[95vh] pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 overflow-hidden flex flex-col justify-center items-center text-center select-none scroll-mt-24"
    >
      {/* Ambient Radial Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.08)_0%,rgba(14,165,233,0.04)_50%,transparent_75%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none z-0" />

      {/* Foreground Hero Content Layer */}
      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center"
      >
        {/* --- Main Headline --- */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.08] text-[#F4FBF8] max-w-4xl mx-auto drop-shadow-md"
        >
          Architecting Sovereign AI &amp;{" "}
          <span className="bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] bg-clip-text text-transparent">
            Production Infrastructure.
          </span>
        </motion.h1>

        {/* --- Supporting Copy --- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#A6BBB9] max-w-3xl mx-auto leading-relaxed font-normal"
        >
          From enterprise autonomous agentic workflows to high-throughput cloud backends,
          we engineer sovereign AI pipelines, custom software architectures, and mission-critical
          digital flagships built for scale.
        </motion.p>

        {/* --- Action Buttons --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-5"
        >
          {/* Primary CTA */}
          <button
            onClick={onStartProject}
            className="group relative px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] text-[#030A0D] font-black text-sm sm:text-base tracking-wide shadow-xl shadow-[#2DD4BF]/25 hover:shadow-[#8CEE3F]/40 active:scale-95 transition-all flex items-center gap-2.5 overflow-hidden focus:outline-none"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onExploreServices}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#06151A]/80 border border-[rgba(45,212,191,0.25)] text-[#F4FBF8] font-bold text-sm sm:text-base hover:bg-white/[0.08] hover:border-[#2DD4BF]/60 active:scale-95 transition-all flex items-center gap-2 focus:outline-none"
          >
            <span>Explore Our Work</span>
            <ExternalLink className="w-4 h-4 text-[#2DD4BF]" />
          </button>
        </motion.div>

        {/* ========================================================
            LIVE TELEMETRY RIBBON (System Telemetry Simulation)
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="mt-12 sm:mt-16 w-full max-w-4xl"
        >
          <div className="cyber-glass rounded-2xl sm:rounded-3xl p-4 sm:p-5 text-left border border-[rgba(45,212,191,0.2)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8CEE3F] animate-pulse" />
                <span className="text-xs font-mono font-bold text-[#F4FBF8] uppercase tracking-wider">
                  TELEMETRY MESH • PRODUCTION ACTIVE
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#A6BBB9]">
                [Visual Demonstration: System Telemetry Simulation]
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-3.5">
              {/* Telemetry Metric 1 */}
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] font-mono text-[#A6BBB9] block">PIPELINE STATUS</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#8CEE3F] flex items-center gap-1.5 mt-0.5">
                  <Activity className="w-3.5 h-3.5" /> 99.99% Nominal
                </span>
              </div>

              {/* Telemetry Metric 2 */}
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] font-mono text-[#A6BBB9] block">P99 LATENCY</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#2DD4BF] flex items-center gap-1.5 mt-0.5">
                  <Zap className="w-3.5 h-3.5" /> Sub-12.4ms Edge
                </span>
              </div>

              {/* Telemetry Metric 3 */}
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] font-mono text-[#A6BBB9] block">ORCHESTRATION</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#38BDF8] flex items-center gap-1.5 mt-0.5">
                  <Cpu className="w-3.5 h-3.5" /> Agentic Kafka Mesh
                </span>
              </div>

              {/* Telemetry Metric 4 */}
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] font-mono text-[#A6BBB9] block">SECURITY</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#F4FBF8] flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8CEE3F]" /> Zero-Trust RBAC
                </span>
              </div>
            </div>

            {/* Subtle Oscilloscope Waveform Line */}
            <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#A6BBB9]">
              <div className="flex items-center gap-3">
                <Terminal className="w-3.5 h-3.5 text-[#2DD4BF]" />
                <span className="truncate">stream.connect({`cluster: "aws-ap-south-1", mode: "sovereign-ai"`})</span>
              </div>
              <span className="text-[#8CEE3F] font-bold hidden sm:inline">SYNCHRONIZED</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
