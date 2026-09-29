import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "center",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      <p
        className={cn(
          "eyebrow flex items-center gap-3 text-gold-400",
          centered && "justify-center"
        )}
      >
        {index && <span className="font-mono text-[11px]">{index}</span>}
        <span className="h-px w-8 bg-gold-400/40" />
        <span>{eyebrow}</span>
        <span className="h-px w-8 bg-gold-400/40" />
      </p>
      <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-mist md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
