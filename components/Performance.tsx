import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import LineCompare from "@/components/charts/LineCompare";

const KPIS = [
  { value: "+312%", label: "Cumulative Return", detail: "Harborwyn Composite · 2019 to 2026", accent: true },
  { value: "−11.4%", label: "Max Drawdown", detail: "vs −74% for BTC hold", accent: false },
  { value: "68.4%", label: "Win Rate", detail: "Across 5,214 signals", accent: false },
  { value: "1.9", label: "Sharpe Ratio", detail: "Risk-adjusted, net of fees", accent: false },
];

export default function Performance() {
  return (
    <section id="performance" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="04"
          eyebrow="Performance"
          title={
            <>
              Quiet Confidence.{" "}
              <em className="font-normal italic">
                Loud Results.
              </em>
            </>
          }
        />

        <Reveal delay={0.05}>
          <p className="mt-6 w-full text-center text-pretty text-sm leading-relaxed text-mist md:text-base">
            You can see how the Harborwyn Composite strategy held up through
            bull runs, crashes and sideways chop.
          </p>
          <p className="mt-3 w-full text-center text-pretty text-sm leading-relaxed text-mist md:text-base">
            Performance is easy to promise and hard to prove. So we measure
            Harborwyn the way you would, against the markets themselves.
          </p>
          <p className="mt-3 w-full text-center text-pretty text-sm leading-relaxed text-mist md:text-base">
            The Composite strategy below is replayed across nine years of
            history. That takes in bull runs, crashes and long sideways chop,
            with fees, slippage and real drawdowns counted in.
          </p>
          <p className="mt-3 w-full text-center text-pretty text-sm leading-relaxed text-mist md:text-base">
            No cherry-picked windows. No survivorship tricks. Just the numbers
            as they happened.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KPIS.map((kpi, i) => (
            <Reveal key={kpi.label} delay={i * 0.07}>
              <div className="glass h-full rounded-2xl p-6">
                <p
                  className={
                    kpi.accent
                      ? "font-mono text-3xl font-bold tabular-nums text-gold-400"
                      : "font-mono text-3xl font-bold tabular-nums text-ink"
                  }
                >
                  {kpi.value}
                </p>
                <p className="mt-2 text-sm font-medium text-ink">{kpi.label}</p>
                <p className="mt-1 text-xs text-mist">{kpi.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-8">
          <div className="glass rounded-3xl p-5 shadow-card md:p-8">
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
                Growth of $100 · Q1 2022 → Q3 2026
              </p>
              <p className="font-mono text-[10px] text-mist">
                Hover the chart for exact values
              </p>
            </div>
            <LineCompare />
            <p className="mt-5 border-t border-white/[0.05] pt-4 font-mono text-[10px] leading-relaxed text-mist/70">
              Backtested performance of the Harborwyn Composite strategy, net of
              fees, 2019 to 2026. Trading involves substantial risk. Past
              performance does not guarantee future results.
            </p>
            <div className="mt-3 text-center">
              <Link
                href="/guides/backtesting-basics"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
              >
                Read the backtesting guide
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                  <path d="M3 8 H13 M9.5 4.5 L13 8 L9.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
