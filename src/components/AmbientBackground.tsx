"use client";

import React from "react";

export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* ========================================================
          1. CONTINUOUS LOGO-MATCHING MESH GRADIENT BLOOMS
      ======================================================== */}
      {/* Top Left Hero Bloom (Electric Lime to Emerald) */}
      <div className="absolute -top-[10%] -left-[10%] w-[65vw] h-[65vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(114,231,62,0.12)_0%,rgba(16,185,129,0.08)_35%,rgba(6,182,212,0.03)_60%,transparent_75%)] blur-[100px] sm:blur-[140px] animate-pulse-glow" />

      {/* Top Right Ambient Bloom (Vivid Cyan to Teal) */}
      <div className="absolute top-[8%] -right-[12%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,191,230,0.13)_0%,rgba(14,165,233,0.08)_40%,transparent_75%)] blur-[90px] sm:blur-[130px]" />

      {/* Mid Left (About Section) Lime & Aqua Aurora */}
      <div className="absolute top-[35%] -left-[15%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10)_0%,rgba(114,231,62,0.06)_40%,transparent_70%)] blur-[110px]" />

      {/* Mid Right (Services Section) Cyan Specular Glow */}
      <div className="absolute top-[52%] -right-[15%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,191,230,0.12)_0%,rgba(16,185,129,0.06)_45%,transparent_75%)] blur-[120px]" />

      {/* Lower Center (Why Us Section) Vibrant Brand Energy */}
      <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-[75vw] h-[50vw] max-w-[1100px] max-h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(114,231,62,0.09)_0%,rgba(0,191,230,0.08)_35%,rgba(16,185,129,0.04)_60%,transparent_80%)] blur-[130px]" />

      {/* ========================================================
          2. LOGO-INSPIRED RIBBON CURVE (Flowing 'N' Aesthetic)
      ======================================================== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.22]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="logoRibbon1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#72E73E" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#10B981" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#06B6D4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="logoRibbon2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00BFE6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#72E73E" stopOpacity="0.6" />
          </linearGradient>
          <filter id="ribbonBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="45" />
          </filter>
        </defs>

        {/* Ambient Gradient Light Ribbons Weaving Down the Page */}
        <path
          d="M -100,200 C 300,100 600,600 1200,400 S 1600,1100 1100,1500 S 200,2200 800,2800 S 1400,3400 900,4200"
          stroke="url(#logoRibbon1)"
          strokeWidth="110"
          fill="none"
          filter="url(#ribbonBlur)"
        />
        <path
          d="M 1600,400 C 1100,800 400,1200 900,1800 S 1500,2400 700,3100 S 200,3800 1100,4600"
          stroke="url(#logoRibbon2)"
          strokeWidth="90"
          fill="none"
          filter="url(#ribbonBlur)"
        />
      </svg>

      {/* ========================================================
          3. PRECISION HIGH-TECH CROSS-GRID MESH (Swiss Agency Style)
      ======================================================== */}
      <div className="absolute inset-0 bg-grid-cross opacity-35" />

      {/* ========================================================
          4. FLOATING 3D GLASS REFRACTION SPHERES
      ======================================================== */}
      {/* Orb 1: Near Hero */}
      <div className="absolute top-[18%] left-[8%] w-32 h-32 rounded-full bg-gradient-to-br from-white/90 via-emerald-100/40 to-cyan-200/30 backdrop-blur-xl border border-white/80 shadow-[0_15px_35px_-10px_rgba(16,185,129,0.18)] animate-float-slow" />

      {/* Orb 2: Near About */}
      <div className="absolute top-[42%] right-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-white/90 via-cyan-100/40 to-blue-200/30 backdrop-blur-xl border border-white/80 shadow-[0_20px_45px_-10px_rgba(6,182,212,0.18)] animate-float-delayed" />

      {/* Orb 3: Near Services */}
      <div className="absolute top-[68%] left-[6%] w-28 h-28 rounded-full bg-gradient-to-br from-white/90 via-lime-100/40 to-emerald-200/30 backdrop-blur-xl border border-white/80 shadow-[0_15px_35px_-10px_rgba(114,231,62,0.18)] animate-float-fast" />

      {/* Orb 4: Near Why Us */}
      <div className="absolute top-[88%] right-[8%] w-36 h-36 rounded-full bg-gradient-to-br from-white/90 via-cyan-100/40 to-teal-200/30 backdrop-blur-xl border border-white/80 shadow-[0_20px_40px_-10px_rgba(0,191,230,0.18)] animate-float-slow" />
    </div>
  );
}
