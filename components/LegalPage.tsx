import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import type { LegalDoc } from "@/data/legal";

/** Turns emails and URLs inside a plain paragraph into clickable links. */
function renderWithLinks(text: string) {
  const parts = text.split(
    /(support@harborwynai\.io|https?:\/\/[^\s.,;]+|harborwynai\.io\/[^\s.,;]+)/
  );
  return parts.map((part, i) => {
    if (part === "support@harborwynai.io") {
      return (
        <a
          key={i}
          href="mailto:support@harborwynai.io"
          className="text-gold-400 hover:underline"
        >
          {part}
        </a>
      );
    }
    if (/^https?:|^harborwynai\.io/.test(part)) {
      const href = part.startsWith("http") ? part : `https://${part}`;
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-gold-400 hover:underline"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

/** Renders a legal document (terms / privacy / risk disclosure). */
export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHeader
        eyebrow={doc.eyebrow}
        title={doc.title}
      />
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <div className="glass rounded-3xl p-7 md:p-10">
              {doc.sections.map((section) => (
                <div
                  key={section.heading}
                  className="border-b border-white/[0.05] py-7 first:pt-0 last:border-0 last:pb-0"
                >
                  <h2 className="font-display text-xl font-medium text-ink">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)} className="mt-3 text-sm leading-relaxed text-mist">
                      {renderWithLinks(p)}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
