"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Sparkles, Terminal, Shield } from "lucide-react";

interface FooterProps {
  onOpenContact?: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="relative z-20 bg-[#030A0D]/95 text-[#F4FBF8] pt-16 pb-12 overflow-hidden border-t border-[rgba(45,212,191,0.18)] select-none">
      {/* Top Brand Signature Neon Beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8CEE3F] via-[#2DD4BF] to-transparent shadow-[0_0_12px_rgba(140,238,63,0.5)]" />

      {/* Atmospheric Background Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8CEE3F]/06 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0EA5E9]/06 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Footer Navigation & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[rgba(45,212,191,0.12)]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9">
                <Image
                  src="/navchetnaa-logo-hq.png"
                  alt="NAVCHETNAA AI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-black text-xl tracking-tight text-[#F4FBF8]">
                NAVCHETNAA <span className="bg-gradient-to-r from-[#8CEE3F] to-[#2DD4BF] bg-clip-text text-transparent">AI</span>
              </span>
            </div>

            <p className="text-sm text-[#A6BBB9] leading-relaxed max-w-sm">
              Architecting sovereign AI systems, custom software architectures, and high-performance digital flagships for visionary enterprises worldwide.
            </p>

            {/* Operational Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#06151A] border border-[rgba(140,238,63,0.3)] text-[11px] font-mono font-semibold text-[#8CEE3F]">
              <span className="w-2 h-2 rounded-full bg-[#8CEE3F] animate-pulse" />
              <span>All Systems Nominal • Accepting Q4 Deployments</span>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2DD4BF] mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A6BBB9]">
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="hover:text-[#8CEE3F] transition-colors text-left"
                >
                  AI Development &amp; Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="hover:text-[#8CEE3F] transition-colors text-left"
                >
                  Custom Software Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="hover:text-[#8CEE3F] transition-colors text-left"
                >
                  Website &amp; Web Platforms
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="hover:text-[#8CEE3F] transition-colors text-left"
                >
                  Mobile Applications (iOS/Android)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="hover:text-[#8CEE3F] transition-colors text-left"
                >
                  CRM &amp; ERP Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="hover:text-[#8CEE3F] transition-colors text-left"
                >
                  API &amp; Cloud Integration
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2DD4BF] mb-4">
              Architecture
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A6BBB9]">
              <li>
                <button
                  onClick={() => handleLinkClick("#hero")}
                  className="hover:text-[#8CEE3F] transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#about")}
                  className="hover:text-[#8CEE3F] transition-colors text-left"
                >
                  About &amp; Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="hover:text-[#8CEE3F] transition-colors text-left"
                >
                  Enterprise Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#process")}
                  className="hover:text-[#8CEE3F] transition-colors text-left"
                >
                  7-Stage Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#portfolio")}
                  className="hover:text-[#8CEE3F] transition-colors text-left"
                >
                  Work Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#faq")}
                  className="hover:text-[#8CEE3F] transition-colors text-left"
                >
                  FAQ &amp; Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Engagement */}
          <div className="text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2DD4BF] mb-4">
              Engagement Desk
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A6BBB9]">
              <li>
                <a
                  href="mailto:contact.navchetnaa@gmail.com"
                  className="font-mono text-xs text-[#F4FBF8] hover:text-[#8CEE3F] transition-colors flex items-center gap-1.5"
                >
                  contact.navchetnaa@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918456933885?text=Hello%20NAVCHETNAA%20AI%2C%20I%E2%80%99m%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#F4FBF8] hover:text-[#8CEE3F] transition-colors flex items-center gap-1.5"
                >
                  <span>+91 84569 33885</span>
                  <span className="text-[10px] text-[#8CEE3F] bg-[#8CEE3F]/10 px-1.5 py-0.5 rounded border border-[#8CEE3F]/30 font-bold">
                    WhatsApp
                  </span>
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleLinkClick("#contact")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06151A] border border-[rgba(140,238,63,0.3)] text-[#8CEE3F] text-xs font-mono font-bold hover:bg-[#8CEE3F] hover:text-[#030A0D] transition-all"
                >
                  <span>Let&apos;s Talk</span>
                  <Terminal className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A6BBB9]/80">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>&copy; {new Date().getFullYear()} NAVCHETNAA AI. All Rights Reserved. Sovereign IP Ownership Guaranteed.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#06151A] border border-[rgba(45,212,191,0.2)] text-[#2DD4BF] hover:text-[#8CEE3F] hover:border-[#8CEE3F] transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
