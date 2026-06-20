"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  href?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  onClick,
  className = "",
  id,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-satoshi font-semibold rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-signal";

  const sizeClasses =
    size === "large"
      ? "px-8 py-4 text-lg gap-2.5"
      : "px-6 py-3 text-base gap-2";

  const variantClasses =
    variant === "primary"
      ? "bg-amber-signal text-ink hover:bg-amber-signal-hover shadow-lg hover:shadow-amber-signal-glow"
      : "border-2 border-porcelain/20 text-porcelain hover:border-amber-signal hover:text-amber-signal bg-transparent";

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <motion.span
      className="flex items-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} id={id}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} id={id}>
      {content}
    </button>
  );
}
