"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface WhyUsSectionProps {
  onJoinUs?: () => void;
  onPartnerWithUs?: () => void;
}

export default function WhyUsSection({
  onJoinUs,
  onPartnerWithUs,
}: WhyUsSectionProps) {
  const teamMembers = [
    {
      name: "Maya Chen",
      role: "Lead AI Architect",
      image: "/images/team/team-1.jpg",
    },
    {
      name: "Alex Rivera",
      role: "VP of Engineering",
      image: "/images/team/team-2.jpg",
    },
    {
      name: "Elena Rostova",
      role: "Head of Product",
      image: "/images/team/team-3.jpg",
    },
    {
      name: "Marcus Vance",
      role: "Cloud Infrastructure",
      image: "/images/team/team-4.jpg",
    },
    {
      name: "Sophia Lin",
      role: "Design Systems Director",
      image: "/images/team/team-5.jpg",
    },
    {
      name: "David Kim",
      role: "Full-Stack Architect",
      image: "/images/team/team-6.jpg",
    },
    {
      name: "Liam O'Connor",
      role: "ML Research Lead",
      image: "/images/team/team-7.jpg",
    },
    {
      name: "Aria Patel",
      role: "WebGL & 3D Specialist",
      image: "/images/team/team-8.jpg",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative z-10 w-full pt-16 sm:pt-20 md:pt-24 pb-0 bg-white overflow-hidden select-none border-t border-slate-100/80"
    >
      {/* Precision Cross Grid Background */}
      <div className="absolute inset-0 bg-grid-cross opacity-40 pointer-events-none" />

      {/* Atmospheric Soft Gradient Glows (Exact Logo Matching Palette) */}
      <div className="absolute top-10 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#72E73E]/12 via-[#10B981]/08 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 -right-20 w-[550px] h-[550px] bg-gradient-to-bl from-[#00BFE6]/14 via-[#0EA5E9]/08 to-transparent rounded-full blur-[110px] pointer-events-none" />

      {/* Subtle Logo-Inspired Circuit Traces in Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="whyUsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#72E73E" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00BFE6" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <g stroke="url(#whyUsGrad)" strokeWidth="1" strokeDasharray="4 4" fill="none">
          <path d="M 0,160 L 320,160 L 400,240 L 980,240 L 1060,160 L 1600,160" />
          <path d="M 0,380 L 480,380 L 560,460 L 1200,460" />
        </g>
        <circle cx="400" cy="240" r="3" fill="#10B981" />
        <circle cx="980" cy="240" r="3" fill="#00BFE6" />
        <circle cx="560" cy="460" r="3" fill="#72E73E" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================
            1. TOP EYEBROW / BRAND PILL
        ======================================================== */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              THE MINDS BEHIND THE INTELLIGENCE
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500 tracking-wide">
            <span>GROWTH MINDSET</span>
            <span>•</span>
            <span>GLOBAL DELIVERY</span>
          </div>
        </div>

        {/* ========================================================
            2. GIANT EDITORIAL HEADLINE: "WHY US?"
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Luminous Logo-Inspired Radial Aura behind Title */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[220px] bg-gradient-to-r from-[#72E73E]/15 via-[#10B981]/15 to-[#00BFE6]/15 blur-3xl pointer-events-none -z-10" />
          <h2 className="text-[17vw] sm:text-[15vw] md:text-[14vw] lg:text-[180px] xl:text-[210px] font-black tracking-tighter text-[#0F172A] leading-[0.88] select-none text-left mb-10 sm:mb-12 md:mb-14">
            WHY US?
          </h2>
        </motion.div>

        {/* ========================================================
            3. THREE-COLUMN EDITORIAL VALUE PROPOSITIONS
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-20 md:mb-24 items-start text-left">
          {/* Column 1: A Career Without Limits + Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between h-full space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                A career without limits
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                With a remote-first engineering culture and global delivery hubs,
                we are excited for the road ahead. We architect intelligent AI workflows,
                cloud systems, and custom software that help ambitious companies execute at
                lightning speed.
              </p>
            </div>

            <div>
              <button
                onClick={onJoinUs || onPartnerWithUs}
                className="inline-flex items-center justify-between gap-6 px-6 py-3.5 bg-[#00BFE6] hover:bg-[#0EA5E9] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:translate-x-1 group"
              >
                <span>Join Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Column 2: Enjoy What You Do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
              Enjoy what you do
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We prioritize high-trust autonomy, deep craft, and genuine wellbeing.
              Our engineers, researchers, and designers thrive in an irresistible culture
              focused on solving hard technical problems that unlock real leverage for our clients.
            </p>
          </motion.div>

          {/* Column 3: A Culture With Imagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
              A culture with imagination
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We are a creative technology collective with a growth mindset. Everything we
              design and build resolves our mission of bringing high-impact innovation to
              life—bridging cutting-edge artificial intelligence with production-ready execution.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ========================================================
          4. TEAM PORTRAIT LINEUP (Emerging from Section Bottom)
      ======================================================== */}
      <div className="relative w-full overflow-hidden border-b border-slate-200/90 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-end justify-center -space-x-3 sm:-space-x-4 md:-space-x-6 overflow-x-auto no-scrollbar pt-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -16, zIndex: 30 }}
              className="relative group flex-shrink-0 cursor-pointer"
            >
              {/* Floating Info Tooltip on Hover */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap bg-slate-900/95 text-white text-[11px] font-semibold py-1.5 px-3 rounded-full backdrop-blur-md shadow-xl border border-white/20 z-40">
                <span>{member.name}</span>
                <span className="text-cyan-400 ml-1.5">• {member.role}</span>
              </div>

              {/* Portrait Container: Rounded Top, Flush Bottom */}
              <div className="w-24 h-36 sm:w-32 sm:h-48 md:w-36 md:h-56 lg:w-44 lg:h-64 rounded-t-3xl sm:rounded-t-[32px] overflow-hidden border-t-2 border-x-2 border-white/90 shadow-2xl bg-slate-100 relative group-hover:border-cyan-300 transition-colors duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 130px, 200px"
                  priority={i < 4}
                />
                {/* Subtle Lighting Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
