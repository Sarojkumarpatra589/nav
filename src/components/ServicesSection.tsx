"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Cpu,
  Code2,
  Globe,
  Smartphone,
  Database,
  Network,
  ArrowUpRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const services = [
    {
      id: "01",
      number: "01",
      category: "Sovereign AI & Automation",
      title: "AI Development & Automation",
      description:
        "Architect autonomous AI agents, enterprise LLM pipelines, and automated self-healing workflows that eliminate repetitive operational bottlenecks.",
      features: [
        "Custom Enterprise LLM Fine-Tuning",
        "Autonomous Multi-Agent Orchestration",
        "Zero-Latency Vector Search & RAG",
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
      tag: "Autonomous AI",
      metric: "10x Process Velocity",
      icon: Cpu,
      glowColor: "rgba(140, 238, 63, 0.25)",
      accentBorder: "group-hover:border-[#8CEE3F]/40",
    },
    {
      id: "02",
      number: "02",
      category: "Enterprise Distributed Systems",
      title: "Custom Software Development",
      description:
        "Engineered from the ground up for high reliability. Scalable cloud backends, distributed microservices, and bespoke software built around your exact business logic.",
      features: [
        "High-Throughput Microservice Clusters",
        "Event-Driven Distributed Architecture",
        "Full Intellectual Property Ownership",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      tag: "Distributed Systems",
      metric: "99.99% Availability SLA",
      icon: Code2,
      glowColor: "rgba(45, 212, 191, 0.25)",
      accentBorder: "group-hover:border-[#2DD4BF]/40",
    },
    {
      id: "03",
      number: "03",
      category: "High-Performance Platforms",
      title: "Website & Web Platform Development",
      description:
        "Modern, lightning-fast digital flagship websites engineered with Next.js, WebGL 3D, and fluid typography. Built to convert high-value visitors and rank effortlessly.",
      features: [
        "Sub-Second First Contentful Paint",
        "Immersive 3D & WebGL Canvas Visuals",
        "SEO-Optimized Next.js App Engine",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      tag: "Flagship Web",
      metric: "100/100 Lighthouse",
      icon: Globe,
      glowColor: "rgba(14, 165, 233, 0.25)",
      accentBorder: "group-hover:border-[#0EA5E9]/40",
    },
    {
      id: "04",
      number: "04",
      category: "Native & Cross-Platform",
      title: "Mobile App Development",
      description:
        "Native iOS and Android applications with silky-smooth 60fps animations, intuitive gesture navigation, and resilient offline-first data synchronization.",
      features: [
        "Cross-Platform Flutter & React Native",
        "Biometric Auth & Real-Time Sync",
        "App Store & Play Store Compliance",
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
      tag: "iOS & Android",
      metric: "60 FPS Native Latency",
      icon: Smartphone,
      glowColor: "rgba(140, 238, 63, 0.25)",
      accentBorder: "group-hover:border-[#8CEE3F]/40",
    },
    {
      id: "05",
      number: "05",
      category: "Operational Infrastructure",
      title: "CRM & ERP Development",
      description:
        "Centralize your entire enterprise operations. Custom multi-tenant ERP platforms, automated inventory tracking, and deep CRM lead pipeline intelligence.",
      features: [
        "Automated Order & Inventory Pipelines",
        "Role-Based Access Control (RBAC)",
        "Real-Time Executive Analytics Dashboards",
      ],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80",
      tag: "Enterprise Operations",
      metric: "Zero Operational Blindspots",
      icon: Database,
      glowColor: "rgba(45, 212, 191, 0.25)",
      accentBorder: "group-hover:border-[#2DD4BF]/40",
    },
    {
      id: "06",
      number: "06",
      category: "Cloud & Systems Mesh",
      title: "API Integration & Cloud Solutions",
      description:
        "Unify disparate cloud applications, internal databases, payment gateways, and third-party SaaS ecosystems with high-security webhook pipelines and REST/GraphQL APIs.",
      features: [
        "Secure Webhook & Event Mesh Relays",
        "Bank-Grade OAuth2 & Token Encryption",
        "Bi-Directional Real-Time Data Sync",
      ],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
      tag: "API & Webhook Mesh",
      metric: "< 15ms Transfer Latency",
      icon: Network,
      glowColor: "rgba(14, 165, 233, 0.25)",
      accentBorder: "group-hover:border-[#0EA5E9]/40",
    },
  ];

  const handleSelect = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-transparent select-none scroll-mt-24"
    >
      {/* Ambient Cyber-Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#8CEE3F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================
            1. SECTION HEADING
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] text-[#F4FBF8]">
            Architectural Solutions.{" "}
            <span className="bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] bg-clip-text text-transparent">
              Engineered for Sovereign Scale.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#A6BBB9] max-w-2xl mx-auto leading-relaxed">
            From autonomous AI agents to high-concurrency cloud backends and resilient mobile platforms,
            we create digital systems that eliminate bottlenecks and compound business advantage.
          </p>
        </motion.div>

        {/* ========================================================
            2. 6-CARD CYBER-GLASS GRID (3x2 Desktop, 2x3 Tablet, 1 Mobile)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div
                  className={`h-full bg-[#06151A]/75 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border border-[rgba(45,212,191,0.16)] shadow-xl shadow-black/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${service.accentBorder}`}
                  style={{
                    boxShadow: "0 10px 30px -10px rgba(3, 10, 13, 0.8)",
                  }}
                >
                  {/* Top Image Preview Banner */}
                  <div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#030A0D] mb-5 border border-white/5">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-95"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06151A] via-transparent to-[#030A0D]/50 pointer-events-none" />

                      {/* Number Tag */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#030A0D]/85 backdrop-blur-md text-[#8CEE3F] font-mono font-black text-xs border border-[rgba(140,238,63,0.3)]">
                        {service.number}
                      </div>

                      {/* Domain Tag */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#06151A]/85 backdrop-blur-md text-[#2DD4BF] font-mono text-[11px] font-bold border border-[rgba(45,212,191,0.3)] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                        <span>{service.tag}</span>
                      </div>

                      {/* Metric Pill */}
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-[#030A0D]/90 backdrop-blur-md text-[#8CEE3F] font-mono text-[11px] font-semibold border border-[rgba(140,238,63,0.25)]">
                        {service.metric}
                      </div>
                    </div>

                    {/* Category & Title */}
                    <div className="space-y-1.5 mb-3 text-left">
                      <span className="text-[11px] font-mono font-bold text-[#2DD4BF] uppercase tracking-wider block">
                        {service.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F4FBF8] tracking-tight leading-snug group-hover:text-[#8CEE3F] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#A6BBB9] leading-relaxed text-left mb-5 line-clamp-3">
                      {service.description}
                    </p>

                    {/* 3 Included Capabilities */}
                    <div className="space-y-2 py-3.5 border-y border-[rgba(45,212,191,0.12)] mb-5 text-left">
                      {service.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2.5 text-xs font-medium text-[#F4FBF8]/85"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8CEE3F] flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-2 flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#030A0D] border border-[rgba(45,212,191,0.2)] flex items-center justify-center text-[#2DD4BF] group-hover:border-[#8CEE3F] group-hover:text-[#8CEE3F] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>

                    <button
                      onClick={() => handleSelect(service.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#2DD4BF] group-hover:text-[#8CEE3F] transition-colors py-1.5 px-3 rounded-full hover:bg-[#030A0D]/70 border border-transparent hover:border-[rgba(140,238,63,0.3)]"
                    >
                      <span>Discuss Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================
            3. SECTION FOOTER CTA RIBBON
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[#06151A]/80 backdrop-blur-2xl border border-[rgba(45,212,191,0.2)] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left space-y-1">
            <div className="text-sm sm:text-base font-bold text-[#F4FBF8]">
              Need a bespoke combination of autonomous AI, custom software, and mobile apps?
            </div>
            <p className="text-xs sm:text-sm text-[#A6BBB9]">
              Our engineering squads deploy integrated full-lifecycle solutions tailored to your operational stack.
            </p>
          </div>

          <button
            onClick={() => handleSelect("Custom Enterprise Architecture")}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8CEE3F] to-[#2DD4BF] text-[#030A0D] font-bold text-xs sm:text-sm shadow-lg shadow-[#8CEE3F]/20 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Request Full Technical Discovery</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
