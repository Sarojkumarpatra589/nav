"use client";

import React from "react";
import Image from "next/image";
import {
  HeartPulse,
  Factory,
  GraduationCap,
  Home,
  Plane,
  ShoppingBag,
  Briefcase,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

interface IndustriesSectionProps {
  onStartProject?: () => void;
}

export default function IndustriesSection({ onStartProject }: IndustriesSectionProps) {
  const industries = [
    {
      id: 0,
      title: "Healthcare & Life Sciences",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
      icon: HeartPulse,
      desc: "HIPAA-compliant telemedicine platforms, AI patient triage receptionists, and unified EHR hospital management systems.",
      impact: "74% Reduction in Patient Wait Times",
    },
    {
      id: 1,
      title: "Manufacturing & Industrial IoT",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
      icon: Factory,
      desc: "Industrial telemetry pipelines, automated supply chain ERPs, and predictive equipment maintenance algorithms.",
      impact: "31% Drop in Unplanned Downtime",
    },
    {
      id: 2,
      title: "Education & EdTech",
      category: "Education",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
      icon: GraduationCap,
      desc: "Institutional university ERPs, automated admission funnels, digital examination engines, and student analytics.",
      impact: "99.8% Fee Collection Automation",
    },
    {
      id: 3,
      title: "Real Estate & Property Tech",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
      icon: Home,
      desc: "High-intent buyer qualification bots, automated MLS listing synchronization, virtual tour hubs, and lease management.",
      impact: "+44% High-Intent Lead Conversion",
    },
    {
      id: 4,
      title: "Travel & Hospitality",
      category: "Travel & Hospitality",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
      icon: Plane,
      desc: "Multilingual reservation concierge, automated room service dispatch, and personalized itinerary generation.",
      impact: "88% Routine Inquiry Automation",
    },
    {
      id: 5,
      title: "Retail & E-Commerce",
      category: "Retail & E-commerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      icon: ShoppingBag,
      desc: "Sub-second headless storefronts, AI shopping assistants, automated inventory re-ordering, and multi-carrier shipping.",
      impact: "+35% Average Order Value",
    },
    {
      id: 6,
      title: "Professional Services & Finance",
      category: "Professional Services",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      icon: Briefcase,
      desc: "Legal document extraction, client intake automation, secure billing portals, and compliance archiving.",
      impact: "18+ Hours Saved Per Partner / Week",
    },
  ];

  return (
    <section
      id="industries"
      className="relative w-full py-20 sm:py-24 md:py-32 bg-white overflow-hidden"
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
              INDUSTRY DOMAINS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
            Technology for{" "}
            <span className="bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#00BFE6] bg-clip-text text-transparent">
              Every Industry.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every sector possesses distinct regulatory, operational, and commercial bottlenecks. Discover how we tailor custom software and AI systems specifically for your sector.
          </p>
        </motion.div>

        {/* ========================================================
            EDITORIAL IMAGE GRID CARDS (7 SECTORS)
        ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {industries.slice(0, 4).map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={onStartProject}
                className="group relative rounded-3xl overflow-hidden cursor-pointer border border-slate-200/90 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[4/5] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] font-mono text-emerald-300 block uppercase tracking-wider mb-1">
                      {ind.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold leading-tight mb-2">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {ind.desc}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:text-cyan-300 transition-colors">
                      <span>Explore Sector Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3 Remaining Sectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {industries.slice(4, 7).map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.15, ease: [0.16, 1, 0.3, 1] }}
                onClick={onStartProject}
                className="group relative rounded-3xl overflow-hidden cursor-pointer border border-slate-200/90 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/5] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] font-mono text-cyan-300 block uppercase tracking-wider mb-1">
                      {ind.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold leading-tight mb-2">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {ind.desc}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:text-cyan-300 transition-colors">
                      <span>Explore Sector Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
