import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SignUpForm from "@/components/SignUpForm";

export const metadata: Metadata = {
  alternates: { canonical: "https://harborwynai.io/sign-up" },
  title: "Sign Up For AI Trading",
  description:
    "Open your free Harborwyn AI account in two minutes. Get 14 days of full Captain access with no credit card. Sign up now.",
};

const JOIN_POINTS = [
  {
    icon: (
      <path d="M3 7.5 V6 A5 5 0 0 1 13 6 V7.5 M3 7.5 H13 V13 H3 Z" />
    ),
    text: "Free registration, cancel anytime",
  },
  {
    icon: (
      <path d="M4 6 H20 V16 H4 Z M4 6 L12 12 L20 6" />
    ),
    text: "A dedicated manager replies within one business day",
  },
  {
    icon: (
      <path d="M12 3 L19 5.5 V11 C19 15.5 15.9 19.2 12 20.5 C8.1 19.2 5 15.5 5 11 V5.5 Z M8.8 11.5 L11 13.7 L15.4 9" />
    ),
    text: "Your data is protected with 256-bit SSL encryption",
  },
];

const REASSURANCE = [
  {
    title: "14-Day Captain Trial",
    copy: "Every feature unlocks on day one: signals, radar, backtesting and execution. No credit card at the door.",
  },
  {
    title: "Read-Only By Design",
    copy: "Your exchange keys can never withdraw funds. Your capital stays in your own hands, always.",
  },
  {
    title: "24/7 Support Desk",
    copy: "Real people, real answers, across every market session, around the clock.",
  },
];

export default function SignUpPage() {
  return (
    <>
      {/* hero + form */}
      <section className="relative overflow-hidden pb-16 pt-32 md:pt-40">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -top-24 right-[-4%] h-[420px] w-[420px] rounded-full bg-gold-400/[0.08] blur-[130px]"
          aria-hidden="true"
        />
        <div className="beam" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* copy */}
          <Reveal>
            <div>
              <p className="eyebrow flex items-center gap-3 text-gold-400">
                <span className="h-px w-8 bg-gold-400/40" />
                <span>Get started</span>
              </p>
              <h1 className="mt-5 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
                Open Your Harborwyn Account.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-mist">
                Fill in the form and an account manager will reach out shortly.{" "}
                
                  We&apos;ll activate your account
                {" "}
                and answer any questions you have. No obligation, no pressure.
              </p>

              <ul className="mt-8 space-y-4">
                {JOIN_POINTS.map((point) => (
                  <li key={point.text} className="flex items-center gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400/20 bg-gold-400/10 text-gold-400">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {point.icon}
                      </svg>
                    </span>
                    <span className="text-sm text-ink/90">{point.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-mist/70">
                {["256-bit SSL encryption", "Read-only API keys", "24/7 support"].map((b) => (
                  <span key={b} className="flex items-center gap-2">
                    <svg viewBox="0 0 16 16" className="h-3 w-3 text-teal" fill="none" aria-hidden="true">
                      <path d="M2.5 8.5 L6 12 L13.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* form card */}
          <Reveal delay={0.12}>
            <div className="glass rounded-3xl p-7 shadow-card md:p-9">
              <SignUpForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* reassurance strip */}
      <section className="relative pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {REASSURANCE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="glass card-hover h-full rounded-2xl p-7">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/10 text-teal"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path d="M2.5 8.5 L6 12 L13.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h2 className="mt-4 font-semibold text-ink">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
