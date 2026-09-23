import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { heroSpecs, media } from "@/data/content";
import { useParallaxRef } from "@/hooks/useMotion";
import { cn } from "@/utils/cn";

const hudChips = [
  {
    label: "TRAILLOCK",
    value: "Engaged",
    tone: "text-ice-300",
    pos: "left-[-4%] top-[16%]",
    delay: "0s",
    dot: true,
  },
  {
    label: "BATTERY",
    value: "52:00",
    tone: "text-white",
    pos: "right-[-6%] top-[30%]",
    delay: "1.1s",
  },
  {
    label: "CODEC",
    value: "8K60 · LogM",
    tone: "text-white",
    pos: "right-[-2%] bottom-[24%]",
    delay: "2.2s",
  },
  {
    label: "WIND",
    value: "34 km/h · locked",
    tone: "text-ember-300",
    pos: "left-[-6%] bottom-[16%]",
    delay: "1.7s",
  },
];

export function Hero({ onPlayFilm }: { onPlayFilm: () => void }) {
  const craftRef = useParallaxRef<HTMLDivElement>(16, 13);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      {/* Distant terrain for depth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[52vh]">
        <img
          src={media.heroTerrain}
          alt=""
          className="h-full w-full scale-110 object-cover opacity-[0.16] [mask-image:linear-gradient(0deg,transparent,#000_55%,transparent)]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#04050a_2%,transparent_45%,#04050a_96%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* ── Copy ───────────────────────────────────────────── */}
        <div className="relative z-10 text-center lg:text-left">
          <div
            className="animate-rise inline-flex items-center gap-2.5 rounded-full glass px-3.5 py-1.5 text-[12px] tracking-wide text-white/75"
            style={{ animationDelay: "60ms" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ice-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ice-400" />
            </span>
            New — Aether One
            <span className="text-white/25">/</span>
            <span className="font-mono text-[11px] text-white/50">SHIPS MARCH 2026</span>
          </div>

          <h1
            className="animate-rise mt-6 font-display text-[clamp(2.6rem,7.6vw,4.9rem)] font-semibold leading-[0.96] text-white"
            style={{ animationDelay: "150ms" }}
          >
            Made for the places
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient">maps forget.</span>
          </h1>

          <p
            className="animate-rise mx-auto mt-6 max-w-[38rem] text-[16.5px] leading-relaxed text-white/60 sm:text-[17.5px] lg:mx-0"
            style={{ animationDelay: "250ms" }}
          >
            Aether One launches from your palm, reads the terrain, and chases you through canyon,
            powder and swell for <span className="text-white/90">52 minutes</span> — then lands
            back in your hand carrying 8K HDR footage that looks like you hired a film crew.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: "350ms" }}
          >
            <Button href="#pricing" size="lg" className="w-full sm:w-auto">
              Reserve yours — from $1,199
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
            <Button
              onClick={onPlayFilm}
              variant="glass"
              size="lg"
              className="w-full sm:w-auto"
              ariaLabel="Play the Aether One field film"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110">
                <Icon name="play" className="h-3 w-3 translate-x-[1px]" filled />
              </span>
              Watch the field film
            </Button>
          </div>

          <p
            className="animate-rise mt-5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-white/35"
            style={{ animationDelay: "430ms" }}
          >
            Refundable deposit · 30-day flight test · Free worldwide shipping
          </p>
        </div>

        {/* ── Aircraft visual ────────────────────────────────── */}
        <div className="relative z-10 mx-auto w-full max-w-[520px] lg:max-w-none">
          <div
            className="animate-rise relative aspect-[5/6] w-full"
            style={{ animationDelay: "280ms" }}
          >
            {/* Halo */}
            <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(110,231,249,0.22),rgba(124,92,255,0.14)_45%,transparent_70%)] blur-2xl" />

            {/* Orbit rings */}
            <svg
              viewBox="0 0 400 400"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full animate-spin-slower text-white/12"
            >
              <circle
                cx="200"
                cy="200"
                r="168"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2 10"
              />
            </svg>
            <svg
              viewBox="0 0 400 400"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full animate-spin-slow text-ice-400/25"
              style={{ animationDirection: "reverse" }}
            >
              <circle
                cx="200"
                cy="200"
                r="132"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="90 320"
                strokeLinecap="round"
              />
            </svg>

            {/* Ground shadow */}
            <div className="absolute bottom-[8%] left-1/2 h-8 w-[46%] -translate-x-1/2 rounded-[50%] bg-ink-950/90 blur-2xl" />

            {/* Craft */}
            <div ref={craftRef} className="absolute inset-0">
              <div className="h-full w-full animate-float">
              <img
                src={media.heroCraft}
                alt="Aether One adventure drone hovering, viewed from the front"
                width={900}
                height={1200}
                fetchPriority="high"
                className="h-full w-full scale-[1.06] object-contain mix-blend-screen brightness-[1.14] contrast-[1.2] saturate-[0.85] [mask-image:radial-gradient(72%_64%_at_50%_48%,#000_52%,transparent_100%)] drop-shadow-[0_28px_60px_rgba(0,0,0,0.85)]"
              />
                {/* Rim light */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_42%,rgba(110,231,249,0.16),transparent_70%)] mix-blend-screen" />
              </div>
            </div>

            {/* Scan sweep */}
            <div className="pointer-events-none absolute inset-x-[12%] inset-y-[18%] overflow-hidden rounded-[40px]">
              <div className="animate-scan h-16 w-full bg-[linear-gradient(180deg,transparent,rgba(110,231,249,0.22),transparent)]" />
            </div>

            {/* HUD chips */}
            {hudChips.map((chip) => (
              <div
                key={chip.label}
                className={cn(
                  "absolute hidden animate-float-slow items-center gap-2 rounded-xl glass px-3 py-2 sm:flex",
                  chip.pos,
                )}
                style={{ animationDelay: chip.delay }}
              >
                {chip.dot && (
                  <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ice-400 shadow-[0_0_10px_2px_rgba(110,231,249,0.6)]" />
                )}
                <span className="font-mono text-[9.5px] tracking-[0.22em] text-white/40">
                  {chip.label}
                </span>
                <span className={cn("text-[12.5px] font-medium", chip.tone)}>{chip.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Spec strip ───────────────────────────────────────── */}
      <div
        className="animate-rise relative z-10 mx-auto mt-14 w-full max-w-[1240px] lg:mt-20"
        style={{ animationDelay: "520ms" }}
      >
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass sm:grid-cols-3 lg:grid-cols-5">
          {heroSpecs.map((spec) => (
            <div
              key={spec.label}
              className="group relative px-5 py-5 transition-colors duration-500 hover:bg-white/[0.05]"
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                {spec.label}
              </dt>
              <dd className="mt-2 font-display text-[26px] font-semibold leading-none text-white">
                {spec.value}
                {spec.unit && (
                  <span className="ml-1 text-[13px] font-medium text-white/45">{spec.unit}</span>
                )}
              </dd>
              <span className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,#6EE7F9,transparent)] transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </dl>
      </div>

      {/* ── Scroll cue ───────────────────────────────────────── */}
      <div
        className="animate-rise relative z-10 mt-12 flex justify-center lg:mt-16"
        style={{ animationDelay: "640ms" }}
      >
        <a
          href="#features"
          className="group flex flex-col items-center gap-3"
          aria-label="Scroll to capabilities"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 transition-colors duration-500 group-hover:text-white/60">
            Scroll
          </span>
          <span className="relative h-12 w-px overflow-hidden bg-white/12">
            <span className="absolute inset-x-0 top-0 h-4 animate-scan bg-[linear-gradient(180deg,transparent,#6EE7F9,transparent)]" />
          </span>
        </a>
      </div>
    </section>
  );
}
