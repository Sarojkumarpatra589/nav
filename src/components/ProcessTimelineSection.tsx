"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Compass,
  FileText,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  Headphones,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Check,
  ChevronRight,
  Zap,
  Activity,
  Cpu,
  Layers,
  Search,
  Server,
  Cloud,
  Terminal,
  Lock,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

interface ProcessTimelineSectionProps {
  onStartProject?: () => void;
}

// ========================================================
// 1. LIGHT MINT & EMERALD NEURAL NETWORK CANVAS BACKGROUND
// Continuous running light signals traveling between nodes
// ========================================================
function LightNeuralCanvasBackground() {
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
    const nodeCount = isMobile ? 32 : 64;
    const connectionDist = isMobile ? 110 : 160;

    const brandColors = [
      "rgba(16, 185, 129, ", // Emerald Green
      "rgba(56, 217, 214, ", // Cyan Blue
      "rgba(114, 231, 62, ", // Lime Green
      "rgba(167, 243, 208, ", // Light Mint
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
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1.2,
        colorBase: brandColors[Math.floor(Math.random() * brandColors.length)],
        phase: Math.random() * Math.PI * 2,
      });
    }

    const pulses: SynapsePulse[] = [];
    for (let p = 0; p < (isMobile ? 8 : 18); p++) {
      pulses.push({
        fromIndex: Math.floor(Math.random() * nodeCount),
        toIndex: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.007,
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

      // Fine Interconnected Lines
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
            const alpha = (1 - dist / connectionDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(nA.x, nA.y);
            ctx.lineTo(nB.x, nB.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Traveling Synaptic Light Pulses
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
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `${pulse.color}0.95)`;
        ctx.shadowColor = `${pulse.color}0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Gentle Pulsing Nodes
      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i];
        const pulse = Math.sin(time + n.phase) * 0.25 + 0.75;
        const currentRadius = n.radius * pulse;

        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `${n.colorBase}0.10)`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${n.colorBase}0.85)`;
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
// 2. SOPHISTICATED VECTOR ILLUSTRATIONS FOR THE 7 STAGES
// ========================================================

// 01 — Discover Illustration (Magnifying Glass, Requirements, Scanning Lines)
function DiscoverIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 460 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-h-[300px] sm:max-h-[340px]"
      >
        <defs>
          <linearGradient id="discGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#38D9D6" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="discLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#38D9D6" />
            <stop offset="100%" stopColor="#B7F34A" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Technical Coordinate Grid Base */}
        <g stroke="#E2E8F0" strokeWidth="0.8" opacity="0.6">
          <line x1="30" y1="60" x2="430" y2="60" strokeDasharray="3 3" />
          <line x1="30" y1="120" x2="430" y2="120" strokeDasharray="3 3" />
          <line x1="30" y1="180" x2="430" y2="180" strokeDasharray="3 3" />
          <line x1="30" y1="240" x2="430" y2="240" strokeDasharray="3 3" />
          <line x1="90" y1="30" x2="90" y2="290" strokeDasharray="3 3" />
          <line x1="230" y1="30" x2="230" y2="290" strokeDasharray="3 3" />
          <line x1="370" y1="30" x2="370" y2="290" strokeDasharray="3 3" />
        </g>

        {/* Back Requirement Specification Cards */}
        <rect
          x="60"
          y="70"
          width="170"
          height="190"
          rx="16"
          fill="#FFFFFF"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          filter="drop-shadow(0 12px 24px rgba(15, 23, 42, 0.06))"
        />
        <rect x="80" y="90" width="80" height="8" rx="4" fill="#0F172A" />
        <rect x="80" y="108" width="130" height="5" rx="2.5" fill="#94A3B8" opacity="0.5" />
        <rect x="80" y="122" width="115" height="5" rx="2.5" fill="#94A3B8" opacity="0.5" />

        {/* Checkmark Tasks */}
        <circle cx="86" cy="148" r="6" fill="#10B981" fillOpacity="0.15" />
        <circle cx="86" cy="148" r="2.5" fill="#10B981" />
        <rect x="100" y="145" width="100" height="5" rx="2.5" fill="#64748B" />

        <circle cx="86" cy="172" r="6" fill="#10B981" fillOpacity="0.15" />
        <circle cx="86" cy="172" r="2.5" fill="#10B981" />
        <rect x="100" y="169" width="90" height="5" rx="2.5" fill="#64748B" />

        <circle cx="86" cy="196" r="6" fill="#10B981" fillOpacity="0.15" />
        <circle cx="86" cy="196" r="2.5" fill="#10B981" />
        <rect x="100" y="193" width="110" height="5" rx="2.5" fill="#64748B" />

        {/* Connected Node Network Lines */}
        <path
          d="M 190 140 Q 250 100 320 130 T 400 110"
          stroke="url(#discLineGrad)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 190 200 Q 270 240 340 190 T 410 220"
          stroke="url(#discLineGrad)"
          strokeWidth="1.8"
          strokeDasharray="4 4"
          fill="none"
        />

        {/* Connected Nodes */}
        <circle cx="320" cy="130" r="14" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
        <circle cx="320" cy="130" r="5" fill="#10B981" />
        <circle cx="400" cy="110" r="10" fill="#FFFFFF" stroke="#38D9D6" strokeWidth="2" />
        <circle cx="400" cy="110" r="4" fill="#38D9D6" />
        <circle cx="340" cy="190" r="12" fill="#FFFFFF" stroke="#B7F34A" strokeWidth="2" />
        <circle cx="340" cy="190" r="4" fill="#10B981" />
        <circle cx="410" cy="220" r="8" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />

        {/* Central Floating Magnifying Glass with Optical Lens */}
        <g transform="translate(195, 85)">
          {/* Glass Shadow */}
          <circle cx="70" cy="70" r="54" fill="rgba(16, 185, 129, 0.08)" filter="url(#softGlow)" />
          {/* Outer Ring */}
          <circle
            cx="70"
            cy="70"
            r="54"
            fill="url(#discGrad1)"
            stroke="#0F172A"
            strokeWidth="5"
          />
          {/* Inner Optical Highlight */}
          <ellipse cx="50" cy="50" rx="20" ry="12" fill="#FFFFFF" fillOpacity="0.45" transform="rotate(-30 50 50)" />
          {/* Scanning Beam Inside Lens */}
          <line x1="25" y1="70" x2="115" y2="70" stroke="#10B981" strokeWidth="2" strokeDasharray="5 3">
            <animate attributeName="y1" values="35;105;35" dur="3s" repeatCount="indefinite" />
            <animate attributeName="y2" values="35;105;35" dur="3s" repeatCount="indefinite" />
          </line>
          {/* Target Reticle */}
          <circle cx="70" cy="70" r="16" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="70" cy="70" r="3" fill="#10B981" />
          {/* Handle */}
          <path
            d="M 110 110 L 155 155"
            stroke="#0F172A"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M 110 110 L 155 155"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Data Scope Chip Pill */}
        <g transform="translate(250, 40)">
          <rect
            x="0"
            y="0"
            width="145"
            height="32"
            rx="16"
            fill="#FFFFFF"
            stroke="#10B981"
            strokeWidth="1.2"
            filter="drop-shadow(0 6px 16px rgba(16, 185, 129, 0.15))"
          />
          <circle cx="16" cy="16" r="4" fill="#10B981">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="28" y="20" fill="#0F172A" fontSize="10" fontFamily="monospace" fontWeight="bold">
            AUDIT: 100% CLARITY
          </text>
        </g>
      </svg>
    </div>
  );
}

// 02 — Plan Illustration (Architectural Roadmap, Sprints, Milestone Blocks)
function PlanIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 460 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-h-[300px] sm:max-h-[340px]"
      >
        <defs>
          <linearGradient id="planGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38D9D6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Flow Roadmap Backbone */}
        <path
          d="M 40 160 C 120 160, 140 90, 220 90 C 300 90, 320 230, 400 230"
          stroke="#E2E8F0"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 40 160 C 120 160, 140 90, 220 90 C 300 90, 320 230, 400 230"
          stroke="url(#discLineGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="8 6"
        />

        {/* Milestone Block 01: Architecture Specification */}
        <g transform="translate(30, 100)">
          <rect
            x="0"
            y="0"
            width="110"
            height="85"
            rx="14"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1.5"
            filter="drop-shadow(0 10px 20px rgba(15, 23, 42, 0.05))"
          />
          <rect x="12" y="14" width="40" height="6" rx="3" fill="#10B981" />
          <text x="12" y="34" fill="#0F172A" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
            Architecture
          </text>
          <text x="12" y="47" fill="#64748B" fontSize="8" fontFamily="sans-serif">
            Blueprint &amp; DB
          </text>
          <rect x="12" y="60" width="86" height="5" rx="2.5" fill="#F1F5F9" />
          <rect x="12" y="60" width="86" height="5" rx="2.5" fill="#10B981" />
        </g>

        {/* Milestone Block 02: Sprint Design */}
        <g transform="translate(170, 40)">
          <rect
            x="0"
            y="0"
            width="125"
            height="95"
            rx="14"
            fill="#FFFFFF"
            stroke="#10B981"
            strokeWidth="1.8"
            filter="drop-shadow(0 14px 28px rgba(16, 185, 129, 0.12))"
          />
          <div className="flex items-center">
            <rect x="14" y="14" width="55" height="7" rx="3.5" fill="#0F172A" />
            <circle cx="108" cy="18" r="4" fill="#10B981" />
          </div>
          <text x="14" y="38" fill="#0F172A" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
            Agile Sprints
          </text>
          <text x="14" y="52" fill="#64748B" fontSize="9" fontFamily="sans-serif">
            Bi-Weekly Cadence
          </text>
          {/* Mini Gantt Bars */}
          <rect x="14" y="66" width="40" height="5" rx="2.5" fill="#38D9D6" />
          <rect x="58" y="66" width="50" height="5" rx="2.5" fill="#10B981" />
          <rect x="25" y="76" width="60" height="5" rx="2.5" fill="#B7F34A" />
        </g>

        {/* Milestone Block 03: Delivery Roadmap */}
        <g transform="translate(315, 180)">
          <rect
            x="0"
            y="0"
            width="125"
            height="90"
            rx="14"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1.5"
            filter="drop-shadow(0 10px 20px rgba(15, 23, 42, 0.05))"
          />
          <rect x="14" y="14" width="45" height="6" rx="3" fill="#38D9D6" />
          <text x="14" y="35" fill="#0F172A" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
            Project Roadmap
          </text>
          <text x="14" y="48" fill="#64748B" fontSize="8" fontFamily="sans-serif">
            Milestone Gantt
          </text>
          <rect x="14" y="62" width="95" height="5" rx="2.5" fill="#F1F5F9" />
          <rect x="14" y="62" width="75" height="5" rx="2.5" fill="#38D9D6" />
          <circle cx="89" cy="64.5" r="4" fill="#0F172A" />
        </g>

        {/* Connecting Pins */}
        <circle cx="85" cy="160" r="7" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="85" cy="160" r="3" fill="#10B981" />

        <circle cx="232" cy="90" r="8" fill="#FFFFFF" stroke="#10B981" strokeWidth="3" />
        <circle cx="232" cy="90" r="3.5" fill="#0F172A" />

        <circle cx="377" cy="230" r="7" fill="#FFFFFF" stroke="#38D9D6" strokeWidth="2.5" />
        <circle cx="377" cy="230" r="3" fill="#38D9D6" />
      </svg>
    </div>
  );
}

// 03 — Design Illustration (UI/UX Workspace, Floating Screen Panels, Design Grid)
function DesignIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 460 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-h-[300px] sm:max-h-[340px]"
      >
        {/* Isometric Grid Background */}
        <g stroke="#E2E8F0" strokeWidth="0.8" opacity="0.6">
          <line x1="40" y1="40" x2="420" y2="40" />
          <line x1="40" y1="100" x2="420" y2="100" strokeDasharray="4 4" />
          <line x1="40" y1="160" x2="420" y2="160" strokeDasharray="4 4" />
          <line x1="40" y1="220" x2="420" y2="220" strokeDasharray="4 4" />
          <line x1="40" y1="280" x2="420" y2="280" />
        </g>

        {/* Back Desktop Screen Mockup */}
        <g transform="translate(60, 50)">
          <rect
            x="0"
            y="0"
            width="250"
            height="160"
            rx="14"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1.5"
            filter="drop-shadow(0 16px 32px rgba(15, 23, 42, 0.08))"
          />
          {/* Window Chrome */}
          <rect x="0" y="0" width="250" height="24" rx="14" fill="#F8FAFC" />
          <circle cx="15" cy="12" r="3" fill="#EF4444" />
          <circle cx="26" cy="12" r="3" fill="#F59E0B" />
          <circle cx="37" cy="12" r="3" fill="#10B981" />
          <rect x="60" y="7" width="130" height="10" rx="5" fill="#E2E8F0" />

          {/* Desktop UI Wireframe Elements */}
          <rect x="15" y="38" width="50" height="105" rx="8" fill="#F1F5F9" />
          <rect x="75" y="38" width="160" height="50" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
          <rect x="85" y="48" width="70" height="8" rx="4" fill="#10B981" />
          <rect x="85" y="62" width="110" height="5" rx="2.5" fill="#94A3B8" opacity="0.6" />

          <rect x="75" y="96" width="75" height="47" rx="8" fill="#F1F5F9" />
          <rect x="160" y="96" width="75" height="47" rx="8" fill="#F1F5F9" />
        </g>

        {/* Floating Mobile Wireframe Screen in Foreground */}
        <g transform="translate(265, 80)">
          <rect
            x="0"
            y="0"
            width="135"
            height="210"
            rx="22"
            fill="#0F172A"
            stroke="#10B981"
            strokeWidth="2.5"
            filter="drop-shadow(0 20px 40px rgba(16, 185, 129, 0.2))"
          />
          {/* Dynamic Island */}
          <rect x="42" y="8" width="50" height="10" rx="5" fill="#1E293B" />
          {/* Screen Glass */}
          <rect x="8" y="24" width="119" height="174" rx="16" fill="#FFFFFF" />

          <rect x="18" y="38" width="50" height="7" rx="3.5" fill="#0F172A" />
          <rect x="18" y="52" width="99" height="35" rx="8" fill="#EAF8F1" stroke="#A7F3D0" />
          <circle cx="34" cy="69" r="8" fill="#10B981" />

          <rect x="18" y="96" width="46" height="42" rx="8" fill="#F1F5F9" />
          <rect x="71" y="96" width="46" height="42" rx="8" fill="#F1F5F9" />
          <rect x="18" y="146" width="99" height="32" rx="8" fill="#F8FAFC" />
        </g>

        {/* Design Vector Control Anchor Nodes */}
        <g transform="translate(30, 180)">
          {/* Swatch Bar */}
          <rect x="0" y="0" width="110" height="32" rx="16" fill="#FFFFFF" stroke="#E2E8F0" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.06))" />
          <circle cx="20" cy="16" r="7" fill="#72E73E" />
          <circle cx="42" cy="16" r="7" fill="#10B981" />
          <circle cx="64" cy="16" r="7" fill="#00BFE6" />
          <circle cx="86" cy="16" r="7" fill="#0F172A" />
        </g>

        {/* Bezier Vector Pen Line */}
        <path
          d="M 120 180 C 160 130, 220 220, 270 170"
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="120" cy="180" r="4" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
        <circle cx="270" cy="170" r="4" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
      </svg>
    </div>
  );
}

// 04 — Develop Illustration (Code IDE Window, API Nodes, Database Cylinders)
function DevelopIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 460 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-h-[300px] sm:max-h-[340px]"
      >
        {/* Main Code Terminal Window */}
        <g transform="translate(40, 45)">
          <rect
            x="0"
            y="0"
            width="280"
            height="195"
            rx="16"
            fill="#0F172A"
            stroke="#1E293B"
            strokeWidth="2"
            filter="drop-shadow(0 20px 40px rgba(15, 23, 42, 0.25))"
          />
          {/* Header Bar */}
          <rect x="0" y="0" width="280" height="28" rx="16" fill="#1E293B" />
          <circle cx="16" cy="14" r="3.5" fill="#EF4444" />
          <circle cx="28" cy="14" r="3.5" fill="#F59E0B" />
          <circle cx="40" cy="14" r="3.5" fill="#10B981" />
          <text x="60" y="18" fill="#94A3B8" fontSize="9" fontFamily="monospace">
            service.engineer.ts
          </text>

          {/* Syntax Lines */}
          <g fontFamily="monospace" fontSize="9">
            <text x="16" y="52" fill="#38D9D6">import</text>
            <text x="56" y="52" fill="#F8FAFC">&#123; Cluster, Mesh &#125;</text>
            <text x="165" y="52" fill="#38D9D6">from</text>
            <text x="195" y="52" fill="#B7F34A">&quot;@core/ai&quot;</text>

            <text x="16" y="76" fill="#E2E8F0">
              <tspan fill="#38D9D6">async function</tspan> <tspan fill="#10B981">buildPipeline</tspan>() &#123;
            </text>
            <text x="28" y="98" fill="#94A3B8">
              <tspan fill="#38D9D6">const</tspan> db = <tspan fill="#F59E0B">await</tspan> connectPostgres();
            </text>
            <text x="28" y="118" fill="#94A3B8">
              <tspan fill="#38D9D6">const</tspan> api = <tspan fill="#10B981">mountGateway</tspan>(&#123; p99: 12 &#125;);
            </text>
            <text x="28" y="138" fill="#38D9D6">
              return <tspan fill="#F8FAFC">api.stream(db.nodes);</tspan>
            </text>
            <text x="16" y="158" fill="#E2E8F0">&#125;</text>

            <line x1="16" y1="172" x2="264" y2="172" stroke="#1E293B" strokeWidth="1" />
            <text x="16" y="186" fill="#10B981">
              ✓ TypeScript Check • 0 Errors • 60 FPS
            </text>
          </g>
        </g>

        {/* Database Cylinders & Connected Nodes */}
        <g transform="translate(330, 90)">
          {/* Cylinder 1: Primary Database */}
          <path
            d="M 10 20 C 10 10, 80 10, 80 20 L 80 60 C 80 70, 10 70, 10 60 Z"
            fill="#FFFFFF"
            stroke="#10B981"
            strokeWidth="2"
            filter="drop-shadow(0 10px 20px rgba(16, 185, 129, 0.15))"
          />
          <ellipse cx="45" cy="20" rx="35" ry="10" fill="#EAF8F1" stroke="#10B981" strokeWidth="2" />
          <ellipse cx="45" cy="38" rx="35" ry="10" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
          <ellipse cx="45" cy="56" rx="35" ry="10" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
          <text x="26" y="42" fill="#0F172A" fontSize="8" fontFamily="monospace" fontWeight="bold">
            PostgreSQL
          </text>
        </g>

        {/* API Socket Bridge */}
        <path
          d="M 320 120 C 340 120, 330 180, 360 180"
          stroke="#38D9D6"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="4 3"
        />

        {/* Node 2: Redis Edge */}
        <g transform="translate(345, 185)">
          <rect
            x="0"
            y="0"
            width="80"
            height="44"
            rx="12"
            fill="#FFFFFF"
            stroke="#38D9D6"
            strokeWidth="1.8"
            filter="drop-shadow(0 8px 18px rgba(56, 217, 214, 0.15))"
          />
          <circle cx="16" cy="22" r="5" fill="#38D9D6" />
          <text x="28" y="20" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">
            REDIS
          </text>
          <text x="28" y="32" fill="#64748B" fontSize="8" fontFamily="monospace">
            Edge Sync
          </text>
        </g>
      </svg>
    </div>
  );
}

// 05 — Test Illustration (QA Dashboard, Security Shield, Test Passing Metrics)
function TestIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 460 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-h-[300px] sm:max-h-[340px]"
      >
        {/* Back Test Suite Matrix Card */}
        <g transform="translate(50, 40)">
          <rect
            x="0"
            y="0"
            width="250"
            height="180"
            rx="16"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1.5"
            filter="drop-shadow(0 14px 28px rgba(15, 23, 42, 0.06))"
          />
          <rect x="16" y="16" width="90" height="7" rx="3.5" fill="#0F172A" />
          <rect x="16" y="30" width="140" height="5" rx="2.5" fill="#94A3B8" opacity="0.5" />

          {/* Test Line Items */}
          <g transform="translate(16, 52)">
            <rect x="0" y="0" width="218" height="26" rx="8" fill="#F8FAFC" />
            <circle cx="14" cy="13" r="5" fill="#10B981" />
            <path d="M 12 13 L 13.5 15 L 17 11" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
            <text x="28" y="16" fill="#0F172A" fontSize="9" fontFamily="monospace">
              E2E Auth Flow: PASS (142ms)
            </text>
          </g>

          <g transform="translate(16, 84)">
            <rect x="0" y="0" width="218" height="26" rx="8" fill="#F8FAFC" />
            <circle cx="14" cy="13" r="5" fill="#10B981" />
            <path d="M 12 13 L 13.5 15 L 17 11" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
            <text x="28" y="16" fill="#0F172A" fontSize="9" fontFamily="monospace">
              Penetration Audit: 0 CVEs
            </text>
          </g>

          <g transform="translate(16, 116)">
            <rect x="0" y="0" width="218" height="26" rx="8" fill="#F8FAFC" />
            <circle cx="14" cy="13" r="5" fill="#10B981" />
            <path d="M 12 13 L 13.5 15 L 17 11" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
            <text x="28" y="16" fill="#0F172A" fontSize="9" fontFamily="monospace">
              Load Stress 50k RPS: Nominal
            </text>
          </g>

          {/* Latency Wave Chart */}
          <path
            d="M 16 160 C 50 152, 70 168, 100 156 C 130 144, 160 162, 190 150 C 210 142, 230 156, 240 150"
            stroke="#10B981"
            strokeWidth="2"
            fill="none"
          />
        </g>

        {/* Central Floating High-Tech Shield */}
        <g transform="translate(265, 80)">
          {/* Shield Outer Aura */}
          <path
            d="M 60 10 L 115 35 C 115 95, 60 135, 60 135 C 60 135, 5 95, 5 35 Z"
            fill="#FFFFFF"
            stroke="#10B981"
            strokeWidth="3.5"
            filter="drop-shadow(0 18px 36px rgba(16, 185, 129, 0.25))"
          />
          {/* Shield Core */}
          <path
            d="M 60 22 L 102 42 C 102 88, 60 120, 60 120 C 60 120, 18 88, 18 42 Z"
            fill="linear-gradient(135deg, #10B981 0%, #38D9D6 100%)"
          />
          {/* Central Verified Checkmark */}
          <path
            d="M 45 70 L 55 80 L 76 56"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* 100% Pass Metric Badge */}
        <g transform="translate(240, 235)">
          <rect
            x="0"
            y="0"
            width="170"
            height="36"
            rx="18"
            fill="#0F172A"
            stroke="#10B981"
            strokeWidth="1.5"
            filter="drop-shadow(0 10px 20px rgba(0,0,0,0.15))"
          />
          <circle cx="20" cy="18" r="5" fill="#10B981" />
          <text x="32" y="22" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">
            428 / 428 TESTS PASSED
          </text>
        </g>
      </svg>
    </div>
  );
}

// 06 — Launch Illustration (Cloud Deploy, Production Server Nodes, Rocket Launch)
function LaunchIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 460 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-h-[300px] sm:max-h-[340px]"
      >
        {/* Global Cloud Base */}
        <g transform="translate(60, 140)">
          {/* Cloud Outline */}
          <path
            d="M 40 80 Q 20 80 15 60 Q 10 35 35 30 Q 45 10 75 12 Q 105 10 120 30 Q 140 32 145 50 Q 155 75 130 80 Z"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="2"
            filter="drop-shadow(0 16px 32px rgba(15, 23, 42, 0.08))"
          />
          <text x="50" y="55" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">
            AWS / VERCEL
          </text>
        </g>

        {/* Production Server Rack */}
        <g transform="translate(260, 130)">
          <rect
            x="0"
            y="0"
            width="140"
            height="110"
            rx="14"
            fill="#0F172A"
            stroke="#38D9D6"
            strokeWidth="2"
            filter="drop-shadow(0 16px 32px rgba(15, 23, 42, 0.18))"
          />
          {/* Server Bay 1 */}
          <rect x="12" y="14" width="116" height="22" rx="6" fill="#1E293B" />
          <circle cx="24" cy="25" r="3" fill="#10B981" />
          <circle cx="34" cy="25" r="3" fill="#38D9D6" />
          <line x1="50" y1="25" x2="114" y2="25" stroke="#334155" strokeWidth="2" strokeDasharray="3 2" />

          {/* Server Bay 2 */}
          <rect x="12" y="44" width="116" height="22" rx="6" fill="#1E293B" />
          <circle cx="24" cy="55" r="3" fill="#10B981" />
          <circle cx="34" cy="55" r="3" fill="#10B981" />
          <line x1="50" y1="55" x2="114" y2="55" stroke="#334155" strokeWidth="2" strokeDasharray="3 2" />

          {/* Server Bay 3 */}
          <rect x="12" y="74" width="116" height="22" rx="6" fill="#1E293B" />
          <circle cx="24" cy="85" r="3" fill="#10B981" />
          <circle cx="34" cy="85" r="3" fill="#B7F34A" />
          <line x1="50" y1="85" x2="114" y2="85" stroke="#334155" strokeWidth="2" strokeDasharray="3 2" />
        </g>

        {/* Central Launch Rocket Vehicle */}
        <g transform="translate(180, 20)">
          {/* Thrust Exhaust Glow */}
          <path
            d="M 40 130 Q 30 190 40 220 Q 50 190 40 130 Z"
            fill="linear-gradient(to bottom, #10B981, rgba(56, 217, 214, 0))"
          />
          <path
            d="M 40 130 Q 35 170 40 190 Q 45 170 40 130 Z"
            fill="#B7F34A"
          />

          {/* Rocket Fuselage */}
          <path
            d="M 40 20 C 58 45, 62 85, 62 120 L 18 120 C 18 85, 22 45, 40 20 Z"
            fill="#FFFFFF"
            stroke="#0F172A"
            strokeWidth="3.5"
          />
          {/* Rocket Nose Cone */}
          <path
            d="M 40 20 C 48 35, 52 48, 55 58 L 25 58 C 28 48, 32 35, 40 20 Z"
            fill="#10B981"
          />
          {/* Glass Viewport */}
          <circle cx="40" cy="80" r="11" fill="#0F172A" />
          <circle cx="40" cy="80" r="8" fill="#38D9D6" />

          {/* Fins */}
          <path d="M 18 100 L 4 125 L 18 122 Z" fill="#0F172A" />
          <path d="M 62 100 L 76 125 L 62 122 Z" fill="#0F172A" />
        </g>

        {/* Cutover Status Pill */}
        <g transform="translate(40, 50)">
          <rect
            x="0"
            y="0"
            width="135"
            height="32"
            rx="16"
            fill="#FFFFFF"
            stroke="#10B981"
            strokeWidth="1.2"
            filter="drop-shadow(0 6px 16px rgba(16, 185, 129, 0.15))"
          />
          <circle cx="16" cy="16" r="4" fill="#10B981">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <text x="28" y="20" fill="#0F172A" fontSize="10" fontFamily="monospace" fontWeight="bold">
            ZERO DOWNTIME
          </text>
        </g>
      </svg>
    </div>
  );
}

// 07 — Support Illustration (Telemetry, Health Telemetry Stream, SLA Watch)
function SupportIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 460 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-h-[300px] sm:max-h-[340px]"
      >
        {/* Main Telemetry Health Card */}
        <g transform="translate(50, 45)">
          <rect
            x="0"
            y="0"
            width="250"
            height="180"
            rx="16"
            fill="#0F172A"
            stroke="#1E293B"
            strokeWidth="2"
            filter="drop-shadow(0 18px 36px rgba(15, 23, 42, 0.2))"
          />
          {/* Header */}
          <rect x="0" y="0" width="250" height="30" rx="16" fill="#1E293B" />
          <circle cx="16" cy="15" r="4" fill="#10B981" />
          <text x="28" y="19" fill="#F8FAFC" fontSize="10" fontFamily="monospace" fontWeight="bold">
            LIVE HEALTH: 99.99%
          </text>
          <text x="180" y="19" fill="#38D9D6" fontSize="9" fontFamily="monospace">
            24/7 SLA
          </text>

          {/* Heartbeat EKG Pulse */}
          <path
            d="M 16 85 L 60 85 L 75 55 L 90 115 L 105 70 L 120 95 L 130 85 L 234 85"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Live System Stats Grid */}
          <g transform="translate(16, 120)">
            <rect x="0" y="0" width="102" height="42" rx="8" fill="#1E293B" />
            <text x="10" y="16" fill="#94A3B8" fontSize="8" fontFamily="monospace">
              RESPONSE TIME
            </text>
            <text x="10" y="32" fill="#38D9D6" fontSize="13" fontFamily="monospace" fontWeight="bold">
              11.4 ms
            </text>

            <rect x="116" y="0" width="102" height="42" rx="8" fill="#1E293B" />
            <text x="126" y="16" fill="#94A3B8" fontSize="8" fontFamily="monospace">
              ERROR RATE
            </text>
            <text x="126" y="32" fill="#10B981" fontSize="13" fontFamily="monospace" fontWeight="bold">
              0.000%
            </text>
          </g>
        </g>

        {/* Floating Support Beacon Hub */}
        <g transform="translate(285, 90)">
          {/* Outer Pulsing Radar Rings */}
          <circle cx="65" cy="65" r="58" fill="none" stroke="#10B981" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          <circle cx="65" cy="65" r="45" fill="none" stroke="#38D9D6" strokeWidth="1.5" opacity="0.6" />
          <circle
            cx="65"
            cy="65"
            r="32"
            fill="#FFFFFF"
            stroke="#0F172A"
            strokeWidth="3"
            filter="drop-shadow(0 14px 28px rgba(16, 185, 129, 0.2))"
          />
          <circle cx="65" cy="65" r="16" fill="#10B981" />
          <circle cx="65" cy="65" r="6" fill="#FFFFFF" />
        </g>

        {/* Hypercare Badge Pill */}
        <g transform="translate(240, 235)">
          <rect
            x="0"
            y="0"
            width="170"
            height="34"
            rx="17"
            fill="#FFFFFF"
            stroke="#10B981"
            strokeWidth="1.5"
            filter="drop-shadow(0 8px 18px rgba(16, 185, 129, 0.15))"
          />
          <circle cx="18" cy="17" r="4" fill="#10B981" />
          <text x="28" y="21" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">
            &lt; 15 MIN SLA RESPONSE
          </text>
        </g>
      </svg>
    </div>
  );
}

// Map Illustrations by Stage
const stageIllustrations: Record<number, React.FC> = {
  0: DiscoverIllustration,
  1: PlanIllustration,
  2: DesignIllustration,
  3: DevelopIllustration,
  4: TestIllustration,
  5: LaunchIllustration,
  6: SupportIllustration,
};

// ========================================================
// 3. MAIN COMPONENT: PREMIUM VERTICAL NEURAL TIMELINE
// ========================================================
export default function ProcessTimelineSection({ onStartProject }: ProcessTimelineSectionProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Synchronized scroll progress through the engineering journey
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Calculate active step smoothly based on vertical scroll progression
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.14) {
      setActiveStep(0);
    } else if (latest < 0.28) {
      setActiveStep(1);
    } else if (latest < 0.42) {
      setActiveStep(2);
    } else if (latest < 0.57) {
      setActiveStep(3);
    } else if (latest < 0.71) {
      setActiveStep(4);
    } else if (latest < 0.86) {
      setActiveStep(5);
    } else {
      setActiveStep(6);
    }
  });

  // Exact Seven Engineering Stages Data matching requirements
  const steps = [
    {
      num: "01",
      title: "Discover",
      subtitle: "Business Analysis & Goal Definition",
      desc: "Understand the business, identify challenges, gather requirements and define project goals before starting development.",
      icon: Compass,
      activities: [
        { label: "Business Analysis", tag: "Strategy" },
        { label: "Requirement Gathering", tag: "Discovery" },
        { label: "Goal Definition", tag: "Milestones" },
      ],
      metric: "100% Scope Clarity",
      tagline: "PHASE 01: STRATEGIC AUDIT",
    },
    {
      num: "02",
      title: "Plan",
      subtitle: "Technical Architecture & Roadmap",
      desc: "Define project scope, technical architecture, milestones, resources and an execution roadmap.",
      icon: FileText,
      activities: [
        { label: "Technical Strategy", tag: "Cloud Architecture" },
        { label: "Architecture Planning", tag: "Database Schema" },
        { label: "Project Roadmap", tag: "Sprint Schedule" },
      ],
      metric: "Sprint Milestones Fixed",
      tagline: "PHASE 02: TECHNICAL BLUEPRINT",
    },
    {
      num: "03",
      title: "Design",
      subtitle: "UI/UX & Interactive Prototypes",
      desc: "Transform ideas into intuitive digital experiences through wireframes, interface design and interactive prototypes.",
      icon: Palette,
      activities: [
        { label: "Wireframing", tag: "User Journey" },
        { label: "UI/UX Design", tag: "Figma System" },
        { label: "Interactive Prototypes", tag: "Validation" },
      ],
      metric: "Pixel-Perfect Validation",
      tagline: "PHASE 03: PRODUCT EXPERIENCE",
    },
    {
      num: "04",
      title: "Develop",
      subtitle: "Full-Stack Software Engineering",
      desc: "Build reliable, scalable software using modern frontend, backend, database and integration technologies.",
      icon: Code2,
      activities: [
        { label: "Frontend Development", tag: "Next.js & React" },
        { label: "Backend Engineering", tag: "Distributed Mesh" },
        { label: "API Integration", tag: "Event Streaming" },
      ],
      metric: "Daily CI/CD Preview Builds",
      tagline: "PHASE 04: CORE ENGINEERING",
    },
    {
      num: "05",
      title: "Test",
      subtitle: "Security, Penetration & QA",
      desc: "Validate functionality, performance, security, responsiveness and reliability before releasing the product.",
      icon: CheckCircle2,
      activities: [
        { label: "Functional Testing", tag: "Automated E2E" },
        { label: "Security Testing", tag: "Penetration Audit" },
        { label: "Performance Optimization", tag: "Sub-50ms P99" },
      ],
      metric: "Zero Critical Vulnerabilities",
      tagline: "PHASE 05: QUALITY ASSURANCE",
    },
    {
      num: "06",
      title: "Launch",
      subtitle: "Zero-Downtime Cloud Cutover",
      desc: "Deploy the finished product, configure production infrastructure and make the solution ready for real users.",
      icon: Rocket,
      activities: [
        { label: "Cloud Deployment", tag: "Multi-Region Cluster" },
        { label: "Production Setup", tag: "DNS & Edge Mesh" },
        { label: "Go-Live", tag: "Zero-Downtime Cutover" },
      ],
      metric: "100% Uptime Deployment",
      tagline: "PHASE 06: PRODUCTION ROLLOUT",
    },
    {
      num: "07",
      title: "Support",
      subtitle: "Continuous SLAs & Evolution",
      desc: "Monitor performance, resolve issues, provide maintenance and continuously improve the product as the business grows.",
      icon: Headphones,
      activities: [
        { label: "Monitoring", tag: "24/7 Telemetry" },
        { label: "Maintenance", tag: "Security Patches" },
        { label: "Continuous Improvement", tag: "Feature Roadmap" },
      ],
      metric: "< 15 Min SLA Response",
      tagline: "PHASE 07: HYPERCARE & EVOLUTION",
    },
  ];

  const current = steps[activeStep];
  const CurrentIllustration = stageIllustrations[activeStep] || DiscoverIllustration;

  // Percentage height for the vertical progress line connecting the 7 markers (0% to 100%)
  const verticalLineFillPercent = (activeStep / 6) * 100;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full h-[250vh] text-[#F4FBF8] select-none scroll-mt-24"
    >
      {/* Ambient Gradients (Contained strictly to this section) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-36 w-[480px] h-[480px] bg-[#2DD4BF]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -left-36 w-[480px] h-[480px] bg-[#8CEE3F]/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-grid-cyber opacity-20" />
      </div>

      {/* ========================================================
          STICKY FULL-VIEWPORT STAGE (Pinned as user scrolls)
          pt-20 ensures clean clearance under the floating navbar!
      ======================================================== */}
      <div
        style={{ position: "sticky", top: 0 }}
        className="sticky top-0 h-screen h-[100dvh] w-full flex flex-col justify-between pt-20 sm:pt-22 lg:pt-24 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden"
      >
        {/* ========================================================
            STAGE TOP: SECTION HEADER
        ======================================================== */}
        <div className="max-w-7xl mx-auto w-full text-center mb-2 flex-shrink-0">
          {/* Main Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#F4FBF8] tracking-tight leading-tight">
            From First Idea to{" "}
            <span className="bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] bg-clip-text text-transparent">
              Final Launch.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-1 text-xs sm:text-sm text-[#A6BBB9] max-w-2xl mx-auto line-clamp-1 font-normal leading-relaxed">
            A transparent, disciplined 7-stage engineering lifecycle designed to eliminate technical surprises, maintain momentum, and guarantee on-time delivery.
          </p>
        </div>

        {/* Mobile / Tablet Horizontal Stepper (< lg) */}
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto pb-1 mb-2 w-full max-w-7xl mx-auto">
          {steps.map((st, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={st.num}
                onClick={() => setActiveStep(idx)}
                className={`px-3 py-1 rounded-xl font-mono text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-[#8CEE3F] to-[#2DD4BF] text-[#030A0D] shadow-sm"
                    : "bg-[#06151A]/80 text-[#A6BBB9] border border-white/10"
                }`}
              >
                <span>{st.num}</span>
                <span>{st.title}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            STAGE CENTER: SPACIOUS TWO-COLUMN COMPOSITION
            Left Side: Vertical Timeline Rail (Sticky within view)
            Right Side: Dynamic Stage Presentation & Custom SVG
        ======================================================== */}
        <div className="max-w-7xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center my-auto min-h-0">
          {/* ========================================================
              LEFT COLUMN: VERTICAL TIMELINE RAIL (7 STAGES)
          ======================================================== */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 rounded-3xl cyber-glass p-4 sm:p-5 shadow-2xl flex-col justify-between h-full max-h-[460px] sm:max-h-[500px]">
            {/* Header of rail */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 flex-shrink-0">
              <span className="text-[10px] font-mono font-bold text-[#A6BBB9] uppercase tracking-wider">
                ENGINEERING JOURNEY
              </span>
              <span className="text-[11px] font-mono font-extrabold text-[#8CEE3F] bg-[#8CEE3F]/10 px-2 py-0.5 rounded-full border border-[#8CEE3F]/30">
                0{activeStep + 1} / 07
              </span>
            </div>

            {/* Seven Connected Markers with Vertical Illuminated Progress Line */}
            <div className="relative my-auto py-1 flex flex-col justify-between flex-1">
              {/* Vertical Base Line */}
              <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-white/10 rounded-full" />

              {/* Vertical Animated Progress Line (Synchronized) */}
              <motion.div
                className="absolute left-[19px] top-4 w-[2.5px] bg-gradient-to-b from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] rounded-full shadow-[0_0_12px_rgba(140,238,63,0.6)]"
                style={{
                  height: `${verticalLineFillPercent}%`,
                  maxHeight: "calc(100% - 24px)",
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />

              {/* The Seven Stage Markers */}
              {steps.map((st, idx) => {
                const Icon = st.icon;
                const isActive = activeStep === idx;
                const isCompleted = activeStep > idx;

                return (
                  <button
                    key={st.num}
                    onClick={() => setActiveStep(idx)}
                    className={`group relative flex items-center gap-3 text-left w-full py-1 px-1.5 rounded-xl transition-all duration-200 focus:outline-none ${
                      isActive ? "bg-[rgba(45,212,191,0.12)]" : "hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* Circular Node Indicator */}
                    <div
                      className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 flex-shrink-0 ${
                        isActive
                          ? "bg-[#030A0D] text-[#8CEE3F] shadow-[0_0_15px_rgba(140,238,63,0.35)] ring-4 ring-[#8CEE3F]/35 scale-105 border border-[#8CEE3F]"
                          : isCompleted
                          ? "bg-[#2DD4BF] text-[#030A0D] shadow-xs"
                          : "bg-[#06151A] text-[#A6BBB9] border border-white/15 group-hover:border-[#2DD4BF]/50"
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <Icon className="w-4 h-4" />
                      )}
                    </div>

                    {/* Stage Meta */}
                    <div className="min-w-0 flex-1 flex items-center justify-between">
                      <div className="truncate">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-[10px] font-mono font-bold ${
                              isActive
                                ? "text-[#8CEE3F]"
                                : isCompleted
                                ? "text-[#A6BBB9]"
                                : "text-[#A6BBB9]/60"
                            }`}
                          >
                            {st.num}
                          </span>
                          <span
                            className={`text-xs sm:text-sm font-bold truncate ${
                              isActive
                                ? "text-[#F4FBF8] font-black"
                                : isCompleted
                                ? "text-[#F4FBF8]/80"
                                : "text-[#A6BBB9]"
                            }`}
                          >
                            {st.title}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#A6BBB9]/70 truncate hidden sm:block">
                          {st.subtitle}
                        </p>
                      </div>

                      {/* Active Status Pill */}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8CEE3F] animate-ping mr-1" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Status bar */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#A6BBB9] flex-shrink-0">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8CEE3F] animate-pulse" />
                Live Engineering Sync
              </span>
              <span>Scroll to Explore ↓</span>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: DYNAMIC STAGE SHOWCASE PANEL
          ======================================================== */}
          <div className="lg:col-span-7 xl:col-span-8 rounded-3xl cyber-glass p-5 sm:p-7 md:p-8 shadow-2xl flex flex-col justify-between h-full max-h-[460px] sm:max-h-[500px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col justify-between h-full space-y-3"
              >
                {/* Showcase Top Bar */}
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2.5 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#8CEE3F]/10 border border-[#8CEE3F]/30 font-mono text-[10px] font-bold text-[#8CEE3F]">
                      STAGE {current.num} OF 07
                    </span>
                    <span className="text-[10px] font-mono text-[#A6BBB9] uppercase tracking-wide hidden sm:inline">
                      {current.tagline}
                    </span>
                  </div>

                  {/* Stage Switcher Controls */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 disabled:opacity-30 flex items-center justify-center text-[#F4FBF8] transition-colors"
                      title="Previous Stage"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setActiveStep(Math.min(6, activeStep + 1))}
                      disabled={activeStep === 6}
                      className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 disabled:opacity-30 flex items-center justify-center text-[#F4FBF8] transition-colors"
                      title="Next Stage"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Split Presentation: Content on Left, Custom SVG on Right */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center flex-1 my-auto">
                  {/* Stage Text & Activities */}
                  <div className="md:col-span-6 space-y-2.5 text-left">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#F4FBF8] tracking-tight leading-snug">
                        {current.title} —{" "}
                        <span className="text-[#8CEE3F] font-bold text-base sm:text-lg">
                          {current.subtitle}
                        </span>
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#A6BBB9] leading-relaxed font-normal">
                        {current.desc}
                      </p>
                    </div>

                    {/* Key Activities */}
                    <div className="pt-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6BBB9] block mb-1.5 font-bold">
                        Key Activities &amp; Milestones:
                      </span>
                      <div className="space-y-1.5">
                        {current.activities.map((act, aIdx) => (
                          <div
                            key={aIdx}
                            className="flex items-center justify-between p-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#2DD4BF]/40 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-[#8CEE3F]/15 flex items-center justify-center">
                                <Check className="w-2.5 h-2.5 text-[#8CEE3F] stroke-[3]" />
                              </div>
                              <span className="text-xs font-bold text-[#F4FBF8]">
                                {act.label}
                              </span>
                            </div>
                            <span className="text-[9px] font-mono font-bold text-[#2DD4BF] bg-[#2DD4BF]/10 px-2 py-0.5 rounded-md border border-[#2DD4BF]/20">
                              {act.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Unique SVG Graphic in Cyber Glass Frame */}
                  <div className="hidden sm:flex md:col-span-6 h-[190px] sm:h-[220px] md:h-[250px] w-full rounded-2xl bg-[#030A0D]/75 border border-[rgba(45,212,191,0.2)] overflow-hidden items-center justify-center relative shadow-inner">
                    <CurrentIllustration />
                  </div>
                </div>

                {/* Showcase Footer Action Row */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#8CEE3F]" />
                    <span className="text-xs font-mono font-bold text-[#F4FBF8]">
                      Metric: {current.metric}
                    </span>
                  </div>

                  <button
                    onClick={onStartProject}
                    className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] text-[#030A0D] font-black text-xs hover:shadow-lg hover:shadow-[#2DD4BF]/25 transition-all group"
                  >
                    <span>Launch Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ========================================================
            STAGE BOTTOM: CONTINUOUS JOURNEY SCRUBBAR NOTE
        ======================================================== */}
        <div className="max-w-7xl mx-auto w-full pt-1.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A6BBB9] flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8CEE3F] animate-pulse" />
            <span className="text-[#F4FBF8] font-bold">NAVCHETNAA AI Methodology</span>
          </div>

          <div className="flex items-center gap-3 text-[#A6BBB9]">
            <span>Scroll Down to Progress Through Stages ↓</span>
            <span>•</span>
            <span className="text-[#8CEE3F] font-bold">Guaranteed On-Time Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
