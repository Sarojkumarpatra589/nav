"use client";

import React from "react";
import QuantumBackground from "@/components/canvas/QuantumBackground";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import HeroSection from "@/components/HeroSection";
import TechStackMarquee from "@/components/TechStackMarquee";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessTimelineSection from "@/components/ProcessTimelineSection";
import PortfolioSection from "@/components/PortfolioSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#030A0D] text-[#F4FBF8] selection:bg-[#8CEE3F] selection:text-[#030A0D] relative">
      {/* 0. Full-Page Fixed 3D Cyber-Organic Neural Environment */}
      <QuantumBackground />

      {/* Global Scroll Progress Indicator & Back-to-Top HUD */}
      <ScrollProgress />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* 1. Global Glass Header with Nav Links & 'Let's Talk' CTA */}
      <Navbar onOpenContact={handleScrollToContact} />

      {/* 2. Hero Section: Sovereign AI & Production Infrastructure */}
      <HeroSection
        onExploreServices={handleScrollToServices}
        onStartProject={handleScrollToContact}
      />

      {/* 3. Enterprise Stack Marquee: Industry-Standard Technologies */}
      <TechStackMarquee />

      {/* 4. About Us & Engineering Capabilities Matrix */}
      <AboutSection
        onStartProject={handleScrollToContact}
        onExploreApproach={handleScrollToServices}
      />

      {/* 5. Enterprise Services Grid: 6 Dark Glassmorphic Domains */}
      <ServicesSection onSelectService={handleScrollToContact} />

      {/* 6. Seven-Stage Methodology Timeline: 01 Discover to 07 Support */}
      <ProcessTimelineSection onStartProject={handleScrollToContact} />

      {/* 7. Curated Work Archive: Interactive 3D Flip Project Showcase */}
      <PortfolioSection onStartProject={handleScrollToContact} />

      {/* 8. Knowledge Base & Advisory FAQ: 8 Core Architecture Questions */}
      <FAQSection onStartProject={handleScrollToContact} />

      {/* 9. Contact & Discovery Desk: Let's Build Something Intelligent */}
      <ContactSection />

      {/* 10. Cyber-Organic Enterprise Footer */}
      <Footer onOpenContact={handleScrollToContact} />
    </main>
  );
}
