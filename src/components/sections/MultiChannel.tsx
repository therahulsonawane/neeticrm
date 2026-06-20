"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MULTI_CHANNEL_FLOW, CHANNEL_COLORS } from "@/lib/constants";

export function MultiChannel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper theme="light" id="multi-channel">
      <div className="text-center mb-16">
        <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-ink">
          One Automation,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-whatsapp via-email to-sms">
            Every Channel
          </span>
        </h2>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto">
        {/* Desktop horizontal flow */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Connector line */}
          <svg className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-2 pointer-events-none">
            <motion.line
              x1="3%"
              y1="50%"
              x2="97%"
              y2="50%"
              stroke="url(#multiGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.5,
                ease: "easeInOut",
              }}
            />
            <defs>
              <linearGradient id="multiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={CHANNEL_COLORS.meta} />
                <stop offset="25%" stopColor={CHANNEL_COLORS.whatsapp} />
                <stop offset="50%" stopColor={CHANNEL_COLORS.email} />
                <stop offset="75%" stopColor={CHANNEL_COLORS.sms} />
                <stop offset="100%" stopColor="#FF8A3D" />
              </linearGradient>
            </defs>
          </svg>

          {MULTI_CHANNEL_FLOW.map((step, i) => {
            const color = CHANNEL_COLORS[step.channel] || "#FF8A3D";
            return (
              <motion.div
                key={step.label}
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : i * 0.1,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border mb-2"
                  style={{
                    backgroundColor: `${color}10`,
                    borderColor: `${color}30`,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
                <span className="font-jetbrains text-[10px] text-ink/70 whitespace-nowrap text-center max-w-[80px]">
                  {step.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile vertical flow */}
        <div className="md:hidden space-y-3">
          {MULTI_CHANNEL_FLOW.map((step, i) => {
            const color = CHANNEL_COLORS[step.channel] || "#FF8A3D";
            return (
              <motion.div
                key={step.label}
                className="flex items-center gap-3 p-3 rounded-lg bg-ink/5 border border-ink/10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
                <span className="font-jetbrains text-xs text-ink/70">
                  {step.label}
                </span>
                {i < MULTI_CHANNEL_FLOW.length - 1 && (
                  <span className="ml-auto text-ink/30 text-xs">↓</span>
                )}
              </motion.div>
            );
          })}
        </div>

        <p className="text-center mt-10 text-base text-ink/60 font-satoshi max-w-xl mx-auto">
          WhatsApp, email, SMS, calls, and CRM actions, combined in a single workflow —
          not five tools glued together with Zapier.
        </p>
      </div>
    </SectionWrapper>
  );
}
