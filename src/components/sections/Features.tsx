"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { FEATURES, CHANNEL_COLORS } from "@/lib/constants";

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper theme="dark" id="features">
      <div className="text-center mb-16">
        <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-porcelain">
          Everything a Follow-Up System Needs —{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-signal to-[#FFB347]">
            Nothing You Have to Stitch Together
          </span>
        </h2>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {FEATURES.map((feature, i) => {
          const color = CHANNEL_COLORS[feature.channel] || "#FF8A3D";
          return (
            <motion.div
              key={feature.title}
              className="group relative rounded-2xl p-6 sm:p-8 bg-ink-lighter border border-white/5 hover:border-white/15 transition-all duration-300"
              style={{
                borderLeft: `3px solid ${color}`,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                boxShadow: `0 0 40px ${color}10`,
                y: -4,
              }}
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[60px] pointer-events-none"
                style={{ backgroundColor: color }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <ChannelBadge channel={feature.channel} size="sm" />
                </div>

                <h3 className="font-clash text-xl font-semibold text-porcelain mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-custom leading-relaxed font-satoshi">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
