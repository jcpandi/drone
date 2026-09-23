import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { awards, partners, stats } from "@/data/content";
import { useCountUp, useInView } from "@/hooks/useMotion";

function StatBlock({
  value,
  suffix,
  label,
  decimals = 0,
  hint,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  hint?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const n = useCountUp(value, inView, 1800, decimals);
  const formatted = n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div ref={ref} className="group relative px-5 py-7 text-center sm:px-7">
      <div className="font-display text-[clamp(1.9rem,4vw,2.6rem)] font-semibold leading-none text-white">
        {formatted}
        <span className="bg-[linear-gradient(90deg,#6EE7F9,#A78BFA)] bg-clip-text text-transparent">
          {suffix}
        </span>
      </div>
      <div className="mt-2.5 text-[13.5px] text-white/55">{label}</div>
      {hint && <div className="mt-1 font-mono text-[10px] tracking-[0.16em] text-white/25">{hint}</div>}
      <span className="pointer-events-none absolute inset-x-6 bottom-2 h-px scale-x-0 bg-[linear-gradient(90deg,transparent,rgba(110,231,249,0.6),transparent)] transition-transform duration-700 group-hover:scale-x-100" />
    </div>
  );
}

export function SocialProof() {
  const loop = [...partners, ...partners];

  return (
    <section aria-label="Social proof" className="relative z-10 px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.3em] text-white/35">
            Flown by the people who go first
          </p>
        </Reveal>

        {/* Logo marquee */}
        <Reveal delay={100}>
          <div className="marquee mask-fade-x relative mt-8 overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
              {loop.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="select-none whitespace-nowrap font-display text-[15px] font-semibold tracking-[0.2em] text-white/35 transition-colors duration-500 hover:text-white/80 sm:text-[17px]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={160}>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass lg:grid-cols-4">
            {stats.map((s) => (
              <StatBlock key={s.label} {...s} />
            ))}
          </div>
        </Reveal>

        {/* Awards */}
        <Reveal delay={220}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {awards.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-2 text-[12.5px] text-white/40 transition-colors duration-300 hover:text-white/75"
              >
                <Icon name="star" className="h-3.5 w-3.5 text-ember-400" filled />
                {a}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
