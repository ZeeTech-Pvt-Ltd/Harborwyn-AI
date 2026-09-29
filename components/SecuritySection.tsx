import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

interface SecurityItem {
  title: string;
  copy: ReactNode;
  icon: ReactNode;
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const ITEMS: SecurityItem[] = [
  {
    title: "Bank-Grade Encryption",
    copy: (
      <>
        Every connection to Harborwyn uses 256-bit SSL encryption. It's{" "}

          the same standard big banks rely on

        . Every message you send us gets the same protection.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke} aria-hidden="true">
        <rect x="4.5" y="10" width="15" height="10" rx="2" />
        <path d="M8 10 V7.5 A4 4 0 0 1 16 7.5 V10 M12 13.5 V16.5" />
      </svg>
    ),
  },
  {
    title: "Read-Only Exchange Keys",
    copy: (
      <>
        You link your exchange with read-only keys. They can see your portfolio
        but{" "}
        never move a cent.
        Your coins stay in your own custody.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke} aria-hidden="true">
        <path d="M12 3 L19 5.5 V11 C19 15.5 15.9 19.2 12 20.5 C8.1 19.2 5 15.5 5 11 V5.5 Z" />
        <path d="M8.8 11.5 L11 13.7 L15.4 9" />
      </svg>
    ),
  },
  {
    title: "Two-Step Login Protection",
    copy: (
      <>
        You add a second check to every login. That way{" "}
        
          your account stays yours
        
        , even if your password leaks.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke} aria-hidden="true">
        <rect x="4" y="10.5" width="16" height="9.5" rx="2.5" />
        <path d="M7.5 10.5 V8 A4.5 4.5 0 0 1 16.5 8 V10.5" />
        <circle cx="12" cy="15.2" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Unreadable Passwords",
    copy: (
      <>
        We store your credentials as a hash that can't be reversed.{" "}
        
          Not even our own crew can see your password
        
        .
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke} aria-hidden="true">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M2.5 12 C5 6.5 8.5 4.5 12 4.5 C15.5 4.5 19 6.5 21.5 12 C19 17.5 15.5 19.5 12 19.5 C8.5 19.5 5 17.5 2.5 12 Z" />
        <path d="M4 4 L20 20" />
      </svg>
    ),
  },
  {
    title: "24/7 Activity Monitoring",
    copy: (
      <>
        Our systems watch your account around the clock. If something looks
        odd,{" "}

          you hear about it early

        , before it turns into a problem. It all runs automatically in the
        background.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke} aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 12 L12 3.5" />
      </svg>
    ),
  },
  {
    title: "Hardened Infrastructure",
    copy: (
      <>
        We run the platform on audited tech,{" "}
        
          the same stack that has survived every market storm since 2021
        
        .
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke} aria-hidden="true">
        <path d="M4 19 H20 M6 19 V9.5 M10 19 V6.5 M14 19 V12 M18 19 V4.5" />
      </svg>
    ),
  },
];

export default function SecuritySection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="security" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {showHeading && (
          <SectionHeading
            index="02"
            eyebrow="Security first"
            title={
              <>
                Bank-Grade Protection,{" "}
                <em className="font-normal italic">
                  Harbor-Grade Calm
                </em>
              </>
            }
            description={
              <>
                You put real money on the line, so we protect it{" "}

                  the way a bank protects its vault

                . Every account gets those same standards, on the free plan and
                the paid one.
              </>
            }
          />
        )}

        <div className={showHeading ? "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3" : "grid gap-5 md:grid-cols-2 lg:grid-cols-3"}>
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <article className="glass card-hover group h-full rounded-2xl p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/10 text-gold-400 transition-colors duration-300 group-hover:border-gold-400/40">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
