import { CHANNEL_COLORS, CHANNEL_LABELS } from "@/lib/constants";

interface ChannelBadgeProps {
  channel: string;
  showLabel?: boolean;
  size?: "sm" | "md";
}

export function ChannelBadge({
  channel,
  showLabel = true,
  size = "md",
}: ChannelBadgeProps) {
  const color = CHANNEL_COLORS[channel] || "#FF8A3D";
  const label = CHANNEL_LABELS[channel] || channel;

  const dotSize = size === "sm" ? "w-2 h-2" : "w-2.5 h-2.5";
  const textSize = size === "sm" ? "text-xs" : "text-sm";

  return (
    <span className={`inline-flex items-center gap-1.5 ${textSize}`}>
      <span
        className={`${dotSize} rounded-full flex-shrink-0`}
        style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}40` }}
      />
      {showLabel && (
        <span className="font-jetbrains font-medium" style={{ color }}>
          {label}
        </span>
      )}
    </span>
  );
}
