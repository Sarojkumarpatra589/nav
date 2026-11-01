"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Code2,
  Globe,
  Smartphone,
  Database,
  Network,
  Cloud,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Cpu,
  Sparkles,
  TrendingUp,
  Activity,
  Terminal,
  ExternalLink,
  Lock,
  Server,
  Zap,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

interface SoftwareDevSectionProps {
  onStartProject?: () => void;
}

// ========================================================
// REUSABLE 3D TILT CONTAINER FOR ASYMMETRIC BENTO CARDS
// ========================================================
function BentoTiltCard({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // max 4.5deg tilt for a restrained, ultra-premium feel
    const rX = ((y - centerY) / centerY) * -4.5;
    const rY = ((x - centerX) / centerX) * 4.5;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? "transform 0.12s ease-out" : "transform 0.5s ease-out",
      }}
      className={`relative group rounded-3xl transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}

export default function SoftwareDevSection({ onStartProject }: SoftwareDevSectionProps) {
  return (
    <section
      id="software-dev"
      className="relative w-full py-20 sm:py-28 md:py-36 bg-[#F8FCF9] text-slate-900 overflow-hidden select-none"
    >
      {/* ========================================================
          1. BACKGROUND TEXTURE & BRAND GRADIENT BLOOMS
      ======================================================== */}
      {/* Precision architectural tech cross grid */}
      <div className="absolute inset-0 bg-grid-cross opacity-20 pointer-events-none" />

      {/* Atmospheric Soft Light Blooms (Brand Palette) */}
      <div className="absolute top-16 -left-32 w-[520px] h-[520px] bg-emerald-400/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[520px] h-[520px] bg-cyan-400/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[460px] h-[460px] bg-[#72E73E]/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================
            2. SECTION HEADER (EXACT REQUIREMENTS)
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 md:mb-20"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/25 mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
              CUSTOM ENTERPRISE SYSTEMS
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
            Software Built Around{" "}
            <span className="bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#00BFE6] bg-clip-text text-transparent">
              Your Business.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            We design and develop custom software, intelligent platforms, and connected business
            systems tailored to your operations, workflows, and long-term goals.
          </p>
        </motion.div>

        {/* ========================================================
            3. ASYMMETRIC BENTO GRID (6 DISTINCT CARDS)
            - Desktop: 3-column Bento Grid (Card 1 occupies 2 cols & 2 rows)
            - Tablet: 2-column balanced grid
            - Mobile: 1-column clean stack
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {/* ========================================================
              CARD 1: LARGE FEATURED CARD (Custom Software Development)
              Occupies 2 columns and 2 rows on desktop
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <BentoTiltCard
              onClick={onStartProject}
              className="h-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-400/60 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Row: Label, Icon, and Meta */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  {/* Small Label required by prompt */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    BUILT FOR YOUR BUSINESS
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-500" />
                    High-Concurrency
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
                  Custom Software Development
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-6">
                  Purpose-built software designed around your unique business processes,
                  requirements, and growth plans.
                </p>
              </div>

              {/* Central Realistic Floating Application Dashboard Visual */}
              <div className="relative my-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100 shadow-2xl overflow-hidden">
                {/* Browser/Window Header */}
                <div className="px-4 py-3 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
                    <span className="ml-3 font-mono text-[11px] text-slate-400 hidden sm:inline">
                      https://app.enterprise.navchetnaa.ai/production
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                      HEALTHY • 99.99% SLA
                    </span>
                  </div>
                </div>

                {/* Dashboard Metrics Bar */}
                <div className="p-4 sm:p-5">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 block">RECURRING STREAM</span>
                      <p className="text-sm sm:text-lg font-black text-white mt-0.5">$1.48M ARR</p>
                      <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-0.5 mt-0.5">
                        <TrendingUp className="w-3 h-3" /> +28.4%
                      </span>
                    </div>

                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 block">EDGE LATENCY</span>
                      <p className="text-sm sm:text-lg font-black text-white mt-0.5">12.4ms P99</p>
                      <span className="text-[10px] text-cyan-400 font-bold flex items-center gap-0.5 mt-0.5">
                        <Zap className="w-3 h-3" /> Sub-Second
                      </span>
                    </div>

                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 block">INGESTION</span>
                      <p className="text-sm sm:text-lg font-black text-white mt-0.5">1.4M / hr</p>
                      <span className="text-[10px] text-teal-400 font-bold flex items-center gap-0.5 mt-0.5">
                        <Activity className="w-3 h-3" /> Zero Loss
                      </span>
                    </div>
                  </div>

                  {/* SVG Live Ingestion Telemetry Curve with Glowing Gradients */}
                  <div className="relative h-28 sm:h-36 w-full rounded-xl bg-slate-900/90 border border-slate-800 p-2 overflow-hidden flex flex-col justify-end">
                    <div className="absolute top-2 left-3 flex items-center justify-between right-3 text-[10px] font-mono text-slate-400">
                      <span>Real-Time Cluster Throughput</span>
                      <span className="text-emerald-400 font-bold">4 Nodes Active</span>
                    </div>
                    <svg className="w-full h-24" viewBox="0 0 500 110" fill="none">
                      <defs>
                        <linearGradient id="bentoFeatureGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#72E73E" stopOpacity="0.45" />
                          <stop offset="60%" stopColor="#10B981" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#00BFE6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,90 C60,85 100,50 160,65 C220,80 270,25 340,40 C410,55 450,15 500,8 L500,110 L0,110 Z"
                        fill="url(#bentoFeatureGrad)"
                      />
                      <path
                        d="M0,90 C60,85 100,50 160,65 C220,80 270,25 340,40 C410,55 450,15 500,8"
                        stroke="#72E73E"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="160" cy="65" r="3.5" fill="#00BFE6" />
                      <circle cx="340" cy="40" r="3.5" fill="#72E73E" />
                      <circle cx="500" cy="8" r="4" fill="#72E73E" className="animate-ping" />
                    </svg>
                  </div>

                  {/* Microservices Architecture Nodes */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-emerald-400" />
                      <span>FIDO2 RBAC</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Server className="w-3 h-3 text-cyan-400" />
                      <span>Multi-Region AWS</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Cpu className="w-3 h-3 text-teal-400" />
                      <span>Event-Driven Mesh</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>SOC-2 Hardened</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 font-bold">
                  Architecture • Microservices • High Load
                </span>
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 group-hover:text-emerald-600 transition-colors">
                  <span>Explore service</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </BentoTiltCard>
          </motion.div>

          {/* ========================================================
              CARD 2: WEBSITE DEVELOPMENT
              Occupies 1 column on desktop (Row 1, Column 3)
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1"
          >
            <BentoTiltCard
              onClick={onStartProject}
              className="h-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-400/60 p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 text-slate-950 flex items-center justify-center font-bold shadow-sm">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                    Next.js 14 App
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                  Website Development
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  High-performance websites and web platforms that turn visitors into customers.
                </p>
              </div>

              {/* Floating Desktop Screen Mockup with Real Web Interface */}
              <div className="relative my-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden group-hover:border-emerald-400/40 transition-colors">
                {/* Desktop Screen Bar */}
                <div className="px-3 py-2 bg-slate-800/90 border-b border-slate-700/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/90" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/90" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/90" />
                    <span className="ml-2 text-slate-400 truncate max-w-[120px]">
                      navchetnaa.ai/platform
                    </span>
                  </div>
                  <span className="text-emerald-400 font-bold">100/100</span>
                </div>

                {/* Real High-Quality Image Preview with Subtle Hover Zoom */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="Modern Web Platform Interface"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Performance Pill */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md text-emerald-300 border border-emerald-400/40 font-bold">
                      &lt; 0.8s LCP
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold shadow-sm">
                      Zero Cumulative Shift
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">SEO &amp; 3D Visuals</span>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-600 transition-colors">
                  <span>Explore service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </BentoTiltCard>
          </motion.div>

          {/* ========================================================
              CARD 3: MOBILE APP DEVELOPMENT
              Occupies 1 column on desktop (Row 2, Column 3)
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-1"
          >
            <BentoTiltCard
              onClick={onStartProject}
              className="h-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-400/60 p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 text-slate-950 flex items-center justify-center font-bold shadow-sm">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 font-bold border border-cyan-200">
                    iOS &amp; Android
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                  Mobile App Development
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Intuitive Android and iOS applications built for seamless digital experiences.
                </p>
              </div>

              {/* Floating Smartphone Mockup with Realistic Bezel */}
              <div className="relative my-3 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-2 shadow-xl group-hover:border-cyan-400/40 transition-colors">
                <div className="relative h-40 w-full rounded-xl overflow-hidden border border-white/10 group-hover:-translate-y-1 transition-transform duration-500">
                  {/* Real Mobile App Screenshot */}
                  <Image
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
                    alt="Mobile App Interface"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

                  {/* Smartphone Dynamic Island Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-black rounded-full border border-white/20 shadow-sm" />

                  {/* Floating Tags */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/90 text-cyan-300 font-bold border border-cyan-400/30">
                      60 FPS Native
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/90 text-emerald-300 font-bold border border-emerald-400/30">
                      Offline-First Sync
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">React Native • Flutter</span>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-600 transition-colors">
                  <span>Explore service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </BentoTiltCard>
          </motion.div>

          {/* ========================================================
              CARD 4: CRM & ERP SYSTEMS
              Row 3, Column 1 on desktop (Dark emerald / mint visual treatment)
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1"
          >
            <BentoTiltCard
              onClick={onStartProject}
              className="h-full bg-gradient-to-br from-[#0B1E16] via-[#091712] to-[#07130F] text-white border border-emerald-500/30 shadow-xl shadow-emerald-950/20 hover:shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-400/80 p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-400 to-[#72E73E] text-slate-950 flex items-center justify-center font-bold shadow-md">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/30">
                    Operations Hub
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                  CRM &amp; ERP Systems
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Centralize customers, operations, teams, and business data in one connected platform.
                </p>
              </div>

              {/* Sophisticated Dark Emerald CRM Dashboard Preview */}
              <div className="my-3 p-3.5 rounded-2xl bg-black/40 border border-emerald-500/20 backdrop-blur-md space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">ENTERPRISE PIPELINE</span>
                  <span className="text-emerald-400 font-bold">$1.42M Invoiced</span>
                </div>

                {/* Pipeline Funnel Bars */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-slate-300">
                    <span>Active Leads</span>
                    <span className="font-mono text-emerald-300 font-bold">248 In Queue</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-4/5 h-full rounded-full bg-gradient-to-r from-emerald-400 to-[#72E73E]" />
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-300">
                    <span>ERP Invoices Auto-Matched</span>
                    <span className="font-mono text-cyan-300 font-bold">98.9%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-[98%] h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                  </div>
                </div>

                {/* Role Status Tag */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Multi-Tenant RBAC</span>
                  <span className="text-emerald-400 font-bold">Auto-Sync Active</span>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Unified Analytics</span>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span>Explore service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </BentoTiltCard>
          </motion.div>

          {/* ========================================================
              CARD 5: API & SYSTEM INTEGRATION
              Row 3, Column 2 on desktop (Interconnected Nodes & Flowing Lines)
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="col-span-1"
          >
            <BentoTiltCard
              onClick={onStartProject}
              className="h-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-400/60 p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-500 text-slate-950 flex items-center justify-center font-bold shadow-sm">
                    <Network className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 font-bold border border-teal-200">
                    Zero Data Loss
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                  API &amp; System Integration
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Connect your existing tools, applications, and services through reliable integrations.
                </p>
              </div>

              {/* Interconnected API Node Graph Visual with Flowing Circuit Lines */}
              <div className="relative my-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white shadow-inner overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 300 130"
                  fill="none"
                >
                  {/* Flowing dashed connection lines */}
                  <line
                    x1="150"
                    y1="65"
                    x2="45"
                    y2="30"
                    stroke="#10B981"
                    strokeWidth="1.5"
                    className="bento-dash-flow opacity-70"
                  />
                  <line
                    x1="150"
                    y1="65"
                    x2="255"
                    y2="30"
                    stroke="#00BFE6"
                    strokeWidth="1.5"
                    className="bento-dash-flow opacity-70"
                  />
                  <line
                    x1="150"
                    y1="65"
                    x2="45"
                    y2="100"
                    stroke="#00BFE6"
                    strokeWidth="1.5"
                    className="bento-dash-flow opacity-70"
                  />
                  <line
                    x1="150"
                    y1="65"
                    x2="255"
                    y2="100"
                    stroke="#72E73E"
                    strokeWidth="1.5"
                    className="bento-dash-flow opacity-70"
                  />
                </svg>

                {/* Central Hub & Peripheral Application Nodes */}
                <div className="relative z-10 flex flex-col justify-between h-28">
                  <div className="flex items-center justify-between text-[9px] font-mono">
                    <span className="px-2 py-1 rounded bg-slate-900 border border-emerald-500/40 text-emerald-300">
                      Stripe
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-900 border border-cyan-500/40 text-cyan-300">
                      Salesforce
                    </span>
                  </div>

                  {/* Center Hub */}
                  <div className="self-center px-3 py-1 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-black text-[11px] tracking-wide shadow-lg shadow-emerald-500/30 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>SYNAPSE GATEWAY</span>
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono">
                    <span className="px-2 py-1 rounded bg-slate-900 border border-cyan-500/40 text-cyan-300">
                      Postgres DB
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-900 border border-emerald-500/40 text-emerald-300">
                      SAP / ERP
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Sub-15ms Roundtrip</span>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-600 transition-colors">
                  <span>Explore service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </BentoTiltCard>
          </motion.div>

          {/* ========================================================
              CARD 6: CLOUD & BUSINESS AUTOMATION
              Row 3, Column 3 on desktop (Scalable Cloud & Automation Mesh)
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <BentoTiltCard
              onClick={onStartProject}
              className="h-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-400/60 p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-[#72E73E] text-slate-950 flex items-center justify-center font-bold shadow-sm">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                    Self-Healing
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                  Cloud &amp; Business Automation
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Streamline operations with scalable cloud infrastructure and intelligent automated workflows.
                </p>
              </div>

              {/* Cloud Workflow Pipeline & Telemetry Strip */}
              <div className="relative my-3 p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100 shadow-xl overflow-hidden group-hover:border-emerald-400/40 transition-colors">
                {/* Background image overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                    alt="Cloud Mesh"
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>

                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>WORKFLOW TRIGGER</span>
                    <span className="text-emerald-400 font-bold">12/12 Services Green</span>
                  </div>

                  {/* Connected Workflow Stream */}
                  <div className="flex items-center justify-between gap-1 text-[10px] font-mono">
                    <div className="px-2 py-1 rounded bg-slate-900/90 border border-white/10 text-slate-200">
                      Webhook
                    </div>
                    <span className="text-emerald-400">➔</span>
                    <div className="px-2 py-1 rounded bg-emerald-500/20 border border-emerald-400/40 text-emerald-300">
                      AI Filter
                    </div>
                    <span className="text-cyan-400">➔</span>
                    <div className="px-2 py-1 rounded bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
                      Cloud Exec
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Failover Latency</span>
                    <span className="text-emerald-400 font-bold">&lt; 2s Auto-Recovery</span>
                  </div>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">AWS • GCP • Kubernetes</span>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-600 transition-colors">
                  <span>Explore service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </BentoTiltCard>
          </motion.div>
        </div>

        {/* ========================================================
            4. ENTERPRISE REASSURANCE STRIP & PRIMARY CTA
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-14 sm:mt-18 pt-10 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs text-slate-600 font-mono">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Full Source Code Ownership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Zero Vendor Lock-In</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Enterprise SLA &amp; Hypercare</span>
            </div>
          </div>

          {/* Action CTA */}
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-950 text-white font-bold text-sm tracking-wide shadow-lg shadow-slate-950/20 hover:bg-slate-900 hover:scale-105 active:scale-95 transition-all duration-200 group"
          >
            <span>Start Your Custom Build</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
