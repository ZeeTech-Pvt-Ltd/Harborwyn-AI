import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Sparkline from "@/components/charts/Sparkline";
import RadarSweep from "@/components/charts/RadarSweep";
import { SPARK_SIGNALS } from "@/data/markets";
import { cn } from "@/lib/cn";

function FeatureCard({
  icon,
  title,
  copy,
  children,
  className,
  delay = 0,
}: {
  icon: ReactNode;
  title: string;
  copy: ReactNode;
  children?: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={cn("h-full", className)}>
      <article className="glass card-hover group relative h-full overflow-hidden rounded-2xl p-7">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-400/[0.06] opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/10 text-gold-400 transition-colors duration-300 group-hover:border-gold-400/40 group-hover:bg-gold-400/15">
          {icon}
        </div>
        <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-mist">{copy}</p>
        {children}
      </article>
    </Reveal>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const ICONS = {
  signal: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke} aria-hidden="true">
      <path d="M3 12 H6 L8.5 5.5 L11.5 18.5 L14 9.5 L16.5 14 L18 12 H21" />
    </svg>
  ),
  radar: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 12 L12 3.5" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
      <path d="M18.5 8.5 A8.5 8.5 0 0 1 15 18.8" strokeDasharray="2.5 2.5" />
    </svg>
  ),
  backtest: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke} aria-hidden="true">
      <path d="M3.5 12 H20.5" />
      <path d="M3.5 12 L8 7.5 M3.5 12 L8 16.5" />
      <path d="M12 5.5 L20.5 12 L12 18.5 Z" opacity="0.45" />
    </svg>
  ),
  sentiment: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke} aria-hidden="true">
      <path d="M4 5.5 H20 V16 H4 Z" />
      <path d="M7.5 9.5 H10 M13 9.5 H15.5" />
      <path d="M8.5 12.5 C9.5 13.8 11 13.8 12 12.5 C13 11.2 14.5 11.2 15.5 12.5" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke} aria-hidden="true">
      <path d="M13 3.5 L5.5 13.5 H11 L10 20.5 L18.5 10 H13 Z" />
    </svg>
  ),
  pie: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5 V12 L18.3 15.6" />
    </svg>
  ),
};

export default function Features({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="features" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {showHeading && (
          <SectionHeading
            index="01"
            eyebrow="Platform"
            title={
              <>
                Every Tool A Trader Needs,{" "}
                <em className="font-normal italic">
                  Guided By AI
                </em>
              </>
            }
          />
        )}

        {showHeading && (
          <Reveal delay={0.05}>
            <p className="mt-6 w-full text-center text-pretty text-sm leading-relaxed text-mist md:text-base">
              Every part of the deck answers the same question. What should you
              do next? The Signal Engine finds the setup, and the Risk Radar
              decides if it deserves your money. The Backtesting Lab proves the
              plan, then one-tap execution turns it into an order. Together
              they give you one calm workflow.
            </p>
          </Reveal>
        )}

        <div className={showHeading ? "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" : "grid gap-5 md:grid-cols-2 lg:grid-cols-3"}>
          {/* signal engine, spans two columns */}
          <FeatureCard
            delay={0}
            className="md:col-span-2"
            icon={ICONS.signal}
            title="AI Signal Engine"
            copy={
              <>
                The engine reads every candle, every tick and every shift in
                momentum. It scores 120+ indicators in real time, so you know
                when to enter and{" "}
                
                  when to stand down
                
                .
              </>
            }
          >
            <div className="mt-6 rounded-xl border border-white/[0.05] bg-abyss-950/60 p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                  ETH/USD · last 48h
                </span>
                <span className="rounded-full bg-gold-400/10 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider text-gold-400 ring-1 ring-inset ring-gold-400/30">
                  ▲ BUY · 87%
                </span>
              </div>
              <Sparkline data={SPARK_SIGNALS} className="mt-2 h-16 w-full" />
            </div>
          </FeatureCard>

          {/* risk radar */}
          <FeatureCard
            delay={0.08}
            icon={ICONS.radar}
            title="Risk Radar"
            copy={
              <>
                You get a 360° view of the storm. Volatility, drawdown,
                correlation and exposure are tracked live, so{" "}
                
                  no risk sneaks up on your fleet
                
                .
              </>
            }
          >
            <RadarSweep className="mt-6" />
          </FeatureCard>

          {/* backtesting */}
          <FeatureCard
            delay={0}
            icon={ICONS.backtest}
            title="Backtesting Lab"
            copy={
              <>
                You replay 10 years of market history and test any strategy{" "}
                
                  before you risk a single dollar
                
                .
              </>
            }
          >
            <div className="mt-6 grid grid-cols-3 gap-2.5 rounded-xl border border-white/[0.05] bg-abyss-950/60 p-4 text-center">
              {[
                ["214", "strategies tested"],
                ["10y", "of history"],
                ["4", "losers killed this week"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-mono text-lg font-bold tabular-nums text-gold-400">{v}</p>
                  <p className="mt-1 text-[11px] leading-snug text-mist">{l}</p>
                </div>
              ))}
            </div>
          </FeatureCard>

          {/* sentiment */}
          <FeatureCard
            delay={0.08}
            icon={ICONS.sentiment}
            title="Sentiment Stream"
            copy={
              <>
                You get X, Telegram and news flow read by LLMs, turned into{" "}
                
                  a live mood meter
                {" "}
                for any asset.
              </>
            }
          >
            <div className="mt-6 space-y-3 rounded-xl border border-white/[0.05] bg-abyss-950/60 p-4">
              {[
                ["Social", 72, true],
                ["News", 64, true],
                ["On-chain", 58, true],
              ].map(([label, value, up]) => (
                <div key={label as string}>
                  <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-mist">
                    <span>{label as string}</span>
                    <span className={up ? "text-teal" : "text-coral"}>{value as number}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal/60 to-teal"
                      style={{ width: `${value as number}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </FeatureCard>

          {/* execution */}
          <FeatureCard
            delay={0.16}
            icon={ICONS.bolt}
            title="One-Tap Execution"
            copy={
              <>
                Your signals flow straight to your exchange. You tap once, and{" "}
                
                  the stop and target are set for you
                
                .
              </>
            }
          >
            <div className="mt-6 rounded-xl border border-gold-400/20 bg-gold-400/[0.06] p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-ink">BTC/USD · BUY 0.082</span>
                <span className="flex items-center gap-1 font-mono text-[10px] text-teal">
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden="true">
                    <path d="M3 8.5 L6.5 12 L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  FILLED · 0.4s
                </span>
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-mist">
                Stop −2.3% · Target +5.7% · Auto-managed
              </p>
            </div>
          </FeatureCard>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
            >
              Explore the platform
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                <path d="M3 8 H13 M9.5 4.5 L13 8 L9.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
