"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  return (
    <SectionWrapper theme="dark" id="pricing">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-porcelain">
          One Subscription.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-signal to-[#FFB347]">
            No Tool Stack to Manage.
          </span>
        </h2>

        <p className="mt-6 text-lg text-slate-custom font-satoshi leading-relaxed">
          No separate bill for WhatsApp, email marketing, SMS, lead tracking, AI calling,
          or conversion tracking. One platform, one price.
        </p>

        {/* Feature inclusions */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
          {[
            "WhatsApp Automation",
            "Email Marketing",
            "SMS Campaigns",
            "AI Calling",
            "Lead Tracking",
            "Conversion API",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-ink-lighter border border-white/5"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7L5.5 9.5L11 4"
                  stroke="#25D366"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs font-satoshi text-porcelain/80">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="large" href="#" id="pricing-cta-trial">
            Start Free Trial
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <Button variant="secondary" size="large" href="#" id="pricing-cta-demo">
            Book Demo
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
