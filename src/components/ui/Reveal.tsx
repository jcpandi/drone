import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useMotion";
import { cn } from "@/utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  threshold?: number;
  id?: string;
};

/** Scroll-triggered entrance: fade + rise + de-blur, with optional stagger delay. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  threshold = 0.16,
  id,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });

  return (
    <Tag
      id={id}
      ref={ref}
      data-visible={inView ? "true" : "false"}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}
