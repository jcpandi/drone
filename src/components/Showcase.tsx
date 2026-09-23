import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { showcase } from "@/data/content";
import { useTilt } from "@/hooks/useMotion";
import { cn } from "@/utils/cn";

export function Showcase() {
  const [active, setActive] = useState(0);
  const tab = showcase[active];
  const tilt = useTilt(6);

  return (
    <section id="aircraft" className="relative z-10 scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionHeading
          eyebrow="The aircraft"
          title={
            <>
              Look closer. It gets <span className="text-gradient">better</span>.
            </>
          }
          body="Four years of field testing in Patagonia, Svalbard and the Sierra — distilled into 814 grams of carbon, glass and silicon."
        />

        {/* Tabs */}
        <Reveal delay={120} className="mt-12">
          <div
            role="tablist"
            aria-label="Aircraft detail"
            className="hide-scrollbar mx-auto flex max-w-full gap-1.5 overflow-x-auto rounded-full glass p-1.5 sm:w-fit"
          >
            {showcase.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={active === i}
                aria-controls={`panel-${t.id}`}
                onClick={() => setActive(i)}
                className={cn(
                  "relative shrink-0 rounded-full px-5 py-2.5 text-[13.5px] font-medium transition-all duration-500",
                  active === i
                    ? "bg-white text-ink-950 shadow-[0_8px_26px_-10px_rgba(255,255,255,0.7)]"
                    : "text-white/55 hover:bg-white/[0.06] hover:text-white",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className="mt-10 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
        >
          {/* Visual */}
          <Reveal delay={60}>
            <div
              ref={tilt.ref}
              onPointerMove={tilt.onPointerMove}
              onPointerLeave={tilt.onPointerLeave}
              className="tilt-card group relative aspect-[4/3] overflow-hidden rounded-[30px] glass p-1.5 shadow-[0_50px_100px_-60px_rgba(0,0,0,1)]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                {showcase.map((t, i) => (
                  <img
                    key={t.id}
                    src={t.image}
                    alt={t.title}
                    loading="lazy"
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-all duration-[1.1s] ease-out",
                      i === active
                        ? "scale-100 opacity-100 blur-0"
                        : "scale-105 opacity-0 blur-md",
                    )}
                  />
                ))}
                <div className="absolute inset-0 bg-[linear-gradient(200deg,rgba(4,5,10,0.05),rgba(4,5,10,0.55)_70%,rgba(4,5,10,0.9))]" />
                <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_15%_0%,rgba(110,231,249,0.16),transparent_65%)]" />

                {/* Hotspots */}
                {tab.hotspots.map((h, i) => (
                  <div
                    key={h.label}
                    className="group/hs absolute z-20"
                    style={{
                      left: `${h.x}%`,
                      top: `${h.y}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    <button
                      type="button"
                      aria-label={h.label}
                      className="relative grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-125 focus-visible:scale-125"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      <span
                        className="absolute inset-0 animate-pulse-ring rounded-full border border-ice-400/70"
                        style={{ animationDelay: `${i * 0.6}s` }}
                      />
                    </button>
                    <span
                      className={cn(
                        "pointer-events-none absolute left-1/2 top-[-14px] w-max max-w-[220px] -translate-x-1/2 -translate-y-full",
                        "rounded-lg glass-strong px-3 py-2 text-[11.5px] leading-snug text-white opacity-0 shadow-xl",
                        "transition-all duration-300 group-hover/hs:-translate-y-[calc(100%+4px)] group-hover/hs:opacity-100",
                      )}
                    >
                      {h.label}
                    </span>
                  </div>
                ))}

                {/* HUD corners */}
                <div className="pointer-events-none absolute inset-4 z-10">
                  {["left-0 top-0 border-l border-t", "right-0 top-0 border-r border-t", "left-0 bottom-0 border-b border-l", "right-0 bottom-0 border-b border-r"].map(
                    (pos) => (
                      <span
                        key={pos}
                        className={cn("absolute h-5 w-5 rounded-[3px] border-white/30", pos)}
                      />
                    ),
                  )}
                </div>

                <div className="pointer-events-none absolute bottom-4 left-5 z-10 font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">
                  AETHER ONE / {tab.label}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div key={tab.id} className="lg:pl-2">
            <h3
              className="animate-rise font-display text-[clamp(1.6rem,3.2vw,2.3rem)] font-semibold leading-[1.1] text-white"
              style={{ animationDelay: "60ms" }}
            >
              {tab.title}
            </h3>
            <p
              className="animate-rise mt-4 text-[15.5px] leading-relaxed text-white/58"
              style={{ animationDelay: "140ms" }}
            >
              {tab.body}
            </p>

            <dl className="mt-7 grid grid-cols-1 gap-px overflow-hidden rounded-2xl glass sm:grid-cols-3 lg:grid-cols-1">
              {tab.specs.map((s, i) => (
                <div
                  key={s.k}
                  className="animate-rise flex items-baseline justify-between gap-4 px-5 py-4 transition-colors duration-500 hover:bg-white/[0.05]"
                  style={{ animationDelay: `${200 + i * 70}ms` }}
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                    {s.k}
                  </dt>
                  <dd className="text-[14.5px] font-medium text-white">{s.v}</dd>
                </div>
              ))}
            </dl>

            <div
              className="animate-rise mt-7 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "420ms" }}
            >
              <Button href="#pricing" variant="light" size="md">
                Configure your kit
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
                Full spec sheet in the app
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
