"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  FileCode2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "AI Development & Automation",
    budget: "$25k - $50k",
    details: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const budgetOptions = [
    "Under $10k",
    "$10k - $25k",
    "$25k - $50k",
    "$50k - $100k",
    "$100k+",
  ];

  const serviceOptions = [
    "AI Development & Automation",
    "Custom Software Development",
    "Website Development",
    "Mobile App Development",
    "CRM & ERP Development",
    "API Integration & Cloud Solutions",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid work email.";
    }
    if (!formData.company.trim()) {
      errs.company = "Please enter your company or project name.";
    }
    if (!formData.details.trim() || formData.details.length < 15) {
      errs.details = "Please share a brief description (at least 15 characters).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1100);
  };

  const whatsappNumber = "918456933885";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello NAVCHETNAA AI, I’m interested in your services."
  )}`;

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-transparent text-[#F4FBF8] overflow-hidden select-none scroll-mt-24"
    >
      {/* Ambient Specular Glows */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#8CEE3F]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-[600px] h-[600px] bg-[#0EA5E9]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================
            1. SECTION HEADER
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#F4FBF8] tracking-tight leading-[1.12]">
            Let&apos;s Build{" "}
            <span className="bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] bg-clip-text text-transparent">
              Something Intelligent.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#A6BBB9] leading-relaxed">
            Tell us about your business challenge, software idea or AI automation opportunity.
            Our senior solutions architects will analyze your requirements and provide an actionable
            technical roadmap within 4 hours.
          </p>
        </motion.div>

        {/* ========================================================
            2. SPLIT LAYOUT: DIRECT DESK + GLASS FORM
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Consultation Desk & Assurances */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-[#06151A]/85 backdrop-blur-2xl border border-[rgba(45,212,191,0.2)] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#8CEE3F]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6 text-left">
                <div>
                  <span className="text-xs font-mono font-bold text-[#8CEE3F] block mb-1">
                    EXECUTIVE DISCOVERY DESK
                  </span>
                  <h3 className="text-2xl font-bold text-[#F4FBF8] leading-tight">
                    Direct Architect Consultation
                  </h3>
                  <p className="text-[#A6BBB9] text-xs sm:text-sm mt-2 leading-relaxed">
                    Connect directly with our solutions architects via WhatsApp, email, or a scheduled
                    technical standup. We respect confidentiality with mutual NDAs.
                  </p>
                </div>

                {/* WhatsApp Quick Action Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between p-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-[#8CEE3F] font-mono font-bold text-xs sm:text-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <span>Chat on WhatsApp Directly</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Direct Communications */}
                <div className="space-y-3 pt-2">
                  <a
                    href="mailto:contact.navchetnaa@gmail.com"
                    className="flex items-center gap-3 text-xs sm:text-sm text-[#A6BBB9] hover:text-[#8CEE3F] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#030A0D] border border-[rgba(45,212,191,0.2)] group-hover:border-[#8CEE3F] flex items-center justify-center text-[#2DD4BF] group-hover:text-[#8CEE3F] transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-mono">contact.navchetnaa@gmail.com</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs sm:text-sm text-[#A6BBB9] hover:text-[#8CEE3F] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#030A0D] border border-[rgba(45,212,191,0.2)] group-hover:border-[#8CEE3F] flex items-center justify-center text-[#8CEE3F] transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-mono font-bold">+91 84569 33885</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="pt-4 border-t border-[rgba(45,212,191,0.15)] space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-[#F4FBF8]/90">
                    <Clock className="w-4 h-4 text-[#8CEE3F] flex-shrink-0" />
                    <span>Guaranteed Response within 4 Business Hours</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#F4FBF8]/90">
                    <ShieldCheck className="w-4 h-4 text-[#2DD4BF] flex-shrink-0" />
                    <span>Standard Mutual Non-Disclosure Agreement (NDA)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#F4FBF8]/90">
                    <FileCode2 className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                    <span>100% Sovereign Code &amp; IP Ownership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Cyber-Glass Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-10 bg-[#06151A]/85 backdrop-blur-2xl border border-[rgba(45,212,191,0.2)] shadow-2xl relative text-left">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[#8CEE3F] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F4FBF8]">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A6BBB9] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#8CEE3F] font-bold">{formData.fullName}</span>.
                    Our technical solutions architects are reviewing your specifications and will send
                    an itemized architecture outline to <span className="text-[#2DD4BF]">{formData.email}</span> within 4 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        company: "",
                        service: "AI Development & Automation",
                        budget: "$25k - $50k",
                        details: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#030A0D] border border-[rgba(45,212,191,0.3)] text-xs font-mono font-bold text-[#8CEE3F] hover:bg-[#8CEE3F] hover:text-[#030A0D] transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#2DD4BF] uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: "" });
                        }}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-[#030A0D]/80 border ${
                          errors.fullName ? "border-rose-500" : "border-[rgba(45,212,191,0.2)]"
                        } text-[#F4FBF8] text-xs sm:text-sm placeholder-[#A6BBB9]/40 focus:outline-none focus:border-[#8CEE3F] transition-all`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#2DD4BF] uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="john@enterprise.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#030A0D]/80 border ${
                          errors.email ? "border-rose-500" : "border-[rgba(45,212,191,0.2)]"
                        } text-[#F4FBF8] text-xs sm:text-sm placeholder-[#A6BBB9]/40 focus:outline-none focus:border-[#8CEE3F] transition-all`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#2DD4BF] uppercase tracking-wider mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => {
                          setFormData({ ...formData, company: e.target.value });
                          if (errors.company) setErrors({ ...errors, company: "" });
                        }}
                        placeholder="Acme Corp"
                        className={`w-full px-4 py-3 rounded-xl bg-[#030A0D]/80 border ${
                          errors.company ? "border-rose-500" : "border-[rgba(45,212,191,0.2)]"
                        } text-[#F4FBF8] text-xs sm:text-sm placeholder-[#A6BBB9]/40 focus:outline-none focus:border-[#8CEE3F] transition-all`}
                      />
                      {errors.company && (
                        <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.company}</p>
                      )}
                    </div>

                    {/* Service Required Dropdown */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#2DD4BF] uppercase tracking-wider mb-2">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#030A0D]/80 border border-[rgba(45,212,191,0.2)] text-[#F4FBF8] text-xs sm:text-sm focus:outline-none focus:border-[#8CEE3F] transition-all cursor-pointer"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#030A0D] text-[#F4FBF8]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Estimated Budget Dropdown */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#2DD4BF] uppercase tracking-wider mb-2">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#030A0D]/80 border border-[rgba(45,212,191,0.2)] text-[#F4FBF8] text-xs sm:text-sm focus:outline-none focus:border-[#8CEE3F] transition-all cursor-pointer"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#030A0D] text-[#F4FBF8]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details Textarea */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#2DD4BF] uppercase tracking-wider mb-2">
                      Project Details &amp; Objectives *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => {
                        setFormData({ ...formData, details: e.target.value });
                        if (errors.details) setErrors({ ...errors, details: "" });
                      }}
                      placeholder="Describe your workflows, key integration targets, timeline requirements, or business objectives..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#030A0D]/80 border ${
                        errors.details ? "border-rose-500" : "border-[rgba(45,212,191,0.2)]"
                      } text-[#F4FBF8] text-xs sm:text-sm placeholder-[#A6BBB9]/40 focus:outline-none focus:border-[#8CEE3F] transition-all resize-none`}
                    />
                    {errors.details && (
                      <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.details}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] text-[#030A0D] font-mono font-black text-sm tracking-wide shadow-lg shadow-[#8CEE3F]/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <div className="w-5 h-5 border-2 border-[#030A0D] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Architecture Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] font-mono text-[#A6BBB9]/70 pt-1">
                    Strict NDA protection • No obligation technical discovery
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
