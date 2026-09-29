import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  alternates: { canonical: "https://harborwynai.io/faq" },
  title: "Trading Questions Answered",
  description:
    "Answers about Harborwyn AI signals, exchanges, accuracy and security. Read the FAQ, then start your free 14-day trial.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <PageHeader
        eyebrow="FAQ"
        title={
          <>
            Questions From The{" "}
            <em className="font-normal italic">
              Dock
            </em>
          </>
        }
        description={
          <>
            This is what you ask{" "}
            
              before you board
            . Signals, exchanges, accuracy, security and billing.
          </>
        }
      />
      <Faq showHeading={false} />

      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <div className="glass rounded-3xl p-8 text-center md:p-10">
              <h2 className="font-display text-2xl font-medium text-ink">
                Still Have Questions?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mist">
                We&apos;ll reply{" "}
                to you within one business day, usually sooner.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-gold-400 rounded-full px-7 py-3.5 text-sm font-semibold text-abyss-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Contact us →
                </Link>
                <Link
                  href="/guides"
                  className="rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-ink transition hover:border-gold-400/30"
                >
                  Read the guides
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
