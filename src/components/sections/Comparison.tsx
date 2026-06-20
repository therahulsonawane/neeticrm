"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { COMPARISON_DATA, CHANNEL_COLORS } from "@/lib/constants";

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" fill={`${color}15`} stroke={color} strokeWidth="1" />
      <path d="M5.5 9L7.8 11.3L12.5 6.7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" fill="#EF444415" stroke="#EF4444" strokeWidth="1" />
      <path d="M6 6L12 12M12 6L6 12" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CellContent({
  value,
  note,
  isNeetiCRM,
}: {
  value: string;
  note?: string;
  isNeetiCRM: boolean;
}) {
  if (value === "check") {
    return (
      <span className="inline-flex items-center gap-1.5">
        <CheckIcon color={isNeetiCRM ? "#25D366" : "#8A97A6"} />
        {note && (
          <span className="text-xs font-jetbrains text-whatsapp">{note}</span>
        )}
      </span>
    );
  }
  if (value === "cross") {
    return <CrossIcon />;
  }
  return (
    <span
      className={`text-sm font-satoshi ${
        isNeetiCRM ? "text-porcelain font-medium" : "text-slate-custom"
      }`}
    >
      {value}
      {note && (
        <span className="text-xs text-whatsapp ml-1 font-jetbrains">
          {note}
        </span>
      )}
    </span>
  );
}

export function Comparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper theme="dark" id="comparison">
      <div className="text-center mb-16">
        <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-porcelain">
          Why &ldquo;Just Use a CRM&rdquo;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-signal to-voice">
            Stops Working Once You&apos;re Running Ads
          </span>
        </h2>
      </div>

      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto overflow-x-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <table className="w-full border-collapse" role="table">
          <thead>
            <tr>
              <th className="text-left py-4 px-4 font-clash text-sm font-semibold text-slate-custom uppercase tracking-wider border-b border-white/10">
                Capability
              </th>
              <th className="text-center py-4 px-4 font-clash text-sm font-semibold text-slate-custom uppercase tracking-wider border-b border-white/10">
                Traditional CRM
              </th>
              <th className="text-center py-4 px-4 font-clash text-sm font-semibold text-amber-signal uppercase tracking-wider border-b border-amber-signal/30">
                NeetiCRM
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_DATA.map((row, i) => (
              <motion.tr
                key={row.capability}
                className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <td className="py-3.5 px-4 text-sm font-satoshi text-porcelain/90">
                  {row.capability}
                </td>
                <td className="py-3.5 px-4 text-center">
                  <CellContent
                    value={row.traditional}
                    isNeetiCRM={false}
                  />
                </td>
                <td className="py-3.5 px-4 text-center bg-amber-signal/[0.03]">
                  <CellContent
                    value={row.neeticrm}
                    note={"neeticrmNote" in row ? (row as { neeticrmNote?: string }).neeticrmNote : undefined}
                    isNeetiCRM={true}
                  />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </SectionWrapper>
  );
}
