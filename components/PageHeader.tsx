import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

/**
 * Compact hero banner for interior pages, eyebrow, display title,
 * description, over the same grid-and-beam atmosphere as the homepage.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-10 pt-32 md:pb-12 md:pt-40">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-24 right-[-4%] h-[380px] w-[380px] rounded-full bg-gold-400/[0.07] blur-[120px]"
        aria-hidden="true"
      />
      <div className="beam" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-3 text-gold-400">
            <span className="h-px w-8 bg-gold-400/40" />
            <span>{eyebrow}</span>
            <span className="h-px w-8 bg-gold-400/40" />
          </p>
          <h1 className="mt-5 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-mist md:text-lg">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
