import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { useScrollInfo } from "@/hooks/useMotion";
import { cn } from "@/utils/cn";

/** Mobile conversion bar — appears past the hero, retreats over the pricing + reserve blocks. */
export function StickyCTA() {
  const { y } = useScrollInfo();
  const [nearOffer, setNearOffer] = useState(false);

  useEffect(() => {
    const targets = ["pricing", "reserve"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setNearOffer(entries.some((e) => e.isIntersecting));
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.05 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const show = y > 620 && !nearOffer;

  return (
    <div
      className={cn(
        "fixed inset-x-3 bottom-3 z-40 transition-all duration-500 ease-out lg:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <div className="flex items-center gap-3 rounded-2xl glass-strong p-2.5 pl-4 shadow-[0_24px_60px_-28px_rgba(0,0,0,1)]">
        <div className="min-w-0">
          <div className="truncate text-[13.5px] font-medium text-white">
            Aether One · from $1,199
          </div>
          <div className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
            1,412 left in the first run
          </div>
        </div>
        <a
          href="#pricing"
          className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[linear-gradient(120deg,#FFC78A,#FF9B4D_40%,#FF7849)] px-4 py-2.5 text-[13.5px] font-semibold text-ink-950 glow-ember transition-transform duration-300 active:scale-95"
        >
          Reserve
          <Icon name="arrow-right" className="h-3.5 w-3.5" strokeWidth={2.2} />
        </a>
      </div>
    </div>
  );
}
