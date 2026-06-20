"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Solution() {
  return (
    <SectionWrapper theme="dark" id="solution">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-porcelain">
          NeetiCRM Closes the Gap Between{" "}
          <span className="text-amber-signal">&ldquo;Lead Arrives&rdquo;</span> and{" "}
          <span className="text-amber-signal">&ldquo;Lead Is Contacted&rdquo;</span>
        </h2>
        <p className="mt-6 text-lg text-slate-custom font-satoshi leading-relaxed">
          NeetiCRM captures, qualifies, follows up, and tracks every lead from the moment
          it lands — with no spreadsheet, no manual dial list, and no lead left to go cold.
        </p>
      </div>
    </SectionWrapper>
  );
}
