"use client";

import React, { useRef, useEffect } from "react";
import {
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Headphones,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
  Server,
  Code2,
  FileCode,
} from "lucide-react";
import { motion } from "framer-motion";

interface WhyChooseSectionProps {
  onStartProject?: () => void;
}

export default function WhyChooseSection({ onStartProject }: WhyChooseSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const nodeCount = 20;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const colors = ["#22C55E", "#10B981", "#06B6D4", "#0EA5E9"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.2 + 1.8,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.18 * (1 - dist / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="why-choose"
      className="relative w-full py-20 sm:py-24 md:py-32 bg-[#F8FBF9] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-cross opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              STRATEGIC ARCHITECTURE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
            Architected for Scale.{" "}
            <span className="bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#00BFE6] bg-clip-text text-transparent">
              Engineered for Security.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We operate as an embedded technology partner. Every system is built on sovereign architecture, clean codebases, and rigorous enterprise security.
          </p>
        </div>

        {/* ========================================================
            PREMIUM BENTO GRID (Glass Panels on Light Surface)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: 100% IP & Data Ownership (Span 7) */}
          <div className="md:col-span-7 rounded-3xl p-6 sm:p-8 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600">
                  <FileCode className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 font-bold">
                  SOVEREIGN IP
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                100% Proprietary IP & Zero Vendor Lock-in
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                You retain complete, irrevocable ownership of every repository, cloud configuration, and trained model weights. We never bind your business to opaque licenses or restrictive frameworks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <CheckCircle2 className="w-4 h-4" /> Full Git Transfer
              </span>
              <span className="flex items-center gap-1.5 text-cyan-600 font-bold">
                <CheckCircle2 className="w-4 h-4" /> Clean Documentation
              </span>
            </div>
          </div>

          {/* Card 2: Interactive Neural Security Visual (Span 5) */}
          <div className="md:col-span-5 rounded-3xl p-6 sm:p-8 bg-slate-950 text-white border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                LIVE MESH TELEMETRY
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400">
                AES-256 GCM
              </span>
            </div>
            <div className="relative z-10 my-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Zero-Trust Security Hardening
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                OWASP Top 10 mitigation, end-to-end token encryption, and automated vulnerability scanning on every pull request.
              </p>
            </div>
            <div className="relative z-10 text-[11px] font-mono text-emerald-400 flex items-center justify-between pt-2 border-t border-slate-800">
              <span>Security Score: 100/100</span>
              <span>SOC-2 Ready</span>
            </div>
          </div>

          {/* Card 3: Modern Tech Stack (Span 4) */}
          <div className="md:col-span-4 rounded-3xl p-6 sm:p-7 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-cyan-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-cyan-50 border border-cyan-200/70 flex items-center justify-center text-cyan-600 mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Modern Stack Velocity
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Engineered in Next.js 14, Python, FastAPI, and AWS for lightning-fast sub-second execution and effortless elasticity.
              </p>
            </div>
            <div className="text-xs font-mono text-cyan-600 font-bold">
              Sub-15ms Query Response
            </div>
          </div>

          {/* Card 4: Dedicated Engineering Squad (Span 4) */}
          <div className="md:col-span-4 rounded-3xl p-6 sm:p-7 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 mb-4">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Embedded Senior Squads
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Direct access to senior solutions architects. Daily standups, transparent bi-weekly sprint reviews, and shared Slack channels.
              </p>
            </div>
            <div className="text-xs font-mono text-emerald-600 font-bold">
              Guaranteed 15m Emergency SLA
            </div>
          </div>

          {/* Card 5: Business-Oriented ROI (Span 4) */}
          <div className="md:col-span-4 rounded-3xl p-6 sm:p-7 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200/70 flex items-center justify-center text-teal-600 mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Commercial Impact First
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We write code that directly drives revenue, eliminates repetitive administrative payroll, and scales your business valuation.
              </p>
            </div>
            <div className="text-xs font-mono text-teal-600 font-bold">
              +38% Average Efficiency Lift
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/25 group"
          >
            <span>Partner With NAVCHETNAA AI</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
