import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const MARKETS = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    copy: (
      <>
        The original digital asset. It anchors most portfolios, and it's{" "}
        
          the market our engine knows best
        
        .
      </>
    ),
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    copy: (
      <>
        You track smart contracts and DeFi through price, gas fees and{" "}
        market mood.
      </>
    ),
  },
  {
    symbol: "SOL",
    name: "Solana",
    copy: (
      <>
        You get signals tuned to its fast moves and{" "}
        heavy momentum.
      </>
    ),
  },
  {
    symbol: "EQUITIES",
    name: "Equities",
    copy: (
      <>
        
          The names you trust most
        
        , from big tech to broad market ETFs.
      </>
    ),
  },
  {
    symbol: "FOREX",
    name: "Forex Pairs",
    copy: (
      <>
        You see major and cross pairs read through{" "}
        
          order flow and macro momentum
        
        .
      </>
    ),
  },
  {
    symbol: "COMMODITIES",
    name: "Commodities & Metals",
    copy: (
      <>
        Gold, silver and energy,{" "}
        the classic hedges,
        watched right alongside everything else.
      </>
    ),
  },
];

/** "Global Markets, One Account", market coverage grid. */
export default function Markets({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {showHeading && (
          <SectionHeading
            index="05"
            eyebrow="Markets"
            title={
              <>
                Global Markets,{" "}
                <em className="font-normal italic">
                  One Account
                </em>
              </>
            }
            description={
              <>
                You trade the coins traders trust most, plus equities, forex and
                commodities. All of it sits on{" "}
                
                  one Harborwyn dashboard
                
                , watched by the same engine.
              </>
            }
          />
        )}

        <div className={showHeading ? "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"}>
          {MARKETS.map((m, i) => (
            <Reveal key={m.symbol} delay={(i % 3) * 0.08}>
              <div className="glass card-hover h-full rounded-2xl p-7">
                <span className="inline-block rounded-full border border-gold-400/25 bg-gold-400/10 px-3.5 py-1.5 font-mono text-[11px] font-bold tracking-[0.15em] text-gold-400">
                  {m.symbol}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{m.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-8 text-center text-sm text-mist">
            That's 40+ markets in total, and counting. Crypto, equities, forex, commodities
            and precious metals, all covered around the clock, through bull
            runs and bear markets alike. New markets join the watchlist as they
            prove themselves truly worthy of your time and attention. Every one of
            them is watched by the same engine, so no market gets treated like
            an afterthought. You can start with one market and grow from there.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 text-center">
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
            >
              See the full platform
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
