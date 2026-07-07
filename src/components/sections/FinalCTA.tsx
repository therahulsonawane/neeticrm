"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { useDemoModal } from "@/context/DemoModalContext";


export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openDemoModal } = useDemoModal();


  return (
    <section
      ref={ref}
      id="final-cta"
      className="relative bg-ink py-24 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, #FF8A3D 0%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-porcelain">
          Every Minute a Lead Waits,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-signal to-voice">
            It Gets Colder
          </span>
        </h2>

        <p className="mt-6 text-lg text-slate-custom font-satoshi">
          Capture. Qualify. Nurture. Convert.{" "}
          <span className="text-amber-signal font-semibold">Automatically.</span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="large" href="https://app.neeticrm.com/" id="final-cta-trial">
            Start Free Trial
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <Button variant="secondary" size="large" onClick={openDemoModal} id="final-cta-demo">
            Book Demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
