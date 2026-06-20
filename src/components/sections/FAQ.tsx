"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FAQ_DATA } from "@/lib/constants";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-ink/10 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-toggle-${index}`}
      >
        <span className="font-satoshi text-base sm:text-lg font-medium text-ink group-hover:text-amber-signal transition-colors">
          {question}
        </span>
        <motion.span
          className="flex-shrink-0 mt-1 w-6 h-6 rounded-full border border-ink/10 flex items-center justify-center text-ink/60"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 3V11M3 7H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-sm sm:text-base text-ink/70 font-satoshi leading-relaxed max-w-2xl"
              id={`faq-answer-${index}`}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper theme="light" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-ink">
            Frequently Asked Questions
          </h2>
        </div>

        <div>
          {FAQ_DATA.map((item, i) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
