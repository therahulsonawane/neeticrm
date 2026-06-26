"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "1-5",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Reset form states on open
      setStatus("idle");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        teamSize: "1-5",
      });
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap inside modal
  useEffect(() => {
    if (!isOpen) return;
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex="0"]'
    ) as NodeListOf<HTMLElement>;

    if (focusableElements && focusableElements.length > 0) {
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== "Tab") return;

        // Force focus inside the modal if it wanders out
        if (modalRef.current && !modalRef.current.contains(document.activeElement)) {
          firstElement.focus();
          e.preventDefault();
          return;
        }

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      };

      window.addEventListener("keydown", handleTab);
      // Autofocus first input
      setTimeout(() => {
        firstElement.focus();
      }, 100);

      return () => window.removeEventListener("keydown", handleTab);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      return;
    }

    setStatus("submitting");

    // Simulate API call to CRM
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-ink-light p-6 sm:p-8 shadow-2xl z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Background Accent Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-amber-signal/10 blur-[50px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-voice/10 blur-[50px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-custom hover:text-porcelain transition-colors p-1.5 rounded-full hover:bg-white/5 cursor-pointer"
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {status !== "success" ? (
              <>
                {/* Header */}
                <div className="mb-6">
                  <h3 id="modal-title" className="font-clash text-2xl sm:text-3xl font-bold text-porcelain leading-tight">
                    Book a Live <span className="text-amber-signal">Demo</span>
                  </h3>
                  <p className="mt-2 text-sm text-slate-custom font-satoshi">
                    Qualify your lead flow and see how NeetiCRM will scale your sales.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-custom mb-1.5 font-satoshi">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-ink/50 border border-white/10 rounded-xl text-porcelain text-sm placeholder:text-slate-custom/50 focus:border-amber-signal focus:ring-1 focus:ring-amber-signal outline-none transition-all font-satoshi"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-custom mb-1.5 font-satoshi">
                      Company Name
                    </label>
                    <input
                      required
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 bg-ink/50 border border-white/10 rounded-xl text-porcelain text-sm placeholder:text-slate-custom/50 focus:border-amber-signal focus:ring-1 focus:ring-amber-signal outline-none transition-all font-satoshi"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-custom mb-1.5 font-satoshi">
                      Work Email
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 bg-ink/50 border border-white/10 rounded-xl text-porcelain text-sm placeholder:text-slate-custom/50 focus:border-amber-signal focus:ring-1 focus:ring-amber-signal outline-none transition-all font-satoshi"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-custom mb-1.5 font-satoshi">
                      Phone Number (For Demo Call)
                    </label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-ink/50 border border-white/10 rounded-xl text-porcelain text-sm placeholder:text-slate-custom/50 focus:border-amber-signal focus:ring-1 focus:ring-amber-signal outline-none transition-all font-satoshi"
                    />
                  </div>

                  {/* Team Size */}
                  <div>
                    <label htmlFor="teamSize" className="block text-xs font-semibold uppercase tracking-wider text-slate-custom mb-1.5 font-satoshi">
                      Sales Team Size
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-ink-light border border-white/10 rounded-xl text-porcelain text-sm focus:border-amber-signal focus:ring-1 focus:ring-amber-signal outline-none transition-all font-satoshi"
                    >
                      <option value="1-5">1-5 sales reps</option>
                      <option value="6-20">6-20 sales reps</option>
                      <option value="21-50">21-50 sales reps</option>
                      <option value="50+">50+ sales reps</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      disabled={status === "submitting"}
                      type="submit"
                      className="w-full inline-flex items-center justify-center font-satoshi font-semibold rounded-full px-6 py-3.5 text-base gap-2 bg-amber-signal text-ink hover:bg-amber-signal-hover shadow-lg hover:shadow-amber-signal-glow transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Scheduling AI Demo Call...
                        </>
                      ) : (
                        "Book Live Demo"
                      )}
                    </button>
                  </div>
                  {status === "error" && (
                    <p className="text-xs text-danger text-center mt-2 font-satoshi">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                {/* Success Checkmark Circle */}
                <div className="mx-auto w-16 h-16 rounded-full bg-whatsapp/10 border border-whatsapp flex items-center justify-center mb-6">
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#25D366"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </motion.svg>
                </div>

                <h3 className="font-clash text-2xl font-bold text-porcelain mb-4">
                  Demo Call Scheduled!
                </h3>
                <p className="text-sm text-slate-custom leading-relaxed max-w-sm mx-auto font-satoshi mb-6">
                  Thank you, <span className="text-porcelain font-semibold">{formData.name}</span>! NeetiCRM has registered your details.
                </p>

                <div className="bg-ink-light/50 border border-white/5 rounded-xl p-4 text-xs sm:text-sm text-slate-custom font-satoshi text-left space-y-3 leading-relaxed mb-6">
                  <p>
                    📞 Our AI sales assistant, <span className="text-whatsapp font-semibold">Priya</span>, is dialing <span className="text-porcelain font-semibold">{formData.phone}</span> in approximately <span className="text-amber-signal font-semibold">2 minutes</span>.
                  </p>
                  <p>
                    She will qualify your requirements, explain how the WhatsApp and multi-channel pipeline fits your workspace, and unlock your dashboard.
                  </p>
                  <p className="italic text-slate-custom/80 text-[11px] sm:text-xs">
                    Please keep your phone active and nearby!
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center font-satoshi font-semibold rounded-full px-6 py-2.5 text-sm border border-porcelain/20 text-porcelain hover:border-amber-signal hover:text-amber-signal bg-transparent transition-all duration-300 cursor-pointer"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
