"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/Logo";
import { cn } from "@/lib/cn";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "About", href: "/about" },
  { label: "Guides", href: "/guides" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Clicking the current page's link smooth-scrolls back to the top.
  const handleNavClick = (href: string) => {
    if (isActive(href)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-300",
        scrolled || open ? "bg-abyss-950/85 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8"
      >
        <Logo />

        <div className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "text-sm transition-colors hover:text-ink",
                isActive(link.href) ? "font-medium text-gold-400" : "text-mist"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/sign-up"
            className="rounded-full bg-gold-400 px-6 py-2.5 text-sm font-semibold text-abyss-950 transition hover:bg-gold-300 hover:shadow-glow"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink lg:hidden"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3.5 6 H16.5 M3.5 10 H16.5 M3.5 14 H16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.06] bg-abyss-950/95 backdrop-blur-md lg:hidden"
          >
            <div className="space-y-1 px-5 py-5">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    handleNavClick(link.href);
                    setOpen(false);
                  }}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white/5 hover:text-ink",
                    isActive(link.href) ? "text-gold-400" : "text-mist"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3">
                <Link
                  href="/sign-up"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-gold-400 px-5 py-3 text-center text-sm font-semibold text-abyss-950"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
