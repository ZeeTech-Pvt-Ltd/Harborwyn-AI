"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

/** The Harborwyn lighthouse mark, beacon, tower, harbor base. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
    >
      <defs>
        <linearGradient id="hw-tower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7CE7E" />
          <stop offset="1" stopColor="#D99A2B" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="#0A1224" stroke="rgba(240,184,75,0.35)" />
      <path d="M20 12 L3 3.5 L3.8 9 L20 15.4 Z" fill="#F0B84B" opacity="0.5" />
      <path d="M20 12 L37 3.5 L36.2 9 L20 15.4 Z" fill="#F0B84B" opacity="0.25" />
      <circle cx="20" cy="12" r="4.5" fill="#F0B84B" />
      <circle cx="20" cy="12" r="8" fill="#F0B84B" opacity="0.22" />
      <path d="M15.5 17.5 H24.5 L22.2 34 H17.8 Z" fill="url(#hw-tower)" />
      <path d="M16.8 23.5 H23.2" stroke="#0A1224" strokeWidth="1.6" />
      <path d="M17.5 28 H22.5" stroke="#0A1224" strokeWidth="1.6" />
      <rect x="15" y="34" width="10" height="2.6" rx="1.3" fill="#F0B84B" />
    </svg>
  );
}

export default function Logo({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      aria-label="Harborwyn AI, home"
      onClick={() => {
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className={cn("group flex items-center gap-2.5", className)}
    >
      <LogoMark className="transition-transform duration-300 group-hover:scale-105" />
      <span className="flex items-baseline gap-1.5">
        <span className="text-lg font-semibold tracking-tight text-ink">
          Harborwyn
        </span>
        <span className="rounded-md bg-gold-400 px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-widest text-abyss-950">
          AI
        </span>
      </span>
    </Link>
  );
}
