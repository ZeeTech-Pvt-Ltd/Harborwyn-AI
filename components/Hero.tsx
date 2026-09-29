"use client";

import Image from "next/image";
import { motion, MotionConfig, type Variants } from "framer-motion";
import CandlestickChart from "@/components/charts/CandlestickChart";
import Sparkline from "@/components/charts/Sparkline";
import { SPARK_HERO } from "@/data/markets";

const AVATARS = [
  { src: "https://randomuser.me/api/portraits/women/44.jpg", alt: "A trader using Harborwyn AI" },
  { src: "https://randomuser.me/api/portraits/men/32.jpg", alt: "A trader using Harborwyn AI" },
  { src: "https://randomuser.me/api/portraits/women/68.jpg", alt: "A trader using Harborwyn AI" },
  { src: "https://randomuser.me/api/portraits/men/45.jpg", alt: "A trader using Harborwyn AI" },
  { src: "https://randomuser.me/api/portraits/women/12.jpg", alt: "A trader using Harborwyn AI" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="top" className="relative overflow-hidden pb-16 pt-32 md:pt-40">
        {/* atmosphere: grid, lantern glow, rotating beams */}
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -top-28 right-[-6%] h-[420px] w-[420px] rounded-full bg-gold-400/[0.08] blur-[130px]"
          aria-hidden="true"
        />
        <div className="beam" aria-hidden="true" />
        <div className="beam beam--teal" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
          {/* copy */}
          <div className="text-center lg:text-left">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium text-ink">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-teal" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                </span>
                AI signal engine · live now
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-7 text-balance font-display text-4xl font-medium leading-[1.06] tracking-tight text-ink sm:text-5xl xl:text-[3.75rem]"
            >
              Harborwyn AI, Your Safe Harbor In Volatile Markets.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 w-full text-pretty text-lg leading-relaxed text-mist"
            >
              Harborwyn AI watches 40+ markets around the clock. It turns
              millions of data points into clear, easy signals, so you
              always know your next move before the tide turns.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href="/sign-up"
                className="bg-gold-400 rounded-full px-7 py-3.5 text-sm font-semibold text-abyss-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-105"
              >
                Start trading free →
              </a>
              <a
                href="/platform"
                className="glass group flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-medium text-ink transition hover:border-gold-400/30"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4 text-gold-400" fill="currentColor" aria-hidden="true">
                  <path d="M6.5 4.5 L14.5 10 L6.5 15.5 Z" />
                </svg>
                See how it works
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-mist/70 lg:justify-start"
            >
              {["Free registration", "No credit card", "Read-only API keys"].map((b) => (
                <span key={b} className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" className="h-3 w-3 text-teal" fill="none" aria-hidden="true">
                    <path d="M2.5 8.5 L6 12 L13.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {b}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <div className="flex -space-x-2.5">
                {AVATARS.map((a) => (
                  <Image
                    key={a.src}
                    src={a.src}
                    alt={a.alt}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full border-2 border-abyss-950 object-cover"
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="text-gold-400" aria-hidden="true">★★★★★</span>
                <p className="mt-0.5 text-mist">
                  <span className="font-semibold text-ink">4.9/5</span> from
                  12,000+ traders
                </p>
              </div>
            </motion.div>
          </div>

          {/* terminal visual */}
          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gold-400/[0.06] blur-2xl" aria-hidden="true" />

            <div className="glass relative rounded-3xl p-5 shadow-card md:p-6">
              {/* header */}
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
                  Harborwyn signals
                </p>
                <span className="glass rounded-full px-3 py-1 font-mono text-[10px] tracking-wider text-ink">
                  BTC/USD · 4H
                </span>
              </div>

              {/* price row */}
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="font-mono text-3xl font-bold tabular-nums text-ink">
                    $67,482.10
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 font-mono text-sm tabular-nums text-teal">
                    <span aria-hidden="true">▲</span> +2.34% today
                  </p>
                </div>
                <p className="pb-1 font-mono text-[10px] uppercase tracking-widest text-mist">
                  Confidence 94%
                </p>
              </div>

              {/* candles */}
              <div className="mt-4 rounded-xl border border-white/[0.05] bg-abyss-950/60 p-2">
                <CandlestickChart />
              </div>

              {/* signal chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gold-400/10 px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wider text-gold-400 ring-1 ring-inset ring-gold-400/30">
                  ▲ BUY · 94%
                </span>
                <span className="rounded-full bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] tracking-wider text-mist ring-1 ring-inset ring-white/10">
                  RISK CALM
                </span>
                <span className="rounded-full bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] tracking-wider text-mist ring-1 ring-inset ring-white/10">
                  STOP −2.3%
                </span>
                <span className="rounded-full bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] tracking-wider text-mist ring-1 ring-inset ring-white/10">
                  TARGET +5.7%
                </span>
              </div>
            </div>

            {/* floating chip, portfolio */}
            <div
              className="glass animate-float absolute -left-8 top-12 hidden w-44 rounded-2xl p-3.5 shadow-card md:block"
              style={{ animationDuration: "7s" }}
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist">
                Portfolio · MTD
              </p>
              <p className="mt-1 font-mono text-xl font-bold tabular-nums text-teal">+23.4%</p>
              <Sparkline data={SPARK_HERO} stroke="#3FD8C1" className="mt-1.5 h-8 w-full" />
            </div>

            {/* floating chip, accuracy */}
            <div
              className="glass animate-float absolute -bottom-8 -right-4 hidden w-48 rounded-2xl p-3.5 shadow-card md:block"
              style={{ animationDuration: "9s", animationDelay: "1.2s" }}
            >
              <div className="flex items-center justify-between">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist">
                  Signal accuracy
                </p>
                <span className="font-mono text-sm font-bold tabular-nums text-gold-400">92.7%</span>
              </div>
              <div className="mt-2.5 flex h-1.5 gap-0.5" aria-hidden="true">
                {[62, 74, 58, 82, 79, 90, 86, 96, 88, 99, 94, 97].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-full bg-gold-400/80"
                    style={{ opacity: 0.35 + (h / 100) * 0.65 }}
                  />
                ))}
              </div>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-mist/70">
                Qualified setups · 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
