"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const RESULTS = [
  {
    metric: "Faster response",
    detail: "Seconds instead of hours",
    icon: "⚡",
    color: "#FF8A3D",
  },
  {
    metric: "Higher-quality pipeline",
    detail: "Reps only work leads that are actually qualified",
    icon: "📈",
    color: "#25D366",
  },
  {
    metric: "More booked meetings, more closed deals",
    detail: "From the same ad spend",
    icon: "🎯",
    color: "#5B6EF5",
  },
  {
    metric: "Lower cost per acquisition",
    detail: "Conversion data flows back to Meta automatically, improving ad targeting over time",
    icon: "💰",
    color: "#B26EFF",
  },
];

export function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper theme="dark" id="results">
      <div className="text-center mb-16">
        <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-porcelain">
          What Changes When Follow-Up{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-signal to-[#FFB347]">
            Stops Being Manual
          </span>
        </h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {RESULTS.map((result, i) => (
          <motion.div
            key={result.metric}
            className="relative p-6 rounded-2xl bg-ink-lighter border border-white/5 hover:border-white/15 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div
              className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[50px] pointer-events-none"
              style={{ backgroundColor: result.color }}
            />

            <div className="relative z-10">
              <span className="text-3xl mb-4 block">{result.icon}</span>
              <h3
                className="font-clash text-xl font-bold mb-2"
                style={{ color: result.color }}
              >
                {result.metric}
              </h3>
              <p className="text-sm text-slate-custom font-satoshi leading-relaxed">
                {result.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
