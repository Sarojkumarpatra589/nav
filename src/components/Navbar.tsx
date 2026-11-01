"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section observer for active indicator
  useEffect(() => {
    const sectionIds = ["hero", "about", "services", "process", "portfolio", "faq"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -55% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Methodology", href: "#process", id: "process" },
    { label: "Work", href: "#portfolio", id: "portfolio" },
    { label: "FAQ", href: "#faq", id: "faq" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 22,
          stiffness: 110,
          delay: 0.1,
        }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-3.5 sm:px-6 transition-all duration-300 ${
          scrolled ? "pt-2 sm:pt-3" : "pt-4 sm:pt-6"
        }`}
      >
        <div
          className={`w-full transition-all duration-500 rounded-full bg-[#06151A]/80 backdrop-blur-xl border border-[rgba(45,212,191,0.22)] shadow-[0_12px_40px_rgba(0,0,0,0.65)] ${
            scrolled
              ? "max-w-4xl py-2 px-3.5 sm:px-5 border-[#2DD4BF]/35 shadow-[0_15px_45px_rgba(3,10,13,0.85)]"
              : "max-w-5xl py-2.5 px-4 sm:px-6"
          } flex items-center justify-between`}
        >
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none flex-shrink-0"
            aria-label="NAVCHETNAA AI Home"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/navchetnaa-logo-hq.png"
                alt="NAVCHETNAA AI Logo"
                fill
                priority
                className="object-contain drop-shadow-[0_0_12px_rgba(45,212,191,0.4)]"
              />
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-[15px] sm:text-base tracking-tight text-[#F4FBF8] group-hover:text-[#8CEE3F] transition-colors">
                  NAVCHETNAA
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-black tracking-wider uppercase bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] text-[#030A0D] shadow-sm shadow-[#2DD4BF]/25">
                  AI
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-widest text-[#A6BBB9] font-mono font-bold mt-0.5 hidden sm:inline-block">
                Digital Engineering
              </span>
            </div>
          </Link>

          {/* Navigation Links with Active Floating Pill Highlight */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3 lg:px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[#F4FBF8] font-bold"
                      : "text-[#A6BBB9] hover:text-[#F4FBF8] hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-[rgba(45,212,191,0.14)] border border-[rgba(140,238,63,0.35)] -z-10 shadow-[0_0_15px_rgba(45,212,191,0.18)]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA & Mobile Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenContact}
              className="relative group hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] text-[#030A0D] font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#2DD4BF]/20 hover:shadow-[#8CEE3F]/30 active:scale-95 transition-all overflow-hidden focus:outline-none"
            >
              <span className="relative z-10 font-black">Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#F4FBF8] hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-3xl bg-[#06151A]/95 backdrop-blur-2xl border border-[rgba(45,212,191,0.25)] shadow-[0_25px_50px_rgba(0,0,0,0.85)] p-6 overflow-hidden"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-base font-bold text-[#F4FBF8] hover:bg-[rgba(45,212,191,0.12)] hover:text-[#8CEE3F] transition-all flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#2DD4BF]" />
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 mt-2 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact?.();
                  }}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] text-[#030A0D] font-black text-center shadow-lg shadow-[#2DD4BF]/25 active:scale-95 transition-transform"
                >
                  Let&apos;s Talk
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="https://wa.me/918456933885?text=Hello%20NAVCHETNAA%20AI%2C%20I%E2%80%99m%20interested%20in%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[#8CEE3F] text-xs font-mono font-bold text-center hover:bg-emerald-500/20 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                  <a
                    href="mailto:contact.navchetnaa@gmail.com"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-[#2DD4BF] text-xs font-mono font-bold text-center hover:bg-white/[0.08] transition-colors"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
