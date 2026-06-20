"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  WHATSAPP_FLOW_NODES,
  EXAMPLE_FLOWS,
  CHANNEL_COLORS,
  FlowNodeData,
} from "@/lib/constants";

/* ── Phone Mockup ── */
function PhoneMockup({ activeNode }: { activeNode: FlowNodeData | null }) {
  const preview = activeNode?.phonePreview;

  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      {/* Phone frame */}
      <div className="relative rounded-[2rem] border-2 border-white/10 bg-ink-lighter overflow-hidden shadow-2xl">
        {/* Notch */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-20 h-5 rounded-full bg-ink/80 border border-white/5" />
        </div>

        {/* Status bar */}
        <div className="px-4 py-1 flex justify-between items-center text-[10px] font-jetbrains text-slate-custom">
          <span>9:41</span>
          <span>●●●</span>
        </div>

        {/* WhatsApp Header */}
        <div className="px-4 py-2 bg-whatsapp/10 border-b border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-whatsapp/20 flex items-center justify-center">
            <span className="text-xs">🤖</span>
          </div>
          <div>
            <p className="text-xs font-satoshi font-semibold text-porcelain">
              {preview?.sender || "NeetiCRM Bot"}
            </p>
            <p className="text-[10px] text-whatsapp font-jetbrains">online</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="px-3 py-4 min-h-[280px] flex flex-col justify-end gap-2">
          {preview?.messages ? (
            preview.messages.map((msg, i) => (
              <motion.div
                key={`${activeNode?.id}-${i}`}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.15 }}
                className={`max-w-[85%] px-3 py-2 rounded-xl text-xs font-satoshi leading-relaxed ${
                  msg.from === "bot"
                    ? "bg-ink-light text-porcelain self-start rounded-bl-sm"
                    : "bg-whatsapp/20 text-whatsapp self-end rounded-br-sm"
                }`}
              >
                {msg.text}
              </motion.div>
            ))
          ) : (
            <div className="text-center text-slate-custom text-xs font-satoshi py-8">
              <p className="opacity-50">Hover a node to see the preview</p>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="px-3 py-2 border-t border-white/5 flex items-center gap-2">
          <div className="flex-1 rounded-full bg-ink/50 px-3 py-1.5 text-[10px] text-slate-custom font-satoshi">
            Type a message...
          </div>
          <div className="w-7 h-7 rounded-full bg-whatsapp flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6L10 2L8 10L6 7L2 6Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Flow Canvas ── */
function FlowCanvas({
  onNodeHover,
  activeNodeId,
}: {
  onNodeHover: (node: FlowNodeData | null) => void;
  activeNodeId: string | null;
}) {
  const shouldReduceMotion = useReducedMotion();

  const nodeTypeColors: Record<string, string> = {
    trigger: CHANNEL_COLORS.meta,
    message: CHANNEL_COLORS.whatsapp,
    wait: "#8A97A6",
    condition: "#FFB347",
    action: CHANNEL_COLORS.sales,
  };

  const nodeTypeIcons: Record<string, string> = {
    trigger: "⚡",
    message: "💬",
    wait: "⏳",
    condition: "🔀",
    action: "👤",
  };

  return (
    <div className="relative w-full" style={{ paddingBottom: "110%" }}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Draw connector lines */}
        {WHATSAPP_FLOW_NODES.map((node) =>
          (node.children || []).map((childId) => {
            const child = WHATSAPP_FLOW_NODES.find((n) => n.id === childId);
            if (!child) return null;

            const isActive =
              activeNodeId === node.id || activeNodeId === child.id;
            const nodeColor =
              CHANNEL_COLORS[node.channel || ""] ||
              nodeTypeColors[node.type] ||
              "#8A97A6";

            return (
              <motion.line
                key={`${node.id}-${childId}`}
                x1={node.x}
                y1={node.y + 4}
                x2={child.x}
                y2={child.y}
                stroke={isActive ? nodeColor : "rgba(138,151,166,0.3)"}
                strokeWidth={isActive ? "0.6" : "0.3"}
                strokeDasharray={node.type === "condition" ? "2,1" : "none"}
                filter={isActive ? "url(#glow)" : "none"}
                animate={{
                  stroke: isActive ? nodeColor : "rgba(138,151,166,0.3)",
                }}
                transition={{ duration: 0.3 }}
              />
            );
          })
        )}

        {/* Yes / No labels for condition branches */}
        {WHATSAPP_FLOW_NODES.filter((n) => n.type === "condition").map((node) => {
          const children = node.children || [];
          return children.map((childId, ci) => {
            const child = WHATSAPP_FLOW_NODES.find((n) => n.id === childId);
            if (!child) return null;
            const midX = (node.x + child.x) / 2;
            const midY = (node.y + child.y) / 2;
            return (
              <text
                key={`label-${childId}`}
                x={midX + (ci === 0 ? -3 : 3)}
                y={midY}
                fill={ci === 0 ? "#25D366" : "#EF4444"}
                fontSize="2.2"
                fontFamily="JetBrains Mono, monospace"
                textAnchor="middle"
              >
                {ci === 0 ? "Yes" : "No"}
              </text>
            );
          });
        })}
      </svg>

      {/* Nodes */}
      {WHATSAPP_FLOW_NODES.map((node, i) => {
        const color =
          CHANNEL_COLORS[node.channel || ""] ||
          nodeTypeColors[node.type] ||
          "#8A97A6";
        const isActive = activeNodeId === node.id;

        return (
          <motion.div
            key={node.id}
            className="absolute z-10 cursor-pointer"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.4,
              delay: shouldReduceMotion ? 0 : i * 0.08,
            }}
            onMouseEnter={() => onNodeHover(node)}
            onMouseLeave={() => onNodeHover(null)}
          >
            <div
              className={`relative px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border transition-all duration-300 ${
                isActive
                  ? "border-white/30 scale-110"
                  : "border-white/10 hover:border-white/20"
              }`}
              style={{
                backgroundColor: isActive ? `${color}20` : "rgba(18,32,48,0.9)",
                boxShadow: isActive
                  ? `0 0 20px ${color}30, 0 0 40px ${color}15`
                  : `0 0 10px ${color}08`,
              }}
            >
              {/* Channel color indicator */}
              <div
                className="absolute -left-px top-1 bottom-1 w-0.5 rounded-full"
                style={{ backgroundColor: color }}
              />

              <div className="flex items-center gap-1.5">
                <span className="text-xs">{nodeTypeIcons[node.type]}</span>
                <span className="font-jetbrains text-[9px] sm:text-[10px] text-porcelain/90 whitespace-nowrap">
                  {node.label}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Example Flow Cards ── */
function ExampleFlowCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
      {EXAMPLE_FLOWS.map((flow) => {
        const color = CHANNEL_COLORS[flow.channel] || "#FF8A3D";
        return (
          <div
            key={flow.title}
            className="rounded-xl p-5 bg-ink-lighter border border-white/5 hover:border-white/15 transition-all duration-300"
            style={{ borderTop: `2px solid ${color}` }}
          >
            <h4 className="font-clash text-base font-semibold text-porcelain mb-3">
              {flow.title}
            </h4>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {flow.steps.map((step, i) => (
                <span key={step} className="inline-flex items-center gap-1">
                  <span className="font-jetbrains text-[10px] text-slate-custom bg-ink/50 px-2 py-0.5 rounded">
                    {step}
                  </span>
                  {i < flow.steps.length - 1 && (
                    <span className="text-slate-custom/40 text-xs">→</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-custom font-satoshi">
              {flow.industries}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/* ── Reply-Based Branching ── */
function ReplyBranching() {
  const branches = [
    {
      reply: '"Interested"',
      action: "moves to Qualified, sales notified, call scheduled",
      color: CHANNEL_COLORS.whatsapp,
    },
    {
      reply: '"Price?"',
      action: "pricing PDF sent, follow-up task created",
      color: CHANNEL_COLORS.email,
    },
    {
      reply: '"Call me"',
      action: "agent assigned, urgent callback task created",
      color: CHANNEL_COLORS.voice,
    },
  ];

  return (
    <div className="mt-12">
      <h3 className="font-clash text-xl font-semibold text-porcelain mb-6">
        Reply-Based Branching, in Plain Terms
      </h3>
      <div className="space-y-3">
        {branches.map((b) => (
          <div
            key={b.reply}
            className="flex items-start gap-3 p-3 rounded-lg bg-ink/50 border border-white/5"
          >
            <span
              className="inline-block w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
              style={{ backgroundColor: b.color }}
            />
            <p className="text-sm font-satoshi text-slate-custom">
              Customer replies{" "}
              <span className="text-porcelain font-semibold">{b.reply}</span> →{" "}
              {b.action}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Section ── */
export function WhatsAppFlowBuilder() {
  const [activeNode, setActiveNode] = useState<FlowNodeData | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper theme="dark" id="whatsapp-flow-builder" className="!py-24 md:!py-32">
      <div ref={ref}>
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-whatsapp/20 bg-whatsapp/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-whatsapp" />
            <span className="text-sm font-satoshi text-whatsapp font-medium">
              Signature Feature
            </span>
          </span>

          <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-porcelain">
            Most CRMs Give You a WhatsApp Inbox.{" "}
            <span className="text-whatsapp">
              NeetiCRM Gives You a WhatsApp Flow Builder.
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-custom font-satoshi max-w-2xl mx-auto">
            A drag-and-drop canvas for building automated customer journeys — with
            branching logic that reacts to what the customer actually says, not just a
            fixed message sequence.
          </p>
        </div>

        {/* Comparison */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-16">
          <div className="flex-1 p-4 rounded-xl bg-ink-lighter border border-white/5">
            <p className="text-xs font-jetbrains text-slate-custom mb-2 uppercase tracking-wider">
              CRM WhatsApp Inbox
            </p>
            <p className="text-sm text-porcelain/70 font-satoshi">
              Stores the chat, sends a template.
            </p>
          </div>
          <div className="flex-1 p-4 rounded-xl border border-whatsapp/20 bg-whatsapp/5">
            <p className="text-xs font-jetbrains text-whatsapp mb-2 uppercase tracking-wider">
              NeetiCRM WhatsApp Flow
            </p>
            <p className="text-sm text-porcelain font-satoshi">
              Sends the message, waits, checks if they replied, branches the journey, and
              assigns a human only when it&apos;s time.
            </p>
          </div>
        </div>

        {/* Interactive Canvas + Phone Mockup */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Flow Canvas */}
          <div className="lg:col-span-3 relative rounded-2xl border border-white/5 bg-ink-lighter/50 p-4 sm:p-6">
            <div className="absolute top-3 left-4 flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-danger/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-signal/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-whatsapp/60" />
            </div>
            <div className="mt-4">
              <FlowCanvas
                onNodeHover={setActiveNode}
                activeNodeId={activeNode?.id || null}
              />
            </div>
          </div>

          {/* Phone Preview */}
          <div className="lg:col-span-2 sticky top-32">
            <PhoneMockup activeNode={activeNode} />
          </div>
        </motion.div>

        {/* Example Flows */}
        <ExampleFlowCards />

        {/* Reply Branching */}
        <ReplyBranching />
      </div>
    </SectionWrapper>
  );
}
