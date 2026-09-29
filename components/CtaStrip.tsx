import Link from "next/link";
import Reveal from "@/components/Reveal";

/** Compact closing prompt for interior pages. */
export default function CtaStrip({
  title = "Ready To Find Your Harbor?",
  copy = "Join 128,000+ traders navigating with Harborwyn AI. Your first fourteen days come with full Captain access and no credit card.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-12 text-center md:px-12 md:py-14">
            <div
              className="absolute left-1/2 top-1/2 h-[300px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.08] blur-[100px]"
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-mist">{copy}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/sign-up"
                  className="bg-gold-400 rounded-full px-7 py-3.5 text-sm font-semibold text-abyss-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Start free trial →
                </Link>
                <Link
                  href="/platform"
                  className="rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-ink transition hover:border-gold-400/30"
                >
                  Explore the platform
                </Link>
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-mist/60">
                14-day trial · No credit card · Cancel anytime
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
