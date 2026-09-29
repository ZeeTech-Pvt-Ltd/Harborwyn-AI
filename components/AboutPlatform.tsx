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
];

/** Two-column "meet the platform" intro, the homepage's first content block. */
export default function AboutPlatform() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
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
                  analytics, backtesting and portfolio tracking in one place.
                  The engine watches 40+ markets around the clock and turns a
                  flood of data into a few setups worth your time.
                </p>
                <p>
                  Trust is earned, not claimed. So you connect with read-only
                  keys, your capital stays in your own custody, and every
                  signal comes with a reason in plain words.
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
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/20 bg-gold-400/10 text-teal"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4.5 w-4.5"
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
