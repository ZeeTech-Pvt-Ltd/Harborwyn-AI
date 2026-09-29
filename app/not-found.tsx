import Link from "next/link";
import Reveal from "@/components/Reveal";
import RadarSweep from "@/components/charts/RadarSweep";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-36 text-center">
      {/* atmosphere */}
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/3 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.07] blur-[130px]"
        aria-hidden="true"
      />
      <div className="beam" aria-hidden="true" />

      <div className="relative mx-auto max-w-2xl">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-3 text-gold-400">
            <span className="h-px w-8 bg-gold-400/40" />
            <span>Error 404</span>
            <span className="h-px w-8 bg-gold-400/40" />
          </p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
            Lost At Sea.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-pretty text-lg leading-relaxed text-mist">
            The page you&apos;re charting toward doesn&apos;t exist. The tide
            may have moved it, but{" "}
            
              the beacon is still lit
            .
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-gold-400 rounded-full px-7 py-3.5 text-sm font-semibold text-abyss-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Back to harbor →
            </Link>
            <Link
              href="/platform"
              className="rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-ink transition hover:border-gold-400/30"
            >
              Explore the platform
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 max-w-xs">
            <RadarSweep className="h-44" />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-mist/50">
              Scanning for your page…
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
