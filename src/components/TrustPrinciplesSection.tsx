"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Lock,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle2,
  Users2,
  FileCode2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrustPrinciplesSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const deliveryPrinciples = [
    {
      title: "100% IP & Source Code Ownership",
      desc: "You retain full, unencumbered intellectual property rights to all repositories, database schemas, and AI models from Day 1.",
      icon: FileCode2,
      metric: "Full Enterprise Ownership",
    },
    {
      title: "Zero-Downtime Blue/Green Deployments",
      desc: "Our CI/CD pipelines cut over to production clusters seamlessly with zero user disruption and automated rollbacks.",
      icon: Clock,
      metric: "99.99% Availability SLA",
    },
    {
      title: "OWASP Top 10 & SOC-2 Compliance",
      desc: "Every endpoint is hardened against injection, privilege escalation, and DDoS vulnerabilities with encrypted token handshakes.",
      icon: Lock,
      metric: "End-to-End Cryptography",
    },
    {
      title: "Transparent Bi-Weekly Sprints",
      desc: "No black boxes. You inspect working staging builds every two weeks with direct access to your dedicated solutions architect.",
      icon: Users2,
      metric: "Direct Architect Access",
    },
  ];

  const trustStatements = [
    {
      quote: "NAVCHETNAA AI transformed our manual phone dispatch into an autonomous voice system that handles high-volume caller inquiries with natural speech and zero human intervention.",
      author: "Verified Enterprise Partner",
      role: "Logistics & Supply Chain Network",
      category: "AI Voice & CRM Pipeline",
      impact: "78% Routine Call Automation",
    },
    {
      quote: "The speed and architectural quality delivered by their engineering team was exceptional. Our multi-tenant ERP platform launched ahead of schedule with sub-second database query performance.",
      author: "Verified Technical Director",
      role: "Manufacturing Operations Group",
      category: "Custom ERP Architecture",
      impact: "+34% Operational Velocity",
    },
    {
      quote: "From day one, their team demonstrated rigorous commitment to code security, clean documentation, and seamless AWS cloud scalability.",
      author: "Verified Founder & CTO",
      role: "Digital Health Telemedicine",
      category: "HIPAA Compliant Web & Mobile",
      impact: "99.98% Service Uptime",
    },
  ];

  return (
    <section
      id="trust"
      className="relative w-full py-20 sm:py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-cross opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 mb-4 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              ENGINEERING INTEGRITY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
            Building Technology.{" "}
            <span className="bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#00BFE6] bg-clip-text text-transparent">
              Building Trust.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We hold ourselves to rigorous engineering standards. Here are the non-negotiable delivery commitments that protect your investment and ensure project success.
          </p>
        </motion.div>

        {/* 4 Core Delivery Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {deliveryPrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.metric}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================
            VERIFIED DELIVERY CAROUSEL
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Quote className="w-6 h-6 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  Verified Client Partnership Principle
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActiveSlide(
                      (activeSlide - 1 + trustStatements.length) %
                        trustStatements.length
                    )
                  }
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveSlide(
                      (activeSlide + 1) % trustStatements.length
                    )
                  }
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-100 leading-relaxed italic">
                  &quot;{trustStatements[activeSlide].quote}&quot;
                </p>

                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {trustStatements[activeSlide].author}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {trustStatements[activeSlide].role}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-cyan-300">
                      {trustStatements[activeSlide].category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                      {trustStatements[activeSlide].impact}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
