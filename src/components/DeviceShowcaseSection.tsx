"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Smartphone,
  Globe,
  Layers,
  Palette,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Activity,
  Sparkles,
  Laptop,
  Bell,
  Lock,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface DeviceShowcaseSectionProps {
  onStartProject?: () => void;
}

// ========================================================
// 1. HIGH-PERFORMANCE NEURAL NETWORK CANVAS BACKGROUND
// ========================================================
function NeuralCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const isMobile = width < 768;
    const nodeCount = isMobile ? 28 : 58;
    const connectionDist = isMobile ? 105 : 145;

    const brandColors = [
      "rgba(114, 231, 62, ", // Lime Green
      "rgba(16, 185, 129, ", // Emerald Green
      "rgba(91, 227, 105, ", // Mint Green
      "rgba(0, 191, 230, ",  // Cyan Blue
    ];

    interface NeuralNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      colorBase: string;
      phase: number;
    }

    interface SynapsePulse {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      color: string;
    }

    const nodes: NeuralNode[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        colorBase: brandColors[Math.floor(Math.random() * brandColors.length)],
        phase: Math.random() * Math.PI * 2,
      });
    }

    const pulses: SynapsePulse[] = [];
    for (let p = 0; p < (isMobile ? 6 : 14); p++) {
      pulses.push({
        fromIndex: Math.floor(Math.random() * nodeCount),
        toIndex: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.008,
        color: brandColors[Math.floor(Math.random() * brandColors.length)],
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let time = 0;
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Connect nodes within distance threshold
      for (let i = 0; i < nodeCount; i++) {
        const nA = nodes[i];
        nA.x += nA.vx;
        nA.y += nA.vy;

        if (nA.x < 0 || nA.x > width) nA.vx *= -1;
        if (nA.y < 0 || nA.y > height) nA.vy *= -1;

        for (let j = i + 1; j < nodeCount; j++) {
          const nB = nodes[j];
          const dx = nB.x - nA.x;
          const dy = nB.y - nA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nA.x, nA.y);
            ctx.lineTo(nB.x, nB.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Draw travelling signal pulses
      for (let p = 0; p < pulses.length; p++) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulse.progress = 0;
          pulse.fromIndex = Math.floor(Math.random() * nodeCount);
          pulse.toIndex = Math.floor(Math.random() * nodeCount);
        }

        const nodeA = nodes[pulse.fromIndex];
        const nodeB = nodes[pulse.toIndex];
        const px = nodeA.x + (nodeB.x - nodeA.x) * pulse.progress;
        const py = nodeA.y + (nodeB.y - nodeA.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `${pulse.color}0.85)`;
        ctx.shadowColor = `${pulse.color}0.9)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw glowing nodes
      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i];
        const pulse = Math.sin(time + n.phase) * 0.3 + 0.7;
        const currentRadius = n.radius * pulse;

        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `${n.colorBase}0.12)`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${n.colorBase}0.9)`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

// ========================================================
// 2. MAIN COMPONENT: SCROLL-PINNED BOTTOM-TO-TOP OVERLAPPING STACK
// ========================================================
export default function DeviceShowcaseSection({ onStartProject }: DeviceShowcaseSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Overall scroll progress through the pinned container (0 -> 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamic indicator tracking active card
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.34) {
      setActiveCardIndex(0);
    } else if (latest < 0.64) {
      setActiveCardIndex(1);
    } else if (latest < 0.94) {
      setActiveCardIndex(2);
    } else {
      setActiveCardIndex(3);
    }
  });

  // ========================================================
  // EXACT OVERLAPPING CARD KINEMATICS:
  // Card 01 is fixed at y: 0% inside the stage.
  // Card 02 slides UP from bottom (100% -> 0%) between 0.08 -> 0.34
  // Card 03 slides UP from bottom (100% -> 0%) between 0.38 -> 0.64
  // Card 04 slides UP from bottom (100% -> 0%) between 0.68 -> 0.94
  // Card 04 finishes at 0.94 and section naturally releases at 1.00!
  // ========================================================
  const card2Y = useTransform(scrollYProgress, [0.08, 0.34], ["100%", "0%"]);
  const card3Y = useTransform(scrollYProgress, [0.38, 0.64], ["100%", "0%"]);
  const card4Y = useTransform(scrollYProgress, [0.68, 0.94], ["100%", "0%"]);

  return (
    <section
      id="websites-apps"
      ref={containerRef}
      className="relative w-full h-[220vh] bg-[#07130E] text-white select-none"
    >
      {/* Background Gradients & Ambient Blooms (Contained strictly to this section) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060E0A] via-[#081510] to-[#050C09]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,191,230,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(114,231,62,0.1),transparent_65%)]" />
        {/* HTML5 Canvas Neural Network */}
        <NeuralCanvasBackground />
      </div>

      {/* ========================================================
          STICKY FULL-VIEWPORT STAGE (Pinned as user scrolls)
          pt-20 ensures clean clearance under the floating navbar!
      ======================================================== */}
      <div
        style={{ position: "sticky", top: 0 }}
        className="sticky top-0 h-screen h-[100dvh] w-full flex flex-col justify-between pt-20 sm:pt-22 lg:pt-24 pb-3 sm:pb-5 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden"
      >
        {/* ========================================================
            STAGE TOP: SECTION HEADER & DYNAMIC PROGRESS PILL
        ======================================================== */}
        <div className="max-w-5xl mx-auto w-full flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 pb-1.5 flex-shrink-0">
          <div className="text-left max-w-2xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/15 mb-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                DIGITAL PRODUCTS &amp; EXPERIENCES
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              Digital Experiences That{" "}
              <span className="bg-gradient-to-r from-[#72E73E] via-[#10B981] to-[#00BFE6] bg-clip-text text-transparent">
                Make an Impact.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-0.5 text-xs sm:text-sm text-slate-300 max-w-xl line-clamp-1 font-normal leading-relaxed">
              From consumer iOS &amp; Android mobile applications to high-performance web
              flagships, we craft interfaces that captivate users and drive measurable commercial
              results.
            </p>
          </div>

          {/* Dynamic Card Progress Pill */}
          <div className="flex items-center gap-2 self-start sm:self-end bg-slate-900/90 backdrop-blur-xl px-3 py-1.5 rounded-full border border-emerald-400/40 shadow-xl flex-shrink-0">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3].map((idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeCardIndex === idx
                      ? "w-5 bg-gradient-to-r from-emerald-400 to-cyan-400"
                      : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400">
              0{activeCardIndex + 1} / 04
            </span>
          </div>
        </div>

        {/* ========================================================
            STAGE CENTER: THE OVERLAPPING CARD STAGE FRAME
            All cards live inside this same relative container.
            overflow-hidden ensures incoming cards emerge directly
            from the bottom edge of the currently visible card!
        ======================================================== */}
        <div className="relative w-full max-w-5xl mx-auto flex-1 my-1 min-h-[340px] max-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15">
          {/* ========================================================
              CARD 01: MOBILE APP DEVELOPMENT
              Starts at rest (y: 0%). z-index: 10
              Light Mint & Emerald Gradient
          ======================================================== */}
          <div
            style={{ zIndex: 10 }}
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#EAF8F1] via-[#F2FAF5] to-[#E2F7ED] text-slate-900 p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden"
          >
            {/* Header row */}
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-600/30 text-[10px] sm:text-[11px] font-mono font-bold text-emerald-900 uppercase tracking-wide">
                <Smartphone className="w-3.5 h-3.5 text-emerald-700" />
                ANDROID &amp; iOS DEVELOPMENT
              </div>
              <span className="text-xs font-mono font-bold text-emerald-800">
                CARD 01
              </span>
            </div>

            {/* Split Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto">
              <div className="lg:col-span-6 space-y-2 sm:space-y-3 text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Apps People Love to Use.
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-lg">
                  Beautiful, intuitive Android and iOS applications designed to create engaging
                  experiences and support business growth.
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 border border-emerald-200 text-[11px] font-mono font-bold text-slate-800 shadow-2xs">
                    60 FPS Native Performance
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 border border-emerald-200 text-[11px] font-mono font-bold text-slate-800 shadow-2xs">
                    Biometric Authorization
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 border border-emerald-200 text-[11px] font-mono font-bold text-slate-800 shadow-2xs">
                    Offline-First Sync
                  </span>
                </div>
              </div>

              {/* Right Visual: Floating Smartphone Mockup */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative w-48 sm:w-56 md:w-60 h-[220px] sm:h-[250px] md:h-[270px] rounded-[28px] bg-slate-950 p-2 shadow-2xl border-4 border-slate-900 overflow-hidden group">
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-black rounded-full z-30 border border-white/20" />

                  <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-slate-900">
                    <Image
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80"
                      alt="Mobile App Interface"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Push Notification Pill */}
                    <div className="absolute top-8 left-2 right-2 p-1.5 rounded-xl bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-900 shadow-xl flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-md bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                        <Bell className="w-2.5 h-2.5" />
                      </div>
                      <div className="text-left text-[8px] leading-tight">
                        <p className="font-bold text-slate-900">Payment Processed</p>
                        <p className="text-slate-500 font-mono">+$2,450.00 • Instant Sync</p>
                      </div>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 p-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-white/20 text-center text-[8px] font-mono text-emerald-300">
                      FaceID Verified • Sub-200ms
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="pt-2 border-t border-emerald-300/60 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-mono text-slate-600 font-bold">
                Flutter • React Native • Swift • Kotlin
              </span>
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-900 hover:text-emerald-700 transition-colors group"
              >
                <span>Start Your Mobile App</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

          {/* ========================================================
              CARD 02: WEBSITE DEVELOPMENT
              Emerges from bottom edge of Card 01 and covers it!
              z-index: 20
              Clean White & Soft Cyan Gradient
          ======================================================== */}
          <motion.div
            style={{
              y: card2Y,
              zIndex: 20,
            }}
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#FFFFFF] via-[#F2FAFD] to-[#E7F6FC] text-slate-900 p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-600/30 text-[10px] sm:text-[11px] font-mono font-bold text-cyan-900 uppercase tracking-wide">
                <Globe className="w-3.5 h-3.5 text-cyan-700" />
                MODERN WEB EXPERIENCES
              </div>
              <span className="text-xs font-mono font-bold text-cyan-800">
                CARD 02
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto">
              <div className="lg:col-span-6 space-y-2 sm:space-y-3 text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Websites That Move Business Forward.
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-lg">
                  High-performance, responsive websites built to strengthen your brand, engage
                  visitors, and convert customers.
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 border border-cyan-200 text-[11px] font-mono font-bold text-slate-800 shadow-2xs">
                    100/100 Lighthouse Speed
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 border border-cyan-200 text-[11px] font-mono font-bold text-slate-800 shadow-2xs">
                    WebGL &amp; 3D Canvas
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 border border-cyan-200 text-[11px] font-mono font-bold text-slate-800 shadow-2xs">
                    Full-Stack Next.js 14
                  </span>
                </div>
              </div>

              {/* Right Visual: Floating Desktop Mockup */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative w-full max-w-[400px] rounded-2xl bg-slate-950 p-2 shadow-2xl border-2 border-slate-800 group">
                  <div className="px-3 py-1 bg-slate-900 rounded-t-xl border-b border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500/90" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/90" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/90" />
                      <span className="ml-2 text-slate-400 truncate max-w-[120px]">
                        https://navchetnaa.ai/flagship
                      </span>
                    </div>
                    <span className="text-emerald-400 font-bold hidden sm:inline">
                      100/100
                    </span>
                  </div>

                  <div className="relative aspect-[16/10] w-full rounded-b-xl overflow-hidden bg-slate-900">
                    <Image
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
                      alt="High Performance Web Platform"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[8px] font-mono">
                      <span className="px-2 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 text-cyan-300 font-bold">
                        Sub-0.8s Global LCP
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold shadow-md">
                        Core Web Vitals Pass
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-cyan-200/80 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-mono text-slate-600 font-bold">
                Next.js • TailwindCSS • TypeScript • Vercel
              </span>
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-cyan-900 hover:text-cyan-700 transition-colors group"
              >
                <span>Build Your Web Flagship</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 03: CUSTOM WEB APPLICATIONS
              Emerges from bottom edge of Card 02 and covers it!
              z-index: 30
              Deep Emerald & Charcoal Theme
          ======================================================== */}
          <motion.div
            style={{
              y: card3Y,
              zIndex: 30,
            }}
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0B1E16] via-[#091712] to-[#050E0A] text-white p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[10px] sm:text-[11px] font-mono font-bold text-emerald-300 uppercase tracking-wide">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                CUSTOM WEB APPLICATIONS
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">
                CARD 03
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto">
              <div className="lg:col-span-6 space-y-2 sm:space-y-3 text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-[1.15]">
                  Powerful Platforms. Built Around You.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                  Custom web applications, dashboards, portals, and business platforms tailored
                  to your workflows and operations.
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-emerald-500/30 text-[11px] font-mono font-bold text-emerald-300">
                    Multi-Tenant RBAC Security
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-cyan-500/30 text-[11px] font-mono font-bold text-cyan-300">
                    12.4ms P99 Edge Sync
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/20 text-[11px] font-mono font-bold text-slate-200">
                    Kafka Event Stream
                  </span>
                </div>
              </div>

              {/* Right Visual: Floating SaaS Dashboard */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative w-full max-w-[400px] rounded-2xl bg-slate-950 p-2 shadow-2xl border border-emerald-500/30 group">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
                      alt="Custom SaaS Enterprise Dashboard"
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-emerald-400/40 text-[8px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      LIVE STREAM: $1.48M ARR
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 grid grid-cols-2 gap-2 text-[8px] font-mono">
                      <div className="p-1 rounded-md bg-slate-900/90 border border-white/10 text-slate-300">
                        <span className="text-slate-400 block">THROUGHPUT</span>
                        <span className="text-white font-bold">+1.2M req/hr</span>
                      </div>
                      <div className="p-1 rounded-md bg-slate-900/90 border border-white/10 text-slate-300">
                        <span className="text-slate-400 block">HEALTH</span>
                        <span className="text-emerald-400 font-bold">99.99% Uptime</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-mono text-slate-400 font-bold">
                PostgreSQL • Redis • GraphQL • AWS Clusters
              </span>
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors group"
              >
                <span>Architect Your Platform</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 04: UI/UX & DIGITAL PRODUCT DESIGN
              Emerges from bottom edge of Card 03 and covers it!
              z-index: 40
              Soft Lavender-Mint / Pale Green Gradient
          ======================================================== */}
          <motion.div
            style={{
              y: card4Y,
              zIndex: 40,
            }}
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#F5F8FC] via-[#EEF8F3] to-[#E5F5EC] text-slate-900 p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-600/30 text-[10px] sm:text-[11px] font-mono font-bold text-emerald-900 uppercase tracking-wide">
                <Palette className="w-3.5 h-3.5 text-emerald-700" />
                PRODUCT DESIGN &amp; UI/UX
              </div>
              <span className="text-xs font-mono font-bold text-emerald-800">
                CARD 04
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto">
              <div className="lg:col-span-6 space-y-2 sm:space-y-3 text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Every Interaction Has a Purpose.
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-lg">
                  Thoughtful user experiences and modern interfaces that make complex products feel
                  simple, useful, and enjoyable.
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 border border-emerald-200 text-[11px] font-mono font-bold text-slate-800 shadow-2xs">
                    Design Tokens
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 border border-emerald-200 text-[11px] font-mono font-bold text-slate-800 shadow-2xs">
                    100% WCAG AA
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 border border-emerald-200 text-[11px] font-mono font-bold text-slate-800 shadow-2xs">
                    Rapid Prototypes
                  </span>
                </div>
              </div>

              {/* Right Visual: Creative Design Workspace */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative w-full max-w-[400px] rounded-2xl bg-white p-2 shadow-2xl border border-slate-200 group">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80"
                      alt="Product Design System and User Interface Wireframes"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-2 right-2 flex items-center gap-1.5 p-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 shadow-md">
                      <span className="w-3 h-3 rounded-full bg-[#72E73E] ring-1 ring-white/40" title="Lime Green" />
                      <span className="w-3 h-3 rounded-full bg-[#10B981] ring-1 ring-white/40" title="Emerald" />
                      <span className="w-3 h-3 rounded-full bg-[#00BFE6] ring-1 ring-white/40" title="Cyan Blue" />
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[8px] font-mono">
                      <span className="px-2 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md text-emerald-300 font-bold border border-emerald-400/30">
                        Figma Token Mesh • 480+ Components
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold shadow-md">
                        Verified UX
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-emerald-200/80 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-mono text-slate-600 font-bold">
                Figma • Principle • Usability Testing
              </span>
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-900 hover:text-emerald-700 transition-colors group"
              >
                <span>Design Your Product</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            STAGE BOTTOM: CONTINUOUS OVERLAPPING ENGINE STATUS
        ======================================================== */}
        <div className="max-w-5xl mx-auto w-full pt-1.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">Scroll-Pinned Overlapping Deck</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Scroll Down to Reveal Next Card ↓</span>
            <span>•</span>
            <span className="text-emerald-400">60 FPS GPU Scrubbing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
