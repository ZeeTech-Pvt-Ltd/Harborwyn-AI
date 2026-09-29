"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import CandlestickChart from "@/components/charts/CandlestickChart";
import AllocationBar from "@/components/charts/AllocationBar";
import RiskGauge from "@/components/charts/RiskGauge";
import { HOLDINGS, RISK_ROWS, RISK_SCORE, RISK_STATUS, SIGNAL_FEED } from "@/data/markets";
import { STATUS_COLORS, STATUS_LABELS } from "@/components/charts/RiskGauge";
import { cn } from "@/lib/cn";
import { compactNumber, formatPct, formatPrice } from "@/lib/format";

const TABS = [
  { id: "signals", label: "Signals" },
  { id: "portfolio", label: "Portfolio" },
  { id: "risk", label: "Risk" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function Showcase({ showHeading = true }: { showHeading?: boolean }) {
  const [tab, setTab] = useState<TabId>("signals");

  return (
    <section id="signals" className="relative overflow-hidden py-16 md:py-20">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {showHeading && (
          <SectionHeading
            index="02"
            eyebrow="Signals"
            title={
              <>
                One Platform,{" "}
                <em className="font-normal italic">
                  Three Superpowers
                </em>
              </>
            }
            description={
              <>
                Take a look around the command deck,{" "}
                
                  the same view Harborwyn traders open every morning
                
                .
              </>
            }
          />
        )}

        {/* tab bar */}
        <div className="mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Platform views"
            className="glass inline-flex rounded-full p-1.5"
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-300 sm:px-6",
                  tab === t.id ? "text-abyss-950" : "text-mist hover:text-ink"
                )}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="showcase-tab-pill"
                    className="bg-gold-400 absolute inset-0 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              role="tabpanel"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              {tab === "signals" && <SignalsPanel />}
              {tab === "portfolio" && <PortfolioPanel />}
              {tab === "risk" && <RiskPanel />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Panel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("grid gap-5", className)}>{children}</div>;
}

function SignalsPanel() {
  return (
    <Panel className="lg:grid-cols-[1.45fr_1fr]">
      <div className="glass rounded-3xl p-5 shadow-card md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
            BTC/USD · 4-hour · signal map
          </p>
          <div className="flex items-center gap-4 font-mono text-[10px] text-mist">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 rounded-[2px] border border-teal" />
              Up · hollow
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 rounded-[2px] bg-coral" />
              Down · filled
            </span>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-white/[0.05] bg-abyss-950/60 p-2">
          <CandlestickChart />
        </div>
      </div>

      <div className="glass rounded-3xl p-5 shadow-card md:p-6">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
            Signal feed
          </p>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-teal">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-teal" />
            LIVE
          </span>
        </div>

        <ul className="mt-4 space-y-3">
          {SIGNAL_FEED.map((s) => (
            <li
              key={s.pair}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider ring-1 ring-inset",
                      s.action === "BUY" && "bg-gold-400/10 text-gold-400 ring-gold-400/30",
                      s.action === "SELL" && "bg-coral/10 text-coral ring-coral/30",
                      s.action === "WAIT" && "bg-white/[0.04] text-mist ring-white/10"
                    )}
                  >
                    {s.action}
                  </span>
                  <span className="font-mono text-sm font-semibold text-ink">{s.pair}</span>
                </div>
                <span className="font-mono text-[10px] text-mist">{s.time}</span>
              </div>

              {s.action === "WAIT" ? (
                <p className="mt-3 text-xs text-mist">
                  There's no setup here, so the engine says stand down.{" "}
                  
                    That's a signal too.
                  
                </p>
              ) : (
                <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[11px]">
                  {[
                    ["ENTRY", formatPrice(s.entry, 0)],
                    ["TARGET", formatPrice(s.target, 0)],
                    ["STOP", formatPrice(s.stop, 0)],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-lg bg-abyss-950/60 px-2.5 py-2">
                      <p className="text-[9px] uppercase tracking-widest text-mist">{k}</p>
                      <p className="mt-0.5 tabular-nums text-ink">{v}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-3 flex items-center gap-2">
                <div className="h-1 flex-1 rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-gold-400"
                    style={{ width: `${s.confidence}%` }}
                  />
                </div>
                <span className="font-mono text-[10px] tabular-nums text-mist">
                  {s.confidence}% confidence
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}

function PortfolioPanel() {
  return (
    <Panel className="lg:grid-cols-[1fr_1.3fr]">
      <div className="glass rounded-3xl p-6 shadow-card">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
          Allocation
        </p>
        <div className="mt-5">
          <AllocationBar />
        </div>
      </div>

      <div className="glass rounded-3xl p-6 shadow-card">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
            Positions
          </p>
          <p className="font-mono text-[10px] text-teal">+23.4% MTD</p>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/[0.06] font-mono text-[10px] uppercase tracking-widest text-mist">
                <th scope="col" className="pb-3 pr-4 font-medium">Asset</th>
                <th scope="col" className="pb-3 pr-4 font-medium">24h</th>
                <th scope="col" className="pb-3 pr-4 font-medium">P/L</th>
                <th scope="col" className="pb-3 text-right font-medium">Value</th>
              </tr>
            </thead>
            <tbody className="font-mono tabular-nums">
              {HOLDINGS.map((h) => (
                <tr key={h.symbol} className="border-b border-white/[0.04] last:border-0">
                  <td className="py-3 pr-4">
                    <span className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-[3px]"
                        style={{ background: h.color }}
                      />
                      <span className="font-sans font-medium text-ink">{h.asset}</span>
                    </span>
                  </td>
                  <td
                    className={cn(
                      "py-3 pr-4 text-xs",
                      h.changePct >= 0 ? "text-teal" : "text-coral"
                    )}
                  >
                    {h.changePct >= 0 ? "▲" : "▼"} {formatPct(Math.abs(h.changePct))}
                  </td>
                  <td
                    className={cn(
                      "py-3 pr-4 text-xs",
                      h.pnl >= 0 ? "text-teal" : "text-coral"
                    )}
                  >
                    {h.pnl >= 0 ? "+" : ""}
                    {h.pnl}%
                  </td>
                  <td className="py-3 text-right text-xs text-ink">{compactNumber(h.value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 rounded-xl border border-white/[0.05] bg-abyss-950/60 p-3.5 text-xs leading-relaxed text-mist">
          <span>Harborwyn suggests:</span> you
          trim BTC by 4% at the next signal window to get back to your 40%
          target weight.
        </p>
      </div>
    </Panel>
  );
}

function RiskPanel() {
  const color = STATUS_COLORS[RISK_STATUS];
  return (
    <Panel className="lg:grid-cols-[1fr_1.3fr]">
      <div className="glass flex flex-col items-center rounded-3xl p-6 shadow-card">
        <p className="self-start font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
          Portfolio risk score
        </p>
        <RiskGauge className="mt-6" />
        <p className="mt-6 text-center text-xs leading-relaxed text-mist">
          Your shield is active. We trimmed exposure in two positions this week
          to{" "}
          
            keep you inside your comfort zone
          
          .
        </p>
      </div>

      <div className="glass rounded-3xl p-6 shadow-card">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
            Risk breakdown
          </p>
          <span
            className="rounded-full px-3 py-1 font-mono text-[10px] font-semibold tracking-wider ring-1 ring-inset"
            style={{ color, background: `${color}14`, borderColor: `${color}55` }}
          >
            {STATUS_LABELS[RISK_STATUS]} · {RISK_SCORE}/100
          </span>
        </div>
        <ul className="mt-6 space-y-5">
          {RISK_ROWS.map((r) => {
            const c = STATUS_COLORS[r.status];
            return (
              <li key={r.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-ink">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full"
                      style={{ background: c }}
                    />
                    {r.label}
                  </span>
                  <span className="font-mono text-xs tabular-nums text-mist">{r.score}/100</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${r.score}%`, background: c }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Panel>
  );
}
