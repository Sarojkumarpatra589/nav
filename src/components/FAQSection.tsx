"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  Plus,
  Minus,
  Search,
  Sparkles,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQSectionProps {
  onStartProject?: () => void;
}

export default function FAQSection({ onStartProject }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const faqs = [
    {
      q: "What types of software does NAVCHETNAA AI build?",
      a: "We architect sovereign, production-grade digital systems across six core domains: autonomous AI agent ecosystems, bespoke enterprise software, high-performance web platforms, cross-platform mobile apps (iOS & Android), custom multi-tenant CRM/ERP platforms, and high-security API integration meshes. Every system is built from scratch with clean architecture, zero vendor lock-in, and 100% intellectual property ownership from Day 1.",
      category: "Architecture",
    },
    {
      q: "Can you build custom AI agents and automation workflows?",
      a: "Yes. We engineer autonomous multi-agent orchestration, ultra-low-latency voice receptionists, retrieval-augmented generation (RAG) vector pipelines, and self-healing business automation workflows. We integrate both sovereign private open-weight models (Llama 3, DeepSeek) and enterprise frontier APIs (OpenAI, Anthropic, Gemini) with zero data-retention guarantees.",
      category: "AI & Agents",
    },
    {
      q: "Do you develop websites and mobile applications?",
      a: "Yes. We develop digital flagship web platforms using Next.js 14, WebGL 3D, and Tailwind CSS engineered for sub-second load times and high conversions. For mobile, we build native iOS and Android apps using React Native and Flutter with offline-first synchronization, biometric authentication, and 60fps gesture interfaces.",
      category: "Platforms",
    },
    {
      q: "Can you integrate AI into an existing business system?",
      a: "Absolutely. We frequently modernize legacy codebases, ERPs, CRM databases (Salesforce, HubSpot, Zoho, SAP), and enterprise SQL data stores. We design non-disruptive webhook meshes and REST/GraphQL relays that add intelligence, document understanding, and automated actions to your current stack without requiring complete rewrites.",
      category: "Integration",
    },
    {
      q: "How does your development process work?",
      a: "We execute a disciplined 7-stage engineering lifecycle: 01 Discovery & Technical Feasibility, 02 Architecture & Schema Blueprinting, 03 Cyber-Organic UI/UX Prototyping, 04 Agile Sprint Development, 05 QA & Security Auditing, 06 Production Cloud Deployment, and 07 Hypercare & Maintenance. You receive continuous staging previews, bi-weekly video standups, and direct access to your solutions squad.",
      category: "Process",
    },
    {
      q: "How do you estimate project costs and timelines?",
      a: "Following our initial technical discovery call, we provide a detailed, itemized technical proposal with fixed milestone pricing or dedicated squad capacity models. Typical MVP or flagship web platforms launch in 3 to 6 weeks; enterprise software, custom ERPs, and complex AI agent clusters typically range from 8 to 16 weeks delivered in iterative production milestones.",
      category: "Delivery",
    },
    {
      q: "Do you provide deployment and ongoing support?",
      a: "Yes. We handle full production provisioning on AWS, Google Cloud, Azure, or Vercel with automated CI/CD pipelines, containerization (Docker, Kubernetes), and security hardening. Post-launch, we provide structured SLAs with 24/7 uptime monitoring, security patching, prompt drift monitoring, and dedicated engineering sprints.",
      category: "Support",
    },
    {
      q: "How can I discuss a project with your team?",
      a: "You can initiate an executive discovery discussion immediately using our contact form below, schedule a direct technical consult, or reach out directly on WhatsApp at +91 84569 33885 or via email at contact.navchetnaa@gmail.com. Our solutions architects review all requirements and deliver an actionable technical roadmap and architecture blueprint within 4 hours.",
      category: "Engagement",
    },
  ];

  const filteredFaqs = faqs.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.q.toLowerCase().includes(query) ||
      item.a.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const handleCtaClick = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="faq"
      className="relative w-full py-24 sm:py-32 bg-transparent text-[#F4FBF8] overflow-hidden select-none scroll-mt-24"
    >
      {/* Ambient Cyber-Glows */}
      <div className="absolute top-1/3 -left-36 w-96 h-96 bg-[#8CEE3F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================
            1. SECTION HEADER
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-black text-[#F4FBF8] tracking-tight leading-[1.12]">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] bg-clip-text text-transparent">
              Questions.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg text-[#A6BBB9] leading-relaxed">
            Clear, transparent answers about our engineering capabilities, engagement models,
            IP ownership, and delivery methodology.
          </p>

          {/* Search Filter Bar */}
          <div className="relative mt-8 max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A6BBB9]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search architecture, timelines, AI models, pricing..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-[#06151A]/85 backdrop-blur-xl border border-[rgba(45,212,191,0.2)] text-[#F4FBF8] text-xs sm:text-sm placeholder-[#A6BBB9]/50 focus:outline-none focus:border-[#8CEE3F] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#A6BBB9] hover:text-[#8CEE3F]"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        {/* ========================================================
            2. ACCORDION LIST
        ======================================================== */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-[#06151A]/90 border-[rgba(140,238,63,0.35)] shadow-lg shadow-[#8CEE3F]/5"
                    : "bg-[#06151A]/60 border-[rgba(45,212,191,0.16)] hover:border-[rgba(45,212,191,0.3)]"
                } backdrop-blur-xl overflow-hidden`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs font-bold text-[#8CEE3F]/80">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#F4FBF8]">
                      {faq.q}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#8CEE3F] text-[#030A0D] rotate-180"
                        : "bg-[#030A0D] text-[#2DD4BF] border border-[rgba(45,212,191,0.25)]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A6BBB9] leading-relaxed border-t border-[rgba(45,212,191,0.1)]">
                        <div className="pt-3 flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8CEE3F] mt-2 flex-shrink-0" />
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================
            3. STILL HAVE QUESTIONS CTA
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#06151A]/80 backdrop-blur-2xl border border-[rgba(45,212,191,0.2)] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#030A0D] border border-[rgba(45,212,191,0.25)] flex items-center justify-center text-[#8CEE3F] flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#F4FBF8]">
                Have a unique technical or compliance requirement?
              </h4>
              <p className="text-xs sm:text-sm text-[#A6BBB9]">
                Our solutions architects are ready to review your system topology.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-end">
            <a
              href="https://wa.me/918456933885?text=Hello%20NAVCHETNAA%20AI%2C%20I%E2%80%99m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#030A0D] border border-[rgba(140,238,63,0.35)] hover:border-[#8CEE3F] text-[#8CEE3F] font-mono font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all"
            >
              <span>WhatsApp Us</span>
              <MessageSquare className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCtaClick}
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8CEE3F] to-[#2DD4BF] text-[#030A0D] font-mono font-bold text-xs sm:text-sm shadow-lg shadow-[#8CEE3F]/20 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Ask an Architect</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
