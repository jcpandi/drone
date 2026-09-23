import { useCallback, useRef } from "react";
import type { ReactNode } from "react";
import { prefersReducedMotion } from "@/hooks/useMotion";
import { cn } from "@/utils/cn";

type Variant = "primary" | "glass" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-medium " +
  "transition-[transform,box-shadow,background-color,color,border-color] duration-300 ease-out " +
  "active:scale-[0.97] whitespace-nowrap btn-sheen";

const variants: Record<Variant, string> = {
  primary:
    "text-ink-950 glow-ember bg-[linear-gradient(120deg,#FFC78A_0%,#FF9B4D_40%,#FF7849_100%)] " +
    "hover:shadow-[0_18px_46px_-12px_rgba(255,120,73,0.75)] hover:brightness-[1.06]",
  glass:
    "glass text-white/90 hover:text-white hover:border-white/25 hover:bg-white/[0.09] " +
    "shadow-[0_8px_30px_-16px_rgba(0,0,0,0.9)]",
  light:
    "bg-white text-ink-950 hover:bg-white/90 shadow-[0_12px_40px_-16px_rgba(255,255,255,0.5)]",
  ghost: "text-white/70 hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-[54px] px-7 text-[15px]",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  magnetic?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  magnetic = true,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const ref = useRef<HTMLElement | null>(null);

  const handleMove = useCallback(
    (e: React.PointerEvent) => {
      const el = ref.current;
      if (!el || !magnetic || prefersReducedMotion()) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.22;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.32;
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    },
    [magnetic],
  );

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "";
  }, []);

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        aria-label={ariaLabel}
        className={classes}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        onClick={onClick}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      aria-label={ariaLabel}
      className={classes}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
