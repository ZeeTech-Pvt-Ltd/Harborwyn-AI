import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

interface Stat {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  note?: string;
}

const STATS: Stat[] = [
  { value: 92.7, decimals: 1, suffix: "%", label: "Signal Accuracy", note: "2019 to 2026 backtests" },
  { value: 128, suffix: "K+", label: "Active Traders" },
  { value: 40, suffix: "+", label: "Markets Covered" },
  { value: 2.4, decimals: 1, prefix: "$", suffix: "B", label: "Volume Analyzed Daily" },
];

export default function TrustBar() {
  return (
    <section aria-label="Harborwyn AI by the numbers" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="relative text-center lg:border-l lg:border-white/[0.06] lg:first:border-l-0"
              >
                <p className="font-mono text-3xl font-bold tabular-nums text-ink md:text-4xl">
                  <CountUp
                    value={s.value}
                    decimals={s.decimals ?? 0}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix ?? ""}
                  />
                </p>
                <p className="mt-2 text-sm text-mist">{s.label}</p>
                {s.note && (
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-mist/50">
                    {s.note}
                  </p>
                )}
                {i > 0 && (
                  <span
                    className="absolute -left-3 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-white/[0.06] lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
