"use client";

import React from "react";
import {
  FileCheck,
  UserCheck,
  Headphones,
  Building,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

interface EngagementModelsSectionProps {
  onSelectModel?: (modelTitle: string) => void;
}

export default function EngagementModelsSection({ onSelectModel }: EngagementModelsSectionProps) {
  const models = [
    {
      title: "Fixed-Price Projects",
      badge: "DEFINED SCOPE",
      subtitle: "Best for MVPs, full redesigns, and clearly scoped products",
      icon: FileCheck,
      highlight: false,
      benefits: [
        "Fixed project timeline & milestone schedule",
        "Clear scope of work with zero hidden surprises",
        "Staged milestone approval before invoice release",
        "Full IP handover upon final deployment",
        "Includes 30 days post-launch hypercare",
      ],
      cta: "Request Fixed-Price Scope",
    },
    {
      title: "Dedicated Developers",
      badge: "AUGMENTED TALENT",
      subtitle: "Best for fast-moving startups and expanding enterprise teams",
      icon: UserCheck,
      highlight: true,
      benefits: [
        "Senior full-stack & AI engineers embedded directly",
        "100% focused on your proprietary codebase",
        "Participates in your daily standups & Slack/Teams",
        "Flexible scaling (add or scale down with 2-week notice)",
        "Zero recruitment or overhead friction",
      ],
      cta: "Hire Dedicated Engineers",
    },
    {
      title: "Monthly Maintenance & SLA",
      badge: "PEACE OF MIND",
      subtitle: "Best for operational production apps requiring continuous uptime",
      icon: Headphones,
      highlight: false,
      benefits: [
        "24/7 automated uptime & synthetic monitoring",
        "Guaranteed 15-minute emergency SLA response",
        "Security patching, dependency updates & backups",
        "Monthly pool of hours for continuous feature upgrades",
        "Quarterly infrastructure audit & optimization",
      ],
      cta: "Explore Support Plans",
    },
    {
      title: "Enterprise Solutions",
      badge: "BESPOKE ARCHITECTURE",
      subtitle: "Best for large organizations, institutional systems & custom AI",
      icon: Building,
      highlight: false,
      benefits: [
        "Bespoke multi-cluster & on-premise cloud architecture",
        "Custom private LLM fine-tuning & RAG knowledge bases",
        "Executive technical advisory & Solutions Architect",
        "SOC-2, HIPAA, and GDPR compliance certifications",
        "Tailored Master Services Agreement (MSA)",
      ],
      cta: "Schedule Executive Briefing",
    },
  ];

  return (
    <section
      id="engagement"
      className="relative w-full py-20 sm:py-24 md:py-32 bg-slate-50/60 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-cross opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800">
              ENGAGEMENT FRAMEWORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
            Flexible Ways to{" "}
            <span className="bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#00BFE6] bg-clip-text text-transparent">
              Work Together.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every business has different resource models. Choose the exact collaboration structure that aligns with your capital requirements, roadmap velocity, and organizational size.
          </p>
        </motion.div>

        {/* 4 Engagement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  m.highlight
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-900/15 ring-2 ring-emerald-400"
                    : "bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300"
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        m.highlight
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {m.badge}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        m.highlight
                          ? "bg-slate-800 text-emerald-400"
                          : "bg-emerald-50 text-emerald-600"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black mb-1.5 leading-tight">
                    {m.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed mb-6 ${
                      m.highlight ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {m.subtitle}
                  </p>

                  {/* Included benefits */}
                  <div className="space-y-2.5 mb-8">
                    {m.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            m.highlight ? "text-emerald-400" : "text-emerald-500"
                          }`}
                        />
                        <span
                          className={`leading-snug ${
                            m.highlight ? "text-slate-300" : "text-slate-700"
                          }`}
                        >
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div>
                  <button
                    onClick={() => onSelectModel?.(m.title)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                      m.highlight
                        ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 hover:brightness-110 shadow-md shadow-emerald-500/20"
                        : "bg-slate-900 text-white hover:bg-emerald-600"
                    }`}
                  >
                    <span>{m.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p
                    className={`text-[10px] text-center mt-2.5 font-mono ${
                      m.highlight ? "text-slate-400" : "text-slate-400"
                    }`}
                  >
                    Custom quotation tailored to your requirements
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
