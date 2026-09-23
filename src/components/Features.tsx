import { useCallback } from "react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features, microFeatures, type Feature } from "@/data/content";
import { cn } from "@/utils/cn";

const accentRing: Record<NonNullable<Feature["accent"]>, string> = {
  ice: "from-ice-400/25 to-ice-400/0 text-ice-300 shadow-[0_0_28px_-6px_rgba(110,231,249,0.55)]",
  aurora:
    "from-aurora-400/25 to-aurora-400/0 text-aurora-400 shadow-[0_0_28px_-6px_rgba(167,139,250,0.55)]",
  ember:
    "from-ember-400/25 to-ember-400/0 text-ember-300 shadow-[0_0_28px_-6px_rgba(255,155,77,0.55)]",
};

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const accent = feature.accent ?? "ice";

  const onMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  return (
    <Reveal delay={index * 80} className={cn("group", feature.span)}>
      <article
        onPointerMove={onMove}
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-[26px] glass p-6 sm:p-7",
          "transition-[transform,border-color,box-shadow] duration-500 ease-out",
          "hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_34px_70px_-40px_rgba(0,0,0,1)]",
        )}
      >
        {/* Pointer spotlight */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(340px circle at var(--mx, 50%) var(--my, 0%), rgba(255,255,255,0.09), transparent 62%)",
          }}
        />

        {feature.image && (
          <div className="relative -mx-6 -mt-6 mb-7 h-52 overflow-hidden sm:-mx-7 sm:-mt-7 sm:h-64 lg:h-[19rem]">
            <img
              src={feature.image}
              alt=""
              loading="lazy"
              className="h-full w-full scale-105 object-cover opacity-70 transition-transform duration-[1.6s] ease-out group-hover:scale-[1.14]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,10,0.25),rgba(4,5,10,0.92))]" />
            <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_10%,rgba(110,231,249,0.18),transparent_70%)]" />
            {feature.stat && (
              <div className="absolute bottom-4 left-6 flex items-baseline gap-2 sm:left-7">
                <span className="font-display text-2xl font-semibold text-white">
                  {feature.stat.value}
                </span>
                <span className="text-[12px] text-white/50">{feature.stat.label}</span>
              </div>
            )}
          </div>
        )}

        <div className="relative flex items-center gap-3">
          <span
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
              accentRing[accent],
            )}
          >
            <Icon name={feature.icon} className="h-[18px] w-[18px]" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
            {feature.eyebrow}
          </span>
        </div>

        <h3
          className={cn(
            "relative mt-4 font-display font-semibold leading-[1.15] text-white",
            feature.image ? "text-[22px] sm:text-[26px]" : "text-[19px] sm:text-[21px]",
          )}
        >
          {feature.title}
        </h3>

        <p className="relative mt-3 text-[14.5px] leading-relaxed text-white/55">{feature.body}</p>

        {!feature.image && feature.stat && (
          <div className="relative mt-5 flex items-baseline gap-2 border-t border-white/[0.07] pt-4">
            <span className="font-display text-xl font-semibold text-white">
              {feature.stat.value}
            </span>
            <span className="text-[12px] text-white/45">{feature.stat.label}</span>
          </div>
        )}

        <span className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)] transition-transform duration-700 group-hover:scale-x-100" />
      </article>
    </Reveal>
  );
}

export function Features() {
  return (
    <section id="features" className="relative z-10 scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              Everything you'd ask a pilot to do.
              <br className="hidden sm:block" />{" "}
              <span className="text-white/45">Without the pilot.</span>
            </>
          }
          body="We stripped out the parts of flying that get in the way of the adventure — the sticks, the setup, the second person on the ground — and engineered the rest to survive weather that grounds everything else."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>

        {/* Micro features */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {microFeatures.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 70}
              className="group flex items-start gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.05]"
            >
              <Icon
                name={m.icon}
                className="mt-0.5 h-[18px] w-[18px] shrink-0 text-white/45 transition-colors duration-500 group-hover:text-ice-300"
              />
              <div>
                <div className="text-[14px] font-medium text-white">{m.title}</div>
                <div className="mt-1 text-[13px] leading-relaxed text-white/45">{m.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
