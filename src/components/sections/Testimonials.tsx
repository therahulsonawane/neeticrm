"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper theme="light" id="testimonials">
      <div className="text-center mb-16">
        <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-ink">
          What Our Customers Say
        </h2>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.blockquote
            key={testimonial.quote}
            className="relative p-6 sm:p-8 rounded-2xl bg-white border border-ink/5 shadow-sm hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Quote mark */}
            <span className="absolute -top-3 left-6 text-5xl font-clash text-amber-signal/20 leading-none">
              &ldquo;
            </span>

            <p className="relative z-10 text-base text-ink/80 font-satoshi italic leading-relaxed mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <footer className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-clash font-bold text-porcelain"
                style={{
                  background: `linear-gradient(135deg, #FF8A3D, #FFB347)`,
                }}
              >
                {testimonial.role[0]}
              </div>
              <div>
                <p className="text-sm font-satoshi font-semibold text-ink">
                  {testimonial.role}
                </p>
                <p className="text-xs text-ink/50 font-satoshi">
                  {testimonial.company}
                </p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </SectionWrapper>
  );
}
