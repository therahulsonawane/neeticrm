"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  theme?: "dark" | "light";
  id?: string;
  className?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

export function SectionWrapper({
  children,
  theme = "dark",
  id,
  className = "",
  fullWidth = false,
  noPadding = false,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bgClass = theme === "dark" ? "bg-ink" : "bg-porcelain";
  const textClass = theme === "dark" ? "text-porcelain" : "text-ink";

  return (
    <section
      ref={ref}
      id={id}
      className={`relative ${bgClass} ${textClass} ${
        noPadding ? "" : "py-20 md:py-28 lg:py-32"
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={
          fullWidth
            ? "w-full"
            : "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
        }
      >
        {children}
      </motion.div>
    </section>
  );
}
