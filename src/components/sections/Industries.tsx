"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { INDUSTRIES } from "@/lib/constants";

export function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper theme="light" id="industries">
      <div className="text-center mb-16">
        <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-ink">
          Built for Businesses Where{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-signal to-voice">
            Speed Decides the Deal
          </span>
        </h2>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
      >
        {INDUSTRIES.map((industry, i) => (
          <motion.div
            key={industry.name}
            className="group p-5 rounded-2xl bg-white border border-ink/5 hover:border-amber-signal/30 hover:shadow-lg transition-all duration-300 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <span className="text-3xl block mb-3">{industry.emoji}</span>
            <h3 className="font-clash text-base font-semibold text-ink mb-1">
              {industry.name}
            </h3>
            <p className="text-xs text-ink/50 font-satoshi">{industry.useCases}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
