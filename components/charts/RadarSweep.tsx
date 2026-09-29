import { cn } from "@/lib/cn";

const BLIPS = [
  { label: "VOL 22", x: "24%", y: "30%", color: "#F0B84B" },
  { label: "DD 14", x: "70%", y: "24%", color: "#3FD8C1" },
  { label: "CORR 31", x: "64%", y: "68%", color: "#F0B84B" },
  { label: "EXP 18", x: "30%", y: "74%", color: "#3FD8C1" },
];

/** Decorative 360° risk sweep, concentric rings, blips, rotating beam. */
export default function RadarSweep({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-52 overflow-hidden rounded-xl border border-white/5 bg-abyss-950/70",
        className
      )}
      role="img"
      aria-label="Risk radar monitoring volatility, drawdown, correlation and exposure"
    >
      <p className="absolute left-3 top-2.5 z-10 font-mono text-[9px] uppercase tracking-[0.25em] text-mist">
        Risk radar · live
      </p>

      {/* concentric rings + crosshair */}
      <div className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
        <div className="absolute left-1/2 top-1/2 h-52 w-px -translate-x-1/2 -translate-y-1/2 bg-white/[0.06]" />
        <div className="absolute left-1/2 top-1/2 h-px w-52 -translate-x-1/2 -translate-y-1/2 bg-white/[0.06]" />
      </div>

      <div className="radar-sweep" />

      {/* blips */}
      {BLIPS.map((b) => (
        <div key={b.label} className="absolute" style={{ left: b.x, top: b.y }}>
          <span className="absolute -inset-2 rounded-full" style={{ background: `${b.color}33` }} />
          <span
            className="absolute inset-0 animate-ping-slow rounded-full"
            style={{ background: b.color }}
          />
          <span className="relative block h-1.5 w-1.5 rounded-full" style={{ background: b.color }} />
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[9px] tracking-wider text-mist">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
}
