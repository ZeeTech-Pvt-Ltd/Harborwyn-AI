"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { TESTIMONIALS } from "@/data/testimonials";
import { cn } from "@/lib/cn";

const AUTOPLAY_MS = 6500;

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 70 : -70 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -70 : 70 }),
};

/** Testimonial slider, one large quote per slide, arrows, dots, autoplay. */
export default function Testimonials() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = setInterval(
      () => setIndex(([i]) => [(i + 1) % TESTIMONIALS.length, 1]),
      AUTOPLAY_MS
    );
    return () => clearInterval(id);
  }, [paused, reducedMotion]);

  const paginate = (dir: number) =>
    setIndex(([i]) => [(i + dir + TESTIMONIALS.length) % TESTIMONIALS.length, dir]);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Traders Who Found{" "}
              <em className="font-normal italic">
                Their Harbor
              </em>
            </>
          }
          description={
            <>
              128,000+ traders across 70 countries navigate with Harborwyn AI
              every day. Here's what a few of them say{" "}

                in their own honest words

              , good, bad and lesson learned. Every single review comes from a real
              account, shared with their permission. The slider rotates on its
              own, so you can sit back and just read.
            </>
          }
        />

        <div
          className="relative mt-14"
          role="group"
          aria-roledescription="carousel"
          aria-label="Trader testimonials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* viewport */}
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait" initial={false}>
              <motion.figure
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                aria-roledescription="slide"
                aria-label={`Testimonial ${index + 1} of ${TESTIMONIALS.length}`}
                className="glass relative rounded-3xl px-7 py-12 text-center shadow-card md:px-16 md:py-14"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-6 top-6 font-display text-6xl leading-none text-gold-400/25 md:left-10 md:top-8 md:text-7xl"
                >
                  “
                </span>

                <p
                  className="text-sm tracking-wider text-gold-400"
                  aria-label="5 out of 5 stars"
                >
                  <span aria-hidden="true">★★★★★</span>
                </p>

                <blockquote className="mx-auto mt-5 max-w-2xl text-balance font-display text-xl font-medium italic leading-relaxed text-ink md:text-2xl">
                  {t.quote}
                </blockquote>

                <figcaption className="mt-8 flex items-center justify-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={`${t.name}, Harborwyn AI trader`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full border-2 border-gold-400/30 object-cover"
                  />
                  <span className="text-left">
                    <span className="block text-sm font-semibold text-ink">
                      {t.name}
                    </span>
                    <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                      {t.role} · {t.location}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* side arrows (desktop) */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="glass absolute -left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-mist transition hover:border-gold-400/40 hover:text-gold-400 md:flex lg:-left-8"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M13 8 H3 M6.5 4.5 L3 8 L6.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="glass absolute -right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-mist transition hover:border-gold-400/40 hover:text-gold-400 md:flex lg:-right-8"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M3 8 H13 M9.5 4.5 L13 8 L9.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* mobile controls + dots */}
          <div className="mt-7 flex items-center justify-center gap-6 md:mt-8">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-mist transition hover:border-gold-400/40 hover:text-gold-400 md:hidden"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                <path d="M13 8 H3 M6.5 4.5 L3 8 L6.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index
                      ? "w-7 bg-gold-400"
                      : "w-2 bg-white/15 hover:bg-white/30"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-mist transition hover:border-gold-400/40 hover:text-gold-400 md:hidden"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                <path d="M3 8 H13 M9.5 4.5 L13 8 L9.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* counter */}
          <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-mist/50">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(TESTIMONIALS.length).padStart(2, "0")}
          </p>

          {/* CTA right after the social proof */}
          <div className="mt-9 text-center">
            <Link
              href="/sign-up"
              className="bg-gold-400 rounded-full px-7 py-3.5 text-sm font-semibold text-abyss-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Start your free trial →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
