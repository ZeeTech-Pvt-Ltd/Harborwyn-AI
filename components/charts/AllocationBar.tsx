import { CASH_RESERVE, HOLDINGS } from "@/data/markets";
import { compactNumber } from "@/lib/format";

/**
 * Portfolio allocation, horizontal stacked bar with 2px surface gaps between
 * segments. The unfilled remainder of the track is the cash reserve.
 * Segment colors are the validated dark categorical steps (fixed order).
 */
export default function AllocationBar() {
  const deployed = HOLDINGS.reduce((sum, h) => sum + h.allocation, 0);

  return (
    <div>
      <div
        className="flex h-9 w-full gap-0.5 overflow-hidden rounded-full"
        role="img"
        aria-label="Portfolio allocation: 88% deployed across Bitcoin, Ethereum, Solana and Avalanche, 12% cash reserve"
      >
        {HOLDINGS.map((h) => (
          <div
            key={h.symbol}
            title={`${h.asset} · ${h.allocation}%`}
            style={{ width: `${h.allocation}%`, background: h.color }}
            className="h-full first:rounded-l-full"
          />
        ))}
      </div>

      <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-mist">
        {deployed}% deployed · {CASH_RESERVE.allocation}% cash reserve
      </p>

      <ul className="mt-5 space-y-3">
        {HOLDINGS.map((h) => (
          <li key={h.symbol} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-[3px]"
                style={{ background: h.color }}
              />
              <span className="text-ink">{h.asset}</span>
              <span className="font-mono text-[11px] text-mist">{h.symbol}</span>
            </span>
            <span className="flex items-center gap-4 font-mono tabular-nums">
              <span className="text-mist">{h.allocation}%</span>
              <span className="text-ink">{compactNumber(h.value)}</span>
            </span>
          </li>
        ))}
        <li className="flex items-center justify-between border-t border-white/5 pt-3 text-sm">
          <span className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-[3px] border border-dashed border-mist/60"
            />
            <span className="text-ink">Cash &amp; stable reserve</span>
          </span>
          <span className="flex items-center gap-4 font-mono tabular-nums">
            <span className="text-mist">{CASH_RESERVE.allocation}%</span>
            <span className="text-ink">{compactNumber(CASH_RESERVE.value)}</span>
          </span>
        </li>
      </ul>
    </div>
  );
}
