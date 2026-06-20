"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HOW_IT_WORKS_STEPS, CHANNEL_COLORS } from "@/lib/constants";

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper theme="light" id="how-it-works">
      <div className="text-center mb-16">
        <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-ink">
          From Click to Closed Deal, in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-signal to-[#FFB347]">
            Five Automatic Steps
          </span>
        </h2>
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto">
        {/* Vertical pulse line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-porcelain-dark hidden md:block">
          <motion.div
            className="w-full bg-gradient-to-b from-amber-signal via-whatsapp to-email"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        <div className="space-y-8 md:space-y-12">
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const color = CHANNEL_COLORS[step.channel] || "#FF8A3D";
            return (
              <motion.div
                key={step.number}
                className="relative flex gap-6 md:gap-8 items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Step Number */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                  style={{
                    backgroundColor: `${color}15`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <span
                    className="font-clash text-xl font-bold"
                    style={{ color }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="font-clash text-xl sm:text-2xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-ink/70 font-satoshi leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
