import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SignUpForm from "@/components/SignUpForm";
import Sparkline from "@/components/charts/Sparkline";
import { SPARK_HERO, SPARK_SIGNALS, TICKERS } from "@/data/markets";
import { formatPct, formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  alternates: { canonical: "https://harborwynai.io/contact" },
  title: "Contact Harborwyn AI Support",
  description:
    "Questions about Harborwyn AI signals or your account? Email support@harborwynai.io or open your free account today.",
};

const SUPPORT_EMAIL = "support@harborwynai.io";

const DESK_STATS = [
  { value: "40+", label: "Markets monitored" },
  { value: "24/7", label: "Support desk" },
  { value: "<24h", label: "Average reply time" },
  { value: "128K+", label: "Traders served" },
];

/** Live markets panel, what the desk watches while you write. */
function MarketsPulse() {
  const rows = [
    { item: TICKERS[0], data: SPARK_SIGNALS.slice(0, 14), stroke: "#F0B84B" },
    { item: TICKERS[1], data: SPARK_SIGNALS.slice(2, 16), stroke: "#9B6BEA" },
    { item: TICKERS[2], data: SPARK_SIGNALS.slice(4, 18), stroke: "#3FD8C1" },
    { item: TICKERS[14], data: SPARK_HERO.slice(2, 15), stroke: "#F7CE7E" },
  ];

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-card md:p-7">
      <div
        className="absolute -top-12 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-gold-400/[0.07] blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
          Markets the desk watches
        </p>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-teal">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-teal" />
          LIVE
        </span>
      </div>

      <div className="relative mt-5 space-y-3">
        {rows.map(({ item, data, stroke }) => (
          <div
            key={item.symbol}
            className="flex items-center gap-4 rounded-2xl border border-white/[0.05] bg-abyss-950/50 px-4 py-3"
          >
            <div className="w-20 shrink-0">
              <p className="font-mono text-xs font-bold text-ink">{item.symbol}</p>
              <p className="truncate font-mono text-[9px] uppercase tracking-wider text-mist/60">
                {item.name}
              </p>
            </div>
            <Sparkline data={data} stroke={stroke} className="h-9 w-24 shrink-0" />
            <div className="ml-auto shrink-0 text-right">
              <p className="font-mono text-xs tabular-nums text-ink">
                {formatPrice(item.price)}
              </p>
              <p
                className={cn(
                  "font-mono text-[10px] tabular-nums",
                  item.changePct >= 0 ? "text-teal" : "text-coral"
                )}
              >
                {item.changePct >= 0 ? "▲" : "▼"} {formatPct(Math.abs(item.changePct))}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="relative mt-5 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-mist/60">
        The deck never sleeps, neither does the crew
      </p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden pb-16 pt-32 md:pt-40">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="beam" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div>
              <p className="eyebrow flex items-center gap-3 text-gold-400">
                <span className="h-px w-8 bg-gold-400/40" />
                <span>Contact us</span>
              </p>
              <h1 className="mt-5 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
                Signal The{" "}
                <em className="font-normal italic">
                  Crew
                </em>
                .
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-mist">
                Got a question about your account, or about signals, exchanges
                or risk? Our support desk is{" "}
                
                  open around the clock
                
                , across every market session.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="glass group flex items-center gap-4 rounded-2xl px-5 py-4 transition hover:border-gold-400/30"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/10 text-gold-400">
                    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 6 H20 V16 H4 Z M4 6 L12 12 L20 6" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                      Email the support desk
                    </span>
                    <span className="mt-0.5 block font-mono text-sm text-ink transition-colors group-hover:text-gold-300 md:text-base">
                      {SUPPORT_EMAIL}
                    </span>
                  </span>
                </a>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-mist/70">
                  {["Replies within one business day", "24/7 monitoring", "256-bit SSL encryption"].map((b) => (
                    <span key={b} className="flex items-center gap-2">
                      <svg viewBox="0 0 16 16" className="h-3 w-3 text-teal" fill="none" aria-hidden="true">
                        <path d="M2.5 8.5 L6 12 L13.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <MarketsPulse />
          </Reveal>
        </div>
      </section>

      {/* desk stats */}
      <section aria-label="Support desk in numbers" className="relative pb-4">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="glass grid grid-cols-2 gap-y-8 rounded-3xl px-6 py-8 md:grid-cols-4 md:px-10">
              {DESK_STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="relative text-center md:border-l md:border-white/[0.06] md:first:border-l-0"
                >
                  <p className="font-mono text-2xl font-bold tabular-nums text-gold-400 md:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-xs uppercase tracking-[0.15em] text-mist">{s.label}</p>
                  {i > 0 && (
                    <span
                      className="absolute -left-2 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-white/[0.06] md:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* sign-up form */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="glass mx-auto max-w-xl rounded-3xl p-7 shadow-card md:p-10">
              <SignUpForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
