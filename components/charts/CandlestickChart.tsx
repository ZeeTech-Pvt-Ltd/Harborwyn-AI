"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { CANDLES, CANDLE_SIGNALS } from "@/data/markets";

const W = 640;
const H = 250;
const PAD = { top: 16, right: 64, bottom: 20, left: 8 };

/**
 * BTC/USD 4h candles with annotated signals.
 * Polarity is double-encoded: up = hollow teal body, down = filled coral body.
 */
export default function CandlestickChart() {
  const { buyIndex, sellIndex, lastClose } = CANDLE_SIGNALS;

  const { min, max } = useMemo(() => {
    let lo = Infinity;
    let hi = -Infinity;
    for (const c of CANDLES) {
      lo = Math.min(lo, c.low);
      hi = Math.max(hi, c.high);
    }
    const pad = (hi - lo) * 0.09;
    return { min: lo - pad, max: hi + pad };
  }, []);

  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;
  const step = plotW / CANDLES.length;
  const bodyW = Math.max(step * 0.6, 4);
  const x = (i: number) => PAD.left + i * step + step / 2;
  const y = (v: number) => PAD.top + ((max - v) / (max - min)) * plotH;

  const ticks = [0.25, 0.5, 0.75, 1];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Bitcoin to US dollar 4-hour candlestick chart with an annotated buy signal and sell signal"
    >
      {/* gridlines + price ticks */}
      {ticks.map((f) => {
        const v = max - (max - min) * f;
        const gy = y(v);
        return (
          <g key={f}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={gy}
              y2={gy}
              stroke="rgba(151,166,204,0.10)"
              strokeWidth="1"
            />
            <text
              x={W - PAD.right + 8}
              y={gy + 3.5}
              className="fill-mist/70 font-mono text-[10px]"
            >
              ${(v / 1000).toFixed(1)}K
            </text>
          </g>
        );
      })}

      {/* candles */}
      {CANDLES.map((c, i) => {
        const up = c.close >= c.open;
        const color = up ? "#3FD8C1" : "#FF6B5E";
        const bodyTop = y(Math.max(c.open, c.close));
        const bodyH = Math.max(Math.abs(y(c.open) - y(c.close)), 1.5);
        const last = i === CANDLES.length - 1;
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.014, ease: "easeOut" }}
          >
            <line
              x1={x(i)}
              x2={x(i)}
              y1={y(c.high)}
              y2={y(c.low)}
              stroke={color}
              strokeWidth="1.4"
            />
            <rect
              x={x(i) - bodyW / 2}
              y={bodyTop}
              width={bodyW}
              height={bodyH}
              rx="1"
              fill={up ? "rgba(10,18,36,0.9)" : color}
              stroke={color}
              strokeWidth="1.4"
            />
            {last && (
              <rect
                x={x(i) - bodyW / 2 - 2.5}
                y={bodyTop - 2.5}
                width={bodyW + 5}
                height={bodyH + 5}
                rx="2.5"
                fill="none"
                stroke="rgba(240,184,75,0.7)"
                strokeWidth="1.2"
              />
            )}
          </motion.g>
        );
      })}

      {/* buy signal */}
      <SignalMarker
        idx={buyIndex}
        side="below"
        label="BUY"
        x={x}
        y={y}
      />
      {/* sell signal */}
      <SignalMarker
        idx={sellIndex}
        side="above"
        label="SELL"
        x={x}
        y={y}
      />

      {/* live close */}
      <g>
        <line
          x1={x(CANDLES.length - 1)}
          x2={W - PAD.right - 4}
          y1={y(lastClose)}
          y2={y(lastClose)}
          stroke="#F0B84B"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <circle cx={x(CANDLES.length - 1)} cy={y(lastClose)} r="3" fill="#F0B84B" />
        <rect
          x={W - PAD.right}
          y={y(lastClose) - 8}
          width={PAD.right - 2}
          height={16}
          rx="4"
          fill="#F0B84B"
        />
        <text
          x={W - PAD.right + (PAD.right - 2) / 2}
          y={y(lastClose) + 3.5}
          textAnchor="middle"
          className="fill-abyss-950 font-mono text-[9px] font-bold"
        >
          ${(lastClose / 1000).toFixed(1)}K
        </text>
      </g>
    </svg>
  );
}

function SignalMarker({
  idx,
  side,
  label,
  x,
  y,
}: {
  idx: number;
  side: "above" | "below";
  label: string;
  x: (i: number) => number;
  y: (v: number) => number;
}) {
  const c = CANDLES[idx];
  const anchor = side === "above" ? c.high : c.low;
  const dir = side === "above" ? -1 : 1;
  const mx = x(idx);
  const my = y(anchor);
  return (
    <motion.g
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: 0.9 }}
    >
      <line
        x1={mx}
        x2={mx}
        y1={my}
        y2={my + dir * 34}
        stroke="rgba(240,184,75,0.55)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx={mx} cy={my} r="3.5" fill="#F0B84B" />
      <rect
        x={mx - 20}
        y={my + dir * 34 - 8}
        width="40"
        height="16"
        rx="4"
        fill="#F0B84B"
      />
      <text
        x={mx}
        y={my + dir * 34 + 3.5}
        textAnchor="middle"
        className="fill-abyss-950 font-mono text-[9px] font-bold tracking-wider"
      >
        {label}
      </text>
    </motion.g>
  );
}
