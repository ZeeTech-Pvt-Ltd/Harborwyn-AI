"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/format";

const RATES = [
  { label: "Conservative", value: 1.5 },
  { label: "Balanced", value: 3 },
  { label: "Aggressive", value: 5 },
];

/** Illustrative 12-month projection calculator. */
export default function EarningsCalculator() {
  const [deposit, setDeposit] = useState(10000);
  const [rate, setRate] = useState(3);

  const months = 12;
  const balance = deposit * Math.pow(1 + rate / 100, months);
  const monthlyEarnings = (balance - deposit) / months;

  return (
    <section className="relative py-16 md:py-20">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow flex items-center justify-center gap-3 text-gold-400">
              <span className="h-px w-8 bg-gold-400/40" />
              <span>Earnings calculator</span>
              <span className="h-px w-8 bg-gold-400/40" />
            </p>
            <h2 className="mt-5 text-balance font-display text-3xl font-medium tracking-tight text-ink md:text-5xl">
              See Your{" "}
              <em className="font-normal italic">
                Estimated Potential
              </em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass mt-12 grid gap-10 rounded-3xl p-8 shadow-card md:p-10 lg:grid-cols-2">
            {/* controls */}
            <div>
              <label htmlFor="deposit" className="text-sm font-medium text-ink">
                Deposit amount
              </label>
              <div className="mt-3 flex items-center gap-4">
                <span className="font-mono text-sm text-gold-400">$</span>
                <input
                  id="deposit"
                  type="range"
                  min={500}
                  max={250000}
                  step={500}
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-gold-400"
                />
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[11px] tabular-nums text-mist">
                <span>$500</span>
                <span className="rounded-lg border border-gold-400/30 bg-gold-400/10 px-3 py-1.5 text-sm font-bold text-gold-400">
                  {deposit.toLocaleString("en-US")}
                </span>
                <span>$250,000</span>
              </div>

              <p className="mt-8 text-sm font-medium text-ink">Strategy style</p>
              <div className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-2" role="group" aria-label="Strategy style">
                {RATES.map((r) => (
                  <button
                    key={r.label}
                    type="button"
                    aria-pressed={rate === r.value}
                    onClick={() => setRate(r.value)}
                    className={cn(
                      "rounded-xl border px-2 py-2.5 text-xs font-medium transition-colors duration-300 sm:px-3",
                      rate === r.value
                        ? "border-gold-400/50 bg-gold-400/15 text-gold-300"
                        : "border-white/10 bg-white/[0.03] text-mist hover:border-white/20 hover:text-ink"
                    )}
                  >
                    {r.label}
                    <span className="mt-0.5 block font-mono text-[10px] text-mist">
                      {r.value}%/mo
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* results */}
            <div className="flex flex-col justify-center gap-4">
              <div className="rounded-2xl border border-white/[0.06] bg-abyss-950/60 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
                  Potential future balance
                </p>
                <p className="mt-2 font-mono text-4xl font-bold tabular-nums text-ink">
                  {formatPrice(balance, 0)}
                </p>
                <p className="mt-1 text-xs text-mist">after 12 months</p>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-abyss-950/60 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
                  Estimated monthly earnings
                </p>
                <p className="mt-2 font-mono text-4xl font-bold tabular-nums text-teal">
                  {formatPrice(monthlyEarnings, 0)}
                </p>
                <p className="mt-1 text-xs text-mist">averaged across the year</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-center font-mono text-[10px] leading-relaxed tracking-wider text-mist/60">
            Illustrative projection based on a {rate}% monthly rate over 12
            months. Trading involves significant risk. Projections are not a
            guarantee of profit, and past performance does not predict future
            results.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 text-center">
            <Link
              href="/sign-up"
              className="bg-gold-400 rounded-full px-7 py-3.5 text-sm font-semibold text-abyss-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-105"
            >
              See this for yourself →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
