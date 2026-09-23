import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { nav } from "@/data/content";
import { useScrollInfo } from "@/hooks/useMotion";
import { cn } from "@/utils/cn";

export function Navbar() {
  const { y, progress } = useScrollInfo();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const solid = y > 24;

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-950"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid ? "py-2.5" : "py-4 sm:py-5",
        )}
      >
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6">
          <div
            className={cn(
              "relative flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-500 sm:px-4",
              solid
                ? "glass-strong shadow-[0_18px_50px_-24px_rgba(0,0,0,0.95)]"
                : "border border-transparent bg-transparent",
            )}
          >
            <Logo />

            <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => {
                const isActive = active === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-300",
                      isActive ? "text-white" : "text-white/60 hover:text-white",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-px origin-center scale-x-0 bg-[linear-gradient(90deg,transparent,#6EE7F9,#A78BFA,transparent)] transition-transform duration-500 group-hover:scale-x-100",
                        isActive && "scale-x-100",
                      )}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                href="#pricing"
                size="sm"
                variant="primary"
                className="hidden sm:inline-flex"
                magnetic={false}
              >
                Reserve yours
                <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white lg:hidden"
              >
                <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
              </button>
            </div>

            {/* Scroll progress */}
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-x-3 bottom-0 h-px origin-left rounded-full bg-[linear-gradient(90deg,#6EE7F9,#A78BFA_55%,#FF7849)] transition-opacity duration-500",
                solid ? "opacity-100" : "opacity-0",
              )}
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink-950/80 backdrop-blur-xl transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-x-3 top-[84px] origin-top rounded-3xl p-5 transition-all duration-500",
            "glass-strong shadow-[0_40px_90px_-40px_rgba(0,0,0,1)]",
            open ? "translate-y-0 scale-100 opacity-100" : "-translate-y-3 scale-95 opacity-0",
          )}
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${90 + i * 55}ms` : "0ms" }}
                className={cn(
                  "flex items-center justify-between border-b border-white/[0.07] py-4 font-display text-lg text-white/85 transition-all duration-500 last:border-0 hover:text-white",
                  open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0",
                )}
              >
                {item.label}
                <Icon name="arrow-up-right" className="h-4 w-4 text-white/35" />
              </a>
            ))}
          </nav>
          <Button href="#pricing" size="lg" className="mt-5 w-full" onClick={() => setOpen(false)}>
            Reserve yours — from $1,199
          </Button>
          <p className="mt-3 text-center text-xs text-white/40">
            Fully refundable · Ships March 2026
          </p>
        </div>
      </div>
    </>
  );
}
