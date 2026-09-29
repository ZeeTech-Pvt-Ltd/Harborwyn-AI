"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { PERFORMANCE } from "@/data/markets";

const W = 760;
const H = 320;
const PAD = { top: 26, right: 18, bottom: 36, left: 46 };

const SURFACE = "#0A1224";

const SERIES = [
  { key: "harborwyn", label: "Harborwyn AI", color: "#F0B84B", dash: undefined, area: true },
  { key: "btc", label: "Bitcoin buy & hold", color: "#7A86A8", dash: undefined, area: false },
  { key: "spy", label: "S&P 500", color: "#4E5A78", dash: "5 5", area: false },
] as const;

type SeriesKey = (typeof SERIES)[number]["key"];

const END_DELTAS: Record<SeriesKey, string> = {
  harborwyn: "+312%",
  btc: "+89%",
  spy: "+64%",
};

const END_LABEL_OFFSET: Record<SeriesKey, number> = {
  harborwyn: -14,
  btc: -14,
  spy: 22,
};

/**
 * Emphasis chart, Harborwyn in accent gold, benchmarks de-emphasized in gray.
 * Legend plus direct end labels; hover shows a crosshair with a value tooltip.
 */
export default function LineCompare() {
  const { labels, harborwyn, btc, spy } = PERFORMANCE;
  const [hover, setHover] = useState<number | null>(null);
  const ref = useRef<SVGSVGElement>(null);

  const data: Record<SeriesKey, number[]> = { harborwyn, btc, spy };
  const n = harborwyn.length;
  const min = 40;
  const max = Math.max(...harborwyn, ...btc, ...spy) + 30;
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;
  const x = (i: number) => PAD.left + (i / (n - 1)) * plotW;
  const y = (v: number) => PAD.top + ((max - v) / (max - min)) * plotH;
  const linePath = (vals: number[]) =>
    vals.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const areaPath = (vals: number[]) =>
    `${linePath(vals)} L${x(n - 1).toFixed(1)},${y(min)} L${x(0).toFixed(1)},${y(min)} Z`;

  const handleMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const idx = Math.round(((px - PAD.left) / plotW) * (n - 1));
    setHover(Math.max(0, Math.min(n - 1, idx)));
  };

  const tooltipLeft = hover !== null ? Math.min(88, Math.max(12, (x(hover) / W) * 100)) : 0;
  const tooltipTop = hover !== null ? (y(harborwyn[hover]) / H) * 100 : 0;

  return (
    <div className="relative">
      {/* legend */}
      <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-2">
        {SERIES.map((s) => (
          <span key={s.key} className="flex items-center gap-2 text-sm text-mist">
            <span
              aria-hidden="true"
              className="inline-block h-0.5 w-5 rounded-full"
              style={{
                background: s.dash
                  ? `repeating-linear-gradient(90deg, ${s.color} 0 6px, transparent 6px 10px)`
                  : s.color,
              }}
            />
            {s.label}
          </span>
        ))}
      </div>

      <svg
        ref={ref}
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        onMouseMove={handleMove}
        onMouseLeave={() => setHover(null)}
        role="img"
        aria-label="Growth of $100 invested: Harborwyn AI composite to 412, Bitcoin buy and hold to 189, S&P 500 to 164, from Q1 2022 to Q3 2026"
      >
        {/* gridlines + value ticks */}
        {[100, 200, 300, 400].map((tick) => (
          <g key={tick}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={y(tick)}
              y2={y(tick)}
              stroke="rgba(151,166,204,0.10)"
              strokeWidth="1"
            />
            <text
              x={PAD.left - 10}
              y={y(tick) + 3.5}
              textAnchor="end"
              className="fill-mist/60 font-mono text-[10px]"
            >
              {tick}
            </text>
          </g>
        ))}

        {/* x labels, every 3rd point avoids collisions */}
        {labels.map((label, i) =>
          i % 3 === 0 ? (
            <text
              key={label}
              x={x(i)}
              y={H - 12}
              textAnchor="middle"
              className="fill-mist/60 font-mono text-[10px]"
            >
              {label}
            </text>
          ) : null
        )}

        {/* benchmark series (de-emphasized) */}
        {SERIES.filter((s) => s.key !== "harborwyn").map((s) => (
          <motion.path
            key={s.key}
            d={linePath(data[s.key])}
            fill="none"
            stroke={s.color}
            strokeWidth={s.key === "btc" ? 2 : 1.6}
            strokeDasharray={s.dash}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.35 }}
          />
        ))}

        {/* harborwyn accent series */}
        <motion.path
          d={areaPath(harborwyn)}
          fill="rgba(240,184,75,0.09)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.path
          d={linePath(harborwyn)}
          fill="none"
          stroke="#F0B84B"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        {/* direct end labels */}
        {SERIES.map((s) => {
          const last = data[s.key][n - 1];
          return (
            <g key={s.key} className="opacity-90">
              <circle cx={x(n - 1)} cy={y(last)} r="3.2" fill={s.color} stroke={SURFACE} strokeWidth="1.6" />
              <text
                x={x(n - 1) + 10}
                y={y(last) + END_LABEL_OFFSET[s.key]}
                className="fill-ink font-mono text-[11px]"
              >
                {s.label} {END_DELTAS[s.key]}
              </text>
            </g>
          );
        })}

        {/* hover crosshair */}
        {hover !== null && (
          <g>
            <line
              x1={x(hover)}
              x2={x(hover)}
              y1={PAD.top}
              y2={H - PAD.bottom}
              stroke="rgba(234,240,251,0.25)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            {SERIES.map((s) => (
              <circle
                key={s.key}
                cx={x(hover)}
                cy={y(data[s.key][hover])}
                r="4.5"
                fill={s.color}
                stroke={SURFACE}
                strokeWidth="2"
              />
            ))}
          </g>
        )}
      </svg>

      {/* hover tooltip */}
      {hover !== null && (
        <div
          className="pointer-events-none absolute z-10 min-w-[168px] -translate-x-1/2 -translate-y-full rounded-xl border border-white/10 bg-abyss-800/95 p-3 shadow-card backdrop-blur"
          style={{ left: `${tooltipLeft}%`, top: `${tooltipTop}%` }}
        >
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-mist">
            {labels[hover]}
          </p>
          {SERIES.map((s) => (
            <div key={s.key} className="flex items-center justify-between gap-3 py-0.5">
              <span className="flex items-center gap-1.5 text-xs text-mist">
                <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                {s.label}
              </span>
              <span className="font-mono text-xs tabular-nums text-ink">
                {data[s.key][hover]}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
