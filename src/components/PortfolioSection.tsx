"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  RotateCw,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioSectionProps {
  onStartProject?: () => void;
}

interface ProjectItem {
  id: number;
  title: string;
  category: "AI Solutions" | "Software Development" | "Websites" | "Mobile Applications" | "CRM & ERP";
  shortIntro: string;
  fullDesc: string;
  image: string;
  technologies: string[];
  badge: string;
  results: string;
  benefits: string[];
}

export default function PortfolioSection({ onStartProject }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const categories = [
    "All",
    "AI Solutions",
    "Software Development",
    "Websites",
    "Mobile Applications",
    "CRM & ERP",
  ];

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "OmniVoice AI – 24/7 Voice Receptionist & Scheduling Agent",
      category: "AI Solutions",
      shortIntro: "Autonomous inbound AI voice agent handling multi-accent callers with sub-200ms latency.",
      fullDesc:
        "Intelligent inbound voice receptionist and qualification pipeline processing thousands of caller hours with automated appointment booking, real-time sentiment analysis, and direct CRM injection.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1000&q=80",
      technologies: ["FastAPI", "WebRTC", "OpenAI Whisper", "Twilio", "PostgreSQL"],
      badge: "Production Architecture",
      results: "180ms Latency • 99.4% Call Resolution",
      benefits: [
        "Automated 24/7 customer voice interactions with zero hold times.",
        "Faster lead response with sub-second bi-directional CRM syncing.",
        "Centralized call transcripts and actionable executive reporting.",
      ],
    },
    {
      id: 2,
      title: "CoreEnterprise ERP – Multi-Region Operational Logistics",
      category: "Software Development",
      shortIntro: "Bespoke enterprise platform orchestrating operations, employee workflows, and live inventory.",
      fullDesc:
        "Custom enterprise resource planning platform engineered for manufacturing, supply chain tracking, and distributed warehousing with automated purchase orders and fleet management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      technologies: ["Next.js 14", "Django", "PostgreSQL", "Docker", "AWS ECS"],
      badge: "Production Architecture",
      results: "Sub-Second Ingestion • 40+ Branches",
      benefits: [
        "Centralized multi-tenant operations across distributed branches.",
        "Granular Role-Based Access Control (RBAC) and audit trails.",
        "Streamlined workflows eliminating 90% of paperwork friction.",
      ],
    },
    {
      id: 3,
      title: "Aura Digital Flagship – High-Performance Web Platform",
      category: "Websites",
      shortIntro: "Ultra-fast headless web platform built with 3D product previews and localized edge rendering.",
      fullDesc:
        "High-performance responsive digital flagship engineered to strengthen brand identity, engage visitors with fluid WebGL graphics, and maximize international customer conversions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      technologies: ["Next.js 14", "Tailwind CSS", "Framer Motion", "WebGL", "Vercel"],
      badge: "Production Architecture",
      results: "100/100 Lighthouse • 0.6s LCP",
      benefits: [
        "Seamless fluid responsiveness across desktop, tablet, and mobile.",
        "Immersive brand presentation with interactive 3D WebGL canvases.",
        "Optimized user journeys driving measurable +38% conversion lifts.",
      ],
    },
    {
      id: 4,
      title: "PulseHealth Pro – Telemedicine & Patient EHR Mobile App",
      category: "Mobile Applications",
      shortIntro: "Intuitive iOS and Android application with encrypted HD video consultation and biometric auth.",
      fullDesc:
        "HIPAA-compliant cross-platform mobile suite connecting patients with verified specialists via low-latency WebRTC streams, automated prescription delivery, and vital sign telemetry.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80",
      technologies: ["React Native", "TypeScript", "WebRTC", "Node.js", "MongoDB"],
      badge: "Production Architecture",
      results: "iOS & Android • 4.9 Star Rating",
      benefits: [
        "Mobile-first native experience with silky-smooth 60fps animations.",
        "Intuitive biometric authorization and encrypted health records.",
        "Scalable offline-first synchronization across remote connections.",
      ],
    },
    {
      id: 5,
      title: "ApexSync CRM – Unified Lead Intelligence & Revenue Engine",
      category: "CRM & ERP",
      shortIntro: "Centralized relationship management system with live sales pipeline automation and analytics.",
      fullDesc:
        "Modern customer intelligence hub integrating multi-channel communication, pipeline forecasting, automated quote generation, and real-time executive balance-sheet telemetry.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Python", "TimescaleDB", "Redis", "Stripe API"],
      badge: "Production Architecture",
      results: "15ms Data Refresh • SOC-2 Ready",
      benefits: [
        "Organized customer data with zero operational blindspots.",
        "Automated sales qualification workflows and smart lead routing.",
        "Improved executive visibility with real-time revenue ingestion.",
      ],
    },
    {
      id: 6,
      title: "Synapse Automation – Autonomous Enterprise Agent Mesh",
      category: "AI Solutions",
      shortIntro: "Connected business automation orchestrating AI agents, database pipelines, and cloud APIs.",
      fullDesc:
        "Self-healing event-driven integration mesh connecting disparate enterprise SaaS tools, ERP databases, and autonomous AI agents to eliminate repetitive manual operational tasks.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      technologies: ["LangChain", "Go", "Apache Kafka", "Python", "Docker"],
      badge: "Production Architecture",
      results: "50M+ Daily Events • 99.99% SLA",
      benefits: [
        "Reduced repetitive manual tasks by over 78% across departments.",
        "Seamlessly connected cloud applications, webhooks, and databases.",
        "Consistent, error-contained data flow without human bottlenecks.",
      ],
    },
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setFlippedCards({});
  };

  const toggleCardFlip = (id: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCtaClick = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="relative w-full py-24 sm:py-32 bg-transparent text-[#F4FBF8] overflow-hidden select-none scroll-mt-24"
    >
      {/* Background Architectural Grid and Ambient Glows */}
      <div className="absolute inset-0 bg-grid-cyber opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#8CEE3F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================
            1. SECTION HEADER
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#F4FBF8] tracking-tight leading-[1.12]">
            Selected Work.{" "}
            <span className="bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] bg-clip-text text-transparent">
              Real Solutions.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#A6BBB9] leading-relaxed font-normal">
            Explore our architectural showcase of production systems, AI pipelines, enterprise
            dashboards, and mobile platforms engineered for scale.
          </p>
        </motion.div>

        {/* ========================================================
            2. CATEGORY FILTERS
        ======================================================== */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap pb-4 mb-10 sm:mb-14">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-mono font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-[#8CEE3F] to-[#2DD4BF] text-[#030A0D] shadow-lg shadow-[#8CEE3F]/20 scale-105"
                    : "bg-[#06151A]/80 text-[#A6BBB9] border border-[rgba(45,212,191,0.2)] hover:border-[rgba(45,212,191,0.4)] hover:text-[#F4FBF8]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ========================================================
            3. 3D FLIP PORTFOLIO GRID (3-Column Desktop, 2 Tablet, 1 Mobile)
        ======================================================== */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item) => {
              const isFlipped = !!flippedCards[item.id];

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  style={{ perspective: "1400px" }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${item.title}. Press Enter or Space to flip card.`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCardFlip(item.id);
                    }
                  }}
                  onClick={() => toggleCardFlip(item.id)}
                  className="relative h-[550px] sm:h-[530px] w-full rounded-3xl cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8CEE3F]"
                >
                  {/* Rotating Card Container with 3D Preserve-3D */}
                  <div
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      transition: "transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    className="relative w-full h-full rounded-3xl"
                  >
                    {/* ========================================================
                        FRONT FACE
                    ======================================================== */}
                    <div
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                      className="absolute inset-0 w-full h-full rounded-3xl bg-[#06151A]/85 backdrop-blur-2xl border border-[rgba(45,212,191,0.2)] shadow-xl group-hover:shadow-2xl group-hover:border-[rgba(140,238,63,0.4)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                      {/* Top Visual Thumbnail */}
                      <div className="relative aspect-[16/10] w-full bg-[#030A0D] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#06151A] via-transparent to-transparent pointer-events-none" />

                        {/* Category Label Pill */}
                        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#030A0D]/85 backdrop-blur-md border border-[rgba(45,212,191,0.3)] text-[11px] font-mono font-bold text-[#2DD4BF] shadow-sm">
                          {item.category}
                        </div>

                        {/* Performance Metric Banner */}
                        <div className="absolute bottom-3 left-3.5 right-3.5 px-3 py-1.5 rounded-xl bg-[#030A0D]/90 backdrop-blur-md border border-[rgba(140,238,63,0.25)] text-[11px] font-mono text-[#8CEE3F] truncate">
                          {item.results}
                        </div>
                      </div>

                      {/* Content Box */}
                      <div className="p-5 sm:p-6 md:p-7 flex flex-col justify-between flex-grow text-left">
                        <div>
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#2DD4BF] mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8CEE3F]" />
                            <span>{item.badge}</span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-[#F4FBF8] mb-2 leading-snug group-hover:text-[#8CEE3F] transition-colors line-clamp-2">
                            {item.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-[#A6BBB9] leading-relaxed line-clamp-3">
                            {item.shortIntro}
                          </p>
                        </div>

                        {/* Front Face Bottom: Flip Indicator */}
                        <div className="pt-4 border-t border-[rgba(45,212,191,0.12)] flex items-center justify-between">
                          <span className="text-xs font-mono text-[#A6BBB9]/70 font-medium">
                            Tap to inspect architecture
                          </span>

                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#030A0D] text-[#8CEE3F] text-xs font-mono font-bold border border-[rgba(140,238,63,0.3)] group-hover:bg-[#8CEE3F] group-hover:text-[#030A0D] transition-all duration-300">
                            <span>Flip 3D</span>
                            <RotateCw className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-180" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ========================================================
                        BACK FACE (Reverse side at rotateY(180deg))
                    ======================================================== */}
                    <div
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                      className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-[#06151A] via-[#041116] to-[#030A0D] text-[#F4FBF8] border border-[rgba(140,238,63,0.35)] shadow-2xl p-5 sm:p-6 md:p-7 flex flex-col justify-between overflow-y-auto text-left"
                    >
                      {/* Header Row: Category & Return Indicator */}
                      <div className="flex items-center justify-between pb-3 border-b border-[rgba(45,212,191,0.15)]">
                        <span className="px-3 py-1 rounded-full bg-[#8CEE3F]/15 border border-[#8CEE3F]/35 text-[11px] font-mono font-bold text-[#8CEE3F] uppercase tracking-wide">
                          {item.category}
                        </span>

                        <div className="inline-flex items-center gap-1 text-[11px] font-mono text-[#A6BBB9] hover:text-[#8CEE3F] transition-colors">
                          <RotateCw className="w-3 h-3 text-[#8CEE3F]" />
                          <span>Flip back</span>
                        </div>
                      </div>

                      {/* Main Narrative & Key Capabilities */}
                      <div className="my-auto space-y-4">
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-[#F4FBF8] leading-snug mb-1.5">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[#A6BBB9] leading-relaxed line-clamp-3">
                            {item.fullDesc}
                          </p>
                        </div>

                        {/* Three Key Benefits / Capabilities */}
                        <div className="space-y-2 pt-1">
                          <span className="text-[10px] font-mono font-bold text-[#8CEE3F] uppercase tracking-wider block">
                            Key Capabilities:
                          </span>
                          {item.benefits.map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2 text-xs text-[#F4FBF8]/90">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#8CEE3F] flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technology Stack Tags */}
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#2DD4BF] uppercase tracking-wider block mb-1.5">
                            Core Stack:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 rounded bg-[#030A0D] border border-[rgba(45,212,191,0.3)] text-[#2DD4BF] text-[10px] font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Back Face Action CTA */}
                      <div className="pt-3 border-t border-[rgba(45,212,191,0.15)] flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#A6BBB9]">
                          {item.badge}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCtaClick();
                          }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#8CEE3F] to-[#2DD4BF] text-[#030A0D] text-xs font-mono font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
                        >
                          <span>Request Architecture</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ========================================================
            4. SECTION FOOTER CTA
        ======================================================== */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-[rgba(45,212,191,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-[#A6BBB9] font-mono">
            Every architecture is custom-engineered with full sovereign code ownership.
          </p>

          <button
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#06151A] text-[#F4FBF8] border border-[rgba(45,212,191,0.3)] font-mono font-bold text-xs sm:text-sm shadow-md hover:border-[#8CEE3F] hover:text-[#8CEE3F] hover:scale-105 transition-all group"
          >
            <span>Discuss Your Custom Solution</span>
            <ArrowRight className="w-4 h-4 text-[#8CEE3F] transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
