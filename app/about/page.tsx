import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaStrip from "@/components/CtaStrip";
import CountUp from "@/components/CountUp";
import { LogoMark } from "@/components/Logo";
import { TIMELINE, VALUES } from "@/data/company";

export const metadata: Metadata = {
  alternates: { canonical: "https://harborwynai.io/about" },
  title: "Harborwyn AI Company Story",
  description:
    "Meet the crew behind the Harborwyn AI lighthouse. See why 128,000+ traders trust our signals. Start your free trial today.",
};

const VALUE_ICONS = {
  compass: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15 9 L13.5 13.5 L9 15 L10.5 10.5 Z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 L19 5.5 V11 C19 15.5 15.9 19.2 12 20.5 C8.1 19.2 5 15.5 5 11 V5.5 Z" />
      <path d="M8.8 11.5 L11 13.7 L15.4 9" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 12 C5 6.5 8.5 4.5 12 4.5 C15.5 4.5 19 6.5 21.5 12 C19 17.5 15.5 19.5 12 19.5 C8.5 19.5 5 17.5 2.5 12 Z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  ),
  anchor: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="5" r="2.3" />
      <path d="M12 7.3 V20.5 M5 12 H19 M8 8.5 C5.5 11 5.5 14 8 16.5 M16 8.5 C18.5 11 18.5 14 16 16.5" />
    </svg>
  ),
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            The Crew Behind{" "}
            <em className="font-normal italic">
              The Lighthouse
            </em>
          </>
        }
        description={
          <>
            Harborwyn AI started with one idea: you don&apos;t need more
            information. You need{" "}
            a way to trust it.
            That&apos;s the gap we build for.
          </>
        }
      />

      {/* story */}
      <section className="relative py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
                In 2021, We Watched Skilled Traders Sink On Bad Information.
              </h2>
              <div className="mt-5 space-y-4 text-pretty leading-relaxed text-mist">
                <p>
                  It wasn&apos;t bad instincts. It was{" "}
                  bad information. A
                  promising chart drowned by fifty loud opinions, a solid plan
                  dropped in a panic post, and a good strategy never proven
                  because proving it took a month of spreadsheets.
                </p>
                <p>
                  So a small crew of traders and machine-learning engineers
                  built the tool we wanted ourselves. It watches every market
                  around the clock, cuts the noise down to one clear call, and{" "}
                  
                    explains itself in plain English
                  . A lighthouse, not a black box.
                </p>
                <p>
                  Five years later, 128,000+ traders in 70 countries use
                  Harborwyn AI as their command deck. The engine got smarter
                  and the markets got wilder, but the mission never moved:{" "}
                  
                    help you trade with clarity
                  , keep your capital your own, and tell you the
                  truth about risk, even when it isn&apos;t convenient.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass relative overflow-hidden rounded-3xl p-8 text-center shadow-card">
              <div
                className="absolute left-1/2 top-0 h-56 w-72 -translate-x-1/2 rounded-full bg-gold-400/[0.08] blur-[80px]"
                aria-hidden="true"
              />
              <LogoMark className="relative mx-auto h-20 w-20" />
              <p className="relative mt-6 font-display text-2xl font-medium italic text-ink">
                “The lighthouse for modern traders.”
              </p>
              <p className="relative mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
                Our founding principle
              </p>
              <div className="relative mt-8 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-6">
                {[
                  { v: 5, suffix: "yrs", label: "At Sea" },
                  { v: 128, suffix: "K+", label: "Traders" },
                  { v: 40, suffix: "+", label: "Markets" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-mono text-2xl font-bold tabular-nums text-gold-400">
                      <CountUp value={s.v} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-xs text-mist">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* quick answers */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 md:px-8">
          {[
            {
              title: "New To Trading?",
              copy: "The AI-supported tools handle the heavy lifting while you stay in charge of every setting. The guides teach you the rest at your own pace.",
              href: "/guides",
              cta: "Start with the guides",
            },
            {
              title: "Questions About Your Funds?",
              copy: "We connect with read-only API keys and never hold your capital. You can withdraw from your own exchange whenever you like, and there's nothing to unlock.",
              href: "/faq",
              cta: "Read the FAQ",
            },
            {
              title: "Unsure What To Trade?",
              copy: "Let the engine scan 40+ markets, crypto, equities, forex and more. It flags the chances worth your attention.",
              href: "/platform",
              cta: "See the platform",
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <Link
                href={card.href}
                className="glass card-hover group flex h-full flex-col rounded-2xl p-7"
              >
                <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-gold-300">
                  {card.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-mist">
                  {card.copy}
                </p>
                <span className="mt-5 flex items-center gap-2 text-sm font-medium text-gold-400">
                  {card.cta}
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" aria-hidden="true">
                    <path d="M3 8 H13 M9.5 4.5 L13 8 L9.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold-400">
              <span className="h-px w-8 bg-gold-400/40" />
              <span>What we stand for</span>
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
              Four Values, Kept Since Day One
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <article className="glass card-hover h-full rounded-2xl p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/10 text-gold-400">
                    {VALUE_ICONS[v.icon]}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist">{v.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold-400">
              <span className="h-px w-8 bg-gold-400/40" />
              <span>The voyage so far</span>
            </p>
          </Reveal>
          <div className="relative mt-12">
            <div
              className="absolute bottom-4 left-[19px] top-2 w-px bg-gradient-to-b from-gold-400/50 via-white/10 to-transparent"
              aria-hidden="true"
            />
            <ol className="space-y-10">
              {TIMELINE.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.06}>
                  <li className="relative pl-14">
                    <span
                      className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-abyss-900 font-mono text-[10px] font-bold text-gold-400"
                      aria-hidden="true"
                    >
                      {m.year.slice(2)}
                    </span>
                    <h3 className="text-lg font-semibold text-ink">
                      {m.year}, {m.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">{m.copy}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
