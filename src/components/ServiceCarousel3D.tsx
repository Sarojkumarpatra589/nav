"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Activity,
  Zap,
  Globe,
  Layers,
  Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceCarousel3DProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function ServiceCarousel3D({
  onSelectService,
}: ServiceCarousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const services = [
    {
      id: "ai",
      title: "AI & Automation Services",
      shortTitle: "AI & Automation",
      subtitle: "Autonomous Workflows",
      description:
        "Streamline workflows and drive efficiency with custom AI agents, automated processes, and intelligent integrations.",
      tags: ["LLM Workflows", "Custom Agents", "Self-Healing Pipelines"],
      statLabel: "Neural Throughput",
      statValue: "10k req/s",
      accuracy: "99.9%",
      latency: "Sub-15ms Latency",
      accent: "#22C55E",
    },
    {
      id: "software",
      title: "Software Development",
      shortTitle: "Software Development",
      subtitle: "Enterprise Backends",
      description:
        "Scalable custom business applications, distributed cloud backends, and enterprise-grade software architectures.",
      tags: ["Cloud Native", "Microservices", "Event-Driven"],
      statLabel: "System Uptime",
      statValue: "99.99%",
      accuracy: "100%",
      latency: "Zero-Downtime Mesh",
      accent: "#10B981",
    },
    {
      id: "web",
      title: "Website Development",
      shortTitle: "Website Development",
      subtitle: "High-Performance Platforms",
      description:
        "Modern, high-performance digital experiences and flagship web platforms engineered for speed, conversion, and WebGL.",
      tags: ["99+ Lighthouse", "WebGL 3D", "Next.js Engine"],
      statLabel: "Page Experience",
      statValue: "100/100",
      accuracy: "60 FPS",
      latency: "Global Edge CDN",
      accent: "#00BFE6",
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      shortTitle: "Mobile Development",
      subtitle: "Fluid Native Systems",
      description:
        "Powerful Android and iOS applications with fluid native performance, gesture animations, and offline-first resilience.",
      tags: ["iOS & Android", "60 FPS Native", "Cross Platform"],
      statLabel: "Frame Rate",
      statValue: "60 FPS",
      accuracy: "99.8%",
      latency: "Metal / Vulkan API",
      accent: "#0EA5E9",
    },
    {
      id: "cloud",
      title: "Cloud & DevOps Architecture",
      shortTitle: "Cloud & DevOps",
      subtitle: "Distributed Reliability",
      description:
        "Resilient cloud infrastructure, automated CI/CD pipelines, and secure distributed data environments for global scale.",
      tags: ["Kubernetes", "Zero Downtime", "SOC2 Ready"],
      statLabel: "Failover Recovery",
      statValue: "< 25ms",
      accuracy: "99.99%",
      latency: "Multi-Region Cloud",
      accent: "#22C55E",
    },
  ];

  const total = services.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch Swipe Handlers for Mobile & Tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Circular offset calculation (-2, -1, 0, 1, 2)
  const getCardOffset = (index: number) => {
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      id="services"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full py-12 md:py-16 bg-white overflow-hidden select-none"
    >
      {/* ========================================================
          1. CONTINUOUS UNDULATING 3D WIREFRAME MESH (z-0)
      ======================================================== */}
      {/* Precision Cross Grid Background */}
      <div className="absolute inset-0 bg-grid-cross opacity-35 pointer-events-none z-0" />

      {/* Atmospheric Neon Lime & Electric Cyan Aura (Logo Palette) */}
      <div className="absolute top-1/4 -left-36 w-[520px] h-[520px] bg-gradient-to-br from-[#72E73E]/12 via-[#10B981]/08 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -right-36 w-[550px] h-[550px] bg-gradient-to-bl from-[#00BFE6]/14 via-[#0EA5E9]/08 to-transparent rounded-full blur-[110px] pointer-events-none z-0" />

      {/* Undulating 3D Perspective Wave Grid Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-60">
        <svg
          className="absolute bottom-0 left-0 w-full h-[340px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 340"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="servWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00BFE6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <g stroke="url(#servWaveGrad)" strokeWidth="1.2" fill="none">
            <path d="M 0,280 Q 220,180 440,240 T 880,190 T 1320,240 T 1440,220" />
            <path d="M 0,240 Q 240,140 480,200 T 920,150 T 1360,200 T 1440,180" />
            <path d="M 0,200 Q 260,100 520,160 T 960,110 T 1400,160 T 1440,140" />
            <path d="M 0,315 Q 240,220 480,280 T 960,230 T 1440,260" />

            {/* Grid Cross Connectors */}
            <path d="M 80,180 L 100,290" />
            <path d="M 180,150 L 210,270" />
            <path d="M 300,135 L 340,260" />
            <path d="M 440,150 L 480,275" />
            <path d="M 580,140 L 620,255" />
            <path d="M 720,120 L 760,235" />
            <path d="M 860,125 L 900,245" />
            <path d="M 1000,145 L 1040,265" />
            <path d="M 1140,155 L 1180,275" />
            <path d="M 1280,150 L 1320,265" />
          </g>

          {/* Glowing Particle Nodes */}
          <g>
            {[
              [100, 290],
              [210, 270],
              [340, 260],
              [480, 275],
              [620, 255],
              [760, 235],
              [900, 245],
              [1040, 265],
              [1180, 275],
              [1320, 265],
              [180, 150],
              [440, 150],
              [720, 120],
              [1000, 145],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="4" fill="#00BFE6" />
                <circle cx={cx} cy={cy} r="8" fill="#22C55E" opacity="0.3" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Floating Chrome Refraction Orbs */}
      <div className="absolute top-16 right-12 w-28 h-28 rounded-full bg-gradient-to-br from-white/90 via-emerald-100/50 to-cyan-200/40 backdrop-blur-md border border-white/80 shadow-2xl shadow-cyan-500/15 pointer-events-none animate-float-slow z-0" />
      <div className="absolute bottom-10 left-12 w-28 h-28 rounded-full bg-gradient-to-br from-white/90 via-cyan-100/60 to-blue-200/40 backdrop-blur-md border border-white/80 shadow-2xl shadow-blue-500/15 pointer-events-none animate-float-delayed z-0" />

      {/* ========================================================
          2. SECTION HEADER (Compact Pacing Directly Below About)
      ======================================================== */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mb-6 md:mb-8">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
            OUR SERVICES
          </span>
        </div>

        {/* Heading with continuous vibrant emerald-to-cyan gradient */}
        <h2 className="text-3xl sm:text-5xl md:text-[54px] font-black tracking-tight leading-[1.14]">
          <span className="text-[#0F172A]">POWERING YOUR BUSINESS WITH </span>
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#00BFE6] bg-clip-text text-transparent">
            NEXT-GEN DIGITAL SOLUTIONS
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          High-velocity digital engineering, custom AI agents, and flagship cloud web platforms built for exponential growth.
        </p>
      </div>

      {/* ========================================================
          3. FULL-WIDTH 3D COVERFLOW CAROUSEL CONTAINER
      ======================================================== */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible">
        <div className="relative w-full flex justify-center items-center [perspective:1600px] min-h-[440px] md:min-h-[480px]">
          {services.map((service, idx) => {
            const offset = getCardOffset(idx);
            const isActive = offset === 0;

            if (Math.abs(offset) > 2) return null;

            // Physical offset coordinates ensuring ZERO overlap and authentic 3D depth
            let xOffset = 0;
            let rotY = 0;
            let scaleVal = 1;
            let opac = 1;
            let zIdx = 30;
            let cardWidth = "w-[92vw] max-w-5xl";

            if (isActive) {
              xOffset = 0;
              rotY = 0;
              scaleVal = 1;
              opac = 1;
              zIdx = 30;
              cardWidth = "w-[92vw] max-w-5xl";
            } else if (offset === -1) {
              xOffset = -610;
              rotY = 16;
              scaleVal = 0.88;
              opac = 0.85;
              zIdx = 15;
              cardWidth = "w-[310px] sm:w-[330px] md:w-[350px]";
            } else if (offset === 1) {
              xOffset = 610;
              rotY = -16;
              scaleVal = 0.88;
              opac = 0.85;
              zIdx = 15;
              cardWidth = "w-[310px] sm:w-[330px] md:w-[350px]";
            } else if (offset === -2) {
              xOffset = -950;
              rotY = 26;
              scaleVal = 0.74;
              opac = 0.45;
              zIdx = 5;
              cardWidth = "w-[280px] md:w-[300px]";
            } else if (offset === 2) {
              xOffset = 950;
              rotY = -26;
              scaleVal = 0.74;
              opac = 0.45;
              zIdx = 5;
              cardWidth = "w-[280px] md:w-[300px]";
            }

            return (
              <motion.div
                key={service.id}
                onClick={() => {
                  if (!isActive) setCurrentIndex(idx);
                }}
                animate={{
                  x: xOffset,
                  rotateY: rotY,
                  scale: scaleVal,
                  opacity: opac,
                  zIndex: zIdx,
                }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 28,
                  mass: 0.85,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className={`absolute ${cardWidth} h-[380px] md:h-[420px] flex items-center justify-center ${
                  isActive ? "cursor-default" : "cursor-pointer"
                }`}
              >
                {isActive ? (
                  /* ========================================================
                     ACTIVE CENTER CARD (Index 0): DUAL-COLUMN LAYOUT
                  ======================================================== */
                  <div className="relative w-full h-full rounded-[28px] p-[2.5px] bg-gradient-to-br from-[#74E042] via-[#22C55E] to-[#00BFE6] shadow-[0_25px_60px_-15px_rgba(6,182,212,0.22)] ring-1 ring-emerald-400/40">
                    <div className="w-full h-full bg-white/95 backdrop-blur-2xl rounded-[25.5px] p-6 sm:p-7 md:p-8 flex items-center overflow-hidden">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full h-full">
                        {/* LEFT COLUMN: 48% Width */}
                        <div className="lg:col-span-6 flex flex-col justify-center text-left">
                          {/* Subtitle tag */}
                          <div className="inline-flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {service.subtitle}
                          </div>

                          {/* Bold Title */}
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight leading-[1.12] mb-3">
                            {service.title}
                          </h3>

                          {/* 2-line Impact Summary */}
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 max-w-md">
                            {service.description}
                          </p>

                          {/* Feature Badges */}
                          <div className="flex flex-wrap items-center gap-2 mb-5">
                            {service.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100/90 text-slate-700 border border-slate-200/80 hover:bg-slate-200/70 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Electric Gradient Pill CTA */}
                          <div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectService?.(service.title);
                              }}
                              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#00BFE6] text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-200 group"
                            >
                              <span>Explore Service</span>
                              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </button>
                          </div>
                        </div>

                        {/* RIGHT COLUMN: 52% Width 3D Dark Glass Cockpit + Holographic Globe */}
                        <div className="hidden lg:flex lg:col-span-6 h-full items-center justify-center relative">
                          {/* Floating External Nodes */}
                          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 border border-emerald-400/80 shadow-lg shadow-emerald-500/30 flex items-center justify-center text-emerald-400 animate-float-slow z-20">
                            <Zap className="w-4 h-4" />
                          </div>
                          <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-slate-900 border border-cyan-400/80 shadow-lg shadow-cyan-500/30 flex items-center justify-center text-cyan-400 animate-float-delayed z-20">
                            <Layers className="w-4 h-4" />
                          </div>

                          {/* Cockpit Card Container */}
                          <div className="w-full h-full rounded-2xl bg-[#111723] p-4 sm:p-5 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                            {/* Cockpit Window Header */}
                            <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80">
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                </div>
                                <span className="text-xs font-semibold text-white tracking-wide">
                                  Cockpit Telemetry // {service.id}.node
                                </span>
                              </div>
                              <span className="text-[10px] text-emerald-400 font-mono font-bold">
                                {service.latency}
                              </span>
                            </div>

                            {/* Middle Section: Holographic 3D Globe + Neon Wave Chart */}
                            <div className="grid grid-cols-12 gap-3 my-auto items-center">
                              {/* Left telemetry sparkline */}
                              <div className="col-span-7 bg-[#0B101B] rounded-xl p-3 border border-slate-800/70">
                                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5">
                                  <span className="uppercase font-bold tracking-wider">
                                    {service.statLabel}
                                  </span>
                                  <span className="text-emerald-400 font-bold">
                                    {service.statValue}
                                  </span>
                                </div>
                                <svg
                                  className="w-full h-14"
                                  viewBox="0 0 140 45"
                                  fill="none"
                                >
                                  <defs>
                                    <linearGradient
                                      id={`dashSpark-${service.id}`}
                                      x1="0"
                                      y1="0"
                                      x2="0"
                                      y2="1"
                                    >
                                      <stop
                                        offset="0%"
                                        stopColor="#00BFE6"
                                        stopOpacity="0.45"
                                      />
                                      <stop
                                        offset="100%"
                                        stopColor="#22C55E"
                                        stopOpacity="0.0"
                                      />
                                    </linearGradient>
                                  </defs>
                                  <path
                                    d="M 0,35 Q 22,8 48,22 T 95,10 T 140,5 L 140,45 L 0,45 Z"
                                    fill={`url(#dashSpark-${service.id})`}
                                  />
                                  <path
                                    d="M 0,35 Q 22,8 48,22 T 95,10 T 140,5"
                                    stroke="#00BFE6"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </div>

                              {/* Right Holographic 3D Globe Visual */}
                              <div className="col-span-5 bg-[#0B101B] rounded-xl p-2.5 border border-slate-800/70 flex flex-col items-center justify-center relative overflow-hidden">
                                <div className="relative w-16 h-16 flex items-center justify-center">
                                  {/* Rotating Holographic Globe Wireframe */}
                                  <svg
                                    className="w-16 h-16 animate-spin-slow"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                  >
                                    <circle
                                      cx="32"
                                      cy="32"
                                      r="26"
                                      stroke="#00BFE6"
                                      strokeWidth="1.5"
                                      strokeDasharray="4 3"
                                      opacity="0.8"
                                    />
                                    <ellipse
                                      cx="32"
                                      cy="32"
                                      rx="14"
                                      ry="26"
                                      stroke="#22C55E"
                                      strokeWidth="1.2"
                                      opacity="0.7"
                                    />
                                    <ellipse
                                      cx="32"
                                      cy="32"
                                      rx="26"
                                      ry="11"
                                      stroke="#00BFE6"
                                      strokeWidth="1.2"
                                      opacity="0.6"
                                    />
                                    <circle cx="32" cy="32" r="5" fill="#22C55E" />
                                  </svg>
                                  {/* Pulsing Atmosphere Aura */}
                                  <div className="absolute inset-1 rounded-full bg-cyan-400/10 blur-sm pointer-events-none" />
                                </div>
                                <span className="text-[10px] font-mono font-bold text-slate-300 mt-1">
                                  {service.accuracy} Accuracy
                                </span>
                              </div>
                            </div>

                            {/* Cockpit Bottom Equalizer Bar Telemetry */}
                            <div className="bg-[#0B101B] rounded-xl px-3 py-2 border border-slate-800/70 flex items-center justify-between">
                              <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                                <span>Autonomous Multi-Thread Telemetry</span>
                              </div>
                              <div className="flex items-end gap-1 h-3.5">
                                {[40, 75, 55, 95, 70, 100, 85].map((h, bIdx) => (
                                  <span
                                    key={bIdx}
                                    style={{ height: `${h}%` }}
                                    className="w-1.5 rounded-full bg-gradient-to-t from-[#22C55E] to-[#00BFE6]"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ========================================================
                     FLANKING 3D SIDE CARDS (Index ±1, ±2): CRISP PERSPECTIVE
                  ======================================================== */
                  <div className="w-full h-full bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl shadow-slate-900/[0.04] flex flex-col justify-between text-left transition-all">
                    <div>
                      {/* Subtitle */}
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1.5">
                        ✦ {service.subtitle}
                      </span>

                      {/* Title */}
                      <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
                        {service.title}
                      </h4>

                      {/* Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.tags.slice(0, 2).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200/80 shadow-2xs"
                          >
                            + {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Flanking Card Button */}
                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentIndex(idx);
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#00BFE6] text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-400/25 hover:scale-105 transition-all"
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          4. CAROUSEL CONTROLS: Frosted Arrows + Gradient Dots (mt-6)
      ======================================================== */}
      <div className="relative z-20 flex items-center justify-center gap-4 mt-6">
        {/* Left Frosted Circular Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous Service"
          className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 hover:text-slate-950 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Centered Pagination Dots */}
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xs">
          {services.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === dotIdx
                  ? "w-7 h-2.5 bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#00BFE6] shadow-sm shadow-emerald-500/25"
                  : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Right Frosted Circular Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next Service"
          className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 hover:text-slate-950 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
