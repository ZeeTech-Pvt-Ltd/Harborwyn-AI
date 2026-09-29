import { RISK_SCORE, RISK_STATUS } from "@/data/markets";
import { cn } from "@/lib/cn";

/** Fixed status palette (never themed), the skill's good/warning/serious/critical steps. */
export const STATUS_COLORS = {
  good: "#0ca30c",
  warning: "#fab219",
  serious: "#ec835a",
  critical: "#d03b3b",
} as const;

export const STATUS_LABELS = {
  good: "CALM",
  warning: "ELEVATED",
  serious: "STORMY",
  critical: "EXTREME",
} as const;

const R = 78;
const ARC_LEN = Math.PI * R; // semicircle length

/** Portfolio risk score, meter arc + icon-and-label status, never color alone. */
export default function RiskGauge({ className }: { className?: string }) {
  const color = STATUS_COLORS[RISK_STATUS];
  const filled = (ARC_LEN * RISK_SCORE) / 100;

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative w-full max-w-[260px]">
        <svg viewBox="0 0 200 116" className="w-full" role="img" aria-label={`Portfolio risk score ${RISK_SCORE} out of 100, status ${STATUS_LABELS[RISK_STATUS]}`}>
          <path
            d="M22,100 A78,78 0 0 1 178,100"
            fill="none"
            stroke="rgba(151,166,204,0.14)"
            strokeWidth="13"
            strokeLinecap="round"
          />
          <path
            d="M22,100 A78,78 0 0 1 178,100"
            fill="none"
            stroke={color}
            strokeWidth="13"
            strokeLinecap="round"
            strokeDasharray={`${filled} ${ARC_LEN}`}
          />
          {/* threshold ticks */}
          {[25, 50, 75].map((t) => {
            const angle = (Math.PI * t) / 100;
            const tx = 100 - Math.cos(angle) * (R + 13);
            const ty = 100 - Math.sin(angle) * (R + 13);
            const ix = 100 - Math.cos(angle) * (R + 6);
            const iy = 100 - Math.sin(angle) * (R + 6);
            return (
              <line
                key={t}
                x1={ix}
                y1={iy}
                x2={tx}
                y2={ty}
                stroke="rgba(151,166,204,0.35)"
                strokeWidth="1.5"
              />
            );
          })}
        </svg>
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center">
          <span className="font-mono text-4xl font-bold tabular-nums text-ink">
            {RISK_SCORE}
          </span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-mist">
            / 100
          </span>
        </div>
      </div>

      <p className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold tracking-wider text-ink">
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
          <path
            d="M8 1.6 L13.6 3.4 V7.2 C13.6 10.6 11.3 13.5 8 14.4 C4.7 13.5 2.4 10.6 2.4 7.2 V3.4 Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M5.2 8 L7.2 10 L10.8 5.6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span aria-hidden="true" className={cn("h-2 w-2 rounded-full animate-pulse-soft")} style={{ background: color }} />
        {STATUS_LABELS[RISK_STATUS]}
      </p>
    </div>
  );
}
