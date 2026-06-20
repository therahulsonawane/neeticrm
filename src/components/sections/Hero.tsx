"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HERO_FLOW_NODES, CHANNEL_COLORS, PROOF_ITEMS } from "@/lib/constants";

function HeroFlowDiagram() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full mt-12 lg:mt-16">
      {/* Desktop: horizontal flow */}
      <div className="hidden md:flex items-center justify-center gap-0 relative px-4">
        {/* SVG connector line behind nodes */}
        <svg
          className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-4 pointer-events-none"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="8%"
            y1="50%"
            x2="92%"
            y2="50%"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 2,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={CHANNEL_COLORS.meta} />
              <stop offset="16%" stopColor={CHANNEL_COLORS.voice} />
              <stop offset="33%" stopColor={CHANNEL_COLORS.whatsapp} />
              <stop offset="50%" stopColor={CHANNEL_COLORS.sms} />
              <stop offset="66%" stopColor={CHANNEL_COLORS.email} />
              <stop offset="83%" stopColor="#FF8A3D" />
              <stop offset="100%" stopColor="#FF8A3D" />
            </linearGradient>
          </defs>
        </svg>

        {HERO_FLOW_NODES.map((node, i) => {
          const color = CHANNEL_COLORS[node.channel] || "#FF8A3D";
          return (
            <motion.div
              key={node.id}
              className="relative flex flex-col items-center z-10"
              style={{ flex: 1 }}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.3 + i * 0.15,
                ease: "easeOut",
              }}
            >
              {/* Node */}
              <div
                className="relative px-3 py-2.5 lg:px-4 lg:py-3 rounded-xl bg-ink-lighter border border-white/10 group hover:border-white/25 transition-all duration-300"
                style={{
                  boxShadow: `0 0 20px ${color}15, inset 0 1px 0 rgba(255,255,255,0.05)`,
                }}
              >
                {/* Channel dot */}
                <div
                  className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-ink-lighter"
                  style={{ backgroundColor: color }}
                />
                <span className="font-jetbrains text-[10px] lg:text-xs text-porcelain/90 whitespace-nowrap">
                  {node.label}
                </span>
              </div>

              {/* Arrow connector (except last) */}
              {i < HERO_FLOW_NODES.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: vertical flow */}
      <div className="flex md:hidden flex-col items-center gap-2 relative">
        {/* Vertical connector */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
          <motion.div
            className="w-full h-full origin-top"
            style={{
              background:
                "linear-gradient(to bottom, #1877F2, #FF5C7A, #25D366, #B26EFF, #5B6EF5, #FF8A3D, #FF8A3D)",
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>

        {HERO_FLOW_NODES.map((node, i) => {
          const color = CHANNEL_COLORS[node.channel] || "#FF8A3D";
          return (
            <motion.div
              key={node.id}
              className="relative z-10 px-4 py-2 rounded-lg bg-ink-lighter border border-white/10"
              style={{ boxShadow: `0 0 15px ${color}15` }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
                delay: shouldReduceMotion ? 0 : 0.2 + i * 0.1,
              }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: color }}
              />
              <span className="font-jetbrains text-xs text-porcelain/90">
                {node.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative bg-ink min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, #FF8A3D 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "radial-gradient(circle, #5B6EF5 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-[120px]"
          style={{ background: "radial-gradient(circle, #25D366 0%, transparent 70%)" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(246,245,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(246,245,241,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-32 pb-20 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-signal/20 bg-amber-signal/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-amber-signal animate-pulse" />
            <span className="text-sm font-satoshi text-amber-signal font-medium">
              Lead Conversion Platform
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-porcelain"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: 0.1,
            }}
          >
            Turn Every Lead Into a Sales Opportunity{" "}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-signal to-[#FFB347]">
                — Automatically
              </span>
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-custom leading-relaxed max-w-3xl mx-auto font-satoshi"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: 0.2,
            }}
          >
            NeetiCRM is a lead conversion platform that captures leads from Meta Ads,
            WhatsApp, and your website — then calls, qualifies, and follows up with them
            across WhatsApp, SMS, and email before your competitor finishes typing a reply.
          </motion.p>

          {/* Supporting line */}
          <motion.p
            className="mt-4 text-sm sm:text-base text-slate-custom/70 italic font-satoshi"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: 0.3,
            }}
          >
            Most lead loss isn&apos;t a marketing problem. It&apos;s a 4-hour-old WhatsApp message nobody answered.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: 0.4,
            }}
          >
            <Button variant="primary" size="large" href="#pricing" id="hero-cta-trial">
              Start Free Trial
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <Button variant="secondary" size="large" href="#pricing" id="hero-cta-demo">
              Book Live Demo
            </Button>
          </motion.div>

          {/* Proof Strip */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: 0.5,
            }}
          >
            {PROOF_ITEMS.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm text-slate-custom font-satoshi"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M3 8L6.5 11.5L13 5"
                    stroke="#25D366"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Hero Flow Diagram */}
        <HeroFlowDiagram />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink to-transparent pointer-events-none" />
    </section>
  );
}
