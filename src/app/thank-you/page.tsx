"use client";

import React, { use } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default function ThankYouPage({ searchParams }: PageProps) {
  const resolvedSearchParams = use(searchParams);
  const rawName = resolvedSearchParams.name;
  const rawPhone = resolvedSearchParams.phone;

  const name = typeof rawName === "string" ? rawName : "there";
  const phone = typeof rawPhone === "string" ? rawPhone : "your phone number";

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 relative overflow-hidden bg-ink pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-signal/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-voice/5 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Animated Success Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 rounded-full bg-whatsapp/10 border border-whatsapp flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(37,211,102,0.15)]"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </motion.div>

            {/* Header Content */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-porcelain"
            >
              Welcome to the Fast Lane,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-signal to-[#FFB347]">
                {name}!
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-custom max-w-xl font-satoshi"
            >
              Your demo is booked. Let&apos;s show you how NeetiCRM converts leads in real-time before they go cold.
            </motion.p>

            {/* Interactive Timeline Tracker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full mt-12 bg-ink-light/40 border border-white/10 rounded-2xl p-6 sm:p-8 text-left backdrop-blur-md shadow-xl"
            >
              <h3 className="font-clash text-lg font-semibold text-porcelain mb-6 flex items-center gap-2">
                <span>⚡</span> Demo Call Progress
              </h3>

              <div className="relative border-l-2 border-white/10 ml-3 pl-8 space-y-8">
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-whatsapp border border-whatsapp flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0B1620" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-clash text-sm font-semibold text-porcelain">Demo Registered Successfully</h4>
                    <p className="text-xs text-slate-custom mt-1 font-satoshi">We have logged your sales team context into the queue.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-amber-signal/20 border border-amber-signal flex items-center justify-center animate-pulse">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-signal" />
                  </div>
                  <div>
                    <h4 className="font-clash text-sm font-semibold text-amber-signal">Preparing AI Agent & Routing</h4>
                    <p className="text-xs text-slate-custom mt-1 font-satoshi">Our conversational AI assistant is customizing the demo call for you.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-ink border-2 border-white/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  <div>
                    <h4 className="font-clash text-sm font-semibold text-slate-custom/80">Incoming Live Call</h4>
                    <p className="text-xs text-slate-custom/60 mt-1 font-satoshi">
                      Our AI assistant will ring you at <span className="text-porcelain font-semibold">{phone}</span> in approximately <strong>2 minutes</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Improvised Guidelines Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full mt-6 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl p-6 sm:p-8 text-left space-y-4"
            >
              <h3 className="font-clash text-base font-semibold text-porcelain">💡 What to expect during the call:</h3>
              <ul className="space-y-3.5 text-sm text-slate-custom font-satoshi">
                <li className="flex items-start gap-3">
                  <span className="text-amber-signal text-base">🗣️</span>
                  <span><strong>Speak naturally:</strong> Our AI is powered by advanced conversational technology. Talk just like you would with a human.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-signal text-base">🚀</span>
                  <span><strong>See the speed:</strong> Notice how instantly the call arrives. This is the exact speed we bring to your lead follow-up.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-signal text-base">🔑</span>
                  <span><strong>Unlock dashboard:</strong> Immediately after the call, we will send your personalized workspace credentials via SMS & WhatsApp.</span>
                </li>
              </ul>
              <div className="pt-2 text-xs italic text-slate-custom/60 border-t border-white/5">
                🔔 Please keep your device active. If you miss the call, our AI will try calling again in 5 minutes.
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row items-center gap-4"
            >
              <Button variant="primary" href="/">
                Go back to home page
              </Button>
              <Button variant="secondary" href="/#faq">
                Read FAQ
              </Button>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
