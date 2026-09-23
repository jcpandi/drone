import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/utils/cn";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.24em] text-white/55",
        className,
      )}
    >
      <span className="h-1 w-1 rounded-full bg-[linear-gradient(90deg,#6EE7F9,#A78BFA)]" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-[46rem]",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="mt-5 font-display text-[clamp(1.95rem,4.4vw,3.25rem)] font-semibold leading-[1.04] text-white">
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={170}>
          <p
            className={cn(
              "mt-5 text-[16px] leading-relaxed text-white/55 sm:text-[17px]",
              align === "center" && "mx-auto max-w-[40rem]",
            )}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
