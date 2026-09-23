import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";
import { prefersReducedMotion } from "@/hooks/useMotion";
import { cn } from "@/utils/cn";

const DURATION = 7500;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    timer.current = window.setTimeout(() => go(index + 1), DURATION);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [index, paused, go]);

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative z-10 scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionHeading
          eyebrow="Field notes"
          title={
            <>
              4.9 out of 5, from people
              <br className="hidden sm:block" /> <span className="text-white/45">who fly in bad weather.</span>
            </>
          }
        />

        <Reveal
          delay={100}
          className="relative mx-auto mt-14 max-w-[1000px]"
        >
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            className="relative overflow-hidden rounded-[32px] glass px-6 py-10 shadow-[0_50px_110px_-60px_rgba(0,0,0,1)] sm:px-12 sm:py-14"
          >
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.22),transparent_70%)] blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,120,73,0.16),transparent_70%)] blur-2xl" />

            <Icon
              name="quote"
              filled
              className="relative h-9 w-9 text-white/12 sm:h-11 sm:w-11"
            />

            <div className="relative mt-5 min-h-[190px] sm:min-h-[180px]">
              {testimonials.map((t, i) => (
                <blockquote
                  key={t.name}
                  aria-hidden={i !== index}
                  className={cn(
                    "transition-all duration-700 ease-out",
                    i === index
                      ? "relative opacity-100 blur-0 translate-y-0"
                      : "pointer-events-none absolute inset-0 translate-y-3 opacity-0 blur-sm",
                  )}
                >
                  <p className="font-display text-[clamp(1.15rem,2.6vw,1.7rem)] font-medium leading-[1.42] text-white/92">
                    “{t.quote}”
                  </p>

                  <footer className="mt-7 flex flex-wrap items-center gap-4">
                    <img
                      src={t.avatar}
                      alt=""
                      loading="lazy"
                      width={52}
                      height={52}
                      className="h-[52px] w-[52px] rounded-full object-cover ring-1 ring-white/20"
                    />
                    <div className="mr-auto">
                      <div className="text-[15px] font-medium text-white">{t.name}</div>
                      <div className="text-[13px] text-white/45">{t.role}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Icon key={s} name="star" filled className="h-3.5 w-3.5 text-ember-400" />
                        ))}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                        {t.metric}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Controls */}
            <div className="relative mt-9 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
              <div className="flex items-center gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Show review from ${t.name}`}
                    aria-current={i === index}
                    className="group relative h-1.5 overflow-hidden rounded-full bg-white/12 transition-all duration-500"
                    style={{ width: i === index ? 48 : 16 }}
                  >
                    <span
                      className={cn(
                        "absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,#6EE7F9,#A78BFA)]",
                        i === index ? "w-full" : "w-0 group-hover:w-full",
                        i === index && !paused ? "origin-left" : "",
                      )}
                      style={
                        i === index
                          ? {
                              animation: paused
                                ? "none"
                                : `marquee-progress ${DURATION}ms linear forwards`,
                            }
                          : { transition: "width 400ms ease" }
                      }
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous review"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white/70 transition-all duration-300 hover:-translate-x-0.5 hover:border-white/30 hover:text-white"
                >
                  <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next review"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white/70 transition-all duration-300 hover:translate-x-0.5 hover:border-white/30 hover:text-white"
                >
                  <Icon name="arrow-right" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Avatar rail */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => go(i)}
                aria-label={`Read ${t.name}'s review`}
                className={cn(
                  "relative h-11 w-11 overflow-hidden rounded-full transition-all duration-500",
                  i === index
                    ? "scale-110 ring-2 ring-ice-400/80"
                    : "opacity-45 grayscale hover:opacity-90 hover:grayscale-0",
                )}
              >
                <img src={t.avatar} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <p className="mt-4 text-center text-[13px] text-white/35">
            Reviewer {index + 1} of {testimonials.length} · {current.role}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
