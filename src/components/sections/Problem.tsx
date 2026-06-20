"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";

const PAIN_POINTS = [
  "Sales calls back hours later, if at all",
  "A WhatsApp reply gets buried under the next ten chats",
  'The "we\'ll follow up" email never gets sent',
  "After one unanswered attempt, follow-up just... stops",
  "Marketing can't tell which campaign actually produced revenue",
];

export function Problem() {
  return (
    <SectionWrapper theme="light" id="problem">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          You Don&apos;t Have a Lead Problem.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-danger to-[#FF8A3D]">
            You Have a Follow-Up Problem.
          </span>
        </h2>

        <p className="mt-6 text-lg text-ink/70 font-satoshi leading-relaxed">
          You pay for the ad. The lead arrives. Then it sits.
        </p>

        <ul className="mt-8 space-y-4">
          {PAIN_POINTS.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-base sm:text-lg text-ink/80 font-satoshi"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="flex-shrink-0 mt-1"
              >
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="#EF4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              {point}
            </li>
          ))}
        </ul>

        <p className="mt-10 text-lg sm:text-xl font-satoshi font-medium text-ink/90 border-l-4 border-amber-signal pl-4">
          The ad spend isn&apos;t the leak. The four hours of silence after the click is.
        </p>
      </div>
    </SectionWrapper>
  );
}
