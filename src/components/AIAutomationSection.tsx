"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  PhoneCall,
  Zap,
  Headphones,
  Cpu,
  MessageSquare,
  BarChart3,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

interface AIAutomationSectionProps {
  onStartProject?: () => void;
}

export default function AIAutomationSection({ onStartProject }: AIAutomationSectionProps) {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Six 3D AI Satellite Elements arranged in 60-degree increments
  const aiNodes = [
    {
      id: 0,
      title: "AI Receptionist",
      tag: "Sub-200ms Voice",
      angleDeg: 0, // Top
      desc: "Ultra-low-latency voice agent with natural inflection answering 24/7 and scheduling calendars.",
      icon: PhoneCall,
      accent: "#72E73E",
      highlight: "99.8% Call Answer Rate",
    },
    {
      id: 1,
      title: "AI Sales Agents",
      tag: "Pipeline Growth",
      angleDeg: 60, // Top-Right
      desc: "Autonomous discovery agents conducting interactive qualification and quote delivery.",
      icon: Zap,
      accent: "#10B981",
      highlight: "+42% Pipeline Velocity",
    },
    {
      id: 2,
      title: "AI Customer Support",
      tag: "Omnichannel 24/7",
      angleDeg: 120, // Bottom-Right
      desc: "Resolves 80% of routine tickets across WhatsApp, web, and email with seamless human handoff.",
      icon: Headphones,
      accent: "#06B6D4",
      highlight: "< 5s First Response",
    },
    {
      id: 3,
      title: "Workflow Automation",
      tag: "Zero Friction",
      angleDeg: 180, // Bottom
      desc: "Self-healing event-driven pipelines orchestrating internal apps, databases, and microservices.",
      icon: Cpu,
      accent: "#0EA5E9",
      highlight: "100% Error Containment",
    },
    {
      id: 4,
      title: "AI Chatbots",
      tag: "Custom RAG",
      angleDeg: 240, // Bottom-Left
      desc: "Multi-tenant conversational assistants grounded in proprietary enterprise knowledge bases.",
      icon: MessageSquare,
      accent: "#00BFE6",
      highlight: "Zero Hallucination Vector Mesh",
    },
    {
      id: 5,
      title: "CRM Automation",
      tag: "Real-Time Sync",
      angleDeg: 300, // Top-Left
      desc: "Bi-directional lead attribution, pipeline tracking, and automated contact enrichment.",
      icon: BarChart3,
      accent: "#22C55E",
      highlight: "Instant Bi-Directional CRM Sync",
    },
  ];

  // Orbital radius in pixels for desktop layout
  const ORBIT_RADIUS = 280;

  return (
    <section
      id="ai-automation"
      className="relative w-full py-20 sm:py-24 md:py-32 bg-[#08120E] text-white overflow-hidden select-none"
    >
      {/* ========================================================
          1. CINEMATIC BACKGROUND: GLASS REFRACTION & DARK EMERALD
      ======================================================== */}
      <div className="absolute inset-0 pointer-events-none scale-105">
        <Image
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80"
          alt="Cinematic Glass Background"
          fill
          priority={false}
          className="object-cover object-center brightness-[0.12] contrast-125 saturate-150"
          sizes="100vw"
        />
        {/* Soft Vignette & Deep Emerald Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08120E]/95 via-[#0A1713]/85 to-[#08120E]/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,191,230,0.14),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(114,231,62,0.12),transparent_60%)]" />
      </div>

      {/* High-Tech Circuit Cross Grid */}
      <div className="absolute inset-0 bg-grid-cross opacity-10 pointer-events-none" />

      {/* Atmospheric Soft Light Blooms */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#5BE369]/08 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[520px] h-[520px] bg-[#00BFE6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================
            2. SECTION HEADING
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/15 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              AI &amp; AUTOMATION
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
            Your Business,{" "}
            <span className="bg-gradient-to-r from-[#72E73E] via-[#10B981] to-[#00BFE6] bg-clip-text text-transparent">
              Powered by Intelligent AI.
            </span>
          </h2>

          {/* Narrative */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Six intelligent solutions. One connected ecosystem. Automate conversations, streamline
            operations and accelerate business growth.
          </p>
        </motion.div>

        {/* ========================================================
            3. DESKTOP CHAKRI: ROTATING LOGO ENERGY CHAKRA & ORBITING NODES
        ======================================================== */}
        <div className="hidden lg:block relative w-full h-[680px] max-w-5xl mx-auto chakra-showcase-container">
          {/* Outer SVG Neural Circuit Lines Connecting Center to Orbit */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1000 680"
          >
            <defs>
              <linearGradient id="chakraRayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#72E73E" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00BFE6" stopOpacity="0.9" />
              </linearGradient>

              <filter id="chakraGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Static Radial Guide Rings */}
            <circle
              cx="500"
              cy="340"
              r={ORBIT_RADIUS}
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <circle
              cx="500"
              cy="340"
              r={ORBIT_RADIUS + 30}
              fill="none"
              stroke="rgba(114, 231, 62, 0.08)"
              strokeWidth="1"
            />
            <circle
              cx="500"
              cy="340"
              r={ORBIT_RADIUS - 30}
              fill="none"
              stroke="rgba(0, 191, 230, 0.08)"
              strokeWidth="1"
            />
          </svg>

          {/* ========================================================
              CENTER: THE HIGH-TECH NAVCHETNAA LOGO CHAKRA
          ======================================================== */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
              {/* Outer Spinning Chakra Ring with Circuit Notches */}
              <div className="absolute inset-0 rounded-full border border-emerald-400/30 chakra-spin-slow pointer-events-none">
                {/* Spoke Markers */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                  <div
                    key={deg}
                    style={{ transform: `rotate(${deg}deg)` }}
                    className="absolute inset-0 flex justify-center items-start"
                  >
                    <span className="w-1 h-3.5 bg-gradient-to-b from-emerald-400 to-transparent rounded-full -mt-1.5" />
                  </div>
                ))}
              </div>

              {/* Middle Counter-Rotating Hologram Ring */}
              <div className="absolute inset-3 rounded-full border border-cyan-400/40 chakra-spin-reverse-medium pointer-events-none">
                {[30, 90, 150, 210, 270, 330].map((deg) => (
                  <div
                    key={deg}
                    style={{ transform: `rotate(${deg}deg)` }}
                    className="absolute inset-0 flex justify-center items-end"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400 -mb-1" />
                  </div>
                ))}
              </div>

              {/* Pulsing Luminous Quantum Backdrop Aura */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-[#72E73E]/20 via-[#10B981]/20 to-[#00BFE6]/25 blur-xl chakra-breathing-aura pointer-events-none" />

              {/* Central Frosted Glass Capsule */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-slate-950/85 backdrop-blur-2xl border-2 border-emerald-400/50 shadow-2xl shadow-emerald-500/30 flex items-center justify-center p-5 group hover:border-cyan-400 transition-colors duration-500">
                {/* Subtle Inner Ring */}
                <div className="absolute inset-1.5 rounded-full border border-white/10 pointer-events-none" />

                {/* THE NAVCHETNAA AI LOGO */}
                <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src="/navchetnaa-logo-hq.png"
                    alt="NAVCHETNAA AI Logo"
                    width={180}
                    height={110}
                    className="object-contain drop-shadow-[0_0_20px_rgba(114,231,62,0.6)]"
                    priority
                  />
                </div>

                {/* Subtle Live Badge at Bottom of Capsule */}
                <div className="absolute -bottom-2.5 px-3 py-0.5 rounded-full bg-slate-900 border border-emerald-400/70 text-[10px] font-mono text-emerald-400 font-bold tracking-widest shadow-md">
                  CORE ENGINE
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              ORBITAL CHAKRI: THE 6 REVOLVING AI SATELLITE NODES
          ======================================================== */}
          {/* The Outer Orbital Track (Spins continuously via CSS @keyframes) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
            <div
              className="relative chakra-orbit-ring"
              style={{
                width: `${ORBIT_RADIUS * 2}px`,
                height: `${ORBIT_RADIUS * 2}px`,
              }}
            >
              {aiNodes.map((node, i) => {
                // Trigonometric position on circle at rest angle
                const rad = (node.angleDeg * Math.PI) / 180;
                // Center is (ORBIT_RADIUS, ORBIT_RADIUS)
                const leftPos = ORBIT_RADIUS + Math.cos(rad) * ORBIT_RADIUS;
                const topPos = ORBIT_RADIUS + Math.sin(rad) * ORBIT_RADIUS;
                const Icon = node.icon;
                const isHovered = hoveredNode === i;

                return (
                  <div
                    key={node.id}
                    style={{
                      left: `${leftPos}px`,
                      top: `${topPos}px`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                  >
                    {/* The Counter-Orbit Wrapper (Rotates in reverse so card stays perfectly upright) */}
                    <div className="chakra-counter-spin">
                      <div
                        onMouseEnter={() => setHoveredNode(i)}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={onStartProject}
                        className={`group relative rounded-2xl p-3 sm:p-3.5 backdrop-blur-2xl border transition-all duration-300 cursor-pointer shadow-xl select-none ${
                          isHovered
                            ? "bg-slate-900/95 border-emerald-400 shadow-emerald-500/30 ring-2 ring-emerald-400/50 scale-110 z-40"
                            : "bg-white/[0.06] border-white/15 hover:border-emerald-300/60 shadow-black/50"
                        }`}
                      >
                        {/* Top Row: Mini 3D Icon & Status Tag */}
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-950 shadow-md transition-all duration-300 group-hover:scale-105"
                            style={{
                              background: `linear-gradient(135deg, ${node.accent} 0%, #00BFE6 100%)`,
                            }}
                          >
                            <Icon className="w-4 h-4" />
                          </div>

                          <div className="text-left">
                            <span className="text-[10px] font-mono font-bold text-emerald-400 block uppercase tracking-wider leading-none mb-1">
                              {node.tag}
                            </span>
                            <h4 className="text-xs sm:text-sm font-black text-white whitespace-nowrap group-hover:text-emerald-300 transition-colors">
                              {node.title}
                            </h4>
                          </div>
                        </div>

                        {/* Interactive Tooltip Expansion on Hover */}
                        {isHovered && (
                          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-64 p-3 rounded-xl bg-slate-950/95 border border-emerald-400/80 shadow-2xl backdrop-blur-2xl text-left z-50 pointer-events-none animate-in fade-in duration-200">
                            <p className="text-[11px] text-slate-300 leading-snug mb-2">
                              {node.desc}
                            </p>
                            <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400 pt-1 border-t border-white/10">
                              <span>{node.highlight}</span>
                              <span className="font-bold flex items-center gap-0.5 text-cyan-300">
                                Explore ↗
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================
            4. MOBILE & TABLET RESPONSIVE ADAPTIVE LAYOUT (<1024px)
        ======================================================== */}
        <div className="block lg:hidden space-y-10">
          {/* Central Logo Chakra for Mobile */}
          <div className="relative w-full py-4 flex items-center justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              {/* Rotating Outer Chakra Ring */}
              <div className="absolute inset-0 rounded-full border border-emerald-400/30 chakra-spin-slow pointer-events-none">
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    style={{ transform: `rotate(${deg}deg)` }}
                    className="absolute inset-0 flex justify-center items-start"
                  >
                    <span className="w-1 h-3 bg-emerald-400 rounded-full -mt-1" />
                  </div>
                ))}
              </div>

              {/* Pulsing Luminous Backlight */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#72E73E]/20 via-[#10B981]/20 to-[#00BFE6]/25 blur-xl chakra-breathing-aura pointer-events-none" />

              {/* Central Capsule with Logo */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-slate-950/85 backdrop-blur-xl border-2 border-emerald-400/50 shadow-2xl flex items-center justify-center p-4">
                <Image
                  src="/navchetnaa-logo-hq.png"
                  alt="NAVCHETNAA AI Logo"
                  width={150}
                  height={90}
                  className="object-contain drop-shadow-[0_0_15px_rgba(114,231,62,0.6)]"
                />
              </div>
            </div>
          </div>

          {/* 6 Compact Glassmorphic Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {aiNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  onClick={onStartProject}
                  className="p-4 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-xl shadow-lg text-left active:scale-98 transition-transform"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-950 shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, ${node.accent} 0%, #00BFE6 100%)`,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400">
                      {node.tag}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">{node.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            5. PRIMARY CTA ROW & ENTERPRISE GUARANTEE
        ======================================================== */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#72E73E] via-[#10B981] to-[#00BFE6] text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-emerald-500/25 hover:shadow-cyan-500/35 hover:scale-105 active:scale-95 transition-all duration-200 group"
            >
              <span>Explore AI Solutions</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC-2 Hardened • 30-Day Hypercare Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
