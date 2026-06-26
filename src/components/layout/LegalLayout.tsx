"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";

// List of all legal documents for the left sidebar
const LEGAL_PAGES = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Acceptable Use Policy", href: "/acceptable-use-policy" },
  { name: "Security Policy", href: "/security" },
  { name: "Data Processing (DPA)", href: "/dpa" },
  { name: "Service Level Agreement (SLA)", href: "/sla" },
];

interface Section {
  id: string;
  label: string;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  lastUpdated,
  sections,
  children,
}: LegalLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Progress and Scroll-to-Top visibility
  useEffect(() => {
    const handleScroll = () => {
      // Progress calculation
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Back-to-top button
      setShowScrollTop(window.scrollY > 300);

      // Active section detection using intersection logic
      const scrollPosition = window.scrollY + 200; // Offset for header
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = section.id;
          }
        }
      }
      
      // If we are at the very bottom, highlight the last section
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        currentSection = sections[sections.length - 1]?.id || currentSection;
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial states
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Navigate to sections smoothly
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Header offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Styles Injection */}
      <style jsx global>{`
        @media print {
          header,
          footer,
          .no-print,
          .progress-bar-container,
          .back-to-top-btn {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
            font-family: serif !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
          }
          .print-content {
            width: 100% !important;
            color: black !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
          h1, h2, h3, h4 {
            color: black !important;
            page-break-after: avoid;
          }
          p, li {
            font-size: 11pt !important;
            line-height: 1.6 !important;
            color: #111 !important;
          }
          a {
            text-decoration: underline !important;
            color: black !important;
          }
          .glass {
            background: transparent !important;
            border: 1px solid #ddd !important;
            color: black !important;
            box-shadow: none !important;
          }
          .plain-english-box {
            border: 1.5px solid #666 !important;
            background: #f9f9f9 !important;
            color: black !important;
            page-break-inside: avoid;
          }
        }
      `}</style>

      <Navbar />

      {/* Reading Progress Bar */}
      <div className="progress-bar-container fixed top-[73px] left-0 w-full h-[3px] bg-white/5 z-50 no-print">
        <div
          className="h-full bg-amber-signal transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main id="main-content" className="flex-1 bg-ink pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* Breadcrumbs and Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 no-print">
            <nav className="text-sm font-satoshi" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-slate-custom">
                <li>
                  <a href="/" className="hover:text-porcelain transition-colors">
                    Home
                  </a>
                </li>
                <li className="after:content-['/'] after:ml-2"></li>
                <li>
                  <span className="text-slate-custom">Legal</span>
                </li>
                <li className="after:content-['/'] after:ml-2"></li>
                <li>
                  <span className="text-porcelain font-medium">{title}</span>
                </li>
              </ol>
            </nav>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 text-xs font-semibold text-porcelain bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition-all cursor-pointer shadow-sm"
              title="Print document"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
                <rect x="6" y="14" width="12" height="8" rx="1" />
              </svg>
              Print / Save PDF
            </button>
          </div>

          {/* Mobile Legal Selector Dropdown */}
          <div className="block lg:hidden mb-8 no-print">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between px-5 py-4 bg-ink-light border border-white/10 rounded-xl text-porcelain font-semibold text-left"
            >
              <span>{title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden bg-ink-light border-x border-b border-white/10 rounded-b-xl mt-[-4px] z-10 relative"
                >
                  <ul className="py-2">
                    {LEGAL_PAGES.map((page) => (
                      <li key={page.href}>
                        <a
                          href={page.href}
                          className={`block px-5 py-3 text-sm transition-colors ${
                            pathname === page.href
                              ? "bg-amber-signal/10 text-amber-signal font-semibold"
                              : "text-slate-custom hover:text-porcelain hover:bg-white/5"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {page.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Sidebar (Desktop Only) */}
            <aside className="hidden lg:block lg:col-span-3 no-print">
              <div className="sticky top-28 space-y-6">
                <div>
                  <h3 className="font-clash text-lg font-semibold tracking-tight text-porcelain mb-4">
                    Legal Agreements
                  </h3>
                  <nav className="space-y-1">
                    {LEGAL_PAGES.map((page) => (
                      <a
                        key={page.href}
                        href={page.href}
                        className={`group flex items-center px-4 py-2.5 rounded-lg text-sm transition-all duration-200 border-l-2 ${
                          pathname === page.href
                            ? "bg-amber-signal/5 border-amber-signal text-amber-signal font-semibold shadow-inner"
                            : "border-transparent text-slate-custom hover:text-porcelain hover:bg-white/5"
                        }`}
                      >
                        {page.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Middle Main Content */}
            <article className="col-span-1 lg:col-span-6 print-content">
              {/* Header Info */}
              <header className="mb-10 pb-6 border-b border-white/5">
                <h1 className="font-clash text-4xl sm:text-5xl font-bold tracking-tight text-porcelain mb-4">
                  {title}
                </h1>
                <p className="text-sm text-slate-custom font-mono">
                  Last Updated: {lastUpdated}
                </p>
              </header>

              {/* Dynamic Content */}
              <div className="prose prose-invert max-w-none text-slate-custom font-satoshi space-y-8 leading-relaxed">
                {children}
              </div>
            </article>

            {/* Right Sidebar (Desktop Only) - Table of Contents */}
            <aside className="hidden lg:block lg:col-span-3 no-print">
              {sections.length > 0 && (
                <div className="sticky top-28 bg-ink-light/30 border border-white/5 rounded-2xl p-6">
                  <h4 className="font-clash text-sm font-semibold tracking-wider text-porcelain uppercase mb-4">
                    On This Page
                  </h4>
                  <nav className="space-y-3">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => scrollToSection(e, section.id)}
                        className={`block text-xs transition-colors duration-200 font-satoshi leading-normal ${
                          activeSection === section.id
                            ? "text-amber-signal font-semibold"
                            : "text-slate-custom hover:text-porcelain"
                        }`}
                      >
                        {section.label}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      <Footer />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="back-to-top-btn fixed bottom-8 right-8 z-40 bg-amber-signal text-ink p-3.5 rounded-full shadow-lg cursor-pointer hover:bg-amber-signal-hover transition-colors no-print border border-amber-signal-hover"
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

// Reusable alert block component for summarising/highlighting legal clauses in plain English
interface PlainEnglishBoxProps {
  children: React.ReactNode;
}

export function PlainEnglishBox({ children }: PlainEnglishBoxProps) {
  return (
    <div className="plain-english-box glass border border-white/10 rounded-2xl p-6 my-6 relative overflow-hidden bg-ink-light/20 shadow-inner">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-signal" />
      <div className="flex gap-4">
        <div className="flex-shrink-0 text-amber-signal text-xl select-none" aria-hidden="true">
          💡
        </div>
        <div>
          <h5 className="font-clash font-semibold text-porcelain text-sm uppercase tracking-wider mb-2">
            In Plain English
          </h5>
          <div className="text-slate-custom text-sm leading-relaxed space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
