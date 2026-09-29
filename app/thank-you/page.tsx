import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "https://harborwynai.io/thank-you" },
  title: "Thank You For Signing Up",
  description:
    "Thanks for joining Harborwyn AI. Your account manager will contact you soon to activate your free Captain trial.",
  robots: { index: false, follow: false },
};

const NEXT_STEPS = [
  {
    title: "A Manager Reaches Out",
    copy: "An account manager will contact you within one business day. They'll activate your account and answer any questions you have.",
  },
  {
    title: "Your Trial Unlocks",
    copy: "You get fourteen days of full Captain access: signals, Risk Radar, Backtesting Lab and one-tap execution. It's all yours to explore.",
  },
  {
    title: "No Obligation",
    copy: "No pressure and no chasing. If Harborwyn isn't for you, cancel anytime. Your Voyager account stays free forever.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-12 pt-32 md:pt-40">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-1/3 h-[460px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.07] blur-[130px]"
          aria-hidden="true"
        />
        <div className="beam" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-teal/30 bg-teal/10">
              <svg viewBox="0 0 16 16" className="h-9 w-9 text-teal" fill="none" aria-hidden="true">
                <path d="M2.5 8.5 L6 12 L13.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h1 className="mt-7 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
              Thank You!
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-mist">
              Your registration is in. Our team will contact you shortly to{" "}
              
                activate your account
              {" "}
              and answer any questions you have. No obligation, no pressure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* next steps */}
      <section className="relative pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {NEXT_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="glass card-hover h-full rounded-2xl p-7 text-center">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/20 bg-gold-400/10 font-mono text-sm font-bold text-gold-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-semibold text-ink">{step.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="bg-gold-400 rounded-full px-7 py-3.5 text-sm font-semibold text-abyss-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-105"
              >
                Back to harbor →
              </Link>
              <Link
                href="/guides"
                className="rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-ink transition hover:border-gold-400/30"
              >
                Read the guides
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
