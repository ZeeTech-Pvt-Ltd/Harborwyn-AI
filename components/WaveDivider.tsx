import { cn } from "@/lib/cn";

/** Decorative ocean-wave divider. Fill color via `className` text color. */
export default function WaveDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative z-10 w-full overflow-hidden leading-[0]",
        className
      )}
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="h-10 w-full md:h-14"
      >
        <path
          d="M0,30 C160,56 330,4 520,10 C710,16 880,56 1060,42 C1240,28 1340,12 1440,22 L1440,56 L0,56 Z"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
