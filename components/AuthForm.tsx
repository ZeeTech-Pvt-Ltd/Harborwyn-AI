"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { cn } from "@/lib/cn";

const inputClass = (hasError: boolean) =>
  cn(
    "w-full rounded-full border bg-abyss-950/70 px-6 py-3.5 text-sm text-ink placeholder:text-mist/60 focus:outline-none focus:ring-2",
    hasError
      ? "border-coral/50 focus:border-coral/60 focus:ring-coral/20"
      : "border-white/10 focus:border-gold-400/50 focus:ring-gold-400/20"
  );

/** Sign-in page shell, centered card with the sign-in form. */
export default function AuthForm() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/3 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.06] blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-xl px-5">
        <div className="glass rounded-3xl p-8 shadow-card md:p-10">
          <div className="flex justify-center">
            <Logo />
          </div>
          <SignInForm />
        </div>
      </div>
    </section>
  );
}

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!/^\S+@\S+\.\S+$/.test(email.trim()))
      next.email = "Please enter a valid email address.";
    if (!password.trim()) next.password = "Please enter your password.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-teal/30 bg-teal/10">
          <svg viewBox="0 0 16 16" className="h-6 w-6 text-teal" fill="none" aria-hidden="true">
            <path d="M2.5 8.5 L6 12 L13.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h1 className="mt-5 font-display text-2xl font-medium text-ink">Welcome Back.</h1>
        <p className="mt-2 text-sm leading-relaxed text-mist">
          Check your inbox for your secure sign-in link.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full border border-white/10 px-6 py-2.5 text-sm font-medium text-ink transition hover:border-gold-400/30"
        >
          Back to harbor
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="mt-7 text-center font-display text-2xl font-medium text-ink">
        Welcome Back
      </h1>
      <p className="mt-2 text-center text-sm text-mist">
        Sign in to your Harborwyn command deck.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
        <div>
          <label htmlFor="si-email" className="sr-only">
            Email address
          </label>
          <input
            id="si-email"
            type="email"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            aria-invalid={!!errors.email}
            className={inputClass(!!errors.email)}
          />
          {errors.email && (
            <p role="alert" className="mt-1.5 pl-5 text-left font-mono text-[10px] tracking-wider text-coral">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="si-password" className="sr-only">
            Password
          </label>
          <input
            id="si-password"
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            aria-invalid={!!errors.password}
            className={inputClass(!!errors.password)}
          />
          {errors.password && (
            <p role="alert" className="mt-1.5 pl-5 text-left font-mono text-[10px] tracking-wider text-coral">
              {errors.password}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-gold-400 w-full rounded-full py-3.5 text-sm font-semibold text-abyss-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-105"
        >
          Sign in →
        </button>

        <p className="flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-mist/60">
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden="true">
            <path d="M3 7.5 V6 A5 5 0 0 1 13 6 V7.5 M3 7.5 H13 V13 H3 Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
          Your data is protected with 256-bit SSL encryption
        </p>
      </form>

      <p className="mt-5 text-center text-sm text-mist">
        New to Harborwyn?{" "}
        <Link href="/sign-up" className="font-medium text-gold-400 hover:underline">
          Start free
        </Link>
      </p>
    </>
  );
}
