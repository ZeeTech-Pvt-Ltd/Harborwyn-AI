import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const STEPS = [
  {
    title: "Create Your Free Account",
    copy: (
      <>
        You sign up in under two minutes with your name, email and phone
        number. You don't need any trading experience, because{" "}
        
          we guide you from day one
        
        .
      </>
    ),
  },
  {
    title: "Connect Your Exchange",
    copy: (
      <>
        You link Binance, Coinbase, Kraken or a dozen other exchanges with
        read-only API keys.{" "}
        
          Your funds stay in your own custody
        
        , the whole time.
      </>
    ),
  },
  {
    title: "Trade With AI Support",
    copy: (
      <>
        You follow AI-generated signals with the entry, stop and target already
        attached. Or you switch on one-tap execution and{" "}
        
          let the engine handle the clicks
        
        .
      </>
    ),
  },
];

export default function HowItWorks({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="how-it-works" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {showHeading && (
          <SectionHeading
            index="03"
            eyebrow="How it works"
            title={
              <>
                From Sign Up To{" "}
                <em className="font-normal italic">
                  Your First Trade
                </em>{" "}
                In Three Steps
              </>
            }
            description={
              <>
                There's no onboarding maze here. Most traders get their first
                signals{" "}
                
                  within ten minutes of signing up
                
                .
              </>
            }
          />
        )}

        <div className={showHeading ? "relative mt-16" : "relative"}>
          {/* dashed connector */}
          <div
            aria-hidden="true"
            className="absolute left-[16.6%] right-[16.6%] top-7 hidden border-t border-dashed border-white/10 lg:block"
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="relative text-center lg:px-4">
                  <div className="glass relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full font-mono text-sm font-bold text-gold-400">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 text-center">
              <Link
                href="/sign-up"
                className="bg-gold-400 rounded-full px-7 py-3.5 text-sm font-semibold text-abyss-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-105"
              >
                Create your free account →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
