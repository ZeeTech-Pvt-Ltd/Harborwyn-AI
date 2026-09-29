"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import intlTelInput from "intl-tel-input/intlTelInputWithUtils";
import type { Iso2 } from "intl-tel-input";
import "intl-tel-input/styles";
import { cn } from "@/lib/cn";

const inputClass = (hasError: boolean) =>
  cn(
    "w-full rounded-xl border bg-abyss-950/70 px-4 py-3 text-sm text-ink placeholder:text-mist/50 focus:outline-none focus:ring-2",
    hasError
      ? "border-coral/50 focus:border-coral/60 focus:ring-coral/20"
      : "border-white/10 focus:border-gold-400/50 focus:ring-gold-400/20"
  );

const labelClass =
  "mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-mist";

const SUBMIT_ENDPOINT = "https://theunion-ai.com/dorovio-au.php";
const OFFER_NAME = "HarborwynAI-Site";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 font-mono text-[10px] tracking-wider text-coral">
      {message}
    </p>
  );
}

/**
 * Registration form in the Rendaven pattern, labeled fields, first/last
 * name side by side, phone with separate dial code, consent, and a manager
 * follow-up success state. Used on the sign-up page and the contact page.
 */
export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const router = useRouter();
  const phoneRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<ReturnType<typeof intlTelInput> | null>(null);

  // Initialise intl-tel-input (flags, separate dial code, country search).
  // Australia is the default; the visitor's IP then overrides the selection
  // (as long as they haven't started typing a number yet).
  useEffect(() => {
    const input = phoneRef.current;
    if (!input) return;
    itiRef.current = intlTelInput(input, {
      initialCountry: "au",
      separateDialCode: true,
      placeholderNumberPolicy: "AGGRESSIVE",
      placeholderNumberType: "MOBILE",
    });

    let cancelled = false;
    fetch("https://ipwho.is/")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data?.success || !data?.country_code) return;
        const code = String(data.country_code).toLowerCase();
        const current = itiRef.current?.getSelectedCountry()?.iso2;
        if (itiRef.current && code !== current && !input.value.trim()) {
          itiRef.current.setSelectedCountry(code as Iso2);
        }
      })
      .catch(() => {
        /* keep the default country if the lookup fails */
      });

    return () => {
      cancelled = true;
      itiRef.current?.destroy();
      itiRef.current = null;
    };
  }, []);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!firstName.trim()) next.firstName = "Please enter your first name.";
    if (!lastName.trim()) next.lastName = "Please enter your last name.";
    if (!/^\S+@\S+\.\S+$/.test(email.trim()))
      next.email = "Please enter a valid email address.";
    // The phone input is uncontrolled (intl-tel-input owns the DOM value),
    // so always read the current number from the library.
    const iti = itiRef.current;
    let phoneValue = phone.trim();
    try {
      phoneValue = iti?.getNumber() ?? phoneValue;
    } catch {
      /* fall back to the raw state */
    }
    if (!phoneValue) {
      next.phone = "Please enter a valid phone number.";
    } else if (iti) {
      try {
        if (!iti.isValidNumber()) {
          next.phone = "Please enter a valid phone number.";
        }
      } catch {
        next.phone = "Please enter a valid phone number.";
      }
    } else if (phoneValue.replace(/\D/g, "").length < 7) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!consent) next.consent = "Please accept the privacy terms to continue.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading" || !validate()) return;
    setStatus("loading");
    try {
      // Full international number from intl-tel-input when available.
      let phoneNumber = phone.trim();
      try {
        const full = itiRef.current?.getNumber();
        if (full) phoneNumber = full;
      } catch {
        /* keep the raw input */
      }

      const res = await fetch(SUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: phoneNumber,
          offerName: OFFER_NAME,
        }),
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const data = await res.json().catch(() => null);
      if (data && data.status === "error") {
        throw new Error(data.message || "Submission rejected");
      }
      // Registration received, take the trader to the thank-you page.
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <h2 className="text-center font-display text-2xl font-medium text-ink">
        Create your free account
      </h2>
      <p className="mt-2 text-center text-sm text-mist">
        Join thousands of traders on Harborwyn AI. Registration takes under
        two minutes.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
        {/* name row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="su-first">
              <span className={labelClass}>First name *</span>
              <input
                id="su-first"
                name="first_name"
                type="text"
                required
                value={firstName}
                autoComplete="given-name"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                aria-invalid={!!errors.firstName}
                className={inputClass(!!errors.firstName)}
              />
            </label>
            <FieldError message={errors.firstName} />
          </div>
          <div>
            <label htmlFor="su-last">
              <span className={labelClass}>Last name *</span>
              <input
                id="su-last"
                name="last_name"
                type="text"
                required
                value={lastName}
                autoComplete="family-name"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                aria-invalid={!!errors.lastName}
                className={inputClass(!!errors.lastName)}
              />
            </label>
            <FieldError message={errors.lastName} />
          </div>
        </div>

        {/* email */}
        <div>
          <label htmlFor="su-email">
            <span className={labelClass}>Email address *</span>
            <input
              id="su-email"
              name="email"
              type="email"
              required
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              className={inputClass(!!errors.email)}
            />
          </label>
          <FieldError message={errors.email} />
        </div>

        {/* phone */}
        <div>
          <label htmlFor="su-phone">
            <span className={labelClass}>Phone number *</span>
            <input
              id="su-phone"
              ref={phoneRef}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={!!errors.phone}
              className={inputClass(!!errors.phone)}
            />
          </label>
          <FieldError message={errors.phone} />
        </div>

        {/* consent */}
        <div>
          <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-mist">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-gold-400"
            />
            <span>
              I agree to the{" "}
              <Link href="/privacy" className="text-gold-400 hover:underline">
                Privacy Policy
              </Link>{" "}
              and understand how my data will be used. *
            </span>
          </label>
          <FieldError message={errors.consent} />
        </div>

        {status === "error" && (
          <div
            role="alert"
            className="rounded-xl border border-coral/30 bg-coral/10 px-4 py-3 text-center text-sm text-ink"
          >
            Something went wrong. Please try again shortly.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-gold-400 w-full rounded-xl py-3.5 text-sm font-semibold text-abyss-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0"
        >
          {status === "loading" ? "Submitting…" : "Open an account"}
        </button>

        <p className="flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-mist/60">
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden="true">
            <path d="M3 7.5 V6 A5 5 0 0 1 13 6 V7.5 M3 7.5 H13 V13 H3 Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
          Your data is protected with 256-bit SSL encryption
        </p>
      </form>
    </div>
  );
}
