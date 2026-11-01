"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TechStackMarquee() {
  const technologies = [
    { name: "Python", category: "Programming", icon: "🐍", color: "#8CEE3F", highlight: "AI & Backend" },
    { name: "Next.js 14", category: "Frontend", icon: "▲", color: "#F4FBF8", highlight: "App Router / SSR" },
    { name: "React", category: "Frontend", icon: "⚛️", color: "#2DD4BF", highlight: "Interactive UI" },
    { name: "TypeScript", category: "Programming", icon: "TS", color: "#0EA5E9", highlight: "Strict Types" },
    { name: "FastAPI", category: "Backend", icon: "⚡", color: "#8CEE3F", highlight: "Sub-10ms APIs" },
    { name: "Django", category: "Backend", icon: "dj", color: "#2DD4BF", highlight: "Enterprise Core" },
    { name: "Node.js", category: "Backend", icon: "🟢", color: "#4ADE80", highlight: "Realtime Streams" },
    { name: "PostgreSQL", category: "Database", icon: "🐘", color: "#0EA5E9", highlight: "ACID Relational" },
    { name: "MongoDB", category: "Database", icon: "🍃", color: "#4ADE80", highlight: "Document Clusters" },
    { name: "AWS Cloud", category: "Cloud", icon: "☁️", color: "#F59E0B", highlight: "Multi-Region VPC" },
    { name: "OpenAI", category: "AI", icon: "🧠", color: "#8CEE3F", highlight: "GPT-4o & Frontier" },
    { name: "LangChain", category: "AI", icon: "🦜", color: "#2DD4BF", highlight: "Agentic Loops" },
    { name: "Docker", category: "Cloud", icon: "🐳", color: "#0EA5E9", highlight: "Containerization" },
    { name: "Redis", category: "Database", icon: "🔴", color: "#F43F5E", highlight: "In-Memory Cache" },
    { name: "Vector DBs", category: "AI", icon: "📐", color: "#8CEE3F", highlight: "Qdrant & Pinecone" },
    { name: "Kubernetes", category: "Cloud", icon: "☸️", color: "#38BDF8", highlight: "Squad Orchestration" },
  ];

  const row1 = technologies.slice(0, 8);
  const row2 = technologies.slice(8);

  return (
    <section
      id="technologies"
      className="relative w-full py-16 sm:py-20 bg-transparent border-y border-[rgba(45,212,191,0.12)] overflow-hidden select-none scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F4FBF8] tracking-tight">
          Built With the{" "}
          <span className="bg-gradient-to-r from-[#8CEE3F] via-[#2DD4BF] to-[#0EA5E9] bg-clip-text text-transparent">
            Right Technology.
          </span>
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-[#A6BBB9] max-w-2xl mx-auto">
          We leverage industry-standard, battle-tested modern frameworks and cloud platforms to guarantee high performance, security, and effortless scalability.
        </p>
      </motion.div>

      {/* Infinite Horizontal Marquee 1 (Leftward) */}
      <div className="relative w-full overflow-hidden mb-4 group">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#030A0D] via-[#030A0D]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#030A0D] via-[#030A0D]/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-4 sm:space-x-6 group-hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#06151A]/85 backdrop-blur-xl border border-[rgba(45,212,191,0.18)] hover:border-[rgba(140,238,63,0.4)] shadow-lg shadow-black/40 transition-all flex-shrink-0 cursor-default"
            >
              <span className="text-base font-mono font-bold">{tech.icon}</span>
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#F4FBF8] block leading-tight">
                  {tech.name}
                </span>
                <span className="text-[10px] text-[#2DD4BF] font-mono">
                  {tech.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Horizontal Marquee 2 (Rightward) */}
      <div className="relative w-full overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#030A0D] via-[#030A0D]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#030A0D] via-[#030A0D]/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-reverse space-x-4 sm:space-x-6 group-hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#06151A]/85 backdrop-blur-xl border border-[rgba(45,212,191,0.18)] hover:border-[rgba(14,165,233,0.4)] shadow-lg shadow-black/40 transition-all flex-shrink-0 cursor-default"
            >
              <span className="text-base font-mono font-bold">{tech.icon}</span>
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#F4FBF8] block leading-tight">
                  {tech.name}
                </span>
                <span className="text-[10px] text-[#0EA5E9] font-mono">
                  {tech.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation Styles inline */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
