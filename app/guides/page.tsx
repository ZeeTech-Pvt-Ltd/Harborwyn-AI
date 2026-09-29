import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaStrip from "@/components/CtaStrip";
import { GUIDES } from "@/data/guides";

export const metadata: Metadata = {
  alternates: { canonical: "https://harborwynai.io/guides" },
  title: "Trading Guides And Tutorials",
  description:
    "Practical trading guides from the Harborwyn AI crew. Learn signals, risk and backtesting basics in minutes. Start free today.",
};

const TAG_COLORS: Record<string, string> = {
  "Getting started": "bg-teal/10 text-teal ring-teal/30",
  Signals: "bg-gold-400/10 text-gold-400 ring-gold-400/30",
  Risk: "bg-coral/10 text-coral ring-coral/30",
  Strategy: "bg-[#9B6BEA]/10 text-[#9B6BEA] ring-[#9B6BEA]/30",
};

export default function GuidesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guides"
        title={
          <>
            Charts, Currents And{" "}
            <em className="font-normal italic">
              Calm Seas
            </em>
          </>
        }
        description={
          <>
            Practical guides from the Harborwyn crew. They help you trade with{" "}
            
              a calmer, sharper eye
            , whether or not you use the platform.
          </>
        }
      />

      <section className="relative pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {GUIDES.map((guide, i) => (
              <Reveal key={guide.slug} delay={(i % 2) * 0.08}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="glass card-hover group flex h-full flex-col rounded-2xl p-8"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] ring-1 ring-inset ${TAG_COLORS[guide.tag] ?? "bg-white/[0.04] text-mist ring-white/10"}`}
                    >
                      {guide.tag}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gold-400 transition-transform duration-300 group-hover:translate-x-1">
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                        <path d="M3 8 H13 M9.5 4.5 L13 8 L9.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <h2 className="mt-5 text-balance font-display text-2xl font-medium leading-snug text-ink transition-colors group-hover:text-gold-300">
                    {guide.title}
                  </h2>
                  <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-mist">
                    {guide.excerpt}
                  </p>
                  <p className="mt-6 flex items-center gap-3 border-t border-white/[0.05] pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-mist/70">
                    <span>{guide.readTime}</span>
                    <span className="h-0.5 w-0.5 rounded-full bg-mist/50" aria-hidden="true" />
                    <span>{guide.date}</span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Read Enough, Come See It Live"
        copy="The guides teach the basics. The platform puts them to work. Try Harborwyn AI free for 14 days."
      />
    </>
  );
}
