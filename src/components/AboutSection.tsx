"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Check,
  Cpu,
  Layers,
  Terminal,
  Database,
  Cloud,
  Code2,
  Server,
  Network,
  Workflow,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AboutSectionProps {
  onStartProject?: () => void;
  onExploreApproach?: () => void;
}

export default function AboutSection({
  onStartProject,
  onExploreApproach,
}: AboutSectionProps) {
  const [selectedTech, setSelectedTech] = useState(0);

  const capabilities = [
    {
      name: "Python",
      category: "Core Language",
      icon: Terminal,
      highlight: "AI Core & Math Modeling",
      description: "Foundation for high-performance machine learning models, asynchronous microservices, and data transformation scripts.",
      tags: ["NumPy", "PyTorch", "AsyncIO", "Polars"],
      latency: "Sub-10ms Execution",
    },
    {
      name: "FastAPI",
      category: "API Framework",
      icon: Zap,
      highlight: "Sub-10ms Microservices",
      description: "High-throughput asynchronous REST & WebSocket backends with native OpenAPI schemas and Pydantic data validation.",
      tags: ["Async/Await", "OpenAPI", "OAuth2", "WebSockets"],
      latency: "P99 < 8.2ms",
    },
    {
      name: "Django",
      category: "Backend Framework",
      icon: Server,
      highlight: "Enterprise Scale Systems",
      description: "Battle-tested ORM, structured migrations, and robust multi-tenant architectures engineered for high-concurrency commercial platforms.",
      tags: ["PostgreSQL ORM", "Celery", "REST Framework", "RBAC"],
      latency: "Zero-Data Loss",
    },
    {
      name: "LLM Orchestration",
      category: "AI Architecture",
      icon: Cpu,
      highlight: "Model Routing & RAG",
      description: "Context retrieval pipelines, multi-model fallback topologies, prompt caching, and cost-optimized token dispatchers.",
      tags: ["LangChain", "LlamaIndex", "Semantic Cache", "DSPy"],
      latency: "Streaming Sub-200ms",
    },
    {
      name: "AI Agents",
      category: "Autonomous Systems",
      icon: Workflow,
      highlight: "Multi-Agent State Loops",
      description: "Deterministic multi-agent execution loops with sandboxed tool invocation, reflection, memory persistence, and Human-In-The-Loop safety gates.",
      tags: ["LangGraph", "AutoGPT", "Tool Mesh", "State Graphs"],
      latency: "Autonomous Execution",
    },
    {
      name: "Docker",
      category: "Containerization",
      icon: Layers,
      highlight: "Reproducible Builds",
      description: "Lightweight multi-stage container builds, ephemeral development clusters, and secure isolation for mission-critical microservices.",
      tags: ["Multi-Stage", "Alpine Linux", "Compose", "Registry Sync"],
      latency: "Sub-3s Boot",
    },
    {
      name: "Vector Databases",
      category: "Data & Retrieval",
      icon: Database,
      highlight: "Sub-15ms Hybrid Search",
      description: "High-dimensional vector storage, HNSW indexing, and hybrid dense/sparse retrieval for semantic knowledge bases.",
      tags: ["Qdrant", "pgvector", "Milvus", "HNSW Indexing"],
      latency: "P99 < 14ms",
    },
    {
      name: "API Integration",
      category: "System Connectivity",
      icon: Network,
      highlight: "Event-Driven Webhooks",
      description: "Resilient bi-directional connectors for payment gateways, enterprise ERPs, CRMs, and third-party SaaS ecosystems.",
      tags: ["Stripe", "Salesforce", "Kafka", "Idempotency"],
      latency: "100% Guaranteed Delivery",
    },
    {
      name: "Cloud Deployment",
      category: "Infrastructure",
      icon: Cloud,
      highlight: "Multi-Region Cloud Mesh",
      description: "Infrastructure-as-Code setups across AWS, Google Cloud, and Vercel edge networks with automated blue/green cutover.",
      tags: ["Terraform", "AWS ECS", "Cloudflare Edge", "Kubernetes"],
      latency: "99.99% Availability",
    },
    {
      name: "Data Infrastructure",
      category: "Streaming & Pipelines",
      icon: Code2,
      highlight: "High-Throughput Analytics",
      description: "Scalable event brokers, Redis cache tiers, and continuous ETL pipelines built to handle millions of business events daily.",
      tags: ["Redis Streams", "PostgreSQL", "Apache Kafka", "ClickHouse"],
      latency: "+1.2M queries/hr",
    },
  ];

  const activeCapability = capabilities[selectedTech];
  const ActiveIcon = activeCapability.icon;

  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-28 md:py-32 overflow-hidden select-none scroll-mt-24"
    >
      {/* Ambient Grid and Glow */}
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#2DD4BF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#8CEE3F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4FBF8] tracking-tight leading-tight">
            Built for Precision.{" "}
            <span className="bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] bg-clip-text text-transparent">
              Engineered to Scale.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#A6BBB9] leading-relaxed">
            We bridge the gap between speculative AI research and robust, production-grade software
            engineering to build systems businesses can depend on every single second.
          </p>
        </motion.div>

        {/* Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ========================================================
              LEFT COLUMN: ENGINEERING PHILOSOPHY & COMMITMENTS
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="cyber-glass rounded-3xl p-6 sm:p-8 space-y-5">
              <h3 className="text-xl sm:text-2xl font-black text-[#F4FBF8] tracking-tight">
                Our Architectural Principles
              </h3>
              <p className="text-xs sm:text-sm text-[#A6BBB9] leading-relaxed">
                Rather than deploying superficial wrappers or fragile experiments, we engineer software
                that integrates cleanly into business operations, maintains deterministic safeguards,
                and eliminates technical surprises.
              </p>

              {/* Principle Line Items */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="w-6 h-6 rounded-lg bg-[#8CEE3F]/15 text-[#8CEE3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#F4FBF8]">Clean &amp; Maintainable Software</h4>
                    <p className="text-[11px] text-[#A6BBB9] mt-0.5">Strict typing, modular microservices, and thorough architectural documentation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="w-6 h-6 rounded-lg bg-[#2DD4BF]/15 text-[#2DD4BF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#F4FBF8]">Business-Focused AI Automation</h4>
                    <p className="text-[11px] text-[#A6BBB9] mt-0.5">Targeted autonomous agent workflows that directly eliminate costly operational bottlenecks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="w-6 h-6 rounded-lg bg-[#0EA5E9]/15 text-[#0EA5E9] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#F4FBF8]">Zero-Trust Secure Architecture</h4>
                    <p className="text-[11px] text-[#A6BBB9] mt-0.5">Role-based access control, cryptographic verification, and end-to-end auditability.</p>
                  </div>
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="pt-2">
                <button
                  onClick={onStartProject}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] text-[#030A0D] font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-[#2DD4BF]/20 hover:shadow-[#8CEE3F]/35 transition-all flex items-center justify-center gap-2"
                >
                  <span>Discuss Your System Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: INTERACTIVE CAPABILITY MATRIX
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-7 space-y-5 text-left"
          >
            {/* Interactive Selector Grid of 10 Capabilities */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {capabilities.map((tech, idx) => {
                const isSelected = selectedTech === idx;
                const TechIcon = tech.icon;

                return (
                  <button
                    key={tech.name}
                    onClick={() => setSelectedTech(idx)}
                    className={`p-3 rounded-2xl border text-left transition-all duration-200 focus:outline-none flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#06151A] border-[#8CEE3F] shadow-[0_0_20px_rgba(140,238,63,0.25)] ring-1 ring-[#8CEE3F]/40"
                        : "cyber-glass hover:border-white/25 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <TechIcon className={`w-4 h-4 ${isSelected ? "text-[#8CEE3F]" : "text-[#A6BBB9]"}`} />
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-[#8CEE3F] animate-ping" : "bg-white/20"}`} />
                    </div>
                    <div>
                      <span className={`text-xs font-mono font-bold block ${isSelected ? "text-[#F4FBF8]" : "text-[#A6BBB9]"}`}>
                        {tech.name}
                      </span>
                      <span className="text-[9px] font-mono text-[#A6BBB9]/70 block truncate">
                        {tech.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Capability Inspector Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="cyber-glass rounded-3xl p-6 sm:p-7 border border-[#2DD4BF]/30 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#8CEE3F]/20 to-[#2DD4BF]/20 border border-[#2DD4BF]/40 flex items-center justify-center text-[#8CEE3F]">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-[#F4FBF8]">
                        {activeCapability.name} — <span className="text-[#8CEE3F] font-bold text-xs sm:text-sm">{activeCapability.highlight}</span>
                      </h4>
                      <span className="text-[10px] font-mono text-[#A6BBB9] uppercase tracking-wider">
                        {activeCapability.category} System Module
                      </span>
                    </div>
                  </div>

                  <span className="self-start sm:self-center px-3 py-1 rounded-full bg-[#030A0D]/70 border border-[#2DD4BF]/40 text-[10px] font-mono font-bold text-[#2DD4BF]">
                    {activeCapability.latency}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#A6BBB9] leading-relaxed">
                  {activeCapability.description}
                </p>

                {/* Capability Tech Tags */}
                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono text-[#A6BBB9] mr-1">STACK TOKENS:</span>
                  {activeCapability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[10px] font-mono font-bold text-[#F4FBF8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
