# Harborwyn AI — harborwynai.io

**Harborwyn AI** — AI-powered trading intelligence. *The lighthouse for modern traders.*

A multi-page marketing site for an AI trading-signals platform, built with Next.js (App Router), TypeScript and Tailwind CSS. The visual identity leans on a "harbor at night" concept: deep-ocean navy canvas, lighthouse-gold accent, serif-display headlines, live candlestick and radar visuals.

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero terminal, market ticker, stats, features, performance, testimonials |
| `/platform` | Product — features bento, Signals/Portfolio/Risk showcase, how-it-works |
| `/about` | Story, values, timeline |
| `/guides` | Guide index + 4 full article pages (`/guides/[slug]`, SSG) |
| `/faq` | Full accordion FAQ |
| `/contact` | Contact form + support/press/community channels |
| `/sign-up`, `/sign-in` | Auth pages |
| `/terms`, `/privacy`, `/risk-disclosure` | Legal documents |

All routes are statically generated; `/sitemap.xml` and `/robots.txt` list every page.

## Stack

- **Next.js 14** (App Router) · **React 18** · **TypeScript** (strict)
- **Tailwind CSS 3** — custom design tokens in `tailwind.config.ts`
- **Framer Motion** — scroll reveals, tab transitions, chart draw-ins
- **next/font** — Fraunces (display), Space Grotesk (UI), JetBrains Mono (numbers)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000 (auto-increments if busy)
npm run build      # production build
npm run start
```

## Structure

```
app/
  layout.tsx        # fonts, SEO metadata, shared Navbar + Footer
  page.tsx          # home
  about/ platform/ faq/ contact/ guides/ guides/[slug]/
  sign-up/ sign-in/ terms/ privacy/ risk-disclosure/
  icon.svg · sitemap.ts · robots.ts
components/
  Navbar, Footer, PageHeader, CtaStrip, AuthForm, SignUpForm, LegalPage
  Hero, Ticker, TrustBar, Features, SecuritySection, HowItWorks,
  EarningsCalculator, Performance, Testimonials, Faq, CtaBanner
  charts/           # custom SVG charts (no chart library)
    CandlestickChart, Sparkline, LineCompare, AllocationBar,
    RiskGauge, RadarSweep
  Logo, Reveal, CountUp, SectionHeading, WaveDivider
data/               # typed content: markets, guides, testimonials,
                    # faqs, company, legal
lib/                # cn() and number formatters
```

## Design notes

- **Chart colors are validated** — the allocation categorical steps
  (`#BE8529 / #9B6BEA / #1DA88E / #3987E5`) pass the dataviz palette checks
  (OKLCH lightness band, chroma floor, CVD & normal-vision separation,
  contrast) against the `#0A1224` dark surface.
- Candle polarity is double-encoded (hollow teal = up, filled coral = down);
  risk statuses use the fixed good/warning/serious/critical palette with
  icon + label, never color alone.
- The performance chart is an *emphasis* chart: Harborwyn in gold, benchmarks
  de-emphasized in gray, with legend, direct end labels, and a hover
  crosshair + tooltip.
- All motion respects `prefers-reduced-motion`; the ticker, beams and radar
  sweep pause via CSS.

## Deployment

Ready for Vercel: `vercel` or connect the repo at vercel.com. Set the
production domain to `harborwynai.io`.

---

All market data on the site is seeded, deterministic sample data for
demonstration — not live feeds.
