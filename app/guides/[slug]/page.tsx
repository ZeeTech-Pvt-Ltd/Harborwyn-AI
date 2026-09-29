import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaStrip from "@/components/CtaStrip";
import JsonLd from "@/components/JsonLd";
import { GUIDES } from "@/data/guides";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const guide = GUIDES.find((g) => g.slug === params.slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `https://harborwynai.io/guides/${guide.slug}` },
  };
}

function Callout({ type, text }: { type: "tip" | "warning"; text: string }) {
  const isTip = type === "tip";
  return (
    <aside
      className={cn(
        "my-7 rounded-2xl border p-5",
        isTip
          ? "border-gold-400/25 bg-gold-400/[0.06]"
          : "border-coral/25 bg-coral/[0.06]"
      )}
    >
      <p
        className={cn(
          "mb-1.5 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em]",
          isTip ? "text-gold-400" : "text-coral"
        )}
      >
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
          {isTip ? (
            <path d="M8 2 L14.5 13.5 H1.5 Z M8 6.5 V10 M8 12 V12.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <path d="M8 2 L14.5 13.5 H1.5 Z M8 6.5 V10 M8 12 V12.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
        {isTip ? "From the deck" : "Steer clear"}
      </p>
      <p className="text-sm leading-relaxed text-ink/90">{text}</p>
    </aside>
  );
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = GUIDES.find((g) => g.slug === params.slug);
  if (!guide) notFound();

  const index = GUIDES.findIndex((g) => g.slug === guide.slug);
  const next = GUIDES[(index + 1) % GUIDES.length];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: new Date(guide.date).toISOString(),
    author: { "@id": "https://harborwynai.io/#organization" },
    publisher: { "@id": "https://harborwynai.io/#organization" },
    mainEntityOfPage: `https://harborwynai.io/guides/${guide.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <PageHeader
        eyebrow={`Guide · ${guide.tag}`}
        title={guide.title}
        description={
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist/80">
            {guide.readTime} · {guide.date}
          </span>
        }
      />

      <article className="relative pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <div className="glass rounded-3xl p-7 md:p-10">
              {guide.sections.map((section) => (
                <div
                  key={section.heading}
                  className="border-b border-white/[0.05] py-7 first:pt-0 last:border-0 last:pb-0"
                >
                  <h2 className="font-display text-2xl font-medium leading-snug text-ink">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)} className="mt-4 text-pretty text-[15px] leading-relaxed text-mist">
                      {p}
                    </p>
                  ))}
                  {section.callout && (
                    <Callout type={section.callout.type} text={section.callout.text} />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <Link
                href="/guides"
                className="flex items-center gap-2 text-sm text-mist transition-colors hover:text-ink"
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                  <path d="M13 8 H3 M6.5 4.5 L3 8 L6.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                All guides
              </Link>
              <Link
                href={`/guides/${next.slug}`}
                className="group flex items-center gap-2 text-sm text-mist transition-colors hover:text-ink"
              >
                Next: <span className="text-gold-400">{next.title.split(":")[0]}</span>
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" aria-hidden="true">
                  <path d="M3 8 H13 M9.5 4.5 L13 8 L9.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      <CtaStrip
        title="Put the theory to work"
        copy="The Harborwyn engine turns these principles into daily practice. Free for 14 days, no credit card."
      />
    </>
  );
}
