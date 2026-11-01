"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Show after slight delay or user scroll
    const timer = setTimeout(() => setVisible(true), 1500);
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setHasScrolled(true);
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const whatsappUrl = "https://wa.me/918456933885?text=Hello%20NAVCHETNAA%20AI%2C%20I%E2%80%99m%20interested%20in%20your%20services.";

  return (
    <aside aria-label="WhatsApp Quick Contact">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-20 right-5 sm:bottom-22 sm:right-6 z-40"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#06151A]/90 hover:bg-[#06151A] text-[#F4FBF8] backdrop-blur-xl border border-[rgba(140,238,63,0.35)] hover:border-[#8CEE3F] shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_rgba(140,238,63,0.25)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8CEE3F]"
              aria-label="Chat with NAVCHETNAA AI on WhatsApp (+91 84569 33885)"
            >
              {/* WhatsApp / Speech Icon with Pulse Radar */}
              <div className="relative w-8 h-8 rounded-full bg-[#8CEE3F] text-[#030A0D] flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="absolute inset-0 rounded-full bg-[#8CEE3F] animate-ping opacity-40" />
                <MessageSquare className="w-4 h-4 relative z-10 fill-current" />
              </div>

              {/* Text Label - compact and readable */}
              <div className="flex flex-col text-left pr-1">
                <span className="text-[11px] sm:text-xs font-mono font-bold text-[#8CEE3F] leading-tight">
                  Chat on WhatsApp
                </span>
                <span className="text-[10px] font-mono text-[#A6BBB9] hidden sm:block">
                  +91 84569 33885
                </span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
