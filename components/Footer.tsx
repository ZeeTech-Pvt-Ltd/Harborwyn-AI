import Link from "next/link";
import Logo from "@/components/Logo";
import WaveDivider from "@/components/WaveDivider";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How It Works", href: "/platform#how-it-works" },
      { label: "Guides", href: "/guides" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Risk Disclosure", href: "/risk-disclosure" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-abyss-900/60">
      <WaveDivider className="absolute inset-x-0 -top-10 text-abyss-900/60" />
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          {/* brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              Harborwyn AI, AI-powered trading intelligence that helps you make
              calm, confident decisions. Your lighthouse for modern markets.
            </p>
          </div>

          {/* link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:gap-12">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist/70">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-mist transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* risk disclosure */}
        <div className="mt-14 rounded-2xl border border-white/[0.05] bg-abyss-950/50 p-5">
          <p className="text-xs leading-relaxed text-mist/60">
            <span className="text-mist">Risk Disclosure:</span>{" "}
            Trading cryptocurrencies, stocks and derivatives carries a big risk
            of loss, and it isn&apos;t right for every investor. Harborwyn AI
            gives you tools and signals for information, not personal advice,
            and past results never promise future ones, so do your own research
            and never trade with money you can&apos;t afford to lose.{" "}
            <Link href="/risk-disclosure" className="underline hover:text-mist">
              Read The Full Risk Disclosure
            </Link>
            .
          </p>
        </div>

        <div className="hairline mt-10" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-mist/60 sm:flex-row">
          <p>© 2026 Harborwyn AI Ltd. All rights reserved.</p>
          <p className="font-mono tracking-wider">harborwynai.io</p>
        </div>
      </div>
    </footer>
  );
}
