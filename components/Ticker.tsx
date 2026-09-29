import { TICKERS } from "@/data/markets";
import { cn } from "@/lib/cn";
import { formatPct, formatPrice } from "@/lib/format";

/** Market ticker tape. The list repeats so the loop never shows a seam. */
export default function Ticker() {
  const doubled = [...TICKERS, ...TICKERS];
  return (
    <section
      aria-label="Live market prices"
      className="relative border-y border-white/[0.06] bg-abyss-900/70 py-3.5"
    >
      <div className="ticker-mask overflow-hidden">
        <div className="ticker-track flex w-max items-center">
          {doubled.map((t, i) => (
            <div
              key={`${t.symbol}-${i}`}
              aria-hidden={i >= TICKERS.length ? true : undefined}
              className="mr-10 flex items-center gap-2.5 whitespace-nowrap"
            >
              <span className="font-mono text-xs font-bold text-ink">{t.symbol}</span>
              <span className="font-mono text-xs tabular-nums text-mist">
                {formatPrice(t.price)}
              </span>
              <span
                className={cn(
                  "flex items-center gap-1 font-mono text-xs tabular-nums",
                  t.changePct >= 0 ? "text-teal" : "text-coral"
                )}
              >
                <span aria-hidden="true">{t.changePct >= 0 ? "▲" : "▼"}</span>
                {formatPct(Math.abs(t.changePct))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
