import Reveal from "@/components/Reveal";

const HIGHLIGHTS = [
  {
    title: "Signals That Explain Themselves",
    copy: (
      <>
        Every call comes with an entry, a stop, a target and a reason in plain
        words. Nothing is a black box.
      </>
    ),
    icon: <path d="M3 12 H6 L8.5 5.5 L11.5 18.5 L14 9.5 L16.5 14 L18 12 H21" />,
  },
  {
    title: "Risk You Can See",
    copy: (
      <>
        You watch volatility, drawdown, correlation and exposure live, so
        nothing catches your portfolio off guard.
      </>
    ),
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 12 L12 3.5" />
        <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: "Execution In One Tap",
    copy: (
      <>
        Your signals flow straight to your exchange. You confirm once, and the
        stop and target are set for you.
      </>
    ),
    icon: <path d="M13 3.5 L5.5 13.5 H11 L10 20.5 L18.5 10 H13 Z" />,
  },
  {
    title: "A Journal That Keeps Score",
    copy: (
      <>
        You get every decision logged and reviewed each day, so you learn from
        the market instead of just surviving it.
      </>
    ),
    icon: (
      <>
        <path d="M19 4.5 H7 A2 2 0 0 0 5 6.5 V17.5 A2 2 0 0 0 7 19.5 H19 Z" />
        <path d="M9 4.5 V19.5 M9 9 H15 M9 12.5 H15" />
      </>
    ),
  },
  {
    title: "Proof Before You Risk It",
    copy: (
      <>
        The Backtesting Lab replays ten years of market history. Your strategy
        proves itself on paper before it ever meets real money.
      </>
    ),
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5 V12 L15 14" />
      </>
    ),
  },
];

/** Long "meet the platform" narrative block, the intro to the homepage. */
export default function AboutPlatform() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow flex items-center gap-3 text-gold-400">
                <span className="h-px w-8 bg-gold-400/40" />
                <span>About the platform</span>
              </p>
              <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
                Meet The Harborwyn AI Platform
              </h2>
              <div className="mt-6 space-y-4 text-pretty text-[15px] leading-relaxed text-mist">
                <p>
                  Harborwyn AI is a trading intelligence platform for people who
                  like to trade with their eyes open. You get signals, risk
                  analytics, backtesting and portfolio tracking in one place.{" "}
                  
                    The tools do the heavy lifting
                  
                  , so you can focus on the decisions that matter.
                </p>
                <p>
                  The engine watches 40+ markets around the clock and turns a
                  flood of data into a few setups worth your time. When it finds
                  one,{" "}
                  
                    you get the why in plain words
                  
                  , clear for a beginner and sharp for a veteran.
                </p>
                <p>
                  Trust is earned, not claimed. So you connect with read-only
                  keys,{" "}
                  
                    your capital stays in your own custody
                  
                  , and we never promise what we can't deliver. What you see on
                  the dashboard is what you get, every day, every trade.
                </p>
                <p>
                  Behind the calm interface sits a decade of trading scars,
                  turned into engineering. The engine was trained on market
                  history across every regime.
                </p>
                <p>
                  It has seen bull runs, crashes and the long sideways
                  stretches that quietly break most strategies. It knows a fake
                  breakout when it sees one, because{" "}
                  
                    it has been wrong about thousands of them
                  
                  . That experience is priced into every signal you get.
                </p>
                <p>
                  Maybe you're new to trading, or maybe you're a veteran who
                  wants a sharper second opinion. Either way, Harborwyn meets
                  you where you are. Start on the free plan, follow a few
                  signals on paper, and{" "}
                  
                    let the platform prove itself to you
                  
                  , one explained trade at a time.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.title}
                  className="glass card-hover flex items-start gap-4 rounded-2xl p-6"
                >
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400/20 bg-gold-400/10 text-teal"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {h.icon}
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{h.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">{h.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
