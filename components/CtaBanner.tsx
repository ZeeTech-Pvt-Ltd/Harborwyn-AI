import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CtaBanner() {
  return (
    <section id="cta" className="relative overflow-hidden py-16 md:py-20">
      {/* lantern atmosphere */}
      <div
        className="absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.07] blur-[140px]"
        aria-hidden="true"
      />
      <div className="beam" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center shadow-card md:px-16 md:py-20">
            <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />

            <div className="relative">
              <p className="eyebrow text-gold-400">Ready when you are</p>
              <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-6xl">
                Find Your{" "}
                <em className="font-normal italic">
                  Harbor
                </em>
                .
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-mist md:text-lg">
                Join 128,000+ traders navigating with Harborwyn AI. Your first
                fourteen days come with{" "}
                
                  full Captain access
                
                , no credit card and no fine print. So come see why traders call
                it the lighthouse for the modern market.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/sign-up"
                  className="bg-gold-400 rounded-full px-7 py-3.5 text-sm font-semibold text-abyss-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Create your free account →
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-ink transition hover:border-gold-400/30"
                >
                  Contact the crew
                </Link>
              </div>

              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-mist/60">
                14-day trial · No credit card · Cancel anytime
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
