import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/hooks/useMotion";

/** A soft light that trails the pointer — desktop only, purely decorative. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let pos = { ...target };
    let raf = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      target = { x: e.clientX, y: e.clientY };
      if (!visible) {
        visible = true;
        el.style.opacity = "1";
      }
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.085;
      pos.y += (target.y - pos.y) * 0.085;
      el.style.transform = `translate3d(${pos.x - 260}px, ${pos.y - 260}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-[520px] w-[520px] rounded-full opacity-0 mix-blend-screen transition-opacity duration-700 lg:block"
      style={{
        background:
          "radial-gradient(circle, rgba(110,231,249,0.075) 0%, rgba(124,92,255,0.05) 38%, transparent 66%)",
      }}
    />
  );
}
